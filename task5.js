const quote = ["i", "am", "your", "friend"];
console.log(quote[2]);
quote.pop();
console.log(quote);
quote.push("father");
console.log(quote);
quote.unshift("Luke");
console.group(quote);

const erroneousWord = "Luke";

let lukeIsHere = quote.find((element) => element === erroneousWord);
console.log(lukeIsHere);
let LuckeIsAt;

if (lukeIsHere) {
  LuckeIsAt = quote.findIndex((element) => element === erroneousWord);
  quote[LuckeIsAt] = "No";
}

console.log(quote);
let output = "";
for (let i = 0, j = quote.length; i < j; i++) {
  if (i === j - 1) {
    output += quote[i] + "!";
  } else if (quote[i] === "No") {
    output += quote[i] + ", ";
  } else {
    output += quote[i] + " ";
  }
}
console.log(output);
