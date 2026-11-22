/* Formulir pendaftaran murid & tentor -> pesan WhatsApp.
   Tampil bertahap di HP, ada kode referensi, halaman konfirmasi, dan rekap Google Sheet (opsional). */
(function () {
  'use strict';
  var LP = window.LP;
  if (!LP) return;
  var S = LP.S, $ = LP.$, $$ = LP.$$, esc = LP.esc, waLink = LP.waLink, WA_ICON = LP.WA_ICON;
  var forms = $$('form[data-wa-form]');
  if (!forms.length) return;

  /* ---------- sumber pilihan ---------- */
  var mapelAll = [];
  Object.keys(S.mapel || {}).forEach(function (g) {
    S.mapel[g].forEach(function (m) { if (mapelAll.indexOf(m) < 0) mapelAll.push(m); });
  });
  var SOURCES = {
    mapel: mapelAll,
    kecamatan: S.kecamatan || [],
    tujuan: S.tujuanBelajar || [],
    sumber: S.sumberInfo || [],
    statusTentor: S.statusTentor || []
  };

  $$('[data-chips]').forEach(function (box) {
    var list = box.hasAttribute('data-source') ? (SOURCES[box.getAttribute('data-source')] || []) : (box.getAttribute('data-options') || '').split('|');
    var nm = box.getAttribute('data-name');
    box.innerHTML = list.map(function (v) {
      return '<label><input type="checkbox" name="' + nm + '" value="' + esc(v) + '"><span>' + esc(v) + '</span></label>';
    }).join('');
    if (box.hasAttribute('data-required')) box.parentNode.insertAdjacentHTML('beforeend', '<p class="field-error" hidden>Pilih minimal satu.</p>');
  });
  $$('select[data-source]').forEach(function (sel) {
    var list = SOURCES[sel.getAttribute('data-source')] || [];
    var extra = sel.getAttribute('data-extra');
    sel.innerHTML = '<option value="">' + esc(sel.getAttribute('data-ph') || 'Pilih') + '</option>' +
      list.concat(extra ? [extra] : []).map(function (v) { return '<option>' + esc(v) + '</option>'; }).join('');
  });
  $$('[data-render="aturan-tentor"]').forEach(function (e) {
    e.innerHTML = (S.aturanTentor || []).map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('');
  });
  var rekapUrl = S.rekap && S.rekap.url;
  $$('[data-privasi]').forEach(function (e) {
    e.textContent = rekapUrl
      ? 'Data Anda juga dicatat admin untuk keperluan pendaftaran dan hanya dipakai untuk menghubungi Anda.'
      : 'Data tidak disimpan di web ini. Pesan hanya dikirim lewat WhatsApp Anda sendiri.';
  });

  /* ---------- kode referensi ---------- */
  function kode(prefix) {
    var d = new Date(), pad = function (n) { return (n < 10 ? '0' : '') + n; };
    var abc = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789', r = '';
    for (var i = 0; i < 4; i++) r += abc.charAt(Math.floor(Math.random() * abc.length));
    return prefix + '-' + String(d.getFullYear()).slice(2) + pad(d.getMonth() + 1) + pad(d.getDate()) + '-' + r;
  }

  /* ---------- kumpulkan isi & susun pesan ---------- */
  function collect(form) {
    return $$('[data-step]', form).map(function (st) {
      var lines = [];
      $$('[data-label]', st).forEach(function (f) {
        var lab = f.getAttribute('data-label'), val;
        if (f.hasAttribute('data-chips')) val = $$('input:checked', f).map(function (c) { return c.value; }).join(', ');
        else if (f.type === 'checkbox') val = f.checked ? 'Ya' : '';
        else val = (f.value || '').trim();
        var req = f.required || f.hasAttribute('data-required');
        if (!val && !req) return;
        lines.push([lab, val || '-']);
      });
      return { title: st.getAttribute('data-step-title'), lines: lines };
    });
  }
  function message(form) {
    var secs = collect(form).filter(function (s) { return s.lines.length; });
    return '*' + form.getAttribute('data-title') + '*\nKode: ' + form._kode + '\n\n' +
      secs.map(function (s) {
        return '*' + s.title + '*\n' + s.lines.map(function (l) { return l[0] + ': ' + l[1]; }).join('\n');
      }).join('\n\n') + '\n\nMohon info lebih lanjut. Terima kasih.';
  }
  function activeForm() {
    var f = null;
    forms.forEach(function (x) { if (!x.closest('[data-panel]').hidden) f = x; });
    return f;
  }
  function refresh() {
    var f = activeForm(), pv = $('[data-preview]');
    if (f && pv) pv.textContent = message(f);
  }

  /* ---------- langkah (stepper) di layar kecil ---------- */
  var mq = window.matchMedia('(max-width: 699px)');
  forms.forEach(function (form) {
    form._kode = kode(form.getAttribute('data-prefix') || 'X');
    form._steps = $$('[data-step]', form);
    form._cur = 0;
    var dots = form._steps.map(function (s, i) { return '<i data-i="' + i + '"></i>'; }).join('');
    form.insertAdjacentHTML('afterbegin', '<div class="stepbar" aria-live="polite"><div class="dots">' + dots + '</div><p></p></div>');
    form.insertAdjacentHTML('beforeend',
      '<div class="step-nav"><button type="button" class="btn btn-white btn-prev">Kembali</button>' +
      '<button type="button" class="btn btn-next">Lanjut</button>' +
      '<button type="submit" class="btn btn-send">Periksa dan kirim</button></div>');
  });
  function goStep(form, i, scroll) {
    form._cur = Math.max(0, Math.min(i, form._steps.length - 1));
    form._steps.forEach(function (s, k) { s.classList.toggle('cur', k === form._cur); });
    form.classList.toggle('first', form._cur === 0);
    form.classList.toggle('last', form._cur === form._steps.length - 1);
    $$('.stepbar i', form).forEach(function (d, k) { d.className = k < form._cur ? 'done' : (k === form._cur ? 'on' : ''); });
    $('.stepbar p', form).textContent = 'Langkah ' + (form._cur + 1) + ' dari ' + form._steps.length + ': ' + form._steps[form._cur].getAttribute('data-step-title');
    if (scroll && mq.matches) form.closest('.form-paper').scrollIntoView({ block: 'start', behavior: 'smooth' });
  }
  function applyMode() {
    forms.forEach(function (f) { f.classList.toggle('stepped', mq.matches); goStep(f, f._cur, false); });
  }
  if (mq.addEventListener) mq.addEventListener('change', applyMode); else mq.addListener(applyMode);
  applyMode();

  /* ---------- validasi ---------- */
  function firstInvalid(root) {
    var els = $$('input, select, textarea', root).filter(function (el) { return el.required && !el.disabled && el.type !== 'hidden'; });
    for (var i = 0; i < els.length; i++) if (!els[i].checkValidity()) return els[i];
    var groups = $$('[data-chips][data-required]', root);
    for (var j = 0; j < groups.length; j++) if (!$('input:checked', groups[j])) return groups[j];
    return null;
  }
  function showProblem(form, el) {
    var st = el.closest('[data-step]');
    goStep(form, form._steps.indexOf(st), true);
    var err = $('.form-error', form);
    err.hidden = false;
    err.textContent = 'Lengkapi dulu kolom yang wajib diisi, lalu lanjut.';
    if (el.hasAttribute('data-chips')) {
      var fe = $('.field-error', el.parentNode); if (fe) fe.hidden = false;
      var first = $('input', el); if (first) first.focus();
    } else {
      el.focus();
      if (el.reportValidity) el.reportValidity();
    }
  }
  forms.forEach(function (form) {
    form.addEventListener('change', function (ev) {
      var g = ev.target.closest && ev.target.closest('[data-chips]');
      if (g) { var fe = $('.field-error', g.parentNode); if (fe && $('input:checked', g)) fe.hidden = true; }
    });
    form.addEventListener('click', function (ev) {
      if (ev.target.closest('.btn-prev')) { goStep(form, form._cur - 1, true); return; }
      if (ev.target.closest('.btn-next')) {
        var bad = firstInvalid(form._steps[form._cur]);
        if (bad) return showProblem(form, bad);
        $('.form-error', form).hidden = true;
        goStep(form, form._cur + 1, true);
      }
    });
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      var bad = firstInvalid(form);
      if (bad) return showProblem(form, bad);
      $('.form-error', form).hidden = true;
      if ($('[name="website"]', form).value) return; // jebakan bot
      openConfirm(form);
    });
    form.addEventListener('input', refresh);
    form.addEventListener('change', refresh);
  });

  /* ---------- konfirmasi & kirim ---------- */
  var modal;
  function openConfirm(form) {
    if (!modal) {
      modal = document.createElement('div');
      modal.className = 'modal';
      modal.setAttribute('role', 'dialog'); modal.setAttribute('aria-modal', 'true'); modal.setAttribute('aria-labelledby', 'mt');
      document.body.appendChild(modal);
      modal.addEventListener('click', function (ev) {
        if (ev.target === modal || ev.target.closest('[data-close]')) closeModal();
      });
      document.addEventListener('keydown', function (ev) { if (ev.key === 'Escape' && modal.classList.contains('open')) closeModal(); });
    }
    var msg = message(form);
    modal._from = document.activeElement;
    modal.innerHTML = '<div class="modal-box"><h2 id="mt">Satu langkah lagi</h2>' +
      '<p>Kode pendaftaran Anda: <b class="kode">' + esc(form._kode) + '</b></p>' +
      '<ol class="mini-steps"><li>Tekan <b>Buka WhatsApp</b>.</li><li>Di WhatsApp, tekan tombol kirim pada pesan yang sudah terisi.</li><li>' + esc(form.getAttribute('data-next')) + '</li></ol>' +
      '<div class="btn-row"><button type="button" class="btn btn-green" data-go>' + WA_ICON + ' Buka WhatsApp</button>' +
      '<button type="button" class="btn btn-white" data-close>Periksa lagi</button></div>' +
      '<p class="sent" hidden>Jika WhatsApp belum terbuka, <button type="button" class="linklike" data-copy-msg>salin pesan</button> lalu kirim manual ke ' + esc(S.nomorTampil) + '. Sebutkan kode di atas.</p></div>';
    modal.classList.add('open');
    $('[data-go]', modal).focus();
    $('[data-go]', modal).addEventListener('click', function () {
      var w = window.open(waLink(msg), '_blank');
      if (!w) location.href = waLink(msg);
      sendRekap(form);
      $('.sent', modal).hidden = false;
    });
    $('[data-copy-msg]', modal).addEventListener('click', function (ev) {
      if (navigator.clipboard) navigator.clipboard.writeText(msg).then(function () { ev.target.textContent = 'pesan tersalin'; });
    });
  }
  function closeModal() {
    modal.classList.remove('open');
    if (modal._from && modal._from.focus) modal._from.focus();
  }

  /* ---------- rekap ke Google Sheet (opsional) ---------- */
  function sendRekap(form) {
    if (!rekapUrl) return;
    var data = {};
    collect(form).forEach(function (s) { s.lines.forEach(function (l) { data[l[0]] = l[1]; }); });
    var payload = { kode: form._kode, jenis: form.getAttribute('data-prefix') === 'T' ? 'TENTOR' : 'MURID', waktu: new Date().toISOString(), data: data };
    try {
      fetch(rekapUrl, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(payload), keepalive: true });
    } catch (e) { /* rekap gagal tidak boleh menghalangi pendaftaran */ }
  }

  /* ---------- tab, salin, isi otomatis dari tautan ---------- */
  var tabs = $$('.tab'), panels = $$('[data-panel]');
  function pick(name) {
    tabs.forEach(function (t) { t.setAttribute('aria-selected', t.getAttribute('data-tab') === name ? 'true' : 'false'); });
    panels.forEach(function (p) { p.hidden = p.getAttribute('data-panel') !== name; });
    try { history.replaceState(null, '', '#' + name); } catch (e) { /* abaikan */ }
    refresh();
  }
  tabs.forEach(function (t) { t.addEventListener('click', function () { pick(t.getAttribute('data-tab')); }); });
  var copy = $('[data-copy]');
  if (copy) copy.addEventListener('click', function () {
    var t = $('[data-preview]').textContent;
    if (navigator.clipboard) navigator.clipboard.writeText(t).then(function () {
      copy.textContent = 'Pesan tersalin'; setTimeout(function () { copy.textContent = 'Salin pesan'; }, 2000);
    });
  });

  var qs = new URLSearchParams(location.search);
  var want = (location.hash || '').replace('#', '') || qs.get('tab') || 'murid';
  if (qs.get('posisi')) { var ps = $('[name="posisi"]'); if (ps) ps.value = qs.get('posisi'); }
  if (qs.get('kec')) {
    $$('input[name="area"]').forEach(function (c) { if (c.value === qs.get('kec')) c.checked = true; });
  }
  pick(want === 'tentor' ? 'tentor' : 'murid');
  if (location.hash) window.scrollTo(0, 0);
})();
