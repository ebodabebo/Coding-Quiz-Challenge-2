window.onload = function(){

var score = 0
var question1 = "Commonly used data types DO Not Include"
var q1a1 = "strings"
var q1a2 = "booleans"
var q1a3 = "alerts"
var q1a4 = "numbers"

var question2 = "The condition in an if/else statement is enclosed with _______ "
var q2a1 = "curly brackets"
var q2a2 = "quotes"
var q2a3 = "parenthesis"
var q2a4 = "square brackets"

var question3 = "Arrays in JavaScript can be used to store"
var q2a1 = "numbers and strings"
var q2a2 = "other arrays"
var q2a3 = "booleans"
var q2a4 = "all of the above"

var question4 = "String values must be enclosed within ______ when being assigned to variables."
var q2a1 = "commas"
var q2a2 = "curly brackets"
var q2a3 = "quotes"
var q2a4 = "parenthesis"

var question5 = "A very useful tool used during development and debuggin for printing content to the debugger is:"
var q2a1 = "JavaScript"
var q2a2 = "terminal/bash"
var q2a3 = "for loops"
var q2a4 = "console.log"

var questionIndex = 1
var choice = 0
var isCorrect = false


function checkAnswer(){
    if (questionIndex == 1){
        if (choice == 3){
            score ++
            isCorrect = true 
        }
        else {
            isCorrect = false
        }
    }
    else if (questionIndex == 2){
        if (choice == 1){
            score++
            isCorrect = true
        }
        else {
            isCorrect = false
        }
    }
    else if (questionIndex == 3) {
        if (choice == 2){
            score++
            isCorrect = true
        }
        else {
            isCorrect = false
        }
    }
    else if (questionIndex == 4) {
        if (choice == 4){
            score++
            isCorrect = true
        }
        else {
            isCorrect = false
        }
    }
    else if (questionIndex == 5) {
        if (choice == 3){
            score++
            isCorrect = true
        }
        else {
            isCorrect = false
        }
    }

    questionIndex++
    loadQuestion(questionIndex)
}

function loadQuestion(question){
    if (question == 2){
        document.getElementById("question").innerText = question2 
        document.getElementById("answer1").innerText = q2a1
        document.getElementById("answer2").innerText = q2a2
        document.getElementById("answer3").innerText = q2a3
        document.getElementById("answer4").innerText= q2a4
    }
    else if(question == 3){
        document.getElementById("question").innerHTML = question3 
        document.getElementById("answer1").innerHTML = q3a1
        document.getElementById("answer2").innerHTML = q3a2
        document.getElementById("answer3").innerHTML = q3a3
        document.getElementById("answer4").innerHTML = q3a4
    }
    else if(question == 4){
        document.getElementById("question").innerHTML = question4 
        document.getElementById("answer1").innerHTML = q4a1
        document.getElementById("answer2").innerHTML = q4a2
        document.getElementById("answer3").innerHTML = q4a3
        document.getElementById("answer4").innerHTML = q4a4
    }
    else {
        document.getElementById("question").innerHTML = question5 
        document.getElementById("answer1").innerHTML = q5a1
        document.getElementById("answer2").innerHTML = q5a2
        document.getElementById("answer3").innerHTML = q5a3
        document.getElementById("answer4").innerHTML = q5a4
    }

    if (isCorrect == true){
        showCorrect()
        hideWrong()
    } 
    else {
        hideCorrect()
        showWrong()
    }

}

document.getElementById("answer1").addEventListener("click",function(){
    choice = 1    
    checkAnswer()
    console.log("clickedanswer1")
})

document.getElementById("answer2").addEventListener("click",function(){
    choice = 2    
    checkAnswer()
})

document.getElementById("answer3").addEventListener("click",function(){
    choice = 3    
    checkAnswer()
})

document.getElementById("answer4").addEventListener("click",function(){
    choice = 4
    checkAnswer()
})

function showCorrect(){
    document.getElementById("showcorrect").style.visibility = "visible"
}

function showWrong(){
    document.getElementById("showwrong").style.visibility = "visible"
}

function hideCorrect(){
    document.getElementById("showcorrect").style.visibility = "hidden"
}

function hideWrong(){
    document.getElementById("showwrong").style.visibility = "hidden"
}
}
