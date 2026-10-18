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
    ok: '<path d="M5 12h14M13 6l6 6-6 6"/>'
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

  // ---------------------------------------------------------------- Gezinme (Android geri tuşu dahil)
  // Geçmiş: Apps Script'te google.script.history, GitHub Pages'te tarayıcının kendi geçmişi
  var GS = (window.google && google.script && google.script.history) ? google.script.history : null;
  var GECMIS = GS ? {
    push: function (st) { GS.push(st, {}); },
    replace: function (st) { GS.replace(st, {}); },
    dinle: function (f) { GS.setChangeHandler(function (e) { f((e && e.state) || {}); }); }
  } : (window.history && history.pushState ? {
    push: function (st) { history.pushState(st, ''); },
    replace: function (st) { history.replaceState(st, ''); },
    dinle: function (f) { window.addEventListener('popstate', function (e) { f(e.state || {}); }); }
  } : null);
  var gorunum = 'ozet';

  function gorunumAc(ad, gecmisten) {
    if (ad === gorunum && !gecmisten) return;
    gorunum = ad;
    $('gOzet').hidden = ad !== 'ozet';
    $('gListe').hidden = ad !== 'liste';
    $('sOzet').setAttribute('aria-selected', ad === 'ozet');
    $('sListe').setAttribute('aria-selected', ad === 'liste');
    if (ad === 'liste') listeCiz();
    window.scrollTo(0, 0);
    if (!gecmisten && GECMIS) GECMIS.push({ g: ad });
  }
  if (GECMIS) {
    GECMIS.dinle(function (st) {
      if (!st.p) pencereKapat(true);
      if ((st.g || 'ozet') !== gorunum) gorunumAc(st.g || 'ozet', true);
    });
  }

  /** Özet'ten listeye filtreyle geçiş */
  function listeyeGit(ayar) {
    ayar = ayar || {};
    durum.sehir = ayar.sehir || ''; durum.kurum = ayar.kurum || ''; durum.brans = ayar.brans || '';
    durum.ara = ayar.ara || ''; durum.grup = ayar.grup || '';
    $('ara').value = durum.ara;
    if (gorunum === 'liste') listeCiz();
    gorunumAc('liste');
    if (ayar.odak) setTimeout(function () { $('ara').focus(); }, 50);
  }

  // ---------------------------------------------------------------- Özet ekranı
  function bolum(baslik, sag) {
    var b = yap('section', 'bolum');
    var h = yap('h2', null, baslik);
    if (sag) h.appendChild(sag);
    b.appendChild(h);
    return b;
  }

  function cubuklar(sutun, adet, ad) {
    var liste = sayim(sutun, SATIR), en = liste.length ? liste[0][1] : 1;
    var kap = yap('div', 'kutu cubuklar');
    liste.slice(0, adet).forEach(function (s) {
      var c = dugme('cubuk', null, function () {
        var a = {}; a[ad] = s[0]; listeyeGit(a);
      });
      c.setAttribute('aria-label', s[0] + ': ' + s[1] + ' kişi');
      c.appendChild(yap('span', 'ad', s[0]));
      c.appendChild(yap('span', 'n', s[1]));
      var iz = yap('span', 'iz'), dol = yap('span');
      dol.style.width = Math.max(4, Math.round(100 * s[1] / en)) + '%';
      iz.appendChild(dol);
      c.appendChild(iz);
      kap.appendChild(c);
    });
    return { kap: kap, toplam: liste.length };
  }

  function ozetCiz() {
    var o = $('gOzet');
    o.textContent = '';

    // Sayılar
    var sayilar = yap('div', 'sayilar');
    [[SATIR.length, 'mezun'], [sayim(1, SATIR).length, 'şehir'], [sayim(2, SATIR).length, 'kurum'],
     [sayim(3, SATIR).length, 'branş']].forEach(function (s) {
      var d = yap('div', 'sayi');
      d.appendChild(yap('b', null, s[0]));
      d.appendChild(yap('span', null, s[1]));
      sayilar.appendChild(d);
    });
    o.appendChild(sayilar);
    o.appendChild(yap('p', 'guncel', 'Veriler: ' + ZAMAN + ' · sayfa her açılışta güncellenir'));

    // Hızlı arama
    var h = dugme('hizli', null, function () { listeyeGit({ odak: true }); });
    h.appendChild(ikon('ara'));
    h.appendChild(document.createTextNode('Ad, hastane, şehir ya da branş ara'));
    o.appendChild(h);

    // Şehrim (yakınımdakiler)
    var b = bolum('Yakınındakiler');
    b.appendChild(sehrimKutusu());
    o.appendChild(b);

    // Asistan / pratisyen dağılımı
    var t = { asistan: 0, pratisyen: 0, diger: 0 };
    SATIR.forEach(function (r) { var x = tur(r[3]); if (t[x] != null) t[x]++; });
    var top = t.asistan + t.pratisyen + t.diger || 1;
    b = bolum('Uzmanlık durumu');
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
    b = bolum('Türkiye haritası');
    b.appendChild(haritaKutusu());
    o.appendChild(b);

    // En kalabalıklar
    [['sehir', 1, 'En çok mezun olan şehirler', 5], ['brans', 3, 'Branşlar', 6],
     ['kurum', 2, 'En çok mezun olan hastaneler', 5]].forEach(function (p) {
      var c = cubuklar(p[1], p[3], p[0]);
      var tumu = dugme(null, 'Tümü (' + c.toplam + ')', function () { listeyeGit({ grup: p[0] }); });
      b = bolum(p[2], tumu);
      b.appendChild(c.kap);
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
    cagri.appendChild(yap('p', null, 'Listede yok musun ya da bilgin değişti mi? Formu tekrar doldurman yeterli; ' +
      'kaydın kendiliğinden güncellenir.'));
    var fa = yap('a', null, 'Formu doldur');
    fa.href = FORM_URL; fa.target = '_blank'; fa.rel = 'noopener';
    cagri.appendChild(fa);
    o.appendChild(cagri);
  }

  function sehrimKutusu() {
    var k = yap('div', 'kutu sehrim'), sehrim = depo.al('sehrim');
    var r = yap('div', 'rozet-buyuk');
    r.appendChild(ikon('sehir'));
    k.appendChild(r);
    var m = yap('div', 'metin');
    if (!sehrim) {
      m.appendChild(yap('b', null, 'Şehrini seç'));
      m.appendChild(yap('span', null, 'Aynı şehirdeki mezunları tek dokunuşla gör'));
      k.appendChild(m);
      k.appendChild(dugme('dugme', 'Seç', sehrimPenceresi));
    } else {
      var n = SATIR.filter(function (x) { return x[1] === sehrim; }).length;
      m.appendChild(yap('b', null, sehrim + (n ? ': ' + n + ' mezun' : '')));
      var alt = yap('span');
      alt.appendChild(document.createTextNode(n ? 'Senin şehrin · ' : 'Bu şehirde henüz kimse yok · '));
      alt.appendChild(dugme('bag', 'Değiştir', sehrimPenceresi));
      m.appendChild(alt);
      k.appendChild(m);
      if (n) k.appendChild(dugme('dugme', 'Gör', function () { listeyeGit({ sehir: sehrim, grup: 'kurum' }); }));
    }
    k.id = 'sehrimKutu';
    return k;
  }
  function sehrimYenile() {
    var eski = $('sehrimKutu');
    if (eski) eski.parentNode.replaceChild(sehrimKutusu(), eski);
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
    var p = r[0].split(' ').filter(Boolean);
    c.appendChild(yap('div', 'bas',
      ((p[0] || '').charAt(0) + (p.length > 1 ? p[p.length - 1].charAt(0) : '')).toLocaleUpperCase('tr')));
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
  var pencereSecenekleri = null;

  function pencereAc(baslik, aramaVar) {
    $('pBaslik').textContent = baslik;
    $('pAramaKutu').hidden = !aramaVar;
    $('pAra').value = '';
    $('pIcerik').textContent = '';
    $('pIcerik').scrollTop = 0;
    $('perde').hidden = false; $('pencere').hidden = false;
    document.body.classList.add('kilitli');
    setTimeout(function () { $('perde').classList.add('acik'); $('pencere').classList.add('acik'); }, 16);
    if (GECMIS) GECMIS.push({ g: gorunum, p: 1 });
  }
  function pencereKapat(gecmisten) {
    if ($('pencere').hidden) return;
    $('perde').classList.remove('acik'); $('pencere').classList.remove('acik');
    document.body.classList.remove('kilitli');
    setTimeout(function () { $('perde').hidden = true; $('pencere').hidden = true; }, 220);
    if (GECMIS && gecmisten !== true) GECMIS.replace({ g: gorunum });
  }
  $('perde').addEventListener('click', pencereKapat);
  $('pKapat').addEventListener('click', pencereKapat);
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

  function sehrimPenceresi() {
    var var_ = {}, sehrim = depo.al('sehrim');
    sayim(1, SATIR).forEach(function (s) { var_[s[0]] = s[1]; });
    Object.keys(IL_KONUM).forEach(function (il) { if (!(il in var_)) var_[il] = 0; });
    var liste = Object.keys(var_).sort(function (a, b) { return var_[b] - var_[a] || sirala(a, b); });
    pencereAc('Şehrini seç', true);
    var secenekler = [{ ara: 'En çok kişi olandan aza' }].concat(liste.map(function (il) {
      return { deger: il, yazi: il, n: var_[il], secili: il === sehrim };
    }));
    if (sehrim) secenekler.push({ deger: '', yazi: 'Şehrimi unut', secili: false });
    secenekleriCiz(secenekler, function (v) {
      depo.koy('sehrim', v);
      sehrimYenile();
      if (v) bildir('Şehrin kaydedildi: ' + v + ' (sadece bu cihazda)');
    });
    setTimeout(function () { $('pAra').focus(); }, 250);
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
  $('sOzet').addEventListener('click', function () { gorunumAc('ozet'); });
  $('sListe').addEventListener('click', function () { gorunumAc('liste'); });
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
  }
  function baslat() {
    ciz();
    $('ara').value = durum.ara;
    var filtreli = durum.sehir || durum.brans || durum.kurum || durum.ara || durum.grup;
    if (GECMIS) GECMIS.replace({ g: filtreli ? 'liste' : 'ozet' });
    if (filtreli) gorunumAc('liste', true);
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
