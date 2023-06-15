/* String Dizi Tanımlaması */

let isimler = ['can','rıdvan','elif'];
//console.log(isimler[1]);

isimler[1] = 'tuğçe';
//console.log(isimler[1]);

/* Number Dizi Tanımlaması */

let yaslar = [3,18,25,50]; //sayı ifadeleri yazarken tırnak içine alınmaz.
//console.log(yaslar[3]);


/* Karışık Dizi Tanımlaması */

let rastgele = ['can','rıdvan',10,15];
//console.log(rastgele);

//console.log(rastgele.length);


let tireli=isimler.join('-'); 
//join ile aralara tire yada virgül vbişaretler koyabiliriz.
console.log(tireli);

let virgüllü=isimler.join(',');
console.log(virgüllü);

let sıra = isimler.indexOf('elif');
// Elemanın sıralamadaki yerini bulmak için indexOf kullanıılır.
console.log(sıra);

let ekle = isimler.concat(['merve','suna']);
//"concat" değişkenime ekleme yapma methodudur. 
console.log(ekle);

let elemanekle = isimler.push(['Leyla']);
// "push" bir diziye eleman eklemek istediğin zaman kullanılır.
console.log(isimler);

isimler.pop();
// "pop" diziye eklenen son elemanı almak için veya eklenmemişse 
//  son elemanı çıkarmak için
console.log(pop);