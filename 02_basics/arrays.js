//arrays

const array = [1, 2, 3, 4, 5]

console.log(array[0]);

const myArray = []

myArray.push(6)

console.log(myArray);

myArray.unshift(88)
myArray.pop()


console.log(myArray);


console.log(myArray.join());

console.log(array);


// slice and splice 

//splice changes the orignal array

const dcHeros = ["thor", "ironman", "hulk"]

const dc = ["thor", "ironman", "hulk"]

const marvel = ["superheros", "flash"]

dcHeros.push(marvel);

const new_array = dc.concat(marvel)

console.log(dcHeros);
console.log(dc);
console.log(new_array);


//concat return new array 

const arr1 = [1, 2,3 ]
const arr2 = [2, 3, 4, 5]

const newGoodArray = [...arr1, ...arr2]

console.log(newGoodArray);


const newArr1 = [1, 2, 3, [2, 3, 4], [3, 4, 5,6, [4, 5, 6]]]

const newOneDepthArray = newArr1.flat(1);
const newInfiniteArray = newArr1.flat(Infinity);
console.log(newInfiniteArray); 



console.log(Array.isArray("Akash"));

console.log(Array.from("Akash"));

// console.log(Array.from(name: "Akash"));  // 






let a = "sdfgh"
let b = "fghjk"
let c = "fghjk"

const newA = Array.of(a, b, c);

console.log(newA);






