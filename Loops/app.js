
// Day 4: Loops 

// Tasks/Activities:

// Activity 1: For Loop

console.log("Activity 1: For Loop");


// Task 1: Write a program to print numbers from 1 to 10 using a for loop.

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Task 2: Write a program to print the multiplication table of 5 using a for loop.

console.log("\nTable of 5");
for (let i = 1; i <= 10; i++) {
    console.log("5 * " ,i , " = " ,5*i);
    
}

console.log("-------------------------------------------");



// Activity 2: While Loop

console.log("Activity 2: While Loop");


// Task 3: Write a program to calaulate the sum of numbers from 1 to 10 using a while loop.

console.log("\nSum of numbers from 1 to 10 using while loop");

let i = 1 ;
let sum = 0;
while (i <= 10) {
    sum += i;
    i++;
 console.log(sum);
}
console.log("\n");


// Task 4: Write a program to print numbers from 1 to 10 using a while loop.
console.log("\nNumbers from 1 to 10 using while loop");
let k = 0;
while (k < 10) {
    k++;
    console.log(k);
}


console.log("-------------------------------------------");




// Activity 3: Do...While Loop

console.log("Activity 3: Do...While Loop");


 // Task 5:  Write a program to print numbers from 1 to 5 using a do...while loop.

console.log("\nPrint numbers from 1 to 5 using do...while loop");

let j = 0;
do {
    j++
    console.log(j);
} 
while (j < 5)



// Task 6: Write a program to calculate the factorial of numbers using a do...while loop.

console.log("\nCalculate the factorial of numbers using a do...while loop");

let n = 1;
let f = 1;
do {
    f *= n;
    n++;
} while (n <= 5);
console.log("Factorial of ", n-1 ," = " ,f);
console.log("-------------------------------------------");






// Activity 4: Nested Loop

console.log("Activity 4: Nested Loop");


 // Task 7: Write a program to print pattern using nested for loop.

//  *
//  * *
//  * * *
//  * * * *
//  * * * * *

for (let i = 0; i <= 5; i++) {
     asteric = "";
    for (let j = 0 ; j < i; j++) {
      asteric += " * ";
    }
console.log(asteric);
}

console.log("-------------------------------------------");




 // Activity 5: Loop Control Statements

console.log("Activity 5: Loop Control Statements");


// Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using continue statement.

for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        continue;
    }
    console.log(i);+ 
}

// Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number 7 using break statement.

console.log("\n\n");
for (let i = 1; i <= 10; i++) {
    if (i == 7) {
        break;
    }
    console.log(i);
}


