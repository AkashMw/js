// singleton
//object litrals
// or Object.create => singleton

const mySym = Symbol("key1")

const JsUser = {
    name: "akash",
    age: 28,
    [mySym]: "ghjk",
    email: "akash@ineisha.com"
}

console.log(JsUser.name);
console.log(JsUser["name"]);

console.log(JsUser[mySym]);

console.log(mySym);


JsUser.email = "akash@ineashatechnologies.com"
// Object.freeze(JsUser);
JsUser.email = "skash@witmates.com"
console.log(JsUser);


JsUser.greeting = function(){
    console.log("hello");
}


JsUser.greetingTwo = function(){
    console.log(`hello ${this.name}`);
}


console.log(JsUser.greeting);
console.log(JsUser.greeting());

console.log(JsUser.greetingTwo());
