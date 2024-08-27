

// Day 9: DOM Manipulation

// Tasks/Activities:

// Activity 1: Selecting and Manipulating Elements

console.log("Activity 1: Selecting and Manipulating Elements");
console.log("\n");



// Task 1: Select an HTML element by its ID and change its text content.

let act1p1 = document.getElementById("act1-task1");

display = act1p1.innerHTML = `Content changed through JavaScript.`;

console.log(display);


// Task 2: Select an HTML element by its class and change its text background color.


let act1h2  = document.querySelector(".act1-task2");

display2 = act1h2.innerHTML = `<h2 style="background-color: brown;"> I Love JavaScript </h2>`;

console.log(display2);

console.log("-------------------------------------------------------");





// Activity 2: Creating and Appending Elements

console.log("Activity 2: Creating and Appending Elements");

console.log("\n");



// Task 3: Create a new div element with some text content and append it to the body.

let newdiv = document.createElement('div');

newdiv.textContent = `Hello! I am new div element`;

document.body.appendChild(newdiv);

console.log(newdiv);


// Task 4: Create a new li element and add it to an existing ul list.
let ul = document.querySelector('.UL');

let li3 = document.createElement('li');

li3.textContent = `Data Anaylysis`;

ul.appendChild(li3);

console.log("See it on browser",ul);
console.log("-------------------------------------------------------");





// Activity 3: Removing Elements

console.log("Activity 3: Removing Elements");

console.log("\n");



// Task 5: Select an HTML element and remove it from the DOM

let todelete = document.querySelector(".act3-task1");

deleted =  todelete.remove();

console.log(deleted);


// Task 6: Remove the last child of a specific HTML element.

let Container = document.querySelector('#container');

let removed = Container.removeChild(Container.lastElementChild);

console.log(removed);

console.log("-------------------------------------------------------");




// Activity 4: Modifying Attributes

console.log("Activity 4: Modifying Attributes");

console.log("\n");


// Task 7: Select an HTML element and change one of its attributes (e.g., src of an image tag).

let image = document.querySelector(".act4-task1");

image.src = "https://images.stockcake.com/public/e/e/2/ee2100e7-9bd7-4de9-b881-65de3f5dde3f_large/lakeside-serene-moment-stockcake.jpg";



// Task 8: Add and remove a CSS class to/from an HTML element.

function addClass() {
    
let paragraph = document.getElementById('myParagraph');

paragraph.classList.add('highlight');

}

function removeClass() {
    
    let paragraph = document.getElementById('myParagraph');
    
    paragraph.classList.remove('highlight');

    }

    console.log("For result :see browser");

console.log("-------------------------------------------------------");




// Activity 5: Event Handling

console.log("Activity 5: Event Handling");

console.log("\n");


// Task 9: Add a click event listener to a button that changes the text content of a paragraph.

let paragraph2 = document.getElementById('act5-task1');

let button = document.querySelector(".paragraph");
button.addEventListener('click' , () => {
    paragraph2.innerHTML = `<p  style="background-color: grey; color: #fff; font-size: large;" >There is growing concern about the potential risks associated with vaccinations, which some believe outweigh the benefits. Critics argue that vaccines can cause serious side effects, including allergic reactions and long-term health issues, and that pharmaceutical companies often prioritize profits over safety. They also stress the importance of personal freedom and bodily autonomy, opposing government mandates that require vaccinations. Many advocate for natural immunity and alternative health practices as safer options. It's crucial to consider these perspectives and conduct thorough research before making informed decisions about vaccinations, ensuring that individual rights and well-being are respected.

</p>`
})

// Select the button element by its ID
const button2 = document.getElementById('myButton');

// Select the paragraph element by its ID
const paragraph = document.getElementById('myParagraph');

// Add a click event listener to the button
button.addEventListener('click', () => {
    // Change the text content of the paragraph
    paragraph.textContent = 'The text has been changed!';
});




// Task 10: Add a mouseover event listener to an element that changes its border color.


let heading = document.querySelector('.heading');

let btn = document.getElementById('change')


btn.addEventListener('mouseover' ,  () =>{
    heading.innerHTML = `<h2 style="border: 4px inset darkblue; text-align: center; background-color: lightseagreen; color: #fff;"> Confidence is the key to Success<h2/>`;
});


btn.addEventListener('mouseout' ,  ()=> {
    heading.innerHTML = `<h2>
     Confidence is the key to Success
    </h2>`
});


// Select the div element by its ID
const myDiv = document.getElementById('myDiv');

// Add a mouseover event listener to the div
myDiv.addEventListener('mouseover', () => {
    myDiv.style.borderColor = 'red';
});

// Add a mouseout event listener to reset the border color when the mouse leaves the div
myDiv.addEventListener('mouseout', () => {
    myDiv.style.borderColor = 'black';
});




console.log("-------------------------------------------------------");


