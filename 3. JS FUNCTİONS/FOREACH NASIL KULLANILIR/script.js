// const a = (callBacka) =>{
//     //"a" değişken "callBacka parametre
//     let yas = 40;
//     callBacka(yas);
// };
// a(function(value)
// {
//     console.log(value);
// })


let öğrencilerim= ['mehmet','kübra','alp','kaan'];

öğrencilerim.forEach(function()
{
    console.log("Selam")
})


öğrencilerim.forEach(function(kişi,index)
{
    console.log(kişi,index);
})

const öğrenci = (kişi,index) => 
{
    console.log(`${index} - ${kişi}`);  //function expression yazımı.
}

öğrencilerim.forEach(öğrenci);