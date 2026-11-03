javascript:(function(){
    initGOKUApp();

    function initGOKUApp(){
        if(document.getElementById('goku-app-root')) return;

        // ===== VERSION INFO =====
        const APP_VERSION = '1.00.01';
        const APP_UPDATED = '2026-11-03';

        const preconnect = document.createElement('link'); preconnect.rel='preconnect'; preconnect.href='https://i.ibb.co';
        document.head.appendChild(preconnect);
        const dnsPrefetch = document.createElement('link'); dnsPrefetch.rel='dns-prefetch'; dnsPrefetch.href='https://i.ibb.co';
        document.head.appendChild(dnsPrefetch);
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
        const GOKU_LOGO = `<img src="https://i.ibb.co/My2YFbbB/1000338459-removebg-preview.png" alt="" decoding="sync" onerror="this.style.display='none'" style="width:100%;height:100%;object-fit:contain;display:block">`;

        const style = document.createElement('style');
        style.innerHTML = `
#goku-app-root{font-family:'Inter',sans-serif;user-select:none;color:#1f2937}
#goku-app-root *{box-sizing:border-box;-webkit-tap-highlight-color:transparent}
#goku-trigger{position:fixed !important;bottom:85px;right:22px;width:66px;height:66px;background:#ffffff;border-radius:50%;display:none;align-items:center;justify-content:center;cursor:pointer;z-index:2147483647;border:3px solid #ff6b00;overflow:hidden;transition:transform 0.2s;box-shadow:0 4px 14px rgba(255,107,0,0.3);will-change:transform}
#goku-trigger:hover{transform:scale(1.05)}
#goku-trigger::after{content:'7';position:absolute;bottom:0px;right:0px;width:18px;height:18px;background:#cc0000;color:#fff;border-radius:50%;font-size:10px;font-weight:900;display:flex;align-items:center;justify-content:center;border:2px solid #fff;z-index:2}
#goku-panel{position:fixed !important;top:50% !important;left:50% !important;transform:translate(-50%,-50%) !important;width:388px;max-width:calc(100vw - 20px);max-height:94vh;background:#ffffff;border-radius:24px;display:none;flex-direction:column;z-index:2147483646;box-shadow:0 10px 30px rgba(0,0,0,0.2),0 0 0 1px rgba(255,140,0,0.2);overflow:hidden;color:#1f2937}
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
.goku-body{flex:1;overflow-y:auto;overflow-x:hidden;scrollbar-width:none;position:relative;z-index:2;background:#ffffff;overscroll-behavior:contain;-webkit-overflow-scrolling:touch;contain:layout style}
.goku-body::-webkit-scrollbar{display:none}
.goku-tab{display:none;flex-direction:column;gap:12px;padding:15px}
.goku-tab.active{display:flex}
.goku-hero{position:relative;background:#fff7ed;border:2px solid #ffd4a8;border-radius:20px;padding:16px;overflow:hidden;contain:layout style paint}
.goku-hero-top{display:flex;justify-content:space-between;align-items:center;margin-bottom:12px}
.goku-hero-period{display:flex;flex-direction:column;gap:2px}
.goku-hero-period-lbl{font-size:8px;font-weight:900;color:#9ca3af;letter-spacing:1.5px;text-transform:uppercase}
.goku-hero-period-val{font-family:'JetBrains Mono',monospace;font-size:13px;font-weight:900;color:#ff6b00;letter-spacing:1px}
.goku-hero-timer{display:flex;align-items:center;gap:6px;padding:6px 12px;background:#ff6b00;border-radius:999px;font-family:'Orbitron',sans-serif;font-size:15px;font-weight:900;color:#ffffff;letter-spacing:1px}
.goku-hero-timer i{font-size:11px;color:#ffffff}
.goku-pred-display{text-align:center;padding:18px 0 8px}
#goku-pred{font-family:'Orbitron',sans-serif;font-size:54px;font-weight:900;letter-spacing:6px;line-height:1;display:inline-block;transition:color 0.3s}
#goku-pred.big{color:#ef4444}
#goku-pred.small{color:#22c55e}
#goku-pred.waiting{color:#9ca3af;font-size:22px;letter-spacing:4px}
#goku-rule-badge{font-size:9px;font-weight:900;letter-spacing:1px;margin-top:8px;color:#6b7280;text-transform:uppercase;padding:4px 10px;background:#fff;border:1px dashed #ffd4a8;border-radius:999px;display:inline-block}
.goku-ki-wrap{position:relative;margin-bottom:10px}
.goku-ki-head{display:flex;justify-content:space-between;font-size:9px;font-weight:900;color:#ff6b00;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:5px}
.goku-ki-bar{height:12px;background:#ffe4c4;border:1px solid #ffd4a8;border-radius:999px;overflow:hidden;position:relative}
.goku-ki-fill{height:100%;width:0%;background:linear-gradient(90deg,#ff8c00,#ff6b00);border-radius:999px;transition:width 0.5s}
.goku-quick-strip{display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px}
.goku-quick-card{background:#fff7ed;border:1px solid #ffd4a8;border-radius:14px;padding:10px 8px;text-align:center;contain:layout style paint}
.goku-quick-card.win{color:#16a34a;background:#f0fdf4;border-color:#bbf7d0}
.goku-quick-card.loss{color:#ef4444;background:#fef2f2;border-color:#fecaca}
.goku-quick-card.total{color:#ff6b00;background:#fff7ed;border-color:#ffd4a8}
.goku-quick-lbl{font-size:8px;font-weight:900;color:#6b7280;letter-spacing:1px;text-transform:uppercase;margin-bottom:4px}
.goku-quick-val{font-family:'Orbitron',sans-serif;font-size:18px;font-weight:900;line-height:1;color:currentColor}
.goku-info-duo{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.goku-info-card{background:#fff7ed;border:1px solid #ffd4a8;border-radius:14px;padding:11px 12px;display:flex;align-items:center;gap:9px;contain:layout style paint}
.goku-info-icon{width:32px;height:32px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0}
.goku-info-icon.money{background:#ffedd5;color:#ff6b00}
.goku-info-icon.profit{background:#dcfce7;color:#16a34a}
.goku-info-text{display:flex;flex-direction:column;gap:1px;flex:1;min-width:0}
.goku-info-lbl{font-size:8px;font-weight:900;color:#6b7280;letter-spacing:0.6px;text-transform:uppercase}
.goku-info-val{font-family:'Orbitron',sans-serif;font-size:14px;font-weight:900;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.goku-info-val.gold{color:#ff6b00}
.goku-info-val.green{color:#16a34a}
.goku-info-val.red{color:#ef4444}
.goku-modes{display:grid;grid-template-columns:repeat(4,1fr);gap:6px;background:#fff7ed;padding:5px;border-radius:12px;border:1px solid #ffd4a8}
.goku-mode-btn{padding:10px 6px;border:none;background:transparent;color:#9ca3af;font-family:'JetBrains Mono',monospace;font-size:11px;font-weight:900;border-radius:8px;cursor:pointer;transition:0.2s;letter-spacing:0.5px}
.goku-mode-btn:hover{color:#ff6b00;background:rgba(255,140,0,0.08)}
.goku-mode-btn.active{background:#ff6b00;color:#ffffff}
.goku-start-btn{width:100%;padding:17px;background:#ff6b00;color:#ffffff;border:none;border-radius:16px;font-family:'Orbitron',sans-serif;font-size:18px;font-weight:900;letter-spacing:3px;cursor:pointer;transition:0.2s;text-transform:uppercase;box-shadow:0 4px 14px rgba(255,107,0,0.3)}
.goku-start-btn:hover{background:#ff8c00;box-shadow:0 6px 20px rgba(255,107,0,0.4)}
.goku-start-btn:active{transform:scale(0.98)}
.goku-start-btn.running{background:#ef4444;box-shadow:0 4px 14px rgba(239,68,68,0.3)}
.goku-hist-card{background:#ffffff;border:1px solid #ffd4a8;border-radius:18px;padding:16px;contain:layout style paint}
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
.goku-flow-bar{width:28px;border-radius:6px;flex-shrink:0;transition:height 0.2s, background 0.2s}
.flow-win{background:#22c55e;height:40px}
.flow-loss{background:#ef4444;height:22px}
.flow-pending{background:#d1d5db;height:14px}
.goku-log-list{display:flex;flex-direction:column;gap:7px}
.goku-log-card{background:#ffffff;border-radius:12px;padding:10px 12px;display:flex;align-items:center;justify-content:space-between;border:1px solid #e5e7eb;transition:border-color 0.2s;contain:layout style paint}
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
.goku-sec-title{font-family:'Orbitron',sans-serif;font-size:12px;font-weight:900;color:#ff6b00;letter-spacing:2px;text-transform:uppercase;display:flex;align-items:center;gap:8px;margin:4px 0}
.goku-sec-title::before{content:'';width:3px;height:14px;background:#ff6b00;border-radius:3px}
.goku-sec-title .badge{margin-left:auto;background:#fff7ed;color:#ff6b00;padding:2px 9px;border-radius:999px;font-size:9px;border:1px solid #ffd4a8}
.goku-card{background:#ffffff;border:1px solid #ffd4a8;border-radius:16px;padding:14px;contain:layout style paint}
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
.goku-apply-btn.green{background:#ff6b00}
.goku-apply-btn.green:hover{background:#ff8c00}
.goku-disc-hero{background:#fef2f2;border:1px solid #fecaca;border-radius:18px;padding:20px 16px;text-align:center;contain:layout style paint}
.goku-disc-icon{font-size:42px;color:#ef4444;margin-bottom:8px}
.goku-disc-title{font-family:'Orbitron',sans-serif;font-size:17px;font-weight:900;color:#dc2626;letter-spacing:3px}
.goku-disc-sub{font-size:10px;font-weight:700;color:#6b7280;margin-top:5px;letter-spacing:0.5px}
.goku-disc-item{display:flex;gap:10px;padding:11px 0;border-bottom:1px dashed #fecaca;align-items:flex-start}
.goku-disc-item:last-child{border-bottom:none}
.goku-disc-item i{color:#ef4444;font-size:14px;margin-top:1px;flex-shrink:0;width:20px}
.goku-disc-item-text{font-size:11px;line-height:1.6;color:#4b5563;font-weight:500}
.goku-disc-item-text b{color:#ff6b00;font-weight:800}
.goku-version-hero{background:linear-gradient(135deg,#ff8c00,#ff6b00);border-radius:18px;padding:20px 16px;text-align:center;color:#ffffff;contain:layout style paint;position:relative;overflow:hidden}
.goku-version-hero::before{content:'';position:absolute;top:-30px;right:-30px;width:100px;height:100px;background:rgba(255,255,255,0.08);border-radius:50%}
.goku-version-hero::after{content:'';position:absolute;bottom:-40px;left:-20px;width:120px;height:120px;background:rgba(255,255,255,0.06);border-radius:50%}
.goku-version-icon{font-size:38px;margin-bottom:6px;color:#ffffff;position:relative;z-index:1}
.goku-version-title{font-family:'Orbitron',sans-serif;font-size:20px;font-weight:900;letter-spacing:3px;color:#ffffff;position:relative;z-index:1}
.goku-version-tag{font-family:'JetBrains Mono',monospace;font-size:14px;font-weight:900;color:#ffffff;margin-top:8px;letter-spacing:2px;background:rgba(255,255,255,0.25);padding:4px 12px;border-radius:999px;display:inline-block;position:relative;z-index:1}
.goku-version-info{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:12px}
.goku-version-cell{background:#fff7ed;border:1px solid #ffd4a8;border-radius:12px;padding:9px 10px;text-align:center;contain:layout style paint}
.goku-version-cell-lbl{font-size:8px;font-weight:900;color:#9ca3af;letter-spacing:1px;text-transform:uppercase;margin-bottom:3px}
.goku-version-cell-val{font-family:'JetBrains Mono',monospace;font-size:11px;font-weight:900;color:#ff6b00;letter-spacing:0.5px}
.goku-join-hero{background:linear-gradient(135deg,#ff8c00,#ff6b00);border-radius:18px;padding:22px 16px;text-align:center;color:#ffffff;contain:layout style paint}
.goku-join-hero-icon{font-size:42px;margin-bottom:8px;color:#ffffff}
.goku-join-hero-title{font-family:'Orbitron',sans-serif;font-size:19px;font-weight:900;letter-spacing:2px;color:#ffffff}
.goku-join-hero-sub{font-size:11px;font-weight:700;color:rgba(255,255,255,0.92);margin-top:6px;letter-spacing:0.5px}
.goku-join-btn{display:flex;align-items:center;gap:14px;padding:14px;background:#ffffff;border:2px solid #ffd4a8;border-radius:16px;text-decoration:none;color:#1f2937;transition:0.2s;cursor:pointer;margin-bottom:10px}
.goku-join-btn:last-child{margin-bottom:0}
.goku-join-btn:hover{border-color:#ff6b00;box-shadow:0 6px 16px rgba(255,107,0,0.15)}
.goku-join-btn-icon{width:48px;height:48px;border-radius:13px;background:linear-gradient(135deg,#29b6f6,#0288d1);display:flex;align-items:center;justify-content:center;font-size:22px;color:#ffffff;flex-shrink:0}
.goku-join-btn.gc .goku-join-btn-icon{background:linear-gradient(135deg,#66bb6a,#388e3c)}
.goku-join-btn-text{display:flex;flex-direction:column;gap:3px;flex:1;min-width:0}
.goku-join-btn-title{font-family:'Orbitron',sans-serif;font-size:13px;font-weight:900;color:#ff6b00;letter-spacing:1px;text-transform:uppercase}
.goku-join-btn-desc{font-size:10px;font-weight:600;color:#6b7280}
.goku-join-btn-arrow{font-size:16px;color:#ff6b00;flex-shrink:0}
.goku-footer{text-align:center;padding:12px 8px 4px;font-size:11px;color:#9ca3af;font-weight:700;letter-spacing:0.5px}
.goku-footer .heart{color:#ef4444}
.goku-footer-ver{font-size:9px;color:#9ca3af;font-weight:800;letter-spacing:1px;font-family:'JetBrains Mono',monospace;margin-top:4px}
.goku-nav{display:flex;background:#ffffff;border-top:1px solid #ffd4a8;padding:6px;position:relative;z-index:2;border-radius:0 0 24px 24px;gap:2px}
.goku-nav-item{flex:1;display:flex;flex-direction:column;align-items:center;gap:3px;padding:9px 4px;border-radius:10px;cursor:pointer;transition:0.2s;position:relative}
.goku-nav-item svg{width:17px;height:17px;fill:#9ca3af;transition:0.2s}
.goku-nav-item span{font-size:9px;font-weight:900;color:#9ca3af;letter-spacing:0.3px;text-transform:uppercase;transition:0.2s}
.goku-nav-item:hover svg{fill:#ff6b00}
.goku-nav-item:hover span{color:#ff6b00}
.goku-nav-item.active{background:#fff7ed}
.goku-nav-item.active svg{fill:#ff6b00}
.goku-nav-item.active span{color:#ff6b00}
@keyframes goku-toast-in{0%{opacity:0;transform:translateX(-50%) translateY(-24px)}100%{opacity:1;transform:translateX(-50%) translateY(0)}}
@keyframes goku-toast-out{0%{opacity:1;transform:translateX(-50%) translateY(0)}100%{opacity:0;transform:translateX(-50%) translateY(-24px)}}
.goku-toast{position:fixed;left:50%;top:25px;width:92%;max-width:380px;background:#ffffff;border:2px solid #ffd4a8;padding:14px 16px;border-radius:18px;z-index:2147483651;box-shadow:0 8px 20px rgba(0,0,0,0.12);pointer-events:none;display:flex;align-items:center;gap:13px;color:#1f2937;animation:goku-toast-in 0.25s ease-out forwards,goku-toast-out 0.3s ease-in 3s forwards;will-change:transform,opacity;contain:layout style paint}
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
@keyframes goku-modal-in{0%{opacity:0;transform:scale(0.92)}100%{opacity:1;transform:scale(1)}}
@keyframes goku-modal-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(0.95)}}
.goku-modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,0.45);z-index:2147483652;display:flex;align-items:center;justify-content:center;animation:goku-overlay-in 0.2s ease-out forwards}
.goku-modal-overlay.closing{animation:goku-overlay-out 0.22s ease-in forwards}
.goku-modal{background:#ffffff;border:2px solid #ffd4a8;border-radius:20px;padding:24px 20px;max-width:320px;width:90%;text-align:center;box-shadow:0 10px 30px rgba(0,0,0,0.2);animation:goku-modal-in 0.25s ease-out forwards;contain:layout style paint}
.goku-modal-overlay.closing .goku-modal{animation:goku-modal-out 0.22s ease-in forwards}
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

        root.innerHTML = `
            <div id="goku-trigger">${GOKU_LOGO}</div>
            <div id="goku-panel">
                <div class="goku-header" id="goku-move">
                    <div class="goku-header-left">
                        <div class="goku-header-logo">${GOKU_LOGO}</div>
                        <div class="goku-header-info">
                            <div class="goku-header-title">GOKU AI</div>
                            <div class="goku-header-sub">7★ POWER • V${APP_VERSION}</div>
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
                                <div id="goku-rule-badge">🎲 WAITING</div>
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
                                <span id="goku-loss-count" style="color:#ef4444;font-weight:900;margin-left:6px;"></span>
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
                        <div class="goku-version-hero">
                            <div class="goku-version-icon"><i class="fa-solid fa-bolt"></i></div>
                            <div class="goku-version-title">GOKU AI</div>
                            <div class="goku-version-tag">V${APP_VERSION}</div>
                        </div>
                        <div class="goku-version-info">
                            <div class="goku-version-cell">
                                <div class="goku-version-cell-lbl">📅 Last Updated</div>
                                <div class="goku-version-cell-val">${APP_UPDATED}</div>
                            </div>
                            <div class="goku-version-cell">
                                <div class="goku-version-cell-lbl">🎯 Patterns</div>
                                <div class="goku-version-cell-val">70+ TOTAL</div>
                            </div>
                        </div>
                        <div class="goku-card">
                            <div class="goku-card-title" style="margin-bottom:8px;"><i class="fa-solid fa-code-branch"></i> VERSION NOTES</div>
                            <div class="goku-disc-item"><i class="fa-solid fa-circle-check"></i><div class="goku-disc-item-text"><b>V${APP_VERSION}:</b> 60 advanced + 10 basic patterns. Skip removed. Zig-Zag + Long Trend active. <b>🔄 2-loss recovery mode</b> — pattern match last 5 → 6th predict.</div></div>
                        </div>

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
                        <div class="goku-join-hero">
                            <div class="goku-join-hero-icon"><i class="fa-brands fa-telegram"></i></div>
                            <div class="goku-join-hero-title">JOIN US</div>
                            <div class="goku-join-hero-sub">Stay updated with signals & community</div>
                        </div>
                        <a class="goku-join-btn" href="https://t.me/+6zC6P_bq2hIzODVl" target="_blank" rel="noopener noreferrer">
                            <div class="goku-join-btn-icon"><i class="fa-brands fa-telegram"></i></div>
                            <div class="goku-join-btn-text">
                                <div class="goku-join-btn-title">Join Channel</div>
                                <div class="goku-join-btn-desc">Official updates & signals</div>
                            </div>
                            <i class="fa-solid fa-chevron-right goku-join-btn-arrow"></i>
                        </a>
                        <a class="goku-join-btn gc" href="https://t.me/+XrmZRCg7-09lM2Y9" target="_blank" rel="noopener noreferrer">
                            <div class="goku-join-btn-icon"><i class="fa-solid fa-users"></i></div>
                            <div class="goku-join-btn-text">
                                <div class="goku-join-btn-title">Join Group Chat</div>
                                <div class="goku-join-btn-desc">Community discussion</div>
                            </div>
                            <i class="fa-solid fa-chevron-right goku-join-btn-arrow"></i>
                        </a>
                        <div class="goku-card">
                            <div class="goku-card-title" style="margin-bottom:8px;"><i class="fa-solid fa-circle-info"></i> IMPORTANT</div>
                            <div class="goku-disc-item-text" style="text-align:center; padding:8px;">
                                This tool does <b>not</b> hack the game or guarantee wins. It applies pattern recognition on public game history for entertainment purposes only.
                            </div>
                        </div>
                        <div style="text-align:center; padding:8px 0; font-size:10px; color:#9ca3af; font-weight:800; letter-spacing:1px;">
                            <i class="fa-solid fa-heart" style="color:#ef4444;"></i>
                            &nbsp; PLAY RESPONSIBLY &nbsp;
                            <i class="fa-solid fa-heart" style="color:#ef4444;"></i>
                        </div>
                        <div class="goku-footer">Mybay later 💙</div>
                        <div class="goku-footer-ver">V${APP_VERSION} • ${APP_UPDATED}</div>
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

        const els = {
            trigger: document.getElementById('goku-trigger'),
            panel: document.getElementById('goku-panel'),
            closeBtn: document.getElementById('goku-close'),
            time: document.getElementById('goku-time'),
            period: document.getElementById('goku-period'),
            pred: document.getElementById('goku-pred'),
            ruleBadge: document.getElementById('goku-rule-badge'),
            predConfTxt: document.getElementById('goku-conf-txt'),
            predConfFill: document.getElementById('goku-conf-fill'),
            balVal: document.getElementById('goku-bal-val'),
            statusTxt: document.getElementById('goku-status-txt'),
            lossCount: document.getElementById('goku-loss-count'),
            botBtn: document.getElementById('goku-bot-btn'),
            safetyBadge: document.getElementById('goku-safety-badge'),
            levelsPreview: document.getElementById('goku-levels-preview'),
            historyBalls: document.getElementById('goku-history-balls'),
            flowBarContainer: document.getElementById('goku-flow-bar-container'),
            predLogList: document.getElementById('goku-prediction-log-list'),
            svgProgress: document.getElementById('goku-svg-progress'),
            histAccVal: document.getElementById('hist-acc-val'),
            histStatWin: document.getElementById('hist-stat-win'),
            histStatLoss: document.getElementById('hist-stat-loss'),
            histStatStreak: document.getElementById('hist-stat-streak'),
            histBestWin: document.getElementById('hist-best-win'),
            histWorstLoss: document.getElementById('hist-worst-loss'),
            histStatRounds: document.getElementById('hist-stat-rounds'),
            histNetAmount: document.getElementById('hist-net-amount'),
            histBadgeTotal: document.getElementById('hist-badge-total'),
            stTot: document.getElementById('st-tot'),
            stWin: document.getElementById('st-win'),
            stLos: document.getElementById('st-los'),
            stPro: document.getElementById('st-pro')
        };

        function getBall(num, size) {
            size = size || 24;
            let cls = 'green';
            if (num === 0 || num === 5) cls = 'violet';
            else if (num % 2 === 0) cls = 'red';
            return `<div class="goku-log-ball ${cls}" style="width:${size}px;height:${size}px;font-size:${Math.floor(size*0.45)}px;">${num}</div>`;
        }

        els.trigger.style.setProperty('display', 'flex', 'important');
        els.panel.style.display = 'none';
        els.trigger.onclick = () => { els.panel.style.display = 'flex'; els.trigger.style.setProperty('display', 'none', 'important'); };
        els.closeBtn.onclick = () => { els.panel.style.display = 'none'; els.trigger.style.setProperty('display', 'flex', 'important'); };

        function dragElement(elmnt, handle) {
            let pos1=0,pos2=0,pos3=0,pos4=0;
            handle.onmousedown = (e) => { e.preventDefault(); pos3=e.clientX; pos4=e.clientY; document.onmouseup=closeDrag; document.onmousemove=elementDrag; };
            handle.ontouchstart = (e) => { pos3=e.touches[0].clientX; pos4=e.touches[0].clientY; document.ontouchend=closeDrag; document.ontouchmove=elementTouchDrag; };
            function elementDrag(e) { pos1=pos3-e.clientX; pos2=pos4-e.clientY; pos3=e.clientX; pos4=e.clientY; elmnt.style.top=(elmnt.offsetTop-pos2)+"px"; elmnt.style.left=(elmnt.offsetLeft-pos1)+"px"; }
            function elementTouchDrag(e) { pos1=pos3-e.touches[0].clientX; pos2=pos4-e.touches[0].clientY; pos3=e.touches[0].clientX; pos4=e.touches[0].clientY; elmnt.style.top=(elmnt.offsetTop-pos2)+"px"; elmnt.style.left=(elmnt.offsetLeft-pos1)+"px"; }
            function closeDrag() { document.onmouseup=null; document.onmousemove=null; document.ontouchend=null; document.ontouchmove=null; }
        }
        dragElement(els.panel, document.getElementById('goku-move'));

        const navItems = document.querySelectorAll('.goku-nav-item');
        const tabEls = document.querySelectorAll('.goku-tab');
        navItems.forEach(item => {
            item.onclick = () => {
                const target = item.getAttribute('data-target');
                navItems.forEach(n => n.classList.remove('active'));
                item.classList.add('active');
                tabEls.forEach(p => p.classList.remove('active'));
                document.getElementById(target).classList.add('active');
            };
        });

        document.querySelectorAll('.goku-mode-btn').forEach(tab => {
            tab.onclick = () => {
                document.querySelectorAll('.goku-mode-btn').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                currentApiMode = tab.getAttribute('data-api');
                maxSeconds = parseInt(tab.getAttribute('data-sec'));
            };
        });

        let isBotRunning = false;
        let isAutoScale = false, autoScaleLevels = 5, fixedBaseBet = 10, martingaleMultiplier = 2, maxLevelsAllowed = 5;
        let currentLevel = 0, currentBalance = 0, betLevelsArray = [];
        let currentApiMode = "WinGo_1M", maxSeconds = 60, timerWorker;
        let latestHistoryData = [];
        let lastPeriodFetched = "", currentPredictionObj = null, activeBetPending = false;
        let stats = { total: 0, wins: 0, losses: 0, profit: 0.0, currentStreak: 0, bestWinStreak: 0, worstLossStreak: 0 };
        let predictionLogs = [];
        let currentRuleName = '🎲 WAITING';
        let consecutiveLosses = 0;   // ⭐ RECOVERY MODE tracker

        let isFetchingApi = false;
        let lastFetchAt = 0;
        let lastHistorySig = '';
        let lastPreviewSig = '';
        let lastBalVal = -1;
        let lastStatsSig = '';
        let lastLogsSig = '';
        let balSourceEl = null;

        let safety = {
            confirmBeforeStart: true, betPercentWarn: true, sessionAlert: true,
            stopLossAmount: 500, takeProfitAmount: 1000,
            stopLossActive: true, takeProfitActive: true
        };
        let botStartedAt = 0, sessionWarned = false;

        // ===================================================
        // GOKU PATTERN ENGINE V1.00.01
        // 60 Advanced (12) + 10 Basic (6) + Trend + ZigZag
        // + Recovery mode after 2 losses
        // ===================================================

        const LX_ADVANCED_PATTERNS = {
            P01:["B","S","B","B","S","B","S","S","B","S","B","B"],
            P02:["S","B","S","S","B","S","B","B","S","B","S","S"],
            P03:["B","B","S","B","S","S","B","S","B","B","S","S"],
            P04:["S","S","B","S","B","B","S","B","S","S","B","B"],
            P05:["B","S","S","B","B","S","B","B","S","S","B","S"],
            P06:["S","B","B","S","S","B","S","S","B","B","S","B"],
            P07:["B","S","B","S","S","B","B","S","B","S","S","B"],
            P08:["S","B","S","B","B","S","S","B","S","B","B","S"],
            P09:["B","B","S","S","B","S","S","B","B","S","B","S"],
            P10:["S","S","B","B","S","B","B","S","S","B","S","B"],
            P11:["B","B","B","S","B","S","S","S","B","B","S","B"],
            P12:["S","S","S","B","S","B","B","B","S","S","B","S"],
            P13:["B","B","S","S","S","B","B","B","S","B","S","S"],
            P14:["S","S","B","B","B","S","S","S","B","S","B","B"],
            P15:["B","S","S","S","B","B","S","B","B","B","S","S"],
            P16:["S","B","B","B","S","S","B","S","S","S","B","B"],
            P17:["B","B","B","B","S","S","B","S","S","B","B","S"],
            P18:["S","S","S","S","B","B","S","B","B","S","S","B"],
            P19:["B","B","S","B","B","B","S","S","S","B","S","S"],
            P20:["S","S","B","S","S","S","B","B","B","S","B","B"],
            P21:["B","S","B","B","S","S","B","S","S","B","B","S"],
            P22:["S","B","S","S","B","B","S","B","B","S","S","B"],
            P23:["B","B","S","B","B","S","S","B","S","S","B","B"],
            P24:["S","S","B","S","S","B","B","S","B","B","S","S"],
            P25:["B","S","S","B","S","B","B","S","B","B","S","S"],
            P26:["S","B","B","S","B","S","S","B","S","S","B","B"],
            P27:["B","B","S","S","B","B","S","B","S","S","B","S"],
            P28:["S","S","B","B","S","S","B","S","B","B","S","B"],
            P29:["B","S","B","B","B","S","S","B","B","S","S","B"],
            P30:["S","B","S","S","S","B","B","S","S","B","B","S"],
            P31:["B","B","S","B","S","B","B","S","S","B","S","S"],
            P32:["S","S","B","S","B","S","S","B","B","S","B","B"],
            P33:["B","S","S","B","B","B","S","B","S","S","B","S"],
            P34:["S","B","B","S","S","S","B","S","B","B","S","B"],
            P35:["B","B","S","S","B","S","B","B","B","S","S","B"],
            P36:["S","S","B","B","S","B","S","S","S","B","B","S"],
            P37:["B","S","B","B","S","S","S","B","B","S","B","B"],
            P38:["S","B","S","S","B","B","B","S","S","B","S","S"],
            P39:["B","B","B","S","S","B","S","B","B","S","S","S"],
            P40:["S","S","S","B","B","S","B","S","S","B","B","B"],
            P41:["B","S","B","B","B","S","B","S","S","S","B","S"],
            P42:["S","B","S","S","S","B","S","B","B","B","S","B"],
            P43:["B","B","S","B","S","B","S","S","B","B","B","S"],
            P44:["S","S","B","S","B","S","B","B","S","S","S","B"],
            P45:["B","S","S","S","B","S","B","B","S","B","B","B"],
            P46:["S","B","B","B","S","B","S","S","B","S","S","S"],
            P47:["B","B","S","S","S","S","B","B","S","B","S","B"],
            P48:["S","S","B","B","B","B","S","S","B","S","B","S"],
            P49:["B","S","B","S","B","B","S","S","S","B","B","S"],
            P50:["S","B","S","B","S","S","B","B","B","S","S","B"],
            P51:["B","B","S","B","S","S","S","B","B","B","S","B"],
            P52:["S","S","B","S","B","B","B","S","S","S","B","S"],
            P53:["B","S","S","B","B","S","S","S","B","S","B","B"],
            P54:["S","B","B","S","S","B","B","B","S","B","S","S"],
            P55:["B","B","B","S","B","B","S","S","B","S","S","B"],
            P56:["S","S","S","B","S","S","B","B","S","B","B","S"],
            P57:["B","S","B","B","S","B","S","S","B","S","S","B"],
            P58:["S","B","S","S","B","S","B","B","S","B","B","S"],
            P59:["B","B","S","B","S","S","B","B","S","S","B","B"],
            P60:["S","S","B","S","B","B","S","S","B","B","S","S"]
        };

        const LX_BIG_SMALL_PATTERNS = {
            ALTERNATING: [
                ["BIG","SMALL","BIG","SMALL","BIG","SMALL"],
                ["SMALL","BIG","SMALL","BIG","SMALL","BIG"]
            ],
            DOUBLE_BLOCK: [
                ["BIG","BIG","SMALL","SMALL","BIG","BIG"],
                ["SMALL","SMALL","BIG","BIG","SMALL","SMALL"]
            ],
            TRIPLE_BLOCK: [
                ["BIG","BIG","BIG","SMALL","SMALL","SMALL"],
                ["SMALL","SMALL","SMALL","BIG","BIG","BIG"]
            ],
            FOUR_STREAK: [
                ["BIG","BIG","BIG","BIG","SMALL","SMALL"],
                ["SMALL","SMALL","SMALL","SMALL","BIG","BIG"]
            ],
            ZIGZAG: [
                ["BIG","SMALL","BIG","BIG","SMALL","BIG"],
                ["SMALL","BIG","SMALL","SMALL","BIG","SMALL"]
            ],
            PAIR_REVERSAL: [
                ["BIG","BIG","SMALL","BIG","BIG","SMALL"],
                ["SMALL","SMALL","BIG","SMALL","SMALL","BIG"]
            ],
            STAIRCASE: [
                ["BIG","SMALL","SMALL","BIG","BIG","BIG"],
                ["SMALL","BIG","BIG","SMALL","SMALL","SMALL"]
            ],
            WAVE: [
                ["BIG","BIG","SMALL","BIG","SMALL","SMALL"],
                ["SMALL","SMALL","BIG","SMALL","BIG","BIG"]
            ],
            THREE_TWO_ONE: [
                ["BIG","BIG","BIG","SMALL","SMALL","BIG"],
                ["SMALL","SMALL","SMALL","BIG","BIG","SMALL"]
            ],
            IRREGULAR: [
                ["BIG","SMALL","SMALL","BIG","SMALL","BIG"],
                ["SMALL","BIG","BIG","SMALL","BIG","SMALL"]
            ]
        };

        function checkAdvancedPatterns(sides) {
            if (sides.length < 11) return null;
            const chrono = sides.slice(0, 11).reverse();
            for (const key in LX_ADVANCED_PATTERNS) {
                const p = LX_ADVANCED_PATTERNS[key];
                let match = true;
                for (let i = 0; i < 11; i++) {
                    if (chrono[i] !== p[i]) { match = false; break; }
                }
                if (match) {
                    return {
                        size: p[11] === 'B' ? 'BIG' : 'SMALL',
                        confidence: 84,
                        rule: `🎯 ${key}`
                    };
                }
            }
            return null;
        }

        function checkBasicPatterns(sides) {
            if (sides.length < 5) return null;
            const chrono = sides.slice(0, 5).reverse();
            for (const name in LX_BIG_SMALL_PATTERNS) {
                const list = LX_BIG_SMALL_PATTERNS[name];
                for (const p of list) {
                    let match = true;
                    for (let i = 0; i < 5; i++) {
                        if (chrono[i] !== p[i]) { match = false; break; }
                    }
                    if (match) {
                        return {
                            size: p[5],
                            confidence: 78,
                            rule: `📊 ${name}`
                        };
                    }
                }
            }
            return null;
        }

        function gokuPredict(history) {
            if (!history || history.length < 3) 
                return { size: 'BIG', confidence: 60, rule: '🎲 DEFAULT' };

            const sides = history.map(h => h.number >= 5 ? 'BIG' : 'SMALL');

            let currentStreak = 1;
            for (let i = 1; i < sides.length; i++) {
                if (sides[i] === sides[0]) currentStreak++;
                else break;
            }

            let altCount = 1;
            for (let i = 1; i < sides.length; i++) {
                if (sides[i] !== sides[i-1]) altCount++;
                else break;
            }

            let prevStreak = 0;
            if (sides.length >= 2 && sides[0] !== sides[1]) {
                for (let i = 1; i < sides.length; i++) {
                    if (sides[i] === sides[1]) prevStreak++;
                    else break;
                }
            }

            // ===== P0: ULTRA-BREAK (15+ same) =====
            if (currentStreak >= 15) {
                return {
                    size: sides[0] === 'BIG' ? 'SMALL' : 'BIG',
                    confidence: 92,
                    rule: `⚠️ ULTRA-BREAK(${currentStreak})`
                };
            }

            // ===== 🆕 P1: RECOVERY MODE (2+ losses) — FORCE PATTERN MATCH =====
            if (consecutiveLosses >= 2) {
                const patternResult = checkBasicPatterns(sides);
                if (patternResult) {
                    return {
                        size: patternResult.size,
                        confidence: Math.min(96, 82 + Math.min(consecutiveLosses - 2, 4) * 3),
                        rule: `🔄 RECOVERY(${consecutiveLosses}L) ${patternResult.rule}`
                    };
                }
                const advResult = checkAdvancedPatterns(sides);
                if (advResult) {
                    return {
                        size: advResult.size,
                        confidence: 86,
                        rule: `🔄 RECOVERY(${consecutiveLosses}L) ${advResult.rule}`
                    };
                }
                // No pattern → fallback to normal rules below
            }

            // ===== P2: LONG TREND FOLLOW (6-14) =====
            if (currentStreak >= 6) {
                return {
                    size: sides[0],
                    confidence: Math.min(96, 74 + currentStreak * 2),
                    rule: `🚀 TREND(${currentStreak})`
                };
            }

            // ===== P3: ZIG-ZAG (5+) =====
            if (altCount >= 5) {
                return {
                    size: sides[0] === 'BIG' ? 'SMALL' : 'BIG',
                    confidence: Math.min(94, 76 + altCount * 2),
                    rule: `⚡ ZIG-ZAG(${altCount})`
                };
            }

            // ===== P4: ADVANCED PATTERNS =====
            const adv = checkAdvancedPatterns(sides);
            if (adv) return adv;

            // ===== P5: BASIC PATTERNS =====
            const basic = checkBasicPatterns(sides);
            if (basic) return basic;

            // ===== P6: EARLY TREND (4-5) =====
            if (currentStreak >= 4) {
                return {
                    size: sides[0],
                    confidence: 74,
                    rule: `📈 EARLY-TREND(${currentStreak})`
                };
            }

            // ===== P7: TREND SHIFT =====
            if (prevStreak >= 5) {
                return {
                    size: sides[0],
                    confidence: 75,
                    rule: `🔄 TREND-SHIFT(${prevStreak})`
                };
            }

            // ===== P8: 3-BREAK =====
            if (sides[0] === sides[1] && sides[1] === sides[2]) {
                return {
                    size: sides[0] === 'BIG' ? 'SMALL' : 'BIG',
                    confidence: 66,
                    rule: '📉 3-BREAK'
                };
            }

            // ===== P9: 2-BREAK =====
            if (sides[0] === sides[1]) {
                return {
                    size: sides[0] === 'BIG' ? 'SMALL' : 'BIG',
                    confidence: 62,
                    rule: '📊 2-BREAK'
                };
            }

            // ===== P10: MINORITY =====
            const last5Arr = sides.slice(0, 5);
            const bigCount = last5Arr.filter(s => s === 'BIG').length;
            return {
                size: bigCount >= 3 ? 'SMALL' : 'BIG',
                confidence: 60,
                rule: '🎲 MINORITY'
            };
        }

        function updatePredictionDisplay() {
            if (!latestHistoryData || latestHistoryData.length === 0) {
                els.pred.innerHTML = 'WAITING...'; els.pred.className = 'waiting';
                els.ruleBadge.innerText = '🎲 WAITING';
                return;
            }
            let result;
            try { result = gokuPredict(latestHistoryData); } 
            catch(e) { result = { size: 'BIG', confidence: 60, rule: '🎲 DEFAULT' }; }

            const predSize = result.size || 'BIG';
            const conf = result.confidence || 70;
            currentPredictionObj = { size: predSize, conf };
            currentRuleName = result.rule || '🎲 DEFAULT';

            els.pred.innerHTML = predSize;
            els.pred.className = predSize === 'BIG' ? 'big' : 'small';
            els.predConfTxt.innerText = conf + '%';
            els.predConfFill.style.width = conf + '%';
            updateRuleBadge();
        }

        function updateRuleBadge() {
            if (!els.ruleBadge) return;
            const conf = currentPredictionObj ? currentPredictionObj.conf : 0;
            let color = '#6b7280';
            if (conf >= 85) color = '#16a34a';
            else if (conf >= 72) color = '#ff6b00';
            else color = '#ef4444';
            els.ruleBadge.style.color = color;
            els.ruleBadge.innerText = `${currentRuleName} • ${conf}%`;
        }

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

                    els.period.innerText = currentPeriodStr;
                    renderHistory(historyList);

                    if (lastPeriodFetched && lastPeriodFetched !== currentPeriodStr) {
                        if (activeBetPending) checkWinLoss(lastIssue);

                        els.pred.innerHTML = 'CHARGING...';
                        els.pred.className = 'waiting';
                        els.ruleBadge.innerText = '🔄 SCANNING...';

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
            els.historyBalls.innerHTML = list.slice(0, 5).map(item => getBall(item.number, 22)).join('');
        }

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

                els.time.innerText = `${String(Math.floor(secondsLeft / 60)).padStart(2,'0')}:${String(secondsLeft % 60).padStart(2,'0')}`;

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
            if (!balSourceEl || !balSourceEl.isConnected) {
                balSourceEl = document.querySelector('.Wallet__C-balance-l1 div, .balance-amount, #balance, .balance, .money');
            }
            const v = balSourceEl ? balSourceEl.innerText.replace(/[^\d.]/g,'') : "0.00";
            const nv = parseFloat(v) || 0;
            if (nv === lastBalVal) return;
            lastBalVal = nv;
            currentBalance = nv;
            els.balVal.innerText = "₹" + currentBalance.toFixed(2);
        }

        function updateSafetyBadge() {
            const active = safety.stopLossActive || safety.takeProfitActive || safety.confirmBeforeStart;
            els.safetyBadge.style.background = active ? '#fff7ed' : '#f3f4f6';
            els.safetyBadge.style.color = active ? '#ff6b00' : '#9ca3af';
            els.safetyBadge.innerText = active ? 'ON' : 'OFF';
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
            els.levelsPreview.innerHTML = `${arr.join(' • ')}<br>TOTAL REQ: <b>₹${total}</b>`;
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

        function showToast(type, title, desc) {
            const t = document.createElement('div');
            t.className = 'goku-toast ' + type;
            const icon = type === 'win' ? 'fa-solid fa-bolt' : (type === 'loss' ? 'fa-solid fa-heart-crack' : 'fa-solid fa-shield-halved');
            t.innerHTML = `<div class="goku-toast-icon"><i class="${icon}"></i></div><div class="goku-toast-content"><div class="goku-toast-header"><div class="goku-toast-title">${title}</div><div class="goku-toast-time">now</div></div><div class="goku-toast-desc">${desc}</div></div>`;
            document.body.appendChild(t);
            setTimeout(() => { if (t) t.remove(); }, 3400);
        }

        els.botBtn.onclick = () => {
            if (!isBotRunning) {
                const startBot = () => {
                    applySafety();
                    stats.profit = 0;
                    currentLevel = 0;
                    consecutiveLosses = 0;   // ⭐ reset recovery mode
                    updateStatsUI();
                    isBotRunning = true;
                    activeBetPending = false;
                    botStartedAt = Date.now();
                    sessionWarned = false;
                    els.botBtn.innerText = "🛑 STOP";
                    els.botBtn.classList.add("running");
                    els.statusTxt.innerText = 'KI: CHARGED ⚡';
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
                els.botBtn.innerText = "⚡ START";
                els.botBtn.classList.remove("running");
                els.statusTxt.innerText = 'KI: DORMANT';
                els.pred.innerHTML = 'WAITING...'; els.pred.className = 'waiting';
                els.ruleBadge.innerText = '🎲 WAITING';
                if (els.lossCount) els.lossCount.innerText = '';
            }
        };

        function autoStopBot(reason) {
            if (!isBotRunning) return;
            isBotRunning = false;
            botStartedAt = 0;
            els.botBtn.innerText = "⚡ START";
            els.botBtn.classList.remove("running");
            els.statusTxt.innerText = 'KI: DORMANT';
            els.pred.className = 'waiting';
            els.pred.innerHTML = 'WAITING...';
            els.ruleBadge.innerText = '🎲 WAITING';
            if (els.lossCount) els.lossCount.innerText = '';
            showToast('info', reason.title, reason.desc);
        }

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
                consecutiveLosses = 0;   // ⭐ reset on win
            } else {
                stats.losses++;
                totalProfitThisRound -= amt;
                currentLevel++;
                if (currentLevel >= maxLevelsAllowed) currentLevel = 0;
                consecutiveLosses++;     // ⭐ increment on loss
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
            els.stTot.innerText = stats.total;
            els.stWin.innerText = stats.wins;
            els.stLos.innerText = stats.losses;
            els.stPro.innerText = (stats.profit >= 0 ? "+₹" : "-₹") + Math.abs(stats.profit).toFixed(2);
            els.stPro.className = stats.profit >= 0 ? "goku-info-val green" : "goku-info-val red";

            // ⭐ Update recovery mode indicator
            if (els.lossCount) {
                if (consecutiveLosses >= 2) {
                    els.lossCount.innerText = `🔥 RECOVERY x${consecutiveLosses}`;
                    els.lossCount.style.color = '#ef4444';
                } else if (consecutiveLosses === 1) {
                    els.lossCount.innerText = `⚠️ 1L`;
                    els.lossCount.style.color = '#ff6b00';
                } else {
                    els.lossCount.innerText = '';
                }
            }
        }

        function renderHistoryPageUI() {
            const accRate = stats.total > 0 ? Math.round((stats.wins / stats.total) * 100) : 0;
            const statsSig = `${accRate}|${stats.wins}|${stats.losses}|${stats.total}|${stats.currentStreak}|${stats.bestWinStreak}|${stats.worstLossStreak}|${stats.profit.toFixed(2)}|${predictionLogs.length}`;
            if (statsSig !== lastStatsSig) {
                lastStatsSig = statsSig;
                els.histAccVal.innerText = `${accRate}%`;
                if (els.svgProgress) els.svgProgress.style.strokeDashoffset = 283 - (283 * (accRate / 100));
                els.histStatWin.innerText = stats.wins;
                els.histStatLoss.innerText = stats.losses;
                els.histStatRounds.innerText = stats.total;
                els.histStatStreak.innerText = stats.currentStreak > 0 ? `+${stats.currentStreak}` : `${stats.currentStreak}`;
                els.histStatStreak.style.color = stats.currentStreak >= 0 ? '#16a34a' : '#ef4444';
                els.histBestWin.innerText = stats.bestWinStreak;
                els.histWorstLoss.innerText = stats.worstLossStreak;
                els.histNetAmount.innerText = (stats.profit >= 0 ? "+₹" : "-₹") + Math.abs(stats.profit).toFixed(2);
                els.histNetAmount.style.color = stats.profit >= 0 ? "#16a34a" : "#ef4444";
                els.histBadgeTotal.innerText = predictionLogs.length;
            }

            const logsSig = predictionLogs.map(l => l.period + ':' + l.status + ':' + l.number).join('|');
            if (logsSig !== lastLogsSig) {
                lastLogsSig = logsSig;
                let flowHtml = '';
                predictionLogs.slice(0, 20).reverse().forEach(log => {
                    const cls = log.status === 'WIN' ? 'flow-win' : (log.status === 'LOSS' ? 'flow-loss' : 'flow-pending');
                    flowHtml += `<div class="goku-flow-bar ${cls}"></div>`;
                });
                els.flowBarContainer.innerHTML = flowHtml;

                let logsHtml = '';
                predictionLogs.forEach(log => {
                    const cardCls = log.status === 'WIN' ? 'win' : (log.status === 'LOSS' ? 'loss' : '');
                    const numHtml = (typeof log.number === 'number')
                        ? getBall(log.number, 34)
                        : `<div class="goku-log-ball pending" style="width:34px;height:34px;">?</div>`;
                    logsHtml += `<div class="goku-log-card ${cardCls}">
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
                        </div>
                    </div>`;
                });
                els.predLogList.innerHTML = logsHtml;
            }
        }

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

        startLiveClock();
        fetchApiData();
        renderHistoryPageUI();
        updateLevelsPreview();
        updateSafetyBadge();
    }
})();
