// vTTW 專屬題庫範例
const questionBank = [
    {
        id: 1, type: "tf",
        question: "依據 vAMSYS 派飛規範，飛行員在執行航班時，若遇到 VATSIM/IVAO 管制員指示與系統航路不符，應以航管指示為優先。",
        options: ["對", "錯"],
        answer: 0,
        explanation: "航管指示永遠優先於 FMS 預設航路，以確保空域安全與隔離。"
    },
    {
        id: 2, type: "choice",
        question: "在 Airbus A320 系列客機中，正常情況下 Auto Thrust (A/THR) 在起飛時何時會啟用？",
        options: ["推力推至 TOGA 或 FLX/MCT 卡位時", "起落架收起時", "高度達到 400 呎時", "按下 FCU 上的 A/THR 按鈕時"],
        answer: 0,
        explanation: "當油門桿推至 TOGA 或 FLX/MCT (Flex) 卡位時，A/THR 會自動預作動 (Armed)。"
    },
    {
        id: 3, type: "tf",
        question: "A320neo 由於引擎升級，其滑行 (Taxi) 時僅需單發動機運轉 (Single Engine Taxi) 即可達到節能效果，vTTW 鼓勵在許可情況下執行此操作。",
        options: ["對", "錯"],
        answer: 0,
        explanation: "Single Engine Taxi 是真實世界與虛擬航空常見的節油程序。"
    }
];

const EXAM_TIME_SECONDS = 1800; // 30分鐘
const QUESTIONS_COUNT = 3; // 測驗題數

let timerInterval;
let timeRemaining = EXAM_TIME_SECONDS;
let currentQuestions = [];
let candidateData = { name: "", id: "" }; // 儲存考生資料

const candidateScreen = document.getElementById('candidate-screen');
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const questionsContainer = document.getElementById('questions-container');
const timerElement = document.getElementById('timer');
const timeDisplay = document.getElementById('time-display');
const scoreDisplay = document.getElementById('score-display');
const resultCandidateInfo = document.getElementById('result-candidate-info');

document.getElementById('confirm-info-btn').addEventListener('click', confirmCandidateInfo);
document.getElementById('start-btn').addEventListener('click', startExam);
document.getElementById('submit-btn').addEventListener('click', submitExam);
document.getElementById('retry-btn').addEventListener('click', resetExam);

function confirmCandidateInfo() {
    const nameInput = document.getElementById('candidate-name').value.trim();
    const idInput = document.getElementById('candidate-id').value.trim();
    
    if (nameInput === "" || idInput === "") {
        alert("請輸入考生姓名與證號！");
        return;
    }
    
    candidateData.name = nameInput;
    candidateData.id = idInput;
    
    candidateScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
}

function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

function startExam() {
    startScreen.classList.add('hidden');
    resultScreen.classList.add('hidden'); 
    quizScreen.classList.remove('hidden');
    timerElement.classList.remove('hidden');
    
    const shuffledBank = shuffle([...questionBank]);
    currentQuestions = shuffledBank.slice(0, QUESTIONS_COUNT);
    
    renderQuestions();
    startTimer();
}

function renderQuestions() {
    questionsContainer.innerHTML = '';
    currentQuestions.forEach((q, index) => {
        const card = document.createElement('div');
        card.className = 'question-card';
        card.id = `question-${index}`;
        
        const title = document.createElement('div');
        title.className = 'question-title';
        title.textContent = `${index + 1}. ${q.question}`;
        card.appendChild(title);
        
        const optionsDiv = document.createElement('div');
        optionsDiv.className = 'options';
        q.options.forEach((opt, optIndex) => {
            const label = document.createElement('label');
            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = `q-${index}`; 
            radio.value = optIndex;
            
            label.appendChild(radio);
            label.appendChild(document.createTextNode(opt));
            optionsDiv.appendChild(label);
        });
        card.appendChild(optionsDiv);
        
        const explanationDiv = document.createElement('div');
        explanationDiv.className = 'explanation hidden';
        explanationDiv.id = `exp-${index}`;
        explanationDiv.innerHTML = `<strong>A320 / vTTW 規範解析：</strong><br>${q.explanation}`;
        card.appendChild(explanationDiv);
        
        questionsContainer.appendChild(card);
    });
}

function startTimer() {
    timeRemaining = EXAM_TIME_SECONDS;
    updateTimeDisplay();
    clearInterval(timerInterval);
    
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

function submitExam() {
    clearInterval(timerInterval); 
    let correctCount = 0;
    
    currentQuestions.forEach((q, index) => {
        const selected = document.querySelector(`input[name="q-${index}"]:checked`);
        const optionsLabels = document.querySelectorAll(`#question-${index} label`);
        const explanationDiv = document.getElementById(`exp-${index}`);
        const userAnswer = selected ? parseInt(selected.value) : -1;
        
        optionsLabels[q.answer].classList.add('correct');
        
        if (userAnswer === q.answer) {
            correctCount++;
        } else if (userAnswer !== -1) {
            optionsLabels[userAnswer].classList.add('wrong');
        }
        
        explanationDiv.classList.remove('hidden');
        const allRadios = document.querySelectorAll(`input[name="q-${index}"]`);
        allRadios.forEach(radio => radio.disabled = true);
    });
    
    const score = Math.round((correctCount / QUESTIONS_COUNT) * 100);
    const passStatus = score >= 85 ? '<span style="color: #28a745;">PASS / 及格</span>' : '<span style="color: #dc3545;">FAIL / 不及格</span>';
    
    resultCandidateInfo.innerHTML = `考生：${candidateData.name} (證號：${candidateData.id})`;
    scoreDisplay.innerHTML = `${score} 分<br>${passStatus}`;
    
    document.getElementById('submit-btn').classList.add('hidden');
    resultScreen.classList.remove('hidden');
    
    resultScreen.scrollIntoView({ behavior: 'smooth' });
}

function resetExam() {
    resultScreen.classList.add('hidden');
    quizScreen.classList.add('hidden');
    timerElement.classList.add('hidden');
    candidateScreen.classList.remove('hidden'); // 回到考生資訊登錄畫面
    
    // 清空上次輸入的資料
    document.getElementById('candidate-name').value = '';
    document.getElementById('candidate-id').value = '';
    document.getElementById('candidate-dob').value = '';
    
    document.getElementById('submit-btn').classList.remove('hidden');
    window.scrollTo(0, 0);
}
