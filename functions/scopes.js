let a = 10
const b = 20
var c = 30

if(true){
    let a = 20 
    const b = 30
    var c = 40
}

console.log(c);

function one(){
    const website = "google"
    function two(){
        const user = "Akash"
        console.log(website);
    }
    two()
    // console.log(user);
}
one()

// console.log(addOne(2));
// function addOne(num){
//     return num + 1
// }

const addOne = function(num){
    return num + 1
}


console.log(addOne(2));