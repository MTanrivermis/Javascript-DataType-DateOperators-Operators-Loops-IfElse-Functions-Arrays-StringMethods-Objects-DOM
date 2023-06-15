
// const karealanı = function(kenar){
//     //let alan=kenar **2
//     //console.log(alan);
//     //return alan; 

//     return kenar **2;
// }


// const karealanı = kenar =>{ //eğer bir parametre alıyorsa paranteze gerek yok 
//                            //eğer birden fazla parametre alıyorsa parantez zorunlu
    
//     return kenar **2;   // eğer return tek bir satırsa süslü parantez zorunlu değil
//                         //eğer birden fazla satır içeriyorsa süslü zorunlu.
// }

// const sonuc = karealanı(6);

// console.log(sonuc);



const mehmet = () => 'Mehmet' //parametre olmasa bile parantez koyacaksınız.

const sonuc = mehmet();
console.log(sonuc);


// const fatura = function(ürünler, vergi){
//     let toplam = 0;
//     for(let i=0; i < ürünler.length; i++){
//         toplam += ürünler[i] +ürünler[i] * vergi;
//     }
//     return toplam;
// }

// console.log(fatura([10,20,30],0.25));

const fatura = (ürünler, vergi) => {
    let toplam = 0;
    for(let i=0; i < ürünler.length; i++){
        toplam += ürünler[i] +ürünler[i] * vergi;
    }
    return toplam;
}
                             //--> vergi normal girildi.   
console.log(fatura([10,20,30],0.25));
                    // --> ürünler array olarak girildi.

/* Profosyonel kullanımda genellikle arrow function kullanılır. */