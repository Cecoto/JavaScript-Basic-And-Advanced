const myArray = [10, 26, 9, 4, 15];
const stringArray = ["Goshkata", "Peshkata", "Bobkata", "Achkata"];
myArray.sort((a, b) => a - b); // order by ascending !!!
myArray.sort((a, b) => b - a); // order by descending !!!
stringArray.sort((a, b) => a.localeCompare(b)); // ordered Alphabethicly
stringArray.sort((a, b) => b.localeCompare(a)); // ordered reversed Alphabethicly

console.log(stringArray.join());
console.log(myArray.join());