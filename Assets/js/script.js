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
    firstQuestion()
}
function firstQuestion() {
    titleEL.textContent = question[index].title
    ans1EL.textContent = question[index].answers[0]
    ans2EL.textContent = question[index].answers[1]
    ans3EL.textContent = question[index].answers[2]
    ans4EL.textContent = question[index].answers[3]
}
function nextQuestion(event) {
console.log("answer clicked", event.target.innerText)

    if(event.target.innerText === question[index].solution){
        console.log("correct answer!")
        correct++
        console.log("correct answers", correct)
    } else {
        console.log("wrong answer!")
    }



    if(index === question.length){
        // this is the function being called into action
         endQuiz()
    } else {
        index++
        firstQuestion()
    }
}


// question[index].answers.foreEach((answer)=>{
//     let choiceBtn = document.createElement("button");
//     choiceBtn.setAttribute("value", answer)
//     choiceBtn.textContent = answer;

//     choiceBtn.onclick = handleClick

// })

// function handleClick(){
//     if(this.value === question[index].solution){
//         corect++
//     } else {
//         // subtract 10 off the time if its wrong
//     }
// }


function endQuiz(){
// here is the " rules " youre going to set when the function is  called
// but this is not calling the function
}


ans1EL.addEventListener("click", nextQuestion)
ans2EL.addEventListener("click", nextQuestion)
ans3EL.addEventListener("click", nextQuestion)
ans4EL.addEventListener("click", nextQuestion)

startBtn.addEventListener("click", startGame)