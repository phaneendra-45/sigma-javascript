/* Answer 1 */
let nums = [1, 2, 3, 4, 5];
const square = nums.map((num) => num * num);
console.log(square);
let sum = square.reduce((acc, cur) => acc + cur, 0);
let avg = sum / nums.length;
console.log(avg);
/* Answer 2 */
let numbers = [2, 4, 6, 8, -2, -4];
console.log(numbers.map((number) => number + 5));
/* Answer 3 */
let strings = ["adam", "bob", "catlyn", "donald", "eve"];
console.log(strings.map((string) => string.toUpperCase()));
/* Answer 4 */
const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map((v) => v * 2)];
console.log(doubleAndReturnArgs([1, 2, 3], 4, 4)); 
console.log(doubleAndReturnArgs([2], 10, 4)); 
/* Answer 5 */
const mergeObjects=(obj1,obj2)=>({...obj1,...obj2});
console.log(mergeObjects({a:1,b:2},{c:3,d:4}));