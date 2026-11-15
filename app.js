// ==========================================
// vTTW 飛行員入學筆試題庫 (共30題)
// ==========================================
const questionBank = [
    { id: 1, type: "choice", question: "在傳統六大儀表中，唯一能同時指示飛機「俯仰 (Pitch)」與「滾轉 (Roll)」姿態的儀表為何？", options: ["姿態儀 (Attitude Indicator)", "航向指示器 (Heading Indicator)", "高度表 (Altimeter)", "空速表 (Airspeed Indicator)"], answer: 0, explanation: "依據飛行原理，姿態儀利用陀螺儀剛性原理，是駕駛艙中唯一能直觀顯示飛機相對於地平線姿態的儀表。" },
    { id: 2, type: "choice", question: "升降速率表 (VSI) 的主要功能是什麼？", options: ["顯示飛機目前的絕對高度", "顯示飛機爬升或下降的速率", "顯示飛機的真空速", "顯示引擎的轉速"], answer: 1, explanation: "VSI (Vertical Speed Indicator) 透過測量靜壓的變化率，以呎/每分鐘 (fpm) 為單位顯示飛機的垂直爬升或下降率。" },
    { id: 3, type: "choice", question: "六大儀表中，哪三個是利用「皮托管-靜壓系統 (Pitot-Static System)」來運作的？", options: ["空速表、高度表、升降速率表", "姿態儀、航向指示器、轉彎協調表", "空速表、姿態儀、高度表", "升降速率表、航向指示器、轉彎協調表"], answer: 0, explanation: "皮托靜壓系統依賴氣壓變化運作。空速表比較動壓與靜壓；高度表與升降速率表則純粹依賴靜壓測量。" },
    { id: 4, type: "choice", question: "飛機起飛與降落時，一般應選擇何種風向以縮短滑跑距離並增加升力？", options: ["順風", "逆風", "側風", "無風"], answer: 1, explanation: "逆風能增加流經機翼的相對氣流速度，使飛機在較低的地速下即可獲得足夠升力。" },
    { id: 5, type: "choice", question: "若 METAR 報文顯示機場目前風向風速為 090/15，請問飛機最適合使用哪一條跑道起飛？", options: ["27號跑道", "09號跑道", "36號跑道", "18號跑道"], answer: 1, explanation: "風向 090 代表風「從」正東方吹來。為了逆風起飛，飛機應選擇指向 090 (正東) 的 09號跑道。" },
    { id: 6, type: "choice", question: "順風起飛會導致飛機的地速較高，因此需要更長的跑道才能達到起飛所需的空速，此說法是否正確？", options: ["正確", "錯誤"], answer: 0, explanation: "正確。順風會降低相對氣流速度，必須在地面加速到更高的地速才能產生足夠升力，大幅增加衝場距離。" },
    { id: 7, type: "choice", question: "跑道號碼 \"27\" 代表該跑道的磁方位角大約是多少度？", options: ["27度", "90度", "270度", "360度"], answer: 2, explanation: "跑道號碼是取其磁方位角的前兩位數。27 號跑道代表指向磁方位 270 度 (正西)。" },
    { id: 8, type: "choice", question: "若某大型機場有兩條平行的 36 跑道，通常會如何命名標示以做區分？", options: ["36與37", "36L與36R", "36A與36B", "北36與南36"], answer: 1, explanation: "平行跑道會以 L (Left)、R (Right) 或 C (Center) 來區分。" },
    { id: 9, type: "choice", question: "當你正對著 18 號跑道進場時，你的飛機機頭是指向哪個地理方位？", options: ["正東", "正南", "正西", "正北"], answer: 1, explanation: "18 號跑道代表磁方位 180 度，即正南方。" },
    { id: 10, type: "choice", question: "在標準機場目視航線 (Traffic Pattern) 中，與跑道平行但飛行方向與降落方向「相反」的航段稱為？", options: ["逆風邊 (Upwind)", "側風邊 (Crosswind)", "三邊/順風邊 (Downwind)", "底邊 (Base)"], answer: 2, explanation: "順風邊 (Downwind leg) 是平行於跑道但航向相反的航段。" },
    { id: 11, type: "choice", question: "在五邊航線中，轉向最終進場前的那一個航段稱為什麼？", options: ["側風邊", "順風邊", "四邊/底邊 (Base)", "離場邊"], answer: 2, explanation: "底邊 (Base leg) 是連接順風邊與最終進場邊的垂直航段。" },
    { id: 12, type: "choice", question: "依據國際民航規定，標準的機場目視航線預設為右轉航線，此說法是否正確？", options: ["正確", "錯誤"], answer: 1, explanation: "錯誤。標準的五邊航線預設為「左轉 (Left-hand traffic)」，除非航圖有特別標示 (RP)。" },
    { id: 13, type: "choice", question: "觀察機場風向袋時，若風向袋的大口朝向東方，尾部指向西方，代表目前吹什麼風？", options: ["東風", "西風", "南風", "北風"], answer: 0, explanation: "風是從東邊灌入大口，因此是東風。" },
    { id: 14, type: "choice", question: "風向袋除了能指示風向外，還能提供飛行員何種重要資訊？", options: ["氣溫", "概略的風速", "氣壓", "能見度"], answer: 1, explanation: "風向袋被吹起的水平程度可以概略判斷風速。" },
    { id: 15, type: "choice", question: "機場內的標線如果是「黃色」的，通常代表這是什麼區域？", options: ["一般跑道", "滑行道 (Taxiway) 與停機坪", "跑道觸地區", "瞄準點標線"], answer: 1, explanation: "跑道標線為白色；滑行道與停機坪的標線為黃色。" },
    { id: 16, type: "choice", question: "跑道入口處的「鋼琴鍵」標線條紋數量通常代表什麼含義？", options: ["跑道的長度", "跑道的寬度", "跑道的厚度", "最大重量"], answer: 1, explanation: "鋼琴鍵標線的數量對應跑道的寬度。" },
    { id: 17, type: "choice", question: "滑行道上出現兩條實線與兩條虛線並排的黃線，且虛線在靠近跑道那一側，代表什麼？", options: ["跑道等待位置", "滑行道中線", "跑道末端", "停機區"], answer: 0, explanation: "這是跑道等待線，從實線端接近必須停止並取得許可。" },
    { id: 18, type: "choice", question: "飛機在起降時放下襟翼 (Flaps) 的主要目的為何？", options: ["增加巡航速度", "增加升力與阻力，以降低起降速度", "減少燃油消耗", "增加配平能力"], answer: 1, explanation: "襟翼在低速時產生大量升力，同時阻力有助於陡峭進場而不會加速。" },
    { id: 19, type: "choice", question: "大角度襟翼產生的阻力增加幅度遠大於升力，因此通常僅用於降落階段，此說法正確嗎？", options: ["正確", "錯誤"], answer: 0, explanation: "正確。降落時會放至全襟翼，利用其龐大阻力來減速。" },
    { id: 20, type: "choice", question: "若飛行中出現超速 (Overspeed)，最「不」應該採取的動作是什麼？", options: ["收起減速板", "減少推力", "強行放下襟翼減速", "拉起機頭"], answer: 2, explanation: "襟翼有嚴格速度限制(Vfe)，超速時放下會導致結構受損。" },
    { id: 21, type: "choice", question: "虛擬台灣虎航 (vTTW) 目前營運的主力機型屬於哪一個系列？", options: ["波音 B737 系列", "空中巴士 A320 系列", "CRJ 系列", "E-Jet 系列"], answer: 1, explanation: "vTTW 以 Airbus A320ceo 與 A320neo 作為主力。" },
    { id: 22, type: "choice", question: "如何從外觀上最快速分辨 B747 與 B777？", options: ["引擎數量不同", "747具備雙層客艙的駝峰設計，777為單層", "小翼的有無", "螺旋槳不同"], answer: 1, explanation: "B747 擁有機首雙層駝峰設計；B777 為單層雙發動機。" },
    { id: 23, type: "choice", question: "A320ceo 與 A320neo 在外觀上最顯著的差異通常是什麼？", options: ["機身總長度", "neo 具備更大尺寸的新引擎與翼端帆", "主起落架", "駕駛艙玻璃"], answer: 1, explanation: "NEO 的引擎涵道比更大(外觀粗壯)，且標配向上的翼端帆。" },
    { id: 24, type: "choice", question: "PAPI 顯示「兩紅兩白」燈號時，代表飛機目前的狀態為何？", options: ["高度太高", "高度太低", "位於正確的下滑道上", "偏離中心線"], answer: 2, explanation: "兩紅兩白代表飛機正準確地飛在標準下滑道上。" },
    { id: 25, type: "choice", question: "機場夜間標示中，滑行道中線 (Taxiway Centerline) 的燈光顏色是什麼？", options: ["藍色", "綠色", "白色", "紅色"], answer: 1, explanation: "滑行道中線為綠燈，邊線為藍燈。" },
    { id: 26, type: "choice", question: "機場的旋轉燈若交替閃爍白燈與綠燈，代表該機場為民用陸上機場，正確嗎？", options: ["正確", "錯誤"], answer: 0, explanation: "正確。民用陸上機場是白綠交替。" },
    { id: 27, type: "choice", question: "在航空人因工程中，\"SHELL\" 模型「不」包含下列哪一個元素？", options: ["Software", "Hardware", "Environment", "Language"], answer: 3, explanation: "SHELL 的 L 代表 Liveware (人/團隊)，不包含 Language。" },
    { id: 28, type: "choice", question: "根據瑞士起司理論，飛安事故的發生通常是因為什麼原因？", options: ["單一機師失誤", "飛機設計瑕疵", "多重防護機制剛好同時失效，漏洞連成一線", "天候惡劣"], answer: 2, explanation: "當各層防護的漏洞剛好重疊時，就會導致事故發生。" },
    { id: 29, type: "choice", question: "航空氣象報文 METAR 中，看到 \"CAVOK\" 代表什麼意思？", options: ["機場關閉", "天氣良好", "暴風雨", "能見度低"], answer: 1, explanation: "CAVOK 代表能見度佳、無低雲且無重要天氣現象。" },
    { id: 30, type: "choice", question: "飛機進場遇到微下擊暴流 (Microburst)，先經歷強烈迎面風後，接著會發生什麼危險？", options: ["風向急遽轉為強烈順風導致空速銳減，飛機掉高度", "無預警向上爬升", "引擎熄火", "座艙失壓"], answer: 0, explanation: "飛機穿越時會瞬間變為強烈順風(空速銳減、升力喪失)，極易導致墜機。" }
];

const EXAM_TIME_SECONDS = 1800; // 30分鐘
const QUESTIONS_COUNT = 30; // 測驗題數設為 30 題

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
    .then(data => console.log("成績已成功上傳至 Google Sheets", data))
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
