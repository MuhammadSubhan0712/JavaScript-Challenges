


// Day 5: Function

// Tasks/Activities:

// Activity 1: Function Declaration


console.log("Activity 1: Function Declaration");

// Task 1: Write a function to check if a number is even or odd and log the result to the console.


// function checks() {
//     let num = +prompt("Enter your number") ;
//     if (num % 2 == 0) {
//         console.log("Given number ",num ," is Even");
//     }

//     else
//     console.log("Given number ", num ," is Odd");
// }
// checks();
// console.log("\n");

// Task 2: Write a function to calculate the square of a number and return the result.

// function square() {
//     let sqr;
//     let num = +prompt("Enter your number to check it's square");
//     sqr = num * num;
//     console.log("The Square of Given number " , num , " is " , sqr);
// }
// square();


console.log("--------------------------------------------");




// Activity 2: Function Expression


console.log("Activity 2: Function Expression");

// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.

// let max = function(a , b) {
//     return a > b ? a : b;
// }

// let num1 = +prompt("Enter your first number");
// let num2 = +prompt("Enter your Second number");

// let maximum = (max(num1 , num2));
// console.log("The Maximum Number between " , num1 , " & " , num2 , " is ", maximum);

// Task 4: Write a function expression to concatenate two strings and return the result.

// let catenate = function (a , b) {
//     return a + " " + b;
// }
// let str1 = prompt("Enter your First string");
// let str2 = prompt("Enter your Second string");

// let concan = (catenate(str1 , str2))

// console.log("After Concatenate the two strings are:\n" , concan);

// console.log("--------------------------------------------");





// Activity 3: Arrow Function 


console.log("Activity 3: Arrow Function ");

// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.

// let sum = (a , b)=>{
//   return a + b;
// }
// let num1 = 230;
// let num2 = 43520;
// let add = sum(num1 , num2);
// console.log("The Sum of numbers", num1 , " + " , num2 , " is = " , add);


// Task 6: Write an arrow function to check if a string contains specific character and return a boolean value.


// let func = (st , ch)=>{
// return st.includes(ch)
// }

// let str = prompt("Enter your string");
// let char = prompt("Enter a char to check if a string contains this specific character");

// let result = func(str , char);

// console.log("Does the string ", '"' ,  str , '"' ," contain the character " , '"' ,  char , '"' ,"? is:" ,  result);


console.log("--------------------------------------------");





// Activity 4: Function Parameters and Default Values 


console.log("Activity 4: Function Parameters and Default Values");

// Task 7: Write a function that takes two parameters and return their product. Provide a default value for the second parameter.

function pro(a , b = 2) { // B = 2 by default.
    return a * b ;
}

 console.log(pro(34));
 console.log(pro(12 , 33));
 console.log(pro(13));
 console.log(pro(45 , 54));

console.log("\n");


// Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.

function bio(name , age = 25) { // age = 25 by default.
    return "Name: " + name + "\nAge: " + age ;
}

 console.log(bio("Subhan" , 23));
 console.log(bio("Owais"));
 console.log(bio("FazaL" , 22));
 console.log(bio("Yousuf"));

console.log("--------------------------------------------");



// Activity 5: Higher-Order Functions


console.log("Activity 5: Higher-Order Functions");

// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.

function higher(func , times) {
    for (let i = 1; i <= times; i++) {
        func();
    }
};

let order = ()=>{
    console.log('"MUHAMMAD"');
}
console.log(higher(order , 73));


// Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

function applyFunctions(fn1, fn2, value) {
    let result1 = fn1(value);
    let result2 = fn2(result1);
    return result2;
}

// Example functions:
let addFive = (num) => num + 5;
let multiplyByThree = (num) => num * 3;

// Example usage:
let value = 20;
let finalResult = applyFunctions(addFive, multiplyByThree, value);
console.log(finalResult); // Output: 45



