javascript:(function(){
    if(document.getElementById('goku-app-root')) return;
    initGOKUApp();

    function initGOKUApp(){
        // ===== FONTS =====
        const fonts = [
            'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap',
            'https://fonts.googleapis.com/css2?family=Orbitron:wght@700;800;900&display=swap',
            'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@600;700;800&display=swap',
            'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css'
        ];
        fonts.forEach(href => {
            const l = document.createElement('link');
            l.rel = 'stylesheet';
            l.href = href;
            document.head.appendChild(l);
        });

        const root = document.createElement('div');
        root.id = 'goku-app-root';

        const GOKU_LOGO = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;display:block">
            <circle cx="50" cy="50" r="47" fill="#ff9800" stroke="#b35a00" stroke-width="3"/>
            <ellipse cx="35" cy="30" rx="15" ry="9" fill="#ffffff" opacity="0.35"/>
            <g fill="#cc0000">
                <circle cx="50" cy="50" r="6.5"/><circle cx="50" cy="26" r="5.5"/>
                <circle cx="70" cy="38" r="5.5"/><circle cx="70" cy="62" r="5.5"/>
                <circle cx="50" cy="74" r="5.5"/><circle cx="30" cy="62" r="5.5"/>
                <circle cx="30" cy="38" r="5.5"/>
            </g>
        </svg>`;

        // ===== CSS (cleaned + performance) =====
        const style = document.createElement('style');
        style.textContent = `
#goku-app-root{font-family:'Inter',sans-serif;user-select:none}
#goku-app-root *{box-sizing:border-box;-webkit-tap-highlight-color:transparent}
#goku-trigger{position:fixed!important;bottom:85px;right:22px;width:60px;height:60px;background:radial-gradient(circle at 30% 30%,#ffb84d,#ff6b00);border-radius:50%;display:none;align-items:center;justify-content:center;cursor:pointer;z-index:2147483647;border:3px solid #fff;overflow:hidden;box-shadow:0 0 20px rgba(255,140,0,0.6);transition:transform .2s}
#goku-trigger:hover{transform:scale(1.08)}
#goku-trigger::after{content:'7';position:absolute;bottom:1px;right:1px;width:16px;height:16px;background:#cc0000;color:#fff;border-radius:50%;font-size:9px;font-weight:900;display:flex;align-items:center;justify-content:center;border:1.5px solid #fff}
#goku-panel{position:fixed!important;top:50%!important;left:50%!important;transform:translate(-50%,-50%)!important;width:370px;max-height:92vh;background:linear-gradient(165deg,#0f1422,#060a14);border-radius:20px;display:none;flex-direction:column;z-index:2147483646;box-shadow:0 25px 70px rgba(0,0,0,0.8),0 0 0 1px rgba(255,140,0,0.3);overflow:hidden;color:#e5e7eb}
.goku-header{display:flex;justify-content:space-between;align-items:center;padding:12px 14px;background:linear-gradient(135deg,rgba(255,140,0,0.18),rgba(59,130,246,0.1));border-bottom:1px solid rgba(255,140,0,0.3);cursor:move}
.goku-header-left{display:flex;align-items:center;gap:10px}
.goku-header-logo{width:36px;height:36px;border-radius:50%;overflow:hidden}
.goku-header-title{font-family:'Orbitron',sans-serif;font-size:15px;font-weight:900;background:linear-gradient(135deg,#ffe066,#ff8c00);-webkit-background-clip:text;-webkit-text-fill-color:transparent;letter-spacing:1.5px}
.goku-header-sub{font-size:8px;font-weight:800;color:#fbbf24;letter-spacing:1.5px;text-transform:uppercase;margin-top:2px}
.goku-header-controls{display:flex;align-items:center;gap:6px}
.goku-status-pill{display:flex;align-items:center;gap:4px;padding:4px 8px;background:rgba(34,197,94,0.15);border:1px solid rgba(34,197,94,0.35);border-radius:999px;font-size:8px;font-weight:900;color:#4ade80;text-transform:uppercase}
.goku-status-pill .dot{width:5px;height:5px;border-radius:50%;background:#22c55e}
.goku-close-btn{background:rgba(239,68,68,0.2);color:#f87171;width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:15px;cursor:pointer;border:1px solid rgba(239,68,68,0.35)}
.goku-body{flex:1;overflow-y:auto;overflow-x:hidden;scrollbar-width:none}
.goku-body::-webkit-scrollbar{display:none}
.goku-tab{display:none;flex-direction:column;gap:10px;padding:12px}
.goku-tab.active{display:flex}
.goku-hero{background:linear-gradient(160deg,rgba(20,25,42,0.95),rgba(10,14,26,0.98));border:1.5px solid rgba(255,140,0,0.3);border-radius:16px;padding:14px}
.goku-hero-top{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px}
.goku-hero-period-lbl{font-size:8px;font-weight:900;color:#94a3b8;letter-spacing:1px;text-transform:uppercase}
.goku-hero-period-val{font-family:'JetBrains Mono',monospace;font-size:12px;font-weight:900;color:#fbbf24}
.goku-hero-timer{display:flex;align-items:center;gap:5px;padding:5px 10px;background:rgba(59,130,246,0.12);border:1px solid rgba(59,130,246,0.4);border-radius:999px;font-family:'Orbitron',sans-serif;font-size:13px;font-weight:900;color:#60a5fa}
.goku-pred-display{text-align:center;padding:14px 0}
#goku-pred{font-family:'Orbitron',sans-serif;font-size:48px;font-weight:900;letter-spacing:4px;line-height:1}
#goku-pred.big{color:#ef4444;text-shadow:0 0 18px rgba(239,68,68,0.6)}
#goku-pred.small{color:#22c55e;text-shadow:0 0 18px rgba(34,197,94,0.6)}
#goku-pred.waiting{color:#64748b;font-size:18px;letter-spacing:2px}
.goku-ki-wrap{margin-bottom:8px}
.goku-ki-head{display:flex;justify-content:space-between;font-size:8px;font-weight:900;color:#fbbf24;letter-spacing:1px;text-transform:uppercase;margin-bottom:4px}
.goku-ki-bar{height:10px;background:rgba(0,0,0,0.5);border:1px solid rgba(255,140,0,0.3);border-radius:999px;overflow:hidden}
.goku-ki-fill{height:100%;width:0%;background:linear-gradient(90deg,#3b82f6,#ff8c00,#fbbf24);border-radius:999px;transition:width .5s ease}
.goku-quick-strip{display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px}
.goku-quick-card{background:rgba(15,20,35,0.9);border:1px solid rgba(255,140,0,0.18);border-radius:12px;padding:8px 6px;text-align:center}
.goku-quick-card.win{color:#22c55e}.goku-quick-card.loss{color:#ef4444}.goku-quick-card.total{color:#fbbf24}
.goku-quick-lbl{font-size:7px;font-weight:900;color:#94a3b8;letter-spacing:.8px;text-transform:uppercase;margin-bottom:3px}
.goku-quick-val{font-family:'Orbitron',sans-serif;font-size:16px;font-weight:900}
.goku-info-duo{display:grid;grid-template-columns:1fr 1fr;gap:6px}
.goku-info-card{background:rgba(15,20,35,0.9);border:1px solid rgba(255,140,0,0.18);border-radius:12px;padding:9px 10px;display:flex;align-items:center;gap:8px}
.goku-info-icon{width:28px;height:28px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:12px}
.goku-info-icon.money{background:rgba(251,191,36,0.12);color:#fbbf24}
.goku-info-icon.profit{background:rgba(34,197,94,0.12);color:#22c55e}
.goku-info-lbl{font-size:7px;font-weight:900;color:#94a3b8;letter-spacing:.5px;text-transform:uppercase}
.goku-info-val{font-family:'Orbitron',sans-serif;font-size:13px;font-weight:900}
.goku-info-val.gold{color:#fbbf24}.goku-info-val.green{color:#22c55e}.goku-info-val.red{color:#ef4444}
.goku-modes{display:grid;grid-template-columns:repeat(4,1fr);gap:4px;background:rgba(0,0,0,0.35);padding:4px;border-radius:10px}
.goku-mode-btn{padding:8px 4px;border:none;background:transparent;color:#94a3b8;font-family:'JetBrains Mono',monospace;font-size:11px;font-weight:900;border-radius:7px;cursor:pointer}
.goku-mode-btn.active{background:linear-gradient(135deg,#3b82f6,#2563eb);color:#fff}
.goku-start-btn{width:100%;padding:14px;background:linear-gradient(135deg,#ff8c00,#ff5500);color:#fff;border:none;border-radius:12px;font-family:'Orbitron',sans-serif;font-size:15px;font-weight:900;letter-spacing:2px;cursor:pointer;text-transform:uppercase}
.goku-start-btn.running{background:linear-gradient(135deg,#ef4444,#b91c1c)}
.goku-status-row{display:flex;justify-content:space-between;align-items:center;padding:2px 0;font-size:9px;font-weight:800;color:#94a3b8}
.goku-hist-card,.goku-card{background:rgba(15,20,35,0.95);border:1px solid rgba(255,140,0,0.18);border-radius:14px;padding:12px}
.goku-acc-ring-wrap{display:flex;align-items:center;gap:14px;justify-content:center}
.goku-acc-ring{position:relative;width:110px;height:110px}
.goku-acc-ring svg{width:100%;height:100%;transform:rotate(-90deg)}
.goku-acc-ring .bg{stroke:rgba(255,140,0,0.12);stroke-width:9;fill:none}
.goku-acc-ring .fill{stroke:url(#gokuAccGrad);stroke-width:9;stroke-dasharray:283;stroke-dashoffset:283;fill:none;transition:stroke-dashoffset .8s ease}
.goku-acc-center{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center}
.goku-acc-big{font-family:'Orbitron',sans-serif;font-size:22px;font-weight:900;color:#fbbf24}
.goku-acc-lbl{font-size:7px;font-weight:900;color:#94a3b8;letter-spacing:1px;text-transform:uppercase;margin-top:2px}
.goku-acc-stats{display:flex;flex-direction:column;gap:6px;flex:1}
.goku-acc-stat{display:flex;justify-content:space-between;padding:5px 8px;background:rgba(0,0,0,0.35);border-radius:7px;border-left:3px solid currentColor}
.goku-acc-stat.win{color:#22c55e}.goku-acc-stat.loss{color:#ef4444}.goku-acc-stat.streak{color:#fbbf24}
.goku-acc-stat-lbl{font-size:8px;font-weight:800;color:#94a3b8;text-transform:uppercase}
.goku-acc-stat-val{font-family:'Orbitron',sans-serif;font-size:12px;font-weight:900}
.goku-flow-bars{display:flex;align-items:flex-end;gap:4px;height:40px;overflow-x:auto;scrollbar-width:none;margin-top:6px}
.goku-flow-bars::-webkit-scrollbar{display:none}
.goku-flow-bar{width:24px;border-radius:5px;flex-shrink:0}
.flow-win{background:linear-gradient(180deg,#22c55e,#15803d);height:36px}
.flow-loss{background:linear-gradient(180deg,#ef4444,#b91c1c);height:20px}
.flow-pending{background:#475569;height:12px}
.goku-log-list{display:flex;flex-direction:column;gap:6px}
.goku-log-card{background:rgba(15,20,35,0.9);border-radius:10px;padding:8px 10px;display:flex;align-items:center;justify-content:space-between;border:1px solid rgba(255,140,0,0.12)}
.goku-log-card.win{border-color:rgba(34,197,94,0.3)}.goku-log-card.loss{border-color:rgba(239,68,68,0.3)}
.goku-log-left{display:flex;align-items:center;gap:8px;flex:1;min-width:0}
.goku-log-ball{width:30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:'Orbitron',sans-serif;font-weight:900;font-size:13px;color:#fff;flex-shrink:0}
.goku-log-ball.violet{background:linear-gradient(135deg,#a855f7,#7e22ce)}
.goku-log-ball.red{background:linear-gradient(135deg,#ef4444,#b91c1c)}
.goku-log-ball.green{background:linear-gradient(135deg,#22c55e,#15803d)}
.goku-log-ball.pending{background:rgba(100,116,139,0.5);color:#cbd5e1}
.goku-log-info{display:flex;flex-direction:column;gap:1px;min-width:0}
.goku-log-period{font-family:'JetBrains Mono',monospace;font-size:9px;font-weight:800;color:#94a3b8}
.goku-log-period b{color:#fbbf24}
.goku-log-pred{font-size:8px;font-weight:900;padding:1px 6px;border-radius:4px;display:inline-block;width:fit-content}
.goku-log-pred.big{background:rgba(239,68,68,0.18);color:#f87171}
.goku-log-pred.small{background:rgba(34,197,94,0.18);color:#4ade80}
.goku-log-right{display:flex;flex-direction:column;align-items:flex-end;gap:2px}
.goku-log-tag{font-size:8px;font-weight:900;padding:2px 7px;border-radius:6px;text-transform:uppercase}
.tag-win{background:#15803d;color:#fff}.tag-loss{background:#b91c1c;color:#fff}.tag-pending{background:rgba(100,116,139,0.5);color:#cbd5e1}
.goku-log-time{font-size:8px;color:#6b7280;font-family:'JetBrains Mono',monospace}
.goku-sec-title{font-family:'Orbitron',sans-serif;font-size:11px;font-weight:900;color:#fbbf24;letter-spacing:1.5px;text-transform:uppercase;display:flex;align-items:center;gap:6px;margin:2px 0}
.goku-sec-title .badge{margin-left:auto;background:rgba(255,140,0,0.12);color:#fbbf24;padding:2px 8px;border-radius:999px;font-size:8px;border:1px solid rgba(255,140,0,0.25)}
.goku-card-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;padding-bottom:8px;border-bottom:1px solid rgba(255,140,0,0.15)}
.goku-card-title{font-family:'Orbitron',sans-serif;font-size:10px;font-weight:900;color:#ffb340;letter-spacing:1px;text-transform:uppercase;display:flex;align-items:center;gap:5px}
.goku-toggle-row{display:flex;align-items:center;justify-content:space-between;padding:7px 0;border-bottom:1px dashed rgba(255,140,0,0.12)}
.goku-toggle-row:last-child{border-bottom:none}
.goku-toggle-lbl{font-size:10px;font-weight:700;color:#cbd5e1;display:flex;flex-direction:column;gap:1px}
.goku-toggle-lbl small{font-size:7px;color:#64748b}
.goku-switch{position:relative;width:38px;height:22px;flex-shrink:0}
.goku-switch input{opacity:0;width:0;height:0}
.goku-switch-slider{position:absolute;cursor:pointer;inset:0;background:rgba(100,116,139,0.35);border-radius:999px;transition:.25s}
.goku-switch-slider::before{content:'';position:absolute;width:16px;height:16px;left:2px;bottom:2px;background:#cbd5e1;border-radius:50%;transition:.25s}
.goku-switch input:checked+.goku-switch-slider{background:linear-gradient(135deg,#22c55e,#15803d)}
.goku-switch input:checked+.goku-switch-slider::before{transform:translateX(16px);background:#fff}
.goku-input-row{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:8px}
.goku-input-group{display:flex;flex-direction:column;gap:4px}
.goku-input-group label{font-size:8px;font-weight:800;color:#94a3b8;letter-spacing:.4px;text-transform:uppercase}
.goku-input-group input{width:100%;padding:9px 10px;background:rgba(0,0,0,0.45);border:1px solid rgba(255,140,0,0.22);border-radius:8px;color:#fbbf24;font-family:'Orbitron',sans-serif;font-size:12px;font-weight:900;outline:none}
.goku-input-group input:focus{border-color:#ff8c00}
.goku-preview{padding:8px 10px;background:rgba(255,140,0,0.07);border:1px dashed rgba(255,140,0,0.3);border-radius:8px;font-size:9px;color:#fbbf24;line-height:1.5;margin-bottom:8px}
.goku-preview b{color:#ef4444;font-weight:900}
.goku-apply-btn{width:100%;padding:11px;background:linear-gradient(135deg,#ff8c00,#ff5500);color:#fff;border:none;border-radius:10px;font-family:'Orbitron',sans-serif;font-size:12px;font-weight:900;letter-spacing:1px;cursor:pointer;text-transform:uppercase}
.goku-apply-btn.green{background:linear-gradient(135deg,#22c55e,#15803d)}
.goku-disc-hero{background:linear-gradient(160deg,rgba(239,68,68,0.1),rgba(10,14,26,0.98));border:1px solid rgba(239,68,68,0.3);border-radius:14px;padding:16px;text-align:center}
.goku-disc-icon{font-size:32px;color:#ef4444;margin-bottom:6px}
.goku-disc-title{font-family:'Orbitron',sans-serif;font-size:14px;font-weight:900;color:#ef4444;letter-spacing:2px}
.goku-disc-sub{font-size:9px;color:#94a3b8;margin-top:3px}
.goku-disc-item{display:flex;gap:8px;padding:9px 0;border-bottom:1px dashed rgba(239,68,68,0.15);align-items:flex-start}
.goku-disc-item:last-child{border-bottom:none}
.goku-disc-item i{color:#ef4444;font-size:12px;margin-top:1px;width:16px}
.goku-disc-item-text{font-size:10px;line-height:1.5;color:#cbd5e1}
.goku-disc-item-text b{color:#fbbf24}
.goku-nav{display:flex;background:#05080f;border-top:1px solid rgba(255,140,0,0.2);padding:5px;border-radius:0 0 20px 20px;gap:2px}
.goku-nav-item{flex:1;display:flex;flex-direction:column;align-items:center;gap:2px;padding:7px 3px;border-radius:8px;cursor:pointer}
.goku-nav-item svg{width:15px;height:15px;fill:#64748b}
.goku-nav-item span{font-size:8px;font-weight:900;color:#64748b;text-transform:uppercase}
.goku-nav-item.active{background:rgba(255,140,0,0.15)}
.goku-nav-item.active svg{fill:#ff8c00}
.goku-nav-item.active span{color:#ff8c00}
.goku-modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,0.8);backdrop-filter:blur(8px);z-index:2147483652;display:flex;align-items:center;justify-content:center}
.goku-modal{background:linear-gradient(160deg,#1a2035,#0a0e1a);border:1px solid rgba(255,140,0,0.35);border-radius:16px;padding:20px;max-width:300px;width:90%;text-align:center}
.goku-modal-icon{font-size:36px;margin-bottom:8px}
.goku-modal-title{font-family:'Orbitron',sans-serif;font-size:14px;font-weight:900;color:#fbbf24;letter-spacing:1.5px;margin-bottom:8px;text-transform:uppercase}
.goku-modal-text{font-size:11px;color:#cbd5e1;line-height:1.5;margin-bottom:16px}
.goku-modal-btns{display:flex;gap:8px}
.goku-modal-btn{flex:1;padding:10px;border-radius:9px;font-family:'Orbitron',sans-serif;font-size:11px;font-weight:900;cursor:pointer;border:none;text-transform:uppercase}
.goku-modal-btn.cancel{background:rgba(100,116,139,0.3);color:#cbd5e1}
.goku-modal-btn.confirm{background:linear-gradient(135deg,#ff8c00,#ff5500);color:#fff}
.goku-toast{position:fixed;left:50%;transform:translateX(-50%);width:90%;max-width:360px;background:rgba(10,14,26,0.95);border:1px solid rgba(255,140,0,0.3);padding:12px 14px;border-radius:14px;z-index:2147483651;box-shadow:0 15px 40px rgba(0,0,0,0.6);display:flex;align-items:center;gap:10px;color:#fff;animation:goku-toast-in .3s ease}
@keyframes goku-toast-in{from{opacity:0;transform:translateX(-50%) translateY(-20px)}to{opacity:1;transform:translateX(-50%) translateY(0)}}
.goku-toast-icon{width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:16px}
.goku-toast.win .goku-toast-icon{background:#15803d}.goku-toast.loss .goku-toast-icon{background:#b91c1c}.goku-toast.info .goku-toast-icon{background:#d97706}
.goku-toast-title{font-family:'Orbitron',sans-serif;font-size:12px;font-weight:900}
.goku-toast-desc{font-size:11px;color:rgba(255,255,255,0.85)}
        `;
        document.head.appendChild(style);

        // ===== HTML =====
        root.innerHTML = `
            <div id="goku-trigger">${GOKU_LOGO}</div>
            <div id="goku-panel">
                <div class="goku-header" id="goku-move">
                    <div class="goku-header-left">
                        <div class="goku-header-logo">${GOKU_LOGO}</div>
                        <div>
                            <div class="goku-header-title">GOKU AI</div>
                            <div class="goku-header-sub">7★ POWER • V2.1</div>
                        </div>
                    </div>
                    <div class="goku-header-controls">
                        <div class="goku-status-pill"><div class="dot"></div><span>LIVE</span></div>
                        <div class="goku-close-btn" id="goku-close">×</div>
                    </div>
                </div>
                <div class="goku-body">
                    <div class="goku-tab active" id="tab-predict">
                        <div class="goku-hero">
                            <div class="goku-hero-top">
                                <div>
                                    <div class="goku-hero-period-lbl">ACTIVE PERIOD</div>
                                    <div class="goku-hero-period-val" id="goku-period">...SYNC</div>
                                </div>
                                <div class="goku-hero-timer">
                                    <i class="fa-solid fa-stopwatch"></i>
                                    <span id="goku-time">00:00</span>
                                </div>
                            </div>
                            <div class="goku-pred-display">
                                <div id="goku-pred" class="waiting">CHARGING...</div>
                            </div>
                            <div class="goku-ki-wrap">
                                <div class="goku-ki-head">
                                    <span>KI POWER</span>
                                    <span id="goku-conf-txt">0%</span>
                                </div>
                                <div class="goku-ki-bar"><div class="goku-ki-fill" id="goku-conf-fill"></div></div>
                            </div>
                        </div>
                        <div class="goku-quick-strip">
                            <div class="goku-quick-card total"><div class="goku-quick-lbl">Rounds</div><div class="goku-quick-val" id="st-tot">0</div></div>
                            <div class="goku-quick-card win"><div class="goku-quick-lbl">Wins</div><div class="goku-quick-val" id="st-win">0</div></div>
                            <div class="goku-quick-card loss"><div class="goku-quick-lbl">Losses</div><div class="goku-quick-val" id="st-los">0</div></div>
                        </div>
                        <div class="goku-info-duo">
                            <div class="goku-info-card">
                                <div class="goku-info-icon money"><i class="fa-solid fa-wallet"></i></div>
                                <div>
                                    <div class="goku-info-lbl">BALANCE</div>
                                    <div class="goku-info-val gold" id="goku-bal-val">₹0.00</div>
                                </div>
                            </div>
                            <div class="goku-info-card">
                                <div class="goku-info-icon profit"><i class="fa-solid fa-chart-line"></i></div>
                                <div>
                                    <div class="goku-info-lbl">PROFIT</div>
                                    <div class="goku-info-val green" id="st-pro">₹0.00</div>
                                </div>
                            </div>
                        </div>
                        <div class="goku-modes">
                            <button class="goku-mode-btn" data-api="WinGo_30S" data-sec="30">30S</button>
                            <button class="goku-mode-btn active" data-api="WinGo_1M" data-sec="60">1M</button>
                            <button class="goku-mode-btn" data-api="WinGo_3M" data-sec="180">3M</button>
                            <button class="goku-mode-btn" data-api="WinGo_5M" data-sec="300">5M</button>
                        </div>
                        <button class="goku-start-btn" id="goku-bot-btn">⚡ START</button>
                        <div class="goku-status-row">
                            <div style="display:flex;align-items:center;gap:5px">
                                <i class="fa-solid fa-circle" style="color:#22c55e;font-size:5px"></i>
                                <span id="goku-status-txt">KI: DORMANT</span>
                            </div>
                            <div id="goku-history-balls" style="display:flex;gap:4px"></div>
                        </div>
                    </div>

                    <div class="goku-tab" id="tab-history">
                        <div class="goku-hist-card">
                            <div class="goku-acc-ring-wrap">
                                <div class="goku-acc-ring">
                                    <svg viewBox="0 0 100 100">
                                        <defs>
                                            <linearGradient id="gokuAccGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stop-color="#3b82f6"/>
                                                <stop offset="50%" stop-color="#ff8c00"/>
                                                <stop offset="100%" stop-color="#fbbf24"/>
                                            </linearGradient>
                                        </defs>
                                        <circle class="bg" cx="50" cy="50" r="45"/>
                                        <circle class="fill" id="goku-svg-progress" cx="50" cy="50" r="45"/>
                                    </svg>
                                    <div class="goku-acc-center">
                                        <div class="goku-acc-big" id="hist-acc-val">0%</div>
                                        <div class="goku-acc-lbl">Accuracy</div>
                                    </div>
                                </div>
                                <div class="goku-acc-stats">
                                    <div class="goku-acc-stat win"><span class="goku-acc-stat-lbl">Wins</span><span class="goku-acc-stat-val" id="hist-stat-win">0</span></div>
                                    <div class="goku-acc-stat loss"><span class="goku-acc-stat-lbl">Losses</span><span class="goku-acc-stat-val" id="hist-stat-loss">0</span></div>
                                    <div class="goku-acc-stat streak"><span class="goku-acc-stat-lbl">Streak</span><span class="goku-acc-stat-val" id="hist-stat-streak">0</span></div>
                                </div>
                            </div>
                        </div>
                        <div class="goku-card">
                            <div class="goku-card-header">
                                <div class="goku-card-title"><i class="fa-solid fa-wave-square"></i> RESULT FLOW</div>
                                <span style="font-size:8px;color:#94a3b8">Best: <span id="hist-best-win" style="color:#22c55e">0</span> • Worst: <span id="hist-worst-loss" style="color:#ef4444">0</span></span>
                            </div>
                            <div class="goku-flow-bars" id="goku-flow-bar-container"></div>
                            <div style="display:flex;justify-content:space-between;font-size:9px;font-weight:800;color:#94a3b8;margin-top:6px;padding-top:6px;border-top:1px dashed rgba(255,140,0,0.15)">
                                <span>Rounds: <b id="hist-stat-rounds" style="color:#fbbf24">0</b></span>
                                <span>Net: <b id="hist-net-amount" style="color:#22c55e">₹0.00</b></span>
                            </div>
                        </div>
                        <div class="goku-sec-title">PREDICTION LOG <span class="badge" id="hist-badge-total">0</span></div>
                        <div class="goku-log-list" id="goku-prediction-log-list"></div>
                    </div>

                    <div class="goku-tab" id="tab-risk">
                        <div class="goku-card">
                            <div class
