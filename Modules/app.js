

// Day 13: Modules

// Tasks.Activities:


// Activity 1: Creating and Exporting Modules

console.log("Activity 1: Creating and Exporting Modules");

// Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script.

function add(a , b ) {
    return a + b;
}

// console.log("The sum of numbers are:",add(10 , 27)); 

export {add};

// Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.

let person = {
name : "Asfar Rehman",
age : 32,
greetuser(){
    return `My Name is: ${this.name}\nMy Age is: ${this.age}`;
},
Birthday(){
    this.age += 1;
    return `Happy Birthday to me I am now ${this.age} years old`;
}
};

export {person};

console.log("-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");




// Activity 2: Named and Default Exports

console.log("Activity 2: Named and Default Exports");

// Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.

function hello(user) {
    return user;

}
console.log(hello('Subhan'));

function hello2(user2) {
    return user2;
}

console.log(hello2('Owais'));


function hello3(user3) {
    return user3;
}

console.log(hello('Asfar'));


function hello4(user4) {
    return user4;
}

export {hello ,hello2 , hello3 , hello4}


// Task 4: Create a module that exports a single function using default export. Import and use this function in another script.

function greet(name) {
    return `Hello, ${name}! Welcome to our website.`;
}

export {greet};

console.log("-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");





// Activity 3: Importing Entire Modules

console.log("Activity 3: Importing Entire Modules");

// Task 5: Create a module that exports multiple constants and functions. Import the entire modules as an object in another script and use its properties.

const K = 12.4;
const P = 13.6;

function sum(a , b) {
    return a + b;

}


function sub(a ,b ) {
    return a - b ;
}


function mul(a , b ) {
    return a * b;
}



function div(a , b ) {
    return a / b;
}


export {K , P , sum , sub , mul , div}


console.log("-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");




// Activity 4: Using Third-Party Modules

console.log("Activity 4: Using Third-Party Modules");


// Task 6: Install a third-party module (e.g., lodash) using npm. Import and use a function from this module in a script.

const _ = require('lodash');

const array = [1 ,2 , 3 ,4 ,5, 6, 7 ,8,9 ,10];

const chunkedarrry  = _.chunk(array ,  3);

console.log(chunkedarrry);


// Task 7: Install a third-party module (e.g., axois) using npm. Import and use this module to make a network request in a script.

const axios = require('axios');

const fetchData = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

fetchData();

console.log("-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");





// Activity 5: Module Bunding (Optional)

console.log("Activity 5: Module Bunding (Optional)");

// Task 8: Use a mobile bundler like Webpack or Parcel to bundle multiple JavaScript files into a single file. Write a script to demonstrate the bundling process.



console.log("-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");


