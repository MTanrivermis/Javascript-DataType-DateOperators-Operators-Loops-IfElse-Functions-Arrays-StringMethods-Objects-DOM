let ogrenci = {
    ad:'Mehmet',
    yas: 34,
    email:'tanrivermis.mehmet@gmail.com',
    sınıf:12,
    dersler: ['matematik','fizik','kimya'],
    login()
    {
        console.log ('Öğrenci giriş yaptı.')
    },
    logout()
    {
        console.log('Öğrenci çıkış yaptı.')
    },
};

ogrenci.login();
ogrenci.logout();