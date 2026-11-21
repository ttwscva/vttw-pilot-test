// ==========================================
// vTTW 飛行員入學筆試完整題庫 (共 100 題)
// 題庫第 1 - 100 題 (已依 ATMP 第19版中英文術語嚴格校訂)
// ==========================================
const questionBank = [
    { id: 1, type: "choice", question: "在傳統六大飛航儀表中，唯一能同時指示航空器「俯仰 (Pitch)」與「滾轉 (Roll)」姿態的儀表為何？", options: ["姿態儀 (Attitude Indicator)", "航向指示器 (Heading Indicator)", "高度表 (Altimeter)", "空速表 (Airspeed Indicator)"], answer: 0, explanation: "姿態儀 (Attitude Indicator) 利用陀螺儀剛性原理，是唯一能直觀顯示航空器相對於真實地平線姿態的儀表。" },
    { id: 2, type: "choice", question: "升降速率表 (Vertical Speed Indicator, VSI) 的主要功能是什麼？", options: ["顯示絕對高度 (Absolute Altitude)", "顯示爬升或下降的垂直速率", "顯示真空速 (True Airspeed, TAS)", "顯示發動機轉速 (RPM)"], answer: 1, explanation: "升降速率表 (VSI) 透過測量靜壓變化率，以呎/每分鐘 (FPM) 顯示航空器的爬升或下降速率。" },
    { id: 3, type: "choice", question: "傳統六大飛航儀表中，哪三個是利用「皮托管-靜壓系統 (Pitot-Static System)」運作的？", options: ["空速表、高度表、升降速率表", "姿態儀、航向指示器、轉彎協調表", "空速表、姿態儀、高度表", "升降速率表、航向指示器、轉彎協調表"], answer: 0, explanation: "空速表 (ASI) 比較動壓與靜壓；高度表 (Altimeter) 與升降速率表 (VSI) 則純粹依賴靜壓系統運作。" },
    { id: 4, type: "choice", question: "若皮托管 (Pitot Tube) 完全積冰堵塞，但靜壓孔 (Static Port) 正常，哪一個儀表會顯示異常？", options: ["高度表 (Altimeter)", "升降速率表 (VSI)", "空速表 (Airspeed Indicator)", "姿態儀 (Attitude Indicator)"], answer: 2, explanation: "皮托管僅提供動壓給空速表 (ASI)，堵塞會導致空速顯示異常，高度表與升降速率表不受影響。" },
    { id: 5, type: "choice", question: "傳統航向指示器 (Heading Indicator, HI) 必須定時參照何種儀表來手動校準？", options: ["姿態儀 (Attitude Indicator)", "磁羅盤 (Magnetic Compass)", "轉彎協調表 (Turn Coordinator)", "全球定位系統 (GPS)"], answer: 1, explanation: "傳統航向指示器 (HI) 的陀螺儀會產生進動誤差，需定時對照磁羅盤 (Magnetic Compass) 手動校準。" },
    { id: 6, type: "choice", question: "航空器起飛與落地時，一般應優先選擇何種風向？", options: ["順風 (Tailwind)", "逆風 (Headwind)", "側風 (Crosswind)", "無風 / 靜風 (Calm)"], answer: 1, explanation: "依 ATMP 規範，航空器通常逆風 (Headwind) 起飛及落地，以增加相對氣流速度並縮短跑道滾行距離。" },
    { id: 7, type: "choice", question: "若機場例行天氣報告 (METAR) 顯示地面風為 270/15KT，最適合使用哪一條跑道？", options: ["27 號跑道 (RWY 27)", "09 號跑道 (RWY 09)", "36 號跑道 (RWY 36)", "18 號跑道 (RWY 18)"], answer: 0, explanation: "風向 270 代表風從磁方位 270 度（正西）吹來，應選擇 27 號跑道逆風起飛。" },
    { id: 8, type: "choice", question: "順風 (Tailwind) 起飛會導致需要更長的可用起飛滾行距離 (TORA)，此說法是否正確？", options: ["正確", "錯誤"], answer: 0, explanation: "順風會降低相對氣流速度，航空器必須加速到更高的地速 (Ground Speed) 才能獲得足夠升力離地。" },
    { id: 9, type: "choice", question: "低空最後進場 (Final Approach) 遭遇「順風轉逆風」之低空風切 (Low Level Wind Shear, LLWS) 時，航空器會產生什麼反應？", options: ["空速驟減並下墜", "空速增加且升力驟增向上竄升", "強烈滾轉", "失去方向舵效應"], answer: 1, explanation: "瞬間由順風轉為逆風會造成空速增加 (Airspeed Gain)，升力大增，使航空器高於正常下滑道 (Glide Path)。" },
    { id: 10, type: "choice", question: "若地面風向與使用跑道 (Active Runway) 夾角為 90 度，側風分量 (Crosswind Component) 會是？", options: ["總風速的一半", "零", "等於總風速 (100%)", "總風速的 70%"], answer: 2, explanation: "正側風夾角為 90 度（sin 90° = 1），全部風速皆為側風分量。" },
    { id: 11, type: "choice", question: "跑道號碼 (Runway Designation) 是依據什麼命名的？", options: ["跑道總長度", "建造順序", "跑道指向之磁方位 (Magnetic Direction) 捨去個位數", "真方位 (True Direction)"], answer: 2, explanation: "跑道號碼取其指向磁方位角四捨五入至最接近的十度，再捨去個位數（前兩位數字）命名。" },
    { id: 12, type: "choice", question: "兩條平行的 36 跑道 (Parallel Runways)，如何標示區分？", options: ["36 與 37", "36L 與 36R", "36A 與 36B", "北 36 與南 36"], answer: 1, explanation: "平行跑道依進場方向之左右側，以 L (Left / 左) 與 R (Right / 右) 區分，如三六左、三六右跑道。" },
    { id: 13, type: "choice", question: "05 號跑道 (RWY 05) 的相反方向跑道號碼是多少？", options: ["15", "23", "30", "32"], answer: 1, explanation: "相反方向相差 180 度（050 + 180 = 230），故為 23 號跑道 (RWY 23)。" },
    { id: 14, type: "choice", question: "正對 09 號跑道 (RWY 09) 進場時，機頭大約指向哪個磁方位？", options: ["正東 (090°)", "正南 (180°)", "正西 (270°)", "正北 (360°)"], answer: 0, explanation: "09 號跑道代表磁方位約 090 度，即正東方。" },
    { id: 15, type: "choice", question: "高緯度機場跑道號碼若依「真北 (True North)」命名，會在號碼後方加上什麼字母？", options: ["M", "N", "T", "G"], answer: 2, explanation: "高緯度地區磁偏角過大，跑道改以真北 (True North) 命名，並於號碼後加註 T。" },
    { id: 16, type: "choice", question: "在機場航線 (Aerodrome Traffic Circuit) 中，與降落方向「相反」的航段稱為？", options: ["一邊 / 逆風邊 (Upwind)", "二邊 / 側風邊 (Crosswind)", "三邊 / 順風邊 (Downwind)", "四邊 / 底邊 (Base)"], answer: 2, explanation: "三邊 / 順風邊 (Downwind) 與降落跑道平行且方向相反。" },
    { id: 17, type: "choice", question: "在機場航線 (Aerodrome Traffic Circuit) 中，連接三邊 (Downwind) 與五邊 / 最後進場 (Final) 的航段稱為？", options: ["二邊 / 側風邊 (Crosswind)", "三邊 / 順風邊 (Downwind)", "四邊 / 底邊 (Base)", "一邊 / 離場邊 (Departure)"], answer: 2, explanation: "四邊 / 底邊 (Base) 係垂直於跑道延伸線、連接三邊與五邊最後進場的航段。" },
    { id: 18, type: "choice", question: "標準機場航線 (Aerodrome Traffic Circuit) 預設的轉彎方向為何？", options: ["全右轉（右航線）", "全左轉（左航線）", "依地面風向決定", "依機長喜好決定"], answer: 1, explanation: "除非航圖或塔臺另有指示（如右航線），標準機場航線預設為左航線（全左轉），因機長坐於左側視野較佳。" },
    { id: 19, type: "choice", question: "輕型航空器 (Light Aircraft) 的標準機場航線空層 (AGL) 通常是多少？", options: ["地平面上 500 呎 (500 ft AGL)", "地平面上 1,000 呎 (1,000 ft AGL)", "地平面上 1,500 呎 (1,500 ft AGL)", "地平面上 2,000 呎 (2,000 ft AGL)"], answer: 1, explanation: "輕型航空器之標準機場航線高度通常為地平面上 (AGL) 1,000 呎。" },
    { id: 20, type: "choice", question: "起飛後沿跑道中心線延伸方向爬升的機場航線航段稱為？", options: ["三邊 / 順風邊 (Downwind)", "四邊 / 底邊 (Base)", "一邊 / 逆風邊 / 離場邊 (Upwind / Departure)", "二邊 / 側風邊 (Crosswind)"], answer: 2, explanation: "起飛後沿跑道中心線延伸方向直線爬升的階段稱為一邊（逆風邊 / 離場邊）。" },
    { id: 21, type: "choice", question: "機場風向袋 (Windsock) 大口朝東、尾部指向西方，代表當時吹什麼風？", options: ["東風 (Easterly)", "西風 (Westerly)", "南風 (Southerly)", "北風 (Northerly)"], answer: 0, explanation: "風從東方灌入風向袋大口並向西吹出，因此為東風。" },
    { id: 22, type: "choice", question: "風向袋 (Windsock) 除了指示地面風向 (Wind Direction) 外，還能提供何種資訊？", options: ["氣溫 (Temperature)", "概略的地面風速 (Wind Speed)", "高度表撥定值 (QNH)", "能見度 (Visibility)"], answer: 1, explanation: "可依據風向袋被吹起充氣與水平伸展的程度，概略判斷地面風速。" },
    { id: 23, type: "choice", question: "標準分段式風向袋 (Windsock) 每吹起一截條紋，大約代表多少節 (kt) 風速？", options: ["1 節 (kt)", "3 節 (kt)", "10 節 (kt)", "15 節 (kt)"], answer: 1, explanation: "標準五節式風向袋每吹起一截約代表 3 節 (kt)，完全水平伸展約為 15 節 (kt) 以上。" },
    { id: 24, type: "choice", question: "觀察到風向袋 (Windsock) 劇烈左右擺動，代表什麼氣象狀況？", options: ["雷陣雨 (TSRA)", "強烈陣風 (Gust) 與風向不穩", "濃霧 (FG)", "積冰 (Icing)"], answer: 1, explanation: "風向袋劇烈擺動是地面存在明顯陣風與風向劇烈變化的直觀表現。" },
    { id: 25, type: "choice", question: "機場四面體風向指示器 (Wind Tetrahedron) 尖端指向的主要作用為何？", options: ["指示目前建議之起降方向", "顯示大氣壓力", "測量降雨量", "固定指向正北"], answer: 0, explanation: "四面體尖端會指向風吹來的方向，提示駕駛員建議使用的逆風起降方向。" },
    { id: 26, type: "choice", question: "機場操作區與活動區內，「黃色」標線通常代表什麼區域？", options: ["一般跑道 (Runway)", "滑行道 (Taxiway) 與停機坪 (Apron)", "跑道著陸區 (Touchdown Zone)", "瞄準點 (Aiming Point)"], answer: 1, explanation: "機場內跑道標線為白色；滑行道 (Taxiway) 與停機坪 (Apron) 標線為黃色。" },
    { id: 27, type: "choice", question: "跑道頭 (Threshold) 的「鋼琴鍵」條紋標線數量代表什麼含義？", options: ["跑道長度", "跑道寬度", "道面厚度", "最大起飛重量"], answer: 1, explanation: "跑道頭 (Threshold) 的白色縱向條紋數量係對應跑道的物理寬度。" },
    { id: 28, type: "choice", question: "滑行道上出現兩實線、兩虛線的黃色標線，且虛線端靠近跑道，代表什麼位置？", options: ["跑道等待位置 (Runway-holding position)", "滑行道中心線 (Taxiway Centerline)", "跑道末端 (Runway End)", "停機坪邊界 (Apron Boundary)"], answer: 0, explanation: "此為跑道等待位置 (Runway-holding position)[cite: 51]；從實線側接近時，未獲塔臺許可不得超越。" },
    { id: 29, type: "choice", question: "跑道上兩塊巨大的白色實心長方形標線稱為？", options: ["跑道邊線 (Runway Side Stripe)", "位移跑道頭 (Displaced Threshold)", "瞄準點 (Aiming Point)", "儀降系統臨界區域 (ILS Critical Area)"], answer: 2, explanation: "瞄準點 (Aiming Point) 標線係供進場航空器建立目視下滑參考之基準點。" },
    { id: 30, type: "choice", question: "跑道前端繪有白色箭頭指向跑道頭橫線，代表該箭頭區域是？", options: ["緩衝區 (Stopway)", "位移跑道頭 (Displaced Threshold)", "直昇機起降區 (Helipad)", "關閉區域 (Closed Area)"], answer: 1, explanation: "位移跑道頭 (Displaced Threshold) 前方區域可用於滑行、起飛滾行或反向落地滾行，但禁止進場降落觸地。" },
    { id: 31, type: "choice", question: "起飛與降落時放下襟翼 (Flaps) 的主要氣動目的為何？", options: ["增加巡航速度", "增加升力與阻力，降低起降速度", "減少巡航油耗", "增加配平效率"], answer: 1, explanation: "襟翼能改變機翼彎度與面積，在低空速下產生額外升力，並於降落時提供阻力以利減速。" },
    { id: 32, type: "choice", question: "大角度（全角度）襟翼 (Full Flaps) 通常僅用於哪個飛航階段？", options: ["起飛 (Takeoff)", "巡航 (Cruise)", "落地 / 最後進場 (Landing / Final Approach)", "爬升 (Climb)"], answer: 2, explanation: "落地階段需要較陡的下降剖面但不增加空速，全襟翼所產生的額外阻力正好符合此需求。" },
    { id: 33, type: "choice", question: "超過襟翼操作速度上限 (Vfe) 時強行放下襟翼，會造成什麼後果？", options: ["進入倒飛", "發動機熄火", "結構受損甚至襟翼或機翼撕裂", "全機斷電"], answer: 2, explanation: "超過最大襟翼伸展速度 (Vfe) 操作襟翼，過大的氣動負荷將導致嚴重機體結構破壞。" },
    { id: 34, type: "choice", question: "傳統空速表 (Airspeed Indicator) 上代表「襟翼操作速度範圍」的顏色圓弧是？", options: ["綠色圓弧 (Green Arc)", "黃色圓弧 (Yellow Arc)", "白色圓弧 (White Arc)", "紅色徑向線 (Red Radial Line)"], answer: 2, explanation: "白色圓弧 (White Arc) 下限為 Vso、上限為 Vfe，代表襟翼可安全操作之空速範圍。" },
    { id: 35, type: "choice", question: "正常起飛離地爬升後，應於何時收起襟翼 (Flaps)？", options: ["主輪離地瞬間立即收起", "達到安全高度且空速持續增加時逐步收起", "進入巡航空層時", "轉入四邊時"], answer: 1, explanation: "須於建立正爬升率、達到安全高度且空速高於規定收襟翼速度後逐步收起，以免升力驟降。" },
    { id: 36, type: "choice", question: "具備機首前半段雙層客艙「駝峰」外觀設計的經典客機是？", options: ["A380", "B777", "B747", "MD-11"], answer: 2, explanation: "波音 B747 擁有標誌性的機首上層客艙駝峰設計。" },
    { id: 37, type: "choice", question: "Cessna 172 屬於哪一種機翼配置設計？", options: ["下單翼 (Low Wing)", "上單翼 (High Wing)", "中單翼 (Mid Wing)", "雙翼 (Biplane)"], answer: 1, explanation: "Cessna 172 的機翼安裝在機身頂部，屬於上單翼 (High Wing) 設計。" },
    { id: 38, type: "choice", question: "ATR 72 區域客機的動力來源是哪一種發動機？", options: ["純渦輪噴射 (Turbojet)", "渦輪扇 (Turbofan)", "渦輪螺旋槳 (Turboprop)", "活塞式 (Piston)"], answer: 2, explanation: "ATR 72 採用雙具渦輪螺旋槳 (Turboprop) 發動機，適合中短程區域航線。" },
    { id: 39, type: "choice", question: "水平尾翼安裝在垂直尾翼最頂端，形成哪一種尾翼構型？", options: ["V 型尾翼 (V-tail)", "十字型尾翼 (Cruciform Tail)", "T 型尾翼 (T-tail)", "雙垂直尾翼 (Twin Tail)"], answer: 2, explanation: "水平尾翼置於垂直尾翼頂端呈 T 字形，稱為 T 型尾翼 (T-tail)。" },
    { id: 40, type: "choice", question: "前三點式 (Tricycle Gear) 與後三點式 (Tailwheel Gear) 航空器如何分辨？", options: ["前三點式具有尾輪", "後三點式主輪在前方並於機尾裝有尾輪", "前三點式無起落架", "後三點式停於地面時機身完全水平"], answer: 1, explanation: "後三點式航空器具有尾輪，停放地面時機頭上揚；前三點式則具有鼻輪，機身呈水平。" },
    { id: 41, type: "choice", question: "精確進場滑降指示燈 (Precision Approach Path Indicator, PAPI) 顯示「兩紅兩白」代表什麼？", options: ["高於下滑道", "低於下滑道", "位於正確下滑道 (On Glide Path)", "偏離跑道中心線"], answer: 2, explanation: "PAPI 橫向四燈顯示「兩紅兩白」時，代表航空器正位於標準下滑道（通常為 3 度）上。" },
    { id: 42, type: "choice", question: "滑行道邊燈 (Taxiway Edge Lights) 的標準顏色為何？", options: ["藍色 (Blue)", "綠色 (Green)", "白色 (White)", "紅色 (Red)"], answer: 0, explanation: "依國際民航與機場燈光規範，滑行道邊燈為藍色，滑行道中心線燈則為綠色。" },
    { id: 43, type: "choice", question: "機場標燈 (Aerodrome Beacon, ABN) 交替閃爍「白光與綠光」，代表何種機場？", options: ["軍用機場", "水上機場", "直昇機飛行場", "民用陸上機場"], answer: 3, explanation: "民用陸上機場之機場標燈 (ABN) 為白、綠光交替閃爍；軍用機場則為兩次白光交替一次綠光。" },
    { id: 44, type: "choice", question: "跑道邊燈 (Runway Edge Lights, REDL) 在跑道主要長度區段是什麼顏色？", options: ["黃色 (Yellow)", "紅色 (Red)", "綠色 (Green)", "白色 (White)"], answer: 3, explanation: "跑道邊燈 (REDL) 主體為白色，於儀器跑道最後 600 公尺（2,000 呎）或三分之一處改為黃色以示警戒。" },
    { id: 45, type: "choice", question: "設置於跑道起始處、朝向進場航空器發出恆亮綠光的燈光稱為？", options: ["跑道末端燈 (Runway End Lights)", "跑道頭燈 (Runway Threshold Lights)", "進場燈光系統 (ALS)", "著陸區燈光系統 (TDZL)"], answer: 1, explanation: "跑道頭燈 (Runway Threshold Lights) 朝向進場方向發出綠光，標示可用作落地之跑道起始處。" },
    { id: 46, type: "choice", question: "飛安人為因素 (Human Factors) 中的 SHELL 模型「不包含」下列何者？", options: ["Software (軟體/程序)", "Hardware (硬體/裝備)", "Environment (環境)", "Language (語言)"], answer: 3, explanation: "SHELL 模型由 Software、Hardware、Environment、Liveware（人）及另一 Liveware（團隊/他人）組成。" },
    { id: 47, type: "choice", question: "瑞士起司理論 (Swiss Cheese Model) 認為航空失事的主要成因為何？", options: ["單一操作失誤", "純粹機械設計瑕疵", "多層安全防護網的漏洞同時連成一線", "僅因天候惡劣"], answer: 2, explanation: "當組織、管理、程序與個人等多層防護機制的漏洞同時對齊穿透時，便會釀成失事。" },
    { id: 48, type: "choice", question: "在儀器天氣情況 (IMC) 雲中飛航時，生理感官覺得正在轉彎但儀表顯示平飛，此現象稱為？", options: ["高山症", "空間迷向 (Spatial Disorientation)", "隧道視覺 (Tunnel Vision)", "減壓症 (Decompression Sickness)"], answer: 1, explanation: "缺乏外界目視參考時，內耳前庭與本體感覺易受欺騙而產生空間迷向，必須完全信賴飛航儀表。" },
    { id: 49, type: "choice", question: "飛航前自我健康檢查清單「IMSAFE」中的 'M' 代表什麼？", options: ["Money (金錢)", "Motivation (動機)", "Medication (藥物)", "Memory (記憶)"], answer: 2, explanation: "IMSAFE 分別為 Illness、Medication (藥物)、Stress、Alcohol、Fatigue、Emotion。" },
    { id: 50, type: "choice", question: "組員資源管理 (Crew Resource Management, CRM) 的核心目的為何？", options: ["強化機長絕對權威", "有效運用所有可用資源以提升飛航安全", "降低航空公司營運成本", "加快旅客登機速度"], answer: 1, explanation: "CRM 旨在透過良好溝通、狀況警覺與團隊決策，有效管理人為失誤並確保飛航安全。" },
    { id: 51, type: "choice", question: "機場例行天氣報告 (METAR)[cite: 32] 中出現「CAVOK」代表什麼？[cite: 31]", options: ["機場關閉", "能見度、雲及現在天氣較指定情況更佳（天氣良好）", "強烈暴風雨", "能見度極低"], answer: 1, explanation: "依 ATMP 定義，CAVOK (唸成 KAV-OH-KAY)[cite: 31] 代表能見度 10 公里以上、無低於 5,000 呎之雲或積雨雲且無顯著天氣現象。" },
    { id: 52, type: "choice", question: "航空器於進場時若不慎切入微爆氣流 (Microburst) 核心，通常會先經歷何種氣流變化？", options: ["強烈逆風（空速增加）", "劇烈向左偏航", "發動機立即熄火", "直接遭遇強烈順風"], answer: 0, explanation: "進入微爆氣流時，通常會先遭遇強烈逆風（性能暫時增加），隨即進入強烈下沉氣流，接著瞬間轉為強烈順風導致空速劇降。" },
    { id: 53, type: "choice", question: "雷雨 (Thunderstorm) 形成所需的三個基本條件為何？", options: ["高氣壓、冷空氣、強風", "充足水氣、不穩定大氣、舉升機制", "乾燥空氣、高溫、平坦地形", "鋒面、海風、逆溫層"], answer: 1, explanation: "雷雨發展必須同時具備充足水氣、不穩定大氣層結，以及地形、鋒面或熱對流等舉升觸發力。" },
    { id: 54, type: "choice", question: "當氣溫 (Temperature) 非常接近露點溫度 (Dew Point) 時，機場最容易發生什麼天氣現象？", options: ["龍捲風", "高空晴空亂流", "起霧 (Fog) 或低雲", "冰雹"], answer: 2, explanation: "氣溫與露點差縮小時，空氣接近飽和，水氣極易凝結形成霧、薄霧或低層雲幕。" },
    { id: 55, type: "choice", question: "機翼積冰 (Icing) 對航空器飛航安全最致命的影響為何？", options: ["增加發動機推力", "破壞翼面光滑氣流，大幅降低升力並提高失速速度", "僅使擋風玻璃模糊", "增加油箱容量"], answer: 1, explanation: "積冰會破壞翼剖面外型與邊界層氣流，導致升力銳減、阻力劇增並使航空器提早失速。" },
    { id: 56, type: "choice", question: "傳統空速表 (Airspeed Indicator) 上的綠色圓弧 (Green Arc) 代表什麼？", options: ["襟翼操作範圍", "正常操作速度範圍 (Normal Operating Range)", "警戒速度範圍", "發動機轉速範圍"], answer: 1, explanation: "綠色圓弧下限為乾淨構型失速速度 (Vs1)，上限為最大結構巡航速度 (Vno)，代表正常操作速度範圍。" },
    { id: 57, type: "choice", question: "輕型航空器的真空系統 (Vacuum System) 故障時，通常會導致哪兩個傳統儀表失效？", options: ["空速表、高度表", "姿態儀、航向指示器", "升降速率表、轉彎協調表", "高度表、姿態儀"], answer: 1, explanation: "傳統姿態儀 (AI) 與航向指示器 (HI) 多由引擎驅動的真空系統帶動陀螺儀；轉彎協調表則多採獨立電力驅動。" },
    { id: 58, type: "choice", question: "航空器於起飛前及低於轉換空層 (Transition Level) 飛航時，高度表應調整為何種高度表撥定值 (Altimeter Setting)？", options: ["直接歸零", "標準大氣壓 (1013.2 hPa)", "當地海平面氣壓 (QNH)", "無線電絕對高度"], answer: 2, explanation: "依 ATMP 規定，撥定當地 QNH 高度表撥定值時，高度表於地面將顯示機場標高 (Aerodrome Elevation)，空中則顯示高度 (Altitude)。" },
    { id: 59, type: "choice", question: "轉彎協調表 (Turn Coordinator) 下方的黑球（側滑儀 Inclinometer）主要作用為何？", options: ["指示俯仰角", "顯示轉彎時之側滑 (Slip) 或外滑 (Skid) 協調狀態", "顯示剩餘燃油", "顯示真空系統壓力"], answer: 1, explanation: "黑球置中代表協調轉彎；偏離中心時駕駛員須依「踩球 (Step on the ball)」原則修正方向舵。" },
    { id: 60, type: "choice", question: "依航空與 ATMP 定義，「高度 / 真高度 (Altitude / True Altitude)」是指什麼？", options: ["距離地平面之實際高度 (AGL)", "未修正氣壓之指示高度", "自平均海平面 (MSL) 至空中某點之實際垂直距離", "相對於標準大氣壓 1013.2 hPa 之飛航空層"], answer: 2, explanation: "高度 (Altitude) 係指自平均海平面 (Mean Sea Level, MSL) 算起之垂直距離。" },
    { id: 61, type: "choice", question: "側風進場時使用「蟹行法 (Crab Method)」的主要目的為何？", options: ["加快減速", "讓機首始終與跑道平行", "將機首偏轉迎風以抵銷側風飄移，保持對準跑道中心線", "刻意以單側主輪觸地"], answer: 2, explanation: "蟹行法藉由將機首轉向迎風側，使航空器的對地航跡 (Track) 維持在跑道中心線延伸線上。" },
    { id: 62, type: "choice", question: "以 10 節 (kt) 順風 (Tailwind) 落地會對降落性能造成什麼影響？", options: ["地速增加，著陸滾行距離大幅拉長", "地速降低且容易失速", "下降率變慢", "落地更平穩且省煞車"], answer: 0, explanation: "順風會直接疊加於進場空速上使地速 (GS) 增加，導致觸地後所需煞車與滾行距離顯著增加。" },
    { id: 63, type: "choice", question: "若地面風向與使用跑道夾角為 45 度，側風分量 (Crosswind Component) 約佔總風速多少？", options: ["30%", "50%", "70%", "100%"], answer: 2, explanation: "sin(45°) 約為 0.707，因此側風分量約為總風速的 70%。" },
    { id: 64, type: "choice", question: "強風吹越山脈時，哪一側最容易出現強烈下沉氣流與山岳波亂流？", options: ["迎風面 (Windward Side)", "背風面 (Leeward Side)", "山頂正上方", "開闊平谷"], answer: 1, explanation: "氣流越過山脊後於背風面 (Leeward Side) 易形成強烈下沉氣流、滾軸雲及劇烈山岳波亂流。" },
    { id: 65, type: "choice", question: "在陣風 (Gust) 環境下進行最後進場時，進場參考速度 (Vref) 通常應如何調整？", options: ["減少陣風值的一半", "維持不變", "加上陣風差額（陣風減平均風）的一半作為速度補償", "直接加上全部總風速"], answer: 2, explanation: "一般標準程序會將陣風差額的一半（依機型規定設有上限）加至 Vref，以防陣風驟停造成失速。" },
    { id: 66, type: "choice", question: "13 號跑道 (RWY 13) 的相反方向跑道標示為何？", options: ["04", "22", "31", "36"], answer: 2, explanation: "130 + 180 = 310，捨去個位數即為 31 號跑道 (RWY 31)。" },
    { id: 67, type: "choice", question: "地球上磁北極 (Magnetic North) 與真北極 (True North) 之間的夾角誤差稱為？", options: ["磁偏角 (Magnetic Variation)", "羅盤自差 (Compass Deviation)", "磁傾角 (Magnetic Dip)", "陀螺進動 (Precession)"], answer: 0, explanation: "磁北與真北的角度差異稱為磁偏角 (Magnetic Variation)；機體金屬干擾造成的誤差則為羅盤自差 (Deviation)。" },
    { id: 68, type: "choice", question: "當地球磁極漂移導致機場磁偏角累積變化過大時，機場權責單位需採取何種措施？", options: ["僅重校地面雷達", "重新鋪設跑道柏油", "更改跑道號碼標示與相關航圖", "永久關閉機場"], answer: 2, explanation: "當跑道磁方位變化超過一定角度時，機場必須重新塗刷跑道號碼並更新飛航指南 (AIP) 與航圖。" },
    { id: 69, type: "choice", question: "機場吹正北風 (360°) 時，在 04/22 與 13/31 兩條交叉跑道中應優先選擇哪個方向？", options: ["04 號跑道", "22 號跑道", "13 號跑道", "31 號跑道"], answer: 0, explanation: "04 號跑道 (040°) 與正北風 (360°) 夾角僅 40 度，逆風分量最大（31 號跑道夾角為 50 度）。" },
    { id: 70, type: "choice", question: "磁方位角為 090 度的跑道，依國際民航與 ATMP 規範應如何標示與讀出？", options: ["9", "09（洞九跑道）", "N9", "090"], answer: 1, explanation: "跑道號碼一律採兩位數，小於 10 須於前方補零標示為 09，ATMP 術語讀作「洞九跑道」。" },
    { id: 71, type: "choice", question: "於無塔臺機場以目視飛航規則 (VFR) 加入機場航線 (Aerodrome Traffic Circuit) 時，最標準建議的切入方式為？", options: ["90 度切入四邊", "以 45 度角切入三邊 (Downwind) 中段", "直接逆向進場", "自跑道正上方垂直俯衝切入"], answer: 1, explanation: "以 45 度角切入三邊中段能提供最佳的相關航情觀察視野，並平順融入機場航線流量。" },
    { id: 72, type: "choice", question: "在標準機場航線起飛爬升後，通常於何時轉入二邊 / 側風邊 (Crosswind)？", options: ["離地瞬間立即轉彎", "距地面 100 呎", "達到距離機場航線高度 300 呎以內且通過跑道末端後", "爬升至巡航空層後"], answer: 2, explanation: "為確保安全越障，通常於通過跑道末端並爬升至距機場航線高度 300 呎以內（例如 700 呎 AGL）始轉入二邊。" },
    { id: 73, type: "choice", question: "當兩架同類別航空器同時進場準備落地時，依飛航規則誰擁有優先權？", options: ["空速較快者", "較晚加入航線者", "高度較低且已在五邊最後進場 (Final) 者", "大型客機一律無條件優先"], answer: 2, explanation: "高度較低且處於最後進場階段的航空器擁有優先權，但後機不得藉此搶先切入前機下方。" },
    { id: 74, type: "choice", question: "ATMP 中所稱之「連續起降 (Touch-and-Go)」是指何種操作？", options: ["全停煞停後再滑行起飛", "落地觸地滾行後不完全停止，隨即加速再次起飛", "不觸地直接低空通過 (Low Approach)", "起飛後立即放棄起飛"], answer: 1, explanation: "連續起降 (Touch-and-Go) 係指航空器著陸滾行後不完全停止，直接重新設定起飛構型並推大推力再次起飛。" },
    { id: 75, type: "choice", question: "在機場航線 (Aerodrome Traffic Circuit) 飛航中，最容易因轉彎過急發生「失速螺旋 (Stall/Spin)」的危險階段為？", options: ["起飛滾行", "二邊轉三邊", "四邊轉五邊 (Base to Final)", "45 度切入三邊"], answer: 2, explanation: "四邊轉五邊時高度低、空速慢，若因偏離中心線過度壓坡度或濫用內側方向舵，極易引發致命的失速螺旋。" },
    { id: 76, type: "choice", question: "無塔臺機場地面設置「航線指示圈 (Segmented Circle)」的主要目的為何？", options: ["僅供直昇機降落用", "標示無線電頻率", "以視覺化方式標示各跑道之機場航線轉彎方向", "標示機場產權邊界"], answer: 2, explanation: "航線指示圈上的 L 型指標用以標示四邊與五邊位置，讓空中駕駛員一眼確認左航線或右航線。" },
    { id: 77, type: "choice", question: "觀察到機場風向袋 (Windsock) 完全垂直朝下垂落，代表什麼狀況？", options: ["強烈陣風", "靜風 (Calm) 或風速極低", "正側風", "強烈下沉氣流"], answer: 1, explanation: "風向袋無飄動角度代表當時為靜風（依 ATMP 定義風速小於 1 浬/時）或微風。" },
    { id: 78, type: "choice", question: "跑道中心線標線 (Runway Centerline Marking) 的標準顏色與樣式為何？", options: ["實心黃線", "白色虛線", "實心白線", "黃色虛線"], answer: 1, explanation: "跑道標線均為白色，跑道中心線由等長且等距的白色虛線組成。" },
    { id: 79, type: "choice", question: "於跑道頭兩側設置、用於協助駕駛員在低能見度或複雜環境下快速辨識跑道起始端的一對白色同步閃光燈，依 ATMP 稱為？", options: ["跑道邊燈 (REDL)", "跑道頭識別燈 (Runway End Identifier Lights, REIL)[cite: 33]", "機場標燈 (ABN)", "滑行道燈 (Taxiway Lights)"], answer: 1, explanation: "依 ATMP 第 3-4-2 節，跑道頭識別燈 (REIL) 為一對置於跑道頭兩側的同步閃光白燈，用以快速識別跑道頭位置。" },
    { id: 80, type: "choice", question: "滑行道邊線繪有「雙實黃線 (Continuous Double Yellow Lines)」代表什麼？", options: ["可隨意穿越", "單行道滑行方向", "滑行道鋪面實體邊界，不可越過進入非鋪裝道肩", "即將進入跑道等待點"], answer: 2, explanation: "連續雙實黃線標示硬鋪面邊界，道肩結構無法承受航空器重量，嚴禁越過。" },
    { id: 81, type: "choice", question: "機場場面內「黑底黃字（外框黃色）」與「黃底黑字」指示牌之區別中，「黃底黑字」附箭頭指示牌代表什麼？", options: ["位置指示牌（目前所在滑行道）", "方向 / 目的地指示牌 (Direction / Destination Sign)", "跑道強制停止牌", "跑道剩餘距離牌"], answer: 1, explanation: "機場牌誌規則：黑底黃字為「位置指示牌 (Location Sign)」，標示目前所在位置；黃底黑字為方向／目的地指示牌，指引轉向或前往目標。" },
    { id: 82, type: "choice", question: "機場場面內「紅底白字」指示牌代表什麼含義？", options: ["一般資訊指示牌", "強制指示牌 (Mandatory Instruction Sign)，未獲航管許可嚴禁越過", "目的地指示牌", "停機坪位置指示牌"], answer: 1, explanation: "紅底白字屬強制指示牌（如跑道等待位置、儀降系統臨界區域），未獲塔臺許可絕對禁止越過。" },
    { id: 83, type: "choice", question: "跑道頭或跑道末端外側繪有黃色「V 字型（人字紋 Chevron）」標線之區域稱為？", options: ["直昇機起降區", "緩衝區 (Stopway)[cite: 52] / 防吹坪 (Blast Pad)，禁止正常滑行起降", "貴賓停機區", "起飛滾行起點"], answer: 1, explanation: "黃色 V 字型標線代表緩衝區 (Stopway)[cite: 52] 或防吹坪，其道面承載力不足，僅供緊急放棄起飛緩衝，嚴禁正常滑行或起降。" },
    { id: 84, type: "choice", question: "放下全角度襟翼 (Full Flaps) 時，其最主要的氣動特性變化為何？", options: ["產生額外推力", "阻力增幅大於升力增幅，利於陡角度下降減速", "升力增幅遠大於阻力增幅", "使飛機自動配平"], answer: 1, explanation: "襟翼伸展至大角度（全襟翼）時，阻力增加比例顯著高於升力，非常適合最後進場減速與控制下滑角。" },
    { id: 85, type: "choice", question: "空中巴士 A350 客機最顯著的外觀特徵為何？", image: "assets/A350外觀特徵.png", options: ["單走道窄體機身", "黑色「墨鏡」駕駛艙窗框與彎刀型翼端帆 (Sharklets)", "四發動機配置", "T 型尾翼"], answer: 1, explanation: "獨特的黑色墨鏡式駕駛艙窗框與平滑上翹的彎刀型翼端帆，是 A350 最易辨識的外觀特徵。" },
    { id: 86, type: "choice", question: "波音 B737 客機收起起落架後的機腹外觀特徵為何？", options: ["主起落架輪胎外側直接裸露貼齊機腹（無完整輪艙門）", "具有三組機腹主起落架", "採用履帶式起落架", "機腹輪艙採透明設計"], answer: 0, explanation: "B737 為減輕重量與簡化結構，主起落架收起後並無完整艙門遮蓋，輪胎外側直接外露並以橡膠氣封貼齊機腹。" },
    { id: 87, type: "choice", question: "發動機後置於機尾兩側的客機（如 MD-80、CRJ 系列），對客艙與氣動的主要影響為何？", options: ["機頭客艙最吵雜", "客艙前半段極為安靜，且機翼氣動構型乾淨", "機翼下方易吸入跑道外物 (FOD)", "無法配置貨艙"], answer: 1, explanation: "發動機噪音集中在機尾後方，使前中段客艙極度安靜，同時機翼無吊艙干擾、離地較高不易吸入外物。" },
    { id: 88, type: "choice", question: "傳統順時針旋轉（由駕駛艙向前看）之單發動機螺旋槳飛機於大推力起飛滾行時，機頭會自然向左偏航，駕駛員應如何修正？", options: ["踩左腳方向舵", "踩右腳方向舵 (Right Rudder)", "雙腳同時踩煞車", "不需修正"], answer: 1, explanation: "受螺旋槳扭矩、螺旋滑流與 P-Factor 影響，機頭會產生向左偏航趨勢，須踩右腳方向舵保持跑道中心線。" },
    { id: 89, type: "choice", question: "現代客機機翼末端加裝翼端帆 (Winglet / Sharklet) 的主要功能為何？", options: ["增加機翼結構重量", "阻隔上下翼面壓差氣流，減少翼尖渦流與誘導阻力 (Induced Drag)", "純粹外觀裝飾", "協助突破音速"], answer: 1, explanation: "翼端帆能有效抑制翼尖渦流 (Wingtip Vortices)，大幅降低誘導阻力並提升燃油效率。" },
    { id: 90, type: "choice", question: "目視進場滑降指示系統 (VASI) 與精確進場滑降指示燈 (PAPI) 在燈具排列上的主要差異為何？", options: ["顏色為藍紅搭配", "VASI 通常分為前後兩排燈組；PAPI 則為橫向並排四個燈具", "PAPI 僅有一個燈具", "兩者排列完全相同"], answer: 1, explanation: "VASI 以前後兩排（或三排）燈具構成目視走廊；PAPI 則以單一橫排四燈提供更精細的下滑道偏離指示。" },
    { id: 91, type: "choice", question: "依 ATMP 第 3-4-15 節，若於日間（日出至日落之間）觀察到機場標燈 (Aerodrome Beacon, ABN) 開啟運作，通常代表什麼？", options: ["有貴賓專機到場", "跑道正在施工", "機場雲幕高或能見度低於目視天氣標準（實施儀器飛航規則 IFR）", "塔臺設備故障"], answer: 2, explanation: "日間開啟機場標燈 (ABN) 通常表示該機場天氣低於目視天氣情況 (VMC) 標準，目視飛航 (VFR) 航空器非經特種目視許可不得進入。" },
    { id: 92, type: "choice", question: "快速滑行道 (Rapid Exit Taxiway) 中心線引導燈在接近跑道區域的顏色特徵為何？", options: ["全紅色", "綠、黃交替 (Alternating Green and Yellow)", "全藍色", "白、綠交替"], answer: 1, explanation: "快速滑行道中心線燈於脫離跑道至儀降系統 (ILS) 臨界／敏感區域邊界前為綠黃交替，提醒駕駛員尚未完全脫離保護區。" },
    { id: 93, type: "choice", question: "高空缺氧 (Hypoxia) 對駕駛員最危險的生理特徵為何？", options: ["會立即劇烈咳嗽示警", "初期常伴隨欣快感 (Euphoria) 且喪失自我判斷力，極難察覺", "視線完全變綠", "僅影響儀表運作"], answer: 1, explanation: "缺氧初期常使人產生過度自信與欣快感，在毫無痛苦與警覺的情況下迅速喪失操作能力甚至昏迷。" },
    { id: 94, type: "choice", question: "進行水肺深潛 (Scuba Diving) 後，一般飛航安全規範建議至少需間隔多久才能搭機或執行飛航任務？", options: ["1 小時", "3 小時", "至少 12 至 24 小時（依是否需減壓停留而定）", "無任何限制"], answer: 2, explanation: "深潛後體內溶有高壓氮氣，若未經足夠時間排氮即升空至低壓環境，將引發致命的減壓症 (Decompression Sickness)。" },
    { id: 95, type: "choice", question: "習慣標準寬度跑道的駕駛員，在進場降落於「更寬的跑道」時，容易產生何種視覺錯覺？", options: ["誤以為高度太低，進而過早拉平或維持過高下滑道", "誤以為正在倒飛", "誤以為跑道在移動", "誤以為高度太高而壓低機頭"], answer: 0, explanation: "較寬的跑道在視野中顯得較近，容易讓駕駛員錯覺飛機飛得太低，導致拉平過早或下滑道偏高。" },
    { id: 96, type: "choice", question: "美國聯邦航空總署 (FAA) 規定飛航組員執勤時血液酒精濃度 (BAC) 不得達到或高於多少？", options: ["0.08%", "0.04%", "0.10%", "0.02%"], answer: 1, explanation: "FAA 規定飲酒後 8 小時內（Bottle to Throttle）或血液酒精濃度達 0.04% 以上嚴禁執勤；中華民國民航法規則更嚴格要求酒測值須為零 (0.00)。" },
    { id: 97, type: "choice", question: "解除急性疲勞 (Acute Fatigue) 唯一真正有效的生理方法為何？", options: ["大量飲用咖啡", "進行劇烈運動", "充足的睡眠與休息", "吸食純氧"], answer: 2, explanation: "咖啡因僅能暫時掩蓋疲勞感，唯有充足且高品質的睡眠才能真正解除急性疲勞。" },
    { id: 98, type: "choice", question: "壓力 (Stress) 與駕駛員操作表現之間的關係（Yerkes-Dodson 定律）為何？", options: ["完全無壓力時表現最好", "適度壓力可提升專注與表現，但過度負荷將導致表現急劇崩潰", "壓力越大反應越精準", "壓力僅影響情緒不影響操作"], answer: 1, explanation: "壓力與表現呈倒 U 型曲線：缺乏壓力易鬆懈，適度壓力能維持最佳警覺，壓力過載則會導致決策失能。" },
    { id: 99, type: "choice", question: "晴空亂流 (Clear Air Turbulence, CAT) 最常發生於哪種大氣環境？", options: ["低空熱帶氣旋中心", "高空噴射氣流 (Jet Stream) 邊緣之強烈風切帶", "日間沿海海風帶", "高氣壓核心無風區"], answer: 1, explanation: "晴空亂流 (CAT) 常發生於無雲的高空噴射氣流周圍，因強烈垂直與水平風切所致，氣象雷達無法偵測。" },
    { id: 100, type: "choice", question: "大氣出現逆溫層 (Temperature Inversion) 時，通常伴隨什麼天氣特徵？", options: ["劇烈雷雨與冰雹", "空氣穩定，但易在逆溫層下方積聚霧氣、霾與低能見度", "強烈垂直對流狂風", "全天萬里無雲且能見度極佳"], answer: 1, explanation: "逆溫層像蓋子般阻擋垂直對流，使大氣平穩，但水氣與懸浮微粒易滯留於近地面造成低能見度與低空風切。" }
];

