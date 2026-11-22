/* Les Privat Ungaran: skrip bersama. Isi web ada di data/site.js, bukan di sini. */
(function () {
  'use strict';
  document.documentElement.classList.add('js');
  var S = window.SITE || {};
  var page = document.body.getAttribute('data-page') || '';

  /* ---------- util ---------- */
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  var BULAN = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
  function tgl(s) {
    var p = String(s).split('-');
    if (p.length !== 3) return s;
    return parseInt(p[2], 10) + ' ' + BULAN[parseInt(p[1], 10) - 1] + ' ' + p[0];
  }
  function waLink(text) {
    return 'https://wa.me/' + S.wa + (text ? '?text=' + encodeURIComponent(text) : '');
  }
  var WA_ICON = '<svg class="wa-ico" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.8-.7-1.4-1.6-1.6-1.9-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5 3 1.2 3 .8 3.6.8.6-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3zM12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2z"/></svg>';
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  /* ---------- header, footer, tombol WA ---------- */
  var NAV = [
    ['index', 'index.html', 'Beranda'],
    ['layanan', 'layanan.html', 'Layanan'],
    ['galeri', 'galeri.html', 'Galeri'],
    ['pengumuman', 'pengumuman.html', 'Pengumuman'],
    ['lowongan', 'lowongan.html', 'Lowongan Tentor'],
    ['tentang', 'tentang.html', 'Tentang']
  ];
  function navLinks() {
    return NAV.map(function (n) {
      return '<a href="' + n[1] + '"' + (n[0] === page ? ' aria-current="page"' : '') + '>' + n[2] + '</a>';
    }).join('');
  }
  var top = document.createElement('div');
  top.innerHTML =
    '<a class="skip" href="#isi">Langsung ke isi halaman</a>' +
    '<header class="site-header"><div class="wrap">' +
    '<a class="brand" href="index.html" aria-label="' + esc(S.nama) + ', beranda"><img src="assets/img/logo.png" alt="' + esc(S.nama) + '" width="100" height="46"></a>' +
    '<nav class="nav" aria-label="Menu utama">' + navLinks() + '</nav>' +
    '<a class="btn btn-sm head-cta" href="daftar.html">Daftar sekarang</a>' +
    '<button class="menu-btn" type="button" aria-expanded="false" aria-controls="mnav" aria-label="Buka menu"><span></span><span></span><span></span></button>' +
    '</div><nav id="mnav" class="mobile-nav" aria-label="Menu seluler">' + navLinks() +
    '<a class="btn" href="daftar.html">Daftar sekarang</a></nav></header>';
  while (top.firstChild) document.body.insertBefore(top.lastChild, document.body.firstChild);
  // (urutan: dimasukkan dari belakang agar urutan asli terjaga)
  var mb = $('.menu-btn'), mn = $('#mnav');
  if (mb) mb.addEventListener('click', function () {
    var o = mn.classList.toggle('open');
    mb.setAttribute('aria-expanded', o ? 'true' : 'false');
    mb.setAttribute('aria-label', o ? 'Tutup menu' : 'Buka menu');
  });
  if (mn) $$('.mobile-nav a', mn).forEach(function (a) { a.addEventListener('click', function () { mn.classList.remove('open'); if (mb) { mb.setAttribute('aria-expanded', 'false'); mb.setAttribute('aria-label', 'Buka menu'); } }); });

  var soc = [];
  var sm = S.sosmed || {};
  [['instagram', 'Instagram'], ['tiktok', 'TikTok'], ['facebook', 'Facebook'], ['youtube', 'YouTube']].forEach(function (x) {
    if (sm[x[0]]) soc.push('<li><a href="' + esc(sm[x[0]]) + '" target="_blank" rel="noopener">' + x[1] + '</a></li>');
  });
  var foot = document.createElement('footer');
  foot.className = 'site-footer';
  foot.innerHTML = '<div class="wrap"><div class="foot-grid">' +
    '<div><span class="foot-logo"><img src="assets/img/logo.png" alt="' + esc(S.nama) + '"></span>' +
    '<p>Les privat ke rumah untuk PAUD sampai SMA di Ungaran dan sekitarnya. Melayani sejak ' + esc(S.sejak) + '.</p></div>' +
    '<div><h4>Halaman</h4><ul>' + NAV.map(function (n) { return '<li><a href="' + n[1] + '">' + n[2] + '</a></li>'; }).join('') + '<li><a href="daftar.html">Daftar</a></li></ul></div>' +
    '<div><h4>Hubungi kami</h4><ul><li><a href="' + waLink('Halo, saya ingin bertanya tentang les privat.') + '" target="_blank" rel="noopener">WhatsApp ' + esc(S.nomorTampil) + '</a></li>' +
    (S.email ? '<li>' + esc(S.email) + '</li>' : '') +
    '<li>' + esc(S.alamat) + '</li><li>' + esc(S.jamLayanan) + '</li>' + soc.join('') + '</ul></div>' +
    '</div><div class="legal-line">© ' + new Date().getFullYear() + ' ' + esc(S.nama) + '. Berdiri sejak ' + esc(S.sejak) + '.</div></div>';
  document.body.appendChild(foot);

  var fab = document.createElement('a');
  fab.className = 'fab'; fab.target = '_blank'; fab.rel = 'noopener';
  fab.href = waLink('Halo, saya ingin bertanya tentang les privat.');
  fab.setAttribute('aria-label', 'Chat WhatsApp');
  fab.innerHTML = WA_ICON;
  document.body.appendChild(fab);

  /* ---------- isian data sederhana ---------- */
  $$('[data-site]').forEach(function (e) {
    var k = e.getAttribute('data-site');
    if (S[k] != null && typeof S[k] !== 'object') e.textContent = S[k];
  });
  $$('[data-wa]').forEach(function (a) {
    a.href = waLink(a.getAttribute('data-wa')); a.target = '_blank'; a.rel = 'noopener';
    if (!a.querySelector('svg')) a.insertAdjacentHTML('afterbegin', WA_ICON);
  });
  $$('[data-render="area"]').forEach(function (e) { e.innerHTML = (S.area || []).map(function (a) { return '<span>' + esc(a) + '</span>'; }).join(''); });
  $$('[data-render="faq"]').forEach(function (e) {
    function daftar(a) { a = (a || []).slice(); return a.length > 1 ? a.slice(0, -1).join(', ') + ' dan ' + a[a.length - 1] : a.join(''); }
    var allMapel = []; Object.keys(S.mapel || {}).forEach(function (g) { S.mapel[g].forEach(function (x) { if (allMapel.indexOf(x) < 0) allMapel.push(x); }); });
    var isi = function (t) { return String(t).replace('{area}', daftar(S.area)).replace('{mapel}', daftar(allMapel)); };
    var items = S.faq || [], groups = [];
    items.forEach(function (f) {
      var name = f.kategori || 'Pertanyaan umum';
      var group = groups.filter(function (g) { return g.nama === name; })[0];
      if (!group) { group = { nama: name, items: [] }; groups.push(group); }
      group.items.push(f);
    });
    e.innerHTML = groups.map(function (g, gi) {
      return '<section class="faq-group"><h3>' + esc(g.nama) + '</h3><div class="faq-list">' + g.items.map(function (f, i) {
        return '<details' + (gi === 0 && i === 0 ? ' open' : '') + '><summary>' + esc(f.t) + '</summary><div class="faq-answer"><p>' + esc(isi(f.j)) + '</p></div></details>';
      }).join('') + '</div></section>';
    }).join('') + '<div class="faq-contact"><p>Masih ada pertanyaan atau ingin memastikan biaya dan jadwal?</p><a class="btn btn-green" data-wa="Halo, saya ingin konsultasi tentang les privat." href="#">Tanya admin melalui WhatsApp</a></div>';
    var contact = $('.faq-contact [data-wa]', e);
    if (contact) { contact.href = waLink(contact.getAttribute('data-wa')); contact.target = '_blank'; contact.rel = 'noopener'; contact.insertAdjacentHTML('afterbegin', WA_ICON); }
  });
  $$('[data-render="jenjang"]').forEach(function (e) {
    e.innerHTML = (S.jenjang || []).map(function (j) {
      return '<div class="level ' + esc(j.warna) + '"><div class="cover">' + esc(j.nama) + '</div><p>' + esc(j.isi) + '</p></div>';
    }).join('');
  });
  $$('[data-render="mapel"]').forEach(function (e) {
    var m = S.mapel || {};
    e.innerHTML = Object.keys(m).map(function (g) {
      return '<div class="mapel-group"><h3>' + esc(g) + '</h3><div class="chips">' + m[g].map(function (x) { return '<span>' + esc(x) + '</span>'; }).join('') + '</div></div>';
    }).join('');
  });
  $$('[data-render="legalitas"]').forEach(function (e) {
    e.innerHTML = (S.legalitas || []).map(function (l) {
      return '<div class="piagam"><div class="seal"><svg viewBox="0 0 24 24"><path d="M5 13l4 4L19 6"/></svg></div><h3>' + esc(l.nama) + '</h3><p>' + esc(l.nomor) + '</p></div>';
    }).join('');
  });
  $$('[data-render="perjalanan"]').forEach(function (e) {
    e.innerHTML = (S.perjalanan || []).map(function (p) { return '<li><b>' + esc(p.tahun) + '</b><p>' + esc(p.isi) + '</p></li>'; }).join('');
  });
  $$('[data-render="tim"]').forEach(function (e) {
    e.innerHTML = (S.tim || []).map(function (t) {
      return '<figure class="polaroid"><img src="' + esc(t.foto) + '" alt="Foto ' + esc(t.nama) + '" loading="lazy"><figcaption>' + esc(t.nama) + '<small>' + esc(t.peran) + '</small></figcaption></figure>';
    }).join('');
  });
  $$('[data-render="kontak"]').forEach(function (e) {
    e.innerHTML = '<dl><div><dt>Alamat</dt><dd>' + esc(S.alamat) + '</dd></div><div><dt>Jam layanan</dt><dd>' + esc(S.jamLayanan) + '</dd></div>' +
      '<div><dt>WhatsApp</dt><dd>' + esc(S.nomorTampil) + '</dd></div>' + (S.email ? '<div><dt>Email</dt><dd>' + esc(S.email) + '</dd></div>' : '') + '</dl>' +
      '<a class="btn btn-green btn-block" data-wa="Halo, saya ingin bertanya tentang les privat." href="#">Chat WhatsApp</a>';
    var a = $('[data-wa]', e); a.href = waLink(a.getAttribute('data-wa')); a.target = '_blank'; a.rel = 'noopener'; a.insertAdjacentHTML('afterbegin', WA_ICON);
  });
  $$('[data-render="peta"]').forEach(function (e) {
    if (S.petaUrl) e.innerHTML = '<iframe src="' + esc(S.petaUrl) + '" title="Peta lokasi ' + esc(S.nama) + '" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
  });
  $$('[data-render="syarat-umum"]').forEach(function (e) { e.innerHTML = (S.syaratUmum || []).map(function (x) { return '<li>' + esc(x) + '</li>'; }).join(''); });
  $$('[data-render="proses-lamar"]').forEach(function (e) {
    e.style.setProperty('--n', (S.prosesLamar || []).length);
    e.innerHTML = (S.prosesLamar || []).map(function (x) { return '<li><h3>' + esc(x) + '</h3></li>'; }).join('');
  });

  /* ---------- pengumuman ---------- */
  function sortedNews() {
    return (S.pengumuman || []).slice().sort(function (a, b) {
      if (!!b.sematkan !== !!a.sematkan) return b.sematkan ? 1 : -1;
      return String(b.tanggal).localeCompare(String(a.tanggal));
    });
  }
  function newsCard(p) {
    return '<article class="pin' + (p.sematkan ? ' sematkan' : '') + '">' + (p.sematkan ? '<span class="flag">penting!</span>' : '') +
      '<span class="tag ' + esc(p.kategori) + '">' + esc(p.kategori) + '</span><time datetime="' + esc(p.tanggal) + '">' + tgl(p.tanggal) + '</time>' +
      '<h3>' + esc(p.judul) + '</h3><p>' + esc(p.isi) + '</p></article>';
  }
  $$('[data-render="pengumuman-terbaru"]').forEach(function (e) {
    e.innerHTML = sortedNews().slice(0, 3).map(newsCard).join('');
  });
  $$('[data-render="pengumuman"]').forEach(function (e) {
    var cats = ['Semua'];
    sortedNews().forEach(function (p) { if (cats.indexOf(p.kategori) < 0) cats.push(p.kategori); });
    var fbar = $('#filter-pengumuman');
    function draw(c) {
      e.innerHTML = sortedNews().filter(function (p) { return c === 'Semua' || p.kategori === c; }).map(newsCard).join('') || '<p>Belum ada pengumuman di kategori ini.</p>';
    }
    if (fbar) {
      fbar.innerHTML = cats.map(function (c, i) { return '<button type="button" class="chip" aria-pressed="' + (i === 0) + '">' + esc(c) + '</button>'; }).join('');
      fbar.addEventListener('click', function (ev) {
        var b = ev.target.closest('.chip'); if (!b) return;
        $$('.chip', fbar).forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
        draw(b.textContent);
      });
    }
    draw('Semua');
  });

  /* ---------- lowongan (dengan filter kecamatan) ---------- */
  $$('[data-render="lowongan"]').forEach(function (e) {
    var all = S.lowongan || [];
    var sel = $('#filter-kec'), info = $('#info-lowongan');
    function card(l) {
      var buka = l.status !== 'Ditutup';
      return '<article class="job' + (buka ? '' : ' tutup') + '"><div class="job-head"><span>Dicari!</span><small>' + esc(l.status) + '</small></div><div class="job-body">' +
        '<h3>' + esc(l.judul) + '</h3><p class="meta">Mapel: ' + esc(l.mapel) + '<br>Kecamatan: ' + esc(l.area) + '</p><ul>' +
        (l.syarat || []).map(function (s) { return '<li>' + esc(s) + '</li>'; }).join('') + '</ul>' +
        (buka ? '<a class="btn btn-sm" href="daftar.html?tab=tentor&posisi=' + encodeURIComponent((l.judul + ', ' + l.area).replace(/^CONTOH:\s*/, '')) + '#tentor">Lamar posisi ini</a>' : '') +
        '</div></article>';
    }
    function draw() {
      var k = sel ? sel.value : '';
      var list = all.filter(function (l) { return !k || l.area === k; });
      e.innerHTML = list.map(card).join('') || '<p>Belum ada lowongan di kecamatan ini. Kirim lamaran umum, kami hubungi saat ada kebutuhan.</p>';
      if (info) info.textContent = list.filter(function (l) { return l.status !== 'Ditutup'; }).length + ' lowongan dibuka' + (k ? ' di ' + k : ' di ' + new Set(all.map(function (l) { return l.area; })).size + ' kecamatan');
    }
    if (sel) {
      var kec = []; all.forEach(function (l) { if (kec.indexOf(l.area) < 0) kec.push(l.area); });
      kec.sort();
      sel.innerHTML = '<option value="">Semua kecamatan</option>' + kec.map(function (k) { return '<option>' + esc(k) + '</option>'; }).join('');
      sel.addEventListener('change', draw);
    }
    draw();
  });

  /* ---------- galeri + lightbox ---------- */
  var lbItems = [], lbIdx = 0, lb;
  function polaroid(g, i, tag) {
    return '<' + tag + ' class="polaroid"' + (tag === 'button' ? ' type="button"' : '') + ' data-i="' + i + '" aria-label="Perbesar foto: ' + esc(g.judul) + '"><img src="' + esc(g.file) + '" alt="' + esc(g.judul) + '" loading="lazy"><span class="figcaption" style="display:block;font-family:var(--hand);font-size:1.45rem;font-weight:600;line-height:1.1;padding:10px 4px 12px;text-align:center">' + esc(g.judul) + '</span></' + tag + '>';
  }
  function openLb(i) {
    if (!lb) {
      lb = document.createElement('div');
      lb.className = 'lightbox'; lb.setAttribute('role', 'dialog'); lb.setAttribute('aria-modal', 'true'); lb.setAttribute('aria-label', 'Foto galeri');
      lb.innerHTML = '<button class="lb-btn lb-close" aria-label="Tutup">×</button><button class="lb-btn lb-prev" aria-label="Foto sebelumnya">‹</button><figure><img alt=""><figcaption></figcaption></figure><button class="lb-btn lb-next" aria-label="Foto berikutnya">›</button>';
      document.body.appendChild(lb);
      lb.addEventListener('click', function (ev) {
        if (ev.target.closest('.lb-close') || ev.target === lb) closeLb();
        else if (ev.target.closest('.lb-prev')) show(lbIdx - 1);
        else if (ev.target.closest('.lb-next')) show(lbIdx + 1);
      });
      document.addEventListener('keydown', function (ev) {
        if (!lb.classList.contains('open')) return;
        if (ev.key === 'Escape') closeLb();
        if (ev.key === 'ArrowLeft') show(lbIdx - 1);
        if (ev.key === 'ArrowRight') show(lbIdx + 1);
      });
    }
    lb._from = document.activeElement;
    lb.classList.add('open');
    show(i);
    $('.lb-close', lb).focus();
  }
  function show(i) {
    lbIdx = (i + lbItems.length) % lbItems.length;
    var g = lbItems[lbIdx];
    $('img', lb).src = g.file; $('img', lb).alt = g.judul; $('figcaption', lb).textContent = g.judul;
  }
  function closeLb() { lb.classList.remove('open'); if (lb._from && lb._from.focus) lb._from.focus(); }

  $$('[data-render="galeri-preview"]').forEach(function (e) {
    var arr = (S.galeri || []).slice(0, 6); lbItems = S.galeri || [];
    e.innerHTML = arr.map(function (g, i) { return polaroid(g, i, 'button'); }).join('');
    e.addEventListener('click', function (ev) { var b = ev.target.closest('.polaroid'); if (b) openLb(+b.getAttribute('data-i')); });
  });
  $$('[data-render="galeri"]').forEach(function (e) {
    var all = S.galeri || [], cats = ['Semua'];
    all.forEach(function (g) { if (cats.indexOf(g.kategori) < 0) cats.push(g.kategori); });
    var fbar = $('#filter-galeri');
    function draw(c) {
      lbItems = all.filter(function (g) { return c === 'Semua' || g.kategori === c; });
      e.innerHTML = lbItems.map(function (g, i) { return polaroid(g, i, 'button'); }).join('');
    }
    fbar.innerHTML = cats.map(function (c, i) { return '<button type="button" class="chip" aria-pressed="' + (i === 0) + '">' + esc(c) + '</button>'; }).join('');
    fbar.addEventListener('click', function (ev) {
      var b = ev.target.closest('.chip'); if (!b) return;
      $$('.chip', fbar).forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
      draw(b.textContent);
    });
    e.addEventListener('click', function (ev) { var b = ev.target.closest('.polaroid'); if (b) openLb(+b.getAttribute('data-i')); });
    draw('Semua');
  });
  $$('[data-render="galeri-hero"]').forEach(function (e) {
    var g = S.galeri || [], pick = [g[0], g[7], g[16]].filter(Boolean);
    var cls = ['p1', 'p2', 'p3'], cap = ['Belajar di rumah', 'Seru bersama tentor', 'Hari lomba'];
    e.insertAdjacentHTML('afterbegin', pick.map(function (x, i) {
      return '<figure class="polaroid ' + cls[i] + '"><img src="' + esc(x.file) + '" alt="' + esc(x.judul) + '"><figcaption>' + cap[i] + '</figcaption></figure>';
    }).join(''));
  });

  /* ---------- hero: PR dicentang satu per satu ---------- */
  $$('.pr-list li').forEach(function (li, i) { li.style.setProperty('--i', i); });
  window.addEventListener('load', function () {
    $$('.pr-list li').forEach(function (li) { li.classList.add('done'); });
  });

  /* ---------- formulir pendaftaran -> WhatsApp ---------- */
  var forms = $$('form[data-wa-form]');
  if (forms.length) {
    var flat = [];
    Object.keys(S.mapel || {}).forEach(function (g) { S.mapel[g].forEach(function (m) { if (flat.indexOf(m) < 0) flat.push(m); }); });
    $$('[data-chips="mapel"]').forEach(function (box) {
      var nm = box.getAttribute('data-name');
      box.innerHTML = flat.map(function (m) { return '<label><input type="checkbox" name="' + nm + '" value="' + esc(m) + '"><span>' + esc(m) + '</span></label>'; }).join('');
    });
    $$('select[data-area]').forEach(function (sel) {
      sel.innerHTML = '<option value="">Pilih area</option>' + (S.area || []).map(function (a) { return '<option>' + esc(a) + '</option>'; }).join('') + '<option>Lainnya (tulis di catatan)</option>';
    });

    var qs = new URLSearchParams(location.search);
    var tabs = $$('.tab'), panels = $$('[data-panel]');
    function pick(name) {
      tabs.forEach(function (t) { t.setAttribute('aria-selected', t.getAttribute('data-tab') === name ? 'true' : 'false'); });
      panels.forEach(function (p) { p.hidden = p.getAttribute('data-panel') !== name; });
      try { history.replaceState(null, '', '#' + name); } catch (e) { /* abaikan */ }
      refresh();
    }
    tabs.forEach(function (t) { t.addEventListener('click', function () { pick(t.getAttribute('data-tab')); }); });

    function build(form) {
      var lines = [], title = form.getAttribute('data-title');
      var seen = {};
      $$('[data-label]', form).forEach(function (f) {
        var lab = f.getAttribute('data-label'), val = '';
        if (f.matches('[data-chips]')) {
          val = $$('input:checked', f).map(function (c) { return c.value; }).join(', ');
        } else { val = (f.value || '').trim(); }
        if (seen[lab]) return; seen[lab] = 1;
        if (!val && !(f.required || (f.matches('[data-chips]') && lab === 'Mapel'))) return;
        lines.push(lab + ': ' + (val || '-'));
      });
      return '*' + title + '*\n\n' + lines.join('\n') + '\n\nMohon info lebih lanjut. Terima kasih.';
    }
    function refresh() {
      forms.forEach(function (f) {
        if (f.closest('[data-panel]').hidden) return;
        var pv = $('[data-preview]'); if (pv) pv.textContent = build(f);
      });
    }
    forms.forEach(function (f) {
      f.addEventListener('input', refresh); f.addEventListener('change', refresh);
      f.addEventListener('submit', function (ev) {
        ev.preventDefault();
        var err = $('.form-error', f);
        if (!f.checkValidity()) {
          err.hidden = false; err.textContent = 'Lengkapi dulu kolom yang bertanda wajib, lalu kirim lagi.';
          f.reportValidity(); return;
        }
        err.hidden = true;
        var w = window.open(waLink(build(f)), '_blank');
        if (!w) location.href = waLink(build(f));
      });
    });
    var copy = $('[data-copy]');
    if (copy) copy.addEventListener('click', function () {
      var t = $('[data-preview]').textContent;
      if (navigator.clipboard) navigator.clipboard.writeText(t).then(function () { copy.textContent = 'Pesan tersalin'; setTimeout(function () { copy.textContent = 'Salin pesan'; }, 2000); });
    });

    var want = (location.hash || '').replace('#', '') || qs.get('tab') || 'murid';
    if (qs.get('posisi')) { var ps = $('[name="posisi"]'); if (ps) ps.value = qs.get('posisi'); }
    pick(want === 'tentor' ? 'tentor' : 'murid');
    if (location.hash) window.scrollTo(0, 0);
  }
})();
