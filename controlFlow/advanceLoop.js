const coding  = ["js", "ruby", "java", "python", "cpp"];

const name = coding.forEach( (item) =>{     // for each do not return anything
    // console.log(item);
    return item;
})
// console.log(name);

//filter 

const myNums = [1,2,3,4,5,6,7,8,9,10];

// const newNums = myNums.filter( (num) => (num>4))  // this arrow function implicit return
// console.log(newNums);

// filter is used to filter data from array based on condition
const newNums2 = myNums.filter( (num) => {
    return num > 4;
})
// console.log(newNums2);


//forEach to filter elements
const newNums3 = [];
myNums.forEach( (num) => {
    if(num>4){
        newNums3.push(num)
    }
})
// console.log(newNums3);

const books = [
    {title: 'book One', genre: 'science', publish: 1985, edition: 1989},
    {title: 'book Two', genre: 'history', publish: 2009, edition: 1996},
    {title: 'book Three', genre: 'physics', publish: 1979, edition: 2004},
    {title: 'book Four', genre: 'Maths', publish: 1988, edition: 1970},
    {title: 'book Five', genre: 'science', publish: 1985, edition: 2004},
    {title: 'book Six', genre: 'chemistry', publish: 1979, edition: 1996},
    {title: 'book Seven', genre: 'history', publish: 1985, edition: 1989},
    {title: 'book Eight', genre: 'physics', publish: 2006, edition: 2005}
];

let userBooks = books.filter( (book) => (book.genre === 'history'));
// console.log(userBooks);

let userBooks1 = books.filter( (bk) => {return bk.publish >= 2000})
// console.log(userBooks1);

let userBooks2 = books.filter( (bk) => {
    return bk.publish >= 2000 && bk.genre === 'history'
})
console.log(userBooks2);



