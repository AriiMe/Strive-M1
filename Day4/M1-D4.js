/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- The solution must be pushed to the repository and be available for the tutors by the end of the day
- You can ask for tutor's help
- You can google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculate the area of the rectangle.
*/
const rectangle = function (l1, l2) { 
	
	const result = l1 * l2;
	
	return result;
	
};
	console.log("The area of rectangle is: " + rectangle(12, 6));
	
    // alternative
    const rectangle0 = function (l3,l4) { 
        return l3 * l4;
    };

    console.log(rectangle0(4, 6));

/* EXERCISE 2
Write a function "crazySum" which receives two given integers. If the two values are same, then returns triple their sum.
*/

function crazySum (x1, y1) {
    if (x1 === y1) {
      return 3 * (x1 + y1);
      } 
     else
     {
      return "not equal";
     }
   }
  console.log("crazySum2:", crazySum(5, 8));
  console.log("crazySum:", crazySum(5, 5));



/* EXERCISE 3
Write a function "crazyDiff" that computes the 
absolute difference between a given number and 19. 
Returns triple their absolute difference if 
the specified
number is greater than 19.
*/
let numba = 21;

function crazyDiff (numba) {
    if (numba <= 19) {
      return (19 - numba);
      }
    else
      {
       return (numba - 19) * 3;
      }
  }
console.log(crazyDiff(numba));

/* alternetive 
const crazyDiff = (x) => {
  let difference = x - 19;
  return difference > 0 ? difference * 3 : "Your number is equal or < 19";
}; 
*/


/* EXERCISE 4
Write a function "boundary" which accept an integer N and returns true if N is within 20 and 100 (included) or equal to 400.
*/

/* WRITE YOUR CODE HERE */

function boundary(int) {
    return (20 < int && int <= 100) || int === 400 ? true : false;
}
  
  console.log(boundary(500));

/* EXERCISE 5
Write a function "strivify" which accepts a string S. Add to S "Strive" in front of a given string, if the given string begins with "Strive" then return the original string.
*/

/* WRITE YOUR CODE HERE */

function strivify(S) {

    const result = `Strive${S}`;
    if (S.startsWith("Strive")) {
        return S

    } else {
        return result
    }

}
console.log(strivify("S"));

/*
const strivify1 = (S0) => {
    let newString = (`Strive${S0}`);
  return S0.startsWith("Strive") ? S0 : newString;
};

console.log(strivify1("strive"));
*/

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/



/* WRITE YOUR CODE HERE */


const check3and7 = function (num) {
    if (num % 7 === 0 || num % 3 === 0) {
        console.log("it's a multiple of 3 or 7")
    } else {
        console.log("it's not a multiple of 3 or 7")
    }
}



/*
console.log(check3and7(22))
const check3and7 = (x) => {
    if (x % 3 === 0) {
      return "it's a multiple of 3";
    } else if (x % 7 === 0) {
      return "it's a multiple of 7";
    } else {
      return "it's neither a multiple of 3 or 7";
    }
  };
  console.log(check3and7(14));
  console.log(check3and7(9));
  console.log(check3and7(10));

*/


/* EXERCISE 7
Write a function "reverseString" to reverse programmatically a given string (es.: Strive => evirtS).
*/

/* WRITE YOUR CODE HERE */

const reverseString = (s) => {
    return s.split("").reverse().join("").toLowerCase();
  };
  console.log(reverseString("YEEET"));

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as parameter
*/

/* WRITE YOUR CODE HERE */

const upperFirst = (str) => {

    //I create an array with all string words
    let splitStr = str.toLowerCase().split(" ");
    //for each word in the array, I capitalized the first letter
    for (i = 0; i < splitStr.length; i++) {
      splitStr[i] =
        splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    //i re-join the array to create a string
    return splitStr.join(" ");
  };
  
  console.log(upperFirst("i don't know if this works"));
  console.log(upperFirst("seems it does"));

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

/* WRITE YOUR CODE HERE */

const cutString = (s) => {
    return s.slice(1, -1); //-1 is lengh-1
  };
  console.log(cutString("lets see if this one is correct"));

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10
*/

/* WRITE YOUR CODE HERE */
/*
function giveMeRandom(min, max) {
    return Math.random() * (max - min) + min;
}


function giveMeRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
    console.log(giveMeRandom0(0, 10));
*/
    const giveMeRandom0 = (n) => {
        let arrayN = [];
        for (i = 0; i <= n; i++) {
          arrayN.push(Math.floor(Math.random() * 10 + 0));
        }
        return arrayN;
      };
      console.log(giveMeRandom0(6));
/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit with your tutor.
*/
