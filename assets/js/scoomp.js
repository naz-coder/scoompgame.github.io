const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const instruct = document.querySelector(".instruct");
const finishButton = document.getElementById("finish-btn");
const quiz = document.getElementById("quiz");
const questionSection = document.getElementById("question-holder");
const questionLine = document.getElementById("question");
const answerColumn = document.getElementById("answer");
const scoring = document.getElementById("score");

let shuffledQuestion, currentQuestionIndex;
let score = 0;
