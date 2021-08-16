// import functions and grab DOM elements
import { countsAsAYes } from './utils.js';

const quizButton = document.getElementById('quiz-button');
const resultsDiv = document.querySelector('#results-div');
const scoreSpan = document.querySelector('#score-span');

// initialize state
let correctAnswers = 0;
let firstName = '';
let lastName = '';

//Stores first and last name as provided by user.
const setupQuiz = () => {
    firstName = prompt('What is your first name?');
    lastName = prompt('What is your last name?');
};

//Prompts user to answer questions and updates correctAnswers accordingly.
const askQuestions = () => {
    //Correct answer is no.
    if (!countsAsAYes(prompt('Did Adam Muto create Adventure Time?')))
        correctAnswers++;
    
    //Correct answer is yes.
    if (countsAsAYes(prompt('Is Finns brother Jake?')))
        correctAnswers++;

    //Correct answer is yes.
    if (countsAsAYes(prompt('Is Adventure Time on Cartoon Network?')))
        correctAnswers++;
};

//Alerts the user that the quiz is complete and that results are below.
//Also modifies DOM to display results.
const endQuizShowResults = () => {
    alert('You completed the quiz! View your results below.');
    scoreSpan.textContent = correctAnswers;
    correctAnswers = 0;
    resultsDiv.style.display = 'block';
};

// set event listeners 
	// get user input
	// use user input to update state 
	// update DOM to reflect the new state
quizButton.addEventListener('click', () => {
    const shouldContinue = confirm('Are you sure you want to take the quiz?');
    if (!shouldContinue)
        return;

    setupQuiz();
    askQuestions();
    endQuizShowResults();
});