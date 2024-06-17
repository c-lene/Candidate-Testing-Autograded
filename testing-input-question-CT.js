const input = require('readline-sync');

let question = "Who was the first American woman in space? ";
let candidateAnswer = "";

candidateAnswer = input.question(question);

console.log("Your answer was: " + candidateAnswer);