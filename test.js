const quizContainer = document.getElementById('quiz-container');
const submitButton = document.getElementById('submit-button');

const resultP = document.getElementById('result');

// Replace with your science quiz questions and answer choices as arrays
const questions = [
    {
        question: "What is the capital of France?",
        answers: ["Paris", "London", "Berlin"],
        correctAnswer: 0
    },
    // Add more questions here
];

// Function to generate the quiz content
function generateQuiz() {
    questions.forEach((question, index) => {
        const questionElement = document.createElement('p');
        questionElement.textContent = `${index + 1}. ${question.question}`;
        quizContainer.appendChild(questionElement);

        const answerOptions = document.createElement('ul');
        question.answers.forEach((answer, answerIndex) => {
            const answerOption = document.createElement('li');
            const radioInput = document.createElement('input');
            radioInput.type = 'radio';
            radioInput.name = `question-${index}`;
            radioInput.value = answerIndex;
            answerOption.textContent = answer;
            answerOption.appendChild(radioInput);
            answerOptions.appendChild(answerOption);
        });
        quizContainer.appendChild(answerOptions);
    });
}

// Function to calculate and display the quiz result
function submitQuiz() {
    let score = 0;
    questions.forEach((question, index) => {
        const selectedAnswer = document.querySelector(`input[name=question-${index}]:checked`);
        if (selectedAnswer && selectedAnswer.value == question.correctAnswer) {
            score++;
        }
    });
    resultP.textContent = `Your score is ${score} out of ${questions.length}`;
}

generateQuiz();

submitButton.addEventListener(click,submitQuiz)
