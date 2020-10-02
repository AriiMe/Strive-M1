/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- You can ask for tutor's help
- The solution must be available for the tutors by the end of the day
- You can google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
*/

/* EXERCISE 1
Write the code to execute a SUM between the number 12 and 20
*/

let num1 = 12;
let num2 = 20;
const sum = num1 + num2;

/* EXERCISE 2
Create a variable named X containing the number 12
*/

const x = 12;

/* EXERCISE 3
Create a variable named name containing the string John Doe
*/

const name = "John Doe";

/* EXERCISE 4
Execute a DIFFERENCE between the number 12 and the variable X, which stores the value 12
*/

const difference = 12 - x;

/* EXERCISE 5
Create two variables: name1 and name 2. name1 is equal to john, name2 is equal to John.
Verify that name1 is different from name2. 
Verify then, that name1 and name2 are equals if both lowercase (without changing the value of name2)
*/

const name1 = "john";
const name2 = "John";

const areNamesEqual = name1.toLowerCase() === name2.toLowerCase();

/* EXERCISE 6
Create the variable X (value less than 10). Write the code to print the literal value of the given number (ex.: 1 => one, 5 => five)
*/

const X = 6;

if (X === 1) {
  console.log("one");
} else if (X === 2) {
  console.log("two");
} else if (X === 3) {
  console.log("three");
} else if (X === 4) {
  console.log("four");
} else if (X === 5) {
  console.log("five");
} else if (X === 6) {
  console.log("six");
} else if (X === 7) {
  console.log("seven");
} else if (X === 8) {
  console.log("eight");
} else if (X === 9) {
  console.log("nine");
} else if (X === 10) {
  console.log("ten");
}

// ALTERNATIVE 1

const numArr = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
];

if (X > 0 && X < 10) console.log(numArr[X]);

// ALTERNATIVE 2

switch (X) {
  case 1:
    console.log("one");
    break;
  case 2:
    console.log("two");
    break;
  case 3:
    console.log("three");
    break;
  case 4:
    console.log("four");
    break;
  case 5:
    console.log("five");
    break;
  case 6:
    console.log("six");
    break;
  case 7:
    console.log("seven");
    break;
  case 8:
    console.log("eight");
    break;
  case 9:
    console.log("nine");
    break;
  case 10:
    console.log("ten");
    break;
  default:
    console.log("Out of range. Input a valid number");
}

/* EXERCISE 7
Insert a value in a variable based on the resut of a ternary if
*/

const Y = X < 10 ? X + 2 : "not a valid number"; // The value of Y will be the result of a ternary operation given a condition ( X < 10 ) will return the value of ( X + 2 ) if evaluates TRUE or a string in case it evaluates FALSE

/* WHEN YOU ARE FINISHED
Send the code via Slack to the tutor! In the next days we'll also learn how to use GIT 
*/
