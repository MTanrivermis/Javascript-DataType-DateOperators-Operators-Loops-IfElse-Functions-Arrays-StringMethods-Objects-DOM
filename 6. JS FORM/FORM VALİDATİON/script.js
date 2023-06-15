const form = document.querySelector('.signupForm');
const message = document.querySelector('.message');
const usernamePattern= /^[a-z]{6,10}$/;



form.addEventListener('submit',(e) =>{
    e.preventDefault();
    const username = form.username.value;
    
    if(usernamePattern.test(username))
    {
        message.textContent='Başarılı';
    }
    else
    {
        message.textContent='Lütfen hepsini küçük harf ve 6-10 karakter arasında giriniz.'
    }

})

form.username.addEventListener('keyup', (e) =>{ //keyup event ekliyorum
    // console.log(e.target.value);
    if(usernamePattern.test(e.target.value)) // (form.usernamedeki) hedefin değerini usernamePattern ile test et diyorum.
    {
        //console.log('Başarılı');
        form.username.setAttribute('class','success');
    }
    else
    {
        //console.log('Başarısız');
        form.username.setAttribute('class','error'); // bu realtime validation
    }
})