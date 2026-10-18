/* Mezun Arama · Cerrahpaşa 199. Dönem — kaynak: arama/src (özel depo), araclar/web-olustur.js ile üretildi */
window.MEZUN_AYAR = {"veriUrl":"https://script.google.com/macros/s/AKfycbzYhnwxo_qUcBKUdql6eBL5h5143xiSDVCckISraadfD_YLXt9DXX7fI56z5EMTDomt3w/exec?format=json"};
/* Harita verisi: 81 ilin merkez koordinatı [enlem, boylam] ve Türkiye'nin sadeleştirilmiş kıyı/sınır çizgisi.
     Kabaca çizilmiş bir ana hattır; ilçe/il sınırı içermez, sadece kabarcıkları yerleştirmek için. */
  var IL_KONUM = {
    'Adana': [37.00, 35.32], 'Adıyaman': [37.76, 38.28], 'Afyonkarahisar': [38.76, 30.54], 'Ağrı': [39.72, 43.05],
    'Aksaray': [38.37, 34.03], 'Amasya': [40.65, 35.83], 'Ankara': [39.93, 32.86], 'Antalya': [36.89, 30.71],
    'Ardahan': [41.11, 42.70], 'Artvin': [41.18, 41.82], 'Aydın': [37.84, 27.84], 'Balıkesir': [39.65, 27.88],
    'Bartın': [41.63, 32.34], 'Batman': [37.88, 41.13], 'Bayburt': [40.26, 40.23], 'Bilecik': [40.14, 29.98],
    'Bingöl': [38.88, 40.50], 'Bitlis': [38.40, 42.11], 'Bolu': [40.74, 31.61], 'Burdur': [37.72, 30.29],
    'Bursa': [40.19, 29.06], 'Çanakkale': [40.15, 26.41], 'Çankırı': [40.60, 33.62], 'Çorum': [40.55, 34.95],
    'Denizli': [37.78, 29.09], 'Diyarbakır': [37.91, 40.24], 'Düzce': [40.84, 31.16], 'Edirne': [41.68, 26.56],
    'Elazığ': [38.68, 39.22], 'Erzincan': [39.75, 39.49], 'Erzurum': [39.90, 41.27], 'Eskişehir': [39.78, 30.52],
    'Gaziantep': [37.07, 37.38], 'Giresun': [40.91, 38.39], 'Gümüşhane': [40.46, 39.48], 'Hakkari': [37.57, 43.74],
    'Hatay': [36.20, 36.16], 'Iğdır': [39.92, 44.04], 'Isparta': [37.76, 30.55], 'İstanbul': [41.01, 28.98],
    'İzmir': [38.42, 27.14], 'Kahramanmaraş': [37.58, 36.94], 'Karabük': [41.20, 32.62], 'Karaman': [37.18, 33.22],
    'Kars': [40.60, 43.10], 'Kastamonu': [41.38, 33.78], 'Kayseri': [38.73, 35.48], 'Kırıkkale': [39.85, 33.51],
    'Kırklareli': [41.73, 27.22], 'Kırşehir': [39.15, 34.17], 'Kilis': [36.72, 37.12], 'Kocaeli': [40.77, 29.92],
    'Konya': [37.87, 32.48], 'Kütahya': [39.42, 29.98], 'Malatya': [38.35, 38.31], 'Manisa': [38.61, 27.43],
    'Mardin': [37.31, 40.74], 'Mersin': [36.80, 34.64], 'Muğla': [37.22, 28.36], 'Muş': [38.74, 41.49],
    'Nevşehir': [38.62, 34.71], 'Niğde': [37.97, 34.68], 'Ordu': [40.98, 37.88], 'Osmaniye': [37.07, 36.25],
    'Rize': [41.02, 40.52], 'Sakarya': [40.69, 30.44], 'Samsun': [41.29, 36.33], 'Siirt': [37.93, 41.94],
    'Sinop': [42.03, 35.15], 'Sivas': [39.75, 37.02], 'Şanlıurfa': [37.16, 38.79], 'Şırnak': [37.52, 42.46],
    'Tekirdağ': [40.98, 27.51], 'Tokat': [40.31, 36.55], 'Trabzon': [41.00, 39.72], 'Tunceli': [39.11, 39.55],
    'Uşak': [38.68, 29.41], 'Van': [38.49, 43.38], 'Yalova': [40.65, 29.27], 'Yozgat': [39.82, 34.81],
    'Zonguldak': [41.45, 31.79]
  };
  // [enlem, boylam] noktaları; Anadolu ve Trakya ayrı çokgen
  var TR_SINIR = [
    [[41.20, 29.10], [41.13, 30.30], [41.20, 31.40], [41.60, 32.30], [41.90, 33.30], [42.02, 34.50], [42.10, 35.20],
     [41.72, 35.90], [41.35, 36.40], [41.30, 36.90], [41.05, 37.60], [41.00, 38.30], [40.97, 39.00], [41.03, 39.80],
     [41.10, 40.40], [41.38, 41.10], [41.52, 41.55], [41.35, 42.40], [41.25, 42.85], [41.05, 43.45], [40.60, 43.70],
     [40.10, 43.65], [39.95, 44.30], [39.70, 44.80], [39.40, 44.45], [38.85, 44.30], [38.35, 44.40], [37.75, 44.60],
     [37.30, 44.80], [37.10, 44.30], [37.30, 43.40], [37.15, 42.40], [37.30, 41.80], [37.10, 41.20], [36.85, 40.20],
     [36.70, 39.10], [36.68, 38.20], [36.85, 37.40], [36.65, 36.70], [36.25, 36.70], [35.85, 36.15], [36.20, 35.80],
     [36.60, 36.15], [36.80, 35.80], [36.55, 35.40], [36.75, 34.60], [36.30, 34.00], [36.10, 33.40], [36.15, 32.80],
     [36.55, 32.00], [36.85, 31.00], [36.85, 30.65], [36.40, 30.50], [36.20, 29.70], [36.55, 29.10], [36.70, 28.20],
     [37.00, 27.40], [37.50, 27.15], [37.95, 26.40], [38.30, 26.30], [38.60, 26.75], [39.00, 26.75], [39.50, 26.10],
     [40.00, 26.20], [40.40, 26.70], [40.35, 27.50], [40.40, 28.10], [40.40, 29.00], [40.75, 29.90], [40.85, 29.30],
     [41.00, 29.05]],
    [[41.20, 29.05], [41.00, 28.95], [40.97, 28.00], [40.60, 27.20], [40.30, 26.60], [40.05, 26.20], [40.60, 26.05],
     [40.85, 26.30], [41.30, 26.35], [41.70, 26.35], [42.00, 26.60], [41.95, 27.50], [42.08, 28.00], [41.60, 28.10],
     [41.30, 28.80]]
  ];
