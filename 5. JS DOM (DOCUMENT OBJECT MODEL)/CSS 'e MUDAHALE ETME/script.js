const baslik = document.querySelector('h1');
// baslik.setAttribute('style', 'padding: 50px;');
/* kötü özellik html de verdiğim 
   inline cssimizi setAttribute ile ezmiş olduk.
   color:yellow yok oldu. */

console.log(baslik.style);

baslik.style.padding='50px';
baslik.style.fontSize='60px';
baslik.style.fontWeight='bold';