import { triviaQuestions } from './questions.js';
import { randomizeOrder } from './random-order.js';

//const triviaQuestions array is in questions.js to keep the questions separate from the scripts
let currentQuestionIndex = 0;
let score = 0;
const totalQuestions = triviaQuestions.length;

function startTrivia() {
    randomizeOrder(triviaQuestions);
    displayQuestion();
    document.getElementById('next-btn').addEventListener('click', submitAnswer);
    document.getElementById('end-btn').addEventListener('click', () => endScreen(true));
}

function displayQuestion() {
    const questionTextElement = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    //set current question
    const currentQ = triviaQuestions[currentQuestionIndex];
    questionTextElement.textContent = currentQ.question;
    updateProgress();
    //reset and map buttons
    optionsContainer.innerHTML = '';
    const optionButtons = currentQ.options.map(option => {
        const button = document.createElement('button');
        button.classList.add('option-btn');
        button.textContent = option;
        button.value = option;
        button.addEventListener('click', () => selectAnswer(option, button));
        return button;
    });

    optionButtons.forEach(btn => optionsContainer.appendChild(btn));
}

function updateProgress() {
    const progressText = document.getElementById('progress-text');
    if (progressText) {
        progressText.textContent = `Question ${currentQuestionIndex + 1} of ${totalQuestions}`;
    }
}

let selectedAnswer = null;
function selectAnswer(option, clickedButton) {
    //reset selection then select clicked button
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    clickedButton.classList.add('selected');
    selectedAnswer = option;
}

function submitAnswer() {
    if (selectedAnswer === null) {
        alert("Select an answer!");
        return;
    }

    if (selectedAnswer === triviaQuestions[currentQuestionIndex].answer) {
        score++;
    }

    currentQuestionIndex++;
    selectedAnswer = null;

    if (currentQuestionIndex < totalQuestions) {
        displayQuestion();
    } else {
        endScreen(false);
    }
}

function endScreen(early = false) {
    //hide trivia container, show results container
    document.getElementById('trivia-container').style.display = 'none';
    document.getElementById('results-container').style.display = 'block';
    let displayTotal = currentQuestionIndex;
    document.getElementById('score-display').textContent = `${score}/${displayTotal}`;
}

startTrivia();