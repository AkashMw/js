// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123qwe"
tinderUser.name = "akash"

console.log(tinderUser);

const regularUSer = {
  email: "akash",
  fullname: {
    username: {
      firstname: "akash",
      lastname: "rajput"
    }
  }
}


console.log(regularUSer.fullname?.username.firstname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2} //will not work as expected 

// const obj3 = Object.assign({}, obj1, obj2);

const obj3 = {...obj1, ...obj2}

console.log(obj3);

// when it comes from database


const users = [
  {
    id: 1,
    name: "akash"
  },
  {
    id: 2,
    name: "kirti"
  }
]

console.log(users[1].name);

console.log(Object.keys(tinderUser));

console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('nameA'));