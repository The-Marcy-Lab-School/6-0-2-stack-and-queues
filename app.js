// run this in the browser to see the call stack

// Add two numbers 
const add = (a, b) => a + b;

// Subtract two numbers
const subtract = (a, b) => a - b; 

// Multiply two numbers
const multiply = (a, b) => a * b;

// Divide two numbers 
const divide = (a, b) => a / b;

// Check if number is even
const isEven = num => num % 2 === 0;

// Capitalize a string
const capitalize = str => str[0].toUpperCase() + str.slice(1); 

// Reverse a string
const reverse = str => str.split('').reverse().join('');

// Get max value in array
const max = arr => Math.max(...arr);

// Get min value in array
const min = arr => Math.min(...arr);

// Return a random number 
const random = () => Math.random();

// Calculate factorial of n
const factorial = n => {
  if (n === 0) {
    return 1;
  } 
  return n * factorial(n - 1);
}
console.log('test');
debugger;

// Add 
add(1, 2); // 3

// Subtract
subtract(5, 3); // 2

// Multiply  
multiply(3, 4); // 12

// Divide
divide(10, 2); // 5

// isEven
isEven(4); // true

// Capitalize
capitalize('hello'); // 'Hello'

// Reverse
reverse('abc'); // 'cba'

// Max
max([1, 2, 3]); // 3 

// Min 
min([1, 2, 3]); // 1

// Random
random(); // 0.40121212042219434

factorial(5);
// stack overflow;
factorial(1000000);

const newArray = new Array(5);

const newArray2 = new Array(10);