const section = document.querySelector('section');
console.log(section.children);
console.log(Array.from(section.children)); // Arraya çevirmek için yapılan.
//artık forEach de kullanabiliriz.

Array.from(section.children).forEach(child =>{

    child.classList.add('section-element')
})

const baslik = document.querySelector('h2');
console.log(baslik.parentElement);//elemanın parentini bulmak için
console.log(baslik.parentElement.parentElement);//parentin parentini bulmak
console.log(baslik.nextElementSibling); // bir sonraki elemena ulaşmak için
console.log(baslik.previousElementSibling);

console.log(baslik.nextElementSibling.parentElement.children);
