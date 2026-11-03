javascript:(function(){
    initAKMApp();

    function initAKMApp(){
        if(document.getElementById('akm-app-root')) return;

        // ===== FONTS =====
        const font1 = document.createElement('link'); font1.rel='stylesheet';
        font1.href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap';
        document.head.appendChild(font1);
        const font2 = document.createElement('link'); font2.rel='stylesheet';
        font2.href='https://fonts.googleapis.com/css2?family=Orbitron:wght@700;800;900&display=swap';
        document.head.appendChild(font2);
        const font3 = document.createElement('link'); font3.rel='stylesheet';
        font3.href='https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@600;700;800&display=swap';
        document.head.appendChild(font3);
        const fa = document.createElement('link'); fa.rel='stylesheet';
        fa.href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css';
        document.head.appendChild(fa);

        const root = document.createElement('div'); root.id='akm-app-root';

        const GOKU_LOGO = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;display:block">
            <circle cx="50" cy="50" r="47" fill="#ff9800" stroke="#b35a00" stroke-width="3"/>
            <ellipse cx="35" cy="30" rx="15" ry="9" fill="#ffffff" opacity="0.35"/>
            <g fill="#cc0000">
                <circle cx="50" cy="50" r="6.5"/>
                <circle cx="50" cy="26" r="5.5"/>
                <circle cx="70" cy="38" r="5.5"/>
                <circle cx="70" cy="62" r="5.5"/>
                <circle cx="50" cy="74" r="5.5"/>
                <circle cx="30" cy="62" r="5.5"/>
                <circle cx="30" cy="38" r="5.5"/>
            </g>
        </svg>`;

        // ===== CSS =====
        const style = document.createElement('style');
        style.innerHTML = `
#akm-app-root{font-family:'Inter',sans-serif;user-select:none}
#akm-app-root *{box-sizing:border-box;-webkit-tap-highlight-color:transparent}
@keyframes akm-aura-pulse{0%{box-shadow:0 0 0 0 rgba(255,140,0,0.8),0 0 30px rgba(255,140,0,0.7),0 0 60px rgba(251,191,36,0.5),inset 0 0 15px rgba(255,255,255,0.2)}50%{box-shadow:0 0 0 8px rgba(255,140,0,0.2),0 0 40px rgba(255,140,0,0.9),0 0 80px rgba(251,191,36,0.7),inset 0 0 20px rgba(255,255,255,0.4)}100%{box-shadow:0 0 0 0 rgba(255,140,0,0.8),0 0 30px rgba(255,140,0,0.7),0 0 60px rgba(251,191,36,0.5),inset 0 0 15px rgba(255,255,255,0.2)}}
@keyframes akm-float-bob{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-8px) rotate(3deg)}}
#akm-trigger{position:fixed !important;bottom:85px;right:22px;width:66px;height:66px;background:radial-gradient(circle at 30% 30%,#ffb84d,#ff6b00);border-radius:50%;display:none;align-items:center;justify-content:center;cursor:pointer;z-index:2147483647;border:3px solid #fff;overflow:hidden;animation:akm-aura-pulse 2.4s infinite,akm-float-bob 3.5s ease-in-out infinite;transition:transform 0.3s cubic-bezier(0.34,1.56,0.64,1)}
#akm-trigger:hover{transform:scale(1.12) rotate(10deg)}
#akm-trigger::after{content:'7';position:absolute;bottom:2px;right:2px;width:18px;height:18px;background:linear-gradient(135deg,#ff3333,#cc0000);color:#fff;border-radius:50%;font-size:10px;font-weight:900;display:flex;align-items:center;justify-content:center;border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,0.5)}
@keyframes akm-panel-enter{0%{opacity:0;transform:translate(-50%,-45%) scale(0.9);filter:blur(8px)}100%{opacity:1;transform:translate(-50%,-50%) scale(1);filter:blur(0)}}
#akm-panel{position:fixed !important;top:50% !important;left:50% !important;transform:translate(-50%,-50%) !important;width:388px;max-height:94vh;background:radial-gradient(circle at 0% 0%,rgba(255,140,0,0.15) 0%,transparent 40%),radial-gradient(circle at 100% 100%,rgba(59,130,246,0.12) 0%,transparent 40%),linear-gradient(160deg,#0f1422 0%,#060a14 100%);border-radius:24px;display:none;flex-direction:column;z-index:2147483646;box-shadow:0 35px 90px rgba(0,0,0,0.85),0 0 0 1px rgba(255,140,0,0.35),0 0 80px rgba(255,140,0,0.18);overflow:hidden;color:#e5e7eb;animation:akm-panel-enter 0.4s cubic-bezier(0.34,1.56,0.64,1)}
#akm-panel::before{content:'';position:absolute;inset:0;background-image:radial-gradient(circle at 20% 30%,rgba(255,140,0,0.08) 0px,transparent 1px),radial-gradient(circle at 70% 60%,rgba(59,130,246,0.08) 0px,transparent 1px),radial-gradient(circle at 40% 80%,rgba(251,191,36,0.08) 0px,transparent 1px);background-size:60px 60px,80px 80px,70px 70px;pointer-events:none;opacity:0.6}
.akm-header{display:flex;justify-content:space-between;align-items:center;padding:14px 16px;background:linear-gradient(135deg,rgba(255,140,0,0.22),rgba(59,130,246,0.15),rgba(255,140,0,0.22));border-bottom:1px solid rgba(255,140,0,0.4);cursor:move;position:relative;z-index:2}
.akm-header::after{content:'';position:absolute;bottom:0;left:10%;right:10%;height:1px;background:linear-gradient(90deg,transparent,#fbbf24,transparent)}
.akm-header-left{display:flex;align-items:center;gap:11px;flex:1}
.akm-header-logo{width:40px;height:40px;filter:drop-shadow(0 0 12px rgba(255,140,0,0.8));flex-shrink:0;border-radius:50%;overflow:hidden}
.akm-header-info{display:flex;flex-direction:column;flex:1}
.akm-header-title{font-family:'Orbitron',sans-serif;font-size:17px;font-weight:900;background:linear-gradient(135deg,#ffe066,#fbbf24,#ff8c00);-webkit-background-clip:text;-webkit-text-fill-color:transparent;letter-spacing:2px;line-height:1;filter:drop-shadow(0 0 8px rgba(255,140,0,0.5))}
.akm-header-sub{font-size:8px;font-weight:800;color:#fbbf24;letter-spacing:2px;text-transform:uppercase;margin-top:3px;opacity:0.9}
.akm-header-controls{display:flex;align-items:center;gap:6px}
.akm-status-pill{display:flex;align-items:center;gap:5px;padding:5px 10px;background:rgba(34,197,94,0.15);border:1px solid rgba(34,197,94,0.4);border-radius:999px;font-size:9px;font-weight:900;color:#4ade80;letter-spacing:0.8px;text-transform:uppercase}
.akm-status-pill .dot{width:6px;height:6px;border-radius:50%;background:#22c55e;box-shadow:0 0 8px #22c55e;animation:akm-blink 1.5s infinite}
@keyframes akm-blink{0%,100%{opacity:1}50%{opacity:0.3}}
.akm-close-btn{background:rgba(239,68,68,0.2);color:#f87171;width:30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:16px;cursor:pointer;transition:0.25s;border:1px solid rgba(239,68,68,0.4)}
.akm-close-btn:hover{background:#ef4444;color:#fff;transform:rotate(90deg) scale(1.1)}
.akm-body{flex:1;overflow-y:auto;overflow-x:hidden;scrollbar-width:none;position:relative;z-index:2}
.akm-body::-webkit-scrollbar{display:none}
.akm-tab{display:none;flex-direction:column;gap:12px;padding:15px}
.akm-tab.active{display:flex}
@keyframes akm-hero-glow{0%,100%{box-shadow:0 0 25px rgba(255,140,0,0.3),inset 0 0 25px rgba(255,140,0,0.05)}50%{box-shadow:0 0 45px rgba(255,140,0,0.5),inset 0 0 35px rgba(255,140,0,0.1)}}
@keyframes akm-hero-shimmer{0%{transform:translateX(-100%)}100%{transform:translateX(200%)}}
.akm-hero{position:relative;background:radial-gradient(ellipse at top,rgba(255,140,0,0.15) 0%,transparent 70%),linear-gradient(160deg,rgba(20,25,42,0.95),rgba(10,14,26,0.98));border:2px solid rgba(255,140,0,0.4);border-radius:20px;padding:16px;overflow:hidden;animation:akm-hero-glow 3s infinite}
.akm-hero::before{content:'';position:absolute;top:0;left:0;width:60px;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,0.15),transparent);animation:akm-hero-shimmer 3s infinite}
.akm-hero-top{display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;position:relative;z-index:2}
.akm-hero-period{display:flex;flex-direction:column;gap:2px}
.akm-hero-period-lbl{font-size:8px;font-weight:900;color:#94a3b8;letter-spacing:1.5px;text-transform:uppercase}
.akm-hero-period-val{font-family:'JetBrains Mono',monospace;font-size:13px;font-weight:900;color:#fbbf24;letter-spacing:1px}
.akm-hero-timer{display:flex;align-items:center;gap:6px;padding:6px 12px;background:rgba(59,130,246,0.15);border:1.5px solid rgba(59,130,246,0.5);border-radius:999px;font-family:'Orbitron',sans-serif;font-size:15px;font-weight:900;color:#60a5fa;text-shadow:0 0 12px rgba(96,165,250,0.8);letter-spacing:1px}
.akm-hero-timer i{font-size:11px;color:#93c5fd}
.akm-pred-display{text-align:center;padding:18px 0;position:relative;z-index:2}
#akm-pred{font-family:'Orbitron',sans-serif;font-size:54px;font-weight:900;letter-spacing:6px;line-height:1;transition:0.4s;display:inline-block}
#akm-pred.big{color:#ef4444;text-shadow:0 0 25px rgba(239,68,68,0.8),0 0 50px rgba(239,68,68,0.5),0 0 80px rgba(239,68,68,0.3);animation:akm-big-pulse 1.5s infinite}
#akm-pred.small{color:#22c55e;text-shadow:0 0 25px rgba(34,197,94,0.8),0 0 50px rgba(34,197,94,0.5),0 0 80px rgba(34,197,94,0.3);animation:akm-small-pulse 1.5s infinite}
#akm-pred.waiting{color:#64748b;font-size:22px;letter-spacing:4px;animation:akm-blink 1.5s infinite}
@keyframes akm-big-pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.04)}}
@keyframes akm-small-pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.04)}}
.akm-ki-wrap{position:relative;z-index:2;margin-bottom:10px}
.akm-ki-head{display:flex;justify-content:space-between;font-size:9px;font-weight:900;color:#fbbf24;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:5px;text-shadow:0 0 8px rgba(251,191,36,0.5)}
.akm-ki-bar{height:12px;background:rgba(0,0,0,0.55);border:1.5px solid rgba(255,140,0,0.35);border-radius:999px;overflow:hidden;position:relative;box-shadow:inset 0 2px 6px rgba(0,0,0,0.6)}
.akm-ki-fill{height:100%;width:0%;background:linear-gradient(90deg,#3b82f6,#8b5cf6,#ff8c00,#fbbf24);border-radius:999px;transition:width 0.8s cubic-bezier(0.34,1.56,0.64,1);box-shadow:0 0 15px rgba(255,140,0,0.9),inset 0 1px 1px rgba(255,255,255,0.4);position:relative}
.akm-ki-fill::after{content:'';position:absolute;top:0;right:0;bottom:0;width:30%;background:linear-gradient(90deg,transparent,rgba(255,255,255,0.7));animation:akm-ki-shine 1.5s infinite}
@keyframes akm-ki-shine{0%{transform:translateX(-100%);opacity:0}50%{opacity:1}100%{transform:translateX(100%);opacity:0}}
.akm-quick-strip{display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px}
.akm-quick-card{background:linear-gradient(145deg,rgba(20,25,42,0.9),rgba(10,14,26,0.95));border:1px solid rgba(255,140,0,0.2);border-radius:14px;padding:10px 8px;text-align:center;position:relative;overflow:hidden}
.akm-quick-card::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,currentColor,transparent);opacity:0.6}
.akm-quick-card.win{color:#22c55e}
.akm-quick-card.loss{color:#ef4444}
.akm-quick-card.total{color:#fbbf24}
.akm-quick-lbl{font-size:8px;font-weight:900;color:#94a3b8;letter-spacing:1px;text-transform:uppercase;margin-bottom:4px}
.akm-quick-val{font-family:'Orbitron',sans-serif;font-size:18px;font-weight:900;line-height:1;color:currentColor;text-shadow:0 0 12px currentColor}
.akm-info-duo{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.akm-info-card{background:linear-gradient(145deg,rgba(20,25,42,0.9),rgba(10,14,26,0.95));border:1px solid rgba(255,140,0,0.2);border-radius:14px;padding:11px 12px;display:flex;align-items:center;gap:9px}
.akm-info-icon{width:32px;height:32px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0}
.akm-info-icon.money{background:rgba(251,191,36,0.15);color:#fbbf24}
.akm-info-icon.profit{background:rgba(34,197,94,0.15);color:#22c55e}
.akm-info-text{display:flex;flex-direction:column;gap:1px;flex:1;min-width:0}
.akm-info-lbl{font-size:8px;font-weight:900;color:#94a3b8;letter-spacing:0.6px;text-transform:uppercase}
.akm-info-val{font-family:'Orbitron',sans-serif;font-size:14px;font-weight:900;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.akm-info-val.gold{color:#fbbf24;text-shadow:0 0 8px rgba(251,191,36,0.5)}
.akm-info-val.green{color:#22c55e;text-shadow:0 0 8px rgba(34,197,94,0.5)}
.akm-info-val.red{color:#ef4444;text-shadow:0 0 8px rgba(239,68,68,0.5)}
.akm-modes{display:grid;grid-template-columns:repeat(4,1fr);gap:6px;background:rgba(0,0,0,0.4);padding:5px;border-radius:12px;border:1px solid rgba(255,140,0,0.15)}
.akm-mode-btn{padding:10px 6px;border:none;background:transparent;color:#94a3b8;font-family:'JetBrains Mono',monospace;font-size:11px;font-weight:900;border-radius:8px;cursor:pointer;transition:0.25s;letter-spacing:0.5px}
.akm-mode-btn:hover{color:#fbbf24;background:rgba(255,140,0,0.08)}
.akm-mode-btn.active{background:linear-gradient(135deg,#3b82f6,#2563eb);color:#fff;box-shadow:0 4px 14px rgba(59,130,246,0.5)}
@keyframes akm-btn-glow{0%,100%{box-shadow:0 8px 25px rgba(255,107,0,0.5),inset 0 1px 1px rgba(255,255,255,0.3)}50%{box-shadow:0 10px 35px rgba(255,107,0,0.8),inset 0 1px 1px rgba(255,255,255,0.5)}}
.akm-start-btn{width:100%;padding:17px;background:linear-gradient(135deg,#ff8c00,#ff5500);color:#fff;border:none;border-radius:16px;font-family:'Orbitron',sans-serif;font-size:18px;font-weight:900;letter-spacing:3px;cursor:pointer;animation:akm-btn-glow 2s infinite;transition:transform 0.2s;position:relative;overflow:hidden;text-transform:uppercase}
.akm-start-btn::before{content:'';position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent);animation:akm-btn-shine 2.5s infinite}
@keyframes akm-btn-shine{0%{left:-100%}50%,100%{left:100%}}
.akm-start-btn:hover{transform:translateY(-2px)}
.akm-start-btn:active{transform:translateY(0) scale(0.98)}
.akm-start-btn.running{background:linear-gradient(135deg,#ef4444,#b91c1c);animation:akm-btn-glow-red 1.2s infinite}
@keyframes akm-btn-glow-red{0%,100%{box-shadow:0 8px 25px rgba(239,68,68,0.5)}50%{box-shadow:0 10px 40px rgba(239,68,68,0.9)}}
.akm-hist-card{background:linear-gradient(145deg,rgba(20,25,42,0.95),rgba(10,14,26,0.98));border:1px solid rgba(255,140,0,0.2);border-radius:18px;padding:16px;box-shadow:0 8px 25px rgba(0,0,0,0.5)}
.akm-acc-ring-wrap{display:flex;align-items:center;gap:18px;justify-content:center;padding:8px 0}
.akm-acc-ring{position:relative;width:130px;height:130px;flex-shrink:0}
.akm-acc-ring svg{width:100%;height:100%;transform:rotate(-90deg)}
.akm-acc-ring circle{fill:none;stroke-linecap:round}
.akm-acc-ring .bg{stroke:rgba(255,140,0,0.1);stroke-width:10}
.akm-acc-ring .fill{stroke:url(#akmAccGrad);stroke-width:10;stroke-dasharray:283;stroke-dashoffset:283;transition:stroke-dashoffset 1s cubic-bezier(0.34,1.56,0.64,1);filter:drop-shadow(0 0 8px rgba(255,140,0,0.8))}
.akm-acc-center{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center}
.akm-acc-big{font-family:'Orbitron',sans-serif;font-size:26px;font-weight:900;color:#fbbf24;text-shadow:0 0 15px rgba(251,191,36,0.6);line-height:1}
.akm-acc-lbl{font-size:8px;font-weight:900;color:#94a3b8;letter-spacing:1.5px;text-transform:uppercase;margin-top:3px}
.akm-acc-stats{display:flex;flex-direction:column;gap:8px;flex:1}
.akm-acc-stat{display:flex;justify-content:space-between;align-items:center;padding:6px 10px;background:rgba(0,0,0,0.4);border-radius:8px;border-left:3px solid currentColor}
.akm-acc-stat.win{color:#22c55e}
.akm-acc-stat.loss{color:#ef4444}
.akm-acc-stat.streak{color:#fbbf24}
.akm-acc-stat-lbl{font-size:9px;font-weight:800;color:#94a3b8;text-transform:uppercase;letter-spacing:0.5px}
.akm-acc-stat-val{font-family:'Orbitron',sans-serif;font-size:13px;font-weight:900;color:currentColor;text-shadow:0 0 8px currentColor}
.akm-flow-bars{display:flex;align-items:flex-end;gap:5px;height:46px;padding:4px 0;overflow-x:auto;scrollbar-width:none;margin-top:8px}
.akm-flow-bars::-webkit-scrollbar{display:none}
.akm-flow-bar{width:28px;border-radius:6px;flex-shrink:0;transition:all 0.3s}
.flow-win{background:linear-gradient(180deg,#22c55e,#15803d);height:40px;box-shadow:0 3px 10px rgba(34,197,94,0.5)}
.flow-loss{background:linear-gradient(180deg,#ef4444,#b91c1c);height:22px;box-shadow:0 3px 10px rgba(239,68,68,0.5)}
.flow-pending{background:#475569;height:14px}
.akm-log-list{display:flex;flex-direction:column;gap:7px}
.akm-log-card{background:linear-gradient(145deg,rgba(20,25,42,0.9),rgba(10,14,26,0.95));border-radius:12px;padding:10px 12px;display:flex;align-items:center;justify-content:space-between;border:1px solid rgba(255,140,0,0.15);transition:0.2s}
.akm-log-card:hover{transform:translateX(2px);border-color:rgba(255,140,0,0.4)}
.akm-log-card.win{border-color:rgba(34,197,94,0.4);background:linear-gradient(145deg,rgba(34,197,94,0.08),rgba(10,14,26,0.95))}
.akm-log-card.loss{border-color:rgba(239,68,68,0.4);background:linear-gradient(145deg,rgba(239,68,68,0.08),rgba(10,14,26,0.95))}
.akm-log-left{display:flex;align-items:center;gap:10px;flex:1;min-width:0}
.akm-log-ball{width:34px;height:34px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:'Orbitron',sans-serif;font-weight:900;font-size:15px;color:#fff;flex-shrink:0;box-shadow:0 3px 10px rgba(0,0,0,0.5),inset 0 1px 2px rgba(255,255,255,0.3)}
.akm-log-ball.violet{background:linear-gradient(135deg,#a855f7,#7e22ce)}
.akm-log-ball.red{background:linear-gradient(135deg,#ef4444,#b91c1c)}
.akm-log-ball.green{background:linear-gradient(135deg,#22c55e,#15803d)}
.akm-log-ball.pending{background:rgba(100,116,139,0.5);color:#cbd5e1}
.akm-log-info{display:flex;flex-direction:column;gap:2px;min-width:0;flex:1}
.akm-log-period{font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:800;color:#94a3b8;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.akm-log-period b{color:#fbbf24;font-weight:900}
.akm-log-pred{font-size:9px;font-weight:900;padding:2px 7px;border-radius:5px;display:inline-block;width:fit-content;letter-spacing:0.5px}
.akm-log-pred.big{background:rgba(239,68,68,0.2);color:#f87171}
.akm-log-pred.small{background:rgba(34,197,94,0.2);color:#4ade80}
.akm-log-right{display:flex;flex-direction:column;align-items:flex-end;gap:3px;flex-shrink:0}
.akm-log-tag{font-size:9px;font-weight:900;padding:3px 8px;border-radius:7px;letter-spacing:0.5px;text-transform:uppercase}
.tag-win{background:linear-gradient(135deg,#22c55e,#15803d);color:#fff;box-shadow:0 2px 8px rgba(34,197,94,0.5)}
.tag-loss{background:linear-gradient(135deg,#ef4444,#b91c1c);color:#fff;box-shadow:0 2px 8px rgba(239,68,68,0.5)}
.tag-pending{background:rgba(100,116,139,0.5);color:#cbd5e1}
.akm-log-time{font-size:9px;font-weight:700;color:#6b7280;font-family:'JetBrains Mono',monospace}
.akm-sec-title{font-family:'Orbitron',sans-serif;font-size:12px;font-weight:900;color:#fbbf24;letter-spacing:2px;text-transform:uppercase;display:flex;align-items:center;gap:8px;margin:4px 0;text-shadow:0 0 10px rgba(251,191,36,0.4)}
.akm-sec-title::before{content:'';width:3px;height:14px;background:linear-gradient(180deg,#ff8c00,#fbbf24);border-radius:3px;box-shadow:0 0 10px rgba(255,140,0,0.8)}
.akm-sec-title .badge{margin-left:auto;background:rgba(255,140,0,0.15);color:#fbbf24;padding:2px 9px;border-radius:999px;font-size:9px;border:1px solid rgba(255,140,0,0.3)}
.akm-card{background:linear-gradient(145deg,rgba(20,25,42,0.95),rgba(10,14,26,0.98));border:1px solid rgba(255,140,0,0.2);border-radius:16px;padding:14px;box-shadow:0 8px 25px rgba(0,0,0,0.4)}
.akm-card.safety{border-color:rgba(34,197,94,0.3);background:radial-gradient(circle at 100% 0%,rgba(34,197,94,0.08) 0%,transparent 50%),linear-gradient(145deg,rgba(20,25,42,0.95),rgba(10,14,26,0.98))}
.akm-card-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;padding-bottom:10px;border-bottom:1px solid rgba(255,140,0,0.2)}
.akm-card.safety .akm-card-header{border-color:rgba(34,197,94,0.2)}
.akm-card-title{font-family:'Orbitron',sans-serif;font-size:11px;font-weight:900;color:#ffb340;letter-spacing:1.5px;text-transform:uppercase;display:flex;align-items:center;gap:6px}
.akm-card.safety .akm-card-title{color:#4ade80}
.akm-card-title i{font-size:12px}
.akm-toggle-row{display:flex;align-items:center;justify-content:space-between;padding:8px 0;border-bottom:1px dashed rgba(255,140,0,0.15)}
.akm-toggle-row:last-child{border-bottom:none}
.akm-toggle-lbl{font-size:11px;font-weight:700;color:#cbd5e1;display:flex;flex-direction:column;gap:2px}
.akm-toggle-lbl small{font-size:8px;color:#64748b;font-weight:600;letter-spacing:0.3px}
.akm-switch{position:relative;width:42px;height:24px;flex-shrink:0}
.akm-switch input{opacity:0;width:0;height:0}
.akm-switch-slider{position:absolute;cursor:pointer;inset:0;background:rgba(100,116,139,0.4);border-radius:999px;transition:0.3s;border:1px solid rgba(100,116,139,0.5)}
.akm-switch-slider::before{content:'';position:absolute;width:18px;height:18px;left:2px;bottom:2px;background:#cbd5e1;border-radius:50%;transition:0.3s;box-shadow:0 2px 4px rgba(0,0,0,0.4)}
.akm-switch input:checked + .akm-switch-slider{background:linear-gradient(135deg,#22c55e,#15803d);border-color:#22c55e}
.akm-switch input:checked + .akm-switch-slider::before{transform:translateX(18px);background:#fff}
.akm-input-row{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px}
.akm-input-group{display:flex;flex-direction:column;gap:5px}
.akm-input-group label{font-size:9px;font-weight:800;color:#94a3b8;letter-spacing:0.5px;text-transform:uppercase}
.akm-input-group label i{color:#fbbf24;margin-right:3px}
.akm-input-group input{width:100%;padding:11px 12px;background:rgba(0,0,0,0.5);border:1.5px solid rgba(255,140,0,0.25);border-radius:10px;color:#fbbf24;font-family:'Orbitron',sans-serif;font-size:13px;font-weight:900;outline:none;transition:0.2s}
.akm-input-group input:focus{border-color:#ff8c00;box-shadow:0 0 0 3px rgba(255,140,0,0.2);background:rgba(0,0,0,0.7)}
.akm-preview{padding:10px 12px;background:rgba(255,140,0,0.08);border:1px dashed rgba(255,140,0,0.35);border-radius:10px;font-size:10px;color:#fbbf24;line-height:1.6;margin-bottom:10px;font-weight:700}
.akm-preview b{color:#ef4444;font-weight:900;font-size:12px}
.akm-apply-btn{width:100%;padding:13px;background:linear-gradient(135deg,#ff8c00,#ff5500);color:#fff;border:none;border-radius:12px;font-family:'Orbitron',sans-serif;font-size:13px;font-weight:900;letter-spacing:1.5px;cursor:pointer;text-transform:uppercase;box-shadow:0 6px 20px rgba(255,107,0,0.5);transition:0.2s}
.akm-apply-btn:hover{transform:translateY(-1px);box-shadow:0 8px 25px rgba(255,107,0,0.7)}
.akm-apply-btn:active{transform:scale(0.98)}
.akm-apply-btn.green{background:linear-gradient(135deg,#22c55e,#15803d);box-shadow:0 6px 20px rgba(34,197,94,0.5)}
.akm-disc-hero{background:radial-gradient(ellipse at top,rgba(239,68,68,0.15) 0%,transparent 60%),linear-gradient(160deg,rgba(20,25,42,0.95),rgba(10,14,26,0.98));border:1.5px solid rgba(239,68,68,0.35);border-radius:18px;padding:20px 16px;text-align:center;box-shadow:0 0 40px rgba(239,68,68,0.15)}
.akm-disc-icon{font-size:42px;color:#ef4444;filter:drop-shadow(0 0 20px rgba(239,68,68,0.6));margin-bottom:8px;animation:akm-warn-pulse 2s infinite}
@keyframes akm-warn-pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.08)}}
.akm-disc-title{font-family:'Orbitron',sans-serif;font-size:17px;font-weight:900;color:#ef4444;letter-spacing:3px;text-shadow:0 0 20px rgba(239,68,68,0.6)}
.akm-disc-sub{font-size:10px;font-weight:700;color:#94a3b8;margin-top:5px;letter-spacing:0.5px}
.akm-disc-item{display:flex;gap:10px;padding:11px 0;border-bottom:1px dashed rgba(239,68,68,0.2);align-items:flex-start}
.akm-disc-item:last-child{border-bottom:none}
.akm-disc-item i{color:#ef4444;font-size:14px;margin-top:1px;flex-shrink:0;width:20px}
.akm-disc-item-text{font-size:11px;line-height:1.6;color:#cbd5e1;font-weight:500}
.akm-disc-item-text b{color:#fbbf24;font-weight:800}
.akm-nav{display:flex;background:#05080f;border-top:1px solid rgba(255,140,0,0.25);padding:6px;position:relative;z-index:2;border-radius:0 0 24px 24px;gap:2px}
.akm-nav-item{flex:1;display:flex;flex-direction:column;align-items:center;gap:3px;padding:9px 4px;border-radius:10px;cursor:pointer;transition:0.2s;position:relative}
.akm-nav-item svg{width:17px;height:17px;fill:#64748b;transition:0.2s}
.akm-nav-item span{font-size:9px;font-weight:900;color:#64748b;letter-spacing:0.3px;text-transform:uppercase;transition:0.2s}
.akm-nav-item:hover svg{fill:#fbbf24}
.akm-nav-item:hover span{color:#fbbf24}
.akm-nav-item.active{background:linear-gradient(135deg,rgba(255,140,0,0.2),rgba(251,191,36,0.12));box-shadow:inset 0 0 0 1px rgba(255,140,0,0.3)}
.akm-nav-item.active svg{fill:#ff8c00;filter:drop-shadow(0 0 6px rgba(255,140,0,0.8))}
.akm-nav-item.active span{color:#ff8c00}
@keyframes akm-modal-in{0%{opacity:0;transform:scale(0.9)}100%{opacity:1;transform:scale(1)}}
.akm-modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,0.85);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);z-index:2147483652;display:flex;align-items:center;justify-content:center;animation:akm-modal-in 0.3s ease}
.akm-modal{background:linear-gradient(160deg,#1a2035,#0a0e1a);border:1.5px solid rgba(255,140,0,0.4);border-radius:20px;padding:24px 20px;max-width:320px;width:90%;text-align:center;box-shadow:0 25px 70px rgba(0,0,0,0.9),0 0 60px rgba(255,140,0,0.2)}
.akm-modal-icon{font-size:44px;margin-bottom:10px;filter:drop-shadow(0 0 20px rgba(251,191,36,0.6))}
.akm-modal-icon.warn{color:#fbbf24}
.akm-modal-icon.danger{color:#ef4444}
.akm-modal-title{font-family:'Orbitron',sans-serif;font-size:16px;font-weight:900;color:#fbbf24;letter-spacing:2px;margin-bottom:10px;text-transform:uppercase}
.akm-modal-text{font-size:12px;color:#cbd5e1;line-height:1.6;margin-bottom:20px}
.akm-modal-text b{color:#fbbf24;font-weight:900}
.akm-modal-btns{display:flex;gap:10px}
.akm-modal-btn{flex:1;padding:12px;border-radius:11px;font-family:'Orbitron',sans-serif;font-size:12px;font-weight:900;letter-spacing:1.5px;cursor:pointer;transition:0.2s;text-transform:uppercase;border:none}
.akm-modal-btn.cancel{background:rgba(100,116,139,0.3);color:#cbd5e1;border:1px solid rgba(100,116,139,0.5)}
.akm-modal-btn.cancel:hover{background:rgba(100,116,139,0.5)}
.akm-modal-btn.confirm{background:linear-gradient(135deg,#ff8c00,#ff5500);color:#fff;box-shadow:0 6px 20px rgba(255,107,0,0.5)}
.akm-modal-btn.confirm:hover{transform:translateY(-1px);box-shadow:0 8px 25px rgba(255,107,0,0.7)}
@keyframes akm-toast-anim{0%{top:-100px;opacity:0;transform:translateX(-50%) scale(0.85)}15%{top:25px;opacity:1;transform:translateX(-50%) scale(1)}85%{top:25px;opacity:1;transform:translateX(-50%) scale(1)}100%{top:-100px;opacity:0;transform:translateX(-50%) scale(0.85)}}
.akm-toast{position:fixed;left:50%;transform:translateX(-50%);width:92%;max-width:380px;background:rgba(10,14,26,0.95);backdrop-filter:blur(25px);-webkit-backdrop-filter:blur(25px);border:1px solid rgba(255,140,0,0.4);padding:14px 16px;border-radius:18px;z-index:2147483651;box-shadow:0 25px 60px rgba(0,0,0,0.7),0 0 30px rgba(255,140,0,0.3);animation:akm-toast-anim 3.5s cubic-bezier(0.2,0.8,0.2,1) forwards;pointer-events:none;display:flex;align-items:center;gap:13px;color:#fff}
.akm-toast-icon{width:42px;height:42px;border-radius:12px;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:20px;box-shadow:inset 0 1px 2px rgba(255,255,255,0.2)}
.akm-toast.win .akm-toast-icon{background:linear-gradient(135deg,#22c55e,#15803d);color:#fff;box-shadow:0 0 20px rgba(34,197,94,0.6),inset 0 1px 2px rgba(255,255,255,0.3)}
.akm-toast.loss .akm-toast-icon{background:linear-gradient(135deg,#ef4444,#b91c1c);color:#fff;box-shadow:0 0 20px rgba(239,68,68,0.6),inset 0 1px 2px rgba(255,255,255,0.3)}
.akm-toast.info .akm-toast-icon{background:linear-gradient(135deg,#fbbf24,#d97706);color:#fff;box-shadow:0 0 20px rgba(251,191,36,0.6)}
.akm-toast-content{flex:1}
.akm-toast-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:2px}
.akm-toast-title{font-family:'Orbitron',sans-serif;font-size:13px;font-weight:900;letter-spacing:1px}
.akm-toast-time{color:rgba(255,255,255,0.5);font-size:11px;font-weight:500}
.akm-toast-desc{color:rgba(255,255,255,0.9);font-size:12px;font-weight:600}
        `;
        document.head.appendChild(style);

        // ===== HTML =====
        root.innerHTML = `
            <div id="akm-trigger">${GOKU_LOGO}</div>

            <div id="akm-panel">
                <div class="akm-header" id="akm-move">
                    <div class="akm-header-left">
                        <div class="akm-header-logo">${GOKU_LOGO}</div>
                        <div class="akm-header-info">
                            <div class="akm-header-title">GOKU AI</div>
                            <div class="akm-header-sub">7★ POWER • V2.0</div>
                        </div>
                    </div>
                    <div class="akm-header-controls">
                        <div class="akm-status-pill"><div class="dot"></div><span>LIVE</span></div>
                        <div class="akm-close-btn" id="akm-close">×</div>
                    </div>
                </div>

                <div class="akm-body">
                    <div class="akm-tab active" id="tab-predict">
                        <div class="akm-hero">
                            <div class="akm-hero-top">
                                <div class="akm-hero-period">
                                    <span class="akm-hero-period-lbl">⚡ ACTIVE PERIOD</span>
                                    <span class="akm-hero-period-val" id="akm-period">...SYNC</span>
                                </div>
                                <div class="akm-hero-timer">
                                    <i class="fa-solid fa-stopwatch"></i>
                                    <span id="akm-time">00:00</span>
                                </div>
                            </div>
                            <div class="akm-pred-display">
                                <div id="akm-pred" class="waiting">CHARGING...</div>
                            </div>
                            <div class="akm-ki-wrap">
                                <div class="akm-ki-head">
                                    <span>⚡ KI POWER</span>
                                    <span id="akm-conf-txt">0%</span>
                                </div>
                                <div class="akm-ki-bar"><div class="akm-ki-fill" id="akm-conf-fill"></div></div>
                            </div>
                        </div>

                        <div class="akm-quick-strip">
                            <div class="akm-quick-card total"><div class="akm-quick-lbl">Rounds</div><div class="akm-quick-val" id="st-tot">0</div></div>
                            <div class="akm-quick-card win"><div class="akm-quick-lbl">Wins</div><div class="akm-quick-val" id="st-win">0</div></div>
                            <div class="akm-quick-card loss"><div class="akm-quick-lbl">Losses</div><div class="akm-quick-val" id="st-los">0</div></div>
                        </div>

                        <div class="akm-info-duo">
                            <div class="akm-info-card">
                                <div class="akm-info-icon money"><i class="fa-solid fa-wallet"></i></div>
                                <div class="akm-info-text">
                                    <span class="akm-info-lbl">BALANCE</span>
                                    <span class="akm-info-val gold" id="akm-bal-val">₹0.00</span>
                                </div>
                            </div>
                            <div class="akm-info-card">
                                <div class="akm-info-icon profit"><i class="fa-solid fa-chart-line"></i></div>
                                <div class="akm-info-text">
                                    <span class="akm-info-lbl">PROFIT</span>
                                    <span class="akm-info-val green" id="st-pro">₹0.00</span>
                                </div>
                            </div>
                        </div>

                        <div class="akm-modes">
                            <button class="akm-mode-btn" data-api="WinGo_30S" data-sec="30">30S</button>
                            <button class="akm-mode-btn active" data-api="WinGo_1M" data-sec="60">1M</button>
                            <button class="akm-mode-btn" data-api="WinGo_3M" data-sec="180">3M</button>
                            <button class="akm-mode-btn" data-api="WinGo_5M" data-sec="300">5M</button>
                        </div>

                        <button class="akm-start-btn" id="akm-bot-btn">⚡ START</button>

                        <div style="display:flex; justify-content:space-between; align-items:center; padding: 4px 2px;">
                            <div style="display:flex; align-items:center; gap:6px; font-size:9px; font-weight:900; color:#94a3b8; letter-spacing:0.5px;">
                                <i class="fa-solid fa-circle" style="color:#22c55e; font-size:6px;"></i>
                                <span id="akm-status-txt">KI: DORMANT</span>
                            </div>
                            <div style="display:flex; gap:5px;" id="akm-history-balls"></div>
                        </div>
                    </div>

                    <div class="akm-tab" id="tab-history">
                        <div class="akm-hist-card">
                            <div class="akm-acc-ring-wrap">
                                <div class="akm-acc-ring">
                                    <svg viewBox="0 0 100 100">
                                        <defs>
                                            <linearGradient id="akmAccGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stop-color="#3b82f6"/>
                                                <stop offset="50%" stop-color="#ff8c00"/>
                                                <stop offset="100%" stop-color="#fbbf24"/>
                                            </linearGradient>
                                        </defs>
                                        <circle class="bg" cx="50" cy="50" r="45"/>
                                        <circle class="fill" id="akm-svg-progress" cx="50" cy="50" r="45"/>
                                    </svg>
                                    <div class="akm-acc-center">
                                        <div class="akm-acc-big" id="hist-acc-val">0%</div>
                                        <div class="akm-acc-lbl">Accuracy</div>
                                    </div>
                                </div>
                                <div class="akm-acc-stats">
                                    <div class="akm-acc-stat win"><span class="akm-acc-stat-lbl">✅ Wins</span><span class="akm-acc-stat-val" id="hist-stat-win">0</span></div>
                                    <div class="akm-acc-stat loss"><span class="akm-acc-stat-lbl">❌ Losses</span><span class="akm-acc-stat-val" id="hist-stat-loss">0</span></div>
                                    <div class="akm-acc-stat streak"><span class="akm-acc-stat-lbl">🔥 Streak</span><span class="akm-acc-stat-val" id="hist-stat-streak">0</span></div>
                                </div>
                            </div>
                        </div>

                        <div class="akm-card">
                            <div class="akm-card-header">
                                <div class="akm-card-title"><i class="fa-solid fa-wave-square"></i> RESULT FLOW</div>
                                <span style="font-size:9px; color:#94a3b8; font-weight:800;">Best: <span id="hist-best-win" style="color:#22c55e;">0</span> • Worst: <span id="hist-worst-loss" style="color:#ef4444;">0</span></span>
                            </div>
                            <div class="akm-flow-bars" id="akm-flow-bar-container"></div>
                            <div style="display:flex; justify-content:space-between; font-size:10px; font-weight:800; color:#94a3b8; margin-top:6px; padding-top:6px; border-top: 1px dashed rgba(255,140,0,0.2);">
                                <span>Rounds: <b id="hist-stat-rounds" style="color:#fbbf24;">0</b></span>
                                <span>Net: <b id="hist-net-amount" style="color:#22c55e;">₹0.00</b></span>
                            </div>
                        </div>

                        <div class="akm-sec-title">
                            📜 PREDICTION LOG
                            <span class="badge" id="hist-badge-total">0</span>
                        </div>
                        <div class="akm-log-list" id="akm-prediction-log-list"></div>
                    </div>

                    <div class="akm-tab" id="tab-risk">
                        <div class="akm-card safety">
                            <div class="akm-card-header">
                                <div class="akm-card-title"><i class="fa-solid fa-shield-halved"></i> SAFETY GUARDS</div>
                                <span style="font-size:8px; padding:3px 8px; background:rgba(34,197,94,0.2); color:#4ade80; border-radius:999px; font-weight:900; letter-spacing:0.5px;" id="akm-safety-badge">OFF</span>
                            </div>

                            <div class="akm-toggle-row">
                                <div class="akm-toggle-lbl">Confirm Before Start<small>Show warning before bot starts</small></div>
                                <label class="akm-switch"><input type="checkbox" id="sg-confirm-toggle" checked><span class="akm-switch-slider"></span></label>
                            </div>
                            <div class="akm-toggle-row">
                                <div class="akm-toggle-lbl">Bet % Warning<small>Warn if bet &gt; 25% of balance</small></div>
                                <label class="akm-switch"><input type="checkbox" id="sg-betwarn-toggle" checked><span class="akm-switch-slider"></span></label>
                            </div>
                            <div class="akm-toggle-row">
                                <div class="akm-toggle-lbl">Session Alert<small>Warn after 60 min of running</small></div>
                                <label class="akm-switch"><input type="checkbox" id="sg-session-toggle" checked><span class="akm-switch-slider"></span></label>
                            </div>

                            <div class="akm-input-row" style="margin-top:12px;">
                                <div class="akm-input-group">
                                    <label><i class="fa-solid fa-arrow-down"></i> Stop Loss (₹)</label>
                                    <input type="number" id="sg-stop-loss" value="500" min="0">
                                </div>
                                <div class="akm-input-group">
                                    <label><i class="fa-solid fa-arrow-up"></i> Take Profit (₹)</label>
                                    <input type="number" id="sg-take-profit" value="1000" min="0">
                                </div>
                            </div>

                            <button class="akm-apply-btn green" id="sg-apply-btn">🛡️ APPLY GUARDS</button>
                        </div>

                        <div class="akm-card">
                            <div class="akm-card-header">
                                <div class="akm-card-title"><i class="fa-solid fa-bolt"></i> SMART BETTING</div>
                                <label style="display:flex; align-items:center; gap:5px; cursor:pointer; font-size:9px; color:#fbbf24; font-weight:900; letter-spacing:0.5px;">
                                    <input type="checkbox" id="bm-autoscale-toggle" style="accent-color:#ff8c00; width:14px; height:14px;">
                                    AUTO
                                </label>
                            </div>

                            <div class="akm-input-row">
                                <div class="akm-input-group" id="box-base-bet">
                                    <label><i class="fa-solid fa-coins"></i> First Bet (₹)</label>
                                    <input type="number" id="bm-first-bet" value="10" min="1">
                                </div>
                                <div class="akm-input-group" id="box-maintain-lvl" style="display:none;">
                                    <label><i class="fa-solid fa-layer-group"></i> Auto Lvl</label>
                                    <input type="number" id="bm-auto-levels" value="5" min="1">
                                </div>
                                <div class="akm-input-group">
                                    <label><i class="fa-solid fa-xmark"></i> Multiplier X</label>
                                    <input type="number" id="bm-multiple-x" value="2" step="0.1" min="1">
                                </div>
                            </div>

                            <div class="akm-input-row" id="box-max-lvl-fixed">
                                <div class="akm-input-group">
                                    <label><i class="fa-solid fa-layer-group"></i> Max Levels</label>
                                    <input type="number" id="bm-max-levels" value="5" min="1" max="10">
                                </div>
                            </div>

                            <div class="akm-preview" id="bm-levels-preview">...</div>

                            <button class="akm-apply-btn" id="bm-apply-btn">⚡ SAVE BET CONFIG</button>
                        </div>
                    </div>

                    <div class="akm-tab" id="tab-disclaimer">
                        <div class="akm-disc-hero">
                            <div class="akm-disc-icon"><i class="fa-solid fa-triangle-exclamation"></i></div>
                            <div class="akm-disc-title">DISCLAIMER</div>
                            <div class="akm-disc-sub">PLEASE READ CAREFULLY BEFORE USE</div>
                        </div>

                        <div class="akm-card">
                            <div class="akm-card-title" style="margin-bottom:8px;"><i class="fa-solid fa-shield-virus"></i> RISK WARNINGS</div>
                            <div class="akm-disc-item"><i class="fa-solid fa-ban"></i><div class="akm-disc-item-text"><b>Gambling Risk:</b> All betting involves financial risk. You may lose money. Never bet more than you can afford to lose.</div></div>
                            <div class="akm-disc-item"><i class="fa-solid fa-scale-balanced"></i><div class="akm-disc-item-text"><b>No Guarantee:</b> Predictions are algorithmic estimates — not guaranteed wins. Past patterns do not ensure future results.</div></div>
                            <div class="akm-disc-item"><i class="fa-solid fa-user-shield"></i><div class="akm-disc-item-text"><b>Personal Responsibility:</b> You are solely responsible for all betting decisions and any financial outcomes.</div></div>
                            <div class="akm-disc-item"><i class="fa-solid fa-calendar-xmark"></i><div class="akm-disc-item-text"><b>Age Restriction:</b> Must be <b>18+ years old</b> to use this tool. Not intended for minors.</div></div>
                            <div class="akm-disc-item"><i class="fa-solid fa-gavel"></i><div class="akm-disc-item-text"><b>Legal Compliance:</b> Ensure online gambling is legal in your jurisdiction. Users must comply with local laws.</div></div>
                            <div class="akm-disc-item"><i class="fa-solid fa-code"></i><div class="akm-disc-item-text"><b>No Liability:</b> Developers are not responsible for any losses, damages, or legal issues arising from use.</div></div>
                        </div>

                        <div class="akm-card">
                            <div class="akm-card-title" style="margin-bottom:8px;"><i class="fa-solid fa-circle-info"></i> IMPORTANT</div>
                            <div class="akm-disc-item-text" style="text-align:center; padding:8px;">
                                This tool does <b>not</b> hack the game or guarantee wins. It applies pattern recognition on public game history for entertainment purposes only.
                            </div>
                        </div>

                        <div style="text-align:center; padding:12px; font-size:10px; color:#64748b; font-weight:800; letter-spacing:1px;">
                            <i class="fa-solid fa-heart" style="color:#ef4444;"></i>
                            &nbsp; PLAY RESPONSIBLY &nbsp;
                            <i class="fa-solid fa-heart" style="color:#ef4444;"></i>
                        </div>
                    </div>
                </div>

                <div class="akm-nav">
                    <div class="akm-nav-item active" data-target="tab-predict"><svg viewBox="0 0 24 24"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/></svg><span>Predict</span></div>
                    <div class="akm-nav-item" data-target="tab-history"><svg viewBox="0 0 24 24"><path d="M13 3a9 9 0 0 0-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0 0 13 21a9 9 0 0 0 0-18zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/></svg><span>History</span></div>
                    <div class="akm-nav-item" data-target="tab-risk"><svg viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 11h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11V12z"/></svg><span>Safety</span></div>
                    <div class="akm-nav-item" data-target="tab-disclaimer"><svg viewBox="0 0 24 24"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg><span>Info</span></div>
                </div>
            </div>
        `;
        document.body.appendChild(root);

        // ===== BALL HELPER =====
        function getBall(num, size) {
            size = size || 24;
            let cls = 'green';
            if (num === 0 || num === 5) cls = 'violet';
            else if (num % 2 === 0) cls = 'red';
            return `<div class="akm-log-ball ${cls}" style="width:${size}px;height:${size}px;font-size:${Math.floor(size*0.45)}px;">${num}</div>`;
        }

        // ===== ELEMENTS =====
        const trigger = document.getElementById('akm-trigger');
        const panel = document.getElementById('akm-panel');
        const closeBtn = document.getElementById('akm-close');

        trigger.style.setProperty('display', 'flex', 'important');
        panel.style.display = 'none';

        trigger.onclick = () => { panel.style.display = 'flex'; trigger.style.setProperty('display', 'none', 'important'); };
        closeBtn.onclick = () => { panel.style.display = 'none'; trigger.style.setProperty('display', 'flex', 'important'); };

        // ===== DRAG =====
        function dragElement(elmnt, handle) {
            let pos1=0,pos2=0,pos3=0,pos4=0;
            handle.onmousedown = (e) => { e.preventDefault(); pos3=e.clientX; pos4=e.clientY; document.onmouseup=closeDrag; document.onmousemove=elementDrag; };
            handle.ontouchstart = (e) => { pos3=e.touches[0].clientX; pos4=e.touches[0].clientY; document.ontouchend=closeDrag; document.ontouchmove=elementTouchDrag; };
            function elementDrag(e) { pos1=pos3-e.clientX; pos2=pos4-e.clientY; pos3=e.clientX; pos4=e.clientY; elmnt.style.top=(elmnt.offsetTop-pos2)+"px"; elmnt.style.left=(elmnt.offsetLeft-pos1)+"px"; }
            function elementTouchDrag(e) { pos1=pos3-e.touches[0].clientX; pos2=pos4-e.touches[0].clientY; pos3=e.touches[0].clientX; pos4=e.touches[0].clientY; elmnt.style.top=(elmnt.offsetTop-pos2)+"px"; elmnt.style.left=(elmnt.offsetLeft-pos1)+"px"; }
            function closeDrag() { document.onmouseup=null; document.onmousemove=null; document.ontouchend=null; document.ontouchmove=null; }
        }
        dragElement(panel, document.getElementById('akm-move'));

        // ===== TAB NAV =====
        document.querySelectorAll('.akm-nav-item').forEach(item => {
            item.onclick = () => {
                const target = item.getAttribute('data-target');
                document.querySelectorAll('.akm-nav-item').forEach(n => n.classList.remove('active'));
                item.classList.add('active');
                document.querySelectorAll('.akm-tab').forEach(p => p.classList.remove('active'));
                document.getElementById(target).classList.add('active');
            };
        });

        // ===== TIMER MODES =====
        document.querySelectorAll('.akm-mode-btn').forEach(tab => {
            tab.onclick = () => {
                document.querySelectorAll('.akm-mode-btn').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                currentApiMode = tab.getAttribute('data-api');
                maxSeconds = parseInt(tab.getAttribute('data-sec'));
            };
        });

        // ===== CORE VARIABLES =====
        let isBotRunning = false;
        let isAutoScale = false, autoScaleLevels = 5, fixedBaseBet = 10, martingaleMultiplier = 2, maxLevelsAllowed = 5;
        let currentLevel = 0, currentBalance = 0, betLevelsArray = [];
        let currentApiMode = "WinGo_1M", maxSeconds = 60, timerWorker;
        let latestHistoryData = [];
        let lastPeriodFetched = "", currentPredictionObj = null, activeBetPending = false;
        let stats = { total: 0, wins: 0, losses: 0, profit: 0.0, currentStreak: 0, bestWinStreak: 0, worstLossStreak: 0 };
        let predictionLogs = [];

        // ===== SAFETY STATE =====
        let safety = {
            confirmBeforeStart: true,
            betPercentWarn: true,
            sessionAlert: true,
            stopLossAmount: 500,
            takeProfitAmount: 1000,
            stopLossActive: true,
            takeProfitActive: true
        };
        let botStartedAt = 0;
        let sessionWarned = false;

        // ===================================================
        // GOKU 7-STAR FIXED PATTERN LOGIC (UNCHANGED)
        // ===================================================
        const GOKU_PATTERNS = [
            ['BIG','BIG','SMALL','BIG','SMALL','BIG'],
            ['SMALL','BIG','BIG','SMALL','BIG','SMALL'],
            ['BIG','SMALL','BIG','BIG','SMALL','SMALL'],
            ['SMALL','SMALL','BIG','BIG','BIG','SMALL'],
            ['BIG','BIG','BIG','SMALL','SMALL','BIG'],
            ['SMALL','BIG','SMALL','BIG','BIG','SMALL'],
            ['BIG','SMALL','SMALL','BIG','BIG','SMALL'],
            ['SMALL','BIG','BIG','BIG','SMALL','BIG'],
            ['BIG','SMALL','BIG','SMALL','BIG','BIG'],
            ['SMALL','SMALL','BIG','SMALL','BIG','BIG']
        ];
        const BIG_STREAK_REVERSE = 9;
        const SMALL_STREAK_REVERSE = 5;

        function gokuPredict(history) {
            if (!history || history.length < 3) return { size: 'BIG', confidence: 60 };
            const sidesNewest = history.map(h => h.number >= 5 ? 'BIG' : 'SMALL');
            const chrono = [...sidesNewest].reverse();

            let bigStreak = 0, smallStreak = 0;
            for (let i = 0; i < sidesNewest.length; i++) { if (sidesNewest[i] === 'BIG') bigStreak++; else break; }
            for (let i = 0; i < sidesNewest.length; i++) { if (sidesNewest[i] === 'SMALL') smallStreak++; else break; }

            if (bigStreak >= BIG_STREAK_REVERSE) return { size: 'SMALL', confidence: 96 };
            if (smallStreak >= SMALL_STREAK_REVERSE) return { size: 'BIG', confidence: 94 };

            let best = null;
            for (const pattern of GOKU_PATTERNS) {
                for (let len = Math.min(5, chrono.length); len >= 3; len--) {
                    const tail = chrono.slice(-len);
                    const head = pattern.slice(0, len);
                    let ok = true;
                    for (let i = 0; i < len; i++) { if (tail[i] !== head[i]) { ok = false; break; } }
                    if (ok) {
                        const conf = 68 + len * 5;
                        if (!best || len > best.len) best = { size: pattern[len], confidence: conf, len };
                    }
                }
            }
            if (best) return best;

            const last5 = sidesNewest.slice(0, 5);
            const bigs = last5.filter(s => s === 'BIG').length;
            return { size: bigs >= 3 ? 'SMALL' : 'BIG', confidence: 68 };
        }

        // ===== PREDICTION DISPLAY =====
        function updatePredictionDisplay() {
            if (!latestHistoryData || latestHistoryData.length === 0) {
                const p = document.getElementById('akm-pred');
                p.innerHTML = 'WAITING...'; p.className = 'waiting';
                return;
            }
            let result;
            try { result = gokuPredict(latestHistoryData); } catch(e) { result = { size: 'BIG', confidence: 60 }; }

            const predSize = result.size || 'BIG';
            const conf = result.confidence || 70;
            currentPredictionObj = { size: predSize, conf };

            const pEl = document.getElementById('akm-pred');
            pEl.innerHTML = predSize;
            pEl.className = predSize === 'BIG' ? 'big' : 'small';

            document.getElementById('akm-conf-txt').innerText = conf + '%';
            document.getElementById('akm-conf-fill').style.width = conf + '%';
        }

        // ===== FETCH API =====
        async function fetchApiData() {
            try {
                const url = `https://draw.ar-lottery01.com/WinGo/${currentApiMode}/GetHistoryIssuePage.json?_t=${Date.now()}`;
                const res = await fetch(url);
                const data = await res.json();
                const rawList = (data && data.data && data.data.list) ? data.data.list : (data && data.list ? data.list : []);

                if (rawList.length > 0) {
                    const historyList = rawList.map(item => {
                        const num = parseInt(item.openNumber || item.number || 0);
                        return { issueNumber: item.issueNumber || item.issue, number: num, size: num >= 5 ? 'BIG' : 'SMALL' };
                    });
                    latestHistoryData = historyList;
                    const lastIssue = historyList[0];
                    const currentPeriodStr = (BigInt(lastIssue.issueNumber) + 1n).toString();

                    document.getElementById('akm-period').innerText = currentPeriodStr;
                    renderHistory(historyList);

                    if (lastPeriodFetched && lastPeriodFetched !== currentPeriodStr) {
                        if (activeBetPending) checkWinLoss(lastIssue);

                        const pEl = document.getElementById('akm-pred');
                        pEl.innerHTML = 'CHARGING...';
                        pEl.className = 'waiting';

                        setTimeout(() => {
                            updatePredictionDisplay();
                            // FIX: guard check happens inside executeAutoBetSequence (with next bet amount)
                            if (isBotRunning) setTimeout(() => executeAutoBetSequence(), 2000);
                        }, 1000);
                    }
                    lastPeriodFetched = currentPeriodStr;
                }
            } catch (e) {}
        }

        function renderHistory(list) {
            const box = document.getElementById('akm-history-balls');
            box.innerHTML = list.slice(0, 5).map(item => getBall(item.number, 22)).join('');
        }

        // ===== LIVE CLOCK =====
        function startLiveClock() {
            const workerCode = `let t; self.onmessage=function(e){if(e.data==='start')t=setInterval(()=>postMessage('tick'),1000);};`;
            const blob = new Blob([workerCode], {type: 'application/javascript'});
            timerWorker = new Worker(URL.createObjectURL(blob));
            timerWorker.onmessage = function() {
                updateBalance();

                const now = new Date();
                const s = now.getSeconds(), m = now.getMinutes();
                let secondsLeft = 0;
                if (maxSeconds === 30) secondsLeft = 30 - (s % 30);
                else if (maxSeconds === 60) secondsLeft = 60 - s;
                else if (maxSeconds === 180) secondsLeft = 180 - ((m % 3) * 60 + s);
                else if (maxSeconds === 300) secondsLeft = 300 - ((m % 5) * 60 + s);

                document.getElementById('akm-time').innerText =
                    `${String(Math.floor(secondsLeft / 60)).padStart(2,'0')}:${String(secondsLeft % 60).padStart(2,'0')}`;

                if (isBotRunning && botStartedAt && safety.sessionAlert && !sessionWarned) {
                    if (Date.now() - botStartedAt > 60 * 60 * 1000) {
                        sessionWarned = true;
                        showToast('info', '⏰ SESSION ALERT', 'Bot has been running for 1 hour. Consider taking a break.');
                    }
                }

                if (isAutoScale) updateLevelsPreview();
                fetchApiData();
            };
            timerWorker.postMessage('start');
        }

        function updateBalance() {
            const e = document.querySelector('.Wallet__C-balance-l1 div, .balance-amount, #balance, .balance, .money');
            const v = e ? e.innerText.replace(/[^\d.]/g,'') : "0.00";
            currentBalance = parseFloat(v) || 0;
            document.getElementById('akm-bal-val').innerText = "₹" + currentBalance.toFixed(2);
        }

        // ===== SAFETY CONFIG =====
        function updateSafetyBadge() {
            const badge = document.getElementById('akm-safety-badge');
            const active = safety.stopLossActive || safety.takeProfitActive || safety.confirmBeforeStart;
            badge.style.background = active ? 'rgba(34,197,94,0.2)' : 'rgba(100,116,139,0.3)';
            badge.style.color = active ? '#4ade80' : '#94a3b8';
            badge.innerText = active ? 'ON' : 'OFF';
        }

        // FIX: reads current input values (also called automatically on START)
        function applySafety() {
            safety.confirmBeforeStart = document.getElementById('sg-confirm-toggle').checked;
            safety.betPercentWarn = document.getElementById('sg-betwarn-toggle').checked;
            safety.sessionAlert = document.getElementById('sg-session-toggle').checked;
            safety.stopLossAmount = parseFloat(document.getElementById('sg-stop-loss').value) || 0;
            safety.takeProfitAmount = parseFloat(document.getElementById('sg-take-profit').value) || 0;
            safety.stopLossActive = safety.stopLossAmount > 0;
            safety.takeProfitActive = safety.takeProfitAmount > 0;
            updateSafetyBadge();
        }

        // FIX: single guard check. nextAmt = upcoming bet, so SL can't be crossed by the next loss
        function guardHit(nextAmt) {
            nextAmt = nextAmt || 0;
            if (safety.stopLossActive && stats.profit - nextAmt <= -safety.stopLossAmount)
                return { title: '🛡️ STOP-LOSS HIT', desc: `Stopped. P/L: ₹${stats.profit.toFixed(2)}` };
            if (safety.takeProfitActive && stats.profit >= safety.takeProfitAmount)
                return { title: '🎯 TAKE-PROFIT HIT', desc: `Stopped at +₹${stats.profit.toFixed(2)}` };
            return null;
        }

        document.getElementById('sg-apply-btn').onclick = () => {
            applySafety();
            showToast('info', '🛡️ GUARDS ACTIVE', `SL: ₹${safety.stopLossAmount} • TP: ₹${safety.takeProfitAmount}`);
        };

        // ===== RISK CONFIG =====
        document.getElementById('bm-autoscale-toggle').onchange = (e) => {
            isAutoScale = e.target.checked;
            document.getElementById('box-base-bet').style.display = isAutoScale ? 'none' : 'flex';
            document.getElementById('box-max-lvl-fixed').style.display = isAutoScale ? 'none' : 'grid';
            document.getElementById('box-maintain-lvl').style.display = isAutoScale ? 'flex' : 'none';
            updateLevelsPreview();
        };

        function updateLevelsPreview() {
            const mult = parseFloat(document.getElementById('bm-multiple-x').value) || 2;
            let arr = [], total = 0, first = 10, maxL = 5;
            if (isAutoScale) {
                maxL = parseInt(document.getElementById('bm-auto-levels').value) || 5;
                let factor = 0; for (let i = 0; i < maxL; i++) factor += Math.pow(mult, i);
                first = Math.max(1, Math.floor(currentBalance / factor));
                if (currentBalance === 0) first = 0;
            } else {
                first = parseFloat(document.getElementById('bm-first-bet').value) || 10;
                maxL = parseInt(document.getElementById('bm-max-levels').value) || 5;
            }
            let curr = first;
            for (let i = 0; i < maxL; i++) { arr.push(`L${i+1}=₹${curr}`); total += curr; curr = Math.round(curr * mult); }
            document.getElementById('bm-levels-preview').innerHTML =
                `${arr.join(' • ')}<br>TOTAL REQ: <b>₹${total}</b>`;
        }
        ['bm-first-bet','bm-multiple-x','bm-max-levels','bm-auto-levels'].forEach(id => {
            document.getElementById(id).addEventListener('input', updateLevelsPreview);
        });

        function generateBetLevels() {
            const arr = []; let curr = 0;
            if (isAutoScale) {
                let factor = 0; for (let i = 0; i < autoScaleLevels; i++) factor += Math.pow(martingaleMultiplier, i);
                curr = Math.max(1, Math.floor(currentBalance / factor));
                maxLevelsAllowed = autoScaleLevels;
            } else { curr = fixedBaseBet; }
            for (let i = 0; i < maxLevelsAllowed; i++) { arr.push(curr); curr = Math.round(curr * martingaleMultiplier); }
            return arr;
        }

        document.getElementById('bm-apply-btn').onclick = () => {
            isAutoScale = document.getElementById('bm-autoscale-toggle').checked;
            martingaleMultiplier = parseFloat(document.getElementById('bm-multiple-x').value) || 2;
            if (isAutoScale) { autoScaleLevels = parseInt(document.getElementById('bm-auto-levels').value) || 5; maxLevelsAllowed = autoScaleLevels; }
            else { fixedBaseBet = parseFloat(document.getElementById('bm-first-bet').value) || 10; maxLevelsAllowed = parseInt(document.getElementById('bm-max-levels').value) || 5; }
            currentLevel = 0; updateStatsUI();
            showToast('info', '⚡ CONFIG SAVED', 'Bet configuration updated successfully');
            document.querySelector('.akm-nav-item[data-target="tab-predict"]').click();
        };

        // ===== MODAL =====
        function showModal(title, message, type, onConfirm) {
            const ov = document.createElement('div');
            ov.className = 'akm-modal-overlay';
            ov.innerHTML = `
                <div class="akm-modal">
                    <div class="akm-modal-icon ${type}">${type === 'warn' ? '⚠️' : '🛑'}</div>
                    <div class="akm-modal-title">${title}</div>
                    <div class="akm-modal-text">${message}</div>
                    <div class="akm-modal-btns">
                        <button class="akm-modal-btn cancel" id="akm-m-cancel">CANCEL</button>
                        <button class="akm-modal-btn confirm" id="akm-m-confirm">CONFIRM</button>
                    </div>
                </div>`;
            document.body.appendChild(ov);
            ov.querySelector('#akm-m-cancel').onclick = () => ov.remove();
            ov.querySelector('#akm-m-confirm').onclick = () => { ov.remove(); onConfirm(); };
        }

        // ===== TOAST =====
        function showToast(type, title, desc) {
            const t = document.createElement('div');
            t.className = 'akm-toast ' + type;
            const icon = type === 'win' ? 'fa-solid fa-bolt' : (type === 'loss' ? 'fa-solid fa-heart-crack' : 'fa-solid fa-shield-halved');
            t.innerHTML = `<div class="akm-toast-icon"><i class="${icon}"></i></div><div class="akm-toast-content"><div class="akm-toast-header"><div class="akm-toast-title">${title}</div><div class="akm-toast-time">now</div></div><div class="akm-toast-desc">${desc}</div></div>`;
            document.body.appendChild(t);
            setTimeout(() => { if (t) t.remove(); }, 3500);
        }

        // ===== BOT START/STOP =====
        const botBtnUI = document.getElementById('akm-bot-btn');
        botBtnUI.onclick = () => {
            if (!isBotRunning) {
                const startBot = () => {
                    applySafety();              // FIX: always use latest SL/TP inputs
                    stats.profit = 0;           // FIX: fresh session P/L
                    updateStatsUI();
                    isBotRunning = true;
                    activeBetPending = false;
                    botStartedAt = Date.now();
                    sessionWarned = false;
                    botBtnUI.innerText = "🛑 STOP";
                    botBtnUI.classList.add("running");
                    document.getElementById('akm-status-txt').innerText = 'KI: CHARGED ⚡';
                    if (currentPredictionObj && !activeBetPending) executeAutoBetSequence();
                };
                if (safety.confirmBeforeStart) {
                    applySafety();
                    showModal(
                        'START BOT?',
                        `You are about to start <b>auto-betting</b>.<br><br>Stop Loss: <b>₹${safety.stopLossAmount}</b><br>Take Profit: <b>₹${safety.takeProfitAmount}</b><br><br>Please ensure you are using funds you can afford to lose.`,
                        'warn',
                        startBot
                    );
                } else {
                    startBot();
                }
            } else {
                isBotRunning = false;
                botStartedAt = 0;
                botBtnUI.innerText = "⚡ START";
                botBtnUI.classList.remove("running");
                document.getElementById('akm-status-txt').innerText = 'KI: DORMANT';
                const p = document.getElementById('akm-pred');
                p.innerHTML = 'WAITING...'; p.className = 'waiting';
            }
        };

        // ===== AUTO STOP HELPER =====
        function autoStopBot(reason) {
            if (!isBotRunning) return;
            isBotRunning = false;
            botStartedAt = 0;
            botBtnUI.innerText = "⚡ START";
            botBtnUI.classList.remove("running");
            document.getElementById('akm-status-txt').innerText = 'KI: DORMANT';
            document.getElementById('akm-pred').className = 'waiting';
            document.getElementById('akm-pred').innerHTML = 'WAITING...';
            showToast('info', reason.title, reason.desc);
        }

        // ===== WIN/LOSS =====
        function checkWinLoss(lastIssueData) {
            const actualNum = parseInt(lastIssueData.number);
            const actualSize = lastIssueData.size;
            const isWin = (currentPredictionObj.size === actualSize);

            stats.total++;
            const amt = betLevelsArray[currentLevel] || betLevelsArray[0];
            let totalProfitThisRound = 0;

            if (isWin) {
                stats.wins++;
                totalProfitThisRound += (amt * 0.98);
                currentLevel = 0;
            } else {
                stats.losses++;
                totalProfitThisRound -= amt;
                currentLevel++;
                if (currentLevel >= maxLevelsAllowed) currentLevel = 0;
            }
            stats.profit += totalProfitThisRound;

            if (totalProfitThisRound > 0) {
                stats.currentStreak = stats.currentStreak > 0 ? stats.currentStreak + 1 : 1;
                if (stats.currentStreak > stats.bestWinStreak) stats.bestWinStreak = stats.currentStreak;
                showToast('win', '⚡ POWER UP!', `Won: +₹${totalProfitThisRound.toFixed(2)}`);
            } else {
                stats.currentStreak = stats.currentStreak < 0 ? stats.currentStreak - 1 : -1;
                if (Math.abs(stats.currentStreak) > stats.worstLossStreak) stats.worstLossStreak = Math.abs(stats.currentStreak);
                showToast('loss', '💀 DEFEATED', `Lost: -₹${Math.abs(totalProfitThisRound).toFixed(2)}`);
            }

            const logFound = predictionLogs.find(l => l.period === activeBetPending);
            if (logFound) {
                logFound.number = actualNum;
                logFound.result = actualSize;
                logFound.status = totalProfitThisRound > 0 ? 'WIN' : 'LOSS';
            }
            activeBetPending = false;
            updateStatsUI();
            renderHistoryPageUI();

            // FIX: SL/TP check after every result
            const hit = guardHit(0);
            if (hit) { autoStopBot(hit); return; }
        }

        function updateStatsUI() {
            document.getElementById('st-tot').innerText = stats.total;
            document.getElementById('st-win').innerText = stats.wins;
            document.getElementById('st-los').innerText = stats.losses;
            const p = document.getElementById('st-pro');
            p.innerText = (stats.profit >= 0 ? "+₹" : "-₹") + Math.abs(stats.profit).toFixed(2);
            p.className = stats.profit >= 0 ? "akm-info-val green" : "akm-info-val red";
        }

        function renderHistoryPageUI() {
            const accRate = stats.total > 0 ? Math.round((stats.wins / stats.total) * 100) : 0;
            document.getElementById('hist-acc-val').innerText = `${accRate}%`;
            const prog = document.getElementById('akm-svg-progress');
            if (prog) prog.style.strokeDashoffset = 283 - (283 * (accRate / 100));

            document.getElementById('hist-stat-win').innerText = stats.wins;
            document.getElementById('hist-stat-loss').innerText = stats.losses;
            document.getElementById('hist-stat-rounds').innerText = stats.total;
            const streakEl = document.getElementById('hist-stat-streak');
            streakEl.innerText = stats.currentStreak > 0 ? `+${stats.currentStreak}` : `${stats.currentStreak}`;
            streakEl.style.color = stats.currentStreak >= 0 ? '#22c55e' : '#ef4444';

            document.getElementById('hist-best-win').innerText = stats.bestWinStreak;
            document.getElementById('hist-worst-loss').innerText = stats.worstLossStreak;
            const netEl = document.getElementById('hist-net-amount');
            netEl.innerText = (stats.profit >= 0 ? "+₹" : "-₹") + Math.abs(stats.profit).toFixed(2);
            netEl.style.color = stats.profit >= 0 ? "#22c55e" : "#ef4444";
            document.getElementById('hist-badge-total').innerText = predictionLogs.length;

            const flowBox = document.getElementById('akm-flow-bar-container');
            flowBox.innerHTML = '';
            predictionLogs.slice(0, 20).reverse().forEach(log => {
                const bar = document.createElement('div');
                bar.className = 'akm-flow-bar ' + (log.status === 'WIN' ? 'flow-win' : (log.status === 'LOSS' ? 'flow-loss' : 'flow-pending'));
                flowBox.appendChild(bar);
            });

            const logBox = document.getElementById('akm-prediction-log-list');
            logBox.innerHTML = '';
            predictionLogs.forEach(log => {
                const card = document.createElement('div');
                card.className = `akm-log-card ${log.status === 'WIN' ? 'win' : (log.status === 'LOSS' ? 'loss' : '')}`;
                const numHtml = (typeof log.number === 'number')
                    ? getBall(log.number, 34)
                    : `<div class="akm-log-ball pending" style="width:34px;height:34px;">?</div>`;
                card.innerHTML = `
                    <div class="akm-log-left">
                        ${numHtml}
                        <div class="akm-log-info">
                            <div class="akm-log-period"># <b>${log.period}</b></div>
                            <span class="akm-log-pred ${log.pred.toLowerCase()}">${log.pred}</span>
                        </div>
                    </div>
                    <div class="akm-log-right">
                        <span class="akm-log-tag tag-${log.status.toLowerCase()}">${log.status}</span>
                        <span class="akm-log-time">${log.time}</span>
                    </div>`;
                logBox.appendChild(card);
            });
        }

        // ===== AUTO BET CLICKER =====
        async function forceBet(targetVal, amount) {
            if (!isBotRunning) return;

            const dispatchForceClick = (node) => {
                if (!node) return;
                ['pointerdown','mousedown','touchstart','pointerup','mouseup','touchend','click'].forEach(evt => {
                    node.dispatchEvent(new MouseEvent(evt, { bubbles: true, cancelable: true, view: window }));
                });
            };
            const allElements = Array.from(document.querySelectorAll('button, div, span'));
            const targetBtn = allElements.find(el => el.children.length === 0 && el.innerText && el.innerText.trim().toUpperCase() === targetVal.toUpperCase()) ||
                              allElements.find(el => el.innerText && el.innerText.trim().toUpperCase() === targetVal.toUpperCase());

            if (targetBtn) {
                dispatchForceClick(targetBtn);
                await new Promise(r => setTimeout(r, 600));
                if (!isBotRunning) return;   // FIX: stopped meanwhile

                const inputField = document.querySelector('input[type="number"], input[type="tel"], input[type="text"], .van-field__control');
                if (inputField) {
                    try {
                        const nativeSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
                        nativeSetter.call(inputField, amount);
                        inputField.dispatchEvent(new Event('input', { bubbles: true }));
                        inputField.dispatchEvent(new Event('change', { bubbles: true }));
                    } catch(err) {
                        inputField.value = amount;
                        inputField.dispatchEvent(new Event('input', { bubbles: true }));
                    }
                }

                await new Promise(r => setTimeout(r, 600));
                if (!isBotRunning) return;   // FIX: last check before final confirm click

                const confirmNodes = Array.from(document.querySelectorAll('button, div, span')).filter(el => el.innerText && el.innerText.toLowerCase().includes('total amount'));
                if (confirmNodes.length > 0) {
                    const span = confirmNodes[confirmNodes.length - 1];
                    dispatchForceClick(span);
                    if (span.parentElement) {
                        dispatchForceClick(span.parentElement);
                        if (span.parentElement.parentElement) dispatchForceClick(span.parentElement.parentElement);
                    }
                }
                await new Promise(r => setTimeout(r, 800));
            }
        }

        async function executeAutoBetSequence() {
            if (!isBotRunning) return;
            if (!currentPredictionObj || activeBetPending) return;

            // FIX: compute next bet first, then check SL/TP (incl. next bet) + balance
            betLevelsArray = generateBetLevels();
            const amt = betLevelsArray[currentLevel] || betLevelsArray[0];

            const hit = guardHit(amt);
            if (hit) { autoStopBot(hit); return; }
            if (currentBalance > 0 && amt > currentBalance) {
                autoStopBot({ title: '💸 LOW BALANCE', desc: `Bet ₹${amt} > balance ₹${currentBalance.toFixed(2)}` });
                return;
            }

            activeBetPending = lastPeriodFetched;

            if (safety.betPercentWarn && currentBalance > 0 && amt > currentBalance * 0.25) {
                showToast('info', '⚠️ HIGH BET', `Bet ₹${amt} is ${Math.round((amt/currentBalance)*100)}% of balance`);
            }

            const logTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            predictionLogs.unshift({
                period: lastPeriodFetched, pred: currentPredictionObj.size,
                number: '?', result: 'WAITING', status: 'PENDING', time: logTime
            });
            renderHistoryPageUI();

            await forceBet(currentPredictionObj.size, amt);
        }

        // ===== INIT =====
        startLiveClock();
        renderHistoryPageUI();
        updateLevelsPreview();
        updateSafetyBadge();
    }
})();
