// Variables for timer
var time = 75;
var countDownId = document.getElementById("countdown");
countDownId.innerText = time
var savedHighscores = []
// Call function and set interval for countdown and hides start button
function startCountDown (){
    setInterval(countDownFunction, 1000);
    document.querySelector(".main-content").className = "invisible";
    return; 
}
// Actual countdown function
function countDownFunction () {
    time --;
    countDownId.innerHTML = time
}
// Reveal Question 1
function showQuestion (){
    document.getElementById("questionWrapper1").className = ("")
}
function answer1 (){
    time -= 10;
    document.getElementById("questionWrapper1").className = ("invisible");
    document.getElementById("questionWrapper2").className = ("");
    console.log("this ran")
}
function answer1Right (){
    document.getElementById("questionWrapper1").className = ("invisible");
    document.getElementById("questionWrapper2").className = ("");
    console.log("this ran too")
}
function answer2 (){
    time -= 10;
    document.getElementById("questionWrapper2").className = ("invisible");
    document.getElementById("questionWrapper3").className = ("");
    console.log("this ran")
}
function answer2Right (){
    document.getElementById("questionWrapper2").className = ("invisible");
    document.getElementById("questionWrapper3").className = ("");
    console.log("this ran too")
}
function answer3 (){
    time -= 10;
    document.getElementById("questionWrapper3").className = ("invisible");
    document.getElementById("questionWrapper4").className = ("");
    console.log("this ran")
}
function answer3Right (){
    document.getElementById("questionWrapper3").className = ("invisible");
    document.getElementById("questionWrapper4").className = ("");
    console.log("this ran too")
}
function answer4 (){
    time -= 10;
    document.getElementById("questionWrapper4").className = ("invisible");
    document.getElementById("questionWrapper5").className = ("");
    console.log("this ran")
}
function answer4Right (){
    document.getElementById("questionWrapper4").className = ("invisible");
    document.getElementById("questionWrapper5").className = ("");
    console.log("this ran too")
}
function answer5 (){
    time -= 10;
    document.getElementById("questionWrapper5").className = ("invisible"); 
    document.getElementById("allDone").className = ("");
    document.getElementById("finalScore").innerText = time;
    document.getElementById("finalTime").className = ("");
    document.getElementById("finalTime").innerText = time;
    countDownId.className = ("invisible");
}
function answer5Right (){
    document.getElementById("questionWrapper5").className = ("invisible");
    document.getElementById("allDone").className = ("");
    document.getElementById("finalScore").innerText = time;
    document.getElementById("finalTime").className = ("");
    document.getElementById("finalTime").innerText = time;
    countDownId.className = ("invisible");
}

// Saves user score and initials 
var savedHighscores = []
function submitInitials(){
    var initials = document.getElementById("initials").value;
    document.getElementById("allDone").className = ("invisible");
    document.getElementById("highscorePage").className = ("");
    savedHighscores += (initials + ' ' + time)
    localStorage.setItem("savedHighscores", JSON.stringify(savedHighscores));
    console.log(savedHighscores.length)
    // Create a ordered list element and applies initials and score
    //for (i = 0; i < savedHighscores.length; i++) {
    // I was not able to code my for loop to function
        var listItem = document.createElement("li");
        var showInitials = JSON.parse(localStorage.getItem("savedHighscores"));
        listItem.innerText = savedHighscores;

        document.getElementById("highscoreList").appendChild(listItem);
        console.log(JSON.parse(localStorage.getItem("savedHighscores")))
        console.log(savedHighscores.length)
    console.log(time)
}




// Takes user to highscore page
function viewHighscoreTag(){

    document.querySelector(".main-content").className = "invisible";

    document.getElementById("highscorePage").className = ("");

}
// Clears local storage and hides list
function clearScores(){
    localStorage.clear();
    document.getElementById("highscoreList").className = "invisible";
    console.log("This worked")
}