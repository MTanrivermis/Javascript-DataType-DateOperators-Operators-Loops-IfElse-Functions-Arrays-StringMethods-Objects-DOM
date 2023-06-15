let yas = "29";
//console.log(yas+1);
//console.log(typeof yas); //değişkenin tipini öğrenmek için "typeof" kullan.

/* Type Conversion */
yas = Number(yas);
console.log(yas + 1);
console.log(typeof yas);

//let sonuc = Number("Mehmet");
//let sonuc = String(18);
//let sonuc = Boolean(0);
/* boolean sayı değerlerinde 0 false döner diğerleri true döner*/
//let sonuc = Boolean("18");
/* String ifadenin sadece içi boşsa false değeri verir. */
//console.log(sonuc, typeof sonuc);

/* string olduğu halde nasıl true değeri alıyor?
 çünkü JS arkada onu otomatik çeviriyor. */
//console.log(yas == 29);
//console.log(yas == "29");

// console.log(yas != 29);
// console.log(yas != "29");

// console.log(yas !== 29);
// console.log(yas !== "29");

/* tipi ile (number mı string mi?) birlikte kontrol için "===" kullan. */
console.log(yas === 29);
console.log(yas === "29");