const EXAM_TIME_SECONDS = 1800; // 30分鐘
const QUESTIONS_COUNT = Math.min(30, questionBank.length); // 動態抽題防呆

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
function setTodayDate() {
    const dateInput = document.getElementById('candidate-date');
    if (dateInput) {
        const today = new Date().toLocaleDateString('en-CA', { timeZone: 'Asia/Taipei' });
        dateInput.value = today;
    }
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setTodayDate);
} else {
    setTodayDate();
}

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
        
        optionsLabels[q.answer].classList.add('correct');
        const correctBadge = document.createElement('span');
        correctBadge.innerHTML = ' <strong style="color: #155724; font-size: 0.95rem;">(✅ 正確解答)</strong>';
        optionsLabels[q.answer].appendChild(correctBadge);
        
        if (userAnswer === q.answer) {
            correctCount++;
        } else if (userAnswer !== -1) {
            optionsLabels[userAnswer].classList.add('wrong');
            const wrongBadge = document.createElement('span');
            wrongBadge.innerHTML = ' <strong style="color: #721c24; font-size: 0.95rem;">(❌ 您的作答)</strong>';
            optionsLabels[userAnswer].appendChild(wrongBadge);
        } else {
            explanationDiv.innerHTML = `<span style="color: #dc3545; font-weight: bold;">⚠️ 您此題未作答</span><br><br>` + explanationDiv.innerHTML;
        }
        
        explanationDiv.classList.remove('hidden');
        const allRadios = document.querySelectorAll(`input[name="q-${index}"]`);
        allRadios.forEach(radio => radio.disabled = true);
    });
    
    const score = Math.round((correctCount / currentQuestions.length) * 100);
    const passStatus = score >= 85 ? '<span style="color: #28a745;">PASS / 及格</span>' : '<span style="color: #dc3545;">FAIL / 不及格</span>';
    
    resultCandidateInfo.innerHTML = `考生：${candidateData.name} <br><span style="font-size: 0.95rem; color: #888;">Email：${candidateData.email} | 日期：${candidateData.date}</span>`;
    scoreDisplay.innerHTML = `${score} 分<br>${passStatus}`;
    
    document.getElementById('submit-btn').classList.add('hidden');
    resultScreen.classList.remove('hidden');
    
    resultScreen.scrollIntoView({ behavior: 'smooth' });

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
    setTodayDate();
    
    document.getElementById('submit-btn').classList.remove('hidden');
    window.scrollTo(0, 0);
}
