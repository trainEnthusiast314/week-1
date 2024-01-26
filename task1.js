let numTest = 45.324568;
console.log(numTest);

let twoDecimalPoints = numTest.toFixed(2);

console.log(twoDecimalPoints);

let stringTest = `I am the very model of a modern major general`;
let indexOfM = stringTest.indexOf(`M`);
console.log(indexOfM); //-1 when index is not present
stringTest = stringTest.toUpperCase();
console.log(stringTest);

let start = stringTest.indexOf("MODEL");
let end = stringTest.indexOf("MAJOR");

let substr = stringTest.substring(start, end);
console.log(substr);

document.write("<p>" + substr + "<p>");
