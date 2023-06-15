//console.log(true, false, 'true', 'false');

let email = "tanrivermis.mehmet@gmail.com";
let adSoyad = ['can','tuğçe','elif'];


let varmı = email.includes('@');
//console.log(varmı);  

let varmı2=adSoyad.includes("tuğçe");
//console.log(varmı2);


//True ve False en çok bir şeyi kıyaslarken 
//karşılaştırma opareötrlerinde kullanılır.
//Eşit mi değil mi? Büyük mü Küçük mü?


/*
let yas= 34;
console.log(yas == 34);
//"==" eşit mi sorar.
console.log(yas == 35);
//"!=" eşit değil mi sorar.
console.log(yas != 35);
//">" büyük mü sorar
console.log(yas > 29);
//"<" küçük mü sorar.
console.log(yas < 34);
//">=" büyük ve eşit mi sorar
console.log(yas >= 34);
//"<=" küçük ve eşit mi sorar
console.log(yas <= 34);
*/



let ad ='mehmet';
console.log(ad == 'mehmet');
console.log(ad == 'Mehmet');
console.log(ad > 'Mehmet');
console.log(ad > 'can');