(function () {
  'use strict';

  // ---------------------------------------------------------------- Veri ve yardımcılar
  var HARF = { 'ç': 'c', 'ğ': 'g', 'ı': 'i', 'ö': 'o', 'ş': 's', 'ü': 'u', 'â': 'a', 'î': 'i', 'û': 'u' };
  // Büyük/küçük harf ve Türkçe karakter farkını yok sayar ("sisli" = "Şişli"); uzunluk değişmez (işaretleme için)
  function sade(s) {
    return String(s).toLocaleLowerCase('tr').replace(/[çğıöşüâîû]/g, function (h) { return HARF[h]; });
  }
  function sirala(a, b) { return a.localeCompare(b, 'tr'); }
  function $(id) { return document.getElementById(id); }
  function yap(etiket, sinif, yazi) {
    var e = document.createElement(etiket);
    if (sinif) e.className = sinif;
    if (yazi != null) e.textContent = yazi;
    return e;
  }
  function dugme(sinif, yazi, tikla) {
    var b = yap('button', sinif, yazi);
    b.type = 'button';
    if (tikla) b.addEventListener('click', tikla);
    return b;
  }
  var IKON = {
    kurum: '<path d="M4 21V7l8-4 8 4v14"/><path d="M12 9v6M9 12h6M9 21v-3h6v3"/>',
    sehir: '<path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
    asagi: '<path d="M6 9l6 6 6-6"/>',
    ara: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>',
    grup: '<path d="M4 6h16M4 12h10M4 18h6"/>',
    ev: '<path d="M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"/><path d="M12 8v6M9 11h6"/>',
    paylas: '<path d="M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7M16 6l-4-4-4 4M12 2v13"/>',
    ok: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    ileri: '<path d="M9 6l6 6-6 6"/>',
    kisiler: '<circle cx="9" cy="8" r="4"/><path d="M2 21a7 7 0 0 1 14 0M17 4a4 4 0 0 1 0 8M22 21a7 7 0 0 0-4-6.3"/>',
    brans: '<path d="M6 3v6a6 6 0 0 0 12 0V3"/><path d="M12 15v3a3 3 0 0 0 6 0v-1"/><circle cx="18" cy="15" r="2"/>',
    harita: '<path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2-6-2z"/><path d="M9 4v14M15 6v14"/>'
  };
  function ikon(ad) {
    var s = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    s.setAttribute('class', 'i');
    s.setAttribute('viewBox', '0 0 24 24');
    s.setAttribute('aria-hidden', 'true');
    s.innerHTML = IKON[ad];
    return s;
  }

  // İki ortam: Apps Script sayfasında VERI ve BASLANGIC sayfaya gömülü gelir; GitHub Pages'te (window.MEZUN_AYAR)
  // veri ağdan çekilir, son veri cihazda saklanır ki sayfa ikinci açılışta anında dolsun.
  var AYAR = window.MEZUN_AYAR || null;
  var SATIR = [], ARANAN = [], ZAMAN = '';
  function veriKur(v) {
    SATIR = ((v && v.satirlar) || []).slice().sort(function (a, b) { return sirala(a[0], b[0]); });
    ARANAN = SATIR.map(function (r) { return sade(r.join(' ')); });
    ZAMAN = (v && v.zaman) || '';
  }
  var SUTUN = { sehir: 1, kurum: 2, brans: 3 };
  var AD = { sehir: 'Şehir', kurum: 'Hastane / kurum', brans: 'Branş' };
  var GRUP_AD = { '': 'Gruplama yok', sehir: 'Şehre göre', kurum: 'Hastaneye göre', brans: 'Branşa göre' };
  var ILK = 40, EK = 60;  // ilk çizilen kart sayısı, kaydırdıkça eklenen
  var SERVIS_URL = AYAR ? location.origin + location.pathname : ($('servisLink').getAttribute('href') || '');
  var FORM_URL = $('formLink').getAttribute('href');
  if (!window.BASLANGIC) {
    window.BASLANGIC = {};
    if (window.URLSearchParams) new URLSearchParams(location.search).forEach(function (v, k) { BASLANGIC[k] = v; });
  }

  var durum = { sehir: '', kurum: '', brans: '', ara: '', grup: '' };
  Object.keys(durum).forEach(function (k) { if (BASLANGIC[k]) durum[k] = BASLANGIC[k]; });
  if (!GRUP_AD.hasOwnProperty(durum.grup)) durum.grup = '';

  var depo = {
    al: function (k) { try { return localStorage.getItem('mezunArama.' + k) || ''; } catch (e) { return ''; } },
    koy: function (k, v) { try { localStorage.setItem('mezunArama.' + k, v); } catch (e) { /* gizli sekme */ } }
  };

  function tur(brans) {
    if (/asistan/i.test(brans)) return 'asistan';
    if (/pratisyen/i.test(brans)) return 'pratisyen';
    return brans ? 'diger' : 'bos';
  }
  function kelimeler() { return sade(durum.ara).split(/\s+/).filter(Boolean); }

  /** Filtrelere (atla: o sütunun filtresi yok sayılır) ve aramaya uyan satırlar. */
  function uyanlar(atla) {
    var k = kelimeler();
    var out = [];
    for (var n = 0; n < SATIR.length; n++) {
      var r = SATIR[n], uy = true;
      for (var ad in SUTUN) {
        if (ad !== atla && durum[ad] && r[SUTUN[ad]] !== durum[ad]) { uy = false; break; }
      }
      if (!uy) continue;
      for (var j = 0; j < k.length; j++) if (ARANAN[n].indexOf(k[j]) < 0) { uy = false; break; }
      if (uy) out.push(r);
    }
    return out;
  }

  /** [[değer, sayı], …] — en kalabalık önce, eşitse alfabetik. */
  function sayim(sutun, satirlar) {
    var g = {};
    satirlar.forEach(function (r) { var v = r[sutun]; if (v) g[v] = (g[v] || 0) + 1; });
    return Object.keys(g).map(function (k) { return [k, g[k]]; })
      .sort(function (a, b) { return b[1] - a[1] || sirala(a[0], b[0]); });
  }

  /** Aranan kelimeleri <mark> ile işaretleyerek yazar (metin her zaman textContent ile, HTML olarak değil). */
  function isaretle(kap, yazi, k) {
    var s = sade(yazi), ar = [];
    k.forEach(function (w) {
      for (var i = s.indexOf(w); i >= 0; i = s.indexOf(w, i + 1)) ar.push([i, i + w.length]);
    });
    if (!ar.length || s.length !== yazi.length) { kap.textContent = yazi; return kap; }
    ar.sort(function (a, b) { return a[0] - b[0]; });
    var son = 0;
    ar.forEach(function (a) {
      if (a[1] <= son) return;
      var bas = Math.max(a[0], son);
      if (bas > son) kap.appendChild(document.createTextNode(yazi.slice(son, bas)));
      kap.appendChild(yap('mark', null, yazi.slice(bas, a[1])));
      son = a[1];
    });
    if (son < yazi.length) kap.appendChild(document.createTextNode(yazi.slice(son)));
    return kap;
  }

  var bildirimSaat;
  function bildir(yazi) {
    var b = $('bildirim');
    b.textContent = yazi;
    b.classList.add('acik');
    clearTimeout(bildirimSaat);
    bildirimSaat = setTimeout(function () { b.classList.remove('acik'); }, 2200);
  }

  // ---------------------------------------------------------------- Gezinme (sayfa yığını, geri tuşu)
  // Sayfalar: ozet (ana sayfa), liste (mezunlar), kategori (şehirler/branşlar/hastaneler). Her geçiş geçmişe
  // eklenir; üst çubuktaki ok ve telefonun geri tuşu bir önceki sayfaya (filtreleriyle birlikte) döner.
  // Apps Script'te google.script.history, GitHub Pages'te tarayıcının kendi geçmişi kullanılır.
  var GS = (window.google && google.script && google.script.history) ? google.script.history : null;
  var WEB = !GS && !!(window.history && history.pushState);
  var gorunum = 'ozet', kategori = '', yigin = [];
  var KATEGORI = {
    sehir: { baslik: 'Şehirler', birim: 'şehir', sutun: 1, grup: 'kurum', ikon: 'sehir' },
    brans: { baslik: 'Branşlar', birim: 'branş', sutun: 3, grup: 'sehir', ikon: 'brans' },
    kurum: { baslik: 'Hastaneler / kurumlar', birim: 'kurum', sutun: 2, grup: '', ikon: 'kurum' }
  };

  function gecmisEkle(st) { if (GS) GS.push(st, {}); else if (WEB) history.pushState(st, ''); }
  function gecmisDegistir(st) { if (GS) GS.replace(st, {}); else if (WEB) history.replaceState(st, ''); }
  function kopya(d) { var k = {}; for (var a in d) k[a] = d[a]; return k; }
  function simdiki() { return { g: gorunum, k: kategori, d: kopya(durum) }; }

  function goster(st) {
    gorunum = st.g || 'ozet';
    kategori = st.k || '';
    if (st.d) { durum = kopya(st.d); $('ara').value = durum.ara || ''; }
    $('gOzet').hidden = gorunum !== 'ozet';
    $('gListe').hidden = gorunum !== 'liste';
    $('gKategori').hidden = gorunum !== 'kategori';
    $('sOzet').setAttribute('aria-selected', gorunum === 'ozet');
    $('sListe').setAttribute('aria-selected', gorunum === 'liste');
    $('geri').hidden = gorunum === 'ozet';
    document.body.classList.toggle('alt-sayfa', gorunum !== 'ozet');
    if (gorunum === 'liste') listeCiz();
    else if (gorunum === 'kategori') kategoriCiz();
    ustYaz();
    window.scrollTo(0, 0);
  }

  function ustYaz() {
    var b = 'Mezun Arama', a = 'Cerrahpaşa Tıp Fakültesi · 199. Dönem';
    if (gorunum === 'liste') { b = 'Mezunlar'; a = SATIR.length + ' kişi · ada, şehre, branşa göre ara'; }
    if (gorunum === 'kategori') {
      var K = KATEGORI[kategori];
      b = K.baslik; a = sayim(K.sutun, SATIR).length + ' ' + K.birim + ' · en kalabalıktan aza';
    }
    $('ustBaslik').textContent = b;
    $('ustAlt').textContent = a;
  }

  /** Yeni sayfaya geç (geçmişe ekler). */
  function git(st) {
    if (gorunum === 'liste' && st.g === 'liste' && !st.d) return;
    yigin.push(simdiki());
    goster(st);
    gecmisEkle(simdiki());
  }
  /** Bir önceki sayfaya dön. */
  function geri() {
    if (!yigin.length) { if (gorunum !== 'ozet') { goster({ g: 'ozet' }); gecmisDegistir(simdiki()); } return; }
    if (WEB) { history.back(); return; }  // popstate → geriGeldi
    goster(yigin.pop());
    gecmisDegistir(simdiki());
  }
  function geriGeldi(st) {
    if (yoksay) { yoksay = false; return; }
    if (pencereAcik) { pencereKapat(true); return; }  // geri tuşu önce açık pencereyi kapatır
    if (yigin.length) yigin.pop();
    goster(st.g ? st : { g: 'ozet' });
  }
  if (GS) GS.setChangeHandler(function (e) { geriGeldi((e && e.state) || {}); });
  else if (WEB) window.addEventListener('popstate', function (e) { geriGeldi(e.state || {}); });

  function anaSayfa() {
    if (gorunum === 'ozet') { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    git({ g: 'ozet' });
  }

  /** Filtreli mezun listesine geç */
  function listeyeGit(ayar) {
    ayar = ayar || {};
    var d = { sehir: ayar.sehir || '', kurum: ayar.kurum || '', brans: ayar.brans || '', ara: ayar.ara || '',
              grup: ayar.grup || '' };
    git({ g: 'liste', d: d });
    if (ayar.odak) setTimeout(function () { $('ara').focus(); }, 60);
  }
  function kategoriyeGit(k) { git({ g: 'kategori', k: k, d: kopya(durum) }); }

  // ---------------------------------------------------------------- Ana sayfa (özet)
  function bolum(baslik, ikonAd, sag) {
    var b = yap('section', 'bolum');
    var h = yap('h2');
    var r = yap('span', 'bolum-ikon');
    r.appendChild(ikon(ikonAd));
    h.appendChild(r);
    h.appendChild(yap('span', 'bolum-ad', baslik));
    if (sag) h.appendChild(sag);
    b.appendChild(h);
    return b;
  }

  function siraliSatir(s, i, en, tikla) {
    var c = dugme('cubuk', null, tikla);
    c.setAttribute('aria-label', s[0] + ': ' + s[1] + ' kişi');
    c.appendChild(yap('span', 'sira' + (i < 3 ? ' s' + (i + 1) : ''), i + 1));
    c.appendChild(yap('span', 'ad', s[0]));
    c.appendChild(yap('span', 'n', s[1]));
    var iz = yap('span', 'iz'), dol = yap('span');
    dol.style.width = Math.max(3, Math.round(100 * s[1] / en)) + '%';
    iz.appendChild(dol);
    c.appendChild(iz);
    c.appendChild(ikon('ileri'));
    return c;
  }

  function enCoklar(k, adet) {
    var K = KATEGORI[k], liste = sayim(K.sutun, SATIR), en = liste.length ? liste[0][1] : 1;
    var kap = yap('div', 'kutu cubuklar');
    liste.slice(0, adet).forEach(function (s, i) {
      kap.appendChild(siraliSatir(s, i, en, function () {
        var a = { grup: K.grup }; a[k] = s[0]; listeyeGit(a);
      }));
    });
    if (liste.length > adet) {
      var t = dugme('tumu', null, function () { kategoriyeGit(k); });
      t.appendChild(yap('span', null, 'Tüm ' + K.baslik.toLocaleLowerCase('tr').split(' /')[0] + ' (' + liste.length + ')'));
      t.appendChild(ikon('ileri'));
      kap.appendChild(t);
    }
    return kap;
  }

  function ozetCiz() {
    var o = $('gOzet');
    o.textContent = '';

    // Kahraman alanı: bordo zemin, karşılama, arama, sayılar (zemine taşan kartlar)
    var kh = yap('section', 'kahraman');
    kh.appendChild(yap('p', 'selam', 'Hoş geldin 👋'));
    kh.appendChild(yap('h2', null, '199. Dönem nerede, tek bakışta'));
    var h = dugme('hizli', null, function () { listeyeGit({ odak: true }); });
    h.appendChild(ikon('ara'));
    h.appendChild(document.createTextNode('Ad, hastane, şehir ya da branş ara'));
    kh.appendChild(h);
    o.appendChild(kh);

    var sayilar = yap('div', 'sayilar');
    [[SATIR.length, 'mezun', 'kisiler', function () { listeyeGit({}); }],
     [sayim(1, SATIR).length, 'şehir', 'sehir', function () { kategoriyeGit('sehir'); }],
     [sayim(2, SATIR).length, 'kurum', 'kurum', function () { kategoriyeGit('kurum'); }],
     [sayim(3, SATIR).length, 'branş', 'brans', function () { kategoriyeGit('brans'); }]].forEach(function (s) {
      var d = dugme('sayi', null, s[3]);
      d.appendChild(ikon(s[2]));
      d.appendChild(yap('b', null, s[0]));
      d.appendChild(yap('span', null, s[1]));
      sayilar.appendChild(d);
    });
    o.appendChild(sayilar);
    o.appendChild(yap('p', 'guncel', 'Son güncelleme: ' + ZAMAN + ' · her açılışta yenilenir'));

    // Yakınındakiler: şehir seçimi kartın içinde
    var b = bolum('Yakınındakiler', 'sehir');
    b.appendChild(sehrimKutusu());
    o.appendChild(b);

    // Asistan / pratisyen dağılımı
    var t = { asistan: 0, pratisyen: 0, diger: 0 };
    SATIR.forEach(function (r) { var x = tur(r[3]); if (t[x] != null) t[x]++; });
    var top = t.asistan + t.pratisyen + t.diger || 1;
    b = bolum('Uzmanlık durumu', 'brans');
    var k = yap('div', 'kutu'), y = yap('div', 'yigin'), a = yap('div', 'aciklama');
    [['asistan', 'Asistan', 'var(--bordo)', 'asistan'], ['pratisyen', 'Pratisyen hekim', '#c98a84', 'pratisyen'],
     ['diger', 'Diğer', 'var(--gri)', '']].forEach(function (p) {
      if (!t[p[0]]) return;
      var parca = yap('span');
      parca.style.width = (100 * t[p[0]] / top) + '%';
      parca.style.background = p[2];
      y.appendChild(parca);
      var d = dugme(null, null, p[3] ? function () { listeyeGit({ ara: p[3], grup: 'brans' }); } : null);
      var i = yap('i'); i.style.background = p[2];
      d.appendChild(i);
      d.appendChild(document.createTextNode(p[1] + ' '));
      d.appendChild(yap('b', null, t[p[0]] + ' (%' + Math.round(100 * t[p[0]] / top) + ')'));
      a.appendChild(d);
    });
    k.appendChild(y); k.appendChild(a);
    b.appendChild(k);
    o.appendChild(b);

    // Harita
    b = bolum('Türkiye haritası', 'harita');
    b.appendChild(haritaKutusu());
    o.appendChild(b);

    // En kalabalıklar; "Tüm …" kategori sayfasını açar (kişileri değil)
    [['sehir', 'En çok mezun olan şehirler', 5], ['brans', 'En çok seçilen branşlar', 5],
     ['kurum', 'En çok mezun olan hastaneler', 5]].forEach(function (p) {
      b = bolum(p[1], KATEGORI[p[0]].ikon);
      b.appendChild(enCoklar(p[0], p[2]));
      o.appendChild(b);
    });

    // Ana ekran + paylaş
    var ikili = yap('div', 'ikili bolum');
    var ev = dugme('kutu', null, anaEkranPenceresi);
    ev.appendChild(ikon('ev'));
    ev.appendChild(yap('b', null, 'Ana ekrana ekle'));
    ev.appendChild(document.createTextNode('Uygulama gibi tek dokunuşla aç'));
    var pay = dugme('kutu', null, function () { paylas(SERVIS_URL, 'Cerrahpaşa 199. Dönem mezun arama'); });
    pay.appendChild(ikon('paylas'));
    pay.appendChild(yap('b', null, 'Sayfayı paylaş'));
    pay.appendChild(document.createTextNode('Bağlantıyı gruba gönder'));
    ikili.appendChild(ev); ikili.appendChild(pay);
    o.appendChild(ikili);

    // Form çağrısı
    var cagri = yap('section', 'kutu cagri bolum');
    cagri.appendChild(yap('b', null, 'Listede yok musun?'));
    cagri.appendChild(yap('p', null, 'Ya da bilgin mi değişti? Formu tekrar doldurman yeterli; kaydın kendiliğinden ' +
      'güncellenir.'));
    var fa = yap('a', null, 'Formu doldur');
    fa.href = FORM_URL; fa.target = '_blank'; fa.rel = 'noopener';
    cagri.appendChild(fa);
    o.appendChild(cagri);
  }

  // ---------------------------------------------------------------- Kategori sayfası (şehirler / branşlar / hastaneler)
  function kategoriCiz() {
    var K = KATEGORI[kategori], o = $('gKategori');
    if (!K) { goster({ g: 'ozet' }); return; }
    var liste = sayim(K.sutun, SATIR), en = liste.length ? liste[0][1] : 1;
    o.textContent = '';
    var ar = yap('div', 'arama kategori-ara');
    ar.appendChild(ikon('ara'));
    var inp = yap('input');
    inp.type = 'search'; inp.autocomplete = 'off';
    inp.placeholder = K.baslik.split(' /')[0] + ' içinde ara';
    inp.setAttribute('aria-label', inp.placeholder);
    ar.appendChild(inp);
    o.appendChild(ar);
    var kap = yap('div', 'kutu cubuklar');
    o.appendChild(kap);
    function doldur() {
      var q = sade(inp.value.trim()), n = 0;
      kap.textContent = '';
      liste.forEach(function (s, i) {
        if (q && sade(s[0]).indexOf(q) < 0) return;
        n++;
        kap.appendChild(siraliSatir(s, i, en, function () {
          var a = { grup: K.grup }; a[kategori] = s[0]; listeyeGit(a);
        }));
      });
      if (!n) kap.appendChild(yap('div', 'bos', 'Eşleşen ' + K.birim + ' yok.'));
    }
    inp.addEventListener('input', doldur);
    inp.addEventListener('keydown', function (e) { if (e.key === 'Enter') this.blur(); });
    doldur();
    o.appendChild(yap('p', 'not', 'Birine dokun: oradaki mezunlar listelenir.'));
  }

  // ---------------------------------------------------------------- Yakınındakiler (şehrim)
  var sehrimDegistir = false;
  function tumSehirler() {  // [[şehir, kişi sayısı], …] — listedekiler önce, sonra diğer iller
    var var_ = {};
    sayim(1, SATIR).forEach(function (s) { var_[s[0]] = s[1]; });
    Object.keys(IL_KONUM).forEach(function (il) { if (!(il in var_)) var_[il] = 0; });
    return Object.keys(var_).map(function (k) { return [k, var_[k]]; })
      .sort(function (a, b) { return b[1] - a[1] || sirala(a[0], b[0]); });
  }
  function sehrimSec(v) {
    depo.koy('sehrim', v);
    sehrimDegistir = false;
    sehrimYenile();
    if (v) bildir('Şehrin kaydedildi: ' + v + ' (sadece bu cihazda)');
  }

  function sehrimKutusu() {
    var k = yap('div', 'kutu sehrim'), sehrim = depo.al('sehrim');
    k.id = 'sehrimKutu';
    if (sehrim && !sehrimDegistir) {
      var kisiler = SATIR.filter(function (x) { return x[1] === sehrim; });
      var ust = yap('div', 'sehrim-ust');
      var r = yap('div', 'rozet-buyuk'); r.appendChild(ikon('sehir'));
      ust.appendChild(r);
      var m = yap('div', 'metin');
      m.appendChild(yap('b', null, sehrim));
      m.appendChild(yap('span', null, kisiler.length ? kisiler.length + ' mezun bu şehirde' : 'Bu şehirde henüz kimse yok'));
      ust.appendChild(m);
      ust.appendChild(dugme('bag', 'Değiştir', function () { sehrimDegistir = true; sehrimYenile(); }));
      k.appendChild(ust);
      if (kisiler.length) {
        var on = yap('div', 'onizleme');
        kisiler.slice(0, 3).forEach(function (x) {
          var s = yap('div', 'mini');
          s.appendChild(yap('span', 'bas', basHarf(x[0])));
          var t = yap('span', 'mini-metin');
          t.appendChild(yap('b', null, x[0]));
          t.appendChild(yap('small', null, [x[2], x[3]].filter(Boolean).join(' · ')));
          s.appendChild(t);
          on.appendChild(s);
        });
        k.appendChild(on);
        var g = dugme('dugme genis', null, function () { listeyeGit({ sehir: sehrim, grup: 'kurum' }); });
        g.appendChild(document.createTextNode(kisiler.length > 3 ? 'Hepsini gör (' + kisiler.length + ')' : 'Listede gör'));
        g.appendChild(ikon('ileri'));
        k.appendChild(g);
      }
      return k;
    }

    // Seçim: kartın içinde yazarak ya da sık şehirlerden dokunarak
    k.appendChild(yap('b', 'sehrim-baslik', sehrim ? 'Şehrini değiştir' : 'Hangi şehirdesin?'));
    k.appendChild(yap('p', 'not', 'Seçince aynı şehirdeki mezunlar burada görünür. Seçimin sadece bu cihazda saklanır.'));
    var ar = yap('div', 'arama');
    ar.appendChild(ikon('ara'));
    var inp = yap('input');
    inp.type = 'search'; inp.autocomplete = 'off'; inp.placeholder = 'Şehrini yaz (ör. İzmir)';
    inp.setAttribute('aria-label', 'Şehrini yaz');
    ar.appendChild(inp);
    k.appendChild(ar);
    var oneriler = yap('div', 'oneriler');
    k.appendChild(oneriler);
    var hepsi = tumSehirler();
    function doldur() {
      var q = sade(inp.value.trim());
      oneriler.textContent = '';
      var uy = q ? hepsi.filter(function (s) { return sade(s[0]).indexOf(q) === 0; })
                     .concat(hepsi.filter(function (s) { var i = sade(s[0]).indexOf(q); return i > 0; }))
                 : hepsi.slice(0, 6);
      uy.slice(0, q ? 6 : 6).forEach(function (s) {
        var c = dugme('cip', null, function () { sehrimSec(s[0]); });
        c.appendChild(yap('span', null, s[0]));
        if (s[1]) c.appendChild(yap('small', 'cip-n', s[1]));
        oneriler.appendChild(c);
      });
      if (q && !uy.length) oneriler.appendChild(yap('span', 'not', 'Bu adla şehir bulunamadı.'));
    }
    inp.addEventListener('input', doldur);
    inp.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') { var ilk = oneriler.querySelector('button'); if (ilk) ilk.click(); }
    });
    doldur();
    if (sehrim) {
      var alt = yap('div', 'sehrim-alt');
      alt.appendChild(dugme('bag', 'Vazgeç', function () { sehrimDegistir = false; sehrimYenile(); }));
      alt.appendChild(dugme('bag soluk', 'Şehrimi unut', function () { sehrimSec(''); }));
      k.appendChild(alt);
    }
    return k;
  }
  function sehrimYenile() {
    var eski = $('sehrimKutu');
    if (eski) eski.parentNode.replaceChild(sehrimKutusu(), eski);
  }
  function basHarf(ad) {
    var p = ad.split(' ').filter(Boolean);
    return ((p[0] || '').charAt(0) + (p.length > 1 ? p[p.length - 1].charAt(0) : '')).toLocaleUpperCase('tr');
  }

  // ---------------------------------------------------------------- Harita
  function haritaKutusu() {
    var kap = yap('div', 'kutu harita');
    var NS = 'http://www.w3.org/2000/svg';
    var cos = Math.cos(39 * Math.PI / 180), K = 100, BAT = 25.55, KUZ = 42.3;
    function xy(e, b) { return [Math.round((b - BAT) * K * cos), Math.round((KUZ - e) * K)]; }
    var gen = Math.round((44.95 - BAT) * K * cos), yuk = Math.round((KUZ - 35.7) * K);
    var svg = document.createElementNS(NS, 'svg');
    svg.setAttribute('viewBox', '0 0 ' + gen + ' ' + yuk);
    svg.setAttribute('role', 'img');
    svg.setAttribute('aria-label', 'Mezunların illere göre dağılımı');
    TR_SINIR.forEach(function (cokgen) {
      var p = document.createElementNS(NS, 'path');
      p.setAttribute('class', 'kara');
      p.setAttribute('d', 'M' + cokgen.map(function (n) { return xy(n[0], n[1]).join(','); }).join('L') + 'Z');
      svg.appendChild(p);
    });

    var ilAdi = {};
    Object.keys(IL_KONUM).forEach(function (il) { ilAdi[sade(il)] = il; });
    var iller = [], disari = [];
    sayim(1, SATIR).forEach(function (s) {
      var il = ilAdi[sade(s[0])];
      if (il) iller.push({ ad: s[0], n: s[1], k: xy(IL_KONUM[il][0], IL_KONUM[il][1]) });
      else disari.push(s);
    });
    var en = iller.length ? iller[0].n : 1;
    iller.forEach(function (il, i) {  // büyükler önce çizilir, küçükler üstte kalır
      var r = Math.round(18 + 44 * Math.sqrt(il.n / en));
      var c = document.createElementNS(NS, 'circle');
      c.setAttribute('class', 'kabarcik');
      c.setAttribute('cx', il.k[0]); c.setAttribute('cy', il.k[1]); c.setAttribute('r', r);
      var t = document.createElementNS(NS, 'title');
      t.textContent = il.ad + ': ' + il.n + ' mezun';
      c.appendChild(t);
      c.addEventListener('click', function () { listeyeGit({ sehir: il.ad, grup: 'kurum' }); });
      svg.appendChild(c);
      if (r >= 30) {
        var s = document.createElementNS(NS, 'text');
        s.setAttribute('class', 'sayi-yazi');
        s.setAttribute('x', il.k[0]); s.setAttribute('y', il.k[1]);
        s.textContent = il.n;
        svg.appendChild(s);
      }
      if (i < 3) {
        var e = document.createElementNS(NS, 'text');
        e.setAttribute('class', 'etiket');
        e.setAttribute('x', il.k[0] + r + 8); e.setAttribute('y', il.k[1] + 17);
        e.textContent = il.ad;
        svg.appendChild(e);
      }
    });
    kap.appendChild(svg);
    if (disari.length) {
      var d = yap('div', 'disari');
      d.appendChild(yap('span', 'disari-baslik', 'Yurt dışı'));
      disari.forEach(function (s) {
        var c = dugme('cip', null, function () { listeyeGit({ sehir: s[0] }); });
        c.appendChild(ikon('sehir'));
        c.appendChild(yap('span', null, s[0] + ' · ' + s[1]));
        d.appendChild(c);
      });
      kap.appendChild(d);
    }
    kap.appendChild(yap('p', 'not', 'Bir şehre dokun: o şehirdeki mezunlar hastanelerine göre listelenir.'));
    return kap;
  }

  // ---------------------------------------------------------------- Liste
  var cizilecek = [], cizilen = 0, kelimeK = [];

  function ciplerCiz() {
    var c = $('cipler');
    c.textContent = '';
    ['sehir', 'brans', 'kurum'].forEach(function (ad) {
      var b = dugme('cip' + (durum[ad] ? ' secili' : ''), null, function () { secimPenceresi(ad); });
      b.setAttribute('aria-label', AD[ad] + (durum[ad] ? ': ' + durum[ad] + ' (değiştir)' : ' seç'));
      b.appendChild(yap('span', null, durum[ad] || AD[ad]));
      b.appendChild(ikon('asagi'));
      c.appendChild(b);
    });
    var g = dugme('cip' + (durum.grup ? ' secili' : ''), null, grupPenceresi);
    g.appendChild(ikon('grup'));
    g.appendChild(yap('span', null, durum.grup ? GRUP_AD[durum.grup] : 'Grupla'));
    c.appendChild(g);
    if (durum.sehir || durum.brans || durum.kurum || durum.ara || durum.grup) {
      c.appendChild(dugme('cip', 'Temizle', function () {
        durum.sehir = durum.brans = durum.kurum = durum.ara = durum.grup = '';
        $('ara').value = '';
        listeCiz();
      }));
    }
  }

  function kart(r) {
    var c = yap('article', 'kisi');
    c.appendChild(yap('div', 'bas', basHarf(r[0])));
    var g = yap('div', 'govde');
    g.appendChild(isaretle(yap('div', 'ad'), r[0], kelimeK));
    if (r[3]) {
      var b = dugme('brans', null, function () { durum.brans = r[3]; listeCiz(true); });
      b.title = 'Bu branştakileri göster';
      g.appendChild(isaretle(b, r[3], kelimeK));
    }
    [[2, 'kurum', 'kurum'], [1, 'sehir', 'sehir']].forEach(function (x) {
      if (!r[x[0]]) return;
      var d = yap('div', 'bilgi');
      d.appendChild(ikon(x[1]));
      var bt = dugme(null, null, function () { durum[x[2]] = r[x[0]]; listeCiz(true); });
      bt.title = 'Buradakileri göster';
      d.appendChild(isaretle(bt, r[x[0]], kelimeK));
      g.appendChild(d);
    });
    c.appendChild(g);
    return c;
  }

  function listeCiz(basaDon) {
    ciplerCiz();
    $('sil').hidden = !durum.ara;
    kelimeK = kelimeler().filter(function (w) { return w.length > 1; });  // tek harfte her yer sararmasın
    var sonuc = uyanlar(null);

    var sayac = $('sayac');
    sayac.textContent = '';
    sayac.appendChild(yap('b', null, sonuc.length));
    sayac.appendChild(document.createTextNode(sonuc.length === SATIR.length ? ' mezun' : ' kişi bulundu'));

    // Çizilecek öğeler: gruplu ise başlık + kişiler (gruplar kalabalıktan aza), değilse ada göre kişiler
    cizilecek = [];
    if (durum.grup) {
      var sut = SUTUN[durum.grup], gruplar = {};
      sonuc.forEach(function (r) { var k = r[sut] || '(belirtilmemiş)'; (gruplar[k] = gruplar[k] || []).push(r); });
      Object.keys(gruplar).sort(function (a, b) { return gruplar[b].length - gruplar[a].length || sirala(a, b); })
        .forEach(function (k) {
          cizilecek.push({ baslik: k, n: gruplar[k].length });
          gruplar[k].forEach(function (r) { cizilecek.push(r); });
        });
    } else {
      cizilecek = sonuc;
    }

    var kap = $('sonuc');
    kap.textContent = '';
    cizilen = 0;
    if (!sonuc.length) {
      var bos = yap('div', 'bos');
      bos.appendChild(yap('b', null, SATIR.length ? 'Kimse bulunamadı' : 'Henüz kimse yok'));
      bos.appendChild(document.createTextNode(SATIR.length ? 'Yazımı kontrol et ya da bir filtreyi kaldır.' : ''));
      if (SATIR.length) {
        bos.appendChild(yap('br'));
        bos.appendChild(dugme('dugme ikincil', 'Filtreleri temizle', function () {
          durum.sehir = durum.brans = durum.kurum = durum.ara = ''; $('ara').value = ''; listeCiz();
        }));
      }
      kap.appendChild(bos);
    } else {
      dahaCiz(ILK);
    }
    if (basaDon) window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(gerekirseDaha, 0);
  }

  function dahaCiz(adet) {
    var parca = document.createDocumentFragment(), son = Math.min(cizilecek.length, cizilen + adet);
    for (; cizilen < son; cizilen++) {
      var o = cizilecek[cizilen];
      if (o.baslik != null) {
        var h = yap('h3', 'grup');
        h.appendChild(yap('span', null, o.baslik));
        h.appendChild(yap('span', null, o.n + ' kişi'));
        parca.appendChild(h);
      } else {
        parca.appendChild(kart(o));
      }
    }
    $('sonuc').appendChild(parca);
  }

  // Sonsuz kaydırma: listenin sonu ekrana 800 px yaklaşınca sıradaki kartlar eklenir (ekran dolana kadar)
  function gerekirseDaha() {
    var g = $('gozcu');
    while (gorunum === 'liste' && cizilen < cizilecek.length &&
           g.getBoundingClientRect().top < window.innerHeight + 800) dahaCiz(EK);
  }

  // ---------------------------------------------------------------- Alttan açılan pencere
  var pencereSecenekleri = null, pencereAcik = false, pencereGecmiste = false;

  function pencereAc(baslik, aramaVar) {
    $('pBaslik').textContent = baslik;
    $('pAramaKutu').hidden = !aramaVar;
    $('pAra').value = '';
    $('pIcerik').textContent = '';
    $('pIcerik').scrollTop = 0;
    $('perde').hidden = false; $('pencere').hidden = false;
    document.body.classList.add('kilitli');
    setTimeout(function () { $('perde').classList.add('acik'); $('pencere').classList.add('acik'); }, 16);
    pencereAcik = true;
    // Tarayıcıda geri tuşu pencereyi kapatsın diye geçmişe bir adım eklenir (Apps Script'te gerek yok)
    if (WEB) { history.pushState(simdiki(), ''); pencereGecmiste = true; }
  }
  function pencereKapat(gecmisten) {
    if (!pencereAcik) return;
    pencereAcik = false;
    $('perde').classList.remove('acik'); $('pencere').classList.remove('acik');
    document.body.classList.remove('kilitli');
    setTimeout(function () { if (!pencereAcik) { $('perde').hidden = true; $('pencere').hidden = true; } }, 220);
    if (pencereGecmiste) {
      pencereGecmiste = false;
      if (gecmisten !== true) { yoksay = true; history.back(); }
    }
  }
  var yoksay = false;  // pencereyi kapatmak için yapılan history.back() sayfa değiştirmesin
  $('perde').addEventListener('click', function () { pencereKapat(); });
  $('pKapat').addEventListener('click', function () { pencereKapat(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') pencereKapat(); });

  /** secenekler: [{ deger, yazi, n, secili, ara? }] — ara başlığı için { ara: 'Başlık' } */
  function secenekleriCiz(secenekler, sec) {
    pencereSecenekleri = { liste: secenekler, sec: sec };
    var q = sade($('pAra').value.trim()), kap = $('pIcerik'), parca = document.createDocumentFragment();
    var gorunen = 0;
    secenekler.forEach(function (s) {
      if (s.ara) { if (!q) parca.appendChild(yap('div', 'ara-baslik', s.ara)); return; }
      if (q && sade(s.yazi).indexOf(q) < 0) return;
      gorunen++;
      var b = dugme('secenek', null, function () { pencereKapat(); sec(s.deger); });
      b.setAttribute('role', 'option');
      b.setAttribute('aria-selected', !!s.secili);
      b.appendChild(yap('span', 'tik', s.secili ? '✓' : ''));
      b.appendChild(yap('span', 'ad', s.yazi));
      if (s.n != null) b.appendChild(yap('span', 'n', s.n));
      parca.appendChild(b);
    });
    kap.textContent = '';
    if (!gorunen) parca.appendChild(yap('div', 'bos', 'Eşleşen seçenek yok.'));
    kap.appendChild(parca);
  }
  var pAraSaat;
  $('pAra').addEventListener('input', function () {
    clearTimeout(pAraSaat);
    pAraSaat = setTimeout(function () {
      if (pencereSecenekleri) secenekleriCiz(pencereSecenekleri.liste, pencereSecenekleri.sec);
    }, 60);
  });

  function secimPenceresi(ad) {
    var sut = SUTUN[ad], havuz = uyanlar(ad), liste = sayim(sut, havuz);
    if (durum[ad] && !liste.some(function (s) { return s[0] === durum[ad]; })) liste.unshift([durum[ad], 0]);
    var secenekler = [{ deger: '', yazi: 'Tümü', n: havuz.length, secili: !durum[ad] }];
    var sehrim = depo.al('sehrim');
    if (ad === 'sehir' && sehrim) {
      var benim = liste.filter(function (s) { return s[0] === sehrim; })[0];
      if (benim) secenekler.push({ deger: sehrim, yazi: '📍 ' + sehrim + ' (senin şehrin)', n: benim[1],
                                   secili: durum.sehir === sehrim });
    }
    secenekler.push({ ara: 'En çok kişi olandan aza' });
    liste.forEach(function (s) { secenekler.push({ deger: s[0], yazi: s[0], n: s[1], secili: durum[ad] === s[0] }); });
    pencereAc(AD[ad], liste.length > 8);
    secenekleriCiz(secenekler, function (v) { durum[ad] = v; listeCiz(true); });
  }

  function grupPenceresi() {
    pencereAc('Grupla', false);
    secenekleriCiz(Object.keys(GRUP_AD).map(function (k) {
      return { deger: k, yazi: GRUP_AD[k], secili: durum.grup === k };
    }), function (v) { durum.grup = v; listeCiz(true); });
  }

  function anaEkranPenceresi() {
    pencereAc('Ana ekrana ekle', false);
    var k = $('pIcerik'), d = yap('div', 'adimlar');
    d.appendChild(yap('p', 'not', 'Sayfayı telefonunun ana ekranına eklersen uygulama gibi tek dokunuşla açılır.'));
    [['iPhone (Safari)', ['Bu sayfayı Safari\'de aç (WhatsApp içinden açtıysan sağ alttaki pusula simgesi).',
                          'Alttaki Paylaş düğmesine (yukarı ok olan kare) dokun.',
                          '"Ana Ekrana Ekle"yi seç, sonra "Ekle".']],
     ['Android (Chrome)', ['Bu sayfayı Chrome\'da aç (WhatsApp içinden açtıysan ⋮ → "Chrome\'da aç").',
                           'Sağ üstteki ⋮ menüsüne dokun.',
                           '"Ana ekrana ekle"yi seç, sonra "Ekle".']]].forEach(function (b) {
      d.appendChild(yap('h4', null, b[0]));
      var ol = yap('ol');
      b[1].forEach(function (m) { ol.appendChild(yap('li', null, m)); });
      d.appendChild(ol);
    });
    k.appendChild(d);
  }

  // ---------------------------------------------------------------- Paylaşma
  function aramaBaglantisi() {
    var p = [];
    ['sehir', 'brans', 'kurum', 'ara', 'grup'].forEach(function (k) {
      if (durum[k]) p.push(k + '=' + encodeURIComponent(durum[k]));
    });
    return SERVIS_URL + (p.length ? '?' + p.join('&') : '');
  }
  function paylas(url, baslik) {
    if (navigator.share) {
      navigator.share({ title: baslik, url: url }).catch(function () { /* vazgeçildi */ });
    } else if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(function () { bildir('Bağlantı kopyalandı'); },
        function () { window.prompt('Bağlantıyı kopyala:', url); });
    } else {
      window.prompt('Bağlantıyı kopyala:', url);
    }
  }
  $('paylas').addEventListener('click', function () { paylas(aramaBaglantisi(), 'Mezun arama'); });

  // ---------------------------------------------------------------- Olaylar ve başlangıç
  var araSaat;
  $('ara').addEventListener('input', function () {
    var v = this.value;
    clearTimeout(araSaat);
    araSaat = setTimeout(function () { durum.ara = v.trim(); listeCiz(); }, 90);
  });
  $('ara').addEventListener('keydown', function (e) { if (e.key === 'Enter') this.blur(); });
  $('sil').addEventListener('click', function () { $('ara').value = ''; durum.ara = ''; listeCiz(); $('ara').focus(); });
  $('sOzet').addEventListener('click', anaSayfa);
  $('sListe').addEventListener('click', function () { if (gorunum !== 'liste') git({ g: 'liste', d: kopya(durum) }); });
  $('anaSayfa').addEventListener('click', anaSayfa);
  $('geri').addEventListener('click', geri);
  window.addEventListener('scroll', function () {
    if (gorunum !== 'liste') return;
    $('arac').classList.toggle('golgeli', window.scrollY > 70);
    gerekirseDaha();
  }, { passive: true });
  window.addEventListener('resize', gerekirseDaha);

  // ---------------------------------------------------------------- Başlangıç
  function ciz() {
    ozetCiz();
    if (gorunum === 'liste') listeCiz();
    if (gorunum === 'kategori') kategoriCiz();
    ustYaz();
  }
  function baslat() {
    ozetCiz();
    var filtreli = durum.sehir || durum.brans || durum.kurum || durum.ara || durum.grup;
    goster(filtreli ? { g: 'liste', d: kopya(durum) } : { g: 'ozet' });
    gecmisDegistir(simdiki());
  }

  function yukleniyor(hata) {
    var o = $('gOzet');
    o.textContent = '';
    var b = yap('div', 'bos');
    b.appendChild(yap('b', null, hata ? 'Liste yüklenemedi' : 'Liste yükleniyor…'));
    b.appendChild(document.createTextNode(hata ? 'İnternet bağlantını kontrol edip tekrar dene.' :
      'Birkaç saniye sürebilir.'));
    if (hata) { b.appendChild(yap('br')); b.appendChild(dugme('dugme', 'Tekrar dene', agdanYukle)); }
    else b.insertBefore(yap('div', 'donen'), b.firstChild);
    o.appendChild(b);
  }

  var basladi = false;
  function agdanYukle() {
    if (!basladi) yukleniyor(false);
    var x = new XMLHttpRequest();
    x.open('GET', AYAR.veriUrl);
    x.timeout = 20000;
    x.onload = function () {
      var v = null;
      try { v = JSON.parse(x.responseText); } catch (e) { /* aşağıda hata */ }
      if (x.status !== 200 || !v || !v.satirlar) { x.onerror(); return; }
      var json = JSON.stringify(v);
      if (basladi && json === depo.al('veri')) return;  // değişiklik yok, yeniden çizme
      depo.koy('veri', json);
      veriKur(v);
      if (basladi) ciz(); else { basladi = true; baslat(); }
    };
    x.onerror = x.ontimeout = function () {
      if (basladi) bildir('Liste güncellenemedi; son kayıtlı liste gösteriliyor.');
      else yukleniyor(true);
    };
    x.send();
  }

  if (!AYAR) {
    veriKur(window.VERI);
    basladi = true;
    baslat();
  } else {
    var kayitli = null;
    try { kayitli = JSON.parse(depo.al('veri') || 'null'); } catch (e) { kayitli = null; }
    if (kayitli && kayitli.satirlar) { veriKur(kayitli); basladi = true; baslat(); }
    agdanYukle();
    if ('serviceWorker' in navigator && location.protocol === 'https:') {
      navigator.serviceWorker.register('sw.js').catch(function () { /* çevrimdışı desteği olmadan devam */ });
    }
  }
})();
