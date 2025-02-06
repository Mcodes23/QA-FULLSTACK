// Practical Questions
// 1. Declaring Variables
/* 1. Declare a variable age using let and assign it the value 25.*/
let age = 25;
/* 2. Declare a variable schoolName using const and assign it "Greenwood High".*/
const schoolName = "Greenwood High";
/* 3. Declare an empty array called studentsList.*/
let studentsList = [];
/* 4. What is the difference between let, const, and var when declaring variables?*/
"let is used to declare variables that can be reassigned or changed later on",
  "const is used to declare variables that can not be reassigned or changed later on",
  "var declares variables which can be hoisted at the top of the scope and becomes undefined till a value is assigned";

// 2. Naming Conventions
/*Which of the following variable names is invalid?*/
let $price = 100;
// let 1stPlace = "John"; /* it is the invalid variable*/
let _score = 89;
let userName = "Alice";
// 5.Why is the following variable name incorrect?
// const #taxRate = 0.16;
("because it begins with a special character #");
// 6.Rewrite this variable name to follow best practices:
let myVariableNAME = "JavaScript";
// 3. Identifying Data Types
// What will be the output of the following?
console.log(typeof "Hello");
console.log(typeof 99);
console.log(typeof true);
console.log(typeof undefined);
// 8.Identify the data types in this array:
let data = ["Kenya", 34, false, { country: "USA" }, null];
"Kenya -> string",
  "34 -> integer",
  "false -> boolean",
  "{ country: 'USA'} -> object",
  "null -> object";
// 9. How do you define a BigInt in JavaScript? Provide an example.
("you can use the n suffix or use the bigint()");
let num1 = 1000000000000000000000000000000000000n;
let num2 = BigInt(1000000000000000000000000000000000);
// 4. Objects & Arrays
// 11. Create an object person with properties name, age, and city.
const person = {
  name: "Mateli",
  age: "28",
  city: "Nairobi",
};
// 12. Add a new property email to the person object.
person.email = "example.com";
// 13. Declare an array fruits with three fruit names.
const fruits = ["orange", "banana", "grapes"];
// 14. Access the second item in the fruits array.
console.log(fruits[1]);
// 5. Type Coercion
// 15. What will be the output of the following?
console.log("5" + 2); /* 52 */
console.log("5" - 2); /* 3 */
// 16. Convert the string "100" into a number.
let myStr = "100";
let myNum = Number(myStr);
// 17. Convert the number 50 into a string.
let num = 50;
let str = num.toString();
// 18. What will be the result of this operation?
console.log(5 + true);
// 6
