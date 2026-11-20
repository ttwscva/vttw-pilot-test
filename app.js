// ==========================================
// vTTW 飛行員入學筆試完整題庫 (共 200 題)
// ==========================================
const questionBank = [
    { id: 1, type: "choice", question: "在傳統六大儀表中，唯一能同時指示飛機「俯仰 (Pitch)」與「滾轉 (Roll)」姿態的儀表為何？", options: ["姿態儀", "航向指示器", "高度表", "空速表"], answer: 0, explanation: "姿態儀利用陀螺儀剛性原理，是唯一能直觀顯示飛機相對於真實地平線姿態的儀表。" },
    { id: 2, type: "choice", question: "升降速率表 (VSI) 的主要功能是什麼？", options: ["顯示絕對高度", "顯示爬升或下降的速率", "顯示真空速", "顯示引擎轉速"], answer: 1, explanation: "VSI 透過測量靜壓變化率，以呎/每分鐘顯示飛機的垂直速率。" },
    { id: 3, type: "choice", question: "六大儀表中，哪三個是利用「皮托管-靜壓系統」來運作的？", options: ["空速表、高度表、升降速率表", "姿態儀、航向指示器、轉彎協調表", "空速表、姿態儀、高度表", "升降速率表、航向指示器、轉彎協調表"], answer: 0, explanation: "空速表比較動壓與靜壓；高度表與升降速率表純粹依賴靜壓。" },
    { id: 4, type: "choice", question: "若皮托管完全結冰堵塞，但靜壓孔正常，哪一個儀表會異常？", options: ["高度表", "升降速率表", "空速表", "姿態儀"], answer: 2, explanation: "皮托管僅提供動壓給空速表，堵塞會導致空速顯示錯誤。" },
    { id: 5, type: "choice", question: "傳統航向指示器必須定時參照何種儀表來手動校準？", options: ["姿態儀", "磁羅盤", "轉彎協調表", "GPS"], answer: 1, explanation: "航向指示器陀螺儀會產生進動誤差，需對照磁羅盤校準。" },
    { id: 6, type: "choice", question: "飛機起飛與降落時，一般應選擇何種風向？", options: ["順風", "逆風", "側風", "無風"], answer: 1, explanation: "逆風能增加相對氣流速度，縮短跑道滑跑距離。" },
    { id: 7, type: "choice", question: "若 METAR 顯示風向風速 270/15，最適合使用哪一條跑道？", options: ["27號", "09號", "36號", "18號"], answer: 0, explanation: "風向 270 代表風從正西吹來，應選擇 27 號跑道逆風起飛。" },
    { id: 8, type: "choice", question: "順風起飛會導致需要更長的跑道，此說法是否正確？", options: ["正確", "錯誤"], answer: 0, explanation: "順風會降低相對氣流速度，需加速到更高地速才能起飛。" },
    { id: 9, type: "choice", question: "低空進場遭遇「順風轉逆風」風切，飛機會產生什麼反應？", options: ["空速驟減下墜", "空速驟增向上竄升", "強烈滾轉", "失去方向舵"], answer: 1, explanation: "瞬間轉逆風會讓相對氣流增加，升力大增，飛機被向上抬起。" },
    { id: 10, type: "choice", question: "若風向與跑道夾角 90 度，側風分量會是？", options: ["一半", "零", "等於總風速", "70%"], answer: 2, explanation: "正側風夾角 90 度，全部風速皆為側風分量。" },
    { id: 11, type: "choice", question: "跑道號碼是依據什麼命名的？", options: ["總長度", "建造順序", "指向的磁方位角捨去個位數", "真方位角"], answer: 2, explanation: "跑道號碼取其磁方位角的前兩位數。" },
    { id: 12, type: "choice", question: "兩條平行的 36 跑道，如何標示區分？", options: ["36與37", "36L與36R", "36A與36B", "北36與南36"], answer: 1, explanation: "平行跑道以 L (Left)、R (Right) 區分。" },
    { id: 13, type: "choice", question: "跑道 05 的相反方向跑道號碼是多少？", options: ["15", "23", "30", "32"], answer: 1, explanation: "相反方向相差 180 度 (050 + 180 = 230)。" },
    { id: 14, type: "choice", question: "正對 09 號跑道進場時，機頭指向哪個方位？", options: ["正東", "正南", "正西", "正北"], answer: 0, explanation: "09 號跑道代表磁方位 090 度，即正東方。" },
    { id: 15, type: "choice", question: "高緯度機場跑道號碼若依「真北」命名，會加上什麼字母？", options: ["M", "N", "T", "G"], answer: 2, explanation: "高緯度磁偏角過大改用真北 (True North)，加上 T。" },
    { id: 16, type: "choice", question: "目視航線中，與降落方向「相反」的航段稱為？", options: ["逆風邊", "側風邊", "順風邊", "底邊"], answer: 2, explanation: "順風邊 (Downwind) 方向與降落跑道完全相反。" },
    { id: 17, type: "choice", question: "從順風邊轉向最終進場邊中間的航段稱為？", options: ["側風邊", "順風邊", "底邊 (Base)", "離場邊"], answer: 2, explanation: "底邊是連接順風邊與最終進場邊的航段。" },
    { id: 18, type: "choice", question: "標準機場目視航線預設轉彎方向為何？", options: ["全右轉", "全左轉", "依風向", "依機長喜好"], answer: 1, explanation: "標準預設為「左轉」，機長坐左側視野較好。" },
    { id: 19, type: "choice", question: "輕型飛機的標準目視航線飛行高度 (AGL) 通常是多少？", options: ["500 呎", "1000 呎", "1500 呎", "2000 呎"], answer: 1, explanation: "輕航機標準目視航線高度為 1000 呎 AGL。" },
    { id: 20, type: "choice", question: "起飛後沿跑道中心線延伸方向爬升的航線稱為？", options: ["順風邊", "底邊", "逆風邊 / 離場邊", "側風邊"], answer: 2, explanation: "直線爬升階段稱為逆風邊或離場邊。" },
    { id: 21, type: "choice", question: "風向袋大口朝東，尾部指西，吹什麼風？", options: ["東風", "西風", "南風", "北風"], answer: 0, explanation: "風從東邊灌入大口，因此是東風。" },
    { id: 22, type: "choice", question: "風向袋除了指示風向，還能提供何種資訊？", options: ["氣溫", "概略的風速", "氣壓", "能見度"], answer: 1, explanation: "風向袋被吹起的水平程度可概略判斷風速。" },
    { id: 23, type: "choice", question: "風向袋每一截條紋大約代表多少節風速？", options: ["1 節", "3 節", "10 節", "15 節"], answer: 1, explanation: "風向袋吹起一截約代表 3 節，全滿約 15 節。" },
    { id: 24, type: "choice", question: "風向袋劇烈左右擺動代表什麼？", options: ["雷陣雨", "強烈陣風與風向不穩", "濃霧", "結冰"], answer: 1, explanation: "擺動是地面陣風與風向多變的直觀表現。" },
    { id: 25, type: "choice", question: "四面體 (Tetrahedron) 尖端指向的作用？", options: ["指示目前建議起降方向", "顯示氣壓", "測量降雨", "指向正北"], answer: 0, explanation: "四面體尖端指向風吹來方向，提示應使用的起降方向。" },
    { id: 26, type: "choice", question: "機場內「黃色」標線通常代表什麼區域？", options: ["一般跑道", "滑行道與停機坪", "跑道觸地區", "瞄準點"], answer: 1, explanation: "跑道標線為白色；滑行道與停機坪標線為黃色。" },
    { id: 27, type: "choice", question: "跑道入口「鋼琴鍵」標線數量代表什麼含義？", options: ["長度", "寬度", "厚度", "最大重量"], answer: 1, explanation: "鋼琴鍵標線數量對應跑道的物理寬度。" },
    { id: 28, type: "choice", question: "滑行道兩實兩虛黃線，虛線靠近跑道，代表什麼？", options: ["跑道等待位置", "滑行道中線", "跑道末端", "停機區"], answer: 0, explanation: "這是跑道等待線，實線端接近必須停止並取得許可。" },
    { id: 29, type: "choice", question: "跑道上兩塊巨大的白色實心長方形標線稱為？", options: ["跑道邊線", "位移跑道入口", "瞄準點", "防雷達區"], answer: 2, explanation: "瞄準點是視覺進場時對準的最佳觸地點參考。" },
    { id: 30, type: "choice", question: "跑道前端有白色箭頭指向橫線，代表該區域是？", options: ["防吹翼", "位移跑道入口", "直升機坪", "封閉區"], answer: 1, explanation: "位移跑道入口可用於滑行或起飛，但禁止降落觸地。" },
    { id: 31, type: "choice", question: "起降放下襟翼的主要目的為何？", options: ["增加巡航速度", "增加升阻力，降低起降速度", "省油", "增加配平"], answer: 1, explanation: "襟翼在低速時產生大量升力，阻力有助於減速。" },
    { id: 32, type: "choice", question: "大角度襟翼通常僅用於哪個飛行階段？", options: ["起飛", "巡航", "降落", "爬升"], answer: 2, explanation: "降落時需要較陡角度下降但不增加空速，全襟翼阻力符合需求。" },
    { id: 33, type: "choice", question: "超速時強行放下襟翼會造成什麼後果？", options: ["倒飛", "熄火", "結構受損甚至機翼撕裂", "斷電"], answer: 2, explanation: "超過 Vfe 放下襟翼會導致嚴重結構破壞。" },
    { id: 34, type: "choice", question: "空速表上代表「襟翼操作速度範圍」的顏色是？", options: ["綠色", "黃色", "白色", "紅色"], answer: 2, explanation: "白色圓弧代表襟翼可操作速度範圍。" },
    { id: 35, type: "choice", question: "正常起飛爬升，何時收起襟翼？", options: ["離地立刻", "達到安全高度且不斷加速時", "巡航時", "底邊時"], answer: 1, explanation: "必須在具備安全高度且空速增加狀態下逐步收起。" },
    { id: 36, type: "choice", question: "具備雙層客艙「駝峰」設計的客機是？", options: ["A380", "B777", "B747", "MD-11"], answer: 2, explanation: "B747 擁有標誌性的機首前半段雙層駝峰設計。" },
    { id: 37, type: "choice", question: "Cessna 172 屬於哪種機翼設計？", options: ["下單翼", "上單翼", "中單翼", "雙翼"], answer: 1, explanation: "機翼安裝在機艙頂部，屬上單翼設計。" },
    { id: 38, type: "choice", question: "ATR 72 的動力來源是？", options: ["純噴射", "渦輪扇", "渦輪螺旋槳", "活塞"], answer: 2, explanation: "ATR 72 採用渦輪螺旋槳發動機。" },
    { id: 39, type: "choice", question: "水平尾翼在垂直尾翼頂端，形成什麼尾翼？", options: ["V 型", "十字型", "T 型", "雙垂直"], answer: 2, explanation: "稱為 T-tail (T型尾翼)。" },
    { id: 40, type: "choice", question: "前三點式與後三點式飛機如何分辨？", options: ["前三點有尾輪", "後三點主輪在前方並有尾輪", "前三點無起落架", "後三點在地面是水平的"], answer: 1, explanation: "後三點機頭上揚有尾輪；前三點有鼻輪，機身水平。" },
    { id: 41, type: "choice", question: "PAPI 顯示「兩紅兩白」代表？", options: ["太高", "太低", "位於正確下滑道", "偏離中心線"], answer: 2, explanation: "兩紅兩白代表正確飛在標準下滑道上。" },
    { id: 42, type: "choice", question: "滑行道邊線燈顏色是？", options: ["藍色", "綠色", "白色", "紅色"], answer: 0, explanation: "滑行道邊線燈為藍色。" },
    { id: 43, type: "choice", question: "旋轉燈交替閃爍白綠燈，代表什麼機場？", options: ["軍用", "水上", "直升", "民用陸上"], answer: 3, explanation: "民用陸上機場是白綠交替。" },
    { id: 44, type: "choice", question: "跑道邊線燈主要長度是什麼顏色？", options: ["黃色", "紅色", "綠色", "白色"], answer: 3, explanation: "跑道邊線燈為白色，末端變黃色。" },
    { id: 45, type: "choice", question: "跑道起點且恆為綠色的燈光稱為？", options: ["末端燈", "跑道入口燈", "進場燈", "著陸區燈"], answer: 1, explanation: "跑道入口燈發出綠光向著進場的飛機。" },
    { id: 46, type: "choice", question: "SHELL 模型不包含？", options: ["Software", "Hardware", "Environment", "Language"], answer: 3, explanation: "L 代表 Liveware (人/團隊)。" },
    { id: 47, type: "choice", question: "瑞士起司理論認為事故原因是？", options: ["單一失誤", "設計瑕疵", "多層防護漏洞連成一線", "天候惡劣"], answer: 2, explanation: "各層防護漏洞重疊導致事故。" },
    { id: 48, type: "choice", question: "雲中感覺轉彎但實際平飛，稱為？", options: ["高山症", "空間迷向", "隧道視覺", "減壓症"], answer: 1, explanation: "缺乏視覺參考導致人體感官受騙。" },
    { id: 49, type: "choice", question: "IMSAFE 中 'M' 代表？", options: ["Money", "Motivation", "Medication (藥物)", "Memory"], answer: 2, explanation: "M 代表 Medication (藥物)。" },
    { id: 50, type: "choice", question: "CRM 核心目的？", options: ["機長獨裁", "有效利用資源提升飛安", "減少成本", "加快登機"], answer: 1, explanation: "改善溝通決策，防止人為失誤。" },
    { id: 51, type: "choice", question: "METAR 中 CAVOK 代表？", options: ["關閉", "天氣良好", "暴風雨", "能見度低"], answer: 1, explanation: "能見度佳且無雲無重要天氣現象。" },
    { id: 52, type: "choice", question: "微下擊暴流會先經歷？", options: ["強烈迎面風", "向左偏航", "熄火", "強烈順風"], answer: 0, explanation: "先遇到強烈逆風，接著瞬間變為強烈順風。" },
    { id: 53, type: "choice", question: "雷雨形成三個條件？", options: ["高壓冷空強風", "水氣、不穩定大氣、舉升力", "乾燥高溫地形", "鋒面海風逆溫"], answer: 1, explanation: "需水氣、不穩定狀態及觸發機制。" },
    { id: 54, type: "choice", question: "氣溫接近露點易發生？", options: ["龍捲風", "亂流", "起霧或低雲", "下雪"], answer: 2, explanation: "水氣飽和凝結成霧或低雲。" },
    { id: 55, type: "choice", question: "結冰對飛機最致命影響？", options: ["增加推力", "破壞氣流降低升力", "玻璃模糊", "增油箱"], answer: 1, explanation: "破壞翼面外型，嚴重降低升力導致失速。" },
    { id: 56, type: "choice", question: "空速表綠色圓弧代表？", options: ["襟翼範圍", "正常操作速度範圍", "警戒範圍", "轉速範圍"], answer: 1, explanation: "代表正常操作速度範圍。" },
    { id: 57, type: "choice", question: "真空系統故障會導致哪兩個儀表失效？", options: ["空速、高度", "姿態儀、航向指示器", "升降速率、轉彎", "高度、姿態"], answer: 1, explanation: "傳統姿態儀與航向指示器依靠真空陀螺儀。" },
    { id: 58, type: "choice", question: "高度表起飛前應調整為何？", options: ["標高", "標準大氣", "當地海平面氣壓 (QNH)", "絕對高度"], answer: 2, explanation: "調整至 QNH 以顯示機場標高。" },
    { id: 59, type: "choice", question: "轉彎協調表下方黑球作用？", options: ["俯仰角", "顯示轉彎時側滑狀態", "燃油", "壓力"], answer: 1, explanation: "指示飛機是否處於協調飛行。" },
    { id: 60, type: "choice", question: "真高度定義？", options: ["距地表高度", "未修正高度", "距平均海平面實際垂直距離", "標準氣壓高度"], answer: 2, explanation: "指距離平均海平面的實際高度。" },
    { id: 61, type: "choice", question: "蟹行法目的是？", options: ["減速", "機首與跑道平行", "抵銷側風偏移對準中心線", "單輪觸地"], answer: 2, explanation: "機首偏轉抵銷風的漂移。" },
    { id: 62, type: "choice", question: "10 節順風降落影響？", options: ["地速增加著陸滑跑長", "地速低易失速", "下降緩慢", "更平穩"], answer: 0, explanation: "增加地速導致煞車距離大幅增加。" },
    { id: 63, type: "choice", question: "風向與跑道夾角 45 度，側風分量約為？", options: ["30%", "50%", "70%", "100%"], answer: 2, explanation: "sin(45°) 約 0.707，側風分量約 70%。" },
    { id: 64, type: "choice", question: "山脈哪側易出現強烈下沉氣流？", options: ["迎風面", "背風面", "山頂", "平谷"], answer: 1, explanation: "背風面產生強烈下沉氣流與亂流。" },
    { id: 65, type: "choice", question: "陣風環境進場，Vref 應調整？", options: ["減半", "不變", "加上陣風差額一半", "加全風速"], answer: 2, explanation: "加陣風差額一半作為安全餘裕補償。" },
    { id: 66, type: "choice", question: "13 號相反跑道標示？", options: ["04", "22", "31", "36"], answer: 2, explanation: "130 + 180 = 310，為 31 號跑道。" },
    { id: 67, type: "choice", question: "磁北極與真北極夾角誤差稱為？", options: ["磁偏角", "羅盤差", "傾角", "進動"], answer: 0, explanation: "磁北與真北角度差異稱為磁偏角。" },
    { id: 68, type: "choice", question: "磁偏角累積變化過大時機場需做什麼？", options: ["重校羅盤", "重鋪", "更改跑道號碼", "關閉"], answer: 2, explanation: "超過一定角度需更改跑道號碼標示。" },
    { id: 69, type: "choice", question: "吹正北風時，04/22 與 13/31 應選哪條？", options: ["04", "22", "13", "31"], answer: 0, explanation: "04 (040度) 距離正北風夾角最小，逆風最大。" },
    { id: 70, type: "choice", question: "方位角 90 度的跑道應標示為？", options: ["9", "09", "N9", "090"], answer: 1, explanation: "低於 10 必須在前面補零，標示 09。" },
    { id: 71, type: "choice", question: "加入目視航線最推薦方式？", options: ["90度底邊", "45度切入順風邊中段", "直接進場", "上方切入"], answer: 1, explanation: "45 度切入順風邊能提供最佳觀察視野。" },
    { id: 72, type: "choice", question: "起飛後何時轉入側風邊？", options: ["離地瞬間", "100呎", "距離航線高度 300 呎以內", "巡航高度"], answer: 2, explanation: "確保安全越障，通常距航線高度 300 呎內轉彎。" },
    { id: 73, type: "choice", question: "五邊同時降落誰有優先權？", options: ["速度快", "晚加入", "高度低且在最終進場邊", "客機"], answer: 2, explanation: "高度低且在最終進場邊的飛機優先。" },
    { id: 74, type: "choice", question: "Touch and Go 是指？", options: ["煞停起飛", "觸地後不減速立即推油門起飛", "低空飛過", "起飛後降落"], answer: 1, explanation: "主輪觸地後不完全減速再次起飛。" },
    { id: 75, type: "choice", question: "最易發生失速螺旋的階段？", options: ["起飛", "轉順風", "底邊轉最終進場", "45度角"], answer: 2, explanation: "Base to Final 低速低高度下轉彎極危險。" },
    { id: 76, type: "choice", question: "無塔台機場航線指示圖 (Segmented Circle) 目的？", options: ["直升機用", "頻率", "視覺化標示各跑道航線方向", "邊界"], answer: 2, explanation: "指示底邊與最終進場邊，確認轉彎方向。" },
    { id: 77, type: "choice", question: "風向袋完全垂直朝下代表？", options: ["強風", "完全無風", "正側風", "下沉氣流"], answer: 1, explanation: "無飄動角度代表風速極低或完全無風。" },
    { id: 78, type: "choice", question: "跑道中線標線樣式？", options: ["實心黃", "虛線白", "實心白", "虛線黃"], answer: 1, explanation: "跑道標線為白，中線為一段段虛線。" },
    { id: 79, type: "choice", question: "跑道起點恆綠燈光？", options: ["末端燈", "入口燈", "進場燈", "著陸燈"], answer: 1, explanation: "跑道入口燈發綠光向進場飛機。" },
    { id: 80, type: "choice", question: "滑行道邊線雙實黃線代表？", options: ["隨意穿越", "單行道", "實體邊界，不可越過進入非鋪裝路面", "進入跑道"], answer: 2, explanation: "代表硬鋪面邊界，越線會陷入草地泥土。" },
    { id: 81, type: "choice", question: "黃底黑字指示牌代表？", options: ["方向", "距離", "停止", "位置指示牌，標示目前所在"], answer: 3, explanation: "黃底黑字是位置指示牌。" },
    { id: 82, type: "choice", question: "紅底白字指示牌代表？", options: ["資訊", "強制指示牌，未獲許可嚴禁越過", "目的地", "位置"], answer: 1, explanation: "強制指示，如跑道等待位置。" },
    { id: 83, type: "choice", question: "跑道末端黃色Ｖ字型代表？", options: ["直升機區", "防吹翼/緩衝區，嚴禁進入滑行", "貴賓", "起點"], answer: 1, explanation: "結構不足以支撐滑行，嚴禁進入。" },
    { id: 84, type: "choice", question: "放下全襟翼主要產生？", options: ["推力", "阻力大於升力，利於陡降減速", "升力大於阻力", "配平"], answer: 1, explanation: "全襟翼產生龐大阻力利於降落減速。" },
    { id: 85, type: "choice", question: "A350 外觀特徵？", image: "assets/A350外觀特徵.png", options: ["單走道", "墨鏡擋風玻璃與彎刀翼端帆", "四引擎", "V型尾"], answer: 1, explanation: "獨特墨鏡邊框與平滑翼尖是 A350 特徵。" },
    { id: 86, type: "choice", question: "B737 機腹特徵？", options: ["主輪外側直接裸露", "三機腹", "履帶", "透明"], answer: 0, explanation: "減重設計，收起後輪胎外側直接貼齊機腹。" },
    { id: 87, type: "choice", question: "後置引擎客機對客艙影響？", options: ["機頭吵", "前半段極度安靜，空氣動力乾淨", "劇震", "無貨物"], answer: 1, explanation: "引擎噪音集中機尾，前中段極度安靜。" },
    { id: 88, type: "choice", question: "單引擎飛機起飛大推力會向左偏，需踩？", options: ["左腳", "右腳方向舵", "雙腳", "不踩"], answer: 1, explanation: "受螺旋槳滑流影響機頭偏左，需踩右舵。" },
    { id: 89, type: "choice", question: "翼端帆主要功能？", options: ["增加重量", "阻擋翼尖高壓，減少渦流與誘導阻力", "裝飾", "超音速"], answer: 1, explanation: "抑制翼尖渦流，大幅降低誘導阻力省油。" },
    { id: 90, type: "choice", question: "VASI 與 PAPI 差異？", options: ["藍紅", "VASI 前後兩排，PAPI 橫向四個燈", "一燈", "一樣"], answer: 1, explanation: "VASI 分前後兩組；PAPI 橫向並排四個。" },
    { id: 91, type: "choice", question: "白天的旋轉燈塔亮起代表？", options: ["貴賓", "施工", "天氣低於目視標準 (實施IFR)", "故障"], answer: 2, explanation: "警告空域實施儀器飛行規則，目視應遠離。" },
    { id: 92, type: "choice", question: "快速脫離道中心線燈號顏色？", options: ["全紅", "綠黃交替", "全藍", "白綠"], answer: 1, explanation: "脫離區間中心線燈為綠黃交替。" },
    { id: 93, type: "choice", question: "高空缺氧危險特徵？", options: ["咳嗽", "感到欣快且喪失判斷力", "變綠", "儀表失靈"], answer: 1, explanation: "初期產生欣快感，患者過度自信而在無痛中昏迷。" },
    { id: 94, type: "choice", question: "深潛後多久內禁止飛行？", options: ["1小", "3小", "至少 12 到 24 小時", "無限制"], answer: 2, explanation: "未足夠時間排氮升空會引發致命減壓症。" },
    { id: 95, type: "choice", question: "更寬的跑道易讓飛行員產生何種錯覺？", options: ["覺得太低而拉高機頭", "倒飛", "移動", "覺得太高"], answer: 0, explanation: "寬跑道大面積會誤判太低，導致下滑道偏高。" },
    { id: 96, type: "choice", question: "FAA 規定血液酒精濃度不得高於？", options: ["0.08%", "0.04%", "0.10%", "0.00%"], answer: 1, explanation: "飲酒後 8 小時或濃度 ≥ 0.04% 嚴禁飛行。" },
    { id: 97, type: "choice", question: "解除急性疲勞唯一方法？", options: ["咖啡", "運動", "充足睡眠", "純氧"], answer: 2, explanation: "睡眠是解除急性疲勞唯一有效處方。" },
    { id: 98, type: "choice", question: "壓力對表現影響？", options: ["無壓力最好", "適度提高表現，過載崩潰", "越快", "只影響情緒"], answer: 1, explanation: "倒U型曲線，適度壓力專注，過載則當機。" },
    { id: 99, type: "choice", question: "晴空亂流常發生於？", options: ["熱帶氣旋", "高空噴射氣流邊緣風切帶", "海風", "高氣壓"], answer: 1, explanation: "常發生在高速噴射氣流與周遭交界區。" },
    { id: 100, type: "choice", question: "逆溫層常伴隨什麼特徵？", options: ["雷雨", "空氣穩定，積聚霧氣低能見度", "狂風", "晴朗"], answer: 1, explanation: "像蓋子壓住汙染與水氣，造成霧霾但平穩。" },
    { id: 101, type: "choice", question: "SIGMET 警告對象？", options: ["小飛機", "直升機", "所有飛機", "無人機"], answer: 2, explanation: "極端危險天氣對所有機型都有致命威脅。" },
    { id: 102, type: "choice", question: "遭遇強烈雷雨胞最安全做法？", options: ["穿過", "下方", "保持至少 20 海里距離避開", "貼雲"], answer: 2, explanation: "必須保持 20 海里安全距離防冰雹與風切。" },
    { id: 103, type: "choice", question: "風切可能發生在？", options: ["對流層頂", "地面100呎", "任何高度，尤其雷雨鋒面", "海洋"], answer: 2, explanation: "可能出現在垂直或水平的任何高度。" },
    { id: 104, type: "choice", question: "北半球科氏力使氣流偏向？", options: ["左", "右偏", "不偏", "上"], answer: 1, explanation: "科氏力使北半球運動物體向右偏轉。" },
    { id: 105, type: "choice", question: "Alto 字首代表什麼雲族？", options: ["高雲", "中雲族", "低雲", "直展雲"], answer: 1, explanation: "Alto 代表中層雲 (Middle Clouds)。" },
    { id: 106, type: "choice", question: "磁羅盤向東平飛加速會？", options: ["短暫指示向北 (ANDS)", "向南", "旋轉", "無影響"], answer: 0, explanation: "加速誤差 (ANDS)，加速時短暫指示向北。" },
    { id: 107, type: "choice", question: "AHRS 主要功能？", options: ["FMS", "取代傳統陀螺儀提供姿態航向", "氣壓", "防撞"], answer: 1, explanation: "利用固態雷射與加速計提供精準姿態。" },
    { id: 108, type: "choice", question: "ADC 大氣資料電腦提供？", options: ["姿態", "燃油", "空速、高度與升降速率", "GPS"], answer: 2, explanation: "處理氣壓溫度，計算空速、高度與垂直速率。" },
    { id: 109, type: "choice", question: "主顯示器失效時依賴？", options: ["手機", "備用儀表", "自動駕駛", "雷達"], answer: 1, explanation: "獨立供電備用儀表提供基本姿態空速高度。" },
    { id: 110, type: "choice", question: "高度表警戒游標設為 DA/MDA 作用？", options: ["放起落架", "提醒未看見跑道需重飛", "煞車", "關引擎"], answer: 1, explanation: "決斷高度視覺提醒，確保進場安全。" },
    { id: 111, type: "choice", question: "地面效應會導致？", options: ["阻力減少，產生浮飄", "升力消失", "無法起飛", "熄火"], answer: 0, explanation: "干擾翼尖渦流，降低誘導阻力產生浮飄。" },
    { id: 112, type: "choice", question: "強側風起飛，駕駛桿應打向？", options: ["背風", "迎風面", "置中", "拉底"], answer: 1, explanation: "副翼打向迎風面抵銷側風掀起機翼趨勢。" },
    { id: 113, type: "choice", question: "大型機後方降落，應選擇觸地點在？", options: ["大型機之前", "大型機觸地點之後", "同一點", "邊緣"], answer: 1, explanation: "大型機觸地後渦流停止，應降落在其後方。" },
    { id: 114, type: "choice", question: "尾流亂流最強烈狀況？", options: ["重型、外型乾淨低速時", "輕型高速", "地面", "超音速"], answer: 0, explanation: "重型、乾淨、低速高攻角時壓力差最大。" },
    { id: 115, type: "choice", question: "LAHSO 程序代表？", options: ["同時起飛", "降落必須在交叉點前煞停等待", "強制重飛", "穿越"], answer: 1, explanation: "允許降落但需在特定點前煞停增吞吐量。" },
    { id: 116, type: "choice", question: "RESA 跑道末端安全區目的？", options: ["停車", "增長", "衝出跑道時提供緩衝降低損害", "除雪"], answer: 2, explanation: "淨空緩衝區，減少衝出跑道人員機體損傷。" },
    { id: 117, type: "choice", question: "跑道兩端號碼相減絕對值是？", options: ["9", "18", "36", "0"], answer: 1, explanation: "相反方向相差 180 度，捨去個位數即 18。" },
    { id: 118, type: "choice", question: "直升機 H 標誌朝向代表？", options: ["正北", "對齊主要盛行風或進場方向", "航廈", "隨意"], answer: 1, explanation: "對齊進場路徑或風向，協助駕駛對準最佳軌跡。" },
    { id: 119, type: "choice", question: "重飛 (Go-around) 首要動作？", options: ["收起落架", "呼叫", "增加推力建立正爬升", "放全襟翼"], answer: 2, explanation: "首要任務停止下降並爬升，建立正爬升率。" },
    { id: 120, type: "choice", question: "客機標準滑降角通常為？", options: ["1度", "3度", "5度", "10度"], answer: 1, explanation: "3 度提供越障高度並確保下降率與舒適度。" },
    { id: 121, type: "choice", question: "無塔台機場互相廣播頻率？", options: ["塔台", "緊急", "CTAF 通用交通諮詢頻率", "進場"], answer: 2, explanation: "CTAF 供無塔台機場廣播位置意圖。" },
    { id: 122, type: "choice", question: "短場起飛應保持何種速度越障？", options: ["Vno", "Vy", "Vx 最佳爬升角速度", "Vs"], answer: 2, explanation: "Vx 在最短水平距離獲得最大高度越障。" },
    { id: 123, type: "choice", question: "機場多個風向袋優先參考哪個？", options: ["航廈", "最靠近降落跑道末端", "中央", "隨便"], answer: 1, explanation: "觸地區風向最關鍵，參考靠近預定觸地點。" },
    { id: 124, type: "choice", question: "雪地機場風向袋為何用亮橘色？", options: ["便宜", "防曬", "環境高對比增辨識度", "法規"], answer: 2, explanation: "橘色在白雪環境中提供最佳視覺對比。" },
    { id: 125, type: "choice", question: "風向袋毀損可觀察何物判斷風向？", options: ["雲", "煙囪煙霧飄向或水面波紋", "風聲", "鳥"], answer: 1, explanation: "地表煙霧與水面波紋是判斷低空風向佳參考。" },
    { id: 126, type: "choice", question: "風向袋周圍白色圓圈作用？", options: ["降落", "幫助空中快速定位風向袋", "防水", "中心"], answer: 1, explanation: "高空顯眼，引導快速找到風向袋確認航線。" },
    { id: 127, type: "choice", question: "跑道端畫巨大黃色交叉代表？", options: ["緊急", "跑道完全關閉，嚴禁起降", "直升機", "除雪"], answer: 1, explanation: "巨大 X 是全球通用的關閉標誌。" },
    { id: 128, type: "choice", question: "滑行道如梯子狀黃標線代表？", options: ["行人", "ILS 臨界區等待線", "減速", "清洗"], answer: 1, explanation: "防金屬干擾 ILS 訊號，需停於線後。" },
    { id: 129, type: "choice", question: "跑道邊緣白色連續實線代表？", options: ["實體邊緣，不可越過", "中線", "可越", "計時"], answer: 0, explanation: "越過實體邊緣可能無法承受重量導致深陷。" },
    { id: 130, type: "choice", question: "觸地區標線每組間距大約？", options: ["100呎", "500呎", "1000呎", "2000呎"], answer: 1, explanation: "每隔 500 呎一組提供精確距離參考。" },
    { id: 131, type: "choice", question: "滑行道單一連續黃色實線代表？", options: ["邊界", "滑行道中心線", "等待", "禁止"], answer: 1, explanation: "滑行時前輪應盡可能壓在中心線上。" },
    { id: 132, type: "choice", question: "不對稱襟翼故障會產生？", options: ["竄升", "無法控制劇烈滾轉", "隱形", "失推力"], answer: 1, explanation: "兩側升力差過大導致強烈滾轉。" },
    { id: 133, type: "choice", question: "起飛收起襟翼時姿態變化？", options: ["上揚", "機頭有下沉趨勢", "搖晃", "歸零"], answer: 1, explanation: "升力瞬間減少，需稍微帶桿補償下沉。" },
    { id: 134, type: "choice", question: "前緣縫翼 Slats 作用？", options: ["煞車", "延緩氣流分離，允許高攻角飛行", "儲油", "降噪"], answer: 1, explanation: "引導高壓氣流至上方，注入動能延緩失速。" },
    { id: 135, type: "choice", question: "零襟翼降落外觀顯著不同？", options: ["進場快且機頭仰角高", "極慢", "朝下", "無差別"], answer: 0, explanation: "無襟翼需更高空速與更高仰角維持升力。" },
    { id: 136, type: "choice", question: "全襟翼進場為何推力需比收起時大？", options: ["發電", "全襟翼阻力龐大，需推力維持空速", "吹地", "減重"], answer: 1, explanation: "阻力大若推力不足會低於下滑道並掉速。" },
    { id: 137, type: "choice", question: "ND 主要取代傳統哪兩儀表？", options: ["姿態空速", "航向指示器與無線電導航", "高度升降", "轉速油量"], answer: 1, explanation: "整合航向、航路與導航台方位。" },
    { id: 138, type: "choice", question: "空速表紅白理髮柱帶狀區代表？", options: ["巡航", "最高容許操作速度", "風速", "襟翼"], answer: 1, explanation: "標示結構極限速度，超過會發出超速警報。" },
    { id: 139, type: "choice", question: "微弱順風起飛最大危害？", options: ["尾氣熄火", "滑跑長，越障角度平緩增加撞擊風險", "升力增", "無影響"], answer: 1, explanation: "大幅增加距離且對地爬升角小，越障危險。" },
    { id: 140, type: "choice", question: "陣風地面滑行最需注意？", options: ["大推力", "使用抗風舵角防掀翻", "關通訊", "放襟翼"], answer: 1, explanation: "需迎風打副翼壓低機翼避免吹翻。" },
    { id: 141, type: "choice", question: "09 跑道磁偏西 10 度，真方位角？", options: ["080度", "100度", "090度", "360度"], answer: 0, explanation: "磁方位 = 真方位 + 西偏，真方位 = 090-10=080。" },
    { id: 142, type: "choice", question: "廣播 Turning Final 代表？", options: ["剛起飛", "完成轉彎準備對準跑道降落", "滑行", "順風"], answer: 1, explanation: "Final 代表已對準跑道準備觸地。" },
    { id: 143, type: "choice", question: "指示 Extend Downwind 應？", options: ["右轉離開", "左轉降落", "保持順風平飛延後底邊", "俯衝"], answer: 2, explanation: "延後轉向拉開與前機距離。" },
    { id: 144, type: "choice", question: "夜間風向袋如何照明？", options: ["無", "裝設聚光燈與跑道同步", "螢光", "雷達發光"], answer: 1, explanation: "合規機場風向袋裝設照明以利夜間辨識。" },
    { id: 145, type: "choice", question: "實虛相鄰標示 NON-MOVEMENT 代表？", options: ["直升", "跨入活動區前需航管許可", "禁轉", "航廈"], answer: 1, explanation: "進入滑行跑道活動區絕對需塔台許可。" },
    { id: 146, type: "choice", question: "跑道中線變紅白相間代表？", options: ["施工", "最後三千呎，提醒跑道即將結束", "縮減", "禁觸地"], answer: 1, explanation: "末端三千呎紅白相間，最後千呎全紅警告。" },
    { id: 147, type: "choice", question: "客機為何不使用全無襟翼起飛？", options: ["起火", "需極高速，跑道與輪胎極限無法承受", "暈眩", "法規"], answer: 1, explanation: "無襟翼需極高空速易爆胎且需超長跑道。" },
    { id: 148, type: "choice", question: "積冰條件為何不建議全襟翼？", options: ["省油", "防尾翼失速導致機頭猛墜", "卡住", "加速"], answer: 1, explanation: "襟翼改變氣流角易導致尾翼積冰失速。" },
    { id: 149, type: "choice", question: "線傳飛控 FBW 概念？", options: ["鐵絲", "電子訊號送電腦計算，提供包絡線保護", "全自動", "遙控"], answer: 1, explanation: "電腦攔截危險操作提供飛安保護。" },
    { id: 150, type: "choice", question: "新世代客機機身結構突破？", options: ["全鋼", "大量碳纖維複合材料", "木材", "透明"], answer: 1, explanation: "複合材料輕且抗腐蝕，可提高客艙濕度壓力。" },
    { id: 151, type: "choice", question: "夜間滑行不應開啟哪種燈？", options: ["導航", "防撞", "高亮度白色頻閃與落地燈", "艙內"], answer: 2, explanation: "高亮度頻閃燈會使地勤或對向機師致盲。" },
    { id: 152, type: "choice", question: "ALS 進場燈系統功能？", options: ["照天", "低能見度時引導平順過渡至目視跑道", "趕鳥", "融雪"], answer: 1, explanation: "提早提供目視參考幫助對準跑道。" },
    { id: 153, type: "choice", question: "副機長見危險操作應如何？", options: ["沉默", "祈禱", "明確質疑，必要時依程序接管", "打架"], answer: 2, explanation: "CRM 要求尊重的堅定，必要時打破權威階級。" },
    { id: 154, type: "choice", question: "黑洞進場易產生何錯覺？", options: ["倒飛", "覺飛太高本能壓低導致過早觸地墜毀", "太快", "旋轉"], answer: 1, explanation: "缺乏參照會誤判過高而不自覺壓低機頭。" },
    { id: 155, type: "choice", question: "METAR 中 BR 與 FG 代表？", options: ["雨雪", "薄霧與濃霧", "冰雹", "沙暴"], answer: 1, explanation: "BR 代表 Mist，FG 代表 Fog 濃霧。" },
    { id: 156, type: "choice", question: "TAF 天氣預報涵蓋範圍？", options: ["1海里", "5法定哩", "50海里", "全城"], answer: 1, explanation: "涵蓋機場中心半徑 5 法定哩區域內。" },
    { id: 157, type: "choice", question: "標準大氣海平面氣壓溫度？", options: ["1013.2 hPa / 15°C", "1000/20", "29.92/0", "1013/15F"], answer: 0, explanation: "ISA 標準為 15°C，氣壓 1013.2 hPa。" },
    { id: 158, type: "choice", question: "密度高度變高影響？", options: ["變好", "無影響", "性能變差，起飛滑跑增加", "推力倍增"], answer: 2, explanation: "空氣稀薄導致引擎推力與升力下降距離拉長。" },
    { id: 159, type: "choice", question: "ATIS 每次更新如何編號？", options: ["數字", "英文字母", "顏色", "時間"], answer: 1, explanation: "依照航空字母表 (Alpha, Bravo) 編代碼。" },
    { id: 160, type: "choice", question: "莢狀雲代表附近存在？", options: ["火山", "強烈地形波亂流", "大雪", "高溫"], answer: 1, explanation: "強烈山岳波標誌，潛藏致命下沉氣流亂流。" },
    { id: 161, type: "choice", question: "PIREP 代表？", options: ["預報", "雲圖", "飛行員實際觀測回報的天氣", "雷達"], answer: 2, explanation: "飛行員空中遇亂流結冰等真實情況回報。" },
    { id: 162, type: "choice", question: "冷鋒通過伴隨特徵？", options: ["連日毛毛雨", "氣壓驟降急升伴隨劇烈雷雨陣風", "無雲", "高溫"], answer: 1, explanation: "暖空氣猛烈抬升常伴雷雨陣風與氣壓突變。" },
    { id: 163, type: "choice", question: "起飛前發現機翼結霜應？", options: ["吹走", "必須完全除霜後才能起飛", "增速度", "開除冰"], answer: 1, explanation: "薄霜足以破壞邊界氣流大降升力，法規必除。" },
    { id: 164, type: "choice", question: "飛機後方白色尾跡雲稱？", options: ["卷雲", "凝結尾", "高積雲", "煙霧"], answer: 1, explanation: "引擎高溫水氣在高空低溫迅速凝結成冰晶。" },
    { id: 165, type: "choice", question: "發布 LVP 代表天氣狀況？", options: ["強風", "大雨", "濃霧導致能見度極低", "下雪"], answer: 2, explanation: "低能見度程序保護 ILS 進場航機防濃霧。" },
    { id: 166, type: "choice", question: "航空通訊 MAYDAY 代表？", options: ["一般", "機遇極度危險與迫切威脅", "迷航", "延遲"], answer: 1, explanation: "最高等級求救訊號，具備絕對優先權。" },
    { id: 167, type: "choice", question: "PAN-PAN 訊號代表？", options: ["迫降", "緊急狀態但未立即危及生命", "劫機", "天氣壞"], answer: 1, explanation: "次一級緊急狀態，如單發動機失效但能控制。" },
    { id: 168, type: "choice", question: "Squawk 7700 代表？", options: ["通訊失效", "緊急狀態", "遭劫持", "目視"], answer: 1, explanation: "雷達電碼 7700 為一般緊急狀態。" },
    { id: 169, type: "choice", question: "Squawk 7600 代表？", options: ["緊急", "無線電通訊失效", "劫持", "軍用"], answer: 1, explanation: "7600 代表通訊失效，航管會預期光學指示。" },
    { id: 170, type: "choice", question: "Squawk 7500 代表？", options: ["緊急", "通訊失效", "遭劫持 (Hijack)", "VFR"], answer: 2, explanation: "7500 告知地面遭受非法干擾劫機。" },
    { id: 171, type: "choice", question: "塔台光槍紅綠燈交替代表？", options: ["准起飛", "准降落", "極度危險", "在空中極度危險，請勿降落"], answer: 3, explanation: "警告有嚴重危險切勿進行進場。" },
    { id: 172, type: "choice", question: "塔台光槍穩定紅燈對空中代表？", options: ["迫降", "讓行其他飛機並繼續盤旋", "返航", "降落"], answer: 1, explanation: "空中持續紅燈代表讓出航線繼續盤旋。" },
    { id: 173, type: "choice", question: "塔台光槍穩定綠燈對地面代表？", options: ["停止", "准許起飛", "滑回", "關閉引擎"], answer: 1, explanation: "穩定綠燈代表獲得起飛許可。" },
    { id: 174, type: "choice", question: "進入雷雨胞遭遇亂流應？", options: ["加速穿", "保持穩定姿態，接受高度空速波動", "大角度轉彎", "全放襟翼"], answer: 1, explanation: "劇烈操作會過載解體，應維持姿態而非定高。" },
    { id: 175, type: "choice", question: "Vmcg 代表何種速度？", options: ["失速", "地面最小控制速度", "起飛", "巡航"], answer: 1, explanation: "單發失效時靠方向舵維持地面直線最小速度。" },
    { id: 176, type: "choice", question: "V1 速度定義？", options: ["起飛決斷速度", "離地速度", "爬升速度", "安全速度"], answer: 0, explanation: "超過 V1 後即使引擎失效也必須繼續起飛。" },
    { id: 177, type: "choice", question: "Vr 速度定義？", options: ["決斷", "機頭仰起速度 (Rotation)", "著陸", "巡航"], answer: 1, explanation: "達此速度機師拉起機頭使飛機離地起飛。" },
    { id: 178, type: "choice", question: "V2 速度定義？", options: ["最大", "起飛安全速度", "失速", "進場"], answer: 1, explanation: "單發失效時能維持足夠爬升率安全越障速度。" },
    { id: 179, type: "choice", question: "TCAS 發出 RA 時飛行員應？", options: ["問航管", "絕對服從 TCAS 指示爬升或下降避讓", "平飛", "無視"], answer: 1, explanation: "防撞系統最高優先，飛行員需無條件執行避讓。" },
    { id: 180, type: "choice", question: "防冰系統 (Anti-ice) 何時開啟？", options: ["已結厚冰", "進入已知或預期結冰區域前提前開啟", "夏季", "落地後"], answer: 1, explanation: "防冰需預先開啟防止結冰，除冰才事後開啟。" },
    { id: 181, type: "choice", question: "大型客機客艙加壓來源？", options: ["氧氣筒", "發動機壓縮機引氣 (Bleed Air)", "外氣直灌", "冷氣"], answer: 1, explanation: "從引擎壓縮段抽取高壓空氣降溫後送入客艙。" },
    { id: 182, type: "choice", question: "若客艙失壓氧氣面罩落下，其氧氣供應通常可維持多久？", options: ["1小時", "12-22分鐘", "3天", "5分鐘"], answer: 1, explanation: "化學氧氣產生器供應約 12-22 分鐘供緊急下降。" },
    { id: 183, type: "choice", question: "飛機重心 (CG) 過度偏後的危險？", options: ["太省油", "俯仰不穩定極易失速且難以改出", "飛太快", "機頭太重"], answer: 1, explanation: "重心過後減少水平尾翼效能，造成嚴重不穩定。" },
    { id: 184, type: "choice", question: "何種情況最易產生清晰的凝結尾？", options: ["低空熱帶", "高空極端寒冷且空氣濕度高", "沙漠", "雷雨"], answer: 1, explanation: "高空極寒且富含水氣環境使熱氣迅速結冰。" },
    { id: 185, type: "choice", question: "EGPWS 主要功能？", options: ["防撞", "增強型近地警告，預防 CFIT 撞山", "導航", "通訊"], answer: 1, explanation: "結合地形資料庫防止飛機在受控下飛入地形。" },
    { id: 186, type: "choice", question: "何謂 CFIT？", options: ["晴空亂流", "可控飛行撞地", "儀表故障", "劫機"], answer: 1, explanation: "飛機無機件故障在受控下因空間迷向撞擊地形。" },
    { id: 187, type: "choice", question: "RVSM 空域代表？", options: ["無管", "縮小垂直隔離最低標準空域", "軍事區", "禁航"], answer: 1, explanation: "高空垂直隔離從 2000 呎縮為 1000 呎增容量。" },
    { id: 188, type: "choice", question: "飛機停靠空橋通常關閉主引擎，電力靠？", options: ["電池", "APU 輔助動力單元或地面電源車", "人力", "太陽能"], answer: 1, explanation: "尾部的 APU 或地面 GPU 提供駐泊所需電力空調。" },
    { id: 189, type: "choice", question: "大型客機機翼下方的獨木舟狀突出物？", options: ["油箱", "襟翼滑軌整流罩", "飛彈", "攝影機"], answer: 1, explanation: "包覆襟翼伸展機械結構，減少風阻。" },
    { id: 190, type: "choice", question: "飛航資料紀錄器 (黑盒子) 實際顏色？", options: ["黑色", "亮橘色", "紅色", "白色"], answer: 1, explanation: "為利於尋獲，表面塗有亮橘色並配反光條。" },
    { id: 191, type: "choice", question: "飛行途中遭遇雙發動機失效應？", options: ["跳傘", "維持最佳滑翔速度 (Best Glide Speed)", "急拉升", "煞車"], answer: 1, explanation: "立即建立滑翔速度以獲取最長滑翔距離爭取時間。" },
    { id: 192, type: "choice", question: "若飛機出現失速警告 (Stall Warning) 首要動作？", options: ["拉起機頭", "推桿降低機頭仰角減少攻角", "放起落架", "關引擎"], answer: 1, explanation: "降低攻角是重新獲得平滑氣流與升力的唯一解。" },
    { id: 193, type: "choice", question: "螺旋槳飛機的 P-Factor 效應？", options: ["無", "高攻角時下行槳葉產生較大推力導致左偏", "倒飛", "超音速"], answer: 1, explanation: "爬升時右側下行槳葉迎角大推力大，致向左偏航。" },
    { id: 194, type: "choice", question: "機場風向袋為何不全用白色？", options: ["規定", "白在雪地隱形，多採紅白或亮橘增對比", "便宜", "防雨"], answer: 1, explanation: "高對比色彩才能在各天氣背景中顯現。" },
    { id: 195, type: "choice", question: "VFR 與 IFR 分別代表？", options: ["民軍", "目視飛行規則與儀器飛行規則", "貨客", "長短"], answer: 1, explanation: "VFR 靠看外頭飛，IFR 靠儀表與航管導航。" },
    { id: 196, type: "choice", question: "機場 ILS 系統由哪兩主要天線組成？", options: ["雷達", "左右定位台 (LLZ) 與下滑台 (GP)", "廣播", "GPS"], answer: 1, explanation: "提供飛機精確的左右中心線與垂直 3 度下滑道。" },
    { id: 197, type: "choice", question: "客機落地後引擎反推力 (Thrust Reverser) 原理？", options: ["倒轉引擎", "阻擋排氣並折向前方產生反向制動力", "煞車片", "降落傘"], answer: 1, explanation: "利用導流門將噴射氣流折向前方以利高速減速。" },
    { id: 198, type: "choice", question: "為何飛機起降階段需調暗客艙燈光並打開遮陽板？", options: ["省電", "讓眼睛適應外界光線以利緊急撤離", "看風景", "規定"], answer: 1, explanation: "確保意外時乘客眼睛已適應環境光並能判斷外界火勢。" },
    { id: 199, type: "choice", question: "客機水上迫降 (Ditching) 首要氣動配置？", options: ["放輪", "保持起落架收起，以免觸水翻覆", "全速", "無規定"], answer: 1, explanation: "放下起落架會絆住水面導致飛機劇烈翻覆。" },
    { id: 200, type: "choice", question: "駕駛艙窗戶旁的「逃生繩 (Escape Rope)」作用？", options: ["綁人", "緊急時供機師從高聳窗戶垂降至地面", "晾衣", "裝飾"], answer: 1, explanation: "客機機首離地極高，逃生繩確保艙門卡死時仍可撤離。" }
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
