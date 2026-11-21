// ==========================================
// vTTW 飛行員入學筆試完整題庫 (共 200 題)
// 題庫第 1 - 200 題 (已依 ATMP 第19版中英文術語校訂)
// ==========================================
const questionBank = [
    {
        "id": 1,
        "type": "choice",
        "question": "在傳統六大飛航儀表中，唯一能同時指示航空器「俯仰 (Pitch)」與「滾轉 (Roll)」姿態的儀表為何？",
        "options": [
            "姿態儀 (Attitude Indicator)",
            "航向指示器 (Heading Indicator)",
            "高度表 (Altimeter)",
            "空速表 (Airspeed Indicator)"
        ],
        "answer": 0,
        "explanation": "姿態儀 (Attitude Indicator) 利用陀螺儀剛性原理，是唯一能直觀顯示航空器相對於真實地平線姿態的儀表。"
    },
    {
        "id": 2,
        "type": "choice",
        "question": "升降速率表 (Vertical Speed Indicator, VSI) 的主要功能是什麼？",
        "options": [
            "顯示絕對高度 (Absolute Altitude)",
            "顯示爬升或下降的垂直速率",
            "顯示真空速 (True Airspeed, TAS)",
            "顯示發動機轉速 (RPM)"
        ],
        "answer": 1,
        "explanation": "升降速率表 (VSI) 透過測量靜壓變化率，以呎/每分鐘 (FPM) 顯示航空器的爬升或下降速率。"
    },
    {
        "id": 3,
        "type": "choice",
        "question": "傳統六大飛航儀表中，哪三個是利用「皮托管-靜壓系統 (Pitot-Static System)」運作的？",
        "options": [
            "空速表、高度表、升降速率表",
            "姿態儀、航向指示器、轉彎協調表",
            "空速表、姿態儀、高度表",
            "升降速率表、航向指示器、轉彎協調表"
        ],
        "answer": 0,
        "explanation": "空速表 (ASI) 比較動壓與靜壓；高度表 (Altimeter) 與升降速率表 (VSI) 則純粹依賴靜壓系統運作。"
    },
    {
        "id": 4,
        "type": "choice",
        "question": "若皮托管 (Pitot Tube) 完全積冰堵塞，但靜壓孔 (Static Port) 正常，哪一個儀表會顯示異常？",
        "options": [
            "高度表 (Altimeter)",
            "升降速率表 (VSI)",
            "空速表 (Airspeed Indicator)",
            "姿態儀 (Attitude Indicator)"
        ],
        "answer": 2,
        "explanation": "皮托管僅提供動壓給空速表 (ASI)，堵塞會導致空速顯示異常，高度表與升降速率表不受影響。"
    },
    {
        "id": 5,
        "type": "choice",
        "question": "傳統航向指示器 (Heading Indicator, HI) 必須定時參照何種儀表來手動校準？",
        "options": [
            "姿態儀 (Attitude Indicator)",
            "磁羅盤 (Magnetic Compass)",
            "轉彎協調表 (Turn Coordinator)",
            "全球定位系統 (GPS)"
        ],
        "answer": 1,
        "explanation": "傳統航向指示器 (HI) 的陀螺儀會產生進動誤差，需定時對照磁羅盤 (Magnetic Compass) 手動校準。"
    },
    {
        "id": 6,
        "type": "choice",
        "question": "航空器起飛與落地時，一般應優先選擇何種風向？",
        "options": [
            "順風 (Tailwind)",
            "逆風 (Headwind)",
            "側風 (Crosswind)",
            "無風 / 靜風 (Calm)"
        ],
        "answer": 1,
        "explanation": "依 ATMP 規範，航空器通常逆風 (Headwind) 起飛及落地，以增加相對氣流速度並縮短跑道滾行距離。"
    },
    {
        "id": 7,
        "type": "choice",
        "question": "若機場例行天氣報告 (METAR) 顯示地面風為 270/15KT，最適合使用哪一條跑道？",
        "options": [
            "27 號跑道 (RWY 27)",
            "09 號跑道 (RWY 09)",
            "36 號跑道 (RWY 36)",
            "18 號跑道 (RWY 18)"
        ],
        "answer": 0,
        "explanation": "風向 270 代表風從磁方位 270 度（正西）吹來，應選擇 27 號跑道逆風起飛。"
    },
    {
        "id": 8,
        "type": "choice",
        "question": "順風 (Tailwind) 起飛會導致需要更長的可用起飛滾行距離 (TORA)，此說法是否正確？",
        "options": [
            "正確",
            "錯誤"
        ],
        "answer": 0,
        "explanation": "順風會降低相對氣流速度，航空器必須加速到更高的地速 (Ground Speed) 才能獲得足夠升力離地。"
    },
    {
        "id": 9,
        "type": "choice",
        "question": "低空最後進場 (Final Approach) 遭遇「順風轉逆風」之低空風切 (Low Level Wind Shear, LLWS) 時，航空器會產生什麼反應？",
        "options": [
            "空速驟減並下墜",
            "空速增加且升力驟增向上竄升",
            "強烈滾轉",
            "失去方向舵效應"
        ],
        "answer": 1,
        "explanation": "瞬間由順風轉為逆風會造成空速增加 (Airspeed Gain)，升力大增，使航空器高於正常下滑道 (Glide Path)。"
    },
    {
        "id": 10,
        "type": "choice",
        "question": "若地面風向與使用跑道 (Active Runway) 夾角為 90 度，側風分量 (Crosswind Component) 會是？",
        "options": [
            "總風速的一半",
            "零",
            "等於總風速 (100%)",
            "總風速的 70%"
        ],
        "answer": 2,
        "explanation": "正側風夾角為 90 度（sin 90° = 1），全部風速皆為側風分量。"
    },
    {
        "id": 11,
        "type": "choice",
        "question": "跑道號碼 (Runway Designation) 是依據什麼命名的？",
        "options": [
            "跑道總長度",
            "建造順序",
            "跑道指向之磁方位 (Magnetic Direction) 捨去個位數",
            "真方位 (True Direction)"
        ],
        "answer": 2,
        "explanation": "跑道號碼取其指向磁方位角四捨五入至最接近的十度，再捨去個位數（前兩位數字）命名。"
    },
    {
        "id": 12,
        "type": "choice",
        "question": "兩條平行的 36 跑道 (Parallel Runways)，如何標示區分？",
        "options": [
            "36 與 37",
            "36L 與 36R",
            "36A 與 36B",
            "北 36 與南 36"
        ],
        "answer": 1,
        "explanation": "平行跑道依進場方向之左右側，以 L (Left / 左) 與 R (Right / 右) 區分，如三六左、三六右跑道。"
    },
    {
        "id": 13,
        "type": "choice",
        "question": "05 號跑道 (RWY 05) 的相反方向跑道號碼是多少？",
        "options": [
            "15",
            "23",
            "30",
            "32"
        ],
        "answer": 1,
        "explanation": "相反方向相差 180 度（050 + 180 = 230），故為 23 號跑道 (RWY 23)。"
    },
    {
        "id": 14,
        "type": "choice",
        "question": "正對 09 號跑道 (RWY 09) 進場時，機頭大約指向哪個磁方位？",
        "options": [
            "正東 (090°)",
            "正南 (180°)",
            "正西 (270°)",
            "正北 (360°)"
        ],
        "answer": 0,
        "explanation": "09 號跑道代表磁方位約 090 度，即正東方。"
    },
    {
        "id": 15,
        "type": "choice",
        "question": "高緯度機場跑道號碼若依「真北 (True North)」命名，會在號碼後方加上什麼字母？",
        "options": [
            "M",
            "N",
            "T",
            "G"
        ],
        "answer": 2,
        "explanation": "高緯度地區磁偏角過大，跑道改以真北 (True North) 命名，並於號碼後加註 T。"
    },
    {
        "id": 16,
        "type": "choice",
        "question": "在機場航線 (Aerodrome Traffic Circuit) 中，與降落方向「相反」的航段稱為？",
        "options": [
            "一邊 / 逆風邊 (Upwind)",
            "二邊 / 側風邊 (Crosswind)",
            "三邊 / 順風邊 (Downwind)",
            "四邊 / 底邊 (Base)"
        ],
        "answer": 2,
        "explanation": "三邊 / 順風邊 (Downwind) 與降落跑道平行且方向相反。"
    },
    {
        "id": 17,
        "type": "choice",
        "question": "在機場航線 (Aerodrome Traffic Circuit) 中，連接三邊 (Downwind) 與五邊 / 最後進場 (Final) 的航段稱為？",
        "options": [
            "二邊 / 側風邊 (Crosswind)",
            "三邊 / 順風邊 (Downwind)",
            "四邊 / 底邊 (Base)",
            "一邊 / 離場邊 (Departure)"
        ],
        "answer": 2,
        "explanation": "四邊 / 底邊 (Base) 係垂直於跑道延伸線、連接三邊與五邊最後進場的航段。"
    },
    {
        "id": 18,
        "type": "choice",
        "question": "標準機場航線 (Aerodrome Traffic Circuit) 預設的轉彎方向為何？",
        "options": [
            "全右轉（右航線）",
            "全左轉（左航線）",
            "依地面風向決定",
            "依機長喜好決定"
        ],
        "answer": 1,
        "explanation": "除非航圖或塔臺另有指示（如右航線），標準機場航線預設為左航線（全左轉），因機長坐於左側視野較佳。"
    },
    {
        "id": 19,
        "type": "choice",
        "question": "輕型航空器 (Light Aircraft) 的標準機場航線空層 (AGL) 通常是多少？",
        "options": [
            "地平面上 500 呎 (500 ft AGL)",
            "地平面上 1,000 呎 (1,000 ft AGL)",
            "地平面上 1,500 呎 (1,500 ft AGL)",
            "地平面上 2,000 呎 (2,000 ft AGL)"
        ],
        "answer": 1,
        "explanation": "輕型航空器之標準機場航線高度通常為地平面上 (AGL) 1,000 呎。"
    },
    {
        "id": 20,
        "type": "choice",
        "question": "起飛後沿跑道中心線延伸方向爬升的機場航線航段稱為？",
        "options": [
            "三邊 / 順風邊 (Downwind)",
            "四邊 / 底邊 (Base)",
            "一邊 / 逆風邊 / 離場邊 (Upwind / Departure)",
            "二邊 / 側風邊 (Crosswind)"
        ],
        "answer": 2,
        "explanation": "起飛後沿跑道中心線延伸方向直線爬升的階段稱為一邊（逆風邊 / 離場邊）。"
    },
    {
        "id": 21,
        "type": "choice",
        "question": "機場風向袋 (Windsock) 大口朝東、尾部指向西方，代表當時吹什麼風？",
        "options": [
            "東風 (Easterly)",
            "西風 (Westerly)",
            "南風 (Southerly)",
            "北風 (Northerly)"
        ],
        "answer": 0,
        "explanation": "風從東方灌入風向袋大口並向西吹出，因此為東風。"
    },
    {
        "id": 22,
        "type": "choice",
        "question": "風向袋 (Windsock) 除了指示地面風向 (Wind Direction) 外，還能提供何種資訊？",
        "options": [
            "氣溫 (Temperature)",
            "概略的地面風速 (Wind Speed)",
            "高度表撥定值 (QNH)",
            "能見度 (Visibility)"
        ],
        "answer": 1,
        "explanation": "可依據風向袋被吹起充氣與水平伸展的程度，概略判斷地面風速。"
    },
    {
        "id": 23,
        "type": "choice",
        "question": "標準分段式風向袋 (Windsock) 每吹起一截條紋，大約代表多少節 (kt) 風速？",
        "options": [
            "1 節 (kt)",
            "3 節 (kt)",
            "10 節 (kt)",
            "15 節 (kt)"
        ],
        "answer": 1,
        "explanation": "標準五節式風向袋每吹起一截約代表 3 節 (kt)，完全水平伸展約為 15 節 (kt) 以上。"
    },
    {
        "id": 24,
        "type": "choice",
        "question": "觀察到風向袋 (Windsock) 劇烈左右擺動，代表什麼氣象狀況？",
        "options": [
            "雷陣雨 (TSRA)",
            "強烈陣風 (Gust) 與風向不穩",
            "濃霧 (FG)",
            "積冰 (Icing)"
        ],
        "answer": 1,
        "explanation": "風向袋劇烈擺動是地面存在明顯陣風與風向劇烈變化的直觀表現。"
    },
    {
        "id": 25,
        "type": "choice",
        "question": "機場四面體風向指示器 (Wind Tetrahedron) 尖端指向的主要作用為何？",
        "options": [
            "指示目前建議之起降方向",
            "顯示大氣壓力",
            "測量降雨量",
            "固定指向正北"
        ],
        "answer": 0,
        "explanation": "四面體尖端會指向風吹來的方向，提示駕駛員建議使用的逆風起降方向。"
    },
    {
        "id": 26,
        "type": "choice",
        "question": "機場操作區與活動區內，「黃色」標線通常代表什麼區域？",
        "options": [
            "一般跑道 (Runway)",
            "滑行道 (Taxiway) 與停機坪 (Apron)",
            "跑道著陸區 (Touchdown Zone)",
            "瞄準點 (Aiming Point)"
        ],
        "answer": 1,
        "explanation": "機場內跑道標線為白色；滑行道 (Taxiway) 與停機坪 (Apron) 標線為黃色。"
    },
    {
        "id": 27,
        "type": "choice",
        "question": "跑道頭 (Threshold) 的「鋼琴鍵」條紋標線數量代表什麼含義？",
        "options": [
            "跑道長度",
            "跑道寬度",
            "道面厚度",
            "最大起飛重量"
        ],
        "answer": 1,
        "explanation": "跑道頭 (Threshold) 的白色縱向條紋數量係對應跑道的物理寬度。"
    },
    {
        "id": 28,
        "type": "choice",
        "question": "滑行道上出現兩實線、兩虛線的黃色標線，且虛線端靠近跑道，代表什麼位置？",
        "options": [
            "跑道等待位置 (Runway-holding position)",
            "滑行道中心線 (Taxiway Centerline)",
            "跑道末端 (Runway End)",
            "停機坪邊界 (Apron Boundary)"
        ],
        "answer": 0,
        "explanation": "此為跑道等待位置 (Runway-holding position)；從實線側接近時，未獲塔臺許可不得超越。"
    },
    {
        "id": 29,
        "type": "choice",
        "question": "跑道上兩塊巨大的白色實心長方形標線稱為？",
        "options": [
            "跑道邊線 (Runway Side Stripe)",
            "位移跑道頭 (Displaced Threshold)",
            "瞄準點 (Aiming Point)",
            "儀降系統臨界區域 (ILS Critical Area)"
        ],
        "answer": 2,
        "explanation": "瞄準點 (Aiming Point) 標線係供進場航空器建立目視下滑參考之基準點。"
    },
    {
        "id": 30,
        "type": "choice",
        "question": "跑道前端繪有白色箭頭指向跑道頭橫線，代表該箭頭區域是？",
        "options": [
            "緩衝區 (Stopway)",
            "位移跑道頭 (Displaced Threshold)",
            "直昇機起降區 (Helipad)",
            "關閉區域 (Closed Area)"
        ],
        "answer": 1,
        "explanation": "位移跑道頭 (Displaced Threshold) 前方區域可用於滑行、起飛滾行或反向落地滾行，但禁止進場降落觸地。"
    },
    {
        "id": 31,
        "type": "choice",
        "question": "起飛與降落時放下襟翼 (Flaps) 的主要氣動目的為何？",
        "options": [
            "增加巡航速度",
            "增加升力與阻力，降低起降速度",
            "減少巡航油耗",
            "增加配平效率"
        ],
        "answer": 1,
        "explanation": "襟翼能改變機翼彎度與面積，在低空速下產生額外升力，並於降落時提供阻力以利減速。"
    },
    {
        "id": 32,
        "type": "choice",
        "question": "大角度（全角度）襟翼 (Full Flaps) 通常僅用於哪個飛航階段？",
        "options": [
            "起飛 (Takeoff)",
            "巡航 (Cruise)",
            "落地 / 最後進場 (Landing / Final Approach)",
            "爬升 (Climb)"
        ],
        "answer": 2,
        "explanation": "落地階段需要較陡的下降剖面但不增加空速，全襟翼所產生的額外阻力正好符合此需求。"
    },
    {
        "id": 33,
        "type": "choice",
        "question": "超過襟翼操作速度上限 (Vfe) 時強行放下襟翼，會造成什麼後果？",
        "options": [
            "進入倒飛",
            "發動機熄火",
            "結構受損甚至襟翼或機翼撕裂",
            "全機斷電"
        ],
        "answer": 2,
        "explanation": "超過最大襟翼伸展速度 (Vfe) 操作襟翼，過大的氣動負荷將導致嚴重機體結構破壞。"
    },
    {
        "id": 34,
        "type": "choice",
        "question": "傳統空速表 (Airspeed Indicator) 上代表「襟翼操作速度範圍」的顏色圓弧是？",
        "options": [
            "綠色圓弧 (Green Arc)",
            "黃色圓弧 (Yellow Arc)",
            "白色圓弧 (White Arc)",
            "紅色徑向線 (Red Radial Line)"
        ],
        "answer": 2,
        "explanation": "白色圓弧 (White Arc) 下限為 Vso、上限為 Vfe，代表襟翼可安全操作之空速範圍。"
    },
    {
        "id": 35,
        "type": "choice",
        "question": "正常起飛離地爬升後，應於何時收起襟翼 (Flaps)？",
        "options": [
            "主輪離地瞬間立即收起",
            "達到安全高度且空速持續增加時逐步收起",
            "進入巡航空層時",
            "轉入四邊時"
        ],
        "answer": 1,
        "explanation": "須於建立正爬升率、達到安全高度且空速高於規定收襟翼速度後逐步收起，以免升力驟降。"
    },
    {
        "id": 36,
        "type": "choice",
        "question": "具備機首前半段雙層客艙「駝峰」外觀設計的經典客機是？",
        "options": [
            "A380",
            "B777",
            "B747",
            "MD-11"
        ],
        "answer": 2,
        "explanation": "波音 B747 擁有標誌性的機首上層客艙駝峰設計。"
    },
    {
        "id": 37,
        "type": "choice",
        "question": "Cessna 172 屬於哪一種機翼配置設計？",
        "options": [
            "下單翼 (Low Wing)",
            "上單翼 (High Wing)",
            "中單翼 (Mid Wing)",
            "雙翼 (Biplane)"
        ],
        "answer": 1,
        "explanation": "Cessna 172 的機翼安裝在機身頂部，屬於上單翼 (High Wing) 設計。"
    },
    {
        "id": 38,
        "type": "choice",
        "question": "ATR 72 區域客機的動力來源是哪一種發動機？",
        "options": [
            "純渦輪噴射 (Turbojet)",
            "渦輪扇 (Turbofan)",
            "渦輪螺旋槳 (Turboprop)",
            "活塞式 (Piston)"
        ],
        "answer": 2,
        "explanation": "ATR 72 採用雙具渦輪螺旋槳 (Turboprop) 發動機，適合中短程區域航線。"
    },
    {
        "id": 39,
        "type": "choice",
        "question": "水平尾翼安裝在垂直尾翼最頂端，形成哪一種尾翼構型？",
        "options": [
            "V 型尾翼 (V-tail)",
            "十字型尾翼 (Cruciform Tail)",
            "T 型尾翼 (T-tail)",
            "雙垂直尾翼 (Twin Tail)"
        ],
        "answer": 2,
        "explanation": "水平尾翼置於垂直尾翼頂端呈 T 字形，稱為 T 型尾翼 (T-tail)。"
    },
    {
        "id": 40,
        "type": "choice",
        "question": "前三點式 (Tricycle Gear) 與後三點式 (Tailwheel Gear) 航空器如何分辨？",
        "options": [
            "前三點式具有尾輪",
            "後三點式主輪在前方並於機尾裝有尾輪",
            "前三點式無起落架",
            "後三點式停於地面時機身完全水平"
        ],
        "answer": 1,
        "explanation": "後三點式航空器具有尾輪，停放地面時機頭上揚；前三點式則具有鼻輪，機身呈水平。"
    },
    {
        "id": 41,
        "type": "choice",
        "question": "精確進場滑降指示燈 (Precision Approach Path Indicator, PAPI) 顯示「兩紅兩白」代表什麼？",
        "options": [
            "高於下滑道",
            "低於下滑道",
            "位於正確下滑道 (On Glide Path)",
            "偏離跑道中心線"
        ],
        "answer": 2,
        "explanation": "PAPI 橫向四燈顯示「兩紅兩白」時，代表航空器正位於標準下滑道（通常為 3 度）上。"
    },
    {
        "id": 42,
        "type": "choice",
        "question": "滑行道邊燈 (Taxiway Edge Lights) 的標準顏色為何？",
        "options": [
            "藍色 (Blue)",
            "綠色 (Green)",
            "白色 (White)",
            "紅色 (Red)"
        ],
        "answer": 0,
        "explanation": "依國際民航與機場燈光規範，滑行道邊燈為藍色，滑行道中心線燈則為綠色。"
    },
    {
        "id": 43,
        "type": "choice",
        "question": "機場標燈 (Aerodrome Beacon, ABN) 交替閃爍「白光與綠光」，代表何種機場？",
        "options": [
            "軍用機場",
            "水上機場",
            "直昇機飛行場",
            "民用陸上機場"
        ],
        "answer": 3,
        "explanation": "民用陸上機場之機場標燈 (ABN) 為白、綠光交替閃爍；軍用機場則為兩次白光交替一次綠光。"
    },
    {
        "id": 44,
        "type": "choice",
        "question": "跑道邊燈 (Runway Edge Lights, REDL) 在跑道主要長度區段是什麼顏色？",
        "options": [
            "黃色 (Yellow)",
            "紅色 (Red)",
            "綠色 (Green)",
            "白色 (White)"
        ],
        "answer": 3,
        "explanation": "跑道邊燈 (REDL) 主體為白色，於儀器跑道最後 600 公尺（2,000 呎）或三分之一處改為黃色以示警戒。"
    },
    {
        "id": 45,
        "type": "choice",
        "question": "設置於跑道起始處、朝向進場航空器發出恆亮綠光的燈光稱為？",
        "options": [
            "跑道末端燈 (Runway End Lights)",
            "跑道頭燈 (Runway Threshold Lights)",
            "進場燈光系統 (ALS)",
            "著陸區燈光系統 (TDZL)"
        ],
        "answer": 1,
        "explanation": "跑道頭燈 (Runway Threshold Lights) 朝向進場方向發出綠光，標示可用作落地之跑道起始處。"
    },
    {
        "id": 46,
        "type": "choice",
        "question": "飛安人為因素 (Human Factors) 中的 SHELL 模型「不包含」下列何者？",
        "options": [
            "Software (軟體/程序)",
            "Hardware (硬體/裝備)",
            "Environment (環境)",
            "Language (語言)"
        ],
        "answer": 3,
        "explanation": "SHELL 模型由 Software、Hardware、Environment、Liveware（人）及另一 Liveware（團隊/他人）組成。"
    },
    {
        "id": 47,
        "type": "choice",
        "question": "瑞士起司理論 (Swiss Cheese Model) 認為航空失事的主要成因為何？",
        "options": [
            "單一操作失誤",
            "純粹機械設計瑕疵",
            "多層安全防護網的漏洞同時連成一線",
            "僅因天候惡劣"
        ],
        "answer": 2,
        "explanation": "當組織、管理、程序與個人等多層防護機制的漏洞同時對齊穿透時，便會釀成失事。"
    },
    {
        "id": 48,
        "type": "choice",
        "question": "在儀器天氣情況 (IMC) 雲中飛航時，生理感官覺得正在轉彎但儀表顯示平飛，此現象稱為？",
        "options": [
            "高山症",
            "空間迷向 (Spatial Disorientation)",
            "隧道視覺 (Tunnel Vision)",
            "減壓症 (Decompression Sickness)"
        ],
        "answer": 1,
        "explanation": "缺乏外界目視參考時，內耳前庭與本體感覺易受欺騙而產生空間迷向，必須完全信賴飛航儀表。"
    },
    {
        "id": 49,
        "type": "choice",
        "question": "飛航前自我健康檢查清單「IMSAFE」中的 'M' 代表什麼？",
        "options": [
            "Money (金錢)",
            "Motivation (動機)",
            "Medication (藥物)",
            "Memory (記憶)"
        ],
        "answer": 2,
        "explanation": "IMSAFE 分別為 Illness、Medication (藥物)、Stress、Alcohol、Fatigue、Emotion。"
    },
    {
        "id": 50,
        "type": "choice",
        "question": "組員資源管理 (Crew Resource Management, CRM) 的核心目的為何？",
        "options": [
            "強化機長絕對權威",
            "有效運用所有可用資源以提升飛航安全",
            "降低航空公司營運成本",
            "加快旅客登機速度"
        ],
        "answer": 1,
        "explanation": "CRM 旨在透過良好溝通、狀況警覺與團隊決策，有效管理人為失誤並確保飛航安全。"
    },
    {
        "id": 51,
        "type": "choice",
        "question": "機場例行天氣報告 (METAR) 中出現「CAVOK」代表什麼？",
        "options": [
            "機場關閉",
            "能見度、雲及現在天氣較指定情況更佳（天氣良好）",
            "強烈暴風雨",
            "能見度極低"
        ],
        "answer": 1,
        "explanation": "依 ATMP 定義，CAVOK (唸成 KAV-OH-KAY) 代表能見度 10 公里以上、無低於 5,000 呎之雲或積雨雲且無顯著天氣現象。"
    },
    {
        "id": 52,
        "type": "choice",
        "question": "航空器於進場時若不慎切入微爆氣流 (Microburst) 核心，通常會先經歷何種氣流變化？",
        "options": [
            "強烈逆風（空速增加）",
            "劇烈向左偏航",
            "發動機立即熄火",
            "直接遭遇強烈順風"
        ],
        "answer": 0,
        "explanation": "進入微爆氣流時，通常會先遭遇強烈逆風（性能暫時增加），隨即進入強烈下沉氣流，接著瞬間轉為強烈順風導致空速劇降。"
    },
    {
        "id": 53,
        "type": "choice",
        "question": "雷雨 (Thunderstorm) 形成所需的三個基本條件為何？",
        "options": [
            "高氣壓、冷空氣、強風",
            "充足水氣、不穩定大氣、舉升機制",
            "乾燥空氣、高溫、平坦地形",
            "鋒面、海風、逆溫層"
        ],
        "answer": 1,
        "explanation": "雷雨發展必須同時具備充足水氣、不穩定大氣層結，以及地形、鋒面或熱對流等舉升觸發力。"
    },
    {
        "id": 54,
        "type": "choice",
        "question": "當氣溫 (Temperature) 非常接近露點溫度 (Dew Point) 時，機場最容易發生什麼天氣現象？",
        "options": [
            "龍捲風",
            "高空晴空亂流",
            "起霧 (Fog) 或低雲",
            "冰雹"
        ],
        "answer": 2,
        "explanation": "氣溫與露點差縮小時，空氣接近飽和，水氣極易凝結形成霧、薄霧或低層雲幕。"
    },
    {
        "id": 55,
        "type": "choice",
        "question": "機翼積冰 (Icing) 對航空器飛航安全最致命的影響為何？",
        "options": [
            "增加發動機推力",
            "破壞翼面光滑氣流，大幅降低升力並提高失速速度",
            "僅使擋風玻璃模糊",
            "增加油箱容量"
        ],
        "answer": 1,
        "explanation": "積冰會破壞翼剖面外型與邊界層氣流，導致升力銳減、阻力劇增並使航空器提早失速。"
    },
    {
        "id": 56,
        "type": "choice",
        "question": "傳統空速表 (Airspeed Indicator) 上的綠色圓弧 (Green Arc) 代表什麼？",
        "options": [
            "襟翼操作範圍",
            "正常操作速度範圍 (Normal Operating Range)",
            "警戒速度範圍",
            "發動機轉速範圍"
        ],
        "answer": 1,
        "explanation": "綠色圓弧下限為乾淨構型失速速度 (Vs1)，上限為最大結構巡航速度 (Vno)，代表正常操作速度範圍。"
    },
    {
        "id": 57,
        "type": "choice",
        "question": "輕型航空器的真空系統 (Vacuum System) 故障時，通常會導致哪兩個傳統儀表失效？",
        "options": [
            "空速表、高度表",
            "姿態儀、航向指示器",
            "升降速率表、轉彎協調表",
            "高度表、姿態儀"
        ],
        "answer": 1,
        "explanation": "傳統姿態儀 (AI) 與航向指示器 (HI) 多由引擎驅動的真空系統帶動陀螺儀；轉彎協調表則多採獨立電力驅動。"
    },
    {
        "id": 58,
        "type": "choice",
        "question": "航空器於起飛前及低於轉換空層 (Transition Level) 飛航時，高度表應調整為何種高度表撥定值 (Altimeter Setting)？",
        "options": [
            "直接歸零",
            "標準大氣壓 (1013.2 hPa)",
            "當地海平面氣壓 (QNH)",
            "無線電絕對高度"
        ],
        "answer": 2,
        "explanation": "依 ATMP 規定，撥定當地 QNH 高度表撥定值時，高度表於地面將顯示機場標高 (Aerodrome Elevation)，空中則顯示高度 (Altitude)。"
    },
    {
        "id": 59,
        "type": "choice",
        "question": "轉彎協調表 (Turn Coordinator) 下方的黑球（側滑儀 Inclinometer）主要作用為何？",
        "options": [
            "指示俯仰角",
            "顯示轉彎時之側滑 (Slip) 或外滑 (Skid) 協調狀態",
            "顯示剩餘燃油",
            "顯示真空系統壓力"
        ],
        "answer": 1,
        "explanation": "黑球置中代表協調轉彎；偏離中心時駕駛員須依「踩球 (Step on the ball)」原則修正方向舵。"
    },
    {
        "id": 60,
        "type": "choice",
        "question": "依航空與 ATMP 定義，「高度 / 真高度 (Altitude / True Altitude)」是指什麼？",
        "options": [
            "距離地平面之實際高度 (AGL)",
            "未修正氣壓之指示高度",
            "自平均海平面 (MSL) 至空中某點之實際垂直距離",
            "相對於標準大氣壓 1013.2 hPa 之飛航空層"
        ],
        "answer": 2,
        "explanation": "高度 (Altitude) 係指自平均海平面 (Mean Sea Level, MSL) 算起之垂直距離。"
    },
    {
        "id": 61,
        "type": "choice",
        "question": "側風進場時使用「蟹行法 (Crab Method)」的主要目的為何？",
        "options": [
            "加快減速",
            "讓機首始終與跑道平行",
            "將機首偏轉迎風以抵銷側風飄移，保持對準跑道中心線",
            "刻意以單側主輪觸地"
        ],
        "answer": 2,
        "explanation": "蟹行法藉由將機首轉向迎風側，使航空器的對地航跡 (Track) 維持在跑道中心線延伸線上。"
    },
    {
        "id": 62,
        "type": "choice",
        "question": "以 10 節 (kt) 順風 (Tailwind) 落地會對降落性能造成什麼影響？",
        "options": [
            "地速增加，著陸滾行距離大幅拉長",
            "地速降低且容易失速",
            "下降率變慢",
            "落地更平穩且省煞車"
        ],
        "answer": 0,
        "explanation": "順風會直接疊加於進場空速上使地速 (GS) 增加，導致觸地後所需煞車與滾行距離顯著增加。"
    },
    {
        "id": 63,
        "type": "choice",
        "question": "若地面風向與使用跑道夾角為 45 度，側風分量 (Crosswind Component) 約佔總風速多少？",
        "options": [
            "30%",
            "50%",
            "70%",
            "100%"
        ],
        "answer": 2,
        "explanation": "sin(45°) 約為 0.707，因此側風分量約為總風速的 70%。"
    },
    {
        "id": 64,
        "type": "choice",
        "question": "強風吹越山脈時，哪一側最容易出現強烈下沉氣流與山岳波亂流？",
        "options": [
            "迎風面 (Windward Side)",
            "背風面 (Leeward Side)",
            "山頂正上方",
            "開闊平谷"
        ],
        "answer": 1,
        "explanation": "氣流越過山脊後於背風面 (Leeward Side) 易形成強烈下沉氣流、滾軸雲及劇烈山岳波亂流。"
    },
    {
        "id": 65,
        "type": "choice",
        "question": "在陣風 (Gust) 環境下進行最後進場時，進場參考速度 (Vref) 通常應如何調整？",
        "options": [
            "減少陣風值的一半",
            "維持不變",
            "加上陣風差額（陣風減平均風）的一半作為速度補償",
            "直接加上全部總風速"
        ],
        "answer": 2,
        "explanation": "一般標準程序會將陣風差額的一半（依機型規定設有上限）加至 Vref，以防陣風驟停造成失速。"
    },
    {
        "id": 66,
        "type": "choice",
        "question": "13 號跑道 (RWY 13) 的相反方向跑道標示為何？",
        "options": [
            "04",
            "22",
            "31",
            "36"
        ],
        "answer": 2,
        "explanation": "130 + 180 = 310，捨去個位數即為 31 號跑道 (RWY 31)。"
    },
    {
        "id": 67,
        "type": "choice",
        "question": "地球上磁北極 (Magnetic North) 與真北極 (True North) 之間的夾角誤差稱為？",
        "options": [
            "磁偏角 (Magnetic Variation)",
            "羅盤自差 (Compass Deviation)",
            "磁傾角 (Magnetic Dip)",
            "陀螺進動 (Precession)"
        ],
        "answer": 0,
        "explanation": "磁北與真北的角度差異稱為磁偏角 (Magnetic Variation)；機體金屬干擾造成的誤差則為羅盤自差 (Deviation)。"
    },
    {
        "id": 68,
        "type": "choice",
        "question": "當地球磁極漂移導致機場磁偏角累積變化過大時，機場權責單位需採取何種措施？",
        "options": [
            "僅重校地面雷達",
            "重新鋪設跑道柏油",
            "更改跑道號碼標示與相關航圖",
            "永久關閉機場"
        ],
        "answer": 2,
        "explanation": "當跑道磁方位變化超過一定角度時，機場必須重新塗刷跑道號碼並更新飛航指南 (AIP) 與航圖。"
    },
    {
        "id": 69,
        "type": "choice",
        "question": "機場吹正北風 (360°) 時，在 04/22 與 13/31 兩條交叉跑道中應優先選擇哪個方向？",
        "options": [
            "04 號跑道",
            "22 號跑道",
            "13 號跑道",
            "31 號跑道"
        ],
        "answer": 0,
        "explanation": "04 號跑道 (040°) 與正北風 (360°) 夾角僅 40 度，逆風分量最大（31 號跑道夾角為 50 度）。"
    },
    {
        "id": 70,
        "type": "choice",
        "question": "磁方位角為 090 度的跑道，依國際民航與 ATMP 規範應如何標示與讀出？",
        "options": [
            "9",
            "09（洞九跑道）",
            "N9",
            "090"
        ],
        "answer": 1,
        "explanation": "跑道號碼一律採兩位數，小於 10 須於前方補零標示為 09，ATMP 術語讀作「洞九跑道」。"
    },
    {
        "id": 71,
        "type": "choice",
        "question": "於無塔臺機場以目視飛航規則 (VFR) 加入機場航線 (Aerodrome Traffic Circuit) 時，最標準建議的切入方式為？",
        "options": [
            "90 度切入四邊",
            "以 45 度角切入三邊 (Downwind) 中段",
            "直接逆向進場",
            "自跑道正上方垂直俯衝切入"
        ],
        "answer": 1,
        "explanation": "以 45 度角切入三邊中段能提供最佳的相關航情觀察視野，並平順融入機場航線流量。"
    },
    {
        "id": 72,
        "type": "choice",
        "question": "在標準機場航線起飛爬升後，通常於何時轉入二邊 / 側風邊 (Crosswind)？",
        "options": [
            "離地瞬間立即轉彎",
            "距地面 100 呎",
            "達到距離機場航線高度 300 呎以內且通過跑道末端後",
            "爬升至巡航空層後"
        ],
        "answer": 2,
        "explanation": "為確保安全越障，通常於通過跑道末端並爬升至距機場航線高度 300 呎以內（例如 700 呎 AGL）始轉入二邊。"
    },
    {
        "id": 73,
        "type": "choice",
        "question": "當兩架同類別航空器同時進場準備落地時，依飛航規則誰擁有優先權？",
        "options": [
            "空速較快者",
            "較晚加入航線者",
            "高度較低且已在五邊最後進場 (Final) 者",
            "大型客機一律無條件優先"
        ],
        "answer": 2,
        "explanation": "高度較低且處於最後進場階段的航空器擁有優先權，但後機不得藉此搶先切入前機下方。"
    },
    {
        "id": 74,
        "type": "choice",
        "question": "ATMP 中所稱之「連續起降 (Touch-and-Go)」是指何種操作？",
        "options": [
            "全停煞停後再滑行起飛",
            "落地觸地滾行後不完全停止，隨即加速再次起飛",
            "不觸地直接低空通過 (Low Approach)",
            "起飛後立即放棄起飛"
        ],
        "answer": 1,
        "explanation": "連續起降 (Touch-and-Go) 係指航空器著陸滾行後不完全停止，直接重新設定起飛構型並推大推力再次起飛。"
    },
    {
        "id": 75,
        "type": "choice",
        "question": "在機場航線 (Aerodrome Traffic Circuit) 飛航中，最容易因轉彎過急發生「失速螺旋 (Stall/Spin)」的危險階段為？",
        "options": [
            "起飛滾行",
            "二邊轉三邊",
            "四邊轉五邊 (Base to Final)",
            "45 度切入三邊"
        ],
        "answer": 2,
        "explanation": "四邊轉五邊時高度低、空速慢，若因偏離中心線過度壓坡度或濫用內側方向舵，極易引發致命的失速螺旋。"
    },
    {
        "id": 76,
        "type": "choice",
        "question": "無塔臺機場地面設置「航線指示圈 (Segmented Circle)」的主要目的為何？",
        "options": [
            "僅供直昇機降落用",
            "標示無線電頻率",
            "以視覺化方式標示各跑道之機場航線轉彎方向",
            "標示機場產權邊界"
        ],
        "answer": 2,
        "explanation": "航線指示圈上的 L 型指標用以標示四邊與五邊位置，讓空中駕駛員一眼確認左航線或右航線。"
    },
    {
        "id": 77,
        "type": "choice",
        "question": "觀察到機場風向袋 (Windsock) 完全垂直朝下垂落，代表什麼狀況？",
        "options": [
            "強烈陣風",
            "靜風 (Calm) 或風速極低",
            "正側風",
            "強烈下沉氣流"
        ],
        "answer": 1,
        "explanation": "風向袋無飄動角度代表當時為靜風（依 ATMP 定義風速小於 1 浬/時）或微風。"
    },
    {
        "id": 78,
        "type": "choice",
        "question": "跑道中心線標線 (Runway Centerline Marking) 的標準顏色與樣式為何？",
        "options": [
            "實心黃線",
            "白色虛線",
            "實心白線",
            "黃色虛線"
        ],
        "answer": 1,
        "explanation": "跑道標線均為白色，跑道中心線由等長且等距的白色虛線組成。"
    },
    {
        "id": 79,
        "type": "choice",
        "question": "於跑道頭兩側設置、用於協助駕駛員在低能見度或複雜環境下快速辨識跑道起始端的一對白色同步閃光燈，依 ATMP 稱為？",
        "options": [
            "跑道邊燈 (REDL)",
            "跑道頭識別燈 (Runway End Identifier Lights, REIL)",
            "機場標燈 (ABN)",
            "滑行道燈 (Taxiway Lights)"
        ],
        "answer": 1,
        "explanation": "依 ATMP 第 3-4-2 節，跑道頭識別燈 (REIL) 為一對置於跑道頭兩側的同步閃光白燈，用以快速識別跑道頭位置。"
    },
    {
        "id": 80,
        "type": "choice",
        "question": "滑行道邊線繪有「雙實黃線 (Continuous Double Yellow Lines)」代表什麼？",
        "options": [
            "可隨意穿越",
            "單行道滑行方向",
            "滑行道鋪面實體邊界，不可越過進入非鋪裝道肩",
            "即將進入跑道等待點"
        ],
        "answer": 2,
        "explanation": "連續雙實黃線標示硬鋪面邊界，道肩結構無法承受航空器重量，嚴禁越過。"
    },
    {
        "id": 81,
        "type": "choice",
        "question": "機場場面內「黑底黃字（外框黃色）」與「黃底黑字」指示牌之區別中，「黃底黑字」附箭頭指示牌代表什麼？",
        "options": [
            "位置指示牌（目前所在滑行道）",
            "方向 / 目的地指示牌 (Direction / Destination Sign)",
            "跑道強制停止牌",
            "跑道剩餘距離牌"
        ],
        "answer": 1,
        "explanation": "機場牌誌規則：黑底黃字為「位置指示牌 (Location Sign)」，標示目前所在位置；黃底黑字為「方向／目的地指示牌」，指引轉向或前往目標。"
    },
    {
        "id": 82,
        "type": "choice",
        "question": "機場場面內「紅底白字」指示牌代表什麼含義？",
        "options": [
            "一般資訊指示牌",
            "強制指示牌 (Mandatory Instruction Sign)，未獲航管許可嚴禁越過",
            "目的地指示牌",
            "停機坪位置指示牌"
        ],
        "answer": 1,
        "explanation": "紅底白字屬強制指示牌（如跑道等待位置、儀降系統臨界區域），未獲塔臺許可絕對禁止越過。"
    },
    {
        "id": 83,
        "type": "choice",
        "question": "跑道頭或跑道末端外側繪有黃色「V 字型（人字紋 Chevron）」標線之區域稱為？",
        "options": [
            "直昇機起降區",
            "緩衝區 (Stopway) / 防吹坪 (Blast Pad)，禁止正常滑行起降",
            "貴賓停機區",
            "起飛滾行起點"
        ],
        "answer": 1,
        "explanation": "黃色 V 字型標線代表緩衝區 (Stopway) 或防吹坪，其道面承載力不足，僅供緊急放棄起飛緩衝，嚴禁正常滑行或起降。"
    },
    {
        "id": 84,
        "type": "choice",
        "question": "放下全角度襟翼 (Full Flaps) 時，其最主要的氣動特性變化為何？",
        "options": [
            "產生額外推力",
            "阻力增幅大於升力增幅，利於陡角度下降減速",
            "升力增幅遠大於阻力增幅",
            "使飛機自動配平"
        ],
        "answer": 1,
        "explanation": "襟翼伸展至大角度（全襟翼）時，阻力增加比例顯著高於升力，非常適合最後進場減速與控制下滑角。"
    },
    {
        "id": 85,
        "type": "choice",
        "question": "空中巴士 A350 客機最顯著的外觀特徵為何？",
        "image": "assets/A350外觀特徵.png",
        "options": [
            "單走道窄體機身",
            "黑色「墨鏡」駕駛艙窗框與彎刀型翼端帆 (Sharklets)",
            "四發動機配置",
            "T 型尾翼"
        ],
        "answer": 1,
        "explanation": "獨特的黑色墨鏡式駕駛艙窗框與平滑上翹的彎刀型翼端帆，是 A350 最易辨識的外觀特徵。"
    },
    {
        "id": 86,
        "type": "choice",
        "question": "波音 B737 客機收起起落架後的機腹外觀特徵為何？",
        "options": [
            "主起落架輪胎外側直接裸露貼齊機腹（無完整輪艙門）",
            "具有三組機腹主起落架",
            "採用履帶式起落架",
            "機腹輪艙採透明設計"
        ],
        "answer": 0,
        "explanation": "B737 為減輕重量與簡化結構，主起落架收起後並無完整艙門遮蓋，輪胎外側直接外露並以橡膠氣封貼齊機腹。"
    },
    {
        "id": 87,
        "type": "choice",
        "question": "發動機後置於機尾兩側的客機（如 MD-80、CRJ 系列），對客艙與氣動的主要影響為何？",
        "options": [
            "機頭客艙最吵雜",
            "客艙前半段極為安靜，且機翼氣動構型乾淨",
            "機翼下方易吸入跑道外物 (FOD)",
            "無法配置貨艙"
        ],
        "answer": 1,
        "explanation": "發動機噪音集中在機尾後方，使前中段客艙極度安靜，同時機翼無吊艙干擾、離地較高不易吸入外物。"
    },
    {
        "id": 88,
        "type": "choice",
        "question": "傳統順時針旋轉（由駕駛艙向前看）之單發動機螺旋槳飛機於大推力起飛滾行時，機頭會自然向左偏航，駕駛員應如何修正？",
        "options": [
            "踩左腳方向舵",
            "踩右腳方向舵 (Right Rudder)",
            "雙腳同時踩煞車",
            "不需修正"
        ],
        "answer": 1,
        "explanation": "受螺旋槳扭矩、螺旋滑流與 P-Factor 影響，機頭會產生向左偏航趨勢，須踩右腳方向舵保持跑道中心線。"
    },
    {
        "id": 89,
        "type": "choice",
        "question": "現代客機機翼末端加裝翼端帆 (Winglet / Sharklet) 的主要功能為何？",
        "options": [
            "增加機翼結構重量",
            "阻隔上下翼面壓差氣流，減少翼尖渦流與誘導阻力 (Induced Drag)",
            "純粹外觀裝飾",
            "協助突破音速"
        ],
        "answer": 1,
        "explanation": "翼端帆能有效抑制翼尖渦流 (Wingtip Vortices)，大幅降低誘導阻力並提升燃油效率。"
    },
    {
        "id": 90,
        "type": "choice",
        "question": "目視進場滑降指示系統 (VASI) 與精確進場滑降指示燈 (PAPI) 在燈具排列上的主要差異為何？",
        "options": [
            "顏色為藍紅搭配",
            "VASI 通常分為前後兩排燈組；PAPI 則為橫向並排四個燈具",
            "PAPI 僅有一個燈具",
            "兩者排列完全相同"
        ],
        "answer": 1,
        "explanation": "VASI 以前後兩排（或三排）燈具構成目視走廊；PAPI 則以單一橫排四燈提供更精細的下滑道偏離指示。"
    },
    {
        "id": 91,
        "type": "choice",
        "question": "依 ATMP 第 3-4-15 節，若於日間（日出至日落之間）觀察到機場標燈 (Aerodrome Beacon, ABN) 開啟運作，通常代表什麼？",
        "options": [
            "有貴賓專機到場",
            "跑道正在施工",
            "機場雲幕高或能見度低於目視天氣標準（實施儀器飛航規則 IFR）",
            "塔臺設備故障"
        ],
        "answer": 2,
        "explanation": "日間開啟機場標燈 (ABN) 通常表示該機場天氣低於目視天氣情況 (VMC) 標準，目視飛航 (VFR) 航空器非經特種目視許可不得進入。"
    },
    {
        "id": 92,
        "type": "choice",
        "question": "快速滑行道 (Rapid Exit Taxiway) 中心線引導燈在接近跑道區域的顏色特徵為何？",
        "options": [
            "全紅色",
            "綠、黃交替 (Alternating Green and Yellow)",
            "全藍色",
            "白、綠交替"
        ],
        "answer": 1,
        "explanation": "快速滑行道中心線燈於脫離跑道至儀降系統 (ILS) 臨界／敏感區域邊界前為綠黃交替，提醒駕駛員尚未完全脫離保護區。"
    },
    {
        "id": 93,
        "type": "choice",
        "question": "高空缺氧 (Hypoxia) 對駕駛員最危險的生理特徵為何？",
        "options": [
            "會立即劇烈咳嗽示警",
            "初期常伴隨欣快感 (Euphoria) 且喪失自我判斷力，極難察覺",
            "視線完全變綠",
            "僅影響儀表運作"
        ],
        "answer": 1,
        "explanation": "缺氧初期常使人產生過度自信與欣快感，在毫無痛苦與警覺的情況下迅速喪失操作能力甚至昏迷。"
    },
    {
        "id": 94,
        "type": "choice",
        "question": "進行水肺深潛 (Scuba Diving) 後，一般飛航安全規範建議至少需間隔多久才能搭機或執行飛航任務？",
        "options": [
            "1 小時",
            "3 小時",
            "至少 12 至 24 小時（依是否需減壓停留而定）",
            "無任何限制"
        ],
        "answer": 2,
        "explanation": "深潛後體內溶有高壓氮氣，若未經足夠時間排氮即升空至低壓環境，將引發致命的減壓症 (Decompression Sickness)。"
    },
    {
        "id": 95,
        "type": "choice",
        "question": "習慣標準寬度跑道的駕駛員，在進場降落於「更寬的跑道」時，容易產生何種視覺錯覺？",
        "options": [
            "誤以為高度太低，進而過早拉平或維持過高下滑道",
            "誤以為正在倒飛",
            "誤以為跑道在移動",
            "誤以為高度太高而壓低機頭"
        ],
        "answer": 0,
        "explanation": "較寬的跑道在視野中顯得較近，容易讓駕駛員錯覺飛機飛得太低，導致拉平過早或下滑道偏高。"
    },
    {
        "id": 96,
        "type": "choice",
        "question": "美國聯邦航空總署 (FAA) 規定飛航組員執勤時血液酒精濃度 (BAC) 不得達到或高於多少？",
        "options": [
            "0.08%",
            "0.04%",
            "0.10%",
            "0.02%"
        ],
        "answer": 1,
        "explanation": "FAA 規定飲酒後 8 小時內（Bottle to Throttle）或血液酒精濃度達 0.04% 以上嚴禁執勤；中華民國民航法規則更嚴格要求酒測值須為零 (0.00)。"
    },
    {
        "id": 97,
        "type": "choice",
        "question": "解除急性疲勞 (Acute Fatigue) 唯一真正有效的生理方法為何？",
        "options": [
            "大量飲用咖啡",
            "進行劇烈運動",
            "充足的睡眠與休息",
            "吸食純氧"
        ],
        "answer": 2,
        "explanation": "咖啡因僅能暫時掩蓋疲勞感，唯有充足且高品質的睡眠才能真正解除急性疲勞。"
    },
    {
        "id": 98,
        "type": "choice",
        "question": "壓力 (Stress) 與駕駛員操作表現之間的關係（Yerkes-Dodson 定律）為何？",
        "options": [
            "完全無壓力時表現最好",
            "適度壓力可提升專注與表現，但過度負荷將導致表現急劇崩潰",
            "壓力越大反應越精準",
            "壓力僅影響情緒不影響操作"
        ],
        "answer": 1,
        "explanation": "壓力與表現呈倒 U 型曲線：缺乏壓力易鬆懈，適度壓力能維持最佳警覺，壓力過載則會導致決策失能。"
    },
    {
        "id": 99,
        "type": "choice",
        "question": "晴空亂流 (Clear Air Turbulence, CAT) 最常發生於哪種大氣環境？",
        "options": [
            "低空熱帶氣旋中心",
            "高空噴射氣流 (Jet Stream) 邊緣之強烈風切帶",
            "日間沿海海風帶",
            "高氣壓核心無風區"
        ],
        "answer": 1,
        "explanation": "晴空亂流 (CAT) 常發生於無雲的高空噴射氣流周圍，因強烈垂直與水平風切所致，氣象雷達無法偵測。"
    },
    {
        "id": 100,
        "type": "choice",
        "question": "大氣出現逆溫層 (Temperature Inversion) 時，通常伴隨什麼天氣特徵？",
        "options": [
            "劇烈雷雨與冰雹",
            "空氣穩定，但易在逆溫層下方積聚霧氣、霾與低能見度",
            "強烈垂直對流狂風",
            "全天萬里無雲且能見度極佳"
        ],
        "answer": 1,
        "explanation": "逆溫層像蓋子般阻擋垂直對流，使大氣平穩，但水氣與懸浮微粒易滯留於近地面造成低能見度與低空風切。"
    },
    {
        "id": 101,
        "type": "choice",
        "question": "危害天氣資料 / 報告 (Significant Meteorological Information, SIGMET) 主要警告對象為何？",
        "options": [
            "僅限輕型飛機",
            "僅限直昇機",
            "所有在該空域飛航之航空器",
            "僅限遙控無人機"
        ],
        "answer": 2,
        "explanation": "SIGMET 係由氣象守視單位針對已發生或預期發生可能影響作業安全之劇烈航路天氣所發布，對所有航空器皆具威脅。"
    },
    {
        "id": 102,
        "type": "choice",
        "question": "航行中遭遇強烈雷雨胞 (Thunderstorm Cell) 時，最安全的避讓距離建議為何？",
        "options": [
            "直接從雲底下方穿過",
            "從雷雨胞頂部貼雲飛越",
            "保持至少 20 浬 (NM) 距離繞飛避開",
            "加速直線穿越"
        ],
        "answer": 2,
        "explanation": "強雷雨胞周邊 20 浬 (NM) 內常伴隨劇烈風切、冰雹與下沉氣流，應保持至少 20 浬安全距離避讓。"
    },
    {
        "id": 103,
        "type": "choice",
        "question": "低空風切 (Low Level Wind Shear, LLWS) 或一般風切可能發生在何種高度？",
        "options": [
            "僅發生於對流層頂",
            "僅發生於離地面 100 呎內",
            "任何高度，尤其常見於雷雨、鋒面與逆溫層附近",
            "僅發生於海面上空"
        ],
        "answer": 2,
        "explanation": "風切係指風向或風速在短距離內劇烈變化，可能發生於水平或垂直方向的任何空層。"
    },
    {
        "id": 104,
        "type": "choice",
        "question": "北半球因地球自轉產生的科氏力 (Coriolis Force)，會使大尺度運動氣流偏向哪一側？",
        "options": [
            "向左偏轉",
            "向右偏轉",
            "不產生偏轉",
            "垂直向上"
        ],
        "answer": 1,
        "explanation": "科氏力使北半球運動物體與氣流向右偏轉，南半球則向左偏轉。"
    },
    {
        "id": 105,
        "type": "choice",
        "question": "氣象雲族分類中，字首帶有「Alto-」代表哪一類雲族？",
        "options": [
            "高雲族 (High Clouds)",
            "中雲族 (Middle Clouds)",
            "低雲族 (Low Clouds)",
            "直展雲族 (Clouds with Vertical Development)"
        ],
        "answer": 1,
        "explanation": "Alto 代表中層雲（如高積雲 Altocumulus、高層雲 Altostratus）。"
    },
    {
        "id": 106,
        "type": "choice",
        "question": "在北半球，當航空器保持向東（航向 090°）平飛並「加速」時，傳統磁羅盤 (Magnetic Compass) 會產生何種誤差？",
        "options": [
            "短暫指示偏北 (ANDS)",
            "短暫指示偏南",
            "持續原地旋轉",
            "完全不受影響"
        ],
        "answer": 0,
        "explanation": "依磁羅盤加速誤差口訣 ANDS（Accelerate North, Decelerate South），向東或向西加速時羅盤會短暫指示向北偏轉。"
    },
    {
        "id": 107,
        "type": "choice",
        "question": "現代玻璃座艙航空器配備之「姿態航向參考系統 (AHRS)」主要功能為何？",
        "options": [
            "取代飛航管理系統 (FMS)",
            "取代傳統真空陀螺儀，以固態感測器提供精準姿態與航向資訊",
            "僅測量大氣壓力",
            "提供空中防撞警告"
        ],
        "answer": 1,
        "explanation": "AHRS 利用固態陀螺儀、加速計與磁力計提供高可靠度的俯仰、滾轉與航向資料。"
    },
    {
        "id": 108,
        "type": "choice",
        "question": "大氣資料電腦 (Air Data Computer, ADC) 主要處理氣壓與溫度訊號後提供哪些飛航參數？",
        "options": [
            "僅提供姿態角",
            "僅提供剩餘燃油量",
            "空速、氣壓高度與升降速率",
            "僅提供衛星定位座標"
        ],
        "answer": 2,
        "explanation": "ADC 接收皮托管動壓、靜壓與全溫 (TAT) 訊號，計算指示空速、真空速、馬赫數、氣壓高度與垂直速率。"
    },
    {
        "id": 109,
        "type": "choice",
        "question": "當現代客機的主飛航顯示器 (PFD) 全部失效時，駕駛員應立即依賴哪一項裝備維持基本儀表飛航？",
        "options": [
            "個人行動裝置",
            "獨立供電之備用儀表 (Standby Instruments / ISIS)",
            "自動駕駛儀",
            "氣象雷達顯示器"
        ],
        "answer": 1,
        "explanation": "航空器皆配備獨立電源與獨立皮托靜壓源的備用姿態、空速與高度儀表。"
    },
    {
        "id": 110,
        "type": "choice",
        "question": "進場前將高度表 (Altimeter) 上的警戒游標設定於決定高度 (Decision Altitude, DA) 或最低下降高度 (Minimum Descent Altitude, MDA) 的主要作用為何？",
        "options": [
            "提醒放下起落架",
            "提供視覺與音響提醒，若到達該高度仍未獲所需目視參考須立即執行誤失進場 (Missed Approach)",
            "提醒啟動自動煞車",
            "提醒關閉防冰系統"
        ],
        "answer": 1,
        "explanation": "依 ATMP 定義，到達 DA/MDA 時若無法獲得需要之目視參考以繼續進場，應立即實施誤失進場程序。"
    },
    {
        "id": 111,
        "type": "choice",
        "question": "航空器於落地拉平階段進入「地面效應 (Ground Effect)」高度（約一個翼展高度內）時，會產生何種氣動變化？",
        "options": [
            "誘導阻力減少，產生明顯浮飄 (Floating) 趨勢",
            "機翼升力完全消失",
            "飛機無法起飛",
            "發動機自動熄火"
        ],
        "answer": 0,
        "explanation": "接近地面會阻斷翼尖渦流下洗發展，使誘導阻力大幅降低，若進場速度過快易造成長距離浮飄。"
    },
    {
        "id": 112,
        "type": "choice",
        "question": "強側風條件下進行起飛滾行時，駕駛員的副翼（駕駛桿／駕駛盤）應打向哪一側？",
        "options": [
            "打向背風側",
            "打向迎風側 (Into the wind)",
            "全程保持中立置中",
            "向後拉到底"
        ],
        "answer": 1,
        "explanation": "副翼打向迎風側可使迎風側副翼上偏減少升力，防止側風將迎風側機翼掀起。"
    },
    {
        "id": 113,
        "type": "choice",
        "question": "在重型航空器 (Heavy Aircraft) 之後於同一跑道進場落地時，為避開其機尾亂流 (Wake Turbulence)，後機應規劃於何處觸地？",
        "options": [
            "前機觸地點之前",
            "維持高於前機進場路徑，並於前機觸地點之後著陸",
            "與前機完全同一點觸地",
            "刻意偏離跑道邊緣觸地"
        ],
        "answer": 1,
        "explanation": "重型機的機尾亂流自鼻輪離地時開始產生、主輪觸地時停止，且會隨時間下沉，故後機應保持高於前機軌跡並在其觸地點之後著陸。"
    },
    {
        "id": 114,
        "type": "choice",
        "question": "航空器在何種飛航狀態下所產生的機尾亂流 (Wake Turbulence) 最為強烈？",
        "options": [
            "重型、外型乾淨（襟翼與起落架收起）且低空速高攻角時",
            "輕型、高速巡航時",
            "停駐於地面怠速時",
            "超音速平飛時"
        ],
        "answer": 0,
        "explanation": "重型 (Heavy)、乾淨構型 (Clean) 與低速 (Slow) 高攻角飛航時，上下翼面壓力差最大，產生的翼尖渦流最劇烈。"
    },
    {
        "id": 115,
        "type": "choice",
        "question": "在設有交叉跑道之機場實施「落地並於交叉口前等待 (LAHSO)」程序時，駕駛員接獲並接受該許可代表什麼？",
        "options": [
            "兩架飛機同時起飛",
            "落地後必須在指定交叉跑道或等待位置前完全煞停，不得穿越",
            "落地前必須強制重飛",
            "落地後可直接高速穿越交叉跑道"
        ],
        "answer": 1,
        "explanation": "LAHSO 係為提升機場容量，要求落地航空器在抵達交叉跑道前完全停止，但機長基於安全考量有權拒絕接受。"
    },
    {
        "id": 116,
        "type": "choice",
        "question": "跑道端安全區 (Runway End Safety Area, RESA) 設置的主要目的為何？",
        "options": [
            "供航空器長期停放",
            "作為正常起飛滾行長度",
            "減少航空器過早觸地或衝出跑道時之損壞風險",
            "作為冬季除雪堆置場"
        ],
        "answer": 2,
        "explanation": "依《民用機場設計暨運作規範》定義，RESA 係與跑道地帶端相接之地區，主要作用為減少飛機過早觸地或衝出跑道時損壞之風險。"
    },
    {
        "id": 117,
        "type": "choice",
        "question": "同一條跑道兩端跑道號碼（不含 L/C/R 字母）相減的絕對值固定為多少？",
        "options": [
            "9",
            "18",
            "36",
            "0"
        ],
        "answer": 1,
        "explanation": "跑道兩端方向相差 180 度，捨去個位數後兩端號碼差值恒為 18（例如 05 與 23 相差 18）。"
    },
    {
        "id": 118,
        "type": "choice",
        "question": "直昇機起降區 (Helipad) 內白色「H」標誌的朝向通常代表什麼？",
        "options": [
            "固定指向正北",
            "對齊主要盛行風向或標準進離場路徑方向",
            "指向航廈大門",
            "無任何方向意義"
        ],
        "answer": 1,
        "explanation": "「H」標誌之橫槓或朝向通常與主要進離場方向一致，協助直昇機駕駛員對準最佳進場軌跡。"
    },
    {
        "id": 119,
        "type": "choice",
        "question": "執行重飛 (Go-around) 或誤失進場程序 (Missed Approach Procedure) 時，駕駛員的首要飛行操作動作為何？",
        "options": [
            "立即收起起落架",
            "先向塔臺無線電呼叫",
            "增加至重飛推力並建立正爬升姿態（先飛好飛機 Aviate）",
            "立即放出全襟翼"
        ],
        "answer": 2,
        "explanation": "重飛首要原則為「Aviate, Navigate, Communicate」，先建立重飛推力與安全爬升姿態，確認正爬升率後再依序收襟翼與起落架。"
    },
    {
        "id": 120,
        "type": "choice",
        "question": "民航客機執行標準儀器進場或目視進場時，標準下滑道 (Glide Path) 角度通常為幾度？",
        "options": [
            "1 度",
            "3 度",
            "5 度",
            "10 度"
        ],
        "answer": 1,
        "explanation": "標準下滑道角度一般設計為 3 度，兼顧安全越障與穩定的下降速率。"
    },
    {
        "id": 121,
        "type": "choice",
        "question": "在無機場管制塔臺運作之機場飛航時，駕駛員應於何種頻率主動廣播位置與動態意圖？",
        "options": [
            "區域管制中心緊急頻率",
            "僅守聽 121.5 MHz",
            "通用交通諮詢頻率 (CTAF) 或該機場公布之諮詢頻率",
            "公司內部維修頻率"
        ],
        "answer": 2,
        "explanation": "無塔臺機場作業時，駕駛員須在指定之 CTAF 或諮詢頻率盲目廣播位置與意圖，以維持空中交通警覺。"
    },
    {
        "id": 122,
        "type": "choice",
        "question": "短場起飛 (Short-Field Takeoff) 離地後，若跑道末端前方有障礙物，應保持何種空速爬升以獲得最大越障高度？",
        "options": [
            "最大結構巡航速度 (Vno)",
            "最佳爬升率速度 (Vy)",
            "最佳爬升角速度 (Vx)",
            "乾淨構型失速速度 (Vs1)"
        ],
        "answer": 2,
        "explanation": "最佳爬升角速度 (Vx) 能在最短的水平距離內獲得最大的垂直高度增益，專用於越障爬升。"
    },
    {
        "id": 123,
        "type": "choice",
        "question": "若大型機場設有多個風向袋 (Windsock)，進場落地時應優先參考哪一個？",
        "options": [
            "航廈屋頂上的風向袋",
            "最靠近預定降落跑道頭 (Threshold) 著陸區之風向袋",
            "機場正中央的風向袋",
            "任選一個即可"
        ],
        "answer": 1,
        "explanation": "著陸區附近的低空風向與陣風對接地操作最關鍵，應優先參考靠近降落跑道頭的風向袋。"
    },
    {
        "id": 124,
        "type": "choice",
        "question": "高緯度或常降雪地區的機場，其風向袋 (Windsock) 多採用亮橘色或紅白相間設計，主要原因為何？",
        "options": [
            "製造成本較低",
            "較能抵抗紫外線",
            "在白雪與多變背景中具備最高視覺對比與辨識度",
            "僅為美觀考量"
        ],
        "answer": 2,
        "explanation": "依《民用機場設計暨運作規範》第 5.1.1.3 節，風向指示器顏色應配合背景選擇以求醒目，橘色或紅白相間在雪地中辨識度最佳。"
    },
    {
        "id": 125,
        "type": "choice",
        "question": "在無塔臺且風向袋損毀的場地進場前，駕駛員可觀察地面何種現象輔助判斷低空風向？",
        "options": [
            "高空卷雲移動方向",
            "煙囪煙霧飄向、水面波紋或草浪倒伏方向",
            "發動機運轉聲音",
            "儀表板溫度計"
        ],
        "answer": 1,
        "explanation": "地表煙霧流向、水面波紋推進方向與樹梢擺動皆可作為判斷近地面風向的輔助目視參考。"
    },
    {
        "id": 126,
        "type": "choice",
        "question": "機場地面風向袋支架周圍繪製的白色圓形環狀標線（直徑 15 公尺）主要作用為何？",
        "options": [
            "直昇機起降標線",
            "協助空中航空器從高空快速定位風向袋位置",
            "排水防滑標線",
            "機場地理參考點"
        ],
        "answer": 1,
        "explanation": "依《民用機場設計暨運作規範》第 5.1.1.4 節，風向指示器周圍設置直徑 15m 白色環形標線，以利空中快速辨識其位置。"
    },
    {
        "id": 127,
        "type": "choice",
        "question": "跑道兩端道面上繪有巨大白色或黃色「X」標線，依《民用機場設計暨運作規範》代表什麼？",
        "options": [
            "緊急迫降指定區",
            "跑道關閉標線 (Closed Runway Marking)，嚴禁起飛與降落",
            "直昇機專用起降點",
            "除冰作業區"
        ],
        "answer": 1,
        "explanation": "依規範第 7.1.2 節，跑道（全部或部分）關閉不供飛機使用時應劃設「X」形關閉標線，嚴禁起降。"
    },
    {
        "id": 128,
        "type": "choice",
        "question": "滑行道上繪有如梯子狀的黃色雙實線加橫槓標線（B 型跑道等待位置標線），通常用於保護何種區域？",
        "options": [
            "地面人員斑馬線",
            "儀器降落系統 (ILS) 臨界／敏感區域",
            "航空器清洗區",
            "加油車停放區"
        ],
        "answer": 1,
        "explanation": "依 ATMP 第 3-7-5 節與《民用機場設計暨運作規範》第 5.2.10.3 節，B 型等待位置標線用於保護精確進場之 ILS 臨界／敏感區域免受無線電訊號干擾。"
    },
    {
        "id": 129,
        "type": "choice",
        "question": "跑道兩側邊緣繪製的白色連續實線（跑道邊線標線 Runway Side Stripe Marking）代表什麼？",
        "options": [
            "標示跑道承重鋪面實體邊界，不可越過進入非承重道肩",
            "跑道中心線",
            "可隨意滑行穿越之區域",
            "起飛計時基準線"
        ],
        "answer": 0,
        "explanation": "跑道邊線標線界定跑道可用承重寬度邊界，越過可能陷入承載力較低的跑道道肩。"
    },
    {
        "id": 130,
        "type": "choice",
        "question": "儀器跑道著陸區標線 (Touchdown Zone Marking) 自跑道頭起算，每組標線的縱向間距通常為多少？",
        "options": [
            "30 公尺 (100 呎)",
            "150 公尺 (500 呎)",
            "300 公尺 (1,000 呎)",
            "600 公尺 (2,000 呎)"
        ],
        "answer": 1,
        "explanation": "依《民用機場設計暨運作規範》第 5.2.6.4 節，著陸區標線自距跑道頭 150m（約 500 呎）起，每隔 150m（500 呎）繪設一組。"
    },
    {
        "id": 131,
        "type": "choice",
        "question": "滑行道中央的單一連續黃色實線稱為？",
        "options": [
            "滑行道邊線",
            "滑行道中心線標線 (Taxiway Centre Line Marking)",
            "跑道等待位置標線",
            "禁止進入標線"
        ],
        "answer": 1,
        "explanation": "滑行道中心線標線為寬至少 0.15m 之連續黃色實線，滑行時鼻輪應保持對準該中心線。"
    },
    {
        "id": 132,
        "type": "choice",
        "question": "放出或收起襟翼時，若發生「不對稱襟翼 (Asymmetric Flaps)」故障（僅單側伸展），會立即產生什麼危險？",
        "options": [
            "飛機垂直竄升",
            "兩側機翼升力嚴重不均，產生劇烈滾轉 (Roll) 力矩",
            "雷達訊號消失",
            "兩具發動機同時熄火"
        ],
        "answer": 1,
        "explanation": "單側襟翼伸展會造成兩側升力極度不對稱，導致航空器向未放襟翼一側劇烈滾轉，須立即停止操作襟翼並使用副翼修正。"
    },
    {
        "id": 133,
        "type": "choice",
        "question": "起飛爬升階段逐步收起襟翼 (Flaps) 時，航空器縱向姿態通常會出現何種變化趨勢？",
        "options": [
            "機頭劇烈上揚",
            "升力減少且配平力矩改變，機頭有下沉趨勢",
            "機身劇烈左右搖晃",
            "空速瞬間歸零"
        ],
        "answer": 1,
        "explanation": "收起襟翼會減少機翼彎度與升力，須適度帶桿維持爬升姿態並重新調整俯仰配平 (Pitch Trim)。"
    },
    {
        "id": 134,
        "type": "choice",
        "question": "大型客機機翼前緣配備的「前緣縫翼 (Slats)」主要氣動作用為何？",
        "options": [
            "作為空中減速煞車",
            "引導高壓氣流流經上翼面，延緩邊界層氣流分離以允許更高攻角飛航",
            "增加機翼內部儲油空間",
            "降低客艙空調噪音"
        ],
        "answer": 1,
        "explanation": "前緣縫翼打開後形成縫隙，將下方高動能氣流導向上翼面，延緩氣流剝離並提高臨界失速攻角。"
    },
    {
        "id": 135,
        "type": "choice",
        "question": "執行「無襟翼進場與落地 (No-Flap Landing)」時，與正常全襟翼落地相比有何顯著差異？",
        "options": [
            "進場空速較高、進場俯仰仰角較高且著陸滾行距離較長",
            "進場空速極慢",
            "機頭必須大幅朝下俯衝",
            "兩者操作與性能完全無差別"
        ],
        "answer": 0,
        "explanation": "無襟翼時失速速度較高，須提高進場速度並以較高攻角（仰角）維持升力，落地滾行距離亦明顯增加。"
    },
    {
        "id": 136,
        "type": "choice",
        "question": "全襟翼構型下滑進場時，為何所需的發動機推力通常比乾淨構型（收起襟翼）更大？",
        "options": [
            "為了供應更多發電機電力",
            "全襟翼產生龐大誘導與寄生阻力，須較大推力維持目標空速與下滑道",
            "為了吹散跑道積水",
            "為了加速消耗燃油減重"
        ],
        "answer": 1,
        "explanation": "全襟翼構型下阻力劇增，必須以較高的推力設定（N1 / EPR）平衡阻力，否則空速將迅速衰減並低於下滑道。"
    },
    {
        "id": 137,
        "type": "choice",
        "question": "現代客機駕駛艙的「導航顯示器 (Navigation Display, ND)」主要整合並取代了傳統儀表中的哪些功能？",
        "options": [
            "姿態儀與空速表",
            "航向指示器 (HI)、水平狀態指示器 (HSI) 與無線電導航儀表",
            "高度表與升降速率表",
            "發動機轉速與油量表"
        ],
        "answer": 1,
        "explanation": "ND 整合了磁航向、航路圖、VOR/ILS 偏離指示、氣象雷達與 TCAS 航情顯示。"
    },
    {
        "id": 138,
        "type": "choice",
        "question": "噴射客機空速表上的紅白相間「理髮柱 (Barber Pole)」指針代表什麼限制？",
        "options": [
            "最佳省油巡航速度",
            "最高容許操作速度 / 馬赫數 (Vmo / Mmo)",
            "最大側風限制速度",
            "襟翼全放操作速度"
        ],
        "answer": 1,
        "explanation": "紅白相間指針隨高度動態指示 Vmo（最大操作指示空速）或 Mmo（最大操作馬赫數），超過將觸發超速警告。"
    },
    {
        "id": 139,
        "type": "choice",
        "question": "在微弱順風 (Tailwind) 條件下起飛，除了滾行距離變長外，另一項主要危害為何？",
        "options": [
            "發動機吸入自身尾氣熄火",
            "地速較高導致爬升梯度（對地爬升角）變平緩，降低越障安全餘裕",
            "升力異常暴增",
            "起落架無法收起"
        ],
        "answer": 1,
        "explanation": "順風使地速增加，在相同垂直爬升率下，飛機每前進一單位水平距離所獲得的高度減少，越障角度變平緩。"
    },
    {
        "id": 140,
        "type": "choice",
        "question": "在強勁陣風 (Gusty Wind) 環境下於地面滑行時，駕駛員最需注意何種操作？",
        "options": [
            "使用最大推力快速滑行",
            "依風向打抗風舵角（順風時壓低升降舵、迎風時副翼打向迎風側）防止機翼被掀起",
            "關閉無線電通信",
            "放下全襟翼滑行"
        ],
        "answer": 1,
        "explanation": "強風地面滑行須正確運用抗風舵面位置（Wind Correction Controls），避免陣風將機翼或機尾吹翻。"
    },
    {
        "id": 141,
        "type": "choice",
        "question": "若某跑道指向之磁方位為 090°（09 號跑道），當地磁偏角為「西偏 10 度 (10°W)」，則該跑道的真方位角 (True Bearing) 為何？",
        "options": [
            "080°",
            "100°",
            "090°",
            "360°"
        ],
        "answer": 0,
        "explanation": "依航行學公式「磁方位 = 真方位 + 西偏（East is least, West is best）」，090° = 真方位 + 10°，故真方位為 080°。"
    },
    {
        "id": 142,
        "type": "choice",
        "question": "在無塔臺機場通用交通諮詢頻率 (CTAF) 聽到他機廣播「Turning Final」，代表該機處於何種階段？",
        "options": [
            "剛離地起飛",
            "正由四邊轉入五邊，準備對準跑道最後進場落地",
            "剛脫離跑道滑行",
            "正加入三邊"
        ],
        "answer": 1,
        "explanation": "Turning Final 代表航空器正由四邊 (Base) 轉向五邊最後進場 (Final Approach)，即將對準跑道落地。"
    },
    {
        "id": 143,
        "type": "choice",
        "question": "依 ATMP 第 3-8-1 節與第 3-10-3 節，塔臺管制員向三邊飛航之航空器頒發術語「延長三邊 (Extend Downwind)」時，駕駛員應如何執行？",
        "options": [
            "立即右轉脫離機場空域",
            "立即左轉切入四邊降落",
            "繼續沿三邊航跡平飛，暫不轉入四邊，等候塔臺後續轉四邊指示",
            "立即在原地盤旋 360 度"
        ],
        "answer": 2,
        "explanation": "「延長三邊」係塔臺為建立進場順序與間隔，要求航空器保持三邊航向飛航，待管制員指示後再轉四邊。"
    },
    {
        "id": 144,
        "type": "choice",
        "question": "供夜間使用之機場，其風向袋（風向指示器）應如何配置照明以利駕駛員辨識？",
        "options": [
            "夜間完全無需照明",
            "裝設上方或周邊照明燈具，使其在夜間能清楚辨識風向與風速",
            "僅靠機身落地燈照射",
            "依靠雷達螢幕顯示"
        ],
        "answer": 1,
        "explanation": "依《民用機場設計暨運作規範》第 5.1.1.5 節，夜間使用之機場，應至少有一個風向指示器設有照明裝置。"
    },
    {
        "id": 145,
        "type": "choice",
        "question": "機場停機坪 (Apron) 與操作區 (Manoeuvring Area) 交界處繪有「一實線一虛線」黃色標線（Non-Movement Area Boundary），代表什麼規定？",
        "options": [
            "直昇機專屬停機線",
            "停機坪與操作區分界線，未獲航管單位許可嚴禁跨越進入滑行道或跑道",
            "禁止航空器轉彎",
            "旅客步行安全通道"
        ],
        "answer": 1,
        "explanation": "依 ATMP 第 1-3-1 節與第 3-7-1 節，實線側為停機坪（非操作區），虛線側為操作區（滑行道與跑道），跨越前必須取得航管許可。"
    },
    {
        "id": 146,
        "type": "choice",
        "question": "依《民用機場設計暨運作規範》第 5.3.12.7 節，跑道中心線燈 (Runway Centre Line Lights) 在距離跑道末端 900 公尺至 300 公尺（約最後 3,000 呎至 1,000 呎）區段呈現何種顏色？",
        "options": [
            "全綠色定光燈",
            "紅色與白色定光燈交替設置（最後 300 公尺全為紅色）",
            "全黃色閃光燈",
            "藍白交替閃光燈"
        ],
        "answer": 1,
        "explanation": "依規範第 5.3.12.7 節，距跑道末端 900m 至 300m 為紅白交替定光燈，距末端 300m 至跑道末端則全為紅色定光燈。"
    },
    {
        "id": 147,
        "type": "choice",
        "question": "民航噴射客機為何幾乎不採用「無襟翼（0 度襟翼）」構型執行正常起飛？",
        "options": [
            "會導致發動機起火",
            "無襟翼時離地空速過高，將超出輪胎最大速限並需極長跑道",
            "會造成客艙失壓",
            "會使方向舵失效"
        ],
        "answer": 1,
        "explanation": "起飛襟翼可在較低空速下提供足夠升力，大幅縮短離地距離並保護起落架輪胎不致超速爆胎。"
    },
    {
        "id": 148,
        "type": "choice",
        "question": "在嚴重積冰條件 (Severe Icing Conditions) 下進場落地，為何部分機型操作手冊建議避免使用最大角度襟翼？",
        "options": [
            "為了節省燃油",
            "大角度襟翼會大幅改變水平尾翼下洗氣流攻角，易誘發尾翼積冰失速 (Tailplane Stall)",
            "襟翼馬達會結冰卡死",
            "為了加快落地速度"
        ],
        "answer": 1,
        "explanation": "水平尾翼前緣較薄更易積冰，放下大角度襟翼會增加尾翼負攻角，可能導致尾翼失速使機頭猛然下俯。"
    },
    {
        "id": 149,
        "type": "choice",
        "question": "現代客機採用的「線傳飛控系統 (Fly-By-Wire, FBW)」核心設計理念為何？",
        "options": [
            "以鋼纜直接拉動舵面",
            "駕駛員操作輸入先轉換為電子訊號送交飛控電腦運算，並提供飛航包絡線保護 (Flight Envelope Protection)",
            "完全取消駕駛員操作桿",
            "僅能由地面遙控飛行"
        ],
        "answer": 1,
        "explanation": "FBW 透過飛控電腦處理操作指令並驅動液壓／電動作動器，能防止航空器超出結構過載或失速極限。"
    },
    {
        "id": 150,
        "type": "choice",
        "question": "新世代長程客機（如 B787、A350）機身結構大量採用碳纖維複合材料 (Carbon Fiber Composite) 的主要優勢為何？",
        "options": [
            "完全不需任何定期維修",
            "重量較輕且具備極佳抗腐蝕與抗疲勞特性，可維持較高的客艙壓力與濕度",
            "機身呈完全透明",
            "可承受超音速巡航高溫"
        ],
        "answer": 1,
        "explanation": "複合材料減輕機體重量並解決金屬疲勞與腐蝕問題，允許更高的客艙增壓（降低客艙高度）以提升乘客舒適度。"
    },
    {
        "id": 151,
        "type": "choice",
        "question": "夜間於機場滑行道滑行或停機坪作業時，通常不應開啟哪一種外部燈光以免影響他機與地面人員視線？",
        "options": [
            "翼尖航行燈 (Navigation Lights)",
            "紅色防撞燈 (Anti-collision Beacon)",
            "高亮度白色頻閃燈 (Strobe Lights) 與落地燈 (Landing Lights)",
            "駕駛艙儀表背光"
        ],
        "answer": 2,
        "explanation": "高亮度白色頻閃燈與落地燈在地面極易使對向駕駛員與地勤人員產生眩光致盲，通常於進入跑道起飛前才開啟。"
    },
    {
        "id": 152,
        "type": "choice",
        "question": "機場設置進場燈光系統 (Approach Light System, ALS) 的主要功能為何？",
        "options": [
            "照明高空雲層",
            "在夜間或低能見度儀器進場末段，提供目視參考引導駕駛員平順過渡至目視跑道環境",
            "驅趕跑道周邊鳥群",
            "融化跑道積雪"
        ],
        "answer": 1,
        "explanation": "ALS 從跑道頭向外延伸，在航空器決斷階段提供明確的水平、滾轉與跑道中心線延長線目視指引。"
    },
    {
        "id": 153,
        "type": "choice",
        "question": "依據組員資源管理 (CRM) 原則，當副機長 (FO) 察覺機長 (CAPT) 的操作出現明顯危害飛安之偏差時，應如何處置？",
        "options": [
            "基於尊重資歷保持沉默",
            "在心中祈禱一切順利",
            "立即以明確、尊重且堅定的標準術語提出質疑與建議，必要時依程序接管操縱",
            "立即關閉自動駕駛並跳傘"
        ],
        "answer": 2,
        "explanation": "現代 CRM 強調「尊重的堅定 (Respectful Assertiveness)」，當飛安受威脅且提醒無效時，副機長須依標準作業程序 (SOP) 接管。"
    },
    {
        "id": 154,
        "type": "choice",
        "question": "夜間進場降落於周邊缺乏地面燈光參考（如海邊或荒野）的跑道時，容易產生「黑洞進場錯覺 (Black Hole Approach Illusion)」，此錯覺會使駕駛員產生何種誤判？",
        "options": [
            "誤以為正在倒飛",
            "誤以為航空器飛得太高，進而本能壓低機頭導致低於下滑道而過早觸地",
            "誤以為空速過快",
            "誤以為跑道正在旋轉"
        ],
        "answer": 1,
        "explanation": "缺乏周邊燈光透視線索時，跑道燈會顯得位置偏高，使駕駛員誤判飛機過高而危險地壓低進場剖面。"
    },
    {
        "id": 155,
        "type": "choice",
        "question": "機場例行天氣報告 (METAR) 中出現天氣現象代碼「BR」與「FG」分別代表什麼？",
        "options": [
            "小雨與大雪",
            "薄霧 (Mist，能見度 1,000 至 5,000 公尺) 與濃霧 (Fog，能見度低於 1,000 公尺)",
            "冰雹與雷暴",
            "沙塵暴與吹雪"
        ],
        "answer": 1,
        "explanation": "依國際航空氣象電碼，BR (Brume) 代表薄霧，FG (Fog) 代表能見度低於 1,000 公尺之濃霧。"
    },
    {
        "id": 156,
        "type": "choice",
        "question": "機場天氣預報 (Terminal Aerodrome Forecast, TAF) 通常涵蓋以機場參考點為中心半徑多少範圍內之預期天氣？",
        "options": [
            "1 浬",
            "5 法定哩（約 8 公里 / 4.3 浬）",
            "50 浬",
            "整個飛航情報區"
        ],
        "answer": 1,
        "explanation": "TAF 係針對機場中心半徑 5 法定哩（約 8 公里）區域內特定時段之預期氣象變化所發布。"
    },
    {
        "id": 157,
        "type": "choice",
        "question": "依 ATMP 第 1-3-1 節，國際標準大氣 (ISA) 在平均海平面之標準氣壓與標準溫度為何？",
        "options": [
            "1013.2 百帕 (29.92 吋汞柱) / 15°C",
            "1000.0 百帕 / 20°C",
            "29.92 百帕 / 0°C",
            "1013.2 百帕 / 15°F"
        ],
        "answer": 0,
        "explanation": "ATMP 第 1-3-1 節明定標準氣壓為 1013.2 百帕 (29.92 吋汞柱)，ISA 海平面標準溫度為 15°C。"
    },
    {
        "id": 158,
        "type": "choice",
        "question": "高溫、高海拔或高濕度導致「密度高度 (Density Altitude)」升高時，對航空器起降性能有何影響？",
        "options": [
            "起飛性能大幅變好",
            "對性能完全無影響",
            "空氣密度降低，發動機推力、螺旋槳效率與機翼升力均下降，起飛滾行距離拉長",
            "發動機推力倍增"
        ],
        "answer": 2,
        "explanation": "高密度高度代表空氣稀薄，使氣動升力與發動機進氣效率下降，加速變慢且所需起降距離顯著增加。"
    },
    {
        "id": 159,
        "type": "choice",
        "question": "依 ATMP 第 2-9-1 節與第 19 版修正規定，終端資料自動廣播服務 (ATIS) 每次更新時係以何種方式識別代碼？",
        "options": [
            "阿拉伯數字 1 至 99",
            "依國際民航組織發音法自 Alfa 至 Zulu 依序編列英文字母識別代號",
            "紅黃綠顏色代碼",
            "僅以當地時間標示"
        ],
        "answer": 1,
        "explanation": "ATMP 第 2-9-1 節規定每份 ATIS 開頭及末尾皆以 ICAO 發音法字母自 Alfa 至 Zulu 依序識別（第 19 版已全面統一拼為 Alfa）。"
    },
    {
        "id": 160,
        "type": "choice",
        "question": "山脈背風面上空出現外觀如飛碟或透鏡狀的「莢狀雲 (Lenticular Clouds)」，代表附近存在何種危險天氣？",
        "options": [
            "即將發生火山爆發",
            "強烈山岳波 (Mountain Wave) 與劇烈亂流",
            "大範圍降雪",
            "高溫熱浪"
        ],
        "answer": 1,
        "explanation": "莢狀雲是強風吹越山脈形成駐波（山岳波）的視覺標誌，周邊潛藏極度劇烈的下沉氣流與晴空亂流。"
    },
    {
        "id": 161,
        "type": "choice",
        "question": "依 ATMP 第 1-2-7 節與第 2-6-3 節，縮語「PIREP」代表什麼？",
        "options": [
            "機場天氣預報",
            "衛星雲圖分析",
            "駕駛員天氣報告 (Pilot Report)，由飛行員回報實際遭遇之亂流、積冰或風切等天氣情況",
            "地面雷達回波圖"
        ],
        "answer": 2,
        "explanation": "ATMP 第 2-6-3 節規範駕駛員天氣報告 (PIREP) 包含鋒面、雷雨、積冰、風切、亂流及火山灰等實際飛航觀測資料。"
    },
    {
        "id": 162,
        "type": "choice",
        "question": "冷鋒 (Cold Front) 通過機場時，通常伴隨何種典型氣象變化？",
        "options": [
            "連日綿延不斷的微弱毛毛雨",
            "氣壓先降後急升、風向劇變，並常伴隨陣雨、雷雨與強烈陣風",
            "完全無雲且風平浪靜",
            "氣溫大幅攀升"
        ],
        "answer": 1,
        "explanation": "冷空氣楔入暖空氣下方迫使暖濕空氣劇烈抬升，鋒面過境時常引發對流雷雨、陣風與風向順轉。"
    },
    {
        "id": 163,
        "type": "choice",
        "question": "起飛前檢查發現機翼與尾翼表面附有一層薄霜 (Frost) 時，依「乾淨機翼概念 (Clean Aircraft Concept)」應如何處置？",
        "options": [
            "滑行時靠風吹走即可",
            "起飛前必須將霜完全清除乾淨，否則嚴禁起飛",
            "僅需提高起飛速度 5 浬即可",
            "離地後再開啟機翼防冰系統融化"
        ],
        "answer": 1,
        "explanation": "即使薄霜也會使翼面粗糙並破壞邊界層氣流，導致升力大幅下降並提前失速，起飛前必須徹底除霜。"
    },
    {
        "id": 164,
        "type": "choice",
        "question": "噴射機在高空飛航時，機身後方拖曳出的白色長條狀雲跡稱為？",
        "options": [
            "自然卷雲",
            "凝結尾 (Contrails / Condensation Trails)",
            "高積雲",
            "機翼洩油痕跡"
        ],
        "answer": 1,
        "explanation": "發動機排出的高溫水氣與微粒在極冷高空中迅速凝結並凍結成冰晶，形成凝結尾。"
    },
    {
        "id": 165,
        "type": "choice",
        "question": "機場啟動「低能見度程序 (Low Visibility Procedures, LVP)」通常表示當地出現何種天氣狀況？",
        "options": [
            "高空強風",
            "局部陣雨",
            "濃霧或低雲幕導致跑道視程 (RVR) 與能見度極低",
            "高溫炎熱"
        ],
        "answer": 2,
        "explanation": "當 RVR 或雲幕高低於特定標準時，機場啟動 LVP 以嚴格管制地面活動並保護精確進場信號。"
    },
    {
        "id": 166,
        "type": "choice",
        "question": "依國際航空無線電通信規範，連續呼叫三次「MAYDAY, MAYDAY, MAYDAY」代表什麼？",
        "options": [
            "一般例行位置報告",
            "遇險狀態 (Distress)，航空器與乘員遭受嚴重且迫切之危險，需要立即援助",
            "輕微偏航查詢",
            "班機預計延誤通知"
        ],
        "answer": 1,
        "explanation": "MAYDAY 為最高等級遇險呼叫，享有所有無線電通信與航管處置之絕對優先權。"
    },
    {
        "id": 167,
        "type": "choice",
        "question": "連續呼叫三次「PAN-PAN, PAN-PAN, PAN-PAN」代表何種緊急等級？",
        "options": [
            "準備水上迫降",
            "緊急狀態 (Urgency)，有涉及航空器或人員安全之急迫情況，但尚未立即危及生命",
            "航空器遭非法劫持",
            "目的地天氣良好"
        ],
        "answer": 1,
        "explanation": "PAN-PAN 屬於次一級的緊急狀態（Urgency），如單發動機失效但仍可安全控制飛航或機上旅客急症。"
    },
    {
        "id": 168,
        "type": "choice",
        "question": "依 ATMP 第 5-2-3 節，次級雷達詢答機設定緊急電碼「Squawk 7700」代表什麼？",
        "options": [
            "無線電通信失效",
            "一般緊急狀態 (Emergency)",
            "航空器遭劫持",
            "目視飛航規則標準電碼"
        ],
        "answer": 1,
        "explanation": "ATMP 第 5-2-3 節規定次級雷達電碼 7700 為緊急電碼，可使航管雷達螢幕立即觸發緊急告警。"
    },
    {
        "id": 169,
        "type": "choice",
        "question": "依 ATMP 第 5-2-4 節，次級雷達詢答機設定電碼「Squawk 7600」代表什麼？",
        "options": [
            "一般緊急狀態",
            "雙向無線電通信失效 (Radio Communication Failure)",
            "航空器遭非法干擾劫持",
            "軍機特種任務"
        ],
        "answer": 1,
        "explanation": "ATMP 第 5-2-4 節規定無線電失效時應將詢答機設定為 7600，通知航管單位該機無法進行語音雙向通信。"
    },
    {
        "id": 170,
        "type": "choice",
        "question": "依 ATMP 第 5-2-5 節，次級雷達詢答機設定電碼「Squawk 7500」代表什麼？",
        "options": [
            "一般緊急狀態",
            "無線電通信失效",
            "航空器遭劫持 / 非法干擾 (Hijack / Unlawful Interference)",
            "儀器飛航規則標準電碼"
        ],
        "answer": 2,
        "explanation": "ATMP 第 5-2-5 節規定遭劫持／非法干擾時應設定電碼 7500，以低調向航管單位發出警示。"
    },
    {
        "id": 171,
        "type": "choice",
        "question": "依 ATMP 第 3-2-1 節表 3-2-1，當無線電失效時，機場管制塔臺對「飛航中之航空器」發出「連續紅色閃光 (Flashing Red)」飛航管制燈光信號代表什麼意義？",
        "options": [
            "許可起飛",
            "許可降落",
            "回航降落",
            "機場不安全，勿降落 (Aerodrome unsafe, do not land)"
        ],
        "answer": 3,
        "explanation": "依 ATMP 表 3-2-1「飛航管制燈光信號」，對飛航中之航空器發出「連續紅色閃光」代表「機場不安全，勿降落」。"
    },
    {
        "id": 172,
        "type": "choice",
        "question": "依 ATMP 第 3-2-1 節表 3-2-1，機場管制塔臺對「飛航中之航空器」發出「固定紅光 (Steady Red)」燈光信號代表什麼？",
        "options": [
            "立即緊急迫降",
            "避讓其他航空器並繼續盤旋 (Give way to other aircraft and continue circling)",
            "許可滑行",
            "許可降落"
        ],
        "answer": 1,
        "explanation": "依 ATMP 表 3-2-1，對飛航中之航空器發出「固定紅光」代表「避讓其他航空器並繼續盤旋」；對地面航空器則代表「停止」。"
    },
    {
        "id": 173,
        "type": "choice",
        "question": "依 ATMP 第 3-2-1 節表 3-2-1，機場管制塔臺對「地面上之航空器」發出「固定綠燈 (Steady Green)」燈光信號代表什麼？",
        "options": [
            "停止滑行",
            "許可起飛 (Cleared for take-off)",
            "返回原起始點",
            "滑離使用中之降落區"
        ],
        "answer": 1,
        "explanation": "依 ATMP 表 3-2-1，對地面上之航空器發出「固定綠燈」代表「許可起飛」（「連續綠色閃光」則為「許可滑行」）。"
    },
    {
        "id": 174,
        "type": "choice",
        "question": "若不慎進入強烈亂流區 (Severe Turbulence) 時，駕駛員應採取何種正確飛行控制策略？",
        "options": [
            "全推油門加速衝出亂流區",
            "設定亂流穿透空速 (Va / Vb)，保持平穩機翼與俯仰姿態，接受高度與空速適度波動",
            "進行大坡度急轉彎折返",
            "立即放出全襟翼減速"
        ],
        "answer": 1,
        "explanation": "劇烈拉桿定高會導致結構過載受損，正確做法是維持亂流穿透空速並穩住姿態，允許高度隨氣流適度起伏。"
    },
    {
        "id": 175,
        "type": "choice",
        "question": "多發動機航空器的性能速度「Vmcg」代表什麼定義？",
        "options": [
            "乾淨構型失速速度",
            "地面最小控制速度 (Minimum Control Speed on the Ground)",
            "最大起飛重量速度",
            "最大巡航馬赫數"
        ],
        "answer": 1,
        "explanation": "Vmcg 係指起飛滾行中關鍵發動機突然失效時，僅靠氣動舵面（方向舵，不使用鼻輪轉向）即可維持跑道方向控制的最小空速。"
    },
    {
        "id": 176,
        "type": "choice",
        "question": "多發動機航空器起飛性能中的「V1」速度定義為何？",
        "options": [
            "起飛決斷速度 (Takeoff Decision Speed)",
            "主輪離地速度 (Vlof)",
            "最佳爬升率速度 (Vy)",
            "襟翼全收速度"
        ],
        "answer": 0,
        "explanation": "V1 為起飛決斷速度：在 V1 前發生故障可安全放棄起飛並停於跑道內；一旦達到或超過 V1，即使單發失效亦須繼續起飛。"
    },
    {
        "id": 177,
        "type": "choice",
        "question": "起飛性能速度中的「Vr」代表什麼？",
        "options": [
            "起飛決斷速度",
            "機頭仰起速度 (Rotation Speed)",
            "著陸觸地速度",
            "最大航程巡航速度"
        ],
        "answer": 1,
        "explanation": "Vr 為駕駛員開始帶桿拉起機頭使航空器仰轉離地之操作速度。"
    },
    {
        "id": 178,
        "type": "choice",
        "question": "多發動機航空器起飛性能中的「V2」速度定義為何？",
        "options": [
            "最大結構操作速度",
            "起飛安全速度 (Takeoff Safety Speed)",
            "全襟翼失速速度",
            "最後進場參考速度"
        ],
        "answer": 1,
        "explanation": "V2 為單發動機失效情況下，航空器在離地爬升至安全越障高度前必須維持的最小安全爬升速度。"
    },
    {
        "id": 179,
        "type": "choice",
        "question": "依 ATMP 第 2-1-28 節，當航情警告及防撞系統 (TCAS) 發出「避撞諮詢 (Resolution Advisory, RA)」時，駕駛員應如何處置？",
        "options": [
            "先向航管單位請示同意後再動作",
            "立即且精準地遵循 TCAS 避撞諮詢指示爬升或下降，並通報航管",
            "保持原高度平飛不動",
            "直接關閉 TCAS 音響警報"
        ],
        "answer": 1,
        "explanation": "ATMP 第 2-1-28 節規定，TCAS 發出避撞諮詢 (RA) 時具有最高避撞優先權，駕駛員應立即依指示執行並通報航管（管制員亦不得頒發違背 RA 之指示）。"
    },
    {
        "id": 180,
        "type": "choice",
        "question": "航空器防冰系統 (Anti-ice System，如發動機整流罩與翼前緣熱氣防冰) 應於何時開啟？",
        "options": [
            "等到機翼已經結滿厚冰後再開啟",
            "在進入已知或預期之結冰大氣條件前「提前」開啟預防",
            "僅在夏季高溫時開啟",
            "落地脫離跑道後才開啟"
        ],
        "answer": 1,
        "explanation": "「防冰 (Anti-ice)」旨在預防冰層形成，必須在進入結冰雲層或可見水氣低溫區前提前開啟；「除冰 (De-ice)」才是清除已形成之冰層。"
    },
    {
        "id": 181,
        "type": "choice",
        "question": "現代噴射客機客艙加壓系統 (Cabin Pressurization System) 的高壓空氣主要來自何處？",
        "options": [
            "隨身攜帶的高壓氧氣鋼瓶",
            "發動機壓縮機引氣 (Engine Compressor Bleed Air) 或電動壓縮機（如 B787）",
            "直接將機外冷空氣灌入",
            "客艙空調循環扇"
        ],
        "answer": 1,
        "explanation": "傳統噴射客機自發動機壓縮段抽取高溫高壓引氣，經空調組件降溫調壓後送入客艙維持加壓與通風。"
    },
    {
        "id": 182,
        "type": "choice",
        "question": "若高空飛航發生客艙失壓、旅客氧氣面罩自動落下時，化學氧氣產生器通常可持續供應氧氣多久？",
        "options": [
            "1 小時以上",
            "約 12 至 22 分鐘（足以讓客機緊急下降至安全呼吸高度）",
            "3 小時",
            "僅 2 分鐘"
        ],
        "answer": 1,
        "explanation": "化學氧氣產生器可提供約 12 至 22 分鐘純氧，足敷飛航組員執行緊急下降 (Emergency Descent) 至 10,000 呎以下安全高度。"
    },
    {
        "id": 183,
        "type": "choice",
        "question": "航空器裝載後若「重心 (Center of Gravity, CG)」超過後限（過度偏後），會造成什麼嚴重飛安危害？",
        "options": [
            "過度省油",
            "縱向靜穩定度大幅降低，俯仰極不穩定、易失速且極難改出螺旋",
            "巡航速度過快",
            "機頭過重無法拉起"
        ],
        "answer": 1,
        "explanation": "重心過度偏後會縮短水平尾翼力臂，使飛機縱向穩定度惡化，在低速高攻角下極易失速且難以壓低機頭改出。"
    },
    {
        "id": 184,
        "type": "choice",
        "question": "大氣在何種條件下最容易形成清晰持久的凝結尾 (Contrails)？",
        "options": [
            "低空熱帶海面上空",
            "高空極端寒冷（通常低於 -40°C）且大氣相對濕度高時",
            "乾燥炎熱的沙漠上空",
            "低空雷雨胞內部"
        ],
        "answer": 1,
        "explanation": "高空低溫且富含水氣時，發動機排出的水氣凝結成冰晶後不易蒸發昇華，會形成長距離清晰尾跡。"
    },
    {
        "id": 185,
        "type": "choice",
        "question": "依 ATMP 第 2-1-29 節，加強型接近地面警告系統 (EGPWS) / 地障警示告警系統 (TAWS) 的主要功能為何？",
        "options": [
            "提供空中防撞避讓",
            "結合前視地形資料庫與全球定位，提前發出地形接近警告以預防可控飛行撞地 (CFIT)",
            "提供自動降落引導",
            "與公司簽派員進行文字通信"
        ],
        "answer": 1,
        "explanation": "ATMP 第 2-1-29 節指出 EGPWS/TAWS 透過地形資料庫與高度變化率計算，防止操作正常之航空器在無警覺下撞擊地形 (CFIT)。"
    },
    {
        "id": 186,
        "type": "choice",
        "question": "飛安術語「可控飛行撞地 (Controlled Flight Into Terrain, CFIT)」是指何種事故類型？",
        "options": [
            "遭遇晴空亂流解體",
            "適航且受飛航組員完全控制之航空器，在無警覺情況下飛入地面、水面或障礙物",
            "發動機機械故障迫降",
            "遭劫機墜毀"
        ],
        "answer": 1,
        "explanation": "CFIT 係指飛機本身無重大機械失控，但因狀況警覺喪失、空間迷向或錯誤高度表撥定導致撞擊地形。"
    },
    {
        "id": 187,
        "type": "choice",
        "question": "依 ATMP 第 1-2-7 節與第 4-5-1 節，縮減垂直隔離 (Reduced Vertical Separation Minima, RVSM) 空域的標準為何？",
        "options": [
            "取消所有垂直隔離限制",
            "在飛航空層 290 (FL290) 至飛航空層 410 (FL410) 之間，將垂直最低隔離由 2,000 呎縮減為 1,000 呎",
            "僅限軍機飛航之軍事作業區",
            "地面至 3,000 呎之目視空域"
        ],
        "answer": 1,
        "explanation": "依 ATMP 第 4-5-1 節，FL290 至 FL410 間經核准 RVSM 之航空器採用 1,000 呎垂直隔離，未核准者仍須採 2,000 呎隔離。"
    },
    {
        "id": 188,
        "type": "choice",
        "question": "民航客機停靠停機坪並關閉主發動機後，機上電力與空調主要依靠何種設備供應？",
        "options": [
            "僅靠駕駛艙備用電瓶",
            "機尾之輔助動力單元 (APU) 或地面電源車 (GPU) 與地面空調車",
            "人力手搖發電機",
            "機翼太陽能板"
        ],
        "answer": 1,
        "explanation": "主發動機關閉後，由機尾的輔助動力單元 (APU) 或地勤接駁之地面電源車 (GPU) 提供全機電力與氣源。"
    },
    {
        "id": 189,
        "type": "choice",
        "question": "大型客機機翼下方常見的流線型獨木舟狀突出整流罩（Flap Track Fairings）主要作用為何？",
        "options": [
            "外掛副油箱",
            "包覆襟翼伸展與收起之機械滑軌機構，以減少氣動阻力",
            "掛載氣象探測飛彈",
            "收放主起落架"
        ],
        "answer": 1,
        "explanation": "該流線型整流罩用以包覆襟翼驅動螺旋桿與滑軌機構，大幅降低巡航時的寄生阻力。"
    },
    {
        "id": 190,
        "type": "choice",
        "question": "俗稱「黑盒子」的飛航資料紀錄器 (FDR) 與座艙語音紀錄器 (CVR)，實際外觀顏色為何？",
        "options": [
            "純黑色",
            "高辨識度之亮橘色 (International Orange) 並貼有反光條",
            "深藍色",
            "純白色"
        ],
        "answer": 1,
        "explanation": "為便於失事後在殘骸或海底快速搜尋尋獲，紀錄器外殼一律塗裝為鮮豔的亮橘色並附反光帶。"
    },
    {
        "id": 191,
        "type": "choice",
        "question": "雙發動機航空器若在空中不幸遭遇雙發動機同時失效，駕駛員首要建立並維持何種空速？",
        "options": [
            "立即跳傘棄機",
            "建立並保持最佳滑翔速度 (Best Glide Speed / Vbg)",
            "急劇拉高機頭爬升",
            "立即放下起落架與全襟翼"
        ],
        "answer": 1,
        "explanation": "最佳滑翔速度 (Best Glide Speed) 具有最佳升阻比 (L/D max)，能提供最遠的滑翔距離與最長的故障排除時間。"
    },
    {
        "id": 192,
        "type": "choice",
        "question": "飛航中若航空器觸發失速警告 (Stall Warning / Stick Shaker)，駕駛員的首要改出動作為何？",
        "options": [
            "立即猛拉駕駛桿抬高機頭",
            "立即推桿降低機頭俯仰角以減小攻角 (Angle of Attack)，並視情況增加推力",
            "立即放下起落架",
            "立即關閉發動機"
        ],
        "answer": 1,
        "explanation": "失速係因機翼超過臨界攻角所致，唯一且最優先的改出動作是推桿減小攻角，使氣流重新平滑附著翼面。"
    },
    {
        "id": 193,
        "type": "choice",
        "question": "單發動機螺旋槳飛機（順時針旋轉）在高攻角低空速爬升時產生的「P-Factor（不對稱槳葉推力效應）」會使飛機向哪側偏航？",
        "options": [
            "完全不產生偏航",
            "右側下行槳葉攻角較大產生較大推力，導致機頭向左偏航 (Left Yaw)",
            "進入倒飛姿態",
            "機頭劇烈向下俯衝"
        ],
        "answer": 1,
        "explanation": "高攻角狀態下，右側向下運動的槳葉具有較大的相對氣流攻角與推力，產生使機頭向左偏轉的力矩，需踩右舵修正。"
    },
    {
        "id": 194,
        "type": "choice",
        "question": "依《民用機場設計暨運作規範》第 5.1.1.3 節，機場風向袋多採用橙色、紅白相間或黑白相間設計，主要考量為何？",
        "options": [
            "僅為法規強制統一單一顏色",
            "確保在多變的地面與天候背景（如雪地、草地或晴空）下皆具備足夠對比與醒目度",
            "製造原料最便宜",
            "可吸收太陽能發熱除霜"
        ],
        "answer": 1,
        "explanation": "依規範第 5.1.1.3 節，風向指示器顏色應配合背景選擇以求醒目，橘色或紅白相間在雪地中辨識度最佳。"
    },
    {
        "id": 195,
        "type": "choice",
        "question": "依 ATMP 第 1-2-7 節與第 1-3-1 節，縮語「VFR」與「IFR」分別代表什麼？",
        "options": [
            "民用規則與軍用規則",
            "目視飛航規則 (Visual Flight Rules) 與儀器飛航規則 (Instrument Flight Rules)",
            "貨運飛航與客運飛航",
            "短程航線與長程航線"
        ],
        "answer": 1,
        "explanation": "ATMP 正式定義 VFR 為目視飛航規則，IFR 為儀器飛航規則。"
    },
    {
        "id": 196,
        "type": "choice",
        "question": "依 ATMP 第 1-2-7 節與第 2-5-1 節，機場儀器降落系統 (ILS) 提供精確水平與垂直導引的兩大地面發射天線設施為何？",
        "options": [
            "初級雷達與次級雷達",
            "左右定位臺 (Localizer, LLZ) 與滑降臺 (Glide Path, GP)",
            "歸航臺與測距儀",
            "廣域多點定位系統"
        ],
        "answer": 1,
        "explanation": "ATMP 與《民用機場設計暨運作規範》稱 ILS 水平導引設施為左右定位臺 (LLZ)，垂直導引設施為滑降臺 (GP)。"
    },
    {
        "id": 197,
        "type": "choice",
        "question": "噴射客機著陸觸地後啟動「發動機反推力 (Thrust Reverser)」的運作原理為何？",
        "options": [
            "讓發動機渦輪葉片反方向旋轉",
            "利用折流門或阻流板將發動機排氣或外涵道氣流折向前方，產生反向減速制動力",
            "直接鎖死主輪煞車碟盤",
            "自機尾彈射減速傘"
        ],
        "answer": 1,
        "explanation": "反推力裝置透過改變排氣方向朝前噴出，在高速滑行階段協助機輪煞車有效減速。"
    },
    {
        "id": 198,
        "type": "choice",
        "question": "民航客機於夜間或低光環境執行起飛與降落階段時，客艙組員要求調暗客艙燈光並打開窗戶遮陽板的主要飛安目的為何？",
        "options": [
            "為了節省發電機電力",
            "讓乘客與組員眼睛預先適應外界光線，並利於觀察機外火勢或障礙物以加速緊急撤離",
            "方便乘客欣賞夜景",
            "避免干擾氣象雷達"
        ],
        "answer": 1,
        "explanation": "人眼完全適應黑暗約需數分鐘，預先調暗燈光與打開遮陽板可確保發生緊急撤離時人員能迅速辨識出口與外部環境。"
    },
    {
        "id": 199,
        "type": "choice",
        "question": "民航客機在極端緊急情況下必須執行「水上迫降 (Ditching)」時，標準起落架構型應為何？",
        "options": [
            "必須放下全部起落架",
            "保持起落架完全收起 (Gear Up)，以免觸水瞬間產生巨大阻力導致機體翻覆解體",
            "僅放下前鼻輪",
            "無任何標準程序規定"
        ],
        "answer": 1,
        "explanation": "水上迫降時放下起落架會像船錨般勾住水面，造成機頭猛烈栽入水中解體，故必須保持起落架收起以機腹平滑迫降。"
    },
    {
        "id": 200,
        "type": "choice",
        "question": "大型客機駕駛艙滑動窗戶上方配備的「逃生繩 (Escape Rope / Inertia Reel)」主要用途為何？",
        "options": [
            "緊急時捆綁鬧事人員",
            "當客艙撤離通道受阻時，供飛航組員由高聳的駕駛艙窗戶垂降至地面撤離",
            "平時晾掛組員制服",
            "固定駕駛艙座椅"
        ],
        "answer": 1,
        "explanation": "大型客機駕駛艙距離地面高度極高，逃生繩確保當駕駛艙門卡死或客艙失火無法通行時，機師仍能安全垂降逃生。"
    }
];

const EXAM_TIME_SECONDS = 18000; // 30分鐘
const QUESTIONS_COUNT = Math.min(200, questionBank.length); // 每次隨機抽測 30 題

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

// 網頁載入時自動帶入日期（台北時區）
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
