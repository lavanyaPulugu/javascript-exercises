const fruits = ["Banana", "Orange", "Apple", "Mango", "dates"];
const vegis = ["tomato", "potato"];
const meet = ["chicken", "beef", "eggs"];
const numbers = [
  [1, 2],
  [2, 3],
  [3, 4],
];

const points = [9, 5, 7, 200, 60, 4, 8];

const size = fruits.length;
const fruitString = fruits.toString();
// const favFruit = fruits.at(2);
const favFruit = fruits[2];
const fruitjoin = fruits.join("/");
fruits.pop();
fruits.push("kiwi");
fruits.shift();
fruits.unshift("papaya");
//old version
// const food = fruits.concat(vegis, meet);
//new version
const food = [...fruits, ...vegis, ...meet];

meet.copyWithin(2, 0);
const newNum = numbers.flat();

const newfruit = fruits.splice(1, 3, "mango", "jack");
const newfruits = fruits.slice(0, 2);

const findapple = fruits.lastIndexOf("Apple");
const findfruit = fruits.includes("jujubi");

const findmethod = fruits.find((fruit) => fruit == "dates");
const findindex = fruits.findIndex((fruit) => fruit == "mango");
const sortfruit = fruits.sort();
const revercemethod = fruits.reverse();
const pointSort = points.sort((a, b) => a - b);
const max = Math.max(...points);
const min = Math.min(...points);
const max2 = Math.max.apply(null, points);

console.log(size);
console.log(fruitString);
console.log(favFruit);
console.log(fruitjoin);
// console.log(fruits);
console.log(food);
console.log(meet);
console.log(newNum);
console.log(newfruit);
console.log(newfruits);
console.log(findapple);
console.log(findfruit);
console.log(findmethod);
console.log(findindex);
console.log(sortfruit);
console.log(revercemethod);
console.log(pointSort);
console.log(max);
console.log(min);
console.log(max2);
numbers.forEach((num) => console.log(num));

const numbers2 = [1, 2, 3, 4, 5, 8, 10];
const evenNumbers = numbers2.filter((num) => num % 2 === 0);

console.log(evenNumbers);
