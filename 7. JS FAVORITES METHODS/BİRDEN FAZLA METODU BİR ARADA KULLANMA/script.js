const students = [
    {name : 'can', point: 40}, // buradaki her bir eleman objedir.
    {name : 'mehmet', point: 30},
    {name : 'kübra', point: 60},
    {name : 'alp', point: 100},
    {name : 'kaan', point: 45},
    {name : 'deniz', point: 70},
];

const filtered = students.filter(student => student.point <50); //filtrelenen elemanları yeni bir array de atamış olduk.

const plusPoint = filtered.map(student =>{
    return `${student.name} adlı öğrencinin yeni notu ${student.point +15}`;
})

console.log(plusPoint);

const newNotes = students.filter(student => student.point <50)
.map(student => `${student.name} adlı öğrencinin yeni notu ${student.point +15}`);

console.log(newNotes);