const notlar =[15,45,32,0,100,90,7];

for (let i = 0; i < notlar.length; i ++){

    if(notlar[i] === 32) 
    // yazmaz çünkü continue ifadesi 
    // ile 32'ye kadar olan kısmı konsola yazdırmasını istemiştir.
    // 32 den sonra 0,100 diye devam eder.
    {
        continue;
    }

    console.log(notlar[i]);

    if(notlar[i] === 100)
    {
        console.log("Bravo en yüksek notu sen aldın.");
        break; 
        // 100 e kadar olan kısmı yazar gerisini yazmaz 
        // çünkü break komutu ile 100 den sonra kısmı saymayı bırak der. 
    }


}