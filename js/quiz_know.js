const quizQuestions = [
    {
        question: "Как звали дядю главных героев, с которым они познакомились в первом сезоне?",
        answers: [
            "Стэнфорд Пайнс",
            "Стэн Пайнс", 
            "Алекс Хирш",
            "Диппер Пайнс"
        ],
        correct: 1,
    },
    {
        question: "С кем боролись Диппер и Мейбл в первой серии первого сезона?",
        answers: [
            "С зомби",
            "С вампирами",
            "С гномами",
            "С феями"
        ],
        correct: 2,
    },
    {
        question: "Как зовут питомца Мейбл?",
        answers: [
            "Вадлз",
            "Гренда",
            "Пухля",
            "Билл"
        ],
        correct: 2,
    },
    {
        question: "Кто главный злодей мульсериала?",
        answers: [
            "Пасифика",
            "Билл Шифр",
            "Гидеон",
            "Тоби Решительный"
        ],
        correct: 1,
    },
    {
        question: "Как Мейбл и Диппер оказались в Гравити Фолз?",
        answers: [
            "Они потерялись и случайно туда попали",
            "Их отправили родители на летние каникулы к дяде",
            "Они искали приключения и поехали туда",
            "Они всегда жили в Гравити Фолз"
        ],
        correct: 1,
    },
    {
        question: "В кого был влюблен Диппер?",
        answers: [
            "В Гренду",
            "В Билла Шифра",
            "В Сьюзан",
            "В Венди"
        ],
        correct: 3,
    },
    {
        question: "Какому совету дневника придерживался Диппер?",
        answers: [
            "Доверяй, но проверяй",
            "Никому не доверяй",
            "Стремись к странному",
            "Будь собой"
        ],
        correct: 1,
    },
    {
        question: "Какой символ был у Мейбл?",
        answers: [
            "Радуга",
            "Летящая звезда",
            "Сердце",
            "Мороженое"
        ],
        correct: 1,
    },
    {
        question: "Что было нарисовано нарисовано на кепке Диппера?",
        answers: [
            "Меч",
            "Шар",
            "Звезда",
            "Елка"
        ],
        correct: 3,
    },
    {
        question: "Какая фраза стала завершающей мультсериала?",
        answers: [
            "Встретимся в следующем сезоне",
            "Встретимся следующим летом",
            "МЫ еще встретимся",
            "Мы вернемся"
        ],
        correct: 1,
    }
];

let currentQuestion = 0;
let userAnswers = [];
let score = 0;

// Элементы DOM
const quizContent = document.getElementById('quizContent');
const progressBar = document.getElementById('progressBar');
const questionCounter = document.getElementById('questionCounter');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const submitBtn = document.getElementById('submitBtn');
const resultContainer = document.getElementById('resultContainer');
const resultActions = document.getElementById('resultActions');


// Инициализация теста
function initQuiz() {
    userAnswers = new Array(quizQuestions.length).fill(null);
    renderQuestion();
    updateNavigation();
}

// Отображение текущего вопроса
function renderQuestion() {
    const question = quizQuestions[currentQuestion];
    
    const questionHTML = `
        <div class="question-card active">
            <div class="question-number">Вопрос ${currentQuestion + 1}</div>
            <div class="question-text">${question.question}</div>
            <div class="answers-grid">
                ${question.answers.map((answer, index) => `
                    <div class="answer-option ${userAnswers[currentQuestion] === index ? 'selected' : ''}" 
                         onclick="selectAnswer(${index})">
                        ${answer}
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    quizContent.innerHTML = questionHTML;
    updateProgress();
    updateQuestionCounter();
}

// Выбор ответа
function selectAnswer(answerIndex) {
    userAnswers[currentQuestion] = answerIndex;
    renderQuestion();
    updateNavigation();
}

// Обновление прогресс-бара
function updateProgress() {
    const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;
    progressBar.style.width = `${progress}%`;
}

// Обновление счетчика вопросов
function updateQuestionCounter() {
    questionCounter.textContent = `Вопрос ${currentQuestion + 1} из ${quizQuestions.length}`;
}

// Обновление навигации
function updateNavigation() {
    prevBtn.disabled = currentQuestion === 0;
    
    const isLastQuestion = currentQuestion === quizQuestions.length - 1;
    const hasAnswer = userAnswers[currentQuestion] !== null;
    
    nextBtn.style.display = isLastQuestion ? 'none' : 'block';
    submitBtn.style.display = isLastQuestion && hasAnswer ? 'block' : 'none';
    nextBtn.disabled = !hasAnswer;
    submitBtn.disabled = !hasAnswer;
}

// Переход к следующему вопросу
function nextQuestion() {
    if (currentQuestion < quizQuestions.length - 1) {
        currentQuestion++;
        renderQuestion();
        updateNavigation();
    }
}

// Переход к предыдущему вопросу
function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        renderQuestion();
        updateNavigation();
    }
}

// Подсчет результатов
function calculateResults() {
    score = 0;
    quizQuestions.forEach((question, index) => {
        if (userAnswers[index] === question.correct) {
            score++;
        }
    });
    
    return {
        score: score,
        total: quizQuestions.length,
        percentage: Math.round((score / quizQuestions.length) * 100)
    };
}

// Получение сообщения в зависимости от результата
function getResultMessage(percentage) {
    if (percentage >= 90) {
        return {
            title: "Повелитель Времени!",
            message: "Вау! Ты знаешь о Гравити Фолз абсолютно всё! Ты как настоящий Автор дневников!"
        };
    } else if (percentage >= 70) {
        return {
            title: "Искатель Правды!",
            message: "Отличный результат! Ты хорошо разбираешься в тайнах Гравити Фолз."
        };
    } else if (percentage >= 50) {
        return {
            title: "Любопытный Турист!",
            message: "Неплохо! Ты знаком с основными тайнами Гравити Фолз."
        };
    } else {
        return {
            title: "Новичок в Городе!",
            message: "Ты только начинаешь свое путешествие по Гравити Фолз!"
        };
    }
}

// Показ результатов
function showResults() {
    const results = calculateResults();
    const resultMessage = getResultMessage(results.percentage);
    
    resultContainer.innerHTML = `
        <div class="result-title">${resultMessage.title}</div>
        <div class="result-score">${results.score}/${results.total}</div>
        <div class="result-message">
            ${resultMessage.message}
        </div>
    `;
    
    resultContainer.style.display = 'block';
    quizContent.style.display = 'none';
    document.querySelector('.quiz-navigation').style.display = 'none';
    document.querySelector('.quiz-progress').style.display = 'none';
    resultActions.style.display = 'block';
}

// Перезапуск теста
function restartQuiz() {
    currentQuestion = 0;
    userAnswers = new Array(quizQuestions.length).fill(null);
    score = 0;
    
    resultContainer.style.display = 'none';
    quizContent.style.display = 'block';
    document.querySelector('.quiz-navigation').style.display = 'flex';
    document.querySelector('.quiz-progress').style.display = 'block';
    resultActions.style.display = 'none';
    
    renderQuestion();
    updateNavigation();
}

// Назначение обработчиков событий
document.addEventListener('DOMContentLoaded', function() {
    initQuiz();
    
    prevBtn.addEventListener('click', prevQuestion);
    nextBtn.addEventListener('click', nextQuestion);
    submitBtn.addEventListener('click', showResults);
});

// Делаем функции глобальными для использования в HTML
window.selectAnswer = selectAnswer;
window.nextQuestion = nextQuestion;
window.prevQuestion = prevQuestion;
window.showResults = showResults;
window.restartQuiz = restartQuiz;
window.goToHome = goToHome;
