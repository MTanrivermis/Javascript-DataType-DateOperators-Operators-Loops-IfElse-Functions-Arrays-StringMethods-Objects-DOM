const button = document.querySelector('button');

// button.addEventListener('click' ,() =>{
//     console.log('Tıklandı');
// })

const liElemanları = document.querySelectorAll('li');

liElemanları.forEach(eleman =>{
    
    eleman.addEventListener('click' , e =>{
        // console.log(e);    // "e eventi simgeliyor "
        // console.log(e.target);
        // console.log('liye tıklandı');
        // e.target.style.color='blue';  //tıklayınca mavi yapıyor.
    })
})

const ul=document.querySelector('ul'); // ul yi seçtik
//ul.remove();

liElemanları.forEach(eleman => { // forEach ile elemanı yani ul deki li'leri dönüyoruz.
    eleman.addEventListener('click' , e =>{ // click eventini (yani üstüne tıklanırsa eğer bir işlem olacağına dair emir veriyoruz.)
        e.target.remove(); // tıklama işleminin sonnucunda remove çalışır ve tıkladğımız li etiketi silinir.
    })
})

button.addEventListener('click' ,() =>{
    const li = document.createElement('li');
    li.textContent='Javascript';

    //ul.append(li);
    ul.prepend(li);
})