console.log("Merhaba Dünya");
/*string ifadelerde yazı ile yazılan her şey
 tek tırnak ' yada çüft tırnak " ile yazılr*/

let email = "tanrivermis.mehmet@gmail.com";
console.log(email);

//Birleştirme

let ad = "Mehmet";
let soyad = "Tanrıvermiş";
let adSoyad = ad + " " + soyad;
console.log(adSoyad);
/*camlecase yazım tarzi 
ilk kelime küçük karakter ile ikinci kelime büyük harf ile başlar.*/

//Karakterleri Çekme

console.log(adSoyad[5]);

//Kaç Karakter Olduğunu dair sorgulama

console.log(adSoyad.length);

//Genellikle kontrol amaçlı aşağıdaki gibi kullanılır.
/*
if(adSoyad.length > 0)
{
   alert ("Lütfen isminizi giriniz."); 
}*/

//Methodlar - yani Fonksiyonlar

console.log(adSoyad.toLocaleUpperCase());
let kucukAdSoyad = adSoyad.toLocaleLowerCase();
console.log(kucukAdSoyad);
console.log(adSoyad);

let index = adSoyad.indexOf("T");
console.log("T nin bulunduğu index:" + index);
