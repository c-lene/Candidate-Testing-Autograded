/*
const input = require('readline-sync');

let question = "Who was the first American woman in space? ";
let candidateAnswer = "";

candidateAnswer = input.question(question);

console.log("Your answer was: " + candidateAnswer);
*/


let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];

let correctAnswersLowercase = correctAnswers.toString().toLocaleLowerCase().split(",");
console.log(correctAnswersLowercase);
console.log(typeof correctAnswersLowercase);
