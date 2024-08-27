

// Day 7: Objects

// Tasks/Activities:

// Activity 1: Object Creation and Access

console.log("Activity 1: Object Creation and Access");
console.log("\n");

// Task 1: Create an object representing a book with properties like title, author and year, and log the object to the console.


let obj1 = {
   title : "Smarter Way to learn JavaScript",
   author : "Mark Myers",
   year : "copyright © 2013 by Mark Myers"
}

console.log(obj1);

// Task 2: Access and log the title and author properties of the book object.

console.log(obj1.title + "\n" + obj1.author);

console.log("------------------------------------------------");



// Activity 2: Object Methods

console.log("Activity 2: Object Methods");
console.log("\n");


// Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.


let JSbook = {

    title : "Effective JavaScript" , 

    author : "David Herman" ,

    details : function() {
        return `Title: ${this.title}\nAuthor: ${this.author}`;
    }
};

console.log(JSbook.details());

// Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.

let Book2 = {
    title : "C++ Primer (5th Edition)" , 

    author : "S. B. Lippman" ,


    publish: function (year) {
        return `Title: ${this.title}\nAuthor: ${this.author}\nPublished: ${year}`
    }
}

console.log(Book2.publish(1985));

console.log("------------------------------------------------");




// Activity 3: Nested Object 

console.log("Activity 3: Nested Object ");
console.log("\n");

// Task 5: Create a nested object representing a library with properties like name and books (an array of books objects), and log the library object to the console.

let library = {
     name : "Liaquat Memorial Library" , 
     book1 : [{
        title : "A History of Pakistan" , 
        
        author : "K.K. Aziz" , 

        details :function(year = 1986) {
            return `Title: ${this.title}\nAuthor: ${this.author}\nYear:${year}`
        }
      }],
    book2:[{
        title : "The Murder of History" , 
        
        author : "K.K. Aziz" , 

        details :function(year = 1989) {
            return `Title: ${this.title}\nAuthor: ${this.author}\nYear:${year}`
        }
    }],
book3 : [{
    title: 'The Indus Saga and the Making of Pakistan',
    author: 'Aitzaz Ahsan',
    details :function(year = 2006) {
        return `Title: ${this.title}\nAuthor: ${this.author}\nYear:${year}`
    }
}],
book4 : [{
    title: 'Pakistan: A Personal History',
    author: 'Imran Khan',
    details :function(year = 2004) {
        return `Title: ${this.title}\nAuthor: ${this.author}\nYear:${year}`
    }
}],
book5 : [{
    title: 'The Struggle for Pakistan',
    author: 'Ayesha Jalal',
    details :function(year = 2001) {
        return `Title: ${this.title}\nAuthor: ${this.author}\nYear:${year}`
    }
}],

book6 : [{
    title: 'The Idea of Pakistan',
    author: 'Stephen P. Cohen',
    details :function(year = 1999) {
        return `Title: ${this.title}\nAuthor: ${this.author}\nYear:${year}`
    }
}]
}
 
console.log(library);


// library.details.forEach(element => {
    
// });

// Task 6: Access and log the name of the library and the titles of all the books in the library.

console.log(library.book3);


console.log("------------------------------------------------");




// Activity 4: The this Keyword 

console.log("Activity 4: The this Keyword  ");
console.log("\n");

// Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.

let Books = {
    title : "The Post Office" ,
    year : 1989 ,
    author : "Rabindra Nath Tagore",

    details : function() {
        return `Title: ${this.title}\nAuthor: ${this.author}\nYear:${this.year}`
    }
}
console.log(Books);

console.log("------------------------------------------------");




// Activity 5: Object Iteration

console.log("Activity 5: Object Iteration");
console.log("\n");

// Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.

for (const i in obj1) {
    if (Object.hasOwnProperty.call(obj1, i)) {
        const element = obj1[i];
        console.log(element);
    }
}

// Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.
 

let value = Object.values(obj1);
console.log("Using Object.values",value);


let keys = Object.keys(obj1);

console.log("Using Object.keys",keys);



// Creates an object from an existing object
let create = Object.create(obj1);

// Returns an array of the key/value pairs of an object
let entries = Object.entries(obj1);

// Creates an object from a list of keys/values
let fromEntries = Object.fromEntries(obj1);

// Groups object elements according to a function
let grpby = Object.groupBy(Books, details());







console.log("------------------------------------------------");



