const icerik = document.querySelector('p');
console.log(icerik.classList);
icerik.classList.add('can')
icerik.classList.remove('error');

/* Önce p etiketlerinin hepsini çağırdık */
const pDegeri = document.querySelectorAll('p');
/* forEach ile arrow function yaparak bunları dönüyoruz 
ve if ile diyoruz ki; eğer p etiketi olan değerlerde 
error adı geçiyorsa classList.add ile classı "error" olan
etiketlerin biçimini almasını istiyoruz. 
success için ise classı "success" olanların biçimlerini almalarını ist.*/
pDegeri.forEach(can => {
    if(can.textContent.includes('error'))
    {
        can.classList.add('error');
    }
    if(can.textContent.includes('success'))
    {
        can.classList.add('success');
    }
});