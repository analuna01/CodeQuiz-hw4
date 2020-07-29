//Identifying variables
var startButton = document.getElementById("start-btn");
var questionCount = document.querySelector("#question-count");
var quizAnswers = document.querySelector("#quiz-answers");
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

var quizQuestions = [
    {
        questions: "What is the longest river in France?",
        answers: ["The Nile", "The Rhine", "The Mississippi", "The Seine"],
        correctAnswer: "The Rhine",
    },

    {
        questions: "In which Australian state is Darwin?",
        answers: ["Queensland", "Western Australia", "Northern Territory", "Tasmania"],
        correctAnswer: "Northern Territory",
    },

    {
        questions: "What in America is the Palmetto state?",
        answers: ["Florida", "Louisiana", "Alabama", "Sorth Carolina"],
        correctAnswer: "South Carolina",
    },

    {
        questions: "In which ocean is Madagascar?",
        answers: ["Atlantic", "Pacific", "Indian", "Artic"],
        correctAnswer: "Indian",
    },

]

renderQuestions();

function renderQuestions() {
    quizAnswers.innerHTML = "";
    var questionText = document.createElement("h3");
    questionText.textContent = quizQuestions[0].questions;
    quizAnswers.appendChild(questionText);
    for (var i = 0; i < quizQuestions[0].answers.length; i++) {
        var answers = document.createElement("p")
        answers.textContent = quizQuestions[0].answers[i]
        quizAnswers.appendChild(answers);
    }
    document.getElementById("start-btn").onclick = renderQuestions;
}

// Timer
var timeEl = document.querySelector(".time");
var mainEl = document.querySelector("main");
var secondsLeft = 180;

function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft + "Seconds left until time is up!";

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }
    }, 1000);
}

setTime();

//Score
var results = function () {
    if (input == answer) {
        correct = correct + 1;
        alert("correct");
    } else {
        incorrect = incorrect + 1;
        alert("incorrect");
    }
};



