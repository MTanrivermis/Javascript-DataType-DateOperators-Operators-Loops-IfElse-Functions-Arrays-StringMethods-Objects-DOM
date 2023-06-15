const points = [70, 75, 25, 35, 10, 80, 27]; // değişkeni oluşturduk.

const studentsPassed = points.filter(point =>{ // points değişkenini filter metodu ile arrowFunction dönüyoruz.
    //ama bunu yeni bir değişken üzerinde ekliyoruz.
    return point > 50;  //50 ' den büyük ise filterele diyoruz.
})
console.log(studentsPassed); // console da filtelenenler gözükür . (70.75.80)

const students = [
    {name : 'can', passed: true}, // buradaki her bir eleman objedir.
    {name : 'mehmet', passed: false},
    {name : 'kübra', passed: false},
    {name : 'alp kaan', passed: true},
];

const passingStudents = students.filter(student => {
    return student.passed //*** ÖNEMLİ eğer başına ünlem koyarsak koşul tanıtmış oluruz. geçemeyenleri bulmak için ! koymak yeterli.
})

console.log(passingStudents);