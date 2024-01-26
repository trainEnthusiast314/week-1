console.log(5 + 5); //10
console.log(5 * 10); //50
console.log(10 % 3); //1
console.log(5 + (10 / 2) * 5 - 10); //20
console.log(((6 + 10) / 2) * 5 - 10); //30

let x = 0;

console.log((x = x + 1)); //1
console.log((x += 1)); //2
console.log(x++); //2 return value x then incriments
console.log(++x); //4 incriments x then returns x

console.log(5 > 3); //true
console.log(3 != 3); //false
console.log(3 <= 2 && 5 > 2); //false
console.log(!5 > 3); //false

console.log(5 + "5"); //55
console.log(5 + true); //type error --6
console.log(5 * "5"); //'55555'--25
console.log(1 == true); //true
console.log(1 === true); //false
console.log(false + 12); //booleans are true=1 false =0 or 0 is falsy 1 is truthy
