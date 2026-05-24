const quizQuestions = [
    {
        question: "Какой предмет ты бы взял с собой на необитаемый остров?",
        answers: [
            {
                text: "Записную книжку для наблюдений",
                scores: { dipper: 2, ford: 3, mabel: 0, stan: 1, wendy: 1, soos: 0, bill: 1 }
            },
            {
                text: "Набор для рукоделия",
                scores: { dipper: 0, ford: 0, mabel: 3, stan: 0, wendy: 1, soos: 1, bill: 0 }
            },
            {
                text: "Набор инструментов",
                scores: { dipper: 1, ford: 1, mabel: 0, stan: 2, wendy: 2, soos: 3, bill: 0 }
            },
            {
                text: "Колоду карт для игры в одиночку",
                scores: { dipper: 0, ford: 0, mabel: 1, stan: 2, wendy: 1, soos: 1, bill: 2 }
            }
        ]
    },
    {
        question: "Какую суперспособность ты бы выбрал?",
        answers: [
            {
                text: "Умение находить ответы на любые загадки",
                scores: { dipper: 3, ford: 2, mabel: 0, stan: 1, wendy: 1, soos: 0, bill: 1 }
            },
            {
                text: "Способность понимать язык животных",
                scores: { dipper: 1, ford: 1, mabel: 3, stan: 0, wendy: 2, soos: 2, bill: 0 }
            },
            {
                text: "Умение находить выход из любой ситуации",
                scores: { dipper: 1, ford: 1, mabel: 1, stan: 3, wendy: 2, soos: 2, bill: 1 }
            },
            {
                text: "Возможность видеть истинную сущность людей",
                scores: { dipper: 2, ford: 2, mabel: 1, stan: 1, wendy: 1, soos: 0, bill: 3 }
            }
        ]
    },
    {
        question: "Твой идеальный выходной?",
        answers: [
            {
                text: "Исследовать заброшенные места",
                scores: { dipper: 3, ford: 2, mabel: 1, stan: 1, wendy: 2, soos: 1, bill: 1 }
            },
            {
                text: "Устроить вечеринку с друзьями",
                scores: { dipper: 0, ford: 0, mabel: 3, stan: 1, wendy: 2, soos: 2, bill: 0 }
            },
            {
                text: "Заработать денег необычным способом",
                scores: { dipper: 0, ford: 1, mabel: 0, stan: 3, wendy: 1, soos: 1, bill: 1 }
            },
            {
                text: "Просто отдыхать и ни о чем не думать",
                scores: { dipper: 0, ford: 0, mabel: 1, stan: 0, wendy: 2, soos: 3, bill: 0 }
            }
        ]
    },
    {
        question: "Как ты относишься к правилам?",
        answers: [
            {
                text: "Стараюсь их соблюдать, если они логичны",
                scores: { dipper: 3, ford: 2, mabel: 1, stan: 0, wendy: 1, soos: 2, bill: 0 }
            },
            {
                text: "Правила созданы, чтобы их нарушать",
                scores: { dipper: 1, ford: 1, mabel: 2, stan: 2, wendy: 3, soos: 1, bill: 2 }
            },
            {
                text: "Использую их в своих интересах",
                scores: { dipper: 0, ford: 1, mabel: 0, stan: 3, wendy: 1, soos: 0, bill: 2 }
            },
            {
                text: "Я сам создаю правила",
                scores: { dipper: 0, ford: 2, mabel: 0, stan: 1, wendy: 0, soos: 0, bill: 3 }
            }
        ]
    },
    {
        question: "Что для тебя важнее в дружбе?",
        answers: [
            {
                text: "Взаимопонимание и доверие",
                scores: { dipper: 3, ford: 2, mabel: 2, stan: 1, wendy: 2, soos: 3, bill: 0 }
            },
            {
                text: "Веселье и приключения",
                scores: { dipper: 1, ford: 1, mabel: 3, stan: 1, wendy: 3, soos: 2, bill: 0 }
            },
            {
                text: "Практическая польза",
                scores: { dipper: 0, ford: 1, mabel: 0, stan: 3, wendy: 0, soos: 1, bill: 1 }
            },
            {
                text: "Возможность влиять на других",
                scores: { dipper: 0, ford: 1, mabel: 0, stan: 1, wendy: 0, soos: 0, bill: 3 }
            }
        ]
    },
    {
        question: "Твоя реакция на критику?",
        answers: [
            {
                text: "Анализирую и стараюсь исправиться",
                scores: { dipper: 3, ford: 2, mabel: 1, stan: 0, wendy: 1, soos: 2, bill: 0 }
            },
            {
                text: "Стараюсь не принимать близко к сердцу",
                scores: { dipper: 1, ford: 1, mabel: 3, stan: 2, wendy: 3, soos: 2, bill: 1 }
            },
            {
                text: "Ищу способ использовать это себе на пользу",
                scores: { dipper: 0, ford: 1, mabel: 0, stan: 3, wendy: 1, soos: 0, bill: 2 }
            },
            {
                text: "Воспринимаю как вызов",
                scores: { dipper: 1, ford: 2, mabel: 1, stan: 1, wendy: 1, soos: 1, bill: 3 }
            }
        ]
    },
    {
        question: "Какой жанр книг ты предпочитаешь?",
        answers: [
            {
                text: "Научная литература и документалистика",
                scores: { dipper: 2, ford: 3, mabel: 0, stan: 1, wendy: 1, soos: 0, bill: 1 }
            },
            {
                text: "Романтические комедии и сказки",
                scores: { dipper: 0, ford: 0, mabel: 3, stan: 0, wendy: 1, soos: 1, bill: 0 }
            },
            {
                text: "Приключения и детективы",
                scores: { dipper: 3, ford: 2, mabel: 2, stan: 1, wendy: 2, soos: 2, bill: 1 }
            },
            {
                text: "Философия и эзотерика",
                scores: { dipper: 1, ford: 2, mabel: 0, stan: 1, wendy: 1, soos: 0, bill: 3 }
            }
        ]
    },
    {
        question: "Твое отношение к технологиям?",
        answers: [
            {
                text: "Изучаю самые современные разработки",
                scores: { dipper: 2, ford: 3, mabel: 0, stan: 1, wendy: 1, soos: 1, bill: 1 }
            },
            {
                text: "Использую для творчества и общения",
                scores: { dipper: 1, ford: 1, mabel: 3, stan: 0, wendy: 2, soos: 2, bill: 0 }
            },
            {
                text: "Ценю практичность и простоту",
                scores: { dipper: 1, ford: 1, mabel: 1, stan: 3, wendy: 2, soos: 3, bill: 0 }
            },
            {
                text: "Вижу в них инструмент для достижения целей",
                scores: { dipper: 1, ford: 2, mabel: 0, stan: 1, wendy: 0, soos: 0, bill: 3 }
            }
        ]
    },
    {
        question: "Как ты ведешь себя в конфликтной ситуации?",
        answers: [
            {
                text: "Стараюсь найти компромисс",
                scores: { dipper: 2, ford: 2, mabel: 3, stan: 1, wendy: 2, soos: 3, bill: 0 }
            },
            {
                text: "Защищаю свою позицию до конца",
                scores: { dipper: 3, ford: 2, mabel: 1, stan: 2, wendy: 2, soos: 1, bill: 1 }
            },
            {
                text: "Ищу выгоду в сложившейся ситуации",
                scores: { dipper: 0, ford: 1, mabel: 0, stan: 3, wendy: 1, soos: 0, bill: 2 }
            },
            {
                text: "Использую конфликт для установления контроля",
                scores: { dipper: 0, ford: 1, mabel: 0, stan: 1, wendy: 0, soos: 0, bill: 3 }
            }
        ]
    },
    {
        question: "Что для тебя значит 'успех'?",
        answers: [
            {
                text: "Познание истины и открытие нового",
                scores: { dipper: 3, ford: 3, mabel: 1, stan: 1, wendy: 1, soos: 0, bill: 1 }
            },
            {
                text: "Счастье близких и гармония в отношениях",
                scores: { dipper: 2, ford: 1, mabel: 3, stan: 1, wendy: 2, soos: 3, bill: 0 }
            },
            {
                text: "Финансовая независимость",
                scores: { dipper: 0, ford: 1, mabel: 0, stan: 3, wendy: 2, soos: 1, bill: 1 }
            },
            {
                text: "Влияние и власть",
                scores: { dipper: 0, ford: 1, mabel: 0, stan: 1, wendy: 0, soos: 0, bill: 3 }
            }
        ]
    },
    {
        question: "Твое отношение к традициям?",
        answers: [
            {
                text: "Уважаю, если они имеют научное обоснование",
                scores: { dipper: 2, ford: 3, mabel: 1, stan: 1, wendy: 1, soos: 1, bill: 0 }
            },
            {
                text: "Люблю создавать свои семейные традиции",
                scores: { dipper: 1, ford: 0, mabel: 3, stan: 2, wendy: 2, soos: 2, bill: 0 }
            },
            {
                text: "Использую, если это приносит пользу",
                scores: { dipper: 0, ford: 1, mabel: 0, stan: 3, wendy: 1, soos: 1, bill: 1 }
            },
            {
                text: "Традиции - это ограничения, которые нужно ломать",
                scores: { dipper: 1, ford: 2, mabel: 1, stan: 0, wendy: 2, soos: 0, bill: 3 }
            }
        ]
    },
    {
        question: "Как ты принимаешь важные решения?",
        answers: [
            {
                text: "На основе тщательного анализа",
                scores: { dipper: 3, ford: 3, mabel: 1, stan: 1, wendy: 1, soos: 0, bill: 1 }
            },
            {
                text: "Доверяю интуиции и чувствам",
                scores: { dipper: 1, ford: 1, mabel: 3, stan: 2, wendy: 2, soos: 2, bill: 0 }
            },
            {
                text: "Оцениваю практическую выгоду",
                scores: { dipper: 0, ford: 1, mabel: 0, stan: 3, wendy: 2, soos: 1, bill: 1 }
            },
            {
                text: "Действую импульсивно, полагаясь на удачу",
                scores: { dipper: 1, ford: 0, mabel: 2, stan: 1, wendy: 2, soos: 3, bill: 1 }
            }
        ]
    },
    {
        question: "Твое отношение к одиночеству?",
        answers: [
            {
                text: "Нужно для размышлений и работы",
                scores: { dipper: 2, ford: 3, mabel: 0, stan: 1, wendy: 1, soos: 0, bill: 1 }
            },
            {
                text: "Стараюсь избегать, люблю быть в компании",
                scores: { dipper: 1, ford: 0, mabel: 3, stan: 1, wendy: 2, soos: 2, bill: 0 }
            },
            {
                text: "Воспринимаю как возможность отдохнуть",
                scores: { dipper: 1, ford: 1, mabel: 1, stan: 2, wendy: 2, soos: 3, bill: 0 }
            },
            {
                text: "Одиночество - это сила",
                scores: { dipper: 1, ford: 2, mabel: 0, stan: 1, wendy: 0, soos: 0, bill: 3 }
            }
        ]
    },
    {
        question: "Какую роль ты обычно играешь в команде?",
        answers: [
            {
                text: "Мозговой центр и стратег",
                scores: { dipper: 3, ford: 3, mabel: 0, stan: 1, wendy: 1, soos: 0, bill: 2 }
            },
            {
                text: "Душа компании и мотиватор",
                scores: { dipper: 0, ford: 0, mabel: 3, stan: 1, wendy: 2, soos: 2, bill: 0 }
            },
            {
                text: "Практик и исполнитель",
                scores: { dipper: 1, ford: 1, mabel: 1, stan: 2, wendy: 2, soos: 3, bill: 0 }
            },
            {
                text: "Лидер и вдохновитель",
                scores: { dipper: 1, ford: 2, mabel: 1, stan: 2, wendy: 1, soos: 1, bill: 3 }
            }
        ]
    },
    {
        question: "Что для тебя самое страшное?",
        answers: [
            {
                text: "Незнание и неопределенность",
                scores: { dipper: 3, ford: 2, mabel: 1, stan: 1, wendy: 1, soos: 0, bill: 1 }
            },
            {
                text: "Одиночество и потеря близких",
                scores: { dipper: 2, ford: 1, mabel: 3, stan: 2, wendy: 2, soos: 3, bill: 0 }
            },
            {
                text: "Финансовая нестабильность",
                scores: { dipper: 0, ford: 1, mabel: 0, stan: 3, wendy: 2, soos: 1, bill: 0 }
            },
            {
                text: "Потеря контроля и власти",
                scores: { dipper: 1, ford: 2, mabel: 0, stan: 1, wendy: 0, soos: 0, bill: 3 }
            }
        ]
    }
];


