/* Mezun Arama · Cerrahpaşa 199. Dönem — kaynak: arama/src (özel depo), araclar/web-olustur.js ile üretildi */
window.MEZUN_AYAR = {"veriUrl":"https://script.google.com/macros/s/AKfycbzYhnwxo_qUcBKUdql6eBL5h5143xiSDVCckISraadfD_YLXt9DXX7fI56z5EMTDomt3w/exec?format=json"};
/* İl sınırlı Türkiye haritası — kaynak: Natural Earth 1:10m il sınırları (kamu malı, naturalearthdata.com),
     araclar/harita-uret.js ile sadeleştirildi. Elle değiştirme; betiği yeniden çalıştır.
     IL_HARITA[il] = [SVG yolu, etiket x, etiket y]; görünüm kutusu 0 0 1000 423. */
  var HARITA_KUTU = [1000, 423];
  var IL_HARITA = {
    "Adana": ["M536 351l-6 7l-7 1l-1 0l-2 3l-1 -2l-1 3l0 1l1 -1l1 0l0 -1l1 1l1 -2l0 1l3 0l-5 2l0 2l4 -4l-2 3l-2 4l-3 1l-4 -1l0 1l2 1l-4 -1l-5 4l-2 -2l-16 -9l-4 -2l7 -5l-1 -11l2 -4l-2 -2l-3 0l-3 -2l-1 -4l0 -7l-2 -2l-4 -7l0 -5l3 -4l1 -2l-2 -9l1 -2l6 1l5 -1l7 -7l9 0l11 4l3 -1l-2 -12l20 -14l6 -10l3 -6l6 -4l4 -1l3 1l3 6l2 3l-3 3l-1 4l-4 16l-1 6l2 8l0 3l-4 4l-9 0l-9 20l0 5l1 5l5 1l1 1l1 5l-2 7l-2 -1l-5 6l0 4z",520,313],
    "Adıyaman": ["M625 308l-9 -5l-2 -3l0 -4l2 -3l6 -5l7 -2l5 -2l5 0l4 1l8 -3l3 -3l0 -4l2 -2l4 -2l7 -10l7 -1l3 1l0 2l-3 3l0 1l5 2l7 0l7 -1l7 -3l3 -2l1 0l4 -1l2 1l0 2l-2 4l1 1l-5 4l-4 2l-1 5l-3 1l0 5l-2 0l-2 1l-1 2l2 -2l1 1l1 3l-4 1l2 2l-2 0l-2 1l-2 -1l-1 1l4 3l-12 2l-8 8l-6 1l-2 -1l-3 2l-1 1l-3 1l-1 2l-5 -3l-2 1l-5 -4l-6 -2l-5 0l-6 1z",662,289],
    "Afyonkarahisar": ["M221 228l11 -7l3 -5l5 -13l6 -3l4 -6l1 1l4 5l4 2l4 -1l9 -7l3 1l2 3l15 -9l4 4l3 6l3 3l7 -1l6 1l-1 6l3 2l-1 3l-5 10l-1 8l-9 10l-9 6l-2 -1l-3 -3l-3 -2l-17 16l-6 2l-3 2l-4 2l-12 11l-3 2l-1 2l-1 7l-2 3l-4 2l-8 0l-5 2l-2 -5l-7 -2l0 -7l1 -1l3 -2l16 -12l-1 -5l-7 -11l-7 -2l0 -2l2 -7l4 -3l1 -5z",260,234],
    "Ağrı": ["M982 165l-3 6l0 8l-5 3l-2 1l-5 -2l-6 0l-2 2l1 3l-7 2l-11 -3l-2 1l-2 2l-2 0l-5 -1l-5 -4l-4 -2l-4 0l-4 4l-6 2l0 2l4 2l0 6l-2 2l-6 2l-9 2l-7 4l-2 1l1 -16l-7 -9l-4 -8l2 -2l0 -13l1 -2l-7 -3l-4 -5l7 -1l1 -1l4 -1l3 -3l10 2l16 -4l10 0l3 1l1 4l0 5l1 2l3 2l6 -4l6 2l1 1l3 4l8 3l1 2l4 1l6 -1l8 2l9 -2l3 1z",917,171],
    "Aksaray": ["M426 227l6 -5l0 -4l-2 -5l2 -5l1 1l5 2l1 2l2 2l3 -2l4 0l-1 3l2 6l-3 6l1 4l5 2l3 0l1 3l-2 3l0 4l5 4l2 1l-17 26l-4 0l-12 3l-21 2l-6 -6l-1 -6l-3 -6l2 -11l3 -6l0 -5l6 -8l13 -5l5 0z",428,250],
    "Amasya": ["M492 68l17 4l3 0l9 6l2 4l15 0l4 2l2 0l4 -4l3 -5l2 -2l2 1l2 5l6 4l-1 0l-1 2l4 3l1 3l-3 5l0 2l-2 4l-5 0l0 4l-6 4l-3 1l-2 0l-9 -4l-4 0l-7 11l-1 2l-6 2l-4 6l-8 -1l-1 -2l0 -6l5 -8l2 -8l-2 -3l-6 -3l-9 -1l-3 -4l-3 -6l1 -11l3 -5l-1 -2z",525,94],
    "Ankara": ["M347 113l5 -2l4 -6l-2 -6l0 -3l3 -2l5 0l4 0l15 7l5 6l6 5l2 4l3 3l4 -1l1 -3l1 -1l11 4l-1 10l0 8l0 4l-6 1l-4 1l-5 17l1 6l5 8l2 9l6 12l12 9l3 0l5 3l-2 7l2 5l0 4l-6 5l-5 0l-13 5l-6 -10l1 -15l-3 -7l-11 -7l-2 0l-1 2l-2 6l-8 -3l-10 8l-4 -2l-6 4l-2 0l-4 -2l-4 -2l-8 2l-2 -1l-8 -6l-4 -2l5 -4l2 0l2 -3l0 -2l-3 -3l1 -10l-2 -5l-3 -3l-3 -8l0 -3l2 -2l0 -2l-2 -3l-3 -1l-2 -2l-1 -7l-3 1l-2 -2l-11 1l-2 -2l-7 0l-3 2l-6 -1l-7 2l-1 0l-1 -6l-2 -3l3 -4l4 -2l2 -4l0 -6l1 -2l10 5l9 -1l3 2l4 1l5 -2l9 0l4 -1l14 -5l7 1z",363,156],
    "Antalya": ["M361 404l-3 -1l-8 -5l-4 -5l-1 -2l-4 -5l-1 -3l-4 -6l-4 -4l-11 -3l-4 -3l-1 0l-6 -4l-11 -5l-1 -1l-1 -1l-21 -4l-9 1l-5 -3l-4 4l-2 3l1 7l-1 3l1 3l-1 4l-2 3l-3 6l2 2l-1 1l2 1l-2 2l-1 2l1 0l-3 4l-2 1l0 -4l-2 0l-6 -3l-4 1l-1 3l-1 -1l-1 2l-3 -1l-1 0l1 0l-3 2l-4 0l-4 3l-2 0l1 1l-2 2l-1 0l1 -2l-1 1l-2 -1l-3 3l0 -2l-2 -1l0 -1l1 0l0 -1l-3 0l2 0l-7 -1l-3 -2l-1 0l0 -2l-2 0l-1 2l-5 -4l2 -2l1 -3l2 -6l3 -2l2 1l1 0l0 -4l5 -4l1 -4l0 -4l5 -14l3 -1l3 -3l2 -4l1 -5l3 -4l9 -5l11 -4l3 1l5 4l18 0l3 -4l1 -3l3 -3l5 2l8 -2l5 -3l3 0l4 5l3 1l5 0l13 3l12 8l5 7l6 6l4 2l0 2l-2 3l1 2l6 1l1 2l1 9l2 4l3 7l4 2l1 2l0 12l-4 12z",275,356],
    "Ardahan": ["M888 34l8 1l-3 5l4 2l2 -2l1 2l3 2l3 4l6 5l3 1l-1 2l-3 1l4 1l2 4l1 0l6 -1l3 1l2 3l0 2l-32 14l-3 18l-13 2l-6 -10l-6 -7l-1 -5l3 -6l5 -5l4 -2l2 -5l-4 -9l-1 -7l2 -1l2 -3l2 -5l5 -2z",893,67],
    "Artvin": ["M876 45l1 0l1 7l4 9l-2 5l-4 2l-5 5l-3 6l-13 1l-4 2l0 6l-4 4l-1 6l-2 4l-9 -4l-13 6l-3 -3l0 -6l2 -2l-1 -3l-8 -1l-4 -3l1 -2l7 -8l1 -2l3 -2l1 -3l-3 -3l-4 -4l-2 -8l4 -4l6 -2l2 -4l4 -5l7 3l3 -1l0 2l3 0l3 3l4 -5l3 -1l3 1l8 -1l1 1l4 0l9 4z",843,67],
    "Aydın": ["M91 315l-2 0l-1 3l-1 0l0 1l-4 1l-3 -1l1 -3l1 -1l-1 -4l-2 0l0 -5l2 -1l0 -2l-11 -5l1 -1l5 -1l6 -2l1 -4l-1 -5l2 -2l3 0l4 -2l7 -4l15 1l12 -4l10 0l16 -6l8 1l1 3l3 2l0 2l1 6l-2 4l3 5l4 1l0 1l0 2l-4 1l-5 6l-4 0l-3 1l-2 3l3 5l-7 -1l-7 -5l-4 -1l-3 2l-1 4l-3 1l-6 1l-4 0l-2 -2l-7 1l-4 -3l-9 -2l-2 0l-4 9z",123,292],
    "Balıkesir": ["M100 120l2 -1l4 1l5 0l5 -5l-5 0l-2 -5l-3 -2l4 -3l1 1l1 0l8 1l4 2l-1 2l-6 3l0 2l7 0l4 -2l5 0l-3 4l-3 3l1 2l1 1l1 2l-2 5l3 7l4 3l2 7l14 10l4 1l2 -2l2 7l3 1l1 2l7 0l3 2l-3 8l-1 4l-5 8l-7 3l0 6l-5 -1l-7 3l-6 0l-4 4l-4 1l-2 -1l-3 -6l-5 -6l-1 0l-4 1l-2 -1l3 -5l-2 -2l-2 0l-5 -1l-4 1l-4 -1l-4 -3l-4 2l-4 -5l-3 -1l-13 8l-3 4l-11 8l-2 -2l-1 -4l-6 -1l2 -3l1 1l-1 0l2 1l0 -1l7 -7l-1 -2l3 0l1 -2l3 -1l1 -4l0 -2l-3 -1l-3 2l-1 -1l-8 1l0 -5l2 -5l7 0l10 -6l4 0l1 -1l8 2l9 -4l2 -8l-2 -3l3 -8l-3 -2l-1 -2l7 -6l1 -3zM104 97l4 1l0 1l-1 1l-3 0l-3 2l-3 -1l-1 -3l1 -1l1 1l2 -2l3 1zM104 110l0 1l-3 -1l-1 -1l2 -2l1 1l1 2z",115,163],
    "Bartın": ["M338 34l7 -9l4 0l2 -2l1 1l7 -5l2 0l1 -1l11 -2l0 4l4 8l-4 2l1 5l-5 5l-3 0l-2 5l-7 6l-5 1l-6 0l1 -6l-3 -8l-3 -2l-3 -2z",358,33],
    "Batman": ["M823 240l6 -2l4 2l3 13l1 5l0 3l-7 9l-6 2l-1 3l0 4l6 6l9 3l6 7l-16 11l-8 2l-5 -4l-4 -8l-4 -4l-2 -1l-2 -6l0 -2l5 -4l4 -11l0 -11l2 -10l1 -2l8 -3l0 -2z",823,275],
    "Bayburt": ["M764 138l-9 -2l-5 3l-5 0l-3 1l-3 -9l3 -8l0 -10l-2 -10l2 -1l0 -1l1 -1l1 1l6 4l4 0l5 2l15 -2l2 4l3 13l3 2l9 1l0 2l-3 4l-9 4l-5 4l-10 -1z",761,122],
    "Bilecik": ["M259 119l1 3l5 8l-5 0l-4 3l-2 7l-2 3l-3 2l-5 1l-2 3l-3 2l0 7l-5 7l-10 2l-3 0l-9 -6l-3 -5l1 -9l3 1l2 -1l0 -3l-5 -5l0 -4l2 -6l6 -7l-2 -6l2 -6l3 -3l2 -2l4 6l4 4l4 1l8 -2l6 1l4 3l6 1z",232,137],
    "Bingöl": ["M773 175l3 -1l2 -3l8 2l8 -4l6 6l4 2l3 0l5 7l-2 4l2 4l0 3l3 5l1 3l-1 3l-4 5l-1 5l1 4l3 2l1 4l-16 8l-3 1l-13 -1l-5 1l-3 1l-1 2l-1 4l-2 1l-6 0l-1 -6l-3 -4l3 -7l3 1l2 -4l0 -3l-4 -6l-1 -5l1 -5l4 -8l-1 -3l-18 9l1 -5l-1 -5l2 -8l7 -1l1 -2l5 -1l2 -2l2 -3l4 0z",786,204],
    "Bitlis": ["M878 213l4 -2l13 -8l9 -2l0 5l2 4l6 4l2 3l-1 5l-7 6l-7 11l-10 6l0 3l2 7l0 4l1 3l2 1l-2 6l0 8l-2 2l-2 0l-3 -2l-9 -6l-10 -3l-6 -6l-3 -2l-9 3l-6 0l-5 -2l-1 -8l-3 -13l-4 -2l8 -4l9 1l4 -2l5 -5l0 -3l-2 -3l1 -2l5 0l3 -5l8 -3l8 1z",874,239],
    "Bolu": ["M357 94l-3 2l0 3l2 6l-4 6l-5 2l-7 -1l-14 5l-4 1l-9 0l-5 2l-4 -1l-3 -2l-9 1l-10 -5l-1 2l0 6l-2 4l-4 2l-3 4l-7 -1l-2 -3l-3 -5l-1 -3l1 -3l-2 -3l0 -2l1 -1l4 -8l3 1l4 -2l0 -6l3 -3l4 2l9 -1l6 3l5 -1l4 -3l2 -5l0 -3l2 -2l12 -2l3 -3l1 -6l25 3l0 3l11 6l2 3l-2 8z",312,101],
    "Burdur": ["M204 313l-1 -3l-1 -6l7 -4l1 -3l8 -5l5 -2l4 1l2 4l2 0l11 -7l2 -2l9 9l7 1l3 2l4 8l3 6l1 2l3 0l1 1l0 2l-3 3l-1 3l-3 4l-18 0l-5 -4l-3 -1l-11 4l-9 5l-3 4l-1 5l-2 4l-3 3l-3 1l-4 -6l-6 1l-3 3l-2 -1l1 -3l-1 -4l1 -7l9 -16l-1 -2z",232,315],
    "Bursa": ["M133 114l14 0l-1 2l5 -1l5 2l6 -3l9 3l5 0l2 -1l1 -4l3 0l-4 -3l-3 0l-2 1l0 -7l5 0l8 4l4 -1l3 -3l6 1l3 0l14 -4l7 2l0 3l-4 4l-3 7l2 6l-6 7l-2 6l0 4l5 5l0 3l-10 2l-7 -3l-3 2l-4 12l-2 2l-2 7l-3 2l-3 0l-6 -1l-5 -3l-7 0l-1 -2l-3 -1l-2 -7l-2 2l-4 -1l-14 -10l-2 -7l-4 -3l-3 -7l2 -5l-1 -2l-1 -1l-1 -2l3 -3l3 -4z",175,133],
    "Çanakkale": ["M68 103l-3 1l-5 3l-3 1l-4 2l-4 8l-5 4l-4 4l-4 2l1 3l-7 6l-4 0l2 -2l4 -9l0 -2l-3 -3l1 -1l-1 -1l2 -1l3 -1l6 -5l7 -5l6 -1l3 -3l1 1l3 -2l1 -1l-3 -4l1 -5l7 1l0 5l2 5zM52 171l-11 2l-4 3l-4 0l-2 1l-1 -1l-7 1l-2 -1l0 -1l2 -7l3 -3l0 -4l-1 -4l1 -4l-1 -1l1 -9l2 -3l3 1l3 -1l3 -3l0 -3l1 0l1 -6l5 -1l3 -4l2 -1l7 -8l8 0l5 1l6 -4l6 0l3 -1l2 1l1 2l-2 1l2 2l6 3l7 1l-1 3l-7 6l1 2l3 2l-3 8l2 3l-2 8l-9 4l-8 -2l-1 1l-4 0l-10 6l-7 0l-2 5l0 5zM21 152l1 0l0 4l-5 -3l0 -1l4 0zM18 130l0 1l-1 1l-12 3l-5 -2l1 -3l4 -3l8 -2l3 1l0 5l2 -1z",60,142],
    "Çankırı": ["M358 89l0 -1l6 -2l6 -5l3 -5l1 -1l6 1l5 -3l2 -5l2 2l6 0l7 6l3 1l21 -10l2 3l-4 6l2 3l3 1l4 3l4 0l2 4l-1 6l1 5l1 5l3 8l0 3l-3 6l-6 3l-5 0l-25 -9l-2 1l-1 3l-4 1l-3 -3l-2 -4l-6 -5l-5 -6l-15 -7l-9 0l1 -5z",406,95],
    "Çorum": ["M460 53l2 2l8 1l3 2l6 2l2 -2l1 -2l3 4l1 8l6 0l1 2l-3 5l-1 11l4 9l2 1l9 1l6 3l2 3l-2 8l-5 8l0 6l-7 1l0 5l-2 5l-4 2l-3 1l-4 -2l-8 4l-6 0l-4 1l-8 -1l-10 4l-8 1l-3 1l0 -3l3 -5l0 -2l-1 -3l-4 -3l-2 -8l6 -3l3 -6l0 -1l-3 -8l-1 -7l-1 -2l0 -3l1 -6l-2 -4l12 -4l1 -3l-3 -2l-1 -3l1 -1l3 -7l4 -3l3 -6l3 -1z",470,103],
    "Denizli": ["M159 269l4 -2l1 -3l2 -5l5 -1l6 3l3 0l2 -2l2 0l2 2l5 -1l1 1l1 -2l3 -2l8 0l3 -2l0 -8l7 -2l7 2l7 11l1 5l-16 12l-3 2l-1 1l0 7l7 2l2 5l-8 5l-1 3l-7 4l1 9l2 2l-8 13l-2 10l-3 2l0 5l-2 3l-2 1l-5 -3l-3 0l-1 -2l-1 -8l-4 -3l-3 -2l-3 -3l-4 -1l-4 -8l-5 -2l-1 -5l-2 -4l-1 -2l2 -3l3 -1l4 0l5 -6l4 -1l0 -3l-4 -1l-3 -5l2 -4l-1 -6l0 -2l-3 -2l-1 -3z",188,293],
    "Diyarbakır": ["M815 226l6 6l0 5l1 2l1 1l0 2l-8 3l-1 2l-2 10l0 11l-4 11l-5 4l0 2l2 6l-3 2l-19 -1l-5 2l-3 5l-5 0l-14 10l-7 8l-3 -2l-3 -9l-2 -17l-5 -3l-1 2l-4 -3l-4 -2l-6 -6l-3 -1l-7 -1l-4 -2l2 -3l-1 -1l2 -4l0 -2l-2 -1l-4 1l-1 0l1 -7l-1 -4l7 -1l9 2l7 -3l8 0l4 -2l3 -6l2 0l4 2l24 -1l2 -1l1 -2l1 -4l3 -1l5 -1l13 1l3 -1l16 -8z",767,267],
    "Düzce": ["M276 68l8 0l1 -1l6 1l6 -4l2 2l9 4l13 1l-1 6l-3 3l-12 2l-2 2l0 3l-2 5l-4 3l-5 1l-6 -3l-9 1l-4 -2l1 -2l-1 -3l0 -4l-1 -4l2 -4l3 -3l-1 -4z",293,80],
    "Edirne": ["M60 9l1 -1l4 21l-1 7l-2 3l-1 4l-3 6l3 4l0 9l-1 4l-2 3l-2 4l-1 5l0 6l4 8l-1 5l-9 1l-5 3l-3 -2l-3 1l-1 0l-4 1l-11 -1l-3 -8l4 -1l3 -5l3 -2l0 -3l1 1l1 -3l2 1l0 -1l3 -3l-1 -1l1 -1l1 -1l0 -1l-2 -3l0 -3l-1 0l1 -2l-1 -3l1 -3l-1 -1l5 -1l7 -6l3 2l2 -5l-2 -9l0 -5l-1 1l-6 -4l0 -2l-7 -2l-1 -4l3 -3l8 -1l2 -5l-1 -1l3 -3l7 0l2 -1l2 1z",47,60],
    "Elazığ": ["M728 221l5 0l5 -2l3 -4l2 -6l0 -5l1 -1l6 -1l18 -9l1 3l-4 8l-1 5l1 5l4 6l0 3l-2 4l-3 -1l-3 7l3 4l1 6l-18 1l-4 -2l-2 0l-3 6l-4 2l-8 0l-7 3l-9 -2l-10 1l-4 2l-5 -3l-4 -5l-7 1l-6 -3l-4 0l-3 -3l-2 0l-2 -6l2 -4l3 -2l2 -4l7 0l0 -10l-2 -3l0 -3l2 -2l6 -1l2 3l0 5l2 3l10 -2l2 1l2 0l7 2l7 3l3 2l4 1l2 -3l4 0z",719,230],
    "Erzincan": ["M683 143l1 -6l7 0l2 -1l6 2l10 6l2 2l6 2l9 1l12 -4l4 -5l3 -1l5 0l5 -3l9 2l-2 3l0 4l2 2l9 0l4 4l1 6l6 5l-3 6l0 4l-3 -1l-16 -1l-4 -1l-10 4l-7 -3l-2 0l-2 3l-4 2l-12 1l-8 -1l-4 1l-5 0l-6 2l-2 3l-3 1l-1 2l-4 2l-1 2l2 3l-4 2l-1 4l-2 1l1 8l-3 1l-5 -6l-8 -1l-4 -2l2 -4l-2 -13l5 -4l-5 -4l-1 -3l2 -2l0 -7l4 -6l4 -1l1 -2l-1 -1l-8 1l0 -2l2 -6l2 -1l2 2l3 0l5 -2l5 0z",713,163],
    "Erzurum": ["M876 175l-5 1l-7 4l-1 3l0 3l-1 2l-7 5l-6 1l-4 3l-5 0l-4 -2l-5 -5l-7 -7l-4 -1l-8 2l-5 -7l-3 0l-4 -2l-6 -6l-8 4l-5 -1l0 -4l3 -6l-6 -5l-1 -6l-4 -4l-9 0l-2 -2l0 -4l2 -3l10 1l5 -4l9 -4l3 -4l0 -2l-9 -1l-3 -2l-3 -13l-2 -4l9 -5l7 -1l2 -4l6 -2l10 -7l4 3l8 1l1 3l-2 2l0 6l3 3l13 -6l9 4l2 -4l1 -6l4 -4l0 -6l4 -2l13 -1l1 5l6 7l6 10l-1 4l1 7l-11 7l-7 2l-2 4l4 5l7 2l4 4l3 1l4 7l-3 3l-4 1l-1 1l-7 1l4 5l7 3l-1 2l0 13l-2 2z",829,138],
    "Eskişehir": ["M265 130l7 1l2 3l1 6l1 0l7 -2l6 1l3 -2l7 0l2 2l11 -1l2 2l3 -1l1 7l2 2l3 1l2 3l0 2l-2 2l0 3l3 8l2 2l3 6l-1 10l3 3l0 2l-2 3l-2 0l-5 4l-2 5l-4 0l-9 -1l-7 1l-3 -3l-3 -6l-4 -4l-15 9l-2 -3l-3 -1l-5 5l-6 3l-2 0l-4 -2l-2 -4l-3 -2l-1 -4l-6 -7l-2 -9l-5 -5l-2 -4l5 -7l0 -7l3 -2l2 -3l5 -1l3 -2l2 -3l2 -7l4 -3l5 0z",284,168],
    "Gaziantep": ["M646 354l-11 5l-9 2l-7 4l-4 -4l-9 -5l-1 1l-7 -8l-4 -2l-3 -1l-2 -4l-2 -1l-1 1l-1 5l-8 5l-3 2l-3 -3l-4 -2l-3 -4l6 -9l5 -9l3 -3l6 -2l2 -4l3 2l1 6l4 1l5 -5l3 -2l14 -3l6 -1l2 -1l1 -7l6 -1l5 0l6 2l5 4l-2 0l-2 0l-6 9l-1 3l1 1l1 2l-1 -1l-1 2l2 4l0 5l2 2l3 -1l0 4l2 3l2 5l-1 0l0 3z",611,337],
    "Giresun": ["M650 77l5 1l4 -1l3 2l3 0l3 0l5 0l5 -4l2 2l2 0l3 -3l7 -3l7 0l5 -2l-1 12l1 8l-6 1l-1 2l-5 3l-1 2l1 2l-3 4l-1 6l2 2l6 1l4 3l0 2l-8 6l0 7l2 4l-1 2l-2 1l-7 0l-11 -4l-5 1l-9 -5l-2 -3l0 -4l-4 -16l-5 -6l1 -9l-1 -7l2 -5l0 -2z",675,102],
    "Gümüşhane": ["M740 103l2 10l0 10l-3 8l3 9l-4 5l-9 3l-12 0l-6 -2l-2 -2l-10 -6l-6 -2l1 -2l-2 -4l0 -7l8 -6l0 -2l-4 -3l-6 -1l-2 -2l1 -6l3 -4l-1 -2l1 -2l5 -3l1 -2l6 -1l2 1l2 -2l2 1l1 4l4 4l12 5l3 0l2 -1l1 -3l1 -1l4 2l2 4z",716,120],
    "Hakkari": ["M931 326l-6 -4l2 -5l0 -6l-3 -8l2 -10l7 0l7 -1l3 -1l4 1l7 -1l3 -1l3 -8l4 -1l5 1l0 2l6 0l3 1l1 3l1 1l1 2l3 -1l3 2l2 3l-3 3l0 2l3 3l-1 11l2 0l2 3l2 0l1 2l5 4l0 2l-3 3l1 5l-2 -2l-6 0l-4 2l-4 5l-6 2l-3 5l-3 -1l-2 -6l0 -4l2 -2l1 -1l-1 -4l-3 -3l-5 -2l-5 0l-5 6l-4 1l-3 -2l-8 0l-4 -1l-2 0z",961,310],
    "Hatay": ["M574 354l-1 0l1 2l-3 4l-2 14l-1 4l1 4l2 3l-1 3l4 1l1 6l-4 0l-6 0l-2 1l-2 0l-2 -1l0 15l-4 0l-1 0l0 3l-4 0l-1 2l-1 7l-1 0l-4 -3l-3 0l-1 -4l-4 0l4 -6l-2 -5l-5 -11l-3 -2l0 -3l6 -6l1 -2l3 -2l3 -4l8 -5l1 -4l-1 -8l-3 -5l-4 -4l-2 0l-5 3l0 -4l5 -6l9 1l2 0l3 0l3 4l6 -1l3 4l4 2l3 3z",553,380],
    "Iğdır": ["M1000 165l-8 -5l-3 -4l-7 5l0 4l-3 -1l-9 2l-8 -2l-6 1l-4 -1l-1 -2l-8 -3l-3 -4l-5 -3l-2 0l-6 4l-2 -1l-2 -3l0 -5l-1 -4l2 -2l0 -3l3 -1l6 -1l7 -2l13 5l7 1l3 -1l2 1l6 -2l4 1l10 7l4 6l1 0l2 2l2 1l5 7l1 3z",958,150],
    "Isparta": ["M292 247l2 5l17 16l0 3l-9 4l-1 5l1 10l-2 4l0 3l-2 2l-2 1l0 2l2 5l-2 7l-3 0l-5 3l-8 2l-5 -2l-1 -3l-3 0l-1 -2l-3 -6l-4 -8l-3 -2l-3 0l-4 -1l-9 -9l-2 2l-11 7l-2 0l-2 -4l4 -1l4 -2l2 -3l1 -7l1 -2l3 -2l12 -11l4 -2l3 -2l6 -2l17 -16l2 1l4 4l2 1z",276,281],
    "İstanbul": ["M133 38l9 6l28 12l6 2l2 -1l2 1l-1 3l-3 2l2 2l-1 4l-3 3l0 2l-3 -1l-1 1l-5 2l-3 -1l-7 1l-2 -1l1 -2l-2 -1l0 -1l-1 -3l-1 0l1 3l-1 4l-1 -1l-4 -3l-11 -3l-3 0l-1 -8l2 -10l-2 -9l3 -3zM188 82l-6 -2l-6 -5l-1 -3l3 -3l1 -5l-1 0l5 -6l3 0l35 6l-2 0l1 4l-1 4l-10 5l-1 3l-2 0l-1 -1l-2 -3l-2 -2l-3 -1l-10 9z",152,60],
    "İzmir": ["M84 283l0 -3l-2 -4l-5 0l-4 -2l0 -2l-4 -1l-3 0l-3 2l-2 -6l-2 -3l-1 0l-1 -3l-6 1l-1 4l-1 0l1 2l-1 1l-2 -3l0 1l-2 -1l0 -3l-2 1l-4 -3l0 1l-1 -2l0 -2l-2 2l-6 -3l0 -1l1 0l2 -2l1 0l-1 -1l0 -2l1 0l0 -1l0 3l4 1l0 -2l1 1l3 -2l-1 -4l2 1l1 -2l-3 -2l-3 1l1 -2l-2 -3l-1 -7l0 -2l3 -1l5 2l7 9l0 3l-3 1l1 0l-1 2l2 1l3 7l1 -1l-1 -2l0 -2l1 -3l2 0l2 4l8 -1l5 -2l3 0l4 -3l-7 -1l-5 2l1 -1l-3 -3l-4 -3l4 2l-3 -2l1 -4l-1 0l-2 0l0 -1l-2 0l0 -1l-2 -1l2 -1l-2 -4l5 -2l5 1l-1 -1l2 0l0 -1l-2 -3l3 -1l0 1l1 0l0 -2l3 -2l1 1l1 -2l-1 0l1 -2l-1 -2l-3 2l-1 -2l-2 1l0 -1l-3 2l-3 -2l-1 -4l1 -1l-1 0l5 -4l-3 -5l-3 -1l11 -8l3 -4l13 -8l3 1l2 2l8 22l0 4l-2 1l-9 6l-1 5l-4 7l0 1l3 3l2 5l3 3l10 0l2 2l1 3l7 5l2 4l2 2l3 0l2 -5l5 1l3 0l4 6l8 -2l1 2l5 1l2 2l2 7l2 3l-16 6l-10 0l-12 4l-15 -1l-7 4l-4 2l-3 0z",86,242],
    "Kahramanmaraş": ["M566 254l8 -9l3 -9l9 -3l7 1l2 2l12 -1l-3 5l1 4l3 0l8 1l7 4l8 3l2 5l-3 12l-3 5l-3 10l-2 4l-8 8l0 4l2 3l9 5l-1 7l-2 1l-6 1l-7 2l-7 1l-3 2l-5 5l-4 -1l-1 -6l-3 -2l-2 4l-6 2l-3 -3l-4 -4l-2 0l-10 2l-1 -1l-2 1l-2 -2l-1 -5l-2 -3l4 -6l0 -5l4 -4l0 -3l-2 -8l1 -6l4 -16l1 -4l3 -3z",591,281],
    "Karabük": ["M358 88l1 -2l-2 -3l-11 -6l0 -3l-7 -1l0 -6l2 -9l5 -6l6 0l5 -1l7 -6l2 -5l3 0l5 -5l2 2l7 -2l3 3l3 9l-5 1l-5 6l0 2l1 8l5 1l2 3l-2 5l-5 3l-6 -1l-1 1l-3 5l-6 5l-6 2z",364,62],
    "Karaman": ["M417 299l7 1l1 9l13 15l5 8l-3 2l-4 0l-7 5l-6 2l-7 0l-5 1l-8 2l-8 4l-3 7l-2 0l-1 -2l-7 3l0 2l4 7l3 3l3 0l3 4l-1 2l-4 -2l-1 1l-2 4l-1 2l-5 0l-6 2l-10 -1l-1 -2l-4 -2l-5 -11l13 -13l2 -4l-1 -2l-3 0l-3 -2l0 -2l1 -5l11 -15l9 -10l5 -2l16 -2l5 -2l4 -5l3 -2z",395,337],
    "Kars": ["M929 67l1 5l5 3l4 3l1 6l3 6l1 6l-2 2l1 2l-3 2l0 3l-1 0l0 1l-2 1l-2 2l3 4l-1 5l4 5l1 2l-1 1l2 3l0 2l-3 1l0 2l-16 4l0 3l-2 2l-3 -1l-10 0l-16 4l-10 -2l-4 -7l-3 -1l-4 -4l-7 -2l-4 -5l2 -4l7 -2l11 -7l-1 -7l1 -4l13 -2l3 -18l32 -14z",909,111],
    "Kastamonu": ["M373 16l6 -1l21 -10l47 4l0 4l-1 4l-3 3l0 2l3 2l17 2l3 4l-2 4l-3 3l-1 2l0 14l-3 1l-3 6l-4 3l-4 8l1 3l3 2l-1 3l-8 3l-6 1l-9 -4l-2 -3l4 -6l-2 -3l-21 10l-3 -1l-7 -6l-6 0l-4 -5l-5 -1l-1 -8l0 -2l5 -6l5 -1l-3 -9l-3 -3l-7 2l-2 -2l-1 -5l4 -2l-4 -8l0 -4z",419,41],
    "Kayseri": ["M498 288l1 -8l2 -1l-1 -5l0 -6l-2 -4l-8 0l-3 -4l-4 -10l8 -13l0 -9l-6 -10l4 -12l12 1l25 -15l5 -6l5 1l1 3l4 1l5 3l5 1l4 -1l9 1l5 3l4 -2l10 1l4 2l2 6l-10 27l0 3l-2 1l-3 9l-8 9l-2 -3l-3 -6l-3 -1l-4 1l-6 4l-3 6l-6 10l-20 14l2 12l-3 1l-11 -4l-9 0z",531,232],
    "Kırıkkale": ["M411 190l-5 -8l-2 -9l-5 -8l-1 -6l5 -17l4 -1l6 -1l0 -4l0 -8l1 -10l15 5l5 0l2 8l4 3l1 3l0 2l-3 5l1 9l-8 8l-2 7l-4 5l-8 7l-6 10z",419,151],
    "Kırklareli": ["M82 0l4 1l5 6l7 6l1 0l0 -1l2 -1l1 -1l4 -1l6 1l0 -1l0 -2l11 1l1 6l-3 0l0 5l5 9l0 1l1 3l6 6l-3 3l-18 2l-11 3l-4 7l-3 2l-3 1l-9 -7l-14 1l-8 2l-2 -3l3 -6l1 -4l2 -3l1 -7l-4 -21l6 -1l5 -6l7 2l1 -2l2 -1z",92,28],
    "Kırşehir": ["M432 208l0 -2l-5 -3l-3 0l-12 -9l-1 -4l6 -10l8 -7l4 -5l2 -7l8 -8l2 2l3 0l6 5l6 1l2 5l7 8l5 2l3 2l1 3l-3 1l-3 -1l-2 2l3 8l-1 5l3 5l-3 3l-12 5l-1 4l1 5l-2 0l-6 -5l-4 0l-3 2l-2 -2l-1 -2l-5 -2l-1 -1z",443,186],
    "Kilis": ["M619 365l-4 2l-10 -1l-5 1l-2 -1l-3 2l-2 -1l0 -5l-3 -3l-16 -5l3 -2l8 -5l1 -5l1 -1l2 1l2 4l3 1l4 2l7 8l1 -1l9 5l4 4z",596,357],
    "Kocaeli": ["M221 64l14 0l6 -5l8 3l-2 6l1 3l4 1l0 2l-1 4l-4 0l-4 -1l-1 1l0 1l2 1l-4 3l-2 10l-2 5l-3 2l-7 2l-3 0l-7 -2l-14 4l-6 -1l1 -8l2 -3l3 1l1 2l11 -3l6 0l3 1l0 -1l0 -2l-2 0l-6 1l-6 -3l-12 1l-3 1l-3 -2l1 -1l-1 -1l-3 1l1 -2l1 0l-2 -3l10 -9l3 1l2 2l2 3l1 1l2 0l1 -3l10 -5l1 -4l-1 -4l2 0z",222,83],
    "Konya": ["M389 193l11 7l3 7l-1 15l6 10l-6 8l0 5l-2 3l-3 8l0 6l3 6l1 6l6 6l21 -2l12 -3l4 0l1 4l1 3l5 2l8 11l0 3l-3 7l0 5l5 6l1 3l-1 3l-5 2l-5 4l-5 1l-3 3l-5 -8l-13 -15l-1 -9l-2 -1l-5 0l-3 2l-4 5l-5 2l-16 2l-5 2l-9 10l-11 15l-1 5l0 2l3 2l3 0l1 4l-9 10l-6 5l-1 -9l-1 -2l-6 -1l-1 -2l2 -3l0 -2l-4 -2l-5 -5l-6 -8l-12 -8l-13 -3l-5 0l-3 -1l-4 -5l2 -7l-2 -5l0 -2l2 -1l2 -2l0 -3l2 -4l-1 -10l1 -5l9 -4l0 -3l-17 -16l-2 -5l9 -6l9 -10l1 -8l5 -10l1 -3l-3 -2l1 -6l7 0l2 -5l4 2l8 6l2 1l8 -2l4 2l4 2l2 0l6 -4l4 2l10 -8l8 3l2 -6l1 -2l2 0z",363,272],
    "Kütahya": ["M210 147l-1 9l3 5l9 6l3 0l10 -2l2 4l5 5l2 9l6 7l1 4l-4 6l-6 3l-5 13l-3 5l-11 7l0 -7l-3 -3l-8 -2l-3 0l-3 1l-2 7l-13 2l-4 0l-3 -2l-3 0l-3 2l0 -4l-3 -6l0 -5l-3 -7l-11 -3l-2 -3l0 -6l7 -3l5 -8l1 -4l3 -8l2 1l6 1l3 0l3 -2l2 -7l2 -2l4 -12l3 -2l7 3l5 -2z",204,191],
    "Malatya": ["M652 203l11 -5l4 2l5 0l5 3l3 4l-3 0l-2 2l0 3l2 3l0 10l-7 0l-2 4l-3 2l-2 4l1 4l5 4l5 1l6 3l7 -1l4 5l3 2l9 -1l1 4l-1 7l-3 2l-3 2l-11 2l-7 0l-5 -2l0 -1l3 -3l0 -2l-3 -1l-7 1l-7 10l-4 2l-2 2l0 4l-3 3l-8 3l-4 -1l-5 0l-5 2l-7 2l2 -4l3 -10l3 -5l3 -12l-2 -5l-8 -3l-7 -4l-8 -1l-3 0l-1 -4l3 -5l3 -2l13 -11l0 -3l-2 -9l1 -2l2 -1l5 2l4 -1l8 -4l8 -1l3 0z",651,241],
    "Manisa": ["M157 198l3 4l10 2l3 7l0 5l3 6l0 4l-10 9l1 3l2 2l1 6l-1 5l-3 4l3 1l2 2l-5 1l-2 5l-1 3l-2 1l-10 0l-6 -12l-5 -1l-2 -2l-7 2l-4 -6l-3 0l-3 -1l-2 0l-2 5l-3 0l-2 -2l-1 -3l-8 -6l-1 -3l-2 -2l-10 0l-3 -3l-2 -5l-3 -3l4 -8l1 -5l6 -3l5 -4l0 -4l-2 -6l-4 -13l4 -2l4 3l4 1l4 -1l5 1l2 0l2 2l-3 5l2 1l4 -1l1 0l5 6l3 6l2 1l4 -1l4 -4l6 0l7 -3l5 1z",132,225],
    "Mardin": ["M848 332l-22 6l-14 0l-16 -4l-10 2l-10 5l-5 1l-8 6l-3 -1l-4 -9l0 -5l-1 -2l-5 -6l-1 -8l7 -8l9 -6l5 -4l5 0l3 -5l5 -2l19 1l4 -2l5 5l4 8l5 4l8 -2l16 -11l4 14l0 4l-9 5l-2 3l1 2l6 2l3 3l1 4z",797,318],
    "Mersin": ["M484 361l-1 1l0 -2l-3 -3l-6 -2l-10 3l-7 7l-7 5l-5 8l-5 4l0 6l-5 2l-2 6l-1 0l1 -2l-1 -4l-3 -1l-3 3l-1 2l-3 2l-2 2l-1 3l-2 -4l-5 4l-1 0l1 -1l-5 -1l-4 2l-3 -1l-1 1l-5 1l-3 -1l-3 3l-1 0l-7 -1l-7 5l-7 -1l-5 -3l4 -12l0 -12l10 1l6 -2l5 0l1 -2l2 -4l1 -1l4 2l1 -2l-1 -2l-8 -5l-4 -7l0 -2l7 -3l1 2l2 0l3 -7l8 -4l8 -2l5 -1l7 0l6 -2l5 -4l9 -3l3 -3l8 -3l2 -2l6 -3l0 -2l4 0l7 -3l4 1l4 7l2 2l0 7l1 4l3 2l3 0l2 2l-2 4l1 11l-7 5z",427,363],
    "Muğla": ["M188 390l-1 -2l-4 -2l-1 0l0 -1l-3 -1l2 -2l0 -3l-2 -1l2 -1l-1 -4l-1 -1l-4 1l1 -1l-1 -2l1 -2l1 1l2 -2l0 1l1 0l0 -2l-4 -3l-4 -2l-1 -2l-2 3l0 1l-2 0l-1 2l2 3l0 -3l1 1l-2 3l-1 1l-1 -2l1 -1l-3 -1l0 -2l-2 -1l-2 0l-2 0l-1 -1l-2 0l0 -7l-1 1l-1 -1l-1 0l-2 0l1 2l-3 -1l1 -1l-2 -1l0 -1l0 -2l-1 1l-3 1l0 1l2 0l-1 3l-4 -2l0 1l-2 1l0 -2l2 -1l-3 -1l-2 2l1 3l2 2l0 2l-1 -1l-1 1l-1 0l0 1l-3 2l-3 4l-1 1l-2 0l-1 1l1 1l-2 0l0 -1l-1 1l-2 -3l4 0l3 -2l-1 -1l-1 1l0 -2l-1 -1l0 1l-4 -1l4 -2l3 -1l0 1l1 0l0 -1l-2 -1l2 -2l1 1l-1 -3l-1 0l-2 3l-1 -1l-6 2l-1 -1l-2 1l-3 -1l-5 0l-1 2l-1 5l-6 -2l-4 2l-6 -2l-1 -2l3 0l2 -3l6 0l3 -1l0 -2l2 0l2 1l4 0l2 -1l5 -1l7 2l1 -1l-1 -2l-2 0l1 0l-1 -2l3 -1l-2 -2l1 0l0 -1l1 0l-1 -1l6 0l1 2l-1 -3l2 1l1 -4l2 1l0 -2l4 -2l-1 -1l-9 1l-1 1l0 1l-7 -2l-10 2l0 1l-5 -1l-3 2l-4 -1l0 2l-2 -2l-2 0l-2 -2l-2 1l0 -1l-1 2l-1 -2l-2 1l0 2l-1 1l-2 0l-2 -6l0 -2l3 -2l-2 0l0 -1l4 0l0 -2l1 2l2 -1l0 1l3 0l0 2l2 0l5 -2l-1 0l-2 -4l4 -1l-1 2l2 -2l-1 0l0 -2l1 -3l-1 0l-2 0l-2 3l-1 0l1 -1l-1 -1l-2 0l1 -2l0 -3l-2 2l-2 -1l0 -3l2 -2l-2 -1l4 -9l3 -1l4 2l4 1l4 3l7 -1l2 2l4 0l6 -1l3 -1l1 -4l3 -2l4 1l7 5l7 1l1 6l5 2l4 8l4 1l3 3l3 2l4 3l1 8l1 2l3 0l5 3l3 -3l1 -6l3 -2l1 4l-1 3l2 1l3 -3l6 -1l4 6l-5 14l0 4l-1 4l-5 4l0 4l-1 0l-2 -1l-3 2l-2 6l-1 3l-2 2z",147,341],
    "Muş": ["M845 197l4 -3l6 -1l7 -5l1 -2l0 -3l1 -3l7 -4l5 -1l4 8l7 9l-1 16l-4 3l-4 2l-8 -1l-2 1l-7 3l-1 3l-1 1l-5 0l-1 2l2 3l0 3l-2 1l-3 4l-4 2l-9 -1l-8 4l-6 2l-1 -1l-1 -7l-6 -6l-1 -4l-3 -2l-1 -4l1 -5l4 -5l1 -3l-1 -3l-3 -5l0 -3l-2 -4l2 -4l8 -2l4 1l7 7l5 5l4 2l5 0z",845,207],
    "Nevşehir": ["M478 252l-3 -1l-3 -3l-8 2l-5 -2l-5 -4l0 -4l2 -3l-1 -3l-6 -1l-2 -1l-1 -4l3 -6l-2 -6l1 -3l6 5l2 0l-1 -5l1 -4l12 -5l3 -3l-3 -5l1 -5l-2 -5l0 -4l1 -1l8 1l1 4l3 2l2 5l4 3l2 2l-1 3l2 5l-4 12l6 10l0 9l-8 13l-5 2z",472,222],
    "Niğde": ["M462 319l-1 -3l-5 -6l0 -5l3 -7l0 -3l-8 -11l-5 -2l-1 -3l-1 -4l17 -26l3 1l8 -2l3 3l3 1l5 -2l4 10l3 4l8 0l2 4l0 6l1 5l-2 1l-1 8l-7 7l-5 1l-6 -1l-1 2l2 9l-1 2l-3 4l0 5l-4 -1l-7 3l-4 0z",472,280],
    "Ordu": ["M600 64l8 0l5 3l7 4l3 0l1 -1l2 -3l2 -3l2 2l3 0l0 4l5 3l1 2l2 -1l2 1l7 2l0 2l-2 5l1 9l-1 7l5 6l-4 2l-4 1l0 4l-6 1l-5 5l-2 0l-4 -3l-5 -13l-7 -1l-12 -8l-11 0l-16 -7l-1 -2l1 -2l6 -2l9 -6l8 -11z",620,88],
    "Osmaniye": ["M555 298l0 5l-4 6l2 3l1 5l2 2l2 -1l1 1l10 -2l4 1l5 6l-5 6l-3 6l-6 9l-6 1l-3 -4l-3 0l-9 0l2 -7l0 -4l-2 -2l-5 -1l-1 -5l0 -5l9 -20l9 0z",555,324],
    "Rize": ["M767 74l6 -4l5 1l4 -3l3 -1l3 -4l4 -2l5 0l6 -3l4 -3l5 -1l1 6l5 6l3 3l-1 3l-3 2l-1 2l-7 8l-1 2l-10 7l-6 2l-2 4l-7 1l-9 5l0 -5l0 -4l-7 -22z",793,78],
    "Sakarya": ["M249 62l14 4l3 2l10 0l1 4l-3 3l-2 4l1 4l0 4l1 3l-1 2l-3 3l0 6l-4 2l-3 -1l-4 8l-1 1l2 5l-1 3l-6 -1l-3 -2l-5 -2l-10 2l-4 -1l-6 -7l-2 -6l3 0l10 -4l2 -5l2 -10l4 -3l-2 -1l0 -1l1 -1l4 1l4 0l1 -4l0 -2l-4 -1l-1 -3l2 -6z",253,92],
    "Samsun": ["M514 31l6 0l18 -7l-2 2l-1 3l1 1l1 -3l2 -2l3 3l0 -1l4 5l1 4l-1 5l1 2l4 4l1 3l5 2l1 2l3 3l3 1l3 -2l3 -3l2 -4l12 1l7 4l3 4l0 4l6 2l-3 4l-3 3l-2 4l-7 5l-4 2l-4 1l-3 -3l-3 0l-8 3l-6 -4l-2 -5l-2 -1l-2 2l-3 5l-4 4l-2 0l-4 -2l-15 0l-2 -4l-9 -6l-3 0l-19 -4l-4 0l-1 -8l-3 -4l3 -2l0 -2l2 -1l7 -4l1 5l3 1l-1 1l3 0l3 2l2 1l5 -2l3 1l1 -1l-2 -16l0 -4l2 -4z",541,60],
    "Siirt": ["M857 260l3 2l6 6l10 3l12 8l2 0l2 -2l0 -8l2 -6l5 0l7 2l1 11l-1 9l-1 4l2 5l-1 3l-3 4l-20 -3l-10 -3l-7 0l-4 4l-11 -1l-7 -3l-6 -7l-9 -3l-6 -6l0 -4l1 -3l6 -2l7 -9l5 2l6 0l9 -3z",867,281],
    "Sinop": ["M447 9l6 1l8 -2l4 2l9 0l8 -4l3 -4l0 -2l3 1l1 -1l1 3l3 2l4 -1l1 0l1 2l-4 -1l-1 1l-1 4l0 3l3 4l3 2l-1 1l1 3l4 3l6 1l5 4l-2 4l0 4l2 12l0 4l-1 1l-3 -1l-2 1l-5 0l-3 -2l-3 0l1 -1l-3 -1l-1 -5l-7 4l-2 1l0 2l-3 2l-1 2l-2 2l-6 -2l-3 -2l-8 -1l-2 -2l0 -14l1 -2l3 -3l2 -4l-3 -4l-17 -2l-3 -2l0 -2l3 -3l1 -4l0 -4z",481,32],
    "Sivas": ["M643 114l2 -1l0 -4l4 -1l4 -2l4 16l0 4l2 3l9 5l5 -1l6 2l5 2l0 4l-1 2l-5 0l-5 2l-3 0l-2 -2l-2 1l-2 6l0 2l8 -1l1 1l-1 2l-4 1l-4 6l0 7l-2 2l1 3l5 4l-5 4l2 13l-2 4l-11 5l-3 0l-8 1l-8 4l-4 1l-5 -2l-2 1l-1 2l2 9l0 3l-4 4l-4 2l-5 5l-3 2l-12 1l-2 -2l-7 -1l-7 2l0 -3l10 -27l-2 -6l-4 -2l-5 -1l-5 0l-4 2l-5 -3l-9 -1l-4 1l-5 -1l-5 -3l-4 -1l-1 -3l-5 -1l4 -4l6 -10l9 -7l1 -7l-5 -7l-1 -5l12 -2l8 -1l8 -3l2 -1l3 -11l2 -1l2 0l6 0l9 -2l14 -1l3 -3l6 -1l5 -10l3 6l4 3l2 0l5 -5l4 0z",610,169],
    "Şanlıurfa": ["M720 363l-14 3l-8 -3l-12 1l-4 -1l-3 -1l-7 -8l-3 -2l-13 -3l-5 1l-5 4l0 -3l1 0l-2 -5l-2 -3l0 -4l-3 1l-2 -2l0 -5l-2 -4l1 -2l1 1l-1 -2l-1 -1l1 -3l7 -9l4 0l1 -1l5 3l1 -2l3 -1l1 -1l12 -3l7 -7l12 -2l-4 -3l1 -1l2 1l2 -1l2 0l-2 -2l4 -1l-1 -3l-1 -1l-2 2l2 -3l3 0l0 -5l3 -1l1 -5l7 -3l4 2l7 1l3 1l6 6l6 4l2 1l1 -2l5 3l2 17l3 9l3 2l1 8l5 6l1 2l0 5l4 9l3 1l-15 8l-11 4l-17 3z",702,326],
    "Şırnak": ["M902 321l-6 -2l-1 -1l-4 1l-8 14l-9 2l-2 0l0 -3l-1 -1l0 -4l-2 -3l-2 0l-2 -1l-1 -2l-8 9l-8 2l-1 -4l-3 -3l-6 -2l-1 -2l2 -3l9 -5l0 -4l-4 -14l7 3l11 1l4 -4l7 0l10 3l20 3l3 -4l1 -3l4 -3l10 3l5 -1l-2 10l3 8l0 6l-2 5l-2 -1l-3 1l-8 -4l-4 1l-6 2z",883,312],
    "Tekirdağ": ["M131 68l-8 3l-4 5l-11 -3l-11 2l-1 1l-2 2l-2 7l-5 5l-2 4l-6 5l-8 2l-1 2l-2 0l-2 -5l0 -5l-7 -1l-4 -8l0 -6l1 -5l2 -4l2 -3l1 -4l-1 -10l8 -2l14 -1l9 7l3 -1l3 -2l4 -7l11 -3l18 -2l2 9l-2 10l1 8z",90,68],
    "Tokat": ["M577 83l-1 2l0 2l13 6l4 1l11 0l12 8l7 1l2 7l-5 10l-6 1l-3 3l-14 1l-9 2l-6 0l-2 0l-2 1l-3 11l-2 1l-8 3l-8 1l-12 2l-3 -4l0 -6l-2 -3l-7 2l-6 0l-5 0l-4 -3l-4 -4l4 -6l6 -2l1 -2l7 -11l4 0l4 1l6 3l4 -1l6 -4l0 -4l5 0l2 -4l0 -2l3 -5l-1 -3l-3 -2l0 -3l9 -3l3 0l3 3z",570,116],
    "Trabzon": ["M704 69l3 0l4 1l8 -4l3 1l8 6l2 1l3 -1l3 1l4 3l7 -2l4 4l2 0l10 -3l2 -2l2 4l2 10l3 8l0 4l0 5l-15 2l-5 -2l-4 0l-7 -5l-1 1l0 1l-2 1l-2 -4l-4 -2l-1 1l-1 3l-2 1l-3 0l-12 -5l-4 -4l-1 -4l-2 -1l-2 2l-1 0l-2 -3l0 -10l1 -8z",739,87],
    "Tunceli": ["M758 169l4 1l16 1l-2 3l-3 1l-4 0l-2 3l-2 2l-5 1l-1 2l-7 1l-2 8l1 5l0 3l-1 2l-6 1l-1 1l0 5l0 3l-5 7l-5 2l-9 0l-2 3l-4 -1l-3 -2l-7 -3l-7 -2l-2 0l-2 -1l-10 2l-2 -3l0 -5l-2 -3l-1 -8l2 -1l1 -4l4 -2l-2 -3l1 -2l4 -2l1 -2l3 -1l2 -3l6 -2l5 0l4 -1l12 1l12 -3l2 -3l2 0l7 3l10 -4z",722,195],
    "Uşak": ["M210 216l8 2l3 3l0 7l-1 5l-4 3l-2 7l0 2l-7 2l0 8l-3 2l-8 0l-4 4l-1 -1l-5 1l-2 -2l-2 0l-2 2l-3 0l-3 -2l-3 -1l-2 -2l-3 -1l3 -4l1 -5l-1 -6l-2 -2l-1 -3l13 -11l3 0l3 2l4 0l13 -2l2 -7l3 -1l3 0z",193,239],
    "Van": ["M960 186l2 6l0 3l6 4l0 1l-1 3l0 3l-2 3l1 2l3 6l3 2l-1 8l0 3l0 1l2 1l0 2l0 16l4 1l2 -1l3 3l-1 3l-4 3l0 7l-2 1l0 2l-2 1l-3 6l0 4l-1 2l-5 -1l-4 1l-3 8l-3 1l-7 1l-4 -1l-3 1l-7 1l-12 1l-10 -3l-4 3l-2 -5l1 -4l1 -9l-1 -11l-3 -1l-9 -1l-2 -1l-1 -3l0 -4l-2 -7l1 -4l9 -5l7 -11l7 -6l1 -5l-2 -3l-6 -4l-2 -4l0 -5l6 -2l2 -2l0 -6l-4 -2l0 -2l6 -2l4 -4l4 0l4 2l5 4l5 1l2 0l2 -2l2 -1l11 3l7 -2z",936,241],
    "Yalova": ["M173 110l-3 -1l-5 -2l-2 -1l0 -2l6 -3l5 -3l15 -2l5 -2l3 1l-1 8l-3 0l-3 3l-4 1l-8 -4l-5 0l0 7z",181,102],
    "Yozgat": ["M514 128l4 4l4 3l11 0l7 -2l2 3l0 6l2 3l2 6l5 7l-1 7l-9 7l-6 10l-2 1l-7 9l-25 15l-12 -1l-2 -5l1 -3l-2 -2l-4 -3l-2 -5l-3 -2l-1 -4l-2 -1l-1 -3l-3 -2l-5 -2l-7 -8l-2 -5l-6 -1l-6 -5l-3 0l-1 -1l-1 -3l-1 -4l3 -1l8 -1l10 -4l8 1l4 -1l6 0l8 -4l4 2l3 -1l5 -4l1 -8l7 -1l2 3l7 0z",501,163],
    "Zonguldak": ["M297 64l3 -4l1 -5l-2 -1l1 -1l3 -1l2 -2l8 -3l11 -7l9 -5l5 -1l3 2l3 2l3 8l-1 6l-5 6l-2 9l0 6l-11 -1l-20 -2l-9 -4l-2 -2z",325,55]
  };
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
  var DONEM = 0;  // dönemin toplam mezun sayısı (katılım sayacı için; sadece sayı, isim değil)
  function veriKur(v) {
    SATIR = ((v && v.satirlar) || []).map(function (r) { return r.slice(0, 4).concat([alanBul(r[3])]); })
      .sort(function (a, b) { return sirala(a[0], b[0]); });
    ARANAN = SATIR.map(function (r) { return sade(r.slice(0, 4).join(' ')); });
    ZAMAN = (v && v.zaman) || '';
    DONEM = (v && v.toplam) || 0;
  }

  // Branşların alanları (TUS sınıflamasına yakın): Cerrahi, Dahili, Temel tıp, Pratisyen
  var ALAN_SIRA = ['Cerrahi', 'Dahili', 'Temel tıp', 'Pratisyen', 'Diğer'];
  var ALAN_RENK = { 'Cerrahi': '#7c1714', 'Dahili': '#b5524b', 'Temel tıp': '#dba39d', 'Pratisyen': '#8a8280',
                    'Diğer': '#c9c2c0' };
  var ALAN_KURAL = [
    ['Pratisyen', /pratisyen/],
    ['Temel tıp', /anatomi|fizyoloji|biyokimya|mikrobiyoloji|farmakoloji|histoloji|embriyoloji|genetik|biyofizik|biyoistatistik|tip egitimi|tip tarihi/],
    ['Cerrahi', /cerrah|ortopedi|kulak burun|goz|uroloji|kadin hastaliklari|dogum|anestezi|patoloji|beyin ve sinir/],
    ['Dahili', /ic hastaliklari|kardiyoloji|cocuk sagligi|noroloji|deri|dermatoloji|fiziksel tip|ruh sagligi|psikiyatri|gogus hastaliklari|enfeksiyon|radyoloji|aile hekimligi|acil|spor hekimligi|radyasyon onkolojisi|nukleer tip|halk sagligi|adli tip|onkoloji|hematoloji|nefroloji|gastroenteroloji|endokrinoloji|romatoloji|immunoloji|geriatri|alerji|yogun bakim|neonatoloji|algoloji|sualti|hava ve uzay|tibbi ekoloji/]
  ];
  function alanBul(brans) {
    if (!brans) return '';
    var b = sade(brans);
    for (var i = 0; i < ALAN_KURAL.length; i++) if (ALAN_KURAL[i][1].test(b)) return ALAN_KURAL[i][0];
    return 'Diğer';
  }

  var SUTUN = { sehir: 1, kurum: 2, brans: 3, alan: 4 };
  var AD = { sehir: 'Şehir', kurum: 'Hastane / kurum', brans: 'Branş', alan: 'Alan' };
  var GRUP_AD = { '': 'Gruplama yok', sehir: 'Şehre göre', kurum: 'Hastaneye göre', brans: 'Branşa göre',
                  alan: 'Alana göre' };
  var ILK = 40, EK = 60;  // ilk çizilen kart sayısı, kaydırdıkça eklenen
  var SERVIS_URL = AYAR ? location.origin + location.pathname : ($('servisLink').getAttribute('href') || '');
  var FORM_URL = $('formLink').getAttribute('href');
  if (!window.BASLANGIC) {
    window.BASLANGIC = {};
    if (window.URLSearchParams) new URLSearchParams(location.search).forEach(function (v, k) { BASLANGIC[k] = v; });
  }

  var durum = { sehir: '', kurum: '', brans: '', alan: '', ara: '', grup: '' };
  Object.keys(durum).forEach(function (k) { if (BASLANGIC[k]) durum[k] = BASLANGIC[k]; });
  if (!GRUP_AD.hasOwnProperty(durum.grup)) durum.grup = '';

  var depo = {
    al: function (k) { try { return localStorage.getItem('mezunArama.' + k) || ''; } catch (e) { return ''; } },
    koy: function (k, v) { try { localStorage.setItem('mezunArama.' + k, v); } catch (e) { /* gizli sekme */ } }
  };

  function filtreVar() { return !!(durum.sehir || durum.brans || durum.kurum || durum.alan || durum.ara); }
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
    if (gecmisiDegistir) gecmisDegistir(simdiki()); else gecmisEkle(simdiki());
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
    var d = { sehir: ayar.sehir || '', kurum: ayar.kurum || '', brans: ayar.brans || '', alan: ayar.alan || '',
              ara: ayar.ara || '', grup: ayar.grup || '' };
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

    // Katılım: formu dolduranların dönem içindeki oranı
    if (DONEM) {
      var oran = Math.min(100, Math.round(100 * SATIR.length / DONEM));
      var kt = yap('section', 'kutu katilim bolum');
      var ks = yap('div', 'katilim-ust');
      ks.appendChild(yap('b', null, 'Dönemin %' + oran + '’i burada'));
      ks.appendChild(yap('span', null, SATIR.length + ' / ' + DONEM + ' mezun'));
      kt.appendChild(ks);
      var cb = yap('div', 'katilim-cubuk'), dl = yap('span');
      dl.style.width = oran + '%';
      cb.appendChild(dl);
      kt.appendChild(cb);
      var kp = yap('p', 'not');
      kp.appendChild(document.createTextNode('Henüz doldurmayan arkadaşlarına haber ver: '));
      var fl = yap('a', null, 'form bağlantısı');
      fl.href = FORM_URL; fl.target = '_blank'; fl.rel = 'noopener';
      kp.appendChild(fl);
      kt.appendChild(kp);
      o.appendChild(kt);
    }

    // Yakınındakiler: şehir seçimi kartın içinde
    var bs = bolum('Yakınındakiler', 'sehir');
    bs.appendChild(sehrimKutusu());
    o.appendChild(bs);

    // Alanlara göre dağılım (cerrahi / dahili / temel tıp / pratisyen)
    var t = {}, top = 0;
    SATIR.forEach(function (r) { if (r[4]) { t[r[4]] = (t[r[4]] || 0) + 1; top++; } });
    top = top || 1;
    var b = bolum('Alanlara göre', 'brans');
    var k = yap('div', 'kutu'), y = yap('div', 'yigin'), a = yap('div', 'aciklama');
    ALAN_SIRA.forEach(function (al) {
      if (!t[al]) return;
      var parca = yap('span');
      parca.style.width = (100 * t[al] / top) + '%';
      parca.style.background = ALAN_RENK[al];
      y.appendChild(parca);
      var d = dugme(null, null, function () { listeyeGit({ alan: al, grup: 'brans' }); });
      var i = yap('i'); i.style.background = ALAN_RENK[al];
      d.appendChild(i);
      d.appendChild(document.createTextNode(al + ' '));
      d.appendChild(yap('b', null, t[al] + ' (%' + Math.round(100 * t[al] / top) + ')'));
      a.appendChild(d);
    });
    k.appendChild(y); k.appendChild(a);
    k.appendChild(yap('p', 'not', 'Birine dokun: o alandaki mezunlar branşlarına göre listelenir.'));
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
    var kap = yap('div');
    o.appendChild(kap);
    // Branşlarda alan bölümleri (Cerrahi, Dahili, …); diğer kategorilerde tek liste
    var bolumler = kategori === 'brans' ? ALAN_SIRA.map(function (al) {
      return { ad: al, liste: liste.filter(function (s) { return alanBul(s[0]) === al; }) };
    }) : [{ ad: '', liste: liste }];
    function doldur() {
      var q = sade(inp.value.trim()), n = 0;
      kap.textContent = '';
      bolumler.forEach(function (bl) {
        var uy = bl.liste.filter(function (s) { return !q || sade(s[0]).indexOf(q) >= 0; });
        if (!uy.length) return;
        if (bl.ad) {
          var kisi = uy.reduce(function (t, s) { return t + s[1]; }, 0);
          var h = dugme('alan-baslik', null, function () { listeyeGit({ alan: bl.ad, grup: 'brans' }); });
          var nok = yap('i'); nok.style.background = ALAN_RENK[bl.ad];
          h.appendChild(nok);
          h.appendChild(yap('span', null, bl.ad));
          h.appendChild(yap('small', null, uy.length + ' branş · ' + kisi + ' kişi'));
          h.appendChild(ikon('ileri'));
          kap.appendChild(h);
        }
        var kutu = yap('div', 'kutu cubuklar');
        uy.forEach(function (s) {
          n++;
          kutu.appendChild(siraliSatir(s, liste.indexOf(s), en, function () {
            var a = { grup: K.grup }; a[kategori] = s[0]; listeyeGit(a);
          }));
        });
        kap.appendChild(kutu);
      });
      if (!n) kap.appendChild(yap('div', 'kutu bos', 'Eşleşen ' + K.birim + ' yok.'));
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
    Object.keys(IL_HARITA).forEach(function (il) { if (!(il in var_)) var_[il] = 0; });
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
    var svg = document.createElementNS(NS, 'svg');
    svg.setAttribute('viewBox', '0 0 ' + HARITA_KUTU[0] + ' ' + HARITA_KUTU[1]);
    svg.setAttribute('role', 'img');
    svg.setAttribute('aria-label', 'Mezunların illere göre dağılımı');

    var ilAdi = {};
    Object.keys(IL_HARITA).forEach(function (il) { ilAdi[sade(il)] = il; });
    var sayi = {}, veriAdi = {}, disari = [];
    sayim(1, SATIR).forEach(function (s) {
      var il = ilAdi[sade(s[0])];
      if (il) { sayi[il] = s[1]; veriAdi[il] = s[0]; } else disari.push(s);
    });
    var en = 1;
    Object.keys(sayi).forEach(function (il) { en = Math.max(en, sayi[il]); });
    // Logaritmik ton: İstanbul çok baskın olsa da 2–10 kişilik iller de ayırt edilsin
    function ton(n) { return n ? 0.28 + 0.72 * Math.log(n) / Math.log(Math.max(2, en)) : 0; }

    var etiketler = [];
    Object.keys(IL_HARITA).forEach(function (il) {
      var v = IL_HARITA[il], n = sayi[il] || 0;
      var p = document.createElementNS(NS, 'path');
      p.setAttribute('d', v[0]);
      p.setAttribute('class', n ? 'il dolu' : 'il');
      if (n) p.style.fillOpacity = ton(n).toFixed(2);
      var t = document.createElementNS(NS, 'title');
      t.textContent = il + ': ' + (n ? n + ' mezun' : 'henüz kimse yok');
      p.appendChild(t);
      if (n) p.addEventListener('click', function () { listeyeGit({ sehir: veriAdi[il], grup: 'kurum' }); });
      svg.appendChild(p);
      if (n) etiketler.push([n, v[1], v[2], il]);
    });
    // Sayılar il merkezinde; kalabalıklar en üstte
    etiketler.sort(function (a, b) { return a[0] - b[0]; }).forEach(function (e) {
      var tx = document.createElementNS(NS, 'text');
      tx.setAttribute('class', 'il-sayi' + (ton(e[0]) > 0.6 ? ' koyu' : ''));
      tx.setAttribute('x', e[1]); tx.setAttribute('y', e[2]);
      tx.textContent = e[0];
      svg.appendChild(tx);
    });
    kap.appendChild(svg);

    var lej = yap('div', 'lejant');
    lej.appendChild(yap('span', null, '1'));
    lej.appendChild(yap('i'));
    lej.appendChild(yap('span', null, en + ' mezun'));
    kap.appendChild(lej);

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
    kap.appendChild(yap('p', 'not', 'Bir ile dokun: oradaki mezunlar hastanelerine göre listelenir.'));
    return kap;
  }

  // ---------------------------------------------------------------- Liste
  var cizilecek = [], cizilen = 0, kelimeK = [];

  function ciplerCiz() {
    var c = $('cipler');
    c.textContent = '';
    ['sehir', 'alan', 'brans', 'kurum'].forEach(function (ad) {
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
    if (filtreVar() || durum.grup) {
      c.appendChild(dugme('cip', 'Temizle', function () {
        durum.sehir = durum.brans = durum.kurum = durum.alan = durum.ara = durum.grup = '';
        $('ara').value = '';
        listeCiz();
      }));
    }
  }

  function kart(r) {
    var c = yap('article', 'kisi');
    c.tabIndex = 0;
    c.setAttribute('role', 'button');
    c.setAttribute('aria-label', r[0] + ', ayrıntıları aç');
    c.addEventListener('click', function (e) { if (!e.target.closest('button')) kisiPenceresi(r); });
    c.addEventListener('keydown', function (e) { if (e.key === 'Enter' && e.target === c) kisiPenceresi(r); });
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
    c.appendChild(ikon('ileri'));
    return c;
  }

  // ---- Filtre özeti: tek bir hastane/şehir/branş/alan seçiliyken listenin başında kısa özet
  var OZET_BOYUT = { kurum: ['brans', 'sehir'], sehir: ['kurum', 'brans'], brans: ['sehir', 'kurum'],
                     alan: ['brans', 'sehir'] };
  var BOYUT_BASLIK = { brans: 'Branşlar', sehir: 'Şehirler', kurum: 'Hastaneler' };
  function filtreOzeti(sonuc) {
    var ana = ['kurum', 'sehir', 'brans', 'alan'].filter(function (k) { return durum[k]; })[0];
    if (!ana || !sonuc.length) return null;
    var k = yap('section', 'kutu filtre-ozet');
    var ust = yap('div', 'fo-ust');
    var r = yap('div', 'rozet-buyuk');
    r.appendChild(ikon({ kurum: 'kurum', sehir: 'sehir', brans: 'brans', alan: 'brans' }[ana]));
    ust.appendChild(r);
    var m = yap('div', 'metin');
    m.appendChild(yap('b', null, durum[ana]));
    var parcalar = [sonuc.length + ' mezun'];
    ['brans', 'kurum', 'sehir'].forEach(function (bt) {
      if (bt === ana || durum[bt]) return;
      var n = sayim(SUTUN[bt], sonuc).length;
      if (n) parcalar.push(n + ' ' + { brans: 'branş', kurum: 'kurum', sehir: 'şehir' }[bt]);
    });
    m.appendChild(yap('span', null, parcalar.join(' · ')));
    ust.appendChild(m);
    k.appendChild(ust);
    OZET_BOYUT[ana].forEach(function (bt) {
      if (durum[bt]) return;
      var liste = sayim(SUTUN[bt], sonuc);
      if (liste.length < 2) return;
      k.appendChild(yap('div', 'fo-baslik', BOYUT_BASLIK[bt]));
      var c = yap('div', 'oneriler');
      liste.slice(0, 8).forEach(function (s) {
        var b = dugme('cip', null, function () { durum[bt] = s[0]; listeCiz(true); });
        b.appendChild(yap('span', null, s[0]));
        b.appendChild(yap('small', 'cip-n', s[1]));
        c.appendChild(b);
      });
      if (liste.length > 8) c.appendChild(dugme('cip', '+' + (liste.length - 8), function () { secimPenceresi(bt); }));
      k.appendChild(c);
    });
    return k;
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
    var oz = filtreOzeti(sonuc);
    if (oz) kap.appendChild(oz);
    if (!sonuc.length) {
      var bos = yap('div', 'bos');
      bos.appendChild(yap('b', null, SATIR.length ? 'Kimse bulunamadı' : 'Henüz kimse yok'));
      bos.appendChild(document.createTextNode(SATIR.length ? 'Yazımı kontrol et ya da bir filtreyi kaldır.' : ''));
      if (SATIR.length) {
        bos.appendChild(yap('br'));
        bos.appendChild(dugme('dugme ikincil', 'Filtreleri temizle', function () {
          durum.sehir = durum.brans = durum.kurum = durum.alan = durum.ara = ''; $('ara').value = ''; listeCiz();
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

  /** Pencereden başka sayfaya geçerken: pencerenin geçmiş adımı yeni sayfanın adımı olur (geri tuşu tutarlı kalır) */
  var gecmisiDegistir = false;
  function pencereden(f) {
    if (pencereGecmiste) { pencereGecmiste = false; gecmisiDegistir = true; }
    pencereKapat(true);
    f();
    gecmisiDegistir = false;
  }

  function kisiPenceresi(r) {
    pencereAc('Mezun', false);
    kisiPenceresiIcerik(r);
  }
  function kisiPenceresiIcerik(r) {
    var k = $('pIcerik'), d = yap('div', 'kisi-detay');
    k.textContent = '';
    k.scrollTop = 0;
    d.appendChild(yap('div', 'bas buyuk', basHarf(r[0])));
    d.appendChild(yap('h4', null, r[0]));
    if (r[3]) d.appendChild(yap('span', 'brans', r[3]));
    [[2, 'kurum'], [1, 'sehir']].forEach(function (x) {
      if (!r[x[0]]) return;
      var b = yap('div', 'bilgi');
      b.appendChild(ikon(x[1]));
      b.appendChild(yap('span', null, r[x[0]]));
      d.appendChild(b);
    });
    k.appendChild(d);

    var baglar = yap('div', 'kutu cubuklar kisi-baglar');
    [[2, 'kurum', 'Aynı hastanede', 'brans'], [3, 'brans', 'Aynı branşta', 'sehir'],
     [1, 'sehir', 'Aynı şehirde', 'kurum']].forEach(function (x) {
      if (!r[x[0]]) return;
      var n = SATIR.filter(function (y) { return y[x[0]] === r[x[0]] && y !== r; }).length;
      if (!n) return;
      var b = dugme('bag-satir', null, function () {
        pencereden(function () { var a = { grup: x[3] }; a[x[1]] = r[x[0]]; listeyeGit(a); });
      });
      b.appendChild(ikon(x[1]));
      b.appendChild(yap('span', null, x[2]));
      b.appendChild(yap('b', null, n + ' kişi'));
      b.appendChild(ikon('ileri'));
      baglar.appendChild(b);
    });
    if (baglar.childNodes.length) {
      k.appendChild(yap('div', 'ara-baslik', 'Bağlantılar'));
      k.appendChild(baglar);
    }

    // Aynı hastanedeki ilk birkaç kişi; dokununca onların ayrıntısı
    var mesai = r[2] ? SATIR.filter(function (y) { return y[2] === r[2] && y !== r; }) : [];
    if (mesai.length) {
      k.appendChild(yap('div', 'ara-baslik', 'Aynı hastanedekiler'));
      var l = yap('div', 'kutu');
      mesai.slice(0, 6).forEach(function (y) {
        var m = dugme('mini', null, function () { kisiPenceresiDegistir(y); });
        m.appendChild(yap('span', 'bas', basHarf(y[0])));
        var t = yap('span', 'mini-metin');
        t.appendChild(yap('b', null, y[0]));
        t.appendChild(yap('small', null, y[3] || ''));
        m.appendChild(t);
        l.appendChild(m);
      });
      k.appendChild(l);
    }
  }
  function kisiPenceresiDegistir(r) {  // pencere içinde başka kişiye geç (yeni geçmiş adımı açmadan)
    kisiPenceresiIcerik(r);
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
    ['sehir', 'alan', 'brans', 'kurum', 'ara', 'grup'].forEach(function (k) {
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
    var filtreli = filtreVar() || durum.grup;
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
