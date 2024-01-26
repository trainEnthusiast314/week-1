var a = "15";
const b = 12;
let c = 15;
d = 16;
console.log(a, b, c, d);

// var declares a gloabl variable that
// can have its name redeclared

// let can have its value overwritten but CANNOT be redeclared
// , it reserves the name

// const reserves the name and prevent the value
// being overwritten

//casting refers to converting a data type
// i.e. with parseInt('15')

// variables declared without vat,let or const default to var
// var should never really be used

console.log(parseInt(a) + b, b + c);
let e = 245.3254321;
console.log(e.toFixed(2)); //fixes floats to decimal places
console.log(Math.floor(e)); //rounds down
console.log(Math.ceil(e)); //rounds up
console.log(Math.round(e)); //rounds

let person = "bob";

let message = `Hello ${person}`;

console.log(message);

function add() {
  let toAdd = 0;
  function insideAdd(number) {
    toAdd = toAdd + number;
    return toAdd;
  }
  return insideAdd;
}
let dansAdd = add();
console.log(dansAdd(1), dansAdd(1), dansAdd(5)); //closure example

console.log(message.substring(0, 5));
console.log(message.length);
