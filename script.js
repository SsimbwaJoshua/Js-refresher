"use strict";

// let number = 5;
// let age = prompt("how old are you");

// if (number === Number(age)) alert(`your age is ${age}`);

//

// The nullish coalescing operator is written as two question marks ??
// The result of a ?? b is:

// if a is defined, then a,
// if a isn’t defined, then b.

//////////////////////////////////////////////////////////////
//MATH OPERATIONS
////////////////////////////////////////////////////////////////

//math.truc(not supported in explorer)
// Math.round()
//t0 round the number of decimal places required we use // toFixed(3) note:returns a string
// math.ceil()
// math.floor()
// Math.max();
// Math.min();
// exponential is 2**4 is 2 ti the power of 4

//////////////////////////////////////////////////////////////
//STRING OPERATIONS
////////////////////////////////////////////////////////////////
// \n to create a break in the String
//String.length  // written without () becoz its not a function
//toUpperCase, toLowerCase

//////////////////////////////////////////////////////////////
//ARRAY OPERATIONS
////////////////////////////////////////////////////////////////
// push pop shift unshift
// splice is used to delete from an array arr.splice(0,1) meaning from the first index to position one are deleted

// const salaries = {
//   john: 100,
//   pete: 200,
//   josh: 300,
// };

// const entry = Object.values(salaries);

// console.log(...entry);

// console.log(entry);
// let sum = 0;

// entry.forEach((item) => {
//   sum += item;
//   console.log(sum);
// });

//////////////////////////////////////////////////////////////
//JSON OPERATIONS
////////////////////////////////////////////////////////////////

// JSON.stringify to convert objects into JSON.
// JSON.parse to convert JSON back into an object

//////////////////////////
//TRY CATCH
//////////////////////////

// let json = '{"name":"John", "age": 30}';
// const working = JSON.parse(json);
// console.log(working.name);
// try {
//   alert(`hei ${working.names}`);
// } catch (err) {
//   alert(err.message);
// }

// let json = '{"name":"John", "age": 30}';
// const working = JSON.parse(json);
// console.log(working.name);
// try {
//   alert(`hei ${working.names}`);
// } catch (err) {
//   console.log(err.message);
//}

let json = '{"name":"John", "age": 30}';
const working = JSON.parse(json);
console.log(working.name);
try {
  console.log(`hei ${working.names}`);
} catch (err) {
  console.log(err.message);
}
