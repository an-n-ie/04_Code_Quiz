var introEL = document.querySelector("#intro")
var questionsEl= document.querySelector("#questions")
var timeEL = document.querySelector("#time")
var startBtn = document.querySelector("#start-btn")
/*
1. Display start page - title and paragraph start button

2. Timer will start when start button is clicked from start page. Display question and show 4 answer buttons. Start pgae is hidden onle show question page. when you click an answer, show correct or wrong. Each question is 15 sec (5 questions, 75 sec total). For each wrong answer, 15 sec is deducted off the clock - show wrong message. No penalty for the correct answer - show correct message.

3. Once you answer all questions you'll be presented with the score and input your initial and submit button. Timer should stop and the time left becomes your score. When you submit, localStorage will store initial and score.

4. Show a dashboard of all the high scores
*/ 
var timeRemaining=60
var clockId
function countdown(){
    timeEL.textContent=timeRemaining
    timeRemaining--
}
function startGame(){
    questionsEl.classList.remove("hide")
    introEL.classList.add("hide")
    clockId=setInterval(countdown, 1000)
}


startBtn.addEventListener("click", startGame)