const characters = {
    dipper: {
        name: "Диппер Пайнс",
        image: "images/dipper-pines.png",
        description: "Ты - любознательный и смелый исследователь! Как и Диппер, ты обладаешь острым умом, любовью к тайнам и невероятной преданностью своим близким. Ты всегда готов бросить вызов неизвестности и докопаться до истины, даже если это связано с риском.",
        traits: [
            "Любознательный и умный",
            "Верный друг и брат", 
            "Смелый исследователь",
            "Обладатель Дневника №3",
            "Всегда ищет ответы на загадки"
        ]
    },
    mabel: {
        name: "Мейбл Пайнс",
        image: "images/mabel-pines.png",
        description: "Ты - лучик солнца в этом мире! Как Мейбл, ты оптимистична, креативна и полна энтузиазма. Твоя любовь к жизни заразительна, а способность находить радость в мелочах вдохновляет окружающих. Свитеры, единороги и вечеринки - это твой стиль!",
        traits: [
            "Оптимистичная и веселая",
            "Творческая личность",
            "Обожает свитеры и единорогов",
            "Лучшая сестра",
            "Верит в любовь и дружбу"
        ]
    },
    stan: {
        name: "Дядя Стэн",
        image: "images/stan-pines.png",
        description: "Ты - практичный и предприимчивый! Как Стэнли Пайнс, ты знаешь цену деньгам и не брезгуешь сомнительными аферами. Но под этой грубоватой внешностью скрывается золотое сердце и готовность сделать всё для семьи.",
        traits: [
            "Практичный и предприимчивый",
            "Мастер афер и обмана",
            "Имеет золотое сердце",
            "Предан семье",
            "Владелец Хижины Чудовищ"
        ]
    },
    ford: {
        name: "Дядя Форд",
        image: "images/ford-pines.png",
        description: "Ты - гениальный ученый и исследователь! Как Стэнфорд Пайнс, твой ум постоянно ищет новые горизонты для изучения. Ты посвящаешь жизнь науке и разгадке величайших тайн вселенной, даже если это опасно.",
        traits: [
            "Гениальный ученый",
            "Автор дневников",
            "Бесконечно любознательный",
            "Исследователь параллельных измерений",
            "Имеет шесть пальцев"
        ],
    },
    wendy: {
        name: "Венди",
        image: "images/wendy.png",
        description: "Ты - крутая и независимая! Как Венди, ты излучаешь уверенность и не следуешь за толпой. Ты ценишь свободу, приключения и честность. С тобой никогда не бывает скучно, и ты всегда готова к новым вызовам.",
        traits: [
            "Крутая и независимая",
            "Любит приключения",
            "Работает в Хижине Чудовищ",
            "Обладает отличным чувством юмора",
            "Ценит искренность"
        ]
    },
    soos: {
        name: "Зус",
        image: "images/soos.png",
        description: "Ты - душа компании и верный друг! Как Зус, ты добр, отзывчив и всегда готов прийти на помощь. Твое сердце открыто для всех, а оптимизм не знает границ. Ты веришь в чудеса и всегда находишь повод для улыбки.",
        traits: [
            "Добрый и отзывчивый",
            "Верный друг",
            "Мастер на все руки",
            "Любит видеоигры и сэндвичи",
            "Будущий мистер Загадочности"
        ]
    },
    bill: {
        name: "Билл Шифр",
        image: "images/bill-cipher.png",
        description: "Опасно! Ты - загадочная и могущественная сила! Как Билл Шифр, ты обладаешь невероятной харизмой и стремишься к абсолютной власти. Твой ум остёр как бритва, а амбиции не знают границ. Помни: с великой силой приходит великая ответственность!",
        traits: [
            "Невероятно могущественный",
            "Мастер манипуляций",
            "Стремится к хаосу и власти",
            "Обладает космическим знанием",
            "Не стоит заключать с ним сделку!"
        ]
    }
};

