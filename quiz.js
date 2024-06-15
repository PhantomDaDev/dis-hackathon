
const quizData = [
  {
    question: "What would be the result of 3+2+”7″? ",
    options: ["12", "7", "327", "57"],
    answer: "57",
  },
  {
    question: "What would be the result of 3+2+”7″? ",
    options: ["12", "7", "327", "57"],
    answer: "57",
  },
];

const questionDiv = document.getElementById("questions");
const optionsDiv = document.getElementById("options");
const submitButton = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;

function makeQuestion() {
  const question = quizData[currentQuestion];
  questionDiv.innerText = question.question;

  optionsDiv.innerHTML = "";
  question.options.forEach((option) => {
    const button = document.createElement("element");
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
  }

  currentQuestion++;

  if (currentQuestion > quizData.length) {
    makeQuestion;
  } else {
    showResult;
  }
}

function showResult() {
  quize.innerHTML = `
    <h1>You have completed the quiz</h1>
    <p>Your score is ${score}/${quizData.length}</p>
    `;
}

makeQuestion;


