let age = 15;

if (age <= 17) {
  console.log("underage");
} else {
  console.log("18 or over");
}
age = 18;
if (age <= 17) {
  console.log("underage");
} else if (age <= 65) {
  console.log("insurable");
} else {
  console.log("out of range");
}
age = 40;
age <= 65 && age >= 17 ? console.log("insurable") : console.log("out of range");
