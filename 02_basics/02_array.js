const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//push: pushes element in existing array while concat creates a new array
// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

//spread: other way of concat is spread,spread uses ... and allows combining more than 2 elements too
const all_new_heros = [...marvel_heros, ...dc_heros]  

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// how to handle another_array
const real_another_array = another_array.flat(Infinity) //Instead of infinity we can pass a depth upto which you want to spread
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting case of from,if not specified it'll create empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));