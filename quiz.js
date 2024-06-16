//                        IMPORTANT
//work in progreesss
//You can ONLY edit code from QUIZ DATA ARRAY not ANYTHING else!
//While adding QUIZ data follow the format!
// Made by criston
const quizData = [
  {
    question: "What would be the result of 3+2+'7'?",
    options: ["12", "7", "327", "57"],
    reason: "Here, 3 and 2 behave like an integer, and “7” behaves like a string. So 3 plus 2 will be 5. Then the output will be 5+”7″ = 57.",
    answer: "57"
  },
  {
    question: "Which company developed JavaScript?",
    options: ["NetScape", "Google", "Apple", "Meta(Facebook)"],
    reason: "Netscape developed JavaScript and was created by Brenden Eich in the year of 1995.",
    answer: "NetScape"
  },
  {
    question: "What will be the output of console.log(typeof NaN)?",
    options: ["'number'", "'object'", "'undefined'", "'NaN'"],
    reason: "In JavaScript, NaN is considered a number type. Therefore, typeof NaN will return 'number'.",
    answer: "'number'"
  },
  {
    question: "Which built-in method combines the text of two strings and returns a new string?",
    options: ["append()", "concat()", "attach()", "combine()"],
    reason: "The concat() method combines the text of two strings and returns a new string.",
    answer: "concat()"
  },
  {
    question: "What does the '===' operator do in JavaScript?",
    options: ["Compares only values", "Compares only types", "Compares both values and types", "None of the above"],
    reason: "The '===' operator compares both values and types in JavaScript.",
    answer: "Compares both values and types"
  },
  {
    question: "What is the output of console.log(0.1 + 0.2 === 0.3)?",
    options: ["true", "false", "undefined", "NaN"],
    reason: "Due to floating-point precision errors in JavaScript, 0.1 + 0.2 does not exactly equal 0.3, so the output is false.",
    answer: "false"
  },
  {
    question: "How do you create a function in JavaScript?",
    options: ["function = myFunction()", "function myFunction()", "function:myFunction()", "function => myFunction()"],
    reason: "The correct syntax to create a function in JavaScript is function myFunction().",
    answer: "function myFunction()"
  },
  {
    question: "Which of the following is not a reserved word in JavaScript?",
    options: ["interface", "throws", "program", "short"],
    reason: "The word 'program' is not a reserved word in JavaScript.",
    answer: "program"
  },
  {
    question: "What will be the output of the following code? console.log([] + [])",
    options: ["'' (empty string)", "[]", "undefined", "Error"],
    reason: "In JavaScript, adding two arrays results in an empty string because arrays are coerced to strings and concatenated.",
    answer: "'' (empty string)"
  },
  {
    question: "Which method is used to convert JSON data to a JavaScript object?",
    options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.objectify()"],
    reason: "The JSON.parse() method is used to convert JSON data into a JavaScript object.",
    answer: "JSON.parse()"
  }
];




// !! WARNING !! 
// NO MAN ZONE (CODE OWNED BY CRISTON)
//below not to altered or to add anything for now!
const questionDiv = document.getElementById("questions");
const optionsDiv = document.getElementById("options");
const reasonDiv = document.getElementById("reason");
const nextButton = document.getElementById("next");

let currentQuestion = 0;
let score = 0;

function makeQuestion() {
  const question = quizData[currentQuestion];
  questionDiv.innerText = question.question;

  optionsDiv.innerHTML = "";
  question.options.forEach((option) => {
    const button = document.createElement("button");
    button.innerText = option;
    optionsDiv.appendChild(button);
    button.addEventListener("click", selectAnswer);
  });
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const answer = quizData[currentQuestion].answer;

  if (selectedButton.innerText === answer) {
    score++;
    nextQuestion("correct");
  } else {
    reasonDiv.innerHTML = `Wrong! ${quizData[currentQuestion].reason}`;
    nextQuestion("wrong");
  }

  function nextQuestion(ans) {
    if (ans === "wrong") {
      console.log(ans);
      nextButton.parentElement.style.display = "block";

      const buttons = Array.from(optionsDiv.children);
      console.log(buttons);

      buttons.forEach((button) => {
        button.setAttribute("disabled", true);
      });

      nextButton.removeEventListener("click", handleNextButtonClick);
      nextButton.addEventListener("click", handleNextButtonClick);
    } else {
      currentQuestion++;
      if (currentQuestion < quizData.length) {
        makeQuestion();
      } else {
        showResult();
      }
    }
  }
}

function handleNextButtonClick() {
  nextButton.parentElement.style.display = "none";
  reasonDiv.innerHTML = "";
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    enableButtons();
    makeQuestion();
  } else {
    showResult();
  }
}

const redoButton = document.getElementById("redo");
const resultDiv = document.getElementById("resultDiv");
const quize = document.getElementById("quize");

function showResult() {
  redoButton.removeAttribute("hidden");
  resultDiv.style.display = "block";
  quize.style.display = "none";
  resultDiv.innerHTML = `
    <h2>You have completed the quiz</h1>
    <p>Your score is ${score}/${quizData.length}</p>
  `;
  redoButton.parentElement.style.display = "block";

  redoButton.addEventListener("click", restart);
}

function enableButtons() {
  const buttons = Array.from(optionsDiv.children);
  buttons.forEach((button) => {
    button.removeAttribute("disabled");
  });
}
console.log(currentQuestion);

function restart() {
  currentQuestion = 0;
  score = 0;
  resultDiv.style.display = "none";
  quize.style.display = "block";
  redoButton.setAttribute("hidden", true);
  enableButtons();
  makeQuestion();
}

makeQuestion();
