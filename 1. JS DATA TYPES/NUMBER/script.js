let yaricap = 15;
const piSayisi = 3.14;

console.log(yaricap,piSayisi);

let daireAlani= piSayisi* yaricap**2;
console.log(daireAlani);

/* R'kare üssü 2 yazımı yukarıdaki gibidir.
daire alanı hesaplanırken Rkare yazmını ** şeklinde gösterilir 
ve üssü sayısı direk yazılır. "yaricap**2 bigi"*/


console.log(16/4);

let kalan = yaricap %4; 
/* Yarıçapın (15'in) 4 ile bölümünden kalan 
sonucu göstermek için "%" işaret kullanılır.*/
console.log(kalan);


let sonuc = 6 * (15-4)**2;
console.log(sonuc);

/* İlk başta parantez içi hesaplanır daha sonra üs hesaplanır 
daha saonra bölme daha sonra ad çarpma hesaplanır.*/


let sayi = 13;
/*Kısayollar*/
// sayi = sayi+1;
// sayi++;
// sayi +=1;

// sayi *=3;
// sayi /=3;
console.log(sayi);


/*NaN - Not a Number -- Bir sayıyı string bir sayıya 
(ifadeye çarparsak) bu sonucu alırız "NaN" 
bölme ve çarpma da bu sonucu alırız
toplama da bu sonucu almayız string bir ifade alırız.*/

console.log(15 / "Mehmet");
console.log(15 * "Mehmet");

let birlestirme ='Dersi '+sayi + ' kere tekrar ettim.';
console.log(birlestirme); 