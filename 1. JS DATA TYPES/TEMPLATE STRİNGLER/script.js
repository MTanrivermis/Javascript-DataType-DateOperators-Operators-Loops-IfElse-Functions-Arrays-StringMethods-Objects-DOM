/* Javascirpt Frameworkleri */

const framework1 = 'Angular';
const framework2 = 'React';
const framework3 = 'Vue';

//Yöntem 1
let sonuc = 'Can Boz un bilgiği javascirpt frameworkleri : '+framework1+' '+framework2+' '+framework3;
console.log(sonuc); 

//Yöntem 2
let sonuc1 = `Can Boz un bilgiği javascirpt frameworkleri : ${framework1} ${framework2} ${framework3}`;
console.log(sonuc1);


/* HTML template kullanımı
CK editör gibi arkada çalışan bir sistem bir panel varsa 
örneğin; resturantlara yapılan online ödeme ve mobil uygulama sistemi */

let html = `
    <h1>${framework1}</h1>
    <h2>${framework2}</h2>
    <h3>${framework3}</h3>

`
console.log(html);