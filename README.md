# Virtual Tigerair Taiwan (vTTW) - Pilot Written Exam System

> **Collaboration & Code Protection Rules (Instructions for Gemini)**
> Whenever the user asks to modify, refactor, debug, or expand this repository, Gemini **MUST strictly adhere** to the following "DO NOT MODIFY" and formatting rules:

## Strictly Prohibited Modifications (DO NOT MODIFY)

1. **Google Sheets Score Submission & Webhook URL (`app.js`)**:
   - **DO NOT** alter, delete, or obfuscate the `scriptUrl` (`https://script.google.com/macros/s/AKfycbzxANs5UGKfIle14PWndxsSnBU1h-Lghuj66cgOjRCjCsJk2AzSmB7l4XDjUsyZRv6V/exec`), the `payload` keys (`name`, `id`, `score`, `status`), or the `fetch()` POST logic inside `submitExam()`.
2. **Core HTML Structure & DOM Element IDs (`index.html`)**:
   - **DO NOT** rename or remove any of the following critical DOM IDs bound to `app.js`:
     - Screen containers: `#candidate-screen`, `#start-screen`, `#quiz-screen`, `#result-screen`
     - Candidate form inputs & button: `#candidate-name`, `#candidate-email`, `#candidate-date`, `#confirm-info-btn`
     - Exam controls & displays: `#timer`, `#time-display`, `#questions-container`, `#submit-btn`, `#score-display`, `#retry-btn`, `#result-candidate-info`
3. **Branding & Static Asset Paths (`index.html` / `style.css` / `app.js`)**:
   - **DO NOT** replace, rename, or remove references to `assets/favicon.1.png`, `assets/浩二.png`, `assets/A350外觀特徵.png`, or the centered background watermark styling (`Virtual_Tigerair_Taiwan_LOGO_cht_02.png`).
4. **Taipei Timezone Auto-Date Function (`app.js`)**:
   - **DO NOT** remove or alter `setTodayDate()`, which automatically populates `#candidate-date` with the current date in `Asia/Taipei` timezone upon page load and exam reset.
5. **Aviation Terminology & Question Bank Schema (`app.js` -> `questionBank`)**:
   - All aviation terminology in questions, options, and explanations **MUST** maintain bilingual (Traditional Chinese + English) alignment with **Taiwan CAA Air Traffic Management Procedures (ATMP, 19th Edition / CHG-19)** and **Civil Aerodrome Design and Operation Standards**.
   - **DO NOT** alter the existing `questionBank` object schema (`id`, `type`, `question`, `options`, `answer`, `explanation`, optional `image`) or the passing score threshold (`85` points) unless explicitly instructed by the user.

## ✅ Permitted Modifications
- Appending new aviation exam questions to the end of `questionBank` following the exact existing schema and CAA ATMP CHG-19 bilingual terminology.
- Enhancing responsive CSS (`style.css`) for mobile portrait/landscape views without introducing unwanted scrollbars or breaking layout containers.
- Optimizing non-destructive frontend UX features (e.g., option shuffling, unanswered question warnings, or `localStorage` auto-save) while keeping all prohibited items intact.
