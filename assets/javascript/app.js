var questionsAndAnswers = [{
    question: "Pickleball was invented in:",
    answers: ["1884", "1954", "1965", "1997"],
    correctAnswer: 2
}, {
    question: "The game as first played in:",
    answers: ["California", "Florida", "Washington" "New York"],
    correctAnswer: 2
}


];

var questionText = document.getElementById("question");
var answer1Text = document.getElementById("answer1");
var answer2Text = document.getElementById("answer2");
var answer3Text = document.getElementById("answer3");
var answer4Text = document.getElementById("answer4");


var startUp = function() {
    console.log("This is the first question: " + questionsAndAnswers[0].question);
    console.log("This is the correct answer: " + questionsAndAnswers[0].answers[2]);

}