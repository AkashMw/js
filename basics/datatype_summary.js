// primitive

//7 types => String, Number, Boolean, null, undefiend, symbol, BigInt


//Reference(Non primitive)

//Array, Object, Functions


const score = 3
const isLoggedIn = true


let userEmail;

let id = Symbol('123')
let anotherId = Symbol('123')

const heros = ["shaktiman", "naagraj", "daga"]

let myObj = {
    name: "akash",
    age: 23
}

const myFunction = function(){
    console.log("helo");
}

console.log(typeof(myFunction));


// strings 

const   name = "akash"
const   repocount = 50 

console.log(`hello ${name} and my repo is ${repocount}`)


const gameName = new String('hitesh')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));

console.log(gameName.indexOf('t'));


const newString = gameName.substring(0, 4);

const newString1 = gamename.slice(-8, 4);
console.log(newString);
console.log(newString1);