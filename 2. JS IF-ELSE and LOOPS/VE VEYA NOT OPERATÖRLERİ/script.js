/* Veya operatörü: shift+6 tuşuna iki kere basma "&&"" */
/* Ya da operatörü: AltGr+ büyük küçük işarei iki kere basma "||"" */ 

/* "&&"" kullanıldığı alanda iki değerinde doğru olması gerekli
   "||" kullanıldığı alanda bir değerin doğru olması yeterli. */ 

const yeniŞifre ="dasda!das";

if(yeniŞifre.length >= 12 || yeniŞifre.includes('!'))  // 1.durum
{
    console.log("şifrem baya güçlü");
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

// Not operatörü: "!" ' dir. 

const control = false;  // ! gelirse false ise true. 
if(!control)
{
    console.log("Kontrol başarılı");       
}