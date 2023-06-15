const startDate = new Date ('08/15/2018 9:45:00');
const now = new Date ();
console.log(startDate);

const diff = now.getTime()-startDate.getTime();
console.log(diff);

const mins = Math.round(diff/1000/60); // milisaniyeyi --> saniyeye saniyeyi de --> dakikaya çevirdik.
const hours = Math.round(mins/60); // "Math.round" en yakın değere yuvarlıyor.
const days = Math.round(hours/24);
const years = Math.round(days/365);
console.log(`Video çekmeye ${mins} dakika önce bşladım`);
console.log(`Video çekmeye ${hours} saat önce bşladım`);
console.log(`Video çekmeye ${days} gün önce bşladım`);
console.log(`Video çekmeye ${years} yıl önce bşladım`);


/* Timestamp Kullanımı */
const timestamp = 1627727162629 
console.log(new Date (timestamp)); //timstamp ile tarihi bulma