// Переменные для управления тестом
let currentQuestion = 0;
let userAnswers = [];
let characterScores = {
    dipper: 0,
    mabel: 0,
    stan: 0,
    ford: 0,
    wendy: 0,
    soos: 0,
    bill: 0
};

// Элементы DOM
const quizContent = document.getElementById('quizContent');
const progressBar = document.getElementById('progressBar');
const questionCounter = document.getElementById('questionCounter');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const submitBtn = document.getElementById('submitBtn');
const resultContainer = document.getElementById('resultContainer');
const resultActions = document.getElementById('resultActions');

// Функция для перехода на главную страницу
function goToHome() {
    if (confirm('Вы уверены, что хотите перейти на главную страницу? Весь прогресс теста будет потерян.')) {
        window.location.href = 'index.html';
    }
}

// Инициализация теста
function initQuiz() {
    userAnswers = new Array(quizQuestions.length).fill(null);
    // Сбрасываем scores
    characterScores = { dipper: 0, mabel: 0, stan: 0, ford: 0, wendy: 0, soos: 0, bill: 0 };
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
                        ${answer.text}
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
    
    // Добавляем очки за выбранный ответ
    const selectedAnswer = quizQuestions[currentQuestion].answers[answerIndex];
    for (const character in selectedAnswer.scores) {
        characterScores[character] += selectedAnswer.scores[character];
    }
    
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

// Определение результата
function calculateResult() {
    // Находим персонажа с максимальным количеством очков
    let maxScore = -1;
    let resultCharacter = 'dipper';
    
    for (const character in characterScores) {
        if (characterScores[character] > maxScore) {
            maxScore = characterScores[character];
            resultCharacter = character;
        }
    }
    
    return resultCharacter;
}

// Показ результатов
function showResults() {
    const resultCharacterKey = calculateResult();
    const character = characters[resultCharacterKey];
    
    // Создаем HTML для результата
    const resultHTML = `
        <div class="result-title">Поздравляем!</div>
        <div class="character-name">${character.name}</div>
        <img src="${character.image}" alt="${character.name}" class="character-image" 
             onerror="this.src='https://via.placeholder.com/200/1a5276/ffffff?text=${character.name.split(' ')[0]}'">
        <div class="character-description">
            ${character.description}
        </div>
        <div class="traits-list">
            <h4>Твои черты:</h4>
            <ul>
                ${character.traits.map(trait => `<li>${trait}</li>`).join('')}
            </ul>
        </div>
        <div class="share-result">
            <p><strong>Поделись результатом с друзьями!</strong></p>
            <button class="restart-btn" onclick="shareResult()">📤 Поделиться</button>
        </div>
    `;
    
    resultContainer.innerHTML = resultHTML;
    resultContainer.style.display = 'block';
    quizContent.style.display = 'none';
    document.querySelector('.quiz-navigation').style.display = 'none';
    document.querySelector('.quiz-progress').style.display = 'none';
    resultActions.style.display = 'block';
}

// Функция для поделиться результатом
function shareResult() {
    const character = characters[calculateResult()];
    const shareText = `Я прошел тест "Кто ты из Гравити Фолз" и мой результат: ${character.name}! Пройди и ты: ${window.location.href}`;
    
    if (navigator.share) {
        navigator.share({
            title: 'Мой результат теста Гравити Фолз',
            text: shareText,
            url: window.location.href
        });
    } else {
        // Копирование в буфер обмена
        navigator.clipboard.writeText(shareText).then(() => {
            alert('Результат скопирован в буфер обмена! Поделись им в соцсетях!');
        });
    }
}

// Перезапуск теста
function restartQuiz() {
    currentQuestion = 0;
    userAnswers = new Array(quizQuestions.length).fill(null);
    characterScores = { dipper: 0, mabel: 0, stan: 0, ford: 0, wendy: 0, soos: 0, bill: 0 };
    
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
window.shareResult = shareResult;
