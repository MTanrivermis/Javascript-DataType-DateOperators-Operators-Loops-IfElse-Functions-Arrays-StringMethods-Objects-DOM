let yas = 34; // dışarıdaki nin değeridir.



if(true)  // if içinde tanımlanan değişken bu if içinde geçerli.
{
    let yas = 60;
    console.log("içerideki:",yas);   
    if(true)
    {
        let yas = 50;
        let ad = "mehmet";
        var cantest = "hobaaa"; //var keywordu ile tanımlananlar
        // her iki tarafata da gözükür hem içeride hem dışarıda.
        console.log("içeridekinin içindeki",yas,ad,cantest);
    } 
}

console.log("dışarıdaki:",yas,cantest)  
// Bu 34 değerini konsola basar.bu globaldır.

