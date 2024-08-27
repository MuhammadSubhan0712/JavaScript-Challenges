

// Day 6: Arrays

// Tasks/Activities:

// Activity 1: Array Creation and Access

console.log("Activity 1: Array Creation and Access");
console.log("\n");

//  Task 1: Create an array of numbers from  1 to 5 and log the array to the console.

let array1 = [1 , 2 , 3 , 4 , 5];

console.log(array1);

//  Task 2: Access the first and last element of the array and log them to the console.

console.log("\nFirst Element of array:" , array1[0]);

console.log("\nLast Element of array:" , array1[4]);



console.log("------------------------------------------------------------");



// Activity 2: Array Methods (Basic)

console.log("Activity 2: Array Methods (Basic)");
console.log("\n");


//  Task 3: Use the push method to add a new number to the end of the array and log the updated array.

array1.push(6);

console.log("After Push an element the Updated Array:" , array1);


//  Task 4: Use the pop method to remove the last element from the array and log the updated array.

array1.pop();

console.log("\nAfter Pop an element the Updated Array:" , array1);


//  Task 5: Use the shift method to remove the first element from the array and log the updated array.

array1.shift();

console.log("\nAfter Shift an element the Updated Array:" , array1);


//  Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.


array1.unshift(1);

console.log("\nAfter UNshift an element the Updated Array:" , array1);



console.log("------------------------------------------------------------");



// Activity 3: Array Method (Intermediate)

console.log("Activity 3: Array Method (Intermediate)");

console.log("\n");

//  Task 7: Use the map method to create a new array where each number is doubled and log the new array.
console.log("Before Apply Map the Array is:" , array1);

let upd = array1.map((x) => x * 2 );

console.log("After Apply Map the Updated Array is:" , upd);


//  Task 8: Use the filter method to create a new array with only even numbers and log the new array.

let array2 = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 , 13 , 14 , 15 , 16 , 17 , 18 , 19 , 20];
console.log("\nBefore filter the array is:",array2);

let filtered = array2.filter(even => even % 2 == 0 );
console.log("After filter the Updated Array is:",filtered);


//  Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
console.log("\nBefore Reduce the Array is:",array2);

let sumofall =  array2.reduce((accumulator , currentvalue) => accumulator + currentvalue );

console.log("After Reduce the Array is:",sumofall);

console.log("------------------------------------------------------------");




// Activity 4: Array Iteration

console.log("Activity 4: Array Iteration");
console.log("\n");


//  Task 10: Use a for loop to iterate over the array and log each element to the console.

let fruits = ['Mango' , 'Strawberry' , 'Cherry' , 'Guava' , 'Watermelon' , 'Apple' , 'Banana' , 'Orange' , 'Grapes']  ;
console.log("Using For Loop Array is:");
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]); 
}

//  Task 11: Use the forEach  method to iterate over the array and log each element to the console.

let vegetables = [
    'Carrot',
    'Broccoli',
    'Spinach',
    'Cauliflower',
    'Tomato',
    'Cucumber',
    'Lettuce',
    'Pepper',
    'Onion',
    'Garlic'
];
console.log("\nUsing ForEach Array is:");

vegetables.forEach(element => {
    console.log(element);
});


console.log("------------------------------------------------------------");




// Activity 5: Multi-dimensional Arrays

console.log("Activity 5: Multi-dimensional Arrays");
console.log("\n");

//  Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
let matrix = [
    [1 , 2 , 3],
    [4 , 5 , 6],
    [7 , 8 , 9]
]; 
console.log(matrix);



//  Task 13: Access and log a specific element from the two-dimensional array.


console.log("\nTo Access specific element of array:",matrix[2][2]);


console.log("------------------------------------------------------------");
