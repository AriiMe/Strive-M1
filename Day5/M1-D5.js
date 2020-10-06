/*
    ASSIGNMENT RULES
    - All the answers must be in JavaScript
    - The solution must be pushed to the repository and be available for the tutors by the end of the day
    - You can ask for tutor's help
    - You can google / use StackOverflow BUT we suggest you to use just the material provided
    - You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
    - Complete as many exercise that you can
    - Publish them into your own GitHub account before 17.00 (Berlin Time)
*/

//JS Basics

/* Ex.A
   Create a variable test that contains a string
*/
let test = "Sup";

/* Ex.B
    Create a variable sum that contains the result of the sum between 10 and 20 
*/
const num1 = 10;
const num2 = 20;

const sum = num1 + num2;

let sum0 = 10 + 20;

/* Ex.C 
    Create a variable random that contains a random number between 0 and 20 (should be randomly created at each execution)
*/

let giveMeRandom = Math.floor(Math.random() * 20 + 0);
console.log("Your random number is :", giveMeRandom);
let randomVar = Math.floor(Math.random() * 20 + 1);
/* Ex.D
    Create a variable Me containing and object with the current information: Name = Your Name, Surname = Your Surname, Age = Your Age
*/
let me = {
  name: "Bob",
  surname: "Ross",
  age: "69",
};
console.log(me);
/* Ex.E 
    Programmatically remove the Age from the previously create object Me
*/

delete me.age;
console.log(me);
// or alt delete me["age"];

/* Ex.F 
   Programmatically add to the object Me an array "skills" that contains the programming languages that you know
*/

me.skills = ["C#, C, Blueprint"];

console.log(me);

/* Ex.G 
Programmatically remove the last skill from the array "skills" inside of the "me" object
*/

me.skills.pop();
console.log(me);

// JS Functions
/* Ex.1
    Write the function Dice that randomize an integer number between 1 and 6
*/

/*
const dice = () => {
  return Math.florr(Math.random() * 6 + 1);
};
*/

const Dice = function () {
  return Math.floor(Math.random() * 6 + 1);
};

console.log("Your Dice rolled: ", Dice());

/* Ex.2 
    Write the function WhoIsBigger that receives 2 numbers and returns the bigger of the 2
*/

let a = 5;
let b = 9;

