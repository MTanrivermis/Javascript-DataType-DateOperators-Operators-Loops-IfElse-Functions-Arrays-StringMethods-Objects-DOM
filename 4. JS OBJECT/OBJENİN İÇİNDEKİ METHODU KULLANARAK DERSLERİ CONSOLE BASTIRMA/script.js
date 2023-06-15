let ogrenci = {
    ad:'Mehmet',
    yas: 34,
    email:'tanrivermis.mehmet@gmail.com',
    sınıf:12,
    dersler: ['matematik','fizik','kimya'],
    login() // regular function yazım şekli (function) yazmadan..
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
        //console.log(this); // bu this Object gelir (içerideki window)
                            // ogrenci içinde olduğu için
        this.dersler.forEach(ders =>{
            console.log(ders);
        })               //-- ders burada dersler dizisindeki dersleri simgeliyor.
    }                      


};

//console.log(this);  // bu this dışarıdaki Window
ogrenci.printLessons();
// ogrenci.login();
// ogrenci.logout();