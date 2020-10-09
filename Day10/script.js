const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
let scoreCounter = (document = document.getElementById("score"));

/*
let score = 0;
function drawScore() {
  ctx.font = "12px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText("Score: " + score, 8, 20);
}
*/
let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function scoreCounting() {
  const scoreArray = document.createElement([]);
  if (answer == correct) {
    scoreCounter++;
  } else {
    startButton.classList.remove("hide");
  }
}

function startGame() {
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "Restart";
    startButton.classList.remove("hide");
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

const questions = [
  /*
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",

    question: "What does CPU stand for?",
    answers: [
      { text: "Central Processing Unit", correct: true },

      { text: "Central Process Unit", correct: false },
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",

    question: "What does your mom say ?",
    answers: [
      { text: "fuck you", correct: true },

      { text: "no u", correct: false },
    ],
  },
];
*/

  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    answers: [
      { text: "Central Processing Unit", correct: true },
      { text: "Central Process Unit", correct: false },
      { text: "Computer Personal Unit", correct: false },
      { text: "Central Processor Unit", correct: false },
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",

    answers: [
      { text: "Static", correct: false },
      { text: "Final", correct: true },
      { text: "Private", correct: false },
      { text: "Public", correct: false },
    ],
    //correct_answer:
    //incorrect_answers: [ " ],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    answers: [
      { text: "False", correct: true },
      { text: "True", correct: false },
    ],
    //correct_answer: ,
    //incorrect_answers: [],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
    ],
    //correct_answer: ,
    //incorrect_answers: [],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    answers: [
      { text: ".png", correct: false },
      { text: ".jpeg", correct: false },
      { text: ".svg", correct: true },
      { text: ".gif", correct: false },
    ],
    //correct_answer:
    //incorrect_answers: [  ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    answers: [
      { text: "Counter Strike: Source", correct: true },
      { text: "Corrective Style Sheet", correct: false },
      { text: "Computer Style Sheet", correct: false },
      { text: "Cascading Style Sheet", correct: true },
    ],
    //correct_answer:
    //incorrect_answers: [
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    answers: [
      { text: "Ice Cream Sandwich", correct: false },
      { text: "Nougat", correct: true },
      { text: "Jelly Bean", correct: false },
      { text: "Marshmallow", correct: false },
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    answers: [
      { text: "120", correct: false },
      { text: "160", correct: false },
      { text: "100", correct: false },
      { text: "140", correct: true },
    ],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    answers: [
      { text: "Python", correct: false },
      { text: "C", correct: false },
      { text: "Java", correct: true },
      { text: "Jakarta", correct: false },
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "is ari dumb?",
    answers: [
      { text: "Yes", correct: true },
      { text: "yes", correct: true },
      { text: "HELL YEAH", correct: true },
      { text: "of course", correct: true },
    ],
  },
];

window.onload = function () {
  //IF YOU ARE DISPLAYING ALL THE QUESTIONS TOGETHER:
  //HINT: for each question, create a container with the "question"
  //create a radio button https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio with, as option the both the correct answer and the incorrect answers
  //when EVERY question has an answer (google for how to get a value from a radio button with JS)
  //IF YOU ARE DISPLAYING ONE QUESTION AT A TIME
  //Display first question with a title + radio button
  //when the user select the answer, pick the next question and remove this from the page after added in a varible the users' choice.
};

//HOW TO calculate the result
//You can do it in 2 ways:
//If you are presenting all questions together, just take all the radio buttons and check if the selected answer === correct_answer
//If you are presenting one question at a time, just add one point or not to the user score if the selected answer === correct_answer
