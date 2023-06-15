const points = [70, 75, 25, 35, 10, 80, 27]; // değişkeni oluşturduk.

const newPoints = points.map(point => {
        return point+10;
    });

    console.log(newPoints);

    const students = [
        {name : 'can', point: 40}, // buradaki her bir eleman objedir.
        {name : 'mehmet', point: 60},
        {name : 'kübra', point: 30},
        {name : 'alp kaan', point: 100},
    ];

    const newStudentsPoints = students.map(student => { // yeni bir değişken oluşturup students değişkeni ile ibrlikte
        // map metodunu dönüyoruz (arrowFunction olarak)
        if(student.point < 50) // Eğer öğrenci puanları 50'den küçükse
        {
            student.point += +15;
            return student ;
            //return {name : student.name , points: student.point + 15} //50'den düşük puanlı olanlara +15 puan ekle dedik.
        }
        else // değilse
        {
            return student // 50'den yüksek not aldığı için sadece öğrenciyi döndür.
        }
    })

    console.log(newStudentsPoints);