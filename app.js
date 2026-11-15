// ==========================================
// vTTW 飛行員入學筆試題庫 (共30題)
// 涵蓋: 儀表、風向、跑道、五邊、標示、機型、氣象與人因工程
// ==========================================
const questionBank = [
    // --- 1. 六大儀表基礎辨識 ---
    {
        id: 1, type: "choice",
        question: "在傳統六大儀表中，唯一能同時指示飛機「俯仰 (Pitch)」與「滾轉 (Roll)」姿態的儀表為何？",
        options: ["姿態儀 (Attitude Indicator)", "航向指示器 (Heading Indicator)", "高度表 (Altimeter)", "空速表 (Airspeed Indicator)"],
        answer: 0,
        explanation: "依據飛行原理，姿態儀利用陀螺儀剛性原理，是駕駛艙中唯一能直觀顯示飛機相對於地平線姿態的儀表。"
    },
    {
        id: 2, type: "choice",
        question: "升降速率表 (VSI) 的主要功能是什麼？",
        options: ["顯示飛機目前的絕對高度", "顯示飛機爬升或下降的速率", "顯示飛機的真空速", "顯示引擎的轉速"],
        answer: 1,
        explanation: "VSI (Vertical Speed Indicator) 透過測量靜壓的變化率，以呎/每分鐘 (fpm) 為單位顯示飛機的垂直爬升或下降率。"
    },
    {
        id: 3, type: "choice",
        question: "六大儀表中，哪三個是利用「皮托管-靜壓系統 (Pitot-Static System)」來運作的？",
        options: ["空速表、高度表、升降速率表", "姿態儀、航向指示器、轉彎協調表", "空速表、姿態儀、高度表", "升降速率表、航向指示器、轉彎協調表"],
        answer: 0,
        explanation: "皮托靜壓系統依賴氣壓變化運作。空速表比較動壓與靜壓；高度表與升降速率表則純粹依賴靜壓測量。"
    },

    // --- 2. 風向辨別 起飛順逆風問題 ---
    {
        id: 4, type: "choice",
        question: "飛機起飛與降落時，一般應選擇何種風向以縮短滑跑距離並增加升力？",
        options: ["順風", "逆風", "側風", "無風"],
        answer: 1,
        explanation: "逆風能增加流經機翼的相對氣流速度 (Airspeed)，使飛機在較低的地速下即可獲得足夠的升力，進而縮短跑道使用距離。"
    },
    {
        id: 5, type: "choice",
        question: "若 METAR 報文顯示機場目前風向風速為 090/15，請問飛機最適合使用哪一條跑道起飛？",
        options: ["27號跑道", "09號跑道", "36號跑道", "18號跑道"],
        answer: 1,
        explanation: "風向 090 代表風「從」正東方吹來。為了逆風起飛，飛機必須朝向 090 (正東) 飛行，因此應選擇 09號跑道。"
    },
    {
        id: 6, type: "tf",
        question: "順風起飛會導致飛機的地速 (Ground Speed) 較高，因此需要更長的跑道才能達到起飛所需的空速。",
        options: ["對", "錯"],
        answer: 0,
        explanation: "順風會降低相對氣流速度，飛機必須在地面加速到更高的地速才能產生足夠升力，大幅增加衝場距離甚至有衝出跑道的風險。"
    },

    // --- 3. 跑道數字含義 ---
    {
        id: 7, type: "choice",
        question: "跑道號碼 \"27\" 代表該跑道的磁方位角大約是多少度？",
        options: ["27度", "90度", "270度", "360度"],
        answer: 2,
        explanation: "跑道號碼是取其磁方位角的前兩位數。27 號跑道代表指向磁方位 270 度 (正西)。"
    },
    {
        id: 8, type: "choice",
        question: "若某大型機場有兩條平行的 36 跑道，通常會如何命名標示以做區分？",
        options: ["36與37", "36L與36R", "36A與36B", "北36與南36"],
        answer: 1,
        explanation: "平行跑道會以 L (Left)、R (Right) 或 C (Center) 來區分，如桃園機場的 05L/23R 與 05R/23L。"
    },
    {
        id: 9, type: "choice",
        question: "當你正對著 18 號跑道進場時，你的飛機機頭是指向哪個地理方位？",
        options: ["正東", "正南", "正西", "正北"],
        answer: 1,
        explanation: "18 號跑道代表磁方位 180 度，即正南方。"
    },

    // --- 4. 五邊形飛行 ---
    {
        id: 10, type: "choice",
        question: "在標準機場目視航線 (Traffic Pattern) 中，與跑道平行但飛行方向與降落方向「相反」的航段稱為？",
        options: ["逆風邊 (Upwind)", "側風邊 (Crosswind)", "三邊/順風邊 (Downwind)", "底邊 (Base)"],
        answer: 2,
        explanation: "順風邊 (Downwind leg) 是平行於跑道但航向相反的航段，機師通常在此階段執行著陸前檢查表並準備放起落架。"
    },
    {
        id: 11, type: "choice",
        question: "在五邊航線中，轉向最終進場 (Final Approach) 前的那一個航段稱為什麼？",
        options: ["側風邊 (Crosswind)", "順風邊 (Downwind)", "四邊/底邊 (Base)", "離場邊 (Departure)"],
        answer: 2,
        explanation: "底邊 (Base leg) 是連接順風邊與最終進場邊的垂直航段，是調整進場高度與速度的關鍵階段。"
    },
    {
        id: 12, type: "tf",
        question: "依據國際民航規定，標準的機場目視航線 (Traffic Pattern) 轉彎方向預設為右轉航線。",
        options: ["對", "錯"],
        answer: 1,
        explanation: "錯。標準的五邊航線預設為「左轉 (Left-hand traffic)」，除非航圖上有特別標示該跑道採用右轉航線 (RP)。"
    },

    // --- 5. 風標辨識 ---
    {
        id: 13, type: "choice",
        question: "觀察機場的風向袋 (Windsock) 時，若風向袋的大口朝向東方，尾部指向西方，代表目前吹什麼風？",
        options: ["東風", "西風", "南風", "北風"],
        answer: 0,
        explanation: "風向是指風「從」哪裡吹來。風從東邊灌入大口，將風向袋吹向西邊，因此是東風。"
    },
    {
        id: 14, type: "choice",
        question: "風向袋除了能指示風向外，還能提供飛行員何種重要資訊？",
        options: ["氣溫", "概略的風速", "氣壓", "能見度"],
        answer: 1,
        explanation: "風向袋被吹起的水平程度可以概略判斷風速。當風向袋完全水平挺直時，通常代表風速達到 15 節以上。"
    },

    // --- 6. 跑道標示辨識 ---
    {
        id: 15, type: "choice",
        question: "機場內的標線如果是「黃色」的，通常代表這是什麼區域？",
        options: ["一般跑道", "滑行道 (Taxiway) 與停機坪", "跑道觸地區", "瞄準點標線"],
        answer: 1,
        explanation: "根據 ICAO 規範，跑道上的標線 (中線、邊線、觸地區) 為白色；滑行道與停機坪上的指引標線為黃色。"
    },
    {
        id: 16, type: "choice",
        question: "跑道入口處的「鋼琴鍵」標線 (Threshold Markings) 條紋數量通常代表什麼含義？",
        options: ["跑道的長度", "跑道的寬度", "跑道的厚度", "可承受的最大重量"],
        answer: 1,
        explanation: "鋼琴鍵標線的數量對應跑道的寬度。例如：45 公尺寬的跑道通常有 12 條線，60 公尺寬的跑道有 16 條線。"
    },
    {
        id: 17, type: "choice",
        question: "若滑行道上出現兩條實線與兩條虛線並排的黃線，且虛線在靠近跑道的那一側，這代表什麼？",
        options: ["跑道等待位置 (Holding Position)", "滑行道中線", "跑道末端", "飛機停放區"],
        answer: 0,
        explanation: "這是跑道等待線。飛機從實線端接近時必須完全停止並取得塔台許可；從虛線端 (跑道端) 脫離時則不需許可即可越過。"
    },

    // --- 7. Flaps用途 ---
    {
        id: 18, type: "choice",
        question: "飛機在起飛與降落時放下襟翼 (Flaps) 的主要目的為何？",
        options: ["增加巡航速度", "增加升力與阻力，以降低起降所需的速度", "減少燃油消耗", "增加飛機的配平能力"],
        answer: 1,
        explanation: "襟翼能改變機翼的弧度與面積，在低速時產生大量升力，同時產生的阻力有助於陡峭進場而不會加速。"
    },
    {
        id: 19, type: "tf",
        question: "襟翼放下的角度越大，產生的阻力增加幅度會遠大於升力的增加幅度，因此大角度襟翼通常僅用於降落階段。",
        options: ["對", "錯"],
        answer: 0,
        explanation: "正確。起飛時通常只使用前幾段襟翼以獲取升力；降落時放至全襟翼 (Full Flaps)，利用其產生的龐大阻力來減速。"
    },
    {
        id: 20, type: "choice",
        question: "依據 A320 規範，如果在飛行中出現超速 (Overspeed)，最不應該採取的動作是什麼？",
        options: ["收起減速板 (Speedbrakes)", "減少發動機推力", "強行放下襟翼 (Flaps) 來減速", "拉起機頭增加俯仰角"],
        answer: 2,
        explanation: "襟翼有嚴格的速度限制 (Vfe)。在超速時放下襟翼會導致結構損壞甚至撕裂機翼，應使用減速板或調整推力/俯仰。"
    },

    // --- 8. 基礎機型辨識 ---
    {
        id: 21, type: "choice",
        question: "虛擬台灣虎航 (vTTW) 目前營運的主力機型屬於哪一個系列？",
        options: ["波音 B737 系列", "空中巴士 A320 系列 (ceo/neo)", "龐巴迪 CRJ 系列", "巴西航空工業 E-Jet 系列"],
        answer: 1,
        explanation: "vTTW 以 Airbus A320ceo 與 A320neo 家族作為主力營運機隊。"
    },
    {
        id: 22, type: "choice",
        question: "如何從外觀上最快速分辨 Boeing 747 與 Boeing 777？",
        options: ["747有兩具引擎而777有四具引擎", "747具備雙層客艙的「駝峰」設計，777為單層設計", "777有小翼而747沒有", "747是螺旋槳飛機"],
        answer: 1,
        explanation: "B747 擁有四具發動機以及標誌性的機首雙層駝峰設計；B777 則是大型雙發動機廣體客機。"
    },
    {
        id: 23, type: "choice",
        question: "A320ceo 與 A320neo 在外觀與系統上最顯著的差異通常是什麼？",
        options: ["機身總長度不同", "neo 具備更大尺寸的新世代引擎與原廠翼端帆 (Sharklets)", "主起落架輪胎數量不同", "駕駛艙玻璃形狀不同"],
        answer: 1,
        explanation: "NEO 代表 New Engine Option，其引擎涵道比更大(外觀更粗壯)，且標配向上的翼端帆，大幅提升燃油效率。"
    },

    // --- 9. 機場設施辨識 ---
    {
        id: 24, type: "choice",
        question: "PAPI (精確進場航道指示器) 顯示「兩紅兩白」燈號時，代表飛機目前的進場狀態為何？",
        options: ["高度太高", "高度太低", "位於正確的下滑道上 (通常是3度)", "偏離跑道中心線"],
        answer: 2,
        explanation: "PAPI 燈號：四白太高、四紅太低。兩紅兩白代表飛機正準確地飛在標準下滑道 (Glide Path) 上。"
    },
    {
        id: 25, type: "choice",
        question: "機場夜間標示中，滑行道中線 (Taxiway Centerline) 的燈光顏色是什麼？",
        options: ["藍色", "綠色", "白色", "紅色"],
        answer: 1,
        explanation: "滑行道中線為綠燈，邊線為藍燈；跑道中線為白燈 (後半段會變紅白交替)，邊線為白燈。"
    },
    {
        id: 26, type: "tf",
        question: "機場的旋轉燈 (Airport Beacon) 若交替閃爍白燈與綠燈，代表該機場為民用陸上機場。",
        options: ["對", "錯"],
        answer: 0,
        explanation: "正確。民用陸上機場是白綠交替；軍用機場是雙白一綠；水上機場是白黃交替。"
    },

    // --- 10. 人因工程 ---
    {
        id: 27, type: "choice",
        question: "在航空人因工程中，\"SHELL\" 模型不包含下列哪一個元素？",
        options: ["Software (軟體/程序)", "Hardware (硬體)", "Environment (環境)", "Language (語言)"],
        answer: 3,
        explanation: "SHELL 模型的 L 代表 Liveware (人/團隊)，其餘為 Software, Hardware, Environment。"
    },
    {
        id: 28, type: "choice",
        question: "根據瑞士起司理論 (Swiss Cheese Model)，飛安事故的發生通常是因為什麼原因？",
        options: ["單一機師的嚴重失誤", "飛機設計的致命瑕疵", "多重防護機制剛好同時失效，漏洞連成一線", "天候過於惡劣"],
        answer: 2,
        explanation: "瑞士起司理論指出，系統中有多層防護(起司)，每一層都有隨機的漏洞。當各層的漏洞剛好重疊時，就會導致事故發生。"
    },

    // --- 11. 氣象 ---
    {
        id: 29, type: "choice",
        question: "航空氣象報文 METAR 中，看到 \"CAVOK\" 代表什麼意思？",
        options: ["機場關閉", "天氣良好 (Ceiling and Visibility OK)", "暴風雨來襲", "能見度低於1000公尺"],
        answer: 1,
        explanation: "CAVOK 代表能見度大於 10 公里，且 5000 呎以下無雲，無重要天氣現象發生，是極佳的飛行天氣。"
    },
    {
        id: 30, type: "choice",
        question: "飛機在進場時，若遇到強烈的微下擊暴流 (Microburst)，通常會先經歷強烈的迎面風，接著會發生什麼危險情況？",
        options: ["風向急遽轉為強烈順風導致空速銳減，飛機掉高度", "飛機無預警向上爬升", "引擎吸入冰雹熄火", "座艙失壓"],
        answer: 0,
        explanation: "Microburst 會產生強烈下沉氣流並向外擴散。飛機穿越時會先遇到逆風(空速突增)，接著瞬間變為強烈順風(空速銳減、升力喪失)，極易導致墜機。"
    }
];
// ==========================================
// 將 CONST QUESTIONS_COUNT 改為 30
// const QUESTIONS_COUNT = 30; 
// ==========================================
