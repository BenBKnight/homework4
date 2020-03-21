// Variables
var time = 75;
var countDownId = document.getElementById("countdown");
countDownId.innerText = time

// Objects for questions
var Question1 = [{
    question: "Commonly used data types DO NOT include:",
    choices: {
        a: "String",
        b: "Booleans",
        c: "Alerts",
        d: "Numbers",
    },
    answer: "c"
}]
var Question2 = [{
    question: "The condition in an if/else statement is enclosed within _____.",
    choices: {
        a: "Quotes",
        b: "Curly Brackets",
        c: "Parentheses",
        d: "Square Brackets",
    },
    answer: "c"
}]
var Question3 = [{
    question: "Arrays in JavaScript can be used to store ____.",
    choices: {
        a: "Numbers and strings",
        b: "Other Arrays",
        c: "Booleans",
        d: "All the above",
    },
    answer: "d"
}]
var Question4 = [{
    question: "String values must be enclosed within _____ when being assigned to variables.",
    choices: {
        a: "Commas",
        b: "Curly Brackets",
        c: "Quotes",
        d: "Parentheses",
    },
    answer: "c"
}]
var Question5 = [{
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: {
        a: "JavaScript",
        b: "Terminal/bash",
        c: "For loops",
        d: "Console.log",
    },
    answer: "d"
}]


// Call function and set interval for countdown
function startCountDown (){
    setInterval(countDownFunction, 1000); 
}
// Actual countdown function
function countDownFunction () {
    time --;
    countDownId.innerHTML = time
}

 