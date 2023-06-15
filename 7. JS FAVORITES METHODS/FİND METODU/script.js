const points = [70, 65, 25, 35, 10, 80, 97]; // değişkeni oluşturduk.

/* ID BULMA - DATADAKİ DEĞERİ BULMADA KULLANILIR */ 

const highPoint = points.find(point => {
    return point > 70;
});

console.log(highPoint);