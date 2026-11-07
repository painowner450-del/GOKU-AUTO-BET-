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
        const GOKU_LOGO = `<img src="https://i.ibb.co/My2YFbbB/1000338459-removebg-preview.png" alt="GOKU" style="width:100%;height:100%;object-fit:contain;display:block;pointer-events:none;">`;

        // ===== CSS =====
        const style = document.createElement('style');
        style.innerHTML = `
#goku-app-root{font-family:'Inter',sans-serif;user-select:none;color:#1f2937}
#goku-app-root *{box-sizing:border-box;-webkit-tap-highlight-color:transparent}
#goku-trigger{position:fixed !important;bottom:85px;right:22px;width:66px;height:66px;background:#ffffff;border-radius:50%;display:none;align-items:center;justify-content:center;cursor:pointer;z-index:2147483647;border:3px solid #ff6b00;overflow:hidden;transition:transform 0.2s;box-shadow:0 6px 20px rgba(255,107,0,0.45)}
#goku-trigger:hover{transform:scale(1.05)}
#goku-panel{position:fixed !important;top:50% !important;left:50% !important;transform:translate(-50%,-50%) !important;width:388px;max-height:94vh;background:#ffffff;border-radius:24px;display:none;flex-direction:column;z-index:2147483646;box-shadow:0 20px 60px rgba(0,0,0,0.25),0 0 0 1px rgba(255,140,0,0.2);overflow:hidden;color:#1f2937}
.goku-header{display:flex;justify-content:space-between;align-items:center;padding:12px 16px;background:linear-gradient(135deg,#ff8c00,#ff6b00);cursor:move;position:relative;z-index:2}
.goku-header-left{display:flex;align-items:center;gap:11px;flex:1}
.goku-header-logo{width:42px;height:42px;flex-shrink:0;border-radius:50%;overflow:hidden;background:#ffffff;border:2px solid #ffffff;padding:2px}
.goku-header-info{display:flex;flex-direction:column;flex:1;gap:2px}
.goku-header-title{font-family:'Orbitron',sans-serif;font-size:17px;font-weight:900;color:#ffffff;letter-spacing:2px;line-height:1}
.goku-header-sub{font-size:8px;font-weight:800;color:#ffffff;letter-spacing:2px;text-transform:uppercase;opacity:0.9;line-height:1.1}
.goku-header-time{font-family:'JetBrains Mono',monospace;font-size:8px;font-weight:700;color:#ffffff;opacity:0.92;letter-spacing:0.4px;line-height:1.2}
.goku-header-controls{display:flex;align-items:center;gap:6px}
.goku-status-pill{display:flex;align-items:center;gap:5px;padding:5px 10px;background:rgba(255,255,255,0.25);border:1px solid rgba(255,255,255,0.4);border-radius:999px;font-size:9px;font-weight:900;color:#ffffff;letter-spacing:0.8px;text-transform:uppercase}
.goku-status-pill .dot{width:6px;height:6px;border-radius:50%;background:#ffffff}
.goku-close-btn{background:rgba(255,255,255,0.2);color:#ffffff;width:30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:16px;cursor:pointer;transition:0.2s;border:1px solid rgba(255,255,255,0.4)}
.goku-close-btn:hover{background:#ffffff;color:#ff6b00}
.goku-body{flex:1;overflow-y:auto;overflow-x:hidden;scrollbar-width:none;position:relative;z-index:2;background:#ffffff}
.goku-body::-webkit-scrollbar{display:none}
.goku-tab{display:none;flex-direction:column;gap:12px;padding:15px}
.goku-tab.active{display:flex}
.goku-hero{position:relative;background:#fff7ed;border:2px solid #ffd4a8;border-radius:20px;padding:16px;overflow:hidden}
.goku-hero-top{display:flex;justify-content:space-between;align-items:center;margin-bottom:12px}
.goku-hero-period{display:flex;flex-direction:column;gap:2px}
.goku-hero-period-lbl{font-size:8px;font-weight:900;color:#9ca3af;letter-spacing:1.5px;text-transform:uppercase}
.goku-hero-period-val{font-family:'JetBrains Mono',monospace;font-size:13px;font-weight:900;color:#ff6b00;letter-spacing:1px}
.goku-hero-timer{display:flex;align-items:center;gap:6px;padding:6px 12px;background:#ff6b00;border-radius:999px;font-family:'Orbitron',sans-serif;font-size:15px;font-weight:900;color:#ffffff;letter-spacing:1px}
.goku-hero-timer i{font-size:11px;color:#ffffff}

/* ===== DUAL PREDICTION ===== */
.goku-pred-duo{display:grid;grid-template-columns:1fr 1fr;gap:10px;padding:10px 0}
.goku-pred-half{background:#ffffff;border:2px solid #ffd4a8;border-radius:14px;padding:12px 8px;text-align:center;transition:all 0.3s;position:relative;overflow:hidden}
.goku-pred-half.active{border-color:#ff6b00;box-shadow:0 4px 14px rgba(255,107,0,0.25);background:linear-gradient(180deg,#fff7ed,#ffffff)}
.goku-pred-half.dim{opacity:0.45}
.goku-pred-lbl{font-size:9px;font-weight:900;color:#6b7280;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:6px}
.goku-pred-val{font-family:'Orbitron',sans-serif;font-size:26px;font-weight:900;letter-spacing:2px;line-height:1;margin-bottom:6px}
.goku-pred-val.big{color:#ef4444}
.goku-pred-val.small{color:#22c55e}
.goku-pred-val.odd{color:#dc2626}
.goku-pred-val.even{color:#16a34a}
.goku-pred-val.waiting{color:#9ca3af;font-size:14px;letter-spacing:1px}
.goku-pred-conf{font-family:'JetBrains Mono',monospace;font-size:11px;font-weight:800;color:#9ca3af;letter-spacing:0.5px}
.goku-pred-half.active .goku-pred-conf{color:#ff6b00}
.goku-pred-badge{position:absolute;top:6px;right:6px;font-size:8px;font-weight:900;padding:2px 6px;border-radius:5px;background:#ff6b00;color:#fff;letter-spacing:0.5px;display:none}
.goku-pred-half.active .goku-pred-badge{display:block}

.goku-ki-wrap{position:relative;margin-bottom:6px}
.goku-ki-head{display:flex;justify-content:space-between;font-size:9px;font-weight:900;color:#ff6b00;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:5px}
.goku-ki-bar{height:12px;background:#ffe4c4;border:1px solid #ffd4a8;border-radius:999px;overflow:hidden;position:relative}
.goku-ki-fill{height:100%;width:0%;background:linear-gradient(90deg,#ff8c00,#ff6b00);border-radius:999px;transition:width 0.5s}

.goku-quick-strip{display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px}
.goku-quick-card{background:#fff7ed;border:1px solid #ffd4a8;border-radius:14px;padding:10px 8px;text-align:center}
.goku-quick-card.win{color:#16a34a;background:#f0fdf4;border-color:#bbf7d0}
.goku-quick-card.loss{color:#ef4444;background:#fef2f2;border-color:#fecaca}
.goku-quick-card.total{color:#ff6b00;background:#fff7ed;border-color:#ffd4a8}
.goku-quick-lbl{font-size:8px;font-weight:900;color:#6b7280;letter-spacing:1px;text-transform:uppercase;margin-bottom:4px}
.goku-quick-val{font-family:'Orbitron',sans-serif;font-size:18px;font-weight:900;line-height:1;color:currentColor}

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

/* ===== BET MODE SELECTOR (AUTO/SIZE/PARITY) ===== */
.goku-betmode-row{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;background:#fff7ed;padding:5px;border-radius:12px;border:1px solid #ffd4a8}
.goku-betmode-btn{padding:12px 6px;border:none;background:transparent;color:#9ca3af;font-family:'Orbitron',sans-serif;font-size:11px;font-weight:900;border-radius:8px;cursor:pointer;transition:0.2s;letter-spacing:0.8px}
.goku-betmode-btn:hover{color:#ff6b00;background:rgba(255,140,0,0.08)}
.goku-betmode-btn.active{background:#ff6b00;color:#ffffff;box-shadow:0 2px 8px rgba(255,107,0,0.35)}

/* ===== K3 1M STATIC LABEL ===== */
.goku-k3label{display:flex;align-items:center;justify-content:center;gap:8px;padding:12px;background:#fff7ed;border:1px solid #ffd4a8;border-radius:12px;font-family:'Orbitron',sans-serif;font-size:12px;font-weight:900;color:#ff6b00;letter-spacing:1.5px}
.goku-k3label i{font-size:14px}

.goku-start-btn{width:100%;padding:17px;background:#ff6b00;color:#ffffff;border:none;border-radius:16px;font-family:'Orbitron',sans-serif;font-size:18px;font-weight:900;letter-spacing:3px;cursor:pointer;transition:0.2s;text-transform:uppercase;box-shadow:0 4px 14px rgba(255,107,0,0.3)}
.goku-start-btn:hover{background:#ff8c00;box-shadow:0 6px 20px rgba(255,107,0,0.4)}
.goku-start-btn:active{transform:scale(0.98)}
.goku-start-btn.running{background:#ef4444;box-shadow:0 4px 14px rgba(239,68,68,0.3)}

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

.goku-flow-bars{display:flex;align-items:flex-end;gap:5px;height:46px;padding:4px 0;overflow-x:auto;scrollbar-width:none;margin-top:8px}
.goku-flow-bars::-webkit-scrollbar{display:none}
.goku-flow-bar{width:28px;border-radius:6px;flex-shrink:0;transition:all 0.2s}
.flow-win{background:#22c55e;height:40px}
.flow-loss{background:#ef4444;height:22px}
.flow-pending{background:#d1d5db;height:14px}
.flow-failed{background:#9ca3af;height:8px;opacity:0.55}

.goku-log-list{display:flex;flex-direction:column;gap:7px}
.goku-log-card{background:#ffffff;border-radius:12px;padding:10px 12px;display:flex;align-items:center;justify-content:space-between;border:1px solid #e5e7eb;transition:0.2s}
.goku-log-card:hover{border-color:#ffd4a8}
.goku-log-card.win{border-color:#bbf7d0;background:#f0fdf4}
.goku-log-card.loss{border-color:#fecaca;background:#fef2f2}
.goku-log-card.failed{opacity:0.6}
.goku-log-left{display:flex;align-items:center;gap:10px;flex:1;min-width:0}
.goku-log-ball{width:34px;height:34px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:'Orbitron',sans-serif;font-weight:900;font-size:13px;color:#fff;flex-shrink:0}
.goku-log-ball.red{background:#ef4444}
.goku-log-ball.green{background:#22c55e}
.goku-log-ball.pending{background:#e5e7eb;color:#6b7280}
.goku-log-info{display:flex;flex-direction:column;gap:3px;min-width:0;flex:1}
.goku-log-period{font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:800;color:#6b7280;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.goku-log-period b{color:#ff6b00;font-weight:900}
.goku-log-tags{display:flex;gap:4px;flex-wrap:wrap}
.goku-log-pred{font-size:8px;font-weight:900;padding:2px 6px;border-radius:5px;letter-spacing:0.5px}
.goku-log-pred.big{background:#fee2e2;color:#dc2626}
.goku-log-pred.small{background:#dcfce7;color:#16a34a}
.goku-log-pred.odd{background:#fee2e2;color:#dc2626}
.goku-log-pred.even{background:#dcfce7;color:#16a34a}
.goku-log-mode{font-size:8px;font-weight:900;padding:2px 5px;border-radius:5px;background:#f3f4f6;color:#9ca3af;letter-spacing:0.5px}
.goku-log-right{display:flex;flex-direction:column;align-items:flex-end;gap:3px;flex-shrink:0}
.goku-log-tag{font-size:9px;font-weight:900;padding:3px 8px;border-radius:7px;letter-spacing:0.5px;text-transform:uppercase}
.tag-win{background:#22c55e;color:#fff}
.tag-loss{background:#ef4444;color:#fff}
.tag-pending{background:#e5e7eb;color:#6b7280}
.tag-failed{background:#9ca3af;color:#fff}
.goku-log-time{font-size:9px;font-weight:700;color:#9ca3af;font-family:'JetBrains Mono',monospace}

.goku-sec-title{font-family:'Orbitron',sans-serif;font-size:12px;font-weight:900;color:#ff6b00;letter-spacing:2px;text-transform:uppercase;display:flex;align-items:center;gap:8px;margin:4px 0}
.goku-sec-title::before{content:'';width:3px;height:14px;background:#ff6b00;border-radius:3px}
.goku-sec-title .badge{margin-left:auto;background:#fff7ed;color:#ff6b00;padding:2px 9px;border-radius:999px;font-size:9px;border:1px solid #ffd4a8}

.goku-card{background:#ffffff;border:1px solid #ffd4a8;border-radius:16px;padding:14px}
.goku-card.safety{background:#fff7ed;border-color:#ffd4a8}
.goku-card-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;padding-bottom:10px;border-bottom:1px solid #ffd4a8}
.goku-card-title{font-family:'Orbitron',sans-serif;font-size:11px;font-weight:900;color:#ff6b00;letter-spacing:1.5px;text-transform:uppercase;display:flex;align-items:center;gap:6px}
.goku-card-title i{font-size:12px}
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
.goku-input-row{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px}
.goku-input-group{display:flex;flex-direction:column;gap:5px}
.goku-input-group label{font-size:9px;font-weight:800;color:#6b7280;letter-spacing:0.5px;text-transform:uppercase}
.goku-input-group label i{color:#ff6b00;margin-right:3px}
.goku-input-group input{width:100%;padding:11px 12px;background:#ffffff;border:1px solid #ffd4a8;border-radius:10px;color:#1f2937;font-family:'Orbitron',sans-serif;font-size:13px;font-weight:900;outline:none;transition:0.2s}
.goku-input-group input:focus{border-color:#ff6b00;box-shadow:0 0 0 3px rgba(255,107,0,0.15)}
.goku-preview{padding:10px 12px;background:#fff7ed;border:1px dashed #ffd4a8;border-radius:10px;font-size:10px;color:#ff6b00;line-height:1.6;margin-bottom:10px;font-weight:700}
.goku-preview b{color:#ef4444;font-weight:900;font-size:12px}
.goku-apply-btn{width:100%;padding:13px;background:#ff6b00;color:#ffffff;border:none;border-radius:12px;font-family:'Orbitron',sans-serif;font-size:13px;font-weight:900;letter-spacing:1.5px;cursor:pointer;text-transform:uppercase;transition:0.2s}
.goku-apply-btn:hover{background:#ff8c00}
.goku-apply-btn:active{transform:scale(0.98)}

.goku-disc-hero{background:#fef2f2;border:1px solid #fecaca;border-radius:18px;padding:20px 16px;text-align:center}
.goku-disc-icon{font-size:42px;color:#ef4444;margin-bottom:8px}
.goku-disc-title{font-family:'Orbitron',sans-serif;font-size:17px;font-weight:900;color:#dc2626;letter-spacing:3px}
.goku-disc-sub{font-size:10px;font-weight:700;color:#6b7280;margin-top:5px;letter-spacing:0.5px}
.goku-disc-item{display:flex;gap:10px;padding:11px 0;border-bottom:1px dashed #fecaca;align-items:flex-start}
.goku-disc-item:last-child{border-bottom:none}
.goku-disc-item i{color:#ef4444;font-size:14px;margin-top:1px;flex-shrink:0;width:20px}
.goku-disc-item-text{font-size:11px;line-height:1.6;color:#4b5563;font-weight:500}
.goku-disc-item-text b{color:#ff6b00;font-weight:800}

.goku-nav{display:flex;background:#ffffff;border-top:1px solid #ffd4a8;padding:6px;position:relative;z-index:2;border-radius:0 0 24px 24px;gap:2px}
.goku-nav-item{flex:1;display:flex;flex-direction:column;align-items:center;gap:3px;padding:9px 4px;border-radius:10px;cursor:pointer;transition:0.2s;position:relative}
.goku-nav-item svg{width:17px;height:17px;fill:#9ca3af;transition:0.2s}
.goku-nav-item span{font-size:9px;font-weight:900;color:#9ca3af;letter-spacing:0.3px;text-transform:uppercase;transition:0.2s}
.goku-nav-item:hover svg{fill:#ff6b00}
.goku-nav-item:hover span{color:#ff6b00}
.goku-nav-item.active{background:#fff7ed}
.goku-nav-item.active svg{fill:#ff6b00}
.goku-nav-item.active span{color:#ff6b00}

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
                            <div class="goku-header-sub">K3 MODE • V5.0</div>
                            <div class="goku-header-time" id="goku-live-time">--/--/---- --:--:--</div>
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
                            <div class="goku-pred-duo">
                                <div class="goku-pred-half" id="pred-size-box">
                                    <div class="goku-pred-badge">BET</div>
                                    <div class="goku-pred-lbl">SIZE</div>
                                    <div class="goku-pred-val waiting" id="goku-pred-size">--</div>
                                    <div class="goku-pred-conf" id="goku-pred-size-conf">--%</div>
                                </div>
                                <div class="goku-pred-half" id="pred-parity-box">
                                    <div class="goku-pred-badge">BET</div>
                                    <div class="goku-pred-lbl">PARITY</div>
                                    <div class="goku-pred-val waiting" id="goku-pred-parity">--</div>
                                    <div class="goku-pred-conf" id="goku-pred-parity-conf">--%</div>
                                </div>
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

                        <div class="goku-sec-title">🎯 BET MODE</div>
                        <div class="goku-betmode-row">
                            <button class="goku-betmode-btn active" data-mode="AUTO">AUTO</button>
                            <button class="goku-betmode-btn" data-mode="SIZE">SIZE</button>
                            <button class="goku-betmode-btn" data-mode="PARITY">PARITY</button>
                        </div>

                        <div class="goku-k3label"><i class="fa-solid fa-dice"></i> K3 · 1 MIN</div>

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
                            <button class="goku-apply-btn" id="sg-apply-btn">🛡️ APPLY GUARDS</button>
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
                        <div style="text-align:center; padding:14px 12px 8px; font-size:10px; color:#9ca3af; font-weight:800; letter-spacing:1px; line-height:1.6;">
                            <div style="font-family:'Orbitron',sans-serif;font-size:11px;color:#ff6b00;letter-spacing:1.5px;margin-bottom:4px;">GOKU AI • V5.0 K3</div>
                            <i class="fa-solid fa-heart" style="color:#ef4444;"></i>
                            &nbsp; MADE FOR GOKU'S MEMBERS &nbsp;
                            <i class="fa-solid fa-heart" style="color:#ef4444;"></i>
                            <div style="margin-top:4px; font-size:9px; color:#9ca3af; letter-spacing:0.5px;">PLAY RESPONSIBLY</div>
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

        // ===== BALL HELPER (K3 sum 3-18, even=red, odd=green) =====
        function getBall(num, size) {
            size = size || 24;
            const cls = (num % 2 === 0) ? 'red' : 'green';
            return `<div class="goku-log-ball ${cls}" style="width:${size}px;height:${size}px;font-size:${Math.floor(size*0.42)}px;">${num}</div>`;
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

        // ===== CORE VARIABLES =====
        const HISTORY_API_URL = "https://draw.ar-lottery02.com/K3/K3_1M/GetHistoryIssuePage.json";

        let isBotRunning = false;
        let isAutoScale = false, autoScaleLevels = 5, fixedBaseBet = 10, martingaleMultiplier = 2, maxLevelsAllowed = 5;
        let currentLevel = 0, currentBalance = 0, betLevelsArray = [];
        let maxSeconds = 60, timerWorker;
        let latestHistoryData = [];
        let lastPeriodFetched = "", currentPredictionObj = null, activeBetPending = false;
        let stats = { total: 0, wins: 0, losses: 0, profit: 0.0, currentStreak: 0, bestWinStreak: 0, worstLossStreak: 0 };
        let predictionLogs = [];

        // ===== BET MODE (AUTO / SIZE / PARITY) =====
        let betMode = 'AUTO';

        // ===== LOSS STREAK TRACKERS (per mode) =====
        let sumitLossStreak = 0;
        let sumitLastLossTrend = null;
        let oddEvenLossStreak = 0;
        let oddEvenLastTrend = null;

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

        // ===== BET MODE BUTTONS =====
        document.querySelectorAll('.goku-betmode-btn').forEach(btn => {
            btn.onclick = () => {
                if (isBotRunning) {
                    showToast('info', '⚠️ STOP BOT', 'Stop the bot before changing bet mode');
                    return;
                }
                document.querySelectorAll('.goku-betmode-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                betMode = btn.getAttribute('data-mode');
                updatePredictionDisplay();
                showToast('info', '🎯 MODE: ' + betMode, betMode === 'AUTO' ? 'Bets on higher confidence' : (betMode === 'SIZE' ? 'Bets BIG/SMALL only' : 'Bets ODD/EVEN only'));
            };
        });

        // ===================================================
        // UNIFIED PREDICTION — BIG/SMALL (K3 sum >= 11)
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

        function unifiedPredict(history) {
            if (!history || history.length < 5) return { size: 'BIG', confidence: 60 };

            const nums   = history.slice(0, 50).map(x => parseInt(x.number));
            const sizes  = nums.map(n => n >= 11 ? 'BIG' : 'SMALL');
            const colors = nums.map(n => (n % 2 === 0) ? 'RED' : 'GREEN');

            let bestTrend = 'BIG';
            let conf = 70;

            // Priority 1: loss recovery (2+ losses)
            if (sumitLossStreak >= 2) {
                const lastActualSize = sizes[0];
                if (sumitLastLossTrend === 'BIG' || sumitLastLossTrend === 'SMALL') {
                    bestTrend = lastActualSize === 'BIG' ? 'SMALL' : 'BIG';
                } else {
                    bestTrend = colors[0] === 'RED' ? 'BIG' : 'SMALL';
                }
                conf = 99;
            }
            // Priority 2: 1 loss flip
            else if (sumitLossStreak === 1) {
                bestTrend = sizes[0] === 'BIG' ? 'SMALL' : 'BIG';
                conf = 94;
            }
            // Priority 3: pattern analysis
            else {
                let bigStreak = 0, smallStreak = 0;
                for (let i = 0; i < sizes.length; i++) { if (sizes[i] === 'BIG') bigStreak++; else break; }
                for (let i = 0; i < sizes.length; i++) { if (sizes[i] === 'SMALL') smallStreak++; else break; }

                if (bigStreak >= 9) { bestTrend = 'SMALL'; conf = 96; }
                else if (smallStreak >= 5) { bestTrend = 'BIG'; conf = 94; }
                else {
                    const dragonBS = (sizes[0] === sizes[1] && sizes[1] === sizes[2]);
                    const dragonRG = (colors[0] === colors[1] && colors[1] === colors[2]);
                    const alternating = (sizes[0] !== sizes[1] && sizes[1] !== sizes[2] && sizes[2] !== sizes[3]);

                    if (dragonBS) { bestTrend = sizes[0]; conf = 85; }
                    else if (dragonRG) { bestTrend = colors[0] === 'RED' ? 'BIG' : 'SMALL'; conf = 82; }
                    else if (alternating) { bestTrend = sizes[0] === 'BIG' ? 'SMALL' : 'BIG'; conf = 85; }
                    else {
                        const chrono = [...sizes].reverse();
                        let patternFound = false;
                        for (const pattern of GOKU_PATTERNS) {
                            for (let len = Math.min(5, chrono.length); len >= 3; len--) {
                                const tail = chrono.slice(-len);
                                const head = pattern.slice(0, len);
                                let ok = true;
                                for (let i = 0; i < len; i++) { if (tail[i] !== head[i]) { ok = false; break; } }
                                if (ok) { bestTrend = pattern[len]; conf = 68 + len * 5; patternFound = true; break; }
                            }
                            if (patternFound) break;
                        }
                        if (!patternFound) {
                            let scores = { BIG: 0, SMALL: 0 };
                            for (let i = 0; i < Math.min(15, sizes.length); i++) scores[sizes[i]] += (15 - i);
                            bestTrend = scores['BIG'] >= scores['SMALL'] ? 'SMALL' : 'BIG';
                            conf = 75;
                        }
                    }
                }
            }
            return { size: bestTrend, confidence: Math.min(99, conf) };
        }

        // ===================================================
        // UNIFIED PREDICTION — ODD/EVEN
        // ===================================================
        const ODD_EVEN_PATTERNS = [
            ['EVEN','EVEN','ODD','EVEN','ODD','EVEN'],
            ['ODD','EVEN','EVEN','ODD','EVEN','ODD'],
            ['EVEN','ODD','EVEN','EVEN','ODD','ODD'],
            ['ODD','ODD','EVEN','EVEN','EVEN','ODD'],
            ['EVEN','EVEN','EVEN','ODD','ODD','EVEN'],
            ['ODD','EVEN','ODD','EVEN','EVEN','ODD'],
            ['EVEN','ODD','ODD','EVEN','EVEN','ODD'],
            ['ODD','EVEN','EVEN','EVEN','ODD','EVEN'],
            ['EVEN','ODD','EVEN','ODD','EVEN','EVEN'],
            ['ODD','ODD','EVEN','ODD','EVEN','EVEN'],
            ['EVEN','EVEN','ODD','ODD','EVEN','ODD'],
            ['ODD','EVEN','ODD','ODD','EVEN','EVEN']
        ];

        function unifiedPredictOddEven(history) {
            if (!history || history.length < 6) return { type: 'EVEN', confidence: 58 };

            const nums   = history.slice(0, 60).map(x => parseInt(x.number));
            const types  = nums.map(n => (n % 2 === 0) ? 'EVEN' : 'ODD');
            const sizes  = nums.map(n => n >= 11 ? 'BIG' : 'SMALL');
            const colors = nums.map(n => (n % 2 === 0) ? 'RED' : 'GREEN');

            let scores = { EVEN: 0, ODD: 0 };

            let evenStreak = 0, oddStreak = 0;
            for (let i = 0; i < types.length; i++) { if (types[i] === 'EVEN') evenStreak++; else break; }
            for (let i = 0; i < types.length; i++) { if (types[i] === 'ODD')  oddStreak++;  else break; }
            if (evenStreak >= 6) scores.ODD += 28;
            else if (evenStreak >= 4) scores.EVEN += 12;
            else if (evenStreak >= 2) scores.EVEN += 8;
            if (oddStreak >= 6) scores.EVEN += 28;
            else if (oddStreak >= 4) scores.ODD += 12;
            else if (oddStreak >= 2) scores.ODD += 8;

            const chrono = [...types].reverse();
            let patternHit = false;
            for (const pattern of ODD_EVEN_PATTERNS) {
                for (let len = Math.min(5, chrono.length); len >= 3; len--) {
                    const tail = chrono.slice(-len);
                    const head = pattern.slice(0, len);
                    let match = true;
                    for (let i = 0; i < len; i++) { if (tail[i] !== head[i]) { match = false; break; } }
                    if (match) {
                        const next = pattern[len] || pattern[pattern.length - 1];
                        scores[next] += (18 + len * 4);
                        patternHit = true;
                        break;
                    }
                }
                if (patternHit) break;
            }

            let recent12 = { EVEN: 0, ODD: 0 }, recent20 = { EVEN: 0, ODD: 0 };
            for (let i = 0; i < Math.min(12, types.length); i++) recent12[types[i]] += (12 - i);
            for (let i = 0; i < Math.min(20, types.length); i++) recent20[types[i]] += (20 - i);
            if (recent12.EVEN > recent12.ODD + 18) scores.EVEN += 16;
            else if (recent12.ODD > recent12.EVEN + 18) scores.ODD += 16;
            else if (recent12.EVEN > recent12.ODD) scores.EVEN += 7;
            else if (recent12.ODD > recent12.EVEN) scores.ODD += 7;
            if (recent20.EVEN > recent20.ODD + 25) scores.EVEN += 11;
            else if (recent20.ODD > recent20.EVEN + 25) scores.ODD += 11;

            const lastColor = colors[0], lastSize = sizes[0];
            if (lastColor === 'RED') scores.EVEN += 6; else scores.ODD += 6;
            if (lastSize === 'BIG' && lastColor === 'RED') scores.EVEN += 5;
            if (lastSize === 'SMALL' && lastColor === 'GREEN') scores.ODD += 5;

            if (oddEvenLossStreak >= 3) {
                if (scores.EVEN >= scores.ODD) scores.EVEN += 14; else scores.ODD += 14;
            } else if (oddEvenLossStreak === 2) {
                if (scores.EVEN > scores.ODD) scores.ODD += 9; else scores.EVEN += 9;
            }

            let bestTrend = 'EVEN', conf = 62;
            if (scores.EVEN > scores.ODD) { bestTrend = 'EVEN'; conf = 62 + Math.min(30, Math.floor((scores.EVEN - scores.ODD) * 1.4)); }
            else if (scores.ODD > scores.EVEN) { bestTrend = 'ODD'; conf = 62 + Math.min(30, Math.floor((scores.ODD - scores.EVEN) * 1.4)); }
            else {
                const last8 = types.slice(0, 8);
                const evens = last8.filter(t => t === 'EVEN').length;
                bestTrend = evens >= 4 ? 'EVEN' : 'ODD';
                conf = 61;
            }
            return { type: bestTrend, confidence: Math.min(96, conf) };
        }

        // ===== PREDICTION DISPLAY =====
        function updatePredictionDisplay() {
            if (!latestHistoryData || latestHistoryData.length < 5) {
                document.getElementById('goku-pred-size').innerText = '--';
                document.getElementById('goku-pred-size').className = 'goku-pred-val waiting';
                document.getElementById('goku-pred-size-conf').innerText = '--%';
                document.getElementById('goku-pred-parity').innerText = '--';
                document.getElementById('goku-pred-parity').className = 'goku-pred-val waiting';
                document.getElementById('goku-pred-parity-conf').innerText = '--%';
                return;
            }

            let sizeResult, parityResult;
            try { sizeResult = unifiedPredict(latestHistoryData); } catch(e) { sizeResult = { size: 'BIG', confidence: 60 }; }
            try { parityResult = unifiedPredictOddEven(latestHistoryData); } catch(e) { parityResult = { type: 'EVEN', confidence: 58 }; }

            currentPredictionObj = {
                size: sizeResult.size,
                sizeConf: sizeResult.confidence,
                parity: parityResult.type,
                parityConf: parityResult.confidence
            };

            // SIZE box
            const sizeEl = document.getElementById('goku-pred-size');
            sizeEl.innerText = sizeResult.size;
            sizeEl.className = 'goku-pred-val ' + (sizeResult.size === 'BIG' ? 'big' : 'small');
            document.getElementById('goku-pred-size-conf').innerText = sizeResult.confidence + '%';

            // PARITY box
            const parityEl = document.getElementById('goku-pred-parity');
            parityEl.innerText = parityResult.type;
            parityEl.className = 'goku-pred-val ' + (parityResult.type === 'ODD' ? 'odd' : 'even');
            document.getElementById('goku-pred-parity-conf').innerText = parityResult.confidence + '%';

            // Highlight logic based on betMode
            const sizeBox = document.getElementById('pred-size-box');
            const parityBox = document.getElementById('pred-parity-box');
            sizeBox.classList.remove('active', 'dim');
            parityBox.classList.remove('active', 'dim');

            if (betMode === 'SIZE') {
                sizeBox.classList.add('active');
                parityBox.classList.add('dim');
            } else if (betMode === 'PARITY') {
                parityBox.classList.add('active');
                sizeBox.classList.add('dim');
            } else {
                // AUTO: highlight higher confidence
                if (sizeResult.confidence >= parityResult.confidence) {
                    sizeBox.classList.add('active');
                    parityBox.classList.add('dim');
                } else {
                    parityBox.classList.add('active');
                    sizeBox.classList.add('dim');
                }
            }

            // KI bar shows the active (bet-side) confidence
            const activeConf = (betMode === 'PARITY')
                ? parityResult.confidence
                : (betMode === 'SIZE')
                    ? sizeResult.confidence
                    : Math.max(sizeResult.confidence, parityResult.confidence);

            document.getElementById('goku-conf-txt').innerText = activeConf + '%';
            document.getElementById('goku-conf-fill').style.width = activeConf + '%';
        }

        // ===== FETCH API =====
        async function fetchApiData() {
            if (isFetchingApi) return;
            isFetchingApi = true;
            lastFetchAt = Date.now();
            try {
                const url = `${HISTORY_API_URL}?_t=${Date.now()}`;
                const res = await fetch(url);
                const data = await res.json();
                const rawList = (data && data.data && data.data.list) ? data.data.list : (data && data.list ? data.list : []);

                if (rawList.length > 0) {
                    const historyList = rawList.map(item => {
                        const sumVal = parseInt(item.sum || 0);
                        return {
                            issueNumber: String(item.issueNumber || '').trim(),
                            number: sumVal,
                            size: sumVal >= 11 ? 'BIG' : 'SMALL',
                            parity: (sumVal % 2 === 0) ? 'EVEN' : 'ODD'
                        };
                    });
                    latestHistoryData = historyList;
                    const lastIssue = historyList[0];
                    const currentPeriodStr = (BigInt(lastIssue.issueNumber) + 1n).toString();

                    document.getElementById('goku-period').innerText = currentPeriodStr;
                    renderHistory(historyList);

                    if (lastPeriodFetched && lastPeriodFetched !== currentPeriodStr) {
                        if (activeBetPending) checkWinLoss(historyList);

                        // Refresh prediction on new period
                        setTimeout(() => {
                            updatePredictionDisplay();
                            if (isBotRunning) setTimeout(() => executeAutoBetSequence(), 2000);
                        }, 1000);
                    }
                    lastPeriodFetched = currentPeriodStr;
                }
            } catch (e) {
                console.log('GOKU K3 API error:', e);
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

                const timeEl = document.getElementById('goku-live-time');
                if (timeEl) {
                    const dd = String(now.getDate()).padStart(2,'0');
                    const mo = String(now.getMonth()+1).padStart(2,'0');
                    const yy = now.getFullYear();
                    const hh = String(now.getHours()).padStart(2,'0');
                    const mn = String(now.getMinutes()).padStart(2,'0');
                    const ss = String(now.getSeconds()).padStart(2,'0');
                    timeEl.innerText = `${dd}/${mo}/${yy} ${hh}:${mn}:${ss}`;
                }

                const s = now.getSeconds();
                const secondsLeft = 60 - s;
                document.getElementById('goku-time').innerText =
                    `00:${String(secondsLeft).padStart(2,'0')}`;

                if (isBotRunning && botStartedAt && safety.sessionAlert && !sessionWarned) {
                    if (Date.now() - botStartedAt > 60 * 60 * 1000) {
                        sessionWarned = true;
                        showToast('info', '⏰ SESSION ALERT', 'Bot has been running for 1 hour. Consider taking a break.');
                    }
                }

                if (isAutoScale) updateLevelsPreview();

                const nearBoundary = secondsLeft <= 4 || (60 - secondsLeft) <= 3;
                const sinceLast = Date.now() - lastFetchAt;
                if (nearBoundary || sinceLast >= 5000) fetchApiData();
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

        // ===== SAFETY =====
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

        // ===== MODAL =====
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

        // ===== TOAST =====
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
                    sumitLossStreak = 0;
                    sumitLastLossTrend = null;
                    oddEvenLossStreak = 0;
                    oddEvenLastTrend = null;
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
                        `About to start <b>auto-betting</b> on <b>K3 · 1 MIN</b>.<br><br>Mode: <b>${betMode}</b><br>Stop Loss: <b>₹${safety.stopLossAmount}</b><br>Take Profit: <b>₹${safety.takeProfitAmount}</b><br><br>Bet only what you can afford to lose.`,
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
            }
        };

        function autoStopBot(reason) {
            if (!isBotRunning) return;
            isBotRunning = false;
            botStartedAt = 0;
            botBtnUI.innerText = "⚡ START";
            botBtnUI.classList.remove("running");
            document.getElementById('goku-status-txt').innerText = 'KI: DORMANT';
            showToast('info', reason.title, reason.desc);
        }

        // ===================================================
        // CHECK WIN/LOSS (K3 — mode routed)
        // ===================================================
        function checkWinLoss(historyList) {
            if (!activeBetPending) return;

            const logFound = predictionLogs.find(l => l.period === activeBetPending && (l.status === 'PENDING' || l.status === 'CHECKING'));
            if (!logFound) { activeBetPending = false; return; }

            const result = historyList.find(h => h.issueNumber === logFound.period);
            if (!result) return;

            let isWin = false;
            if (logFound.mode === 'PARITY') {
                isWin = (logFound.pred === result.parity);
            } else {
                isWin = (logFound.pred === result.size);
            }

            stats.total++;
            const amt = betLevelsArray[currentLevel] || betLevelsArray[0] || 10;
            let totalProfitThisRound = 0;

            if (isWin) {
                stats.wins++;
                totalProfitThisRound += (amt * 0.98);
                currentLevel = 0;
                if (logFound.mode === 'PARITY') { oddEvenLossStreak = 0; oddEvenLastTrend = null; }
                else { sumitLossStreak = 0; sumitLastLossTrend = null; }
            } else {
                stats.losses++;
                totalProfitThisRound -= amt;
                currentLevel++;
                if (currentLevel >= maxLevelsAllowed) currentLevel = 0;

                if (logFound.mode === 'PARITY') {
                    oddEvenLossStreak++;
                    oddEvenLastTrend = logFound.pred;
                    if (oddEvenLossStreak > 4) oddEvenLossStreak = 0;
                } else {
                    sumitLossStreak++;
                    sumitLastLossTrend = logFound.pred;
                    if (sumitLossStreak > 2) sumitLossStreak = 0;
                }
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

            logFound.number = result.number;
            logFound.result = result.size;
            logFound.resultParity = result.parity;
            logFound.status = isWin ? 'WIN' : 'LOSS';

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
                let barClass = 'flow-pending';
                if (log.status === 'WIN')    barClass = 'flow-win';
                if (log.status === 'LOSS')   barClass = 'flow-loss';
                if (log.status === 'FAILED') barClass = 'flow-failed';
                bar.className = 'goku-flow-bar ' + barClass;
                flowBox.appendChild(bar);
            });

            const logBox = document.getElementById('goku-prediction-log-list');
            logBox.innerHTML = '';
            predictionLogs.slice(0, 20).forEach(log => {
                const card = document.createElement('div');
                let cardClass = '';
                if (log.status === 'WIN')    cardClass = 'win';
                if (log.status === 'LOSS')   cardClass = 'loss';
                if (log.status === 'FAILED') cardClass = 'failed';
                card.className = `goku-log-card ${cardClass}`;

                const numHtml = (typeof log.number === 'number')
                    ? getBall(log.number, 34)
                    : `<div class="goku-log-ball pending" style="width:34px;height:34px;">?</div>`;

                const predClass = log.pred.toLowerCase();
                const modeLabel = log.mode === 'PARITY' ? 'P' : 'S';

                card.innerHTML = `
                    <div class="goku-log-left">
                        ${numHtml}
                        <div class="goku-log-info">
                            <div class="goku-log-period"># <b>${log.period}</b></div>
                            <div class="goku-log-tags">
                                <span class="goku-log-pred ${predClass}">${log.pred}</span>
                                <span class="goku-log-mode">${modeLabel}</span>
                            </div>
                        </div>
                    </div>
                    <div class="goku-log-right">
                        <span class="goku-log-tag tag-${log.status.toLowerCase()}">${log.status}</span>
                        <span class="goku-log-time">${log.time}</span>
                    </div>`;
                logBox.appendChild(card);
            });
        }

        // ===================================================
        // K3 BET CLICKER
        // ===================================================
        function dispatchForceClick(node) {
            if (!node) return;
            try { node.click(); } catch(e){}
            ['pointerdown','mousedown','pointerup','mouseup'].forEach(evt => {
                try { node.dispatchEvent(new MouseEvent(evt, { bubbles: true, cancelable: true, view: window })); } catch(e){}
            });
            try {
                const rect = node.getBoundingClientRect();
                const x = rect.left + rect.width / 2;
                const y = rect.top + rect.height / 2;
                const touchObj = new Touch({ identifier: Date.now(), target: node, clientX: x, clientY: y, screenX: x, screenY: y, pageX: x, pageY: y });
                const startEvent = new TouchEvent('touchstart', { bubbles: true, cancelable: true, composed: true, touches: [touchObj], targetTouches: [touchObj], changedTouches: [touchObj] });
                const endEvent = new TouchEvent('touchend', { bubbles: true, cancelable: true, composed: true, touches: [], targetTouches: [], changedTouches: [touchObj] });
                node.dispatchEvent(startEvent);
                setTimeout(() => { node.dispatchEvent(endEvent); }, 50);
            } catch(e) {
                try {
                    node.dispatchEvent(new Event('touchstart', { bubbles: true, cancelable: true }));
                    node.dispatchEvent(new Event('touchend', { bubbles: true, cancelable: true }));
                } catch(err){}
            }
        }

        function findBetButton(target) {
            const cls = target.charAt(0).toUpperCase() + target.slice(1).toLowerCase();
            const selector = '.bet_item.' + cls;
            const allBtns = document.querySelectorAll(selector);
            for (let i = 0; i < allBtns.length; i++) {
                if (allBtns[i].getClientRects().length) return allBtns[i];
            }
            return null;
        }

        function findVisibleAmountInput() {
            return document.querySelector('.Betting__Popup-input');
        }

        function setBetAmountOn(inputField, amount) {
            if (!inputField) return false;
            try {
                inputField.setAttribute('inputmode', 'none');
                inputField.focus();
                const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
                nativeInputValueSetter.call(inputField, String(amount));
                inputField.dispatchEvent(new Event('input', { bubbles: true }));
                inputField.dispatchEvent(new Event('change', { bubbles: true }));
                inputField.dispatchEvent(new Event('keyup', { bubbles: true }));
                inputField.dispatchEvent(new InputEvent('input', { bubbles: true, inputType: 'insertText', data: String(amount) }));
                setTimeout(() => {
                    inputField.blur();
                    inputField.removeAttribute('inputmode');
                }, 100);
                return true;
            } catch(err) {
                try {
                    inputField.value = String(amount);
                    inputField.dispatchEvent(new Event('input', { bubbles: true }));
                    return true;
                } catch(e2) { return false; }
            }
        }

        function checkAgreeCheckbox() {
            const checkbox = document.querySelector('.betPopup .van-checkbox');
            if (checkbox) {
                if (checkbox.getAttribute('aria-checked') !== 'true') dispatchForceClick(checkbox);
            }
        }

        function clickConfirmButtonOnce() {
            const confirmBtn = document.querySelector('.betPopup .bet-foot-s');
            if (confirmBtn) { dispatchForceClick(confirmBtn); return true; }
            return false;
        }

        function closeStuckPopups() {
            const cancelBtn = document.querySelector('.betPopup .bet-foot-c');
            if (cancelBtn && cancelBtn.getClientRects().length) {
                dispatchForceClick(cancelBtn);
                return true;
            }
            return false;
        }

        // ===== K3 FORCE BET — returns Promise<boolean> =====
        function forceBet(targetVal, amount) {
            return new Promise(function(resolve) {
                if (!isBotRunning) { resolve(false); return; }

                closeStuckPopups();

                setTimeout(function() {
                    const btn = findBetButton(targetVal);
                    if (!btn) { resolve(false); return; }

                    dispatchForceClick(btn);

                    setTimeout(function() {
                        let checkInputCount = 0;
                        function waitForPopup() {
                            const inp = findVisibleAmountInput();
                            if (inp) {
                                setBetAmountOn(inp, amount);
                                checkAgreeCheckbox();

                                let totalCheckCount = 0;
                                function waitForTotal() {
                                    const totalEl = document.querySelector('.betPopup .bet-foot-s');
                                    if (!totalEl) { resolve(true); return; }

                                    const totalTxt = totalEl.innerText.replace(/[^\d.]/g, '');
                                    const expectedTotal = parseFloat(amount).toFixed(2);

                                    if (totalTxt === expectedTotal || totalCheckCount > 30) {
                                        setTimeout(function() {
                                            clickConfirmButtonOnce();
                                            setTimeout(function() {
                                                if (document.querySelector('.Betting__Popup-input')) {
                                                    clickConfirmButtonOnce();
                                                    setTimeout(function() {
                                                        if (document.querySelector('.Betting__Popup-input')) {
                                                            closeStuckPopups();
                                                            resolve(false);
                                                        } else {
                                                            resolve(true);
                                                        }
                                                    }, 1500);
                                                } else {
                                                    resolve(true);
                                                }
                                            }, 2000);
                                        }, 600);
                                    } else {
                                        totalCheckCount++;
                                        setTimeout(waitForTotal, 100);
                                    }
                                }
                                waitForTotal();
                            } else {
                                checkInputCount++;
                                if (checkInputCount > 30) { resolve(false); }
                                else { setTimeout(waitForPopup, 100); }
                            }
                        }
                        waitForPopup();
                    }, 1000);
                }, 100);
            }).catch(function() { return false; });
        }

        // ===================================================
        // AUTO BET SEQUENCE (K3 — AUTO/SIZE/PARITY)
        // ===================================================
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

            if (safety.betPercentWarn && currentBalance > 0 && amt > currentBalance * 0.25) {
                showToast('info', '⚠️ HIGH BET', `Bet ₹${amt} is ${Math.round((amt/currentBalance)*100)}% of balance`);
            }

            // Determine mode + target
            let modeToUse = betMode;
            if (betMode === 'AUTO') {
                modeToUse = (currentPredictionObj.sizeConf >= currentPredictionObj.parityConf) ? 'SIZE' : 'PARITY';
            }
            const targetVal = (modeToUse === 'PARITY') ? currentPredictionObj.parity : currentPredictionObj.size;

            const logTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            const logEntry = {
                period: lastPeriodFetched,
                pred: targetVal,
                mode: modeToUse,
                number: '?',
                result: 'WAITING',
                status: 'PENDING',
                time: logTime
            };
            predictionLogs.unshift(logEntry);
            if (predictionLogs.length > 100) predictionLogs.length = 100;

            activeBetPending = lastPeriodFetched;
            renderHistoryPageUI();

            document.getElementById('goku-status-txt').innerText = 'KI: BETTING ' + targetVal;

            const ok = await forceBet(targetVal, amt);

            if (!ok) {
                if (logEntry.status === 'PENDING') {
                    logEntry.status = 'FAILED';
                    if (activeBetPending === logEntry.period) activeBetPending = false;
                    document.getElementById('goku-status-txt').innerText = 'KI: BET FAILED';
                    renderHistoryPageUI();
                }
            } else {
                document.getElementById('goku-status-txt').innerText = 'KI: RUNNING';
            }
        }

        // ===== INIT =====
        startLiveClock();
        fetchApiData();
        renderHistoryPageUI();
        updateLevelsPreview();
        updateSafetyBadge();
    }
})();
