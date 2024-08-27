

// Day 10: Event Handling

// Tasks/Activities:

// Activity 1: Basic Event Handling

console.log("Activity 1: Basic Event Handling\n");

// Task 1: Add a click event listener to a button that changes the text content of a paragraph.

const btn = document.getElementById('btn-task1');

const para = document.getElementById('p1-task1');

console.log(para);
btn.addEventListener('click' , ()=>{
  let display =   para.textContent = `JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else. `
  console.log(display);
});



// Task 2: Add a double-click event listener to an image that toggles its visibility.

const image = document.getElementById('myImage');

const btn_t2 = document.getElementById('btn-task2');
// Here I add the event listener for double click.

image.addEventListener('dblclick' , ()=>{
    if (image.style.display === 'none') {
        image.style.display = 'block';
    } else {
        image.style.display = 'none';
    } 
    });
 
// --------------------------------------------------------
btn_t2.addEventListener('click' , ()=>{
    if (image.style.display === 'none') {
        image.style.display = 'block';
    } else {
        image.style.display = 'none';
    } 
    });

console.log(image);
console.log("-------------------------------------------------");





// Activity 2: Mouse Events

console.log("Activity 2: Mouse Events\n");

// Task 3: Add a mouseover event listener to an element that changes its background color.

const h1_t1 = document.getElementById('h1-t1');

h1_t1.addEventListener('mouseover' ,  ()=>{
    h1_t1.style.backgroundColor = 'Blue';
    h1_t1.style.color = 'White';

});
console.log(h1_t1);


// Task 4: Add a mouseout event listener to an element that reset its background color.

h1_t1.addEventListener('mouseout' ,  ()=>{
    h1_t1.style.backgroundColor = 'Black';
    h1_t1.style.color = 'White';
});

console.log(h1_t1);
console.log("-------------------------------------------------");





// Activity 3: Keyboard Events

console.log("Activity 3: Keyboard Events\n");

// Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.

const input_t1 = document.getElementById('input-t1');

input_t1.addEventListener('keydown' , (event)=>{
    console.log("Key Pressed" , event.key);
});


// Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.

const input_t2 = document.getElementById('input-t2');

const display =  document.getElementById('display');

input_t2.addEventListener('keyup' , () => {

    display.textContent = input_t2.value;

    console.log(display);
});


console.log("-------------------------------------------------");



// Select the input element by its ID
const input = document.getElementById('myInput');

// Select the paragraph element by its ID
const displayText = document.getElementById('displayText');

// Add a keyup event listener to the input field
input.addEventListener('keyup', () => {
    // Display the current value of the input field in the paragraph
    displayText.textContent = input.value;
});



// Activity 4: Form Events

console.log("Activity 4: Form Events\n");

// Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.


// Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.


console.log("-------------------------------------------------");









// Activity 5: Event Delegation

console.log("Activity 5: Event Delegation\n");

// Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.


// Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.


console.log("-------------------------------------------------");















