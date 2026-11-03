javascript:(function(){
    initGOKUApp();

    function initGOKUApp(){
        if(document.getElementById('goku-app-root')) return;

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

        const root = document.createElement('div'); root.id='goku-app-root';

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

        // ===== CSS — ORANGE + WHITE THEME =====
        const style = document.createElement('style');
        style.innerHTML = `
#goku-app-root{font-family:'Inter',sans-serif;user-select:none;color:#1f2937}
#goku-app-root *{box-sizing:border-box;-webkit-tap-highlight-color:transparent}

/* ===== TRIGGER ===== */
#goku-trigger{position:fixed !important;bottom:85px;right:22px;width:66px;height:66px;background:#ff6b00;border-radius:50%;display:none;align-items:center;justify-content:center;cursor:pointer;z-index:2147483647;border:3px solid #fff;overflow:hidden;transition:transform 0.2s;box-shadow:0 6px 20px rgba(255,107,0,0.4)}
#goku-trigger:hover{transform:scale(1.05)}
#goku-trigger::after{content:'7';position:absolute;bottom:2px;right:2px;width:18px;height:18px;background:#cc0000;color:#fff;border-radius:50%;font-size:10px;font-weight:900;display:flex;align-items:center;justify-content:center;border:2px solid #fff}

/* ===== PANEL ===== */
#goku-panel{position:fixed !important;top:50% !important;left:50% !important;transform:translate(-50%,-50%) !important;width:388px;max-height:94vh;background:#ffffff;border-radius:24px;display:none;flex-direction:column;z-index:2147483646;box-shadow:0 20px 60px rgba(0,0,0,0.25),0 0 0 1px rgba(255,140,0,0.2);overflow:hidden;color:#1f2937}

/* ===== HEADER ===== */
.goku-header{display:flex;justify-content:space-between;align-items:center;padding:14px 16px;background:linear-gradient(135deg,#ff8c00,#ff6b00);cursor:move;position:relative;z-index:2}
.goku-header-left{display:flex;align-items:center;gap:11px;flex:1}
.goku-header-logo{width:40px;height:40px;flex-shrink:0;border-radius:50%;overflow:hidden;background:#fff;border:2px solid #fff}
.goku-header-info{display:flex;flex-direction:column;flex:1}
.goku-header-title{font-family:'Orbitron',sans-serif;font-size:17px;font-weight:900;color:#ffffff;letter-spacing:2px;line-height:1}
.goku-header-sub{font-size:8px;font-weight:800;color:#ffffff;letter-spacing:2px;text-transform:uppercase;margin-top:3px;opacity:0.9}
.goku-header-controls{display:flex;align-items:center;gap:6px}
.goku-status-pill{display:flex;align-items:center;gap:5px;padding:5px 10px;background:rgba(255,255,255,0.25);border:1px solid rgba(255,255,255,0.4);border-radius:999px;font-size:9px;font-weight:900;color:#ffffff;letter-spacing:0.8px;text-transform:uppercase}
.goku-status-pill .dot{width:6px;height:6px;border-radius:50%;background:#ffffff}
.goku-close-btn{background:rgba(255,255,255,0.2);color:#ffffff;width:30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:16px;cursor:pointer;transition:0.2s;border:1px solid rgba(255,255,255,0.4)}
.goku-close-btn:hover{background:#ffffff;color:#ff6b00}

/* ===== BODY ===== */
.goku-body{flex:1;overflow-y:auto;overflow-x:hidden;scrollbar-width:none;position:relative;z-index:2;background:#ffffff}
.goku-body::-webkit-scrollbar{display:none}
.goku-tab{display:none;flex-direction:column;gap:12px;padding:15px}
.goku-tab.active{display:flex}

/* ===== HERO ===== */
.goku-hero{position:relative;background:#fff7ed;border:2px solid #ffd4a8;border-radius:20px;padding:16px;overflow:hidden}
.goku-hero-top{display:flex;justify-content:space-between;align-items:center;margin-bottom:12px}
.goku-hero-period{display:flex;flex-direction:column;gap:2px}
.goku-hero-period-lbl{font-size:8px;font-weight:900;color:#9ca3af;letter-spacing:1.5px;text-transform:uppercase}
.goku-hero-period-val{font-family:'JetBrains Mono',monospace;font-size:13px;font-weight:900;color:#ff6b00;letter-spacing:1px}
.goku-hero-timer{display:flex;align-items:center;gap:6px;padding:6px 12px;background:#ff6b00;border-radius:999px;font-family:'Orbitron',sans-serif;font-size:15px;font-weight:900;color:#ffffff;letter-spacing:1px}
.goku-hero-timer i{font-size:11px;color:#ffffff}
.goku-pred-display{text-align:center;padding:18px 0}
#goku-pred{font-family:'Orbitron',sans-serif;font-size:54px;font-weight:900;letter-spacing:6px;line-height:1;display:inline-block}
#goku-pred.big{color:#ef4444}
#goku-pred.small{color:#22c55e}
#goku-pred.waiting{color:#9ca3af;font-size:22px;letter-spacing:4px}
.goku-ki-wrap{position:relative;margin-bottom:10px}
.goku-ki-head{display:flex;justify-content:space-between;font-size:9px;font-weight:900;color:#ff6b00;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:5px}
.goku-ki-bar{height:12px;background:#ffe4c4;border:1px solid #ffd4a8;border-radius:999px;overflow:hidden;position:relative}
.goku-ki-fill{height:100%;width:0%;background:linear-gradient(90deg,#ff8c00,#ff6b00);border-radius:999px;transition:width 0.5s}

/* ===== QUICK STRIP ===== */
.goku-quick-strip{display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px}
.goku-quick-card{background:#fff7ed;border:1px solid #ffd4a8;border-radius:14px;padding:10px 8px;text-align:center}
.goku-quick-card.win{color:#16a34a;background:#f0fdf4;border-color:#bbf7d0}
.goku-quick-card.loss{color:#ef4444;background:#fef2f2;border-color:#fecaca}
.goku-quick-card.total{color:#ff6b00;background:#fff7ed;border-color:#ffd4a8}
.goku-quick-lbl{font-size:8px;font-weight:900;color:#6b7280;letter-spacing:1px;text-transform:uppercase;margin-bottom:4px}
.goku-quick-val{font-family:'Orbitron',sans-serif;font-size:18px;font-weight:900;line-height:1;color:currentColor}

/* ===== INFO DUO ===== */
.goku-info-duo{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.goku-info-card{background:#fff7ed;border:1px solid #ffd4a8;border-radius:14px;padding:11px 12px;display:flex;align-items:center;gap:9px}
.goku-info-icon{width:32px;height:32px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0}
.goku-info-icon.money{background:#ffedd5;color:#ff6b00}
.goku-info-icon.profit{background:#dcfce7;color:#16a34a}
.goku-info-text{display:flex;flex-direction:column;gap:1px;flex:1;min-width:0}
.goku-info-lbl{font-size:8px;font-weight:900;color:#6b7280;letter-spacing:0.6px;text-transform:uppercase}
.goku-info-val{font-family:'Orbitron',sans-serif;font-size:14px;font-weight:900;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.goku-info-val.gold{color:#ff6b00}
.goku-info-val.green{color:#16a34a}
.goku-info-val.red{color:#ef4444}

/* ===== MODES ===== */
.goku-modes{display:grid;grid-template-columns:repeat(4,1fr);gap:6px;background:#fff7ed;padding:5px;border-radius:12px;border:1px solid #ffd4a8}
.goku-mode-btn{padding:10px 6px;border:none;background:transparent;color:#9ca3af;font-family:'JetBrains Mono',monospace;font-size:11px;font-weight:900;border-radius:8px;cursor:pointer;transition:0.2s;letter-spacing:0.5px}
.goku-mode-btn:hover{color:#ff6b00;background:rgba(255,140,0,0.08)}
.goku-mode-btn.active{background:#ff6b00;color:#ffffff}

/* ===== START BUTTON ===== */
.goku-start-btn{width:100%;padding:17px;background:#ff6b00;color:#ffffff;border:none;border-radius:16px;font-family:'Orbitron',sans-serif;font-size:18px;font-weight:900;letter-spacing:3px;cursor:pointer;transition:0.2s;text-transform:uppercase;box-shadow:0 4px 14px rgba(255,107,0,0.3)}
.goku-start-btn:hover{background:#ff8c00;box-shadow:0 6px 20px rgba(255,107,0,0.4)}
.goku-start-btn:active{transform:scale(0.98)}
.goku-start-btn.running{background:#ef4444;box-shadow:0 4px 14px rgba(239,68,68,0.3)}

/* ===== HISTORY CARD ===== */
.goku-hist-card{background:#ffffff;border:1px solid #ffd4a8;border-radius:18px;padding:16px}
.goku-acc-ring-wrap{display:flex;align-items:center;gap:18px;justify-content:center;padding:8px 0}
.goku-acc-ring{position:relative;width:130px;height:130px;flex-shrink:0}
.goku-acc-ring svg{width:100%;height:100%;transform:rotate(-90deg)}
.goku-acc-ring circle{fill:none;stroke-linecap:round}
.goku-acc-ring .bg{stroke:#ffe4c4;stroke-width:10}
.goku-acc-ring .fill{stroke:url(#gokuAccGrad);stroke-width:10;stroke-dasharray:283;stroke-dashoffset:283;transition:stroke-dashoffset 0.6s}
.goku-acc-center{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center}
.goku-acc-big{font-family:'Orbitron',sans-serif;font-size:26px;font-weight:900;color:#ff6b00;line-height:1}
.goku-acc-lbl{font-size:8px;font-weight:900;color:#9ca3af;letter-spacing:1.5px;text-transform:uppercase;margin-top:3px}
.goku-acc-stats{display:flex;flex-direction:column;gap:8px;flex:1}
.goku-acc-stat{display:flex;justify-content:space-between;align-items:center;padding:6px 10px;background:#fff7ed;border-radius:8px;border-left:3px solid currentColor}
.goku-acc-stat.win{color:#16a34a}
.goku-acc-stat.loss{color:#ef4444}
.goku-acc-stat.streak{color:#ff6b00}
.goku-acc-stat-lbl{font-size:9px;font-weight:800;color:#6b7280;text-transform:uppercase;letter-spacing:0.5px}
.goku-acc-stat-val{font-family:'Orbitron',sans-serif;font-size:13px;font-weight:900;color:currentColor}

/* ===== FLOW BARS ===== */
.goku-flow-bars{display:flex;align-items:flex-end;gap:5px;height:46px;padding:4px 0;overflow-x:auto;scrollbar-width:none;margin-top:8px}
.goku-flow-bars::-webkit-scrollbar{display:none}
.goku-flow-bar{width:28px;border-radius:6px;flex-shrink:0;transition:all 0.2s}
.flow-win{background:#22c55e;height:40px}
.flow-loss{background:#ef4444;height:22px}
.flow-pending{background:#d1d5db;height:14px}

/* ===== LOG LIST ===== */
.goku-log-list{display:flex;flex-direction:column;gap:7px}
.goku-log-card{background:#ffffff;border-radius:12px;padding:10px 12px;display:flex;align-items:center;justify-content:space-between;border:1px solid #e5e7eb;transition:0.2s}
.goku-log-card:hover{border-color:#ffd4a8}
.goku-log-card.win{border-color:#bbf7d0;background:#f0fdf4}
.goku-log-card.loss{border-color:#fecaca;background:#fef2f2}
.goku-log-left{display:flex;align-items:center;gap:10px;flex:1;min-width:0}
.goku-log-ball{width:34px;height:34px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:'Orbitron',sans-serif;font-weight:900;font-size:15px;color:#fff;flex-shrink:0}
.goku-log-ball.violet{background:#a855f7}
.goku-log-ball.red{background:#ef4444}
.goku-log-ball.green{background:#22c55e}
.goku-log-ball.pending{background:#e5e7eb;color:#6b7280}
.goku-log-info{display:flex;flex-direction:column;gap:2px;min-width:0;flex:1}
.goku-log-period{font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:800;color:#6b7280;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.goku-log-period b{color:#ff6b00;font-weight:900}
.goku-log-pred{font-size:9px;font-weight:900;padding:2px 7px;border-radius:5px;display:inline-block;width:fit-content;letter-spacing:0.5px}
.goku-log-pred.big{background:#fee2e2;color:#dc2626}
.goku-log-pred.small{background:#dcfce7;color:#16a34a}
.goku-log-right{display:flex;flex-direction:column;align-items:flex-end;gap:3px;flex-shrink:0}
.goku-log-tag{font-size:9px;font-weight:900;padding:3px 8px;border-radius:7px;letter-spacing:0.5px;text-transform:uppercase}
.tag-win{background:#22c55e;color:#fff}
.tag-loss{background:#ef4444;color:#fff}
.tag-pending{background:#e5e7eb;color:#6b7280}
.goku-log-time{font-size:9px;font-weight:700;color:#9ca3af;font-family:'JetBrains Mono',monospace}

/* ===== SECTION TITLE ===== */
.goku-sec-title{font-family:'Orbitron',sans-serif;font-size:12px;font-weight:900;color:#ff6b00;letter-spacing:2px;text-transform:uppercase;display:flex;align-items:center;gap:8px;margin:4px 0}
.goku-sec-title::before{content:'';width:3px;height:14px;background:#ff6b00;border-radius:3px}
.goku-sec-title .badge{margin-left:auto;background:#fff7ed;color:#ff6b00;padding:2px 9px;border-radius:999px;font-size:9px;border:1px solid #ffd4a8}

/* ===== CARDS ===== */
.goku-card{background:#ffffff;border:1px solid #ffd4a8;border-radius:16px;padding:14px}
.goku-card.safety{background:#fff7ed;border-color:#ffd4a8}
.goku-card-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;padding-bottom:10px;border-bottom:1px solid #ffd4a8}
.goku-card.safety .goku-card-header{border-color:#ffd4a8}
.goku-card-title{font-family:'Orbitron',sans-serif;font-size:11px;font-weight:900;color:#ff6b00;letter-spacing:1.5px;text-transform:uppercase;display:flex;align-items:center;gap:6px}
.goku-card.safety .goku-card-title{color:#ff6b00}
.goku-card-title i{font-size:12px}

/* ===== TOGGLES ===== */
.goku-toggle-row{display:flex;align-items:center;justify-content:space-between;padding:8px 0;border-bottom:1px dashed #ffd4a8}
.goku-toggle-row:last-child{border-bottom:none}
.goku-toggle-lbl{font-size:11px;font-weight:700;color:#374151;display:flex;flex-direction:column;gap:2px}
.goku-toggle-lbl small{font-size:8px;color:#9ca3af;font-weight:600;letter-spacing:0.3px}
.goku-switch{position:relative;width:42px;height:24px;flex-shrink:0}
.goku-switch input{opacity:0;width:0;height:0}
.goku-switch-slider{position:absolute;cursor:pointer;inset:0;background:#d1d5db;border-radius:999px;transition:0.3s}
.goku-switch-slider::before{content:'';position:absolute;width:18px;height:18px;left:2px;bottom:2px;background:#ffffff;border-radius:50%;transition:0.3s;box-shadow:0 1px 3px rgba(0,0,0,0.2)}
.goku-switch input:checked + .goku-switch-slider{background:#ff6b00}
.goku-switch input:checked + .goku-switch-slider::before{transform:translateX(18px)}

/* ===== INPUTS ===== */
.goku-input-row{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px}
.goku-input-group{display:flex;flex-direction:column;gap:5px}
.goku-input-group label{font-size:9px;font-weight:800;color:#6b7280;letter-spacing:0.5px;text-transform:uppercase}
.goku-input-group label i{color:#ff6b00;margin-right:3px}
.goku-input-group input{width:100%;padding:11px 12px;background:#ffffff;border:1px solid #ffd4a8;border-radius:10px;color:#1f2937;font-family:'Orbitron',sans-serif;font-size:13px;font-weight:900;outline:none;transition:0.2s}
.goku-input-group input:focus{border-color:#ff6b00;box-shadow:0 0 0 3px rgba(255,107,0,0.15)}

/* ===== PREVIEW ===== */
.goku-preview{padding:10px 12px;background:#fff7ed;border:1px dashed #ffd4a8;border-radius:10px;font-size:10px;color:#ff6b00;line-height:1.6;margin-bottom:10px;font-weight:700}
.goku-preview b{color:#ef4444;font-weight:900;font-size:12px}

/* ===== APPLY BUTTON ===== */
.goku-apply-btn{width:100%;padding:13px;background:#ff6b00;color:#ffffff;border:none;border-radius:12px;font-family:'Orbitron',sans-serif;font-size:13px;font-weight:900;letter-spacing:1.5px;cursor:pointer;text-transform:uppercase;transition:0.2s}
.goku-apply-btn:hover{background:#ff8c00}
.goku-apply-btn:active{transform:scale(0.98)}
.goku-apply-btn.green{background:#ff6b00}
.goku-apply-btn.green:hover{background:#ff8c00}

/* ===== DISCLAIMER ===== */
.goku-disc-hero{background:#fef2f2;border:1px solid #fecaca;border-radius:18px;padding:20px 16px;text-align:center}
.goku-disc-icon{font-size:42px;color:#ef4444;margin-bottom:8px}
.goku-disc-title{font-family:'Orbitron',sans-serif;font-size:17px;font-weight:900;color:#dc2626;letter-spacing:3px}
.goku-disc-sub{font-size:10px;font-weight:700;color:#6b7280;margin-top:5px;letter-spacing:0.5px}
.goku-disc-item{display:flex;gap:10px;padding:11px 0;border-bottom:1px dashed #fecaca;align-items:flex-start}
.goku-disc-item:last-child{border-bottom:none}
.goku-disc-item i{color:#ef4444;font-size:14px;margin-top:1px;flex-shrink:0;width:20px}
.goku-disc-item-text{font-size:11px;line-height:1.6;color:#4b5563;font-weight:500}
.goku-disc-item-text b{color:#ff6b00;font-weight:800}

/* ===== NAV ===== */
.goku-nav{display:flex;background:#ffffff;border-top:1px solid #ffd4a8;padding:6px;position:relative;z-index:2;border-radius:0 0 24px 24px;gap:2px}
.goku-nav-item{flex:1;display:flex;flex-direction:column;align-items:center;gap:3px;padding:9px 4px;border-radius:10px;cursor:pointer;transition:0.2s;position:relative}
.goku-nav-item svg{width:17px;height:17px;fill:#9ca3af;transition:0.2s}
.goku-nav-item span{font-size:9px;font-weight:900;color:#9ca3af;letter-spacing:0.3px;text-transform:uppercase;transition:0.2s}
.goku-nav-item:hover svg{fill:#ff6b00}
.goku-nav-item:hover span{color:#ff6b00}
.goku-nav-item.active{background:#fff7ed}
.goku-nav-item.active svg{fill:#ff6b00}
.goku-nav-item.active span{color:#ff6b00}

/* ===== TOAST (smooth pop in/out) ===== */
@keyframes goku-toast-in{0%{opacity:0;transform:translateX(-50%) translateY(-30px) scale(0.9)}60%{opacity:1;transform:translateX(-50%) translateY(4px) scale(1.02)}100%{opacity:1;transform:translateX(-50%) translateY(0) scale(1)}}
@keyframes goku-toast-out{0%{opacity:1;transform:translateX(-50%) translateY(0) scale(1)}100%{opacity:0;transform:translateX(-50%) translateY(-30px) scale(0.9)}}
.goku-toast{position:fixed;left:50%;top:25px;width:92%;max-width:380px;background:#ffffff;border:2px solid #ffd4a8;padding:14px 16px;border-radius:18px;z-index:2147483651;box-shadow:0 15px 40px rgba(0,0,0,0.15);pointer-events:none;display:flex;align-items:center;gap:13px;color:#1f2937;animation:goku-toast-in 0.4s cubic-bezier(0.34,1.56,0.64,1) forwards,goku-toast-out 0.35s cubic-bezier(0.6,0,0.4,1) 3.15s forwards}
.goku-toast.win{border-color:#bbf7d0}
.goku-toast.loss{border-color:#fecaca}
.goku-toast.info{border-color:#ffd4a8}
.goku-toast-icon{width:42px;height:42px;border-radius:12px;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:20px;color:#ffffff}
.goku-toast.win .goku-toast-icon{background:#22c55e}
.goku-toast.loss .goku-toast-icon{background:#ef4444}
.goku-toast.info .goku-toast-icon{background:#ff6b00}
.goku-toast-content{flex:1}
.goku-toast-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:2px}
.goku-toast-title{font-family:'Orbitron',sans-serif;font-size:13px;font-weight:900;letter-spacing:1px;color:#1f2937}
.goku-toast-time{color:#9ca3af;font-size:11px;font-weight:500}
.goku-toast-desc{color:#4b5563;font-size:12px;font-weight:600}

/* ===== MODAL (smooth pop in/out) ===== */
@keyframes goku-overlay-in{0%{opacity:0}100%{opacity:1}}
@keyframes goku-overlay-out{0%{opacity:1}100%{opacity:0}}
@keyframes goku-modal-in{0%{opacity:0;transform:scale(0.9) translateY(10px)}100%{opacity:1;transform:scale(1) translateY(0)}}
@keyframes goku-modal-out{0%{opacity:1;transform:scale(1) translateY(0)}100%{opacity:0;transform:scale(0.95) translateY(10px)}}
.goku-modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,0.5);backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);z-index:2147483652;display:flex;align-items:center;justify-content:center;animation:goku-overlay-in 0.2s ease forwards}
.goku-modal-overlay.closing{animation:goku-overlay-out 0.22s ease forwards}
.goku-modal{background:#ffffff;border:2px solid #ffd4a8;border-radius:20px;padding:24px 20px;max-width:320px;width:90%;text-align:center;box-shadow:0 20px 60px rgba(0,0,0,0.25);animation:goku-modal-in 0.35s cubic-bezier(0.34,1.56,0.64,1) forwards}
.goku-modal-overlay.closing .goku-modal{animation:goku-modal-out 0.22s ease forwards}
.goku-modal-icon{font-size:44px;margin-bottom:10px}
.goku-modal-icon.warn{color:#ff6b00}
.goku-modal-icon.danger{color:#ef4444}
.goku-modal-title{font-family:'Orbitron',sans-serif;font-size:16px;font-weight:900;color:#ff6b00;letter-spacing:2px;margin-bottom:10px;text-transform:uppercase}
.goku-modal-text{font-size:12px;color:#4b5563;line-height:1.6;margin-bottom:20px}
.goku-modal-text b{color:#ff6b00;font-weight:900}
.goku-modal-btns{display:flex;gap:10px}
.goku-modal-btn{flex:1;padding:12px;border-radius:11px;font-family:'Orbitron',sans-serif;font-size:12px;font-weight:900;letter-spacing:1.5px;cursor:pointer;transition:0.2s;text-transform:uppercase;border:none}
.goku-modal-btn.cancel{background:#f3f4f6;color:#6b7280;border:1px solid #e5e7eb}
.goku-modal-btn.cancel:hover{background:#e5e7eb}
.goku-modal-btn.confirm{background:#ff6b00;color:#ffffff}
.goku-modal-btn.confirm:hover{background:#ff8c00}
        `;
        document.head.appendChild(style);

        // ===== HTML =====
        root.innerHTML = `
            <div id="goku-trigger">${GOKU_LOGO}</div>

            <div id="goku-panel">
                <div class="goku-header" id="goku-move">
                    <div class="goku-header-left">
                        <div class="goku-header-logo">${GOKU_LOGO}</div>
                        <div class="goku-header-info">
                            <div class="goku-header-title">GOKU AI</div>
                            <div class="goku-header-sub">7★ POWER • V2.0</div>
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
                                <div class="goku-hero-period">
                                    <span class="goku-hero-period-lbl">⚡ ACTIVE PERIOD</span>
                                    <span class="goku-hero-period-val" id="goku-period">...SYNC</span>
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
                                    <span>⚡ KI POWER</span>
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
                                <div class="goku-info-text">
                                    <span class="goku-info-lbl">BALANCE</span>
                                    <span class="goku-info-val gold" id="goku-bal-val">₹0.00</span>
                                </div>
                            </div>
                            <div class="goku-info-card">
                                <div class="goku-info-icon profit"><i class="fa-solid fa-chart-line"></i></div>
                                <div class="goku-info-text">
                                    <span class="goku-info-lbl">PROFIT</span>
                                    <span class="goku-info-val green" id="st-pro">₹0.00</span>
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

                        <div style="display:flex; justify-content:space-between; align-items:center; padding: 4px 2px;">
                            <div style="display:flex; align-items:center; gap:6px; font-size:9px; font-weight:900; color:#6b7280; letter-spacing:0.5px;">
                                <i class="fa-solid fa-circle" style="color:#ff6b00; font-size:6px;"></i>
                                <span id="goku-status-txt">KI: DORMANT</span>
                            </div>
                            <div style="display:flex; gap:5px;" id="goku-history-balls"></div>
                        </div>
                    </div>

                    <div class="goku-tab" id="tab-history">
                        <div class="goku-hist-card">
                            <div class="goku-acc-ring-wrap">
                                <div class="goku-acc-ring">
                                    <svg viewBox="0 0 100 100">
                                        <defs>
                                            <linearGradient id="gokuAccGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stop-color="#ff8c00"/>
                                                <stop offset="50%" stop-color="#ffa500"/>
                                                <stop offset="100%" stop-color="#ff6b00"/>
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
                                    <div class="goku-acc-stat win"><span class="goku-acc-stat-lbl">✅ Wins</span><span class="goku-acc-stat-val" id="hist-stat-win">0</span></div>
                                    <div class="goku-acc-stat loss"><span class="goku-acc-stat-lbl">❌ Losses</span><span class="goku-acc-stat-val" id="hist-stat-loss">0</span></div>
                                    <div class="goku-acc-stat streak"><span class="goku-acc-stat-lbl">🔥 Streak</span><span class="goku-acc-stat-val" id="hist-stat-streak">0</span></div>
                                </div>
                            </div>
                        </div>

                        <div class="goku-card">
                            <div class="goku-card-header">
                                <div class="goku-card-title"><i class="fa-solid fa-wave-square"></i> RESULT FLOW</div>
                                <span style="font-size:9px; color:#6b7280; font-weight:800;">Best: <span id="hist-best-win" style="color:#16a34a;">0</span> • Worst: <span id="hist-worst-loss" style="color:#ef4444;">0</span></span>
                            </div>
                            <div class="goku-flow-bars" id="goku-flow-bar-container"></div>
                            <div style="display:flex; justify-content:space-between; font-size:10px; font-weight:800; color:#6b7280; margin-top:6px; padding-top:6px; border-top: 1px dashed #ffd4a8;">
                                <span>Rounds: <b id="hist-stat-rounds" style="color:#ff6b00;">0</b></span>
                                <span>Net: <b id="hist-net-amount" style="color:#16a34a;">₹0.00</b></span>
                            </div>
                        </div>

                        <div class="goku-sec-title">
                            📜 PREDICTION LOG
                            <span class="badge" id="hist-badge-total">0</span>
                        </div>
                        <div class="goku-log-list" id="goku-prediction-log-list"></div>
                    </div>

                    <div class="goku-tab" id="tab-risk">
                        <div class="goku-card safety">
                            <div class="goku-card-header">
                                <div class="goku-card-title"><i class="fa-solid fa-shield-halved"></i> SAFETY GUARDS</div>
                                <span style="font-size:8px; padding:3px 8px; background:#fff7ed; color:#ff6b00; border-radius:999px; font-weight:900; letter-spacing:0.5px;" id="goku-safety-badge">OFF</span>
                            </div>

                            <div class="goku-toggle-row">
                                <div class="goku-toggle-lbl">Confirm Before Start<small>Show warning before bot starts</small></div>
                                <label class="goku-switch"><input type="checkbox" id="sg-confirm-toggle" checked><span class="goku-switch-slider"></span></label>
                            </div>
                            <div class="goku-toggle-row">
                                <div class="goku-toggle-lbl">Bet % Warning<small>Warn if bet &gt; 25% of balance</small></div>
                                <label class="goku-switch"><input type="checkbox" id="sg-betwarn-toggle" checked><span class="goku-switch-slider"></span></label>
                            </div>
                            <div class="goku-toggle-row">
                                <div class="goku-toggle-lbl">Session Alert<small>Warn after 60 min of running</small></div>
                                <label class="goku-switch"><input type="checkbox" id="sg-session-toggle" checked><span class="goku-switch-slider"></span></label>
                            </div>

                            <div class="goku-input-row" style="margin-top:12px;">
                                <div class="goku-input-group">
                                    <label><i class="fa-solid fa-arrow-down"></i> Stop Loss (₹)</label>
                                    <input type="number" id="sg-stop-loss" value="500" min="0">
                                </div>
                                <div class="goku-input-group">
                                    <label><i class="fa-solid fa-arrow-up"></i> Take Profit (₹)</label>
                                    <input type="number" id="sg-take-profit" value="1000" min="0">
                                </div>
                            </div>

                            <button class="goku-apply-btn green" id="sg-apply-btn">🛡️ APPLY GUARDS</button>
                        </div>

                        <div class="goku-card">
                            <div class="goku-card-header">
                                <div class="goku-card-title"><i class="fa-solid fa-bolt"></i> SMART BETTING</div>
                                <label style="display:flex; align-items:center; gap:5px; cursor:pointer; font-size:9px; color:#ff6b00; font-weight:900; letter-spacing:0.5px;">
                                    <input type="checkbox" id="bm-autoscale-toggle" style="accent-color:#ff6b00; width:14px; height:14px;">
                                    AUTO
                                </label>
                            </div>

                            <div class="goku-input-row">
                                <div class="goku-input-group" id="box-base-bet">
                                    <label><i class="fa-solid fa-coins"></i> First Bet (₹)</label>
                                    <input type="number" id="bm-first-bet" value="10" min="1">
                                </div>
                                <div class="goku-input-group" id="box-maintain-lvl" style="display:none;">
                                    <label><i class="fa-solid fa-layer-group"></i> Auto Lvl</label>
                                    <input type="number" id="bm-auto-levels" value="5" min="1">
                                </div>
                                <div class="goku-input-group">
                                    <label><i class="fa-solid fa-xmark"></i> Multiplier X</label>
                                    <input type="number" id="bm-multiple-x" value="2" step="0.1" min="1">
                                </div>
                            </div>

                            <div class="goku-input-row" id="box-max-lvl-fixed">
                                <div class="goku-input-group">
                                    <label><i class="fa-solid fa-layer-group"></i> Max Levels</label>
                                    <input type="number" id="bm-max-levels" value="5" min="1" max="10">
                                </div>
                            </div>

                            <div class="goku-preview" id="goku-levels-preview">...</div>

                            <button class="goku-apply-btn" id="bm-apply-btn">⚡ SAVE BET CONFIG</button>
                        </div>
                    </div>

                    <div class="goku-tab" id="tab-disclaimer">
                        <div class="goku-disc-hero">
                            <div class="goku-disc-icon"><i class="fa-solid fa-triangle-exclamation"></i></div>
                            <div class="goku-disc-title">DISCLAIMER</div>
                            <div class="goku-disc-sub">PLEASE READ CAREFULLY BEFORE USE</div>
                        </div>

                        <div class="goku-card">
                            <div class="goku-card-title" style="margin-bottom:8px;"><i class="fa-solid fa-shield-virus"></i> RISK WARNINGS</div>
                            <div class="goku-disc-item"><i class="fa-solid fa-ban"></i><div class="goku-disc-item-text"><b>Gambling Risk:</b> All betting involves financial risk. You may lose money. Never bet more than you can afford to lose.</div></div>
                            <div class="goku-disc-item"><i class="fa-solid fa-scale-balanced"></i><div class="goku-disc-item-text"><b>No Guarantee:</b> Predictions are algorithmic estimates — not guaranteed wins. Past patterns do not ensure future results.</div></div>
                            <div class="goku-disc-item"><i class="fa-solid fa-user-shield"></i><div class="goku-disc-item-text"><b>Personal Responsibility:</b> You are solely responsible for all betting decisions and any financial outcomes.</div></div>
                            <div class="goku-disc-item"><i class="fa-solid fa-calendar-xmark"></i><div class="goku-disc-item-text"><b>Age Restriction:</b> Must be <b>18+ years old</b> to use this tool. Not intended for minors.</div></div>
                            <div class="goku-disc-item"><i class="fa-solid fa-gavel"></i><div class="goku-disc-item-text"><b>Legal Compliance:</b> Ensure online gambling is legal in your jurisdiction. Users must comply with local laws.</div></div>
                            <div class="goku-disc-item"><i class="fa-solid fa-code"></i><div class="goku-disc-item-text"><b>No Liability:</b> Developers are not responsible for any losses, damages, or legal issues arising from use.</div></div>
                        </div>

                        <div class="goku-card">
                            <div class="goku-card-title" style="margin-bottom:8px;"><i class="fa-solid fa-circle-info"></i> IMPORTANT</div>
                            <div class="goku-disc-item-text" style="text-align:center; padding:8px;">
                                This tool does <b>not</b> hack the game or guarantee wins. It applies pattern recognition on public game history for entertainment purposes only.
                            </div>
                        </div>

                        <div style="text-align:center; padding:12px; font-size:10px; color:#9ca3af; font-weight:800; letter-spacing:1px;">
                            <i class="fa-solid fa-heart" style="color:#ef4444;"></i>
                            &nbsp; PLAY RESPONSIBLY &nbsp;
                            <i class="fa-solid fa-heart" style="color:#ef4444;"></i>
                        </div>
                    </div>
                </div>

                <div class="goku-nav">
                    <div class="goku-nav-item active" data-target="tab-predict"><svg viewBox="0 0 24 24"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/></svg><span>Predict</span></div>
                    <div class="goku-nav-item" data-target="tab-history"><svg viewBox="0 0 24 24"><path d="M13 3a9 9 0 0 0-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0 0 13 21a9 9 0 0 0 0-18zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/></svg><span>History</span></div>
                    <div class="goku-nav-item" data-target="tab-risk"><svg viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 11h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11V12z"/></svg><span>Safety</span></div>
                    <div class="goku-nav-item" data-target="tab-disclaimer"><svg viewBox="0 0 24 24"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg><span>Info</span></div>
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
            return `<div class="goku-log-ball ${cls}" style="width:${size}px;height:${size}px;font-size:${Math.floor(size*0.45)}px;">${num}</div>`;
        }

        // ===== ELEMENTS =====
        const trigger = document.getElementById('goku-trigger');
        const panel = document.getElementById('goku-panel');
        const closeBtn = document.getElementById('goku-close');

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
        dragElement(panel, document.getElementById('goku-move'));

        // ===== TAB NAV =====
        document.querySelectorAll('.goku-nav-item').forEach(item => {
            item.onclick = () => {
                const target = item.getAttribute('data-target');
                document.querySelectorAll('.goku-nav-item').forEach(n => n.classList.remove('active'));
                item.classList.add('active');
                document.querySelectorAll('.goku-tab').forEach(p => p.classList.remove('active'));
                document.getElementById(target).classList.add('active');
            };
        });

        // ===== TIMER MODES =====
        document.querySelectorAll('.goku-mode-btn').forEach(tab => {
            tab.onclick = () => {
                document.querySelectorAll('.goku-mode-btn').forEach(t => t.classList.remove('active'));
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

        // ===== PERF GUARDS =====
        let isFetchingApi = false;
        let lastFetchAt = 0;
        let lastHistorySig = '';
        let lastPreviewSig = '';
        let lastBalVal = -1;

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
        // GOKU 7-STAR FIXED PATTERN LOGIC
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
                const p = document.getElementById('goku-pred');
                p.innerHTML = 'WAITING...'; p.className = 'waiting';
                return;
            }
            let result;
            try { result = gokuPredict(latestHistoryData); } catch(e) { result = { size: 'BIG', confidence: 60 }; }

            const predSize = result.size || 'BIG';
            const conf = result.confidence || 70;
            currentPredictionObj = { size: predSize, conf };

            const pEl = document.getElementById('goku-pred');
            pEl.innerHTML = predSize;
            pEl.className = predSize === 'BIG' ? 'big' : 'small';

            document.getElementById('goku-conf-txt').innerText = conf + '%';
            document.getElementById('goku-conf-fill').style.width = conf + '%';
        }

        // ===== FETCH API =====
        async function fetchApiData() {
            if (isFetchingApi) return;
            isFetchingApi = true;
            lastFetchAt = Date.now();
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

                    document.getElementById('goku-period').innerText = currentPeriodStr;
                    renderHistory(historyList);

                    if (lastPeriodFetched && lastPeriodFetched !== currentPeriodStr) {
                        if (activeBetPending) checkWinLoss(lastIssue);

                        const pEl = document.getElementById('goku-pred');
                        pEl.innerHTML = 'CHARGING...';
                        pEl.className = 'waiting';

                        setTimeout(() => {
                            updatePredictionDisplay();
                            if (isBotRunning) setTimeout(() => executeAutoBetSequence(), 2000);
                        }, 1000);
                    }
                    lastPeriodFetched = currentPeriodStr;
                }
            } catch (e) {
            } finally {
                isFetchingApi = false;
            }
        }

        function renderHistory(list) {
            const sig = list.slice(0, 5).map(i => i.number).join(',');
            if (sig === lastHistorySig) return;
            lastHistorySig = sig;
            const box = document.getElementById('goku-history-balls');
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

                document.getElementById('goku-time').innerText =
                    `${String(Math.floor(secondsLeft / 60)).padStart(2,'0')}:${String(secondsLeft % 60).padStart(2,'0')}`;

                if (isBotRunning && botStartedAt && safety.sessionAlert && !sessionWarned) {
                    if (Date.now() - botStartedAt > 60 * 60 * 1000) {
                        sessionWarned = true;
                        showToast('info', '⏰ SESSION ALERT', 'Bot has been running for 1 hour. Consider taking a break.');
                    }
                }

                if (isAutoScale) updateLevelsPreview();

                const nearBoundary = secondsLeft <= 4 || (maxSeconds - secondsLeft) <= 3;
                const sinceLast = Date.now() - lastFetchAt;
                if (nearBoundary || sinceLast >= 5000) {
                    fetchApiData();
                }
            };
            timerWorker.postMessage('start');
        }

        function updateBalance() {
            const e = document.querySelector('.Wallet__C-balance-l1 div, .balance-amount, #balance, .balance, .money');
            const v = e ? e.innerText.replace(/[^\d.]/g,'') : "0.00";
            const nv = parseFloat(v) || 0;
            if (nv === lastBalVal) return;
            lastBalVal = nv;
            currentBalance = nv;
            document.getElementById('goku-bal-val').innerText = "₹" + currentBalance.toFixed(2);
        }

        // ===== SAFETY CONFIG =====
        function updateSafetyBadge() {
            const badge = document.getElementById('goku-safety-badge');
            const active = safety.stopLossActive || safety.takeProfitActive || safety.confirmBeforeStart;
            badge.style.background = active ? '#fff7ed' : '#f3f4f6';
            badge.style.color = active ? '#ff6b00' : '#9ca3af';
            badge.innerText = active ? 'ON' : 'OFF';
        }

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
            const sig = `${isAutoScale}|${currentBalance}|${document.getElementById('bm-multiple-x').value}|${document.getElementById('bm-auto-levels').value}|${document.getElementById('bm-first-bet').value}|${document.getElementById('bm-max-levels').value}`;
            if (sig === lastPreviewSig) return;
            lastPreviewSig = sig;

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
            document.getElementById('goku-levels-preview').innerHTML =
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
            document.querySelector('.goku-nav-item[data-target="tab-predict"]').click();
        };

        // ===== MODAL (smooth in + out) =====
        function showModal(title, message, type, onConfirm) {
            const ov = document.createElement('div');
            ov.className = 'goku-modal-overlay';
            ov.innerHTML = `
                <div class="goku-modal">
                    <div class="goku-modal-icon ${type}">${type === 'warn' ? '⚠️' : '🛑'}</div>
                    <div class="goku-modal-title">${title}</div>
                    <div class="goku-modal-text">${message}</div>
                    <div class="goku-modal-btns">
                        <button class="goku-modal-btn cancel" id="goku-m-cancel">CANCEL</button>
                        <button class="goku-modal-btn confirm" id="goku-m-confirm">CONFIRM</button>
                    </div>
                </div>`;
            document.body.appendChild(ov);
            const closeModal = (cb) => {
                ov.classList.add('closing');
                setTimeout(() => { ov.remove(); if (cb) cb(); }, 240);
            };
            ov.querySelector('#goku-m-cancel').onclick = () => closeModal();
            ov.querySelector('#goku-m-confirm').onclick = () => closeModal(onConfirm);
        }

        // ===== TOAST (smooth in + out) =====
        function showToast(type, title, desc) {
            const t = document.createElement('div');
            t.className = 'goku-toast ' + type;
            const icon = type === 'win' ? 'fa-solid fa-bolt' : (type === 'loss' ? 'fa-solid fa-heart-crack' : 'fa-solid fa-shield-halved');
            t.innerHTML = `<div class="goku-toast-icon"><i class="${icon}"></i></div><div class="goku-toast-content"><div class="goku-toast-header"><div class="goku-toast-title">${title}</div><div class="goku-toast-time">now</div></div><div class="goku-toast-desc">${desc}</div></div>`;
            document.body.appendChild(t);
            setTimeout(() => { if (t) t.remove(); }, 3550);
        }

        // ===== BOT START/STOP =====
        const botBtnUI = document.getElementById('goku-bot-btn');
        botBtnUI.onclick = () => {
            if (!isBotRunning) {
                const startBot = () => {
                    applySafety();
                    stats.profit = 0;
                    updateStatsUI();
                    isBotRunning = true;
                    activeBetPending = false;
                    botStartedAt = Date.now();
                    sessionWarned = false;
                    botBtnUI.innerText = "🛑 STOP";
                    botBtnUI.classList.add("running");
                    document.getElementById('goku-status-txt').innerText = 'KI: CHARGED ⚡';
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
                document.getElementById('goku-status-txt').innerText = 'KI: DORMANT';
                const p = document.getElementById('goku-pred');
                p.innerHTML = 'WAITING...'; p.className = 'waiting';
            }
        };

        // ===== AUTO STOP =====
        function autoStopBot(reason) {
            if (!isBotRunning) return;
            isBotRunning = false;
            botStartedAt = 0;
            botBtnUI.innerText = "⚡ START";
            botBtnUI.classList.remove("running");
            document.getElementById('goku-status-txt').innerText = 'KI: DORMANT';
            document.getElementById('goku-pred').className = 'waiting';
            document.getElementById('goku-pred').innerHTML = 'WAITING...';
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

            const hit = guardHit(0);
            if (hit) { autoStopBot(hit); return; }
        }

        function updateStatsUI() {
            document.getElementById('st-tot').innerText = stats.total;
            document.getElementById('st-win').innerText = stats.wins;
            document.getElementById('st-los').innerText = stats.losses;
            const p = document.getElementById('st-pro');
            p.innerText = (stats.profit >= 0 ? "+₹" : "-₹") + Math.abs(stats.profit).toFixed(2);
            p.className = stats.profit >= 0 ? "goku-info-val green" : "goku-info-val red";
        }

        function renderHistoryPageUI() {
            const accRate = stats.total > 0 ? Math.round((stats.wins / stats.total) * 100) : 0;
            document.getElementById('hist-acc-val').innerText = `${accRate}%`;
            const prog = document.getElementById('goku-svg-progress');
            if (prog) prog.style.strokeDashoffset = 283 - (283 * (accRate / 100));

            document.getElementById('hist-stat-win').innerText = stats.wins;
            document.getElementById('hist-stat-loss').innerText = stats.losses;
            document.getElementById('hist-stat-rounds').innerText = stats.total;
            const streakEl = document.getElementById('hist-stat-streak');
            streakEl.innerText = stats.currentStreak > 0 ? `+${stats.currentStreak}` : `${stats.currentStreak}`;
            streakEl.style.color = stats.currentStreak >= 0 ? '#16a34a' : '#ef4444';

            document.getElementById('hist-best-win').innerText = stats.bestWinStreak;
            document.getElementById('hist-worst-loss').innerText = stats.worstLossStreak;
            const netEl = document.getElementById('hist-net-amount');
            netEl.innerText = (stats.profit >= 0 ? "+₹" : "-₹") + Math.abs(stats.profit).toFixed(2);
            netEl.style.color = stats.profit >= 0 ? "#16a34a" : "#ef4444";
            document.getElementById('hist-badge-total').innerText = predictionLogs.length;

            const flowBox = document.getElementById('goku-flow-bar-container');
            flowBox.innerHTML = '';
            predictionLogs.slice(0, 20).reverse().forEach(log => {
                const bar = document.createElement('div');
                bar.className = 'goku-flow-bar ' + (log.status === 'WIN' ? 'flow-win' : (log.status === 'LOSS' ? 'flow-loss' : 'flow-pending'));
                flowBox.appendChild(bar);
            });

            const logBox = document.getElementById('goku-prediction-log-list');
            logBox.innerHTML = '';
            predictionLogs.forEach(log => {
                const card = document.createElement('div');
                card.className = `goku-log-card ${log.status === 'WIN' ? 'win' : (log.status === 'LOSS' ? 'loss' : '')}`;
                const numHtml = (typeof log.number === 'number')
                    ? getBall(log.number, 34)
                    : `<div class="goku-log-ball pending" style="width:34px;height:34px;">?</div>`;
                card.innerHTML = `
                    <div class="goku-log-left">
                        ${numHtml}
                        <div class="goku-log-info">
                            <div class="goku-log-period"># <b>${log.period}</b></div>
                            <span class="goku-log-pred ${log.pred.toLowerCase()}">${log.pred}</span>
                        </div>
                    </div>
                    <div class="goku-log-right">
                        <span class="goku-log-tag tag-${log.status.toLowerCase()}">${log.status}</span>
                        <span class="goku-log-time">${log.time}</span>
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
                if (!isBotRunning) return;

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
                if (!isBotRunning) return;

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
            if (predictionLogs.length > 100) predictionLogs.length = 100;
            renderHistoryPageUI();

            await forceBet(currentPredictionObj.size, amt);
        }

        // ===== INIT =====
        startLiveClock();
        fetchApiData();
        renderHistoryPageUI();
        updateLevelsPreview();
        updateSafetyBadge();
    }
})();
