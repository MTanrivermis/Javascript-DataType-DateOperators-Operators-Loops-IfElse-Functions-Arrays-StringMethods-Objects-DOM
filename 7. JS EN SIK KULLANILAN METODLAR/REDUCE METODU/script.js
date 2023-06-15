const points = [70, 75, 25, 35, 10, 80, 27]; // değişkeni oluşturduk.
/* DATAYI MODİFİYE ETMEK İÇİN REDUCE METODU KULLANILIR */ 

const result=points.reduce((value,point) => { //yeni bir değişken oluşuturduk ve bunu points ile 
    //reduce metodunu döndük (arrowFunction olarak)
    if(point >50) // Eğer point 50'den büyükse
    {
        value++;    //50 den büyük olan değerleri +1 arttırarak sırala
    }
    return value; // 50 den büyükleri return ile dön ki yenilenmesin. ** bir nevi durdurma işlemi
},0);

console.log(result);




const students = [
    {name : 'can', point: 40}, // buradaki her bir eleman objedir.
    {name : 'mehmet', point: 60},
    {name : 'kübra', point: 30},
    {name : 'alp kaan', point: 100},
    {name : 'can', point: 80},
    {name : 'mehmet', point: 30},
    {name : 'kübra', point: 60},
    {name : 'alp kaan', point: 40},
];

                                //value kaç tane değer olduğunu gösterir.Örn:70.75.25.35.10.80.27 -- 7 tane değer var
const canTotal = students.reduce((value,student) =>{
                               //2 parametre olduğu için çift parantez     

    if(student.name == "can")  // student name leri can olanları seç dedik.
    {
        value += student.point;
    } // seçilen student can'ın değerleri 40 ve 80'i topla ve pointe eşitle
    return value;  // return ile dön ki işlemi durdursun.

},0)

console.log(canTotal);