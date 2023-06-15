const names = ['can', 'mehmet', 'kübra', 'alp', 'kaan'];

names.sort(); // alfabetik sıralama
names.reverse(); // tersten sıralama
console.log(names);




const points = [70, 75, 25, 3, 10, 80, 27]; 

// points.sort();
// points.reverse();

points.sort((a,b) => b-a ); //büyükten küçüğe doğru sıralama
points.sort((a,b) => a-b ); //küçükten büyüğe doğru sıralama
console.log(points);





const students = [
    {name : 'can', point: 40},
    {name : 'mehmet', point: 60},
    {name : 'kübra', point: 30},
    {name : 'kaan', point: 100},
];

// students.sort((a,b) => {
//     if(a.point > b.point)
//     {
//         return -1;  //iki değeri kıyaslıyor eğer büyükse ilk sayı -1 dokunma
//     }
//     else if(b.point > a.point)
//     {
//         return +1; // eğer ikinci sayı büyükse +1 dönüp yer değiştiriyor.
//     }
//     else
//     {
//         return 0; // eğer birbirine eşitse return 0 dön hiçbir şey yapma.
//     }
// });

students.sort((a,b) => b.point - a.point); // yukarıdakilein kısa yazılmış hali

console.log(students);
