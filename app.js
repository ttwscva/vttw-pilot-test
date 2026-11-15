// ... (保留上方原有的 questionBank 等變數) ...

// DOM 元素新增
const candidateScreen = document.getElementById('candidate-screen');
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const questionsContainer = document.getElementById('questions-container');
const timerElement = document.getElementById('timer');
const timeDisplay = document.getElementById('time-display');
const scoreDisplay = document.getElementById('score-display');
const resultCandidateInfo = document.getElementById('result-candidate-info');

// 儲存考生資料
let candidateData = { name: "", id: "" };

// 事件監聽新增
document.getElementById('confirm-info-btn').addEventListener('click', confirmCandidateInfo);
document.getElementById('start-btn').addEventListener('click', startExam);
document.getElementById('submit-btn').addEventListener('click', submitExam);
document.getElementById('retry-btn').addEventListener('click', resetExam);

// 確認考生資訊並進入規則畫面
function confirmCandidateInfo() {
    const nameInput = document.getElementById('candidate-name').value.trim();
    const idInput = document.getElementById('candidate-id').value.trim();
    
    if (nameInput === "" || idInput === "") {
        alert("請輸入考生姓名與證號！");
        return;
    }
    
    // 紀錄考生資訊
    candidateData.name = nameInput;
    candidateData.id = idInput;
    
    // 切換畫面
    candidateScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
}

// ... (保留原本的 startExam, renderQuestions, startTimer, updateTimeDisplay, submitExam, resetExam 函數) ...
