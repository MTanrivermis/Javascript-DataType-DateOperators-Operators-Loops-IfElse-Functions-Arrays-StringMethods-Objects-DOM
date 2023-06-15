
 
                      // bunlar artık "Hakan""Enis" yerine geçiyor.
const memo = function(ad = 'Mehmet',soyad = 'Tanrıvermiş') 
{
    //console.log('Ad:' +ad + 'Soyad:'+soyad); //ikiside doğru kullanım

    console.log(`Ad Soyad ${ad} ${soyad}`); // yaygın olan kullanım
}

memo();  // tanımlamayı yukarıda ki gibi yaparsak
         //burada parametre olarak herhangi bir şey yollamama gerek kalmaz
memo('Hakan','Enis'); 