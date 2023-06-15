// const dersler = [
//     {isim:'matematik',puan:90},
//     {isim:'fizik',puan:80},
//     {isim:'kimya',puan:85},], 
// ]


let ogrenci = {
    ad:'Mehmet',
    yas: 34,
    email:'tanrivermis.mehmet@gmail.com',
    sınıf:12,
    dersler: [ // dizinin içinde obje tanımlama
    {isim:'matematik',puan:90},
    {isim:'fizik',puan:80},
    {isim:'kimya',puan:85},],
    login() 
    {
        console.log ('Öğrenci giriş yaptı.')
    },
    logout()
    {
        console.log('Öğrenci çıkış yaptı.')
    },
    printLessons()
    {
        console.log(this.dersler);
        
        this.dersler.forEach(ders =>{
            console.log(ders.isim,ders.puan); // . koyarak propertyleri çağırdık.
        })               
    }                      


};

//console.log(this);  // bu this dışarıdaki Window
ogrenci.printLessons();
// ogrenci.login();
// ogrenci.logout();