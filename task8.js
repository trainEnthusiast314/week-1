const darthVader = {
  allegiance: "Empire",
  weapon: "lightsaber",
  sith: true,
};
console.log(Object.keys(darthVader).length);

darthVader["children"] = 2;
darthVader["childNames"] = ["Luke", "Leia"];
console.log(darthVader);
darthVader["allegiance"] = "The light side";
console.log(darthVader);
delete darthVader["children"];

let { allegiance, weapon, sith, childNames } = darthVader;

console.log(allegiance, weapon, sith, childNames);
