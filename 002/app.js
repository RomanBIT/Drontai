
const data = [
    { id: 1, type: 'man', name: 'Lina', color: 'blue' },
    { id: 2, type: 'car', name: 'Opel', color: 'red' },
    { id: 3, type: 'animal', name: 'Vilkas', color: 'green' },
    { id: 4, type: 'fish', name: 'Ungurys', color: 'yellow' },
    { id: 5, type: 'man', name: 'Tomas', color: 'green' },
    { id: 6, type: 'animal', name: 'Bebras', color: 'red' },
    { id: 7, type: 'animal', name: 'Barsukas', color: 'green' },
    { id: 8, type: 'car', name: 'MB', color: 'blue' },
    { id: 9, type: 'car', name: 'ZIL', color: 'red' },
    { id: 10, type: 'man', name: 'Teta Toma', color: 'yellow' },
];

const data2 = [
    { id: 1, list: [8, 8, 22],color: 'red' },
    { id: 2, list: [74, 5, 220, 7], color: 'red' },
    { id: 3, list: [8, 1, 0, 0, 8, 22], color: 'red' },
]

//   data.forEach(e => console.log(e.name));

//   const d1 = data.map(c => ({...c, color: c.color.replace('red', 'orange')})); -- Veiks tik siuo atveju
const d01 = data.map(e => e.color == 'red' ? { ...e, color: 'orange' } : { ...e })
const d2 = data.map(e => e.id % 2 == 0 && e.type == 'car' ? { ...e, color: 'black' } : { ...e })
const d3 = data.map(e => e.name.length <= 4 ? { ...e, name: e.name.padEnd(8, '*') } : { ...e });
const d4 = data2.map(e => ({...e, list: [...e.list, 0]}))
const d5 = data2.filter(e => e.color == 'red');
const d6 = data.filter(e => e.type != 'animal');
data.filter(e => e.type == 'animal').forEach(a => console.log(a.name));
const d7 = data.filter(e => e.type == 'animal' && e.color == 'green');
const d8 = data.filter(e => e.type == 'car' || e.type == 'man')
.map(e => e.color != 'red' ? {...e, color: 'black'} :  {...e});


console.log(d8)






