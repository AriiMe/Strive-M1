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
function area(l1, l2) {
  return l1 * l2;
}

/* EXERCISE 2
Write a function "crazySum" which receives two given integers. If the two values are same, then returns triple their sum.
*/

function crazySum(n1, n2) {
  if (n1 === n2) {
    return n1 * 3;
  } else {
    return n1 + n2;
  }
}

/* EXERCISE 3
Write a function "crazyDiff" that computes the 
absolute difference between a given number and 19. 
Returns triple their absolute difference if 
the specified
number is greater than 19.
*/

function crazyDiff(num) {
  if (num > 19) return Math.abs(num - 19) * 3;
  return Math.abs(num - 19);
}

/* EXERCISE 4
Write a function "boundary" which accept an integer N and returns true if N is within 20 and 100 (included) or equal to 400.
*/

function boundary(N) {
  if ((N > 20 && N < 100) || N === 400) {
    return true;
  } else {
    return false;
  }
}

/* EXERCISE 5
Write a function "strivify" which accepts a string S. Add to S "Strive" in front of a given string, if the given string begins with "Strive" then return the original string.
*/

function strivify(S) {
  // arr = S.split(" ");
  // if (arr[0]=="Strive"){
  //     return S;
  // } else {
  //     return false;
  // }

  if (S.includes("Strive") || S.includes("strive")) {
    return S;
  } else {
    return "Strive" + S;
  }

  //   if (S.startsWith("Strive") || S.startsWith("strive")) {
  //     return S;
  //   } else {
  //     return "Strive" + S;
  //   }
}

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

function check3and7(number) {
  if (number % 3 == 0) {
    return "It'/s a multiple of 3";
  } else if (number % 7 == 0) {
    return "It is a multiple of 7";
  } else {
    return "Not a multiple of 3 or 7";
  }
}

/* EXERCISE 7
Write a function "reverseString" to reverse programmatically a given string (es.: Strive => evirtS).
*/

function reverseString(text) {
  return text.split("").reverse().join("");
}

//   function reverseString(str) {
//     let newString = "";
//     for (let i = str.length -1; i >= 0; i--) {
//         newString = newString + str[i];
//     }
//     return newString;
// }

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as parameter
*/

function upperFirst(text) {
  const wordPieces = text.split(" "); //splitting the words on the spaces
  for (let i = 0; i < wordPieces.length; i++) {
    // for each word of the sentence

    const firstLetter = wordPieces[i].charAt(0).toUpperCase(); // makes the first letter uppercase
    wordPieces[i] = firstLetter + wordPieces[i].substr(1); //repaces the word with it's first letter capitalized and the rest of the word
  }
  return wordPieces.join(" "); //rejoins the words together
}

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

function cutString(myStr) {
  const newStrWord = myStr.substr(1).slice(0, -1);
  return newStrWord;
}

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10
*/

function giveMeRandom(n) {
  let arryNumbers = [];
  for (let i = 0; i < n; i++) {
    arryNumbers.push(Math.floor(Math.random() * 11));
  }

  return arryNumbers;
}

console.log(giveMeRandom(10));

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit with your tutor.
*/
