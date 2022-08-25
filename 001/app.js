console.log('Labutis');
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
};

console.log(rand(5, 10));

const mas = [...Array(10)].map(_ => rand(100, 999));

console.log(mas)

 const fe = mas.forEach(e => 1);
 const map = mas.map(e => e + 1);

 console.log(fe);
 console.log(map);