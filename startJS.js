// 30 january start js 2022
// studying local coding

// Functions

function helloWorld() {
    var str = 'Hello World!';
    console.log(str);
    return str;
}

function multiply(number) {
    let result = number * 2;
    return result;
}

// types

let age = 27;  // "number"
let n = 12.345;

// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;  // "bigint"

let name =  'Alice'; // "string"
let city = "Miami";

let isEven = true;  // "boolean"
let isAdult = age >= 18;

let job = null; // "object" (официальная ошибка в языке)

let a;  //"undefined"
let b = undefined;

const array = [1, 2, 3];  // "object"
let obj = {name: "Bob"}; // "object"
let data = new Date(); // "object"

let id = Symbol("id"); // "symbol"


let name = 'Alice';
let age = 25;
console.log(typeof name); // "string"
console.log(typeof(age)); // "number"