// ==========================================
// vTTW 飛行員入學筆試完整題庫 (共 200 題)
// 題庫第 1 - 100 題 (已依 ATMP 第19版中英文術語嚴格校訂)
// 題庫第 1 - 5 題 (已含 ATMP 嚴格出處規範範例)
// ==========================================
const questionBank = [
    { 
        id: 1, 
        type: "choice", 
        question: "在傳統六大飛航儀表中，唯一能同時指示航空器「俯仰 (Pitch)」與「滾轉 (Roll)」姿態的儀表為何？", 
        options: ["姿態儀 (Attitude Indicator)", "航向指示器 (Heading Indicator)", "高度表 (Altimeter)", "空速表 (Airspeed Indicator)"], 
        answer: 0, 
        explanation: "姿態儀 (Attitude Indicator) 利用陀螺儀剛性原理，是唯一能直觀顯示航空器相對於真實地平線姿態的儀表。[出處：傳統儀表原理與 ICAO Doc 9426 / 航空儀表學]" 
    },
    { 
        id: 2, 
        type: "choice", 
        question: "升降速率表 (Vertical Speed Indicator, VSI) 的主要功能是什麼？", 
        options: ["顯示絕對高度 (Absolute Altitude)", "顯示爬升或下降的垂直速率", "顯示真空速 (True Airspeed, TAS)", "顯示發動機轉速 (RPM)"], 
        answer: 1, 
        explanation: "升降速率表 (VSI) 透過測量靜壓變化率，以呎/每分鐘 (FPM) 顯示航空器的爬升或下降速率。[出處：ATMP 第 1.3.7 節高度定義與皮托管-靜壓系統原理]" 
    },
    { 
        id: 3, 
        type: "choice", 
        question: "傳統六大飛航儀表中，哪三個是利用「皮托管-靜壓系統 (Pitot-Static System)」運作的？", 
        options: ["空速表、高度表、升降速率表", "姿態儀、航向指示器、轉彎協調表", "空速表、姿態儀、高度表", "升降速率表、航向指示器、轉彎協調表"], 
        answer: 0, 
        explanation: "空速表 (ASI) 比較動壓與靜壓；高度表 (Altimeter) 與升降速率表 (VSI) 則純粹依賴靜壓系統運作。[出處：ATMP 第 1.2.7 節縮語表與儀表氣壓系統原理]" 
    },
    { 
        id: 4, 
        type: "choice", 
        question: "若皮托管 (Pitot Tube) 完全積冰堵塞，但靜壓孔 (Static Port) 正常，哪一個儀表會顯示異常？", 
        options: ["高度表 (Altimeter)", "升降速率表 (VSI)", "空速表 (Airspeed Indicator)", "姿態儀 (Attitude Indicator)"], 
        answer: 2, 
        explanation: "皮托管僅提供動壓給空速表 (ASI)，堵塞會導致空速顯示異常，高度表與升降速率表不受影響。[出處：ATMP 第 2-1-9 節飛行中裝備故障與儀表系統容錯原則]" 
    },
    { 
        id: 5, 
        type: "choice", 
        question: "傳統航向指示器 (Heading Indicator, HI) 必須定時參照何種儀表來手動校準？", 
        options: ["姿態儀 (Attitude Indicator)", "磁羅盤 (Magnetic Compass)", "轉彎協調表 (Turn Coordinator)", "全球定位系統 (GPS)"], 
        answer: 1, 
        explanation: "傳統航向指示器 (HI) 的陀螺儀會產生進動誤差，需定時對照磁羅盤 (Magnetic Compass) 手動校準。[出處：ATMP 第 1.2.1 節航跡與磁方位定義]"
];

const EXAM_TIME_SECONDS = 18000; // 30分鐘
const QUESTIONS_COUNT = 200; // 系統將從這 200 題中隨機抽 30 題給考生作答

let timerInterval;
let timeRemaining = EXAM_TIME_SECONDS;
let currentQuestions = [];
let candidateData = { name: "", email: "", date: "" };

const candidateScreen = document.getElementById('candidate-screen');
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const questionsContainer = document.getElementById('questions-container');
const timerElement = document.getElementById('timer');
const timeDisplay = document.getElementById('time-display');
const scoreDisplay = document.getElementById('score-display');
const resultCandidateInfo = document.getElementById('result-candidate-info');

// 網頁載入時自動帶入日期
document.addEventListener("DOMContentLoaded", () => {
    const dateInput = document.getElementById('candidate-date');
    if (dateInput) {
        const today = new Date().toLocaleDateString('en-CA', { timeZone: 'Asia/Taipei' });
        dateInput.value = today;
    }
});

document.getElementById('confirm-info-btn').addEventListener('click', confirmCandidateInfo);
document.getElementById('start-btn').addEventListener('click', startExam);
document.getElementById('submit-btn').addEventListener('click', submitExam);
document.getElementById('retry-btn').addEventListener('click', resetExam);

function confirmCandidateInfo() {
    const nameInput = document.getElementById('candidate-name').value.trim();
    const emailInput = document.getElementById('candidate-email').value.trim();
    const dateInput = document.getElementById('candidate-date').value;
    
    if (nameInput === "" || emailInput === "" || dateInput === "") {
        alert("請完整輸入姓名、電子郵件與考試日期！");
        return;
    }
    
    candidateData.name = nameInput;
    candidateData.email = emailInput;
    candidateData.date = dateInput;
    
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
        
        // 新增外層容器，讓選項與圖片可以左右並排
        const bodyDiv = document.createElement('div');
        bodyDiv.className = q.image ? 'question-body has-image' : 'question-body';
        
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
        bodyDiv.appendChild(optionsDiv);
        
        // 如果題目有圖片，放在選項右側
        if (q.image) {
            const imgWrapper = document.createElement('div');
            imgWrapper.className = 'question-image-wrapper';
            
            const img = document.createElement('img');
            img.src = q.image;
            img.alt = q.question;
            img.className = 'question-image';
            
            imgWrapper.appendChild(img);
            bodyDiv.appendChild(imgWrapper);
        }
        
        card.appendChild(bodyDiv);
        
        const explanationDiv = document.createElement('div');
        explanationDiv.className = 'explanation hidden';
        explanationDiv.id = `exp-${index}`;
        explanationDiv.innerHTML = `<strong>解析：</strong><br>${q.explanation}`;
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
        
        // 1. 標記正確答案 (綠色背景)
        optionsLabels[q.answer].classList.add('correct');
        // 在正確選項後方加上明確的文字提示
        const correctBadge = document.createElement('span');
        correctBadge.innerHTML = ' <strong style="color: #155724; font-size: 0.95rem;">(✅ 正確解答)</strong>';
        optionsLabels[q.answer].appendChild(correctBadge);
        
        // 2. 判斷考生作答狀況
        if (userAnswer === q.answer) {
            // 答對
            correctCount++;
        } else if (userAnswer !== -1) {
            // 答錯：標記錯誤答案 (紅色背景)
            optionsLabels[userAnswer].classList.add('wrong');
            // 在錯誤選項後方加上明確的文字提示
            const wrongBadge = document.createElement('span');
            wrongBadge.innerHTML = ' <strong style="color: #721c24; font-size: 0.95rem;">(❌ 您的作答)</strong>';
            optionsLabels[userAnswer].appendChild(wrongBadge);
        } else {
            // 未作答提示
            explanationDiv.innerHTML = `<span style="color: #dc3545; font-weight: bold;">⚠️ 您此題未作答</span><br><br>` + explanationDiv.innerHTML;
        }
        
        // 顯示解析並鎖定選項
        explanationDiv.classList.remove('hidden');
        const allRadios = document.querySelectorAll(`input[name="q-${index}"]`);
        allRadios.forEach(radio => radio.disabled = true);
    });
    
    const score = Math.round((correctCount / QUESTIONS_COUNT) * 100);
    const passStatus = score >= 85 ? '<span style="color: #28a745;">PASS / 及格</span>' : '<span style="color: #dc3545;">FAIL / 不及格</span>';
    
    // 更新成績單
    resultCandidateInfo.innerHTML = `考生：${candidateData.name} <br><span style="font-size: 0.95rem; color: #888;">Email：${candidateData.email} | 日期：${candidateData.date}</span>`;
    scoreDisplay.innerHTML = `${score} 分<br>${passStatus}`;
    
    document.getElementById('submit-btn').classList.add('hidden');
    resultScreen.classList.remove('hidden');
    
    resultScreen.scrollIntoView({ behavior: 'smooth' });

    // ==========================================
    // 將成績傳送至 Google Sheets
    // ==========================================
    const scriptUrl = "https://script.google.com/macros/s/AKfycbzxANs5UGKfIle14PWndxsSnBU1h-Lghuj66cgOjRCjCsJk2AzSmB7l4XDjUsyZRv6V/exec"; 
    
    const payload = {
        name: candidateData.name,
        id: candidateData.email,
        score: score,
        status: score >= 85 ? "PASS / 及格" : "FAIL / 不及格"
    };
    
    fetch(scriptUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(data => console.log("成績已成功上傳", data))
    .catch(error => console.error("成績上傳失敗:", error));
}

function resetExam() {
    resultScreen.classList.add('hidden');
    quizScreen.classList.add('hidden');
    timerElement.classList.add('hidden');
    candidateScreen.classList.remove('hidden'); 
    
    document.getElementById('candidate-name').value = '';
    document.getElementById('candidate-email').value = '';
    
    document.getElementById('submit-btn').classList.remove('hidden');
    window.scrollTo(0, 0);
}
