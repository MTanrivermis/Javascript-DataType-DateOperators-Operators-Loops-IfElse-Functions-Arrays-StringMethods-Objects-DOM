const ulum = document.querySelector('.main');

let ogrencilerim = ['mehmet','kübra','alp','kaan'];

let html= ``;

ogrencilerim.forEach(ogrenci =>{ //ogrenci burada array içindeki isimleri temsil ediyor.
    html +=`<li>${ogrenci}</li>`
})

console.log(html);

ulum.innerHTML=html;