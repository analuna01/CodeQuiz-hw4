//Identifying variables
var startButton = document.getElementById("start-btn");
var questionCountElement = document.querySelector("#question-count");
var choiceButtons = "";
var quizAnswers = document.querySelector("#quiz-answers");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");
var questionCounter = 0;

var quizQuestions = [
    {
        questions: "What is the longest river in France?",
        answers: ["The Nile", "The Rhine", "The Mississippi", "The Seine"],
        correctAnswer: "The Rhine"
    },

    {
        questions: "In which Australian state is Darwin?",
        answers: [
            "Queensland",
            "Western Australia",
            "Northern Territory",
            "Tasmania"
        ],
        correctAnswer: "Northern Territory"
    },

    {
        questions: "What in America is the Palmetto state?",
        answers: ["Florida", "Louisiana", "Alabama", "Sorth Carolina"],
        correctAnswer: "South Carolina"
    },

    {
        questions: "In which ocean is Madagascar?",
        answers: ["Atlantic", "Pacific", "Indian", "Artic"],
        correctAnswer: "Indian"
    }
];

// renderQuestions();

function renderQuestions() {
    quizAnswers.innerHTML = "";
    var questionText = document.createElement("h3");
    questionText.textContent = quizQuestions[questionCounter].questions;
    quizAnswers.appendChild(questionText);
    for (var i = 0; i < quizQuestions[questionCounter].answers.length; i++) {
        var answers = document.createElement("button");
        answers.className = "answer-choices";
        answers.onclick = questionClick;
        answers.textContent = quizQuestions[questionCounter].answers[i];
        quizAnswers.appendChild(answers);
    }
}

// Timer
var timeEl = document.querySelector(".time");
var mainEl = document.querySelector("main");
var secondsLeft = 60;

function setTime() {
    timeEl.textContent = secondsLeft + " Seconds left until time is up!";
    var timerInterval = setInterval
        (function () {
            secondsLeft--;
            timeEl.textContent = secondsLeft + " Seconds left until time is up!";

            if (secondsLeft === 0) {
                clearInterval(timerInterval);
                sendMessage();
            }
        }, 1000);
}

// setTime();

function questionClick() {
    if (questionCounter >= quizQuestions.length - 1) {
        var questionSection = document.querySelector("#geoQuiz");
        questionSection.style.display = "none";
    } else {
        console.log(this.textContent); // Gets the content of the button (answer choice)
        questionCounter = questionCounter + 1;
        renderQuestions();
    }
}

// EVENTS HERE!!
startButton.addEventListener("click", function () {
    renderQuestions();
    setTime();
});

//Score
var score = 0;



