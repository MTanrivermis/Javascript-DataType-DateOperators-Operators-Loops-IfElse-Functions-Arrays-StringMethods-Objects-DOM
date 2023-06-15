/* İF KULLANIMI */

const yas = 34;

if(yas > 18)
{
    //console.log("18 yaşından büyüktür.");
}

/* İF ELSE KULLANIMI */


const adSoyad = ['mehmet', 'kübra', 'alp'];
if (adSoyad.length > 2)
{
    console.log("işte benim öğrencilerim");
}

const şifre ="dasdasdasdasdas"

if(şifre.length >= 8)
{
    console.log("şifre yeterince uzun");
}
else
{
    console.log("şifreyi yeniden giriniz.")
}


/* İF ELSE İF/ELSE KULLANIMI */


const yeniŞifre ="dasdasdasdasdas";

if(yeniŞifre.length >= 12)  // 1.durum
{
    console.log("şifre güçlü");
}
else if (yeniŞifre.length >=8) // 2.durum
{
    console.log("Şifre yeterli");
}
else
{
    console.log("şifreyi yeniden giriniz.") // her ikiside uymuyuorsa 
                                            // bu çalışır.
}

