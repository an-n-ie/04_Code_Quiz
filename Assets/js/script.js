var introEL = document.querySelector("#intro")
var qaContainerEl = document.querySelector("#qa-container")
var timeEL = document.querySelector("#time")
var titleEL = document.querySelector("#title")
var ans1EL = document.querySelector("#ans1")
var ans2EL = document.querySelector("#ans2")
var ans3EL = document.querySelector("#ans3")
var ans4EL = document.querySelector("#ans4")
var startBtn = document.querySelector("#start-btn")
/*
1. Display start page - title and paragraph start button

2. Timer will start when start button is clicked from start page. Display question and show 4 answer buttons. Start pgae is hidden onle show question page. when you click an answer, show correct or wrong. Each question is 15 sec (5 questions, 75 sec total). For each wrong answer, 15 sec is deducted off the clock - show wrong message. No penalty for the correct answer - show correct message.

3. Once you answer all questions you'll be presented with the score and input your initial and submit button. Timer should stop and the time left becomes your score. When you submit, localStorage will store initial and score.

4. Show a dashboard of all the high scores
*/
var timeRemaining = 60
var clockId

var question = [{
    title: "new q1",
    answers: ["1-1", "1-2", "1-3", "1-4"],
    solution: "1-1"
}, {
    title: "new q2",
    answers: ["2-1", "2-2", "2-3", "2-4"],
    solution: "2-1"
}, {
    title: "new q3",
    answers: ["3-1", "3-2", "3-3", "3-4"],
    solution: "3-1"
}, {
    title: "new q4",
    answers: ["4-1", "4-2", "4-3", "4-4"],
    solution: "4-1"
}]

var index = 0
function countdown() {
    timeEL.textContent = timeRemaining
    timeRemaining--
}
function startGame() {
    qaContainerEl.classList.remove("hide")
    introEL.classList.add("hide")
    clockId = setInterval(countdown, 1000)
    firstQuestion()
}
function firstQuestion() {
    titleEL.textContent = question[index].title
    ans1EL.textContent = question[index].answers[0]
    ans2EL.textContent = question[index].answers[1]
    ans3EL.textContent = question[index].answers[2]
    ans4EL.textContent = question[index].answers[3]
}
function secondQuestion() {
    index++
    firstQuestion()
}
ans1EL.addEventListener("click", secondQuestion)
ans2EL.addEventListener("click", secondQuestion)
ans3EL.addEventListener("click", secondQuestion)
ans4EL.addEventListener("click", secondQuestion)

startBtn.addEventListener("click", startGame)