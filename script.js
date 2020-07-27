// Timer
var timeEl = document.querySelector(".time");
var mainEl= document.querySelector("main");
var secondsLeft= 10;

function setTime(){
    var timerInterval= setInterval(function(){
        secondsLeft--;
        timeEl.textContent = secondsLeft + "Seconds left until time is up!";

        if(secondsLeft ===0){
            clearInterval(timerInterval);
            sendMessage();
        }
    }, 1000);
}

setTime();









//const startButton= document.getElementById("start-btn");
//startButton.addEventListener ("click", startQuiz);
