// 模擬題庫（後續可替換為外部 JSON 檔）
const questionBank = [
    {
        id: 1, type: "tf",
        question: "駕駛汽車行經行人穿越道時，遇有行人穿越，應暫停讓行人優先通過。",
        options: ["對", "錯"],
        answer: 0,
        explanation: "汽車行經行人穿越道有行人穿越時，必須暫停讓行人優先通過。"
    },
    {
        id: 2, type: "choice",
        question: "汽車行駛於高速公路時，規定的內側車道通常為下列何者？",
        options: ["超車道", "小型車專用道", "大貨車專用道", "機車專用道"],
        answer: 0,
        explanation: "高速公路多車道路段之內側車道為超車道。"
    },
    {
        id: 3, type: "tf",
        question: "閃光紅燈表示「停車再開」，車輛應減速接近，先停止於交岔路口前，讓幹道車優先通行後認為安全時，方得續行。",
        options: ["對", "錯"],
        answer: 0,
        explanation: "閃光紅燈的確代表停車再開。"
    }
];

// 系統參數設定
const EXAM_TIME_SECONDS = 1800; // 30分鐘
const QUESTIONS_COUNT = 3; // 實務上可設為 40 題，此處配合示範題庫數量

// 狀態變數
let timerInterval;
let timeRemaining = EXAM_TIME_SECONDS;
let currentQuestions = [];

// DOM 元素
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const questionsContainer = document.getElementById('questions-container');
const timerElement = document.getElementById('timer');
const timeDisplay = document.getElementById('time-display');
const scoreDisplay = document.getElementById('score-display');

// 事件監聽
document.getElementById('start-btn').addEventListener('click', startExam);
document.getElementById('submit-btn').addEventListener('click', submitExam);
document.getElementById('retry-btn').addEventListener('click', resetExam);

// 洗牌演算法 (Fisher-Yates)
function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

// 開始測驗
function startExam() {
    startScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    timerElement.classList.remove('hidden');
    
    // 從題庫抽題
    const shuffledBank = shuffle([...questionBank]);
    currentQuestions = shuffledBank.slice(0, QUESTIONS_COUNT);
    
    renderQuestions();
    startTimer();
}

// 渲染題目
function renderQuestions() {
    questionsContainer.innerHTML = '';
    currentQuestions.forEach((q, index) => {
        const card = document.createElement('div');
        card.className = 'question-card';
        card.id = `question-${index}`;
        
        // 題目文字
        const title = document.createElement('div');
        title.className = 'question-title';
        title.textContent = `${index + 1}. ${q.question}`;
        card.appendChild(title);
        
        // 選項
        const optionsDiv = document.createElement('div');
        optionsDiv.className = 'options';
        q.options.forEach((opt, optIndex) => {
            const label = document.createElement('label');
            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = `q-${index}`; // 同一題共用同一個 name
            radio.value = optIndex;
            
            label.appendChild(radio);
            label.appendChild(document.createTextNode(opt));
            optionsDiv.appendChild(label);
        });
        card.appendChild(optionsDiv);
        
        // 解析區塊 (預設隱藏)
        const explanationDiv = document.createElement('div');
        explanationDiv.className = 'explanation hidden';
        explanationDiv.id = `exp-${index}`;
        explanationDiv.textContent = `解析：${q.explanation}`;
        card.appendChild(explanationDiv);
        
        questionsContainer.appendChild(card);
    });
}

// 計時器邏輯
function startTimer() {
    timeRemaining = EXAM_TIME_SECONDS;
    updateTimeDisplay();
    
    timerInterval = setInterval(() => {
        timeRemaining--;
        updateTimeDisplay();
        
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            alert("時間到！系統將自動交卷。");
            submitExam();
        }
    }, 1000);
}

function updateTimeDisplay() {
    const minutes = Math.floor(timeRemaining / 60).toString().padStart(2, '0');
    const seconds = (timeRemaining % 60).toString().padStart(2, '0');
    timeDisplay.textContent = `${minutes}:${seconds}`;
}

// 交卷結算
function submitExam() {
    clearInterval(timerInterval); // 停止計時
    
    let correctCount = 0;
    
    currentQuestions.forEach((q, index) => {
        const selected = document.querySelector(`input[name="q-${index}"]:checked`);
        const optionsLabels = document.querySelectorAll(`#question-${index} label`);
        const explanationDiv = document.getElementById(`exp-${index}`);
        
        const userAnswer = selected ? parseInt(selected.value) : -1;
        
        // 顯示正確答案背景
        optionsLabels[q.answer].classList.add('correct');
        
        if (userAnswer === q.answer) {
            correctCount++;
        } else if (userAnswer !== -1) {
            // 答錯標記紅色
            optionsLabels[userAnswer].classList.add('wrong');
        }
        
        // 顯示解析
        explanationDiv.classList.remove('hidden');
        
        // 鎖定所有選項防止修改
        const allRadios = document.querySelectorAll(`input[name="q-${index}"]`);
        allRadios.forEach(radio => radio.disabled = true);
    });
    
    // 計算分數 (假設滿分100，按題數平均)
    const score = Math.round((correctCount / QUESTIONS_COUNT) * 100);
    const passStatus = score >= 85 ? '<span style="color: #28a745;">及格</span>' : '<span style="color: #d9534f;">不及格</span>';
    
    scoreDisplay.innerHTML = `您的分數：${score} 分<br>${passStatus}`;
    
    // 切換介面
    document.getElementById('submit-btn').classList.add('hidden');
    resultScreen.classList.remove('hidden');
}

// 重新測驗
function resetExam() {
    resultScreen.classList.add('hidden');
    quizScreen.classList.add('hidden');
    timerElement.classList.add('hidden');
    startScreen.classList.remove('hidden');
    document.getElementById('submit-btn').classList.remove('hidden');
}
