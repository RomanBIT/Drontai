console.log('Labutis');
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
};

console.log(rand(5, 10));

const mas = [...Array(10)].map(_ => rand(100, 999));

console.log(mas);

 const fe = mas.forEach(e => e + 1);
 const map = mas.map(e => e + 1);

 console.log(fe);
 console.log(map);

 //--------------------------------------------//

 const cats = [ 
    {name: 'Pilkis', weight: 4,},
    {name: 'Murka', weight: 7},
    {name: 'Keris', weight: 3},
]

 const cats2 = cats.map(c => ({...c, weight: c.weight + 1}));

 console.log(cats)
 console.log(cats2)

//---------------------------------------------//

const cats3 = cats.map(c => ({...c, weight: rand(3, 10)}))

console.log(cats3)

//---------------------------------------------//

const cats4 = cats.map(c => ({...c, takesPill: rand(0, 1) ? 'yes' : 'no'}))

console.log(cats4)