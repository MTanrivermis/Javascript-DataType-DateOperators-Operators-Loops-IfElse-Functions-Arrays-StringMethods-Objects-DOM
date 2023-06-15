const now = new Date();
console.log(now);
console.log(typeof now);

console.log('Year:', now.getFullYear()); // yıl bilgilsini seçer.
console.log('Mounth:', now.getMonth()+1); // ay bilgisini seçer fakat indexte ocak 0 da 
// tutulduğu için belirtilen ayı bulmak için +1 ekleyebiliriz.
console.log('Date:', now.getDate());
console.log('Day:', now.getDay()); // 1 hafta içinde bulunduğumuz günün sayısını alır. pzrt 1 - salı -2 çarş -3 gibi
console.log('Hours:', now.getHours());
console.log('Minutes:', now.getMinutes());
console.log('Seconds:', now.getSeconds());


console.log('timestamp:', now.getTime);

console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());