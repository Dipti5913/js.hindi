// Primitive (call by value)

// 7 types : string, number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp= null
let userEmail;

const id = symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 34563474975759n

// Reference(Non primitive)

//3 types : Array , Object, Functions

const heros = ["Shaktiman" , "Nagraj", "doga"];
let myObj = 
{
    name:"Dipti" ,
    age:2,
}

const myfunction = function()
{
    console.log("Hello World");
}

console.log(typeof bigNumber);



// ******* Memory *********
// stack(Primitive - copy value)  , Heap(Non-Primitive - originalvalue) 

let myYoutubename = "diptiutalecom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email : "user@google.com" ,
    upi : "user@sbi"
}

let userTwo = userOne

userTwo.email = "dipti@google.com"

console.log(userOne.email);
onsole.log(userTwo.email);