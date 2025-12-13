//const triviaQuestions array is in questions.js to keep the questions separate from the scripts
let currentQuestionIndex = 0;
let score = 0;
const totalQuestions = triviaQuestions.length;

function startTrivia() {
    displayQuestion();
    document.getElementById('next-btn').addEventListener('click', submitAnswer);
}

function displayQuestion() {
    const questionTextElement = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    //set current question
    const currentQ = triviaQuestions[currentQuestionIndex];
    questionTextElement.textContent = currentQ.question;
    updateProgress();
    //reset and create buttons for answers
    optionsContainer.innerHTML = '';
    currentQ.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.classList.add('option-btn');
        button.textContent = option;
        button.value = option;
        button.addEventListener('click', () => selectAnswer(option, button));
        optionsContainer.appendChild(button);
    });
}

let selectedAnswer = null;

function selectAnswer(option, clickedButton) {
    //Reset selection then select clicked button
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
        endScreen();
    }
}

function endScreen() {
    //Hide trivia container, show results container
    document.getElementById('trivia-container').style.display = 'none';
    document.getElementById('results-container').style.display = 'block';
    document.getElementById('score-display').textContent = `${score}/${totalQuestions}`;
}

function updateProgress() {
    const progressText = document.getElementById('progress-text');
    if (progressText) {
        progressText.textContent = `Question ${currentQuestionIndex + 1} of ${totalQuestions}`;
    }
}

startTrivia();