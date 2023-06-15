const form = document.querySelector('.signupForm');
const username = document.querySelector('#username'); //1.yöntem



form.addEventListener('submit', e=>{
    e.preventDefault(); // submit yaparken sayfa kendini otomatik refresh yapıyor 
    //bunu engellemek için "preventDefault" kullanılır.

    //console.log('form gönderildi.');
    //console.log(username.value); // 1.yöntem
    console.log(form.username.value); // 2.yöntem
    
})