function whoIsBigger() {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

console.log(whoIsBigger(a, b));

/* Ex.3
    Write the function SplitMe that receives a String and returns an array with every word in that string
    Ex. SplitMe("I love coding") => returns [ "I","Love","Coding"]
*/
let string = "I Love Coding";

function SplitMe() {
  return string.split(" ");
}
console.log(SplitMe(string));

/* Ex.4
    Write the function DeleteOne that receives a string and a boolean. If the boolean is true, should return the string without the first letter, otherwise should remove the last one
*/

let dl1 = "ThisIsRandom";

function DeleteOne() {
  if (dl1 === true) {
    return dl1.slice(1, -1);
  } else {
    return dl1.substring(1);
  }
}

console.log(DeleteOne(dl1));

/* Ex.5
   Write the function OnlyLetters that receives a string, removes all the numbers and returns it.
   Ex.: OnlyLetters("I love 123 whatever")  => returns "I love whatever"
*/

let nstr = "i like 123 whatever";
let anstr = [];
let array = nstr.split(" ");

function OnlyLetters3() {
  for (let i = 0; i < array.length; i++) {
    if (!array[i].match(/^[0-9]+$/)) {
      anstr.push(array[i]);
    }
  }

  return anstr;
}

console.log(OnlyLetters3(anstr));

/* Ex.6 
   Write the function IsThisAnEmail that receives a string and returns true if the string is a valid email.
*/

const IsThisAnEmail = (email) => {
  let validation = /\S+@\S+\.\S+/;

  return validation.test(email);
};

console.log("This is an e-Mail: ", IsThisAnEmail("epicari66@ymail.com"));
console.log("This is not an e-Mail: ", IsThisAnEmail("epicari66"));
/* Ex.7
   Write the function WhatDayIsIt that should return the day of the week
*/

const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const WhatDayIsIt = () => {
  const now = new Date();
  return daysOfWeek[now.getDay() - 1];
};

console.log(WhatDayIsIt());

/* Ex.8
    Write the function RollTheDices that receives a numeric input and returns an object that contains both the sum of the value of the dices and the dices itself
    This function should use the Dice function defined in Ex1
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [ 3, 3, 4]
    }
*/

function RollTheDices() {
  var result = [];
  for (var i = 0; i < 3; i++) {
    result.push(Math.floor(Math.random() * 6 + 1));
  }
  return result;
}
console.log("The three dice's you rolled are: ", RollTheDices());
/* Ex.9
   Write the function HowManyDays that receives a Date and return the number of days that has passed since that day.
*/

const HowManyDays = (date) => {
  //I'm formatting the dates to make them equals. .getTime method return the date in milliseconds
  const today = new Date().getTime();
  const dateTime = new Date(date).getTime();

  //after formatting the dates in milliseconds, I can make a difference between those two and I can traslate the difference in # of days. ParseInt is to round the number and get an integer.
  return parseInt((today - dateTime) / (24 * 3600 * 1000));
};
console.log(HowManyDays(05 / 05 / 2019), "Days passed");

/* Ex.10
   Write the function IsTodayMyBDay that returns true if it's your birthday, false otherwise
*/
/*
Age = function () {
  var e, o;
  return (
    (renderAgeLoop = function () {
      setInterval(renderAge, 100);
    }),
    (renderAge = function () {
      var n = 762498000000,
        r = new Date(),
        t = r - n,
        a = t / 31556900000;
      (e = $("#major")), (o = $("#minor"));
      var i = a.toFixed(9).toString().split(".");

      var d = new Date();
      console.log(d.toUTCString());

      e.text(i[0]), o.text(i[1]);
    }),
    {
      renderAgeLoop: renderAgeLoop,
    }
  );
};
*/
const IsTodayMyBDay = (bday) => {
  return (
    new Date().getMonth() === new Date(bday).getMonth() &&
    new Date().getDate() === new Date(bday).getDate()
  );
};
console.log(IsTodayMyBDay());
// JS Arrays // Objs
// NOTE: movies array is defined at the end of the file

/* Ex.11
   Write the function DeleteProp that receives an object and a string, and returns the object after deleting the property with that given name
*/
const DeleteProp = (prop, delet) => {
  delete prop[delet];
  return prop;
};

/* Ex.12 
    Write the function OlderMovie that finds the older movie in the array
*/
const OlderMovie = () => {
  const moviesYear = [];
  movies.forEach((movie) => {
    moviesYear.push(parseInt(movie.Year));
  });
  return movies.filter(
    (movie) => movie.Year == Math.min.apply(Math, moviesYear)
  );
};
/* Ex.13
    Write the function CountMovies that returns the number of movies into the array
*/
const CountMovies = () => movies.length;

/* Ex.14
    Write the function OnlyTitles that creates an array with only the titles of the movies
*/
const OnlyTitles = () => {
  let movieTitles = [];
  movies.forEach((movie) => movieTitles.push(movie.Title));
  return movieTitles;
};
/* Ex.15
   Write the function OnlyThisMillennium that returns only the movies produced in this millennium
*/
const OnlyThisMillennium = () => movies.filter((movie) => movie.Year >= 2000);
/* Ex.16 
    Write the function GetMovieById that receives an ID and returns the movie with the given ID
*/
const GetMovieById = (id) => movies.filter((movie) => movie.imdbID === id);
/* Ex.17
    Write the function SumYears that returns the sum of the years the movie has been produced
*/
const SumYears = () => {
  const movieYears = [];
  movies.forEach((movie) => {
    movieYears.push(parseInt(movie.Year));
  });

  return movieYears.reduce((one, two) => one + two);
};

/* Ex.18
    Write the function SearchMovie that receives a string and returns all the movies with that string in the title
*/
function SearchMovie(s) {
  return movies.filter((movie) => movie.Title.includes(s));
}
/* Ex.19
    Write the function SearchAndDivide that receives a string and returns an object with an array "match" with all the movies that contains the title and another array "nonMatch" with the other movies
*/
const SearchAndDivide = (s) => {
  let matchArray = movies.filter((movie) => movie.Title.includes(s));
  let nonMatchArray = movies.filter((movie) => !movie.Title.includes(s));

  return {
    matchArray,
    nonMatchArray,
  };
};
/* Ex.20
   Write the function DeleteX that receives a number and returns an array without the element in that position
*/
const arra = [0, 1, 2, 3, 4, 5];

const DeleteX = (x) => {
  arra.splice(x, 1);
  return arra;
};
console.log(DeleteX());

//removes random number from array
function popRandom(arra1) {
  let i = (Math.random() * arra1.length) | 0;
  return arra1.splice(i, 1)[0];
}

let arra1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(popRandom(arra1));
console.log(arra1);

// JS Advanced

/* Ex.21
  Create a function HalfTree that recives the height creates an "*" half tree with that height
  Example:
  HalfTree(3)
  *
  **
  ***
*/
function halfTree(h) {
  for (var i = 0; i <= h; i++) {
    var star = "";
    for (var k = 0; k <= 1; k++) {
      star += "  ";
    }
    for (var j = 0; j <= i; j++) {
      star += "*";
    }
    console.log(star);
  }
}

halfTree(2);

function halfTree0(num) {
  for (let i = 0; i < num; i++) {
    console.log("*".repeat(i + 1));
  }
}
halfTree(3);
/* Ex.22 
  Create a function Tree that receives the height and creates an "*" tree with that height
  Example: 
  Tree(3)
    *  
   *** 
  *****
*/
function Tree(h) {
  for (var i = 0; i <= h; i++) {
    var star = "";
    for (var k = 1; k <= h - i; k++) {
      star += " ";
    }
    for (var j = 0; j <= i; j++) {
      star += " *";
    }
    console.log(star);
  }
}

Tree(2);

function Tree0(h0) {
  let space = " ";
  let char = "*";

  for (let i = 1; i < n + 1; i++) {
    console.log(space.repeat(n - i) + char.repeat(i * 2 - 1));
  }
}
Tree0(3);
/* Ex.23
  Create a function IsItPrime that receives a number and return true if the number is a prime number
*/
function IsItPrime(n) {
  if (n === 1) {
    return false;
  } else if (n === 2) {
    return true;
  } else {
    for (var x = 2; x < n; x++) {
      if (n % x === 0) {
        return false;
      }
    }
    return true;
  }
}

console.log(IsItPrime(2));

/* Movies array is an example array, used for the exs. Don't change it :)  */

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];
