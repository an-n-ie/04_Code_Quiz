var introEL = document.querySelector("#intro")
var qaContainerEl = document.querySelector("#qa-container")
var qaContainer2El = document.querySelector("#qa-container2")
var qaContainer3El = document.querySelector("#qa-container3")
var inputInitialEl= document.querySelector("#input-initial")
var resultsEl= document.querySelector("#results")
var timeEL = document.querySelector("#time")
var titleEL = document.querySelector("#title")
var ans1EL = document.querySelector("#ans1")
var ans2EL = document.querySelector("#ans2")
var ans3EL = document.querySelector("#ans3")
var ans4EL = document.querySelector("#ans4")
var startBtn = document.querySelector("#start-btn")
var ans11Btn = document.querySelector("#ans1")
var ans12Btn = document.querySelector("#ans2")
var ans13Btn = document.querySelector("#ans3")
var ans14Btn = document.querySelector("#ans4")
var ans21Btn = document.querySelector("#ans21")
var ans22Btn = document.querySelector("#ans22")
var ans23Btn = document.querySelector("#ans23")
var ans24Btn = document.querySelector("#ans24")
var ans31Btn = document.querySelector("#ans31")
var ans32Btn = document.querySelector("#ans32")
var ans33Btn = document.querySelector("#ans33")
var ans34Btn = document.querySelector("#ans34")
var saveBtn = document.querySelector("#save-btn")
/*
1. Display start page - title and paragraph start button

2. Timer will start when start button is clicked from start page. Display question and show 4 answer buttons. Start pgae is hidden onle show question page. when you click an answer, show correct or wrong. Each question is 15 sec (5 questions, 75 sec total). For each wrong answer, 15 sec is deducted off the clock - show wrong message. No penalty for the correct answer - show correct message.

3. Once you answer all questions you'll be presented with the score and input your initial and submit button. Timer should stop and the time left becomes your score. When you submit, localStorage will store initial and score.

4. Show a dashboard of all the high scores
*/
var timeRemaining = 45
var clockId

var question = [{
    title: "1 + 1 =",
    answers: ["1", "11", "22", "2"],
    solution: "2"
}, {
    title: "2 + 2 =",
    answers: ["7", "2", "22", "4"],
    solution: "4"
}, {
    title: "6 + 6 =",
    answers: ["66", "12", "6", "14"],
    solution: "12"
}, {
    title: "100 + (-101) =",
    answers: ["10", "1", "-100", "-1"],
    solution: "-1"
}]

var correct = 0;
var index = 0
function countdown() {
    timeEL.textContent = timeRemaining
    timeRemaining--
}
function startGame() {
    qaContainerEl.classList.remove("hide")
    introEL.classList.add("hide")
    clockId = setInterval(countdown, 1000)
    // firstQuestion()
}

function secondQuestion(){
    qaContainer2El.classList.remove("hide")
    qaContainerEl.classList.add("hide")
}
function thirdQuestion(){
    qaContainer3El.classList.remove("hide")
    qaContainer2El.classList.add("hide")
}
function enterInit(){
    inputInitialEl.classList.remove("hide")
    qaContainer3El.classList.add("hide")
}
function resultsPage(){
    resultsEl.classList.remove("hide")
    inputInitialEl.classList.add("hide")
}



startBtn.addEventListener("click", startGame)
ans11Btn.addEventListener("click", secondQuestion)
ans12Btn.addEventListener("click", secondQuestion)
ans13Btn.addEventListener("click", secondQuestion)
ans14Btn.addEventListener("click", secondQuestion)
ans21Btn.addEventListener("click", thirdQuestion)
ans22Btn.addEventListener("click", thirdQuestion)
ans23Btn.addEventListener("click", thirdQuestion)
ans24Btn.addEventListener("click", thirdQuestion)
ans31Btn.addEventListener("click", enterInit)
ans32Btn.addEventListener("click", enterInit)
ans33Btn.addEventListener("click", enterInit)
ans34Btn.addEventListener("click", enterInit)
saveBtn.addEventListener("click", resultsPage)