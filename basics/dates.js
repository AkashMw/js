//dates


let myDate = new Date()

console.log(myDate);

console.log(myDate.toDateString());

console.log(myDate.toLocaleString());

console.log(myDate.toString());

const myCreateDate = new Date(2023, 0, 25);
console.log(myCreateDate);


let myTimeStamp = Date.now()
console.log(myTimeStamp);


console.log(myCreateDate.getTime());

console.log(Math.floor(Date.now()/1000));

console.log(myCreateDate.getDay());
console.log(myCreateDate.getMonth());
