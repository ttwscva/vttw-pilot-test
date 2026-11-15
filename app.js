// ... (submitExam 的其他程式碼)
resultScreen.scrollIntoView({ behavior: 'smooth' });

// ==========================================
// 將成績傳送至 Google Sheets
// ==========================================
// 將下方的網址替換為您剛剛在 Google Apps Script 取得的「網頁應用程式網址」
const scriptUrl = "請把這整段中文字換成您的GAS網址"; 

const payload = {
    name: candidateData.name,
    id: candidateData.id,
    score: score,
    status: score >= 85 ? "PASS / 及格" : "FAIL / 不及格"
};

fetch(scriptUrl, {
    method: 'POST',
    // 注意：Google Apps Script 接收跨網域 POST 請求時，使用 'text/plain' 可避免 CORS 預檢錯誤
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(payload)
})
.then(response => response.json())
.then(data => {
    console.log("成績已成功上傳至 Google Sheets", data);
})
.catch(error => {
    console.error("成績上傳失敗:", error);
});
// ==========================================
