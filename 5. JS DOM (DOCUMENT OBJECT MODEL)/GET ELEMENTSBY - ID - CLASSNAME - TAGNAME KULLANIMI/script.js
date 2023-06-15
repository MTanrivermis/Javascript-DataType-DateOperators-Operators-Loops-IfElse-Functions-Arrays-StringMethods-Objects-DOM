const baslık = document.getElementById('can');

console.log(baslık);

const hatalar = document.getElementsByClassName('error');
console.log(hatalar[0]); 

// diziler içinde yazıldığında bize çağırdığımız sıradakini vermez.
// tekrardan array çevirmek gerekebilir. bu yüzden çok kullanılmaz.

const pEtiketleri = document.getElementsByTagName('p');
console.log(pEtiketleri[1]);