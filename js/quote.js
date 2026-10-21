/* LLISR: a request for a human-reviewed proposal; no prices or booking checkout. */
(() => {
  'use strict';
  const form = document.getElementById('quote-form');
  if (!form) return;
  const copy = JSON.parse(form.dataset.copy);
  const loadedAt = Date.now();
  const endpoint = 'https://script.google.com/macros/s/AKfycby_Cnt7Y1mxcPiZrs0yIa2KIYF20xD1hJNxOwBR15D5nJIC4JKyIFmtMOEJLqpxR7-yzQ/exec';
  const get = id => document.getElementById(id);
  const boxes = [...form.querySelectorAll('input[name="services"]')];
  const summary = get('request-summary');
  const button = get('quote-submit');
  const error = get('quote-error');
  const selected = () => boxes.filter(box => box.checked).map(box => ({
    id: box.value, label: box.dataset.label, quantity: get(`qty-${box.value}`).value
  }));
  const textNode = (tag, text) => { const el = document.createElement(tag); el.textContent = text; return el; };
  function datesText() {
    const dates = [get('start').value, get('end').value].filter(Boolean).join(' → ');
    return get('flexible').checked ? `${copy.flex}${dates ? ` (${dates})` : ''}` : dates || copy.pending;
  }
  function refresh() {
    const items = selected();
    ['name', 'country'].forEach(id => get(id).setCustomValidity(get(id).value.trim() ? '' : `${copy[id]}: ${copy.pending}`));
    boxes[0].setCustomValidity('');
    get('activity').setCustomValidity(items.length || get('activity').value.trim() || get('service-notes').value.trim() ? '' : copy.validation);
    boxes.forEach(box => {
      get(`q-${box.value}`).hidden = !box.checked;
      get(`qty-${box.value}`).disabled = !box.checked;
      get(`qty-${box.value}`).required = box.checked;
    });
    const other = items.some(item => item.id === 'other');
    get('other-wrap').hidden = !other;
    get('other-detail').disabled = !other;
    get('other-detail').required = other;
    get('other-detail').setCustomValidity(other && !get('other-detail').value.trim() ? copy.othererror : '');
    const flexible = get('flexible').checked;
    get('start').required = get('end').required = !flexible;
    get('end').min = get('start').value;
    get('end').setCustomValidity(get('start').value && get('end').value && get('end').value < get('start').value ? copy.enderror : '');
    summary.replaceChildren();
    if (!items.length) summary.append(textNode('p', copy.empty));
    const list = document.createElement('ul');
    items.forEach(item => {
      const li = document.createElement('li');
      li.append(textNode('span', `${item.quantity || '—'} × ${item.label}`));
      const remove = textNode('button', copy.remove);
      remove.type = 'button'; remove.className = 'quote-remove';
      remove.setAttribute('aria-label', `${copy.remove}: ${item.label}`);
      remove.addEventListener('click', () => {
        const box = get(`s-${item.id}`); box.checked = false;
        refresh(); box.focus({ preventScroll: true });
      });
      li.append(remove); list.append(li);
    });
    summary.append(list);
    const dl = document.createElement('dl');
    [[copy.activity, get('activity').value.trim()], [copy.service_notes, get('service-notes').value.trim()]].forEach(([label, value]) => {
      if (value) dl.append(textNode('dt', label), textNode('dd', value));
    });
    [[copy.destination, [get('country').value.trim(),get('city').value.trim()].filter(Boolean).join(' / ') || copy.pending], [copy.dates, datesText()]].forEach(([label, value]) => {
      dl.append(textNode('dt',label), textNode('dd',value));
    });
    summary.append(dl);
    // Preserve only selected service types when switching the page language.
    form.closest('body').querySelectorAll('header nav a[lang]').forEach(link => {
      const url = new URL(link.getAttribute('href'), location.href);
      url.searchParams.delete('service'); url.searchParams.delete('services');
      if (items.length) url.searchParams.set('services',items.map(item => item.id).join(','));
      link.href = url.pathname + url.search;
    });
  }
  function message() {
    const lines = [copy.summarytitle,'',...(get('activity').value.trim() ? [`${copy.activity}:`, get('activity').value.trim(), ''] : []),...(get('service-notes').value.trim() ? [`${copy.service_notes}:`, get('service-notes').value.trim(), ''] : []),...selected().map(item => `${item.quantity} × ${item.label}${item.id === 'other' ? `: ${get('other-detail').value.trim()}` : ''}`),'',`${copy.country}: ${get('country').value.trim()}`,`${copy.city}: ${get('city').value.trim() || '—'}`,`${copy.dates}: ${datesText()}`];
    if (get('notes').value.trim()) lines.push('',`${copy.hours}:`,get('notes').value.trim());
    return lines.join('\n');
  }
  function contactMessage() {
    return `${message()}\n\n${copy.name}: ${get('name').value.trim()}\n${copy.email}: ${get('email').value.trim()}\n${copy.phone}: ${get('phone').value.trim() || '—'}\n${copy.company}: ${get('company').value.trim() || '—'}`;
  }
  function showFallback() {
    const body = contactMessage();
    get('quote-email').href = `mailto:liran@llisr.com?subject=${encodeURIComponent(copy.summarytitle)}&body=${encodeURIComponent(body)}`;
    get('quote-whatsapp').href = `https://wa.me/972523954958?text=${encodeURIComponent(body)}`;
    get('quote-fallback').hidden = false;
  }
  form.addEventListener('input', () => { refresh(); if (!get('quote-fallback').hidden) showFallback(); });
  form.addEventListener('change', refresh);
  form.addEventListener('submit', async event => {
    event.preventDefault(); refresh();
    if (!form.checkValidity()) { form.reportValidity(); return; }
    const data = new FormData(form);
    // The established inquiry endpoint reads message, name, email, phone and consent.
    // Put the whole service request in message so it is retained by the current Sheet.
    const submittedSummary = contactMessage();
    data.set('message',submittedSummary);
    data.set('language',document.documentElement.lang);
    data.set('pageUrl',location.href);
    data.set('loadedAt',String(loadedAt));
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(),20000);
    button.disabled = true; button.textContent = copy.sending;
    form.setAttribute('aria-busy','true'); error.hidden = true;
    try {
      const response = await fetch(endpoint,{method:'POST',body:data,signal:controller.signal});
      if (!response.ok) throw new Error('Request not confirmed');
      const result = await response.json();
      if (!result.ok) throw new Error('Request not accepted');
      get('sent-summary').textContent = submittedSummary;
      form.hidden = true; get('quote-success').hidden = false; get('quote-success').focus();
    } catch (_) {
      error.textContent = copy.failed; error.hidden = false; showFallback();
    } finally {
      clearTimeout(timeout); button.disabled = false; button.textContent = copy.send;
      form.removeAttribute('aria-busy');
    }
  });
  get('quote-edit').addEventListener('click', () => {
    get('quote-success').hidden = true; form.hidden = false;
    get('quote-error').hidden = true; get('quote-fallback').hidden = true;
    get('activity').focus();
  });
  const params = new URLSearchParams(location.search);
  const initial = (params.get('services') || params.get('service') || '').split(',');
  boxes.forEach(box => { box.checked = initial.includes(box.value); });
  refresh();
})();
