// Day 2 : Operators

// Tasks / Activities:

// Activity 1: Arithematic Operations

// Task 1: Write a program to add two numbers and log the result to the console.

console.log("Activity 1: Arithematic Operations");

let add1 = 17;
let add2 = 20;
let add;

add = add1 + add2;

console.log("The Addition of ", add1, " + ", add2, " = ", add);

// Task 2: Write a program to subtract two numbers and log the result to the console.

let sub1 = 57;
let sub2 = 20;
let sub;

sub = sub1 - sub2;

console.log("The Subtraction of ", sub1, " - ", sub2, " = ", sub);

// Task 3: Write a program to multiply two numbers and log the result to the console.

let mul1 = 57;
let mul2 = 12;
let mul;

mul = mul1 * mul2;

console.log("The Multiplication of ", mul1, " * ", mul2, " = ", mul);

// Task 4: Write a program to divide two numbers and log the result to the console.

let div1 = 400;
let div2 = 20;
let div;

div = div1 / div2;

console.log("The Division of ", div1, " / ", div2, " = ", div);

// Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.

let rem1 = 19;
let rem2 = 5;
let rem;

rem = rem1 / rem2;

console.log("The Remainder of ", rem1, " % ", rem2, " = ", rem);

console.log(
  "------------------------------------------------------------------"
);

// Activity 2: Assignment Operators

console.log("Activity 2: Assignment Operators");

// Task 6: Use the += operator to add a number to a variable and log the result to the console.

let num1 = 345;

let num2 = 34;

let sum = (num1 += num2);

console.log(
  "Using Assignment Operator the sum of ",
  num1,
  " & ",
  num2,
  " += ",
  sum
);

// Task 7: Use the -= operator to subtract a number from variable and log the result to the console.

let num3 = 345;

let num4 = 300;

let chk = (num3 -= num4);

console.log(
  "Using Assignment Operator the subtraction of ",
  num3,
  " & ",
  num4,
  " -= ",
  chk
);

console.log(
  "------------------------------------------------------------------"
);

// Activity 3: Comparison Operators

console.log("Comparison Operators");

// Task 8: Write a program to compare two numbers using > & < and log the result to the console.

let number = 10 < 17;

console.log("Using Comparison Operator ", 10, " < ", 17, " = ", number);

let number2 = 15 > 3;

console.log("Using Comparison Operator ", 15, " > ", 3, " = ", number2);

let number3 = 25 < 20;

console.log("Using Comparison Operator ", 25, " < ", 20, " = ", number3);

let number4 = 70 > 100;

console.log("Using Comparison Operator ", 70, " > ", 100, " = ", number4);

console.log("---------------------------------------------------------");

// Task 9: Write a program to compare two numbers using >= & <= and log the result to the console.

let numeric = 200 >= 130;

console.log("Using Comparison Operator ", 200, " >= ", 130, " = ", numeric);

let numeric1 = 4355 <= 4522;

console.log("Using Comparison Operator ", 4355, " <= ", 4522, " = ", numeric1);

let numeric2 = 342 >= 3420;

console.log("Using Comparison Operator ", 342, " >= ", 3420, " = ", numeric2);

let numeric3 = 4532 <= 3425;

console.log("Using Comparison Operator ", 4532, " <= ", 3425, " = ", numeric3);

console.log("-----------------ccc----------------------------------------");

// Task 10: Write a program to compare two numbers using == & === and log the result to the console.

let numeric4 = 155 == 155;

console.log("Using Comparison Operator ", 155, " == ", 155, " = ", numeric4);

let numeric5 = 199 == 243;

console.log("Using Comparison Operator ", 199, " == ", 243, " = ", numeric5);

let str = "1897" === "1897";

console.log("Using Comparison Operator ", "1897", " === ", "1897", " = ", str);

let str1 = "2900" === 2900;

console.log("Using Comparison Operator ", "2900", " === ", 2900, " = ", str1);

let str2 = "1500" === "2500";

console.log("Using Comparison Operator ", "1500", " === ", "2500", " = ", str2);

console.log("---------------------------------------------------------");

// Activity 4: Logical Operators
console.log("Activity 4: Logical Operators");

// Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.

var hour = +prompt("Enter the current hour");
if (hour > 5 && hour < 10) {
  console.log(' "Breakfast is served." ');
} else if (hour > 10 && hour < 2) {
  console.log(' "Time for lunch." ');
} else if (hour > 4 && hour < 9) {
  console.log(' "It is a dinner time." ');
} else {
  console.log('  "Sorry, you will have to wait, or go get a snack." ');
}

console.log("----------------------------");

// Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.

var mychar = +prompt("Enter any character to check ");
if (mychar === "a, e, i , o, u" || "A, E, I, O, U") {
  console.log("The given character is vowel");
} else {
  console.log("The given character is consonant");
}

console.log("----------------------------");

// Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.

let not = 10 != 8;
console.log("Using logical Operator ", 10, "!=", 8, " = ", not);

let not1 = 14 != 14;

console.log("Using logical Operator ", 14, "!=", 14, " = ", not1);

console.log("---------------------------------------------------------");

// Activity 5: Ternary Operators

console.log("Activity 5: Ternary Operators");

// Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.

let numbers = 1656;

numbers < 0
  ? console.log("Number is Negative", " : ", numbers)
  : console.log("Number is positive", " : ", numbers);

let numbers1 = -325;

numbers1 < 0
  ? console.log("Number is Negative", " : ", numbers1)
  : console.log("Number is positive", " : ", numbers1);
