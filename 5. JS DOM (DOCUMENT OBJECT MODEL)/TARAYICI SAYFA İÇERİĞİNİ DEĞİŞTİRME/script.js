// const pdegeri = document.querySelector('p');
// console.log(pdegeri.innerText);

// pdegeri.innerText = 'Mehmet fullstack Developer';

// tarayıcı da bulunan ve yukarıda seçilen ilk p etiketinin tarayıcıdaki değerini değiştirdik.

// const pdegeri = document.querySelectorAll('p');

// pdegeri.forEach(a => {
//     console.log(a.innerText);
//     a.innerText += ' yeni alan'; // hem olanı koruması yani html kodundaki değeri hemde (yeni alan) olarak yazılan değeri koruması için "+=" kullanılır.
// })

const icerik = document.querySelector('.icerik');
console.log(icerik.innerHTML);

//icerik.innerHTML = '<h2>Vue JS, REact JS, Angular JS</h2>';
                         // innerText ile sadece texti güncelliyorduk. 
                        // innerHTML ile ise HTML kodlarını güncelliyoruz.
                       
icerik.innerHTML += '<h2>Vue JS, REact JS, Angular JS</h2>';
// sadece + koyarak hem p etiketi olanı korur üzerinde deyazılanı korur yani h2 yi.

const ogrenciler = ['mehmet','kübra','alp'];
ogrenciler.forEach(ogrenci =>{
    icerik.innerHTML += `<p>${ogrenci}</p>`
})

// Javascript kodları yazarak girilen değerleri HTML'e basmış olduk.