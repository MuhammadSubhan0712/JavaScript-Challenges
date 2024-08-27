// Day 3: Control Structures

// Tasks/Activities:

// Activity 1: If-Else Statements

console.log("Activity 1: If-Else Statements");

// Task 1: Write a program to check if a number is positive, negative or zero, and log the result to the console.

let number = 100;

if (number == 0) {
  console.log("The number is Zero : ", number);
} else if (number < 0) {
  console.log("The number is Negative : ", number);
} else if (number > 0) {
  console.log("The number is Positive : ", number);
} else {
  console.log("Invalid Input");
}

// Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log result to the console.

let age = +prompt("Enter your age");

if (age >= 18) {
  console.log("You are eligible to vote");
} else if (age < 18) {
  console.log("You are not eligible to vote");
} else {
  console.log("Invalid Input");
}

console.log("----------------------------------------------");

// Activity 2: Nested If-Else Statements

console.log("Activity 2: Nested If-Else Statements");

// Task 3: Write a program to find the largest of three numbers using nested if-else statements.

let a = +prompt("Enter Your First Number");

let b = +prompt("Enter Your Second Number");

let c = +prompt("Enter Your Third Number");

let largest;

if (a > b) {
  if (a > c) {
    largest = a;
    console.log("The largest number is : ", largest, "instead of", b, " & ", c);
  }
}

if (b > a) {
  if (b > c) {
    largest = b;
    console.log("The largest number is : ", largest, "instead of", a, " & ", c);
  }
}
if (c > b) {
  if (c > a) {
    largest = c;
    console.log("The largest number is : ", largest, "instead of", a, " & ", b);
  }
} else {
  console.log("Invalid Input");
}

console.log("----------------------------------------------");

// Activity 3: Switch Case

console.log("Activity 3: Switch Case");

// Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.

let day = +prompt("Enter the number from 1 - 7 to check current day");

switch (day) {
  case 1:
    console.log("Today is Monday");
    break;

  case 2:
    console.log("Today is Tuesday");

    break;

  case 3:
    console.log("Today is Wednesday");

    break;

  case 4:
    console.log("Today is Thursday");

    break;

  case 5:
    console.log("Today is Friday");

    break;

  case 6:
    console.log("Today is Saturday");

    break;

  case 7:
    console.log("Today is Sunday");

    break;

  default:
    console.log("Invalid Input: ", day);

    break;
}

// Task 5: Write a program that uses a switch case to assign a grade ('A' , 'B' , 'C' , 'D' ,'F') based on a score and log the grade to the console.

let score = +prompt("Enter your Score to check your Grade");

switch (score) {
  case score >= 90 && score <= 100:
    console.log("You Secured 'A' Grade with score: ", score, "%");
    break;

  case score >= 80 && score < 90:
    console.log("You Secured 'B' Grade with score: ", score, "%");
    break;

  case score >= 70 && score < 80:
    console.log("You Secured 'C' Grade with score: ", score, "%");
    break;

  case score >= 60 && score < 70:
    console.log("You Secured 'D' Grade with score: ", score, "%");
    break;

  case score >= 0 && score < 60:
    console.log("You Secured 'F' Grade with score: ", score, "%");
    break;

  default:
    console.log("Invalid Input");
    break;
}

console.log("----------------------------------------------");

// Activity 4: Conditional (Ternary) Operator

console.log("Activity 4: Conditional (Ternary) Operator");

// Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log tyhe result to the console.

let num = +prompt("Enter your number to check even or odd");

num % 2 == 0
  ? console.log("Given number ", num, " is Even ")
  : console.log("Given Number ", num, " is Odd");

console.log("----------------------------------------------");

// Activity 5: Combining Condition

console.log("Activity 5: Combining Condition");

// Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

let year = +prompt("Enter a Year to check leap year or not");

if (year % 4 == 0) {
  if (year % 100 == 0) {
    console.log("Entered Year is not a Leap Year");
  } else {
    console.log("Entered Year is a Leap Year");
  }
  if (year % 400 == 0) {
    console.log("Entered Year is a Leap Year");
  } else {
    console.log("Entered Year is not a Leap Year");
  }
  console.log("Entered Year is not a Leap Year");
} else {
  console.log("Entered Year is not a Leap Year");
}

console.log("----------------------------------------------");
