# vTTW 虛擬台灣虎航 - 飛行員筆試系統

> **Gemini AI 協作規範 (Instructions for Gemini)**
> 當使用者要求修改、重構或擴充本專案程式碼時，Gemini **必須嚴格遵守**以下「不可修改」與「輸出格式」規則：

## 🚫 絕對禁止修改的項目 (DO NOT MODIFY)

1. **Google Sheets 成績上傳邏輯與 Webhook 網址 (`app.js`)**：
   - 嚴禁修改 `submitExam()` 函式中的 `scriptUrl` (`https://script.google.com/macros/s/.../exec`)、`payload` 欄位名稱 (`name`, `id`, `score`, `status`) 與 `fetch()` 傳送邏輯。
2. **頁面結構與核心 DOM ID (`index.html`)**：
   - 嚴禁更動以下 HTML 元素 ID，以免導致 `app.js` 綁定失效：
     - 畫面區塊：`#candidate-screen`, `#start-screen`, `#quiz-screen`, `#result-screen`
     - 考生表單：`#candidate-name`, `#candidate-email`, `#candidate-date`, `#confirm-info-btn`
     - 測驗控制：`#timer`, `#time-display`, `#questions-container`, `#submit-btn`, `#score-display`, `#retry-btn`
3. **品牌視覺與靜態資源路徑 (`index.html` / `style.css` / `app.js`)**：
   - 嚴禁替換或刪除 `assets/favicon.1.png`、`assets/浩二.png`、`assets/A350外觀特徵.png` 及背景浮水印設定。
4. **台北時區自動日期邏輯 (`app.js`)**：
   - 嚴禁移除或修改 `setTodayDate()` 函式中使用 `timeZone: 'Asia/Taipei'` 自動帶入今日日期的機制。
5. **考題專業術語與解析格式 (`app.js` 內的 `questionBank`)**：
   - 所有航空專業術語必須維持 **中華民國民航局《飛航管理程序 (ATMP) 第 19 版》** 與 **《民用機場設計暨運作規範》** 之**中英文並陳標準**。
   - 除非使用者明確要求，否則禁止擅自更改現有 `questionBank` 的題目陣列結構（`id`, `type`, `question`, `options`, `answer`, `explanation`）與及格分數標準（`85` 分）。

## ✅ 允許修改與協助的範圍
- 新增題目至 `questionBank` 陣列尾端（維持既有欄位格式與 ATMP 第 19 版用語）。
- 調整 `style.css` 的響應式排版（RWD）或視覺細節（不得影響既有功能）。
- 優化 `app.js` 內的題目／選項隨機演算法（須確保不破壞計時與算分邏輯）。
