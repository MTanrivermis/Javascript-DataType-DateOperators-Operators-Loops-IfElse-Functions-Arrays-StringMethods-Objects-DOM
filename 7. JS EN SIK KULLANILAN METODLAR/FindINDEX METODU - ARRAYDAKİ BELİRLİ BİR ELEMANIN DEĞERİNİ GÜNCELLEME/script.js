/* BİR DEĞİŞKENE ATANAN DEĞERLERİ DEĞİŞTİRMEK İÇİN FİNDİNDEX KULLANILIR
YADA ARRAY DAKİ BİR OBJENİN İSMİNİN DEĞİŞMESİ İÇİN */

const points = [70, 75, 25, 35, 10, 80, 27]; // değişkeni oluşturduk.
const arrayIndex = points.findIndex(point => point == 35);
//arrayİndex ile pointin puanlar 35 olanı arrow function ile dönüyoruz 
points[arrayIndex]=45; // puanı 35 olanı 45 olarak güncelliyoruz.
console.log(points);


const students = [
    {name : 'can', point: 40}, // buradaki her bir eleman objedir.
    {name : 'mehmet', point: 60},
    {name : 'kübra', point: 30},
    {name : 'alp kaan', point: 100},
];

const objectIndex = students.findIndex(student => student.name == 'kübra');
students[objectIndex].point = 80;
console.log(students);

