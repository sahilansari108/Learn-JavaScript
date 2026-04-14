const marvelHeros = ["thor", "Ironman", "Spiderman"];
const dcHeroes = ["superman", "flash", "batman"];

//concat
const allHeros = marvelHeros.concat(dcHeroes);
console.log(allHeros);

//spread
const allNewHeros = [...marvelHeros, ...dcHeroes];
console.log(allNewHeros);

const nums = [1,2,3, [4,5,6],[6,7,[4,5]]];
const flatNums = nums.flat(Infinity);
console.log(flatNums);

console.log(Array.isArray("hitesh"));
console.log(Array.from("hitesh"));
console.log(Array.from({name : "sahil"}));


let score1 = 95;
let score2 = 96;
let score3 = 97;
console.log(Array.of(score1, score2, score3));

