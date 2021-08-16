// import functions and grab DOM elements
import { countsAsAYes } from './utils.js';

const quizButton = document.getElementById('quiz-button');
const resultsDiv = document.querySelector('#results-div');
const resultsSpan = document.querySelector('#results-span');
const pastResultsSpan = document.querySelector('#past-results-span');
const resetScoresButton = document.querySelector('#reset-scores-button');

// initialize state
let correctAnswers = 0;
let quizPassCount = localStorage.getItem('quizPassCount');
let quizFailCount = localStorage.getItem('quizFailCount');
let firstName = '';
let lastName = '';

//Updates quizPassCount and quizFailCount in LocalStorage
const updateLocalStorage = ()=> {
    localStorage.setItem('quizPassCount', quizPassCount);
    localStorage.setItem('quizFailCount', quizFailCount);
};

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
    let resultsString = '';
    let resultsDivClass = '';

    //determine what text to display and what the results-div should look like
    if (correctAnswers === 3) {
        resultsString = `Congratulations, ${firstName} ${lastName}! You got all
            3 out of 3 questions right!`;
        resultsDivClass = 'good-results';
    } else if (correctAnswers === 2 || correctAnswers === 1) {
        resultsString = `Not bad, ${firstName} ${lastName}! You got
            ${correctAnswers} out of 3 questions right!`;
        resultsDivClass = 'okay-results';
    } else if (correctAnswers === 0) {
        resultsString = `Big oof, ${firstName} ${lastName}. You got
        0 out of 3 questions right.`;
        resultsDivClass = 'bad-results';
    }

    //Update state
    if (correctAnswers > 0) {
        quizPassCount++;
    } else {
        quizFailCount++;
    }
    updateLocalStorage();
    correctAnswers = 0;

    //Update the DOM
    resultsSpan.textContent = resultsString;
    resultsDiv.className = resultsDivClass;
    resultsDiv.style.display = 'block';
    pastResultsSpan.textContent = `Pass: ${quizPassCount} Fail: ${quizFailCount} Attempts: ${ (quizPassCount + quizFailCount) }`;
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

resetScoresButton.addEventListener('click', () => {
    quizPassCount = 0;
    quizFailCount = 0;
    updateLocalStorage();
});