
mehmet();
mehmet();


//function şeklinde ise ister tanımlarız ister çağırırız.
function mehmet(){     // fonksiyona değer atama
    console.log('mehmet');
}


//  function expression şeklinde tanımlama için
// önce tanımlamamız sonra çağırmamız lazım.

const memo = function() // değişkene fonksiyon atama
{
    console.log('memo');
}

memo();