

// Day 8: ES+6 Features

// Tasks/Activities:

// Activity 1: Template Literals

console.log("Activity 1: Template Literals");
console.log("\n");


// Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.

let names = "Asfar Rehman";

let age = 23;

let personinfo = `Name: ${names}\nAge: ${age}`;

console.log(personinfo);


// Task 2: Create a multi-line string using template literals and log it to the console.

const multiLineString = `
This is a multi-line string.
It can span multiple lines
without the need for concatenation.
Template literals make this easy!
`;

console.log(multiLineString);


console.log("-------------------------------------------------");



// Activity 2: Destructuring

console.log("Activity 2: Destructuring");
console.log("\n");


// Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.

let array = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8  , 9 , 10];

console.log(array);

let [first ,  second] = array;

console.log("First Element is:",first,"\nSecond Element is:", second);


// Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.

let book = {
  title: "Struggle of Pakistan",
  author: "Ayesha Jalal",
  year: 2007,
};

const { title, author, year } = book;

console.log("Title of book:",title,"\nAuthor of book:",author);
console.log("-------------------------------------------------");





// Activity 3: Spread and Rest Operators

console.log("Activity 3: Spread and Rest Operators");
console.log("\n");


// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.

console.log("Before:\n",array);

let array2 = [-4 , -3 , -2 , -1 , 0 , ...array];

console.log("After\n",array2);




// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.


function sumusingrest(...numbers) {
    return numbers.reduce((sum , current) => sum + current , 0)
}
let result = sumusingrest(1 , 2 , 3, 4 , 5 );

console.log("\nThe total sum of numbers using rest operator:\n",result);
console.log("-------------------------------------------------");





// Activity 4: Default Parameters

console.log("Activity 4: Default Parameters");
console.log("\n");


// Task 7: Write a function that takes two parameters and returns their product, with the second parameter having default value of 1. Log the result of calling this function with and without the second parameter.

function pro(a , b=1) {
    return a * b ;
}

let product1 = pro(12 , 23);
let product2 = pro(12); // B have default value

console.log("Product of two numbers:",product1);
console.log("Product of two numbers with default value of b = 1 is",product2);

console.log("-------------------------------------------------");



// Activity 5: Enhanced Object Literals

console.log("Activity 5: Enhanced Object Literals");
console.log("\n");


// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
let productname = "Dollar Pencil";
let price = 200;
let quantity = 20;


let object = {productname , price , quantity};

console.log(object);


// // Define variables to be used as properties
// const name = 'Liaquat Memorial Library';
// const location = 'Karachi, Pakistan';
// const established = 1950;

// // Create an object using enhanced object literals
// const library = {
//     name,
//     location,
//     established,
//     // Define a method using the shorthand syntax
//     getDetails() {
//         return `Name: ${this.name}, Location: ${this.location}, Established: ${this.established}`;
//     },
//     // Define another method
//     addBook(title, author) {
//         if (!this.books) {
//             this.books = [];
//         }
//         this.books.push({ title, author });
//     },
//     // Define a method to get all books
//     getBooks() {
//         return this.books ? this.books : 'No books available';
//     }
// };

// // Add books to the library
// library.addBook('A History of Pakistan', 'K.K. Aziz');
// library.addBook('The Indus Saga and the Making of Pakistan', 'Aitzaz Ahsan');

// // Log the library object to the console
// console.log(library);

// // Log the details of the library
// console.log(library.getDetails());

// // Log all books in the library
// console.log(library.getBooks());



// Task 9: Create an object with computed property names based on variables and log the object to the console.

let prop1 = 'fullname';
let prop2 = 'fathername';
let prop3 = 'age';


let fname = "Afeef Hussain"

let fathername = "ASfar Hussain";

let hisage = 23;



let bio = {
    [prop1] : fname,
    [prop2] : fathername,
    [prop3] : hisage
}


console.log(bio);



console.log("-------------------------------------------------");