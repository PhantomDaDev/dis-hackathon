//                        IMPORTANT
//work in progreesss
//You can ONLY edit code from QUIZ DATA ARRAY not ANYTHING else!
//While adding QUIZ data follow the format!
// Made by criston
const quizData = [
  {
    question: "What would be the result of 3+2+'7'?",
    options: ["12", "7", "327", "57"],
    reason:
      "Here, 3 and 2 behave like an integer, and “7” behaves like a string. So 3 plus 2 will be 5. Then the output will be 5+”7″ = 57.",
    answer: "57",
  },
  {
    question: "Which company developed JavaScript?",
    options: ["NetScape", "Google", "Apple", "Meta(Facebook)"],
    reason:
      "Netscape developed JavaScript and was created by Brenden Eich in the year of 1995.",
    answer: "NetScape",
  },
];
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
