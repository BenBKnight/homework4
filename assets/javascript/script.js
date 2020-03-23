// Variables for timer
var time = 75;
var countDownId = document.getElementById("countdown");
countDownId.innerText = time

// Variables for quiz
var title = document.getElementById("title");
var a = document.getElementById("content1");
var b = document.getElementById("content2");
var c = document.getElementById("content3");
var d = document.getElementById("content4");
var allContent = [content1, content2, content3, content4,]

//var option1 = document.getElementById("content1").addEventListener("click", answered1())

//function answered1 (event) {
  //  console.log("you did it!")
//}
// Objects for questions
var question1 = {
    question: "Commonly used data types DO NOT include:",
    choices: [
        "1: String",
        "2: Booleans",
        "3: Alerts",
        "4: Numbers",
    ],
    answer: "c"
}
var question2 = {
    question: "The condition in an if/else statement is enclosed within _____.",
    choices: [
        "1: Quotes",
        "2: Curly Brackets",
        "3: Parentheses",
        "4: Square Brackets",
    ],
    answer: "c"
}
var question3 = {
    question: "Arrays in JavaScript can be used to store ____.",
    choices: [
        "1: Numbers and strings",
        "2: Other Arrays",
        "3: Booleans",
        "4: All the above",
    ],
    answer: "d"
}
var question4 = {
    question: "String values must be enclosed within _____ when being assigned to variables.",
    choices: [
        "1: Commas",
        "2: Curly Brackets",
        "3: Quotes",
        "4: Parentheses",
    ],
    answer: "c"
}
var question5 = {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: [
        "1: JavaScript",
        "2: Terminal/bash",
        "3: For loops",
        "4: Console.log"
    ],
    answer: "d"
}


// Call function and set interval for countdown and hides start button
function startCountDown (){
    setInterval(countDownFunction, 1000);
    document.querySelector(".startQuiz").style.visibility = "hidden"; 
    return; 
}
// Actual countdown function
function countDownFunction () {
    time --;
    countDownId.innerHTML = time
}

// Function to display questions
function startQuiz(){
    document.getElementById("title").innerText=[question1.question];
    for (i = 0; i < question1.choices.length; i++) {
        var btn = document.createElement("BUTTON")
        btn.innerText=question1.choices[i];
        allContent[i].appendChild(btn);    
    }
    if ()

}



 