let ogrenci = {
    ad:'Mehmet',
    yas: 34,
    email:'tanrivermis.mehmet@gmail.com',
    sınıf:12,
    dersler: ['matematik','fizik','kimya']
};

console.log (ogrenci);
console.log (ogrenci.yas);

ogrenci.yas=36; //uptade
console.log(ogrenci.yas); //1.yöntem . koyup properties yazmak

console.log(ogrenci['ad']); //2.yöntem [] ile yazmak

ogrenci['ad']= 'Can'; //uptade 
console.log(ogrenci['ad']);