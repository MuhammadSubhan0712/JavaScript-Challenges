// Day 1 : Variables and Data Types

// Tasks/Activities:

// Activity 1: Variables Declaration

// Task 1: Declare a variable using var, assign it a number, and log the vaslue to hte console.

var num = 37;

console.log(num);

// Task 2: Declare a variable using let, assign it a string, and log the vaslue to hte console.

let mystr = "Muhammmad Subhan Khan";

console.log(mystr);

// Activity 2: Constant Declaration

// Task 3: Declare a variable using const, assign it a boolean value, and log the vaslue to hte console.

const myboolean = true;

console.log(myboolean);

// Activity 3: Data Types

// Task 4: Create variables pf different data types (number , string , boolean , object , array) and log each variable's type using the typeof operator.

let num2 = 40;

let str2 = "Subhan";

let bool = false;

let obj = {
  username: "Asfar",
  age: 23,
  email: "asfar213@gmail.com",
  islogggedIn: true,
};

let arr = ["Khubaib", 1, "Ahmed", 42, true];

console.log(typeof num);

console.log(typeof str2);

console.log(typeof bool);

console.log(typeof obj);

console.log(typeof arr);

// Activity 4: Reassigning Variables

// Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.

let str3 = "Initial";

console.log(str3);

str3 = "Changed";

console.log(str3);

// Activity 5: Understanding "const".

// Task 6: Try reassigning a variable declared with const and observe the error.

const value = "Check";

value = "Error"; //Generate Error ...
