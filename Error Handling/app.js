


// Day # 12: Error Handling

// Tasks/Activities:

// Activity 1: Basic Error Handling with Try-Catch

console.log("Activity: Basic Error Handling with Try-Catch");

// Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.

function ErrorFunction() 
{
throw new Error ("This is an Intentional Error.");
}
    try {
        ErrorFunction();
    } 
    catch (error) {
        console.log("Error Occured:" , error.message);
    }
    




// Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error

function divide(neominator, denominator) {
    if (denominator === 0 ) {
        throw new Error("Divide by zero can't solve.");
    }
    return neominator / denominator;
}

try {
  let result  =  divide(10 , 0);
  console.log("The division of two numbers is:",result);

} 
catch (error) {
    console.log("Error Occured:", error.message);
}


console.log("----------------------------------------------------------------");




// Activity 2: Finally Block

console.log("Activity 2: Finally Block");

// Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.

function throwerror() {
    throw new Error("This is an intentional error");
}

try {
console.log("Try block:");    

throwerror();

console.log("This line will not be executed");
} 

catch (error) {
console.log("Error Occured:", error.message);    
}
finally {
    console.log("Entering in the final block");
}
console.log("Script: Execution continues....");

console.log("----------------------------------------------------------------");




// Activity 3: Custom Error Objects

console.log("Activity 3: Custom Error Objects");

// Task 4: Create a custom error class that extends that built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.

class CustomError extends Error {
    constructor(message){
        super(message);
        this.name = 'CustomError';
    }
}


function ThrowCustomError() {
    throw new Error("This is an custom error");
}

try {

    ThrowCustomError();
} 
catch (error) {
    console.log("Error Occured:",error.message);
}

finally {
    console.log("Entering in the final block");
}

console.log("Script: Execution continues...");


// Task 5: Write a function that validates user input (e.g.,checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.


class ValidationError extends Error{
    constructor(message){
        super(message);
        this.name = 'ValidationError';
    }
}

function ValidateInput(input) {
    if (input.trim === "") {
        throw new Error("Input can not be empty");
    }
    else {
        throw new Error("Valid input:", input);
    }
}

try {
    ValidateInput("Hello");

    ValidateInput("");
}

catch (error) {
    if (error instanceof ValidationError) {
        console.error("Validation Error: " , error.message);
    } else {
        console.error("Unexpected Error: " , error.message);
    }
}
finally{
    console.log("Input Validation completed.");
}

console.log("Script: Execution continues.....");



console.log("----------------------------------------------------------------");






// Activity 4: Error Handling in Promises

console.log("Activity 4: Error Handling in Promises");

// Task 6: Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console.

function randomPromise() {
    return new Promise((resolve , reject) =>{
        const isSuccess = Math.random() >= 0.5;

        setTimeout(() => {
            if (isSuccess) {
                resolve("Promise resolved successfully!");
            } 
            else{
                reject(new Error("Promise Rejected!"));
            }
        },1000);
    });
}

randomPromise()
.then(result =>{
    console.log(result);
}) 
.catch(error =>{
    console.log("Error Occured:",error.message);
})

// Task 7: Use try-catch within a async function to handle errors from a promise that randomly resolves or rejects, and log the error message.

function randomPromise() {
    return new Promise((resolve , reject) =>{
        const isSuccess = Math.random() >= 0.1;

        setTimeout(() => {
            if (isSuccess) {
                resolve("Async await Promise resolved successfully!");
            } 
            else{
                reject(new Error("Promise Rejected!"));
            }
        },2000);
    });
}

async function handlePromise() {
    try {
        let result = await randomPromise();
        console.log(result);
    } 
    catch (error) {
        console.log("Error Occured" , error.message);
        
    }
}
handlePromise();


console.log("----------------------------------------------------------------");





// Activity 5: Graceful Error Handling in Fetch

console.log("Activity 5: Graceful Error Handling in Fetch");

// Task 8: Use the fetch API to request data from an invalid URL and handle the error using .catch(). Log an appropriate error message to the console.

function fetchdata() {
    fetch("https://invalid-url.example.com/data")
    .then((response) =>{
        return response.json();
    })
    .then(data =>{
        console.log(data);
    })
    .catch(error =>{
        console.log("Error Occured",error.message);
    })
}

fetchdata();

// Task 9: Use the fetch API to request data from an invalid URL within an aync function and handle the error using try-catch. Log an appropriate error message.

function fetchdata() {
    fetch("https://invalid-url.example.com/data")
    .then((response) =>{
        return response.json();
    })
    .then(data =>{
        console.log(data);
    })
    .catch(error =>{
        console.log("Error Occured",error.message);
    })
}

async function fetchasync(){
    try {
        let result = await fetchdata();
        console.log(result);
    } 
    catch (error) {
        console.log("Error Occured:",error.message);
    }
}



console.log("----------------------------------------------------------------");