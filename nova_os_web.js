// ==========================================
// Nova OS - Web Cloud Desktop Simulator
// ==========================================

const osHTML = `
<div id="novaOS-Container" style="margin: 60px auto; max-width: 1000px; height: 600px; background: url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop') center/cover; border-radius: 24px; box-shadow: 0 30px 60px rgba(0,0,0,0.3); position: relative; overflow: hidden; border: 1px solid var(--border);">
    
    <!-- Top Bar -->
    <div style="background: rgba(0,0,0,0.5); backdrop-filter: blur(10px); padding: 5px 20px; display: flex; justify-content: space-between; align-items: center; color: white; font-size: 13px; font-weight: bold;">
        <div style="display: flex; gap: 15px;">
            <span> Nova OS</span>
            <span>File</span>
            <span>Edit</span>
            <span>View</span>
        </div>
        <div style="display: flex; gap: 15px;">
            <span>🔋 100%</span>
            <span>🌐 Connected</span>
            <span id="os-clock">12:00 PM</span>
        </div>
    </div>

    <!-- Active Window (Nova AI Task Manager) -->
    <div id="os-window" style="position: absolute; top: 100px; left: 150px; width: 600px; height: 350px; background: rgba(255,255,255,0.85); backdrop-filter: blur(20px); border-radius: 16px; box-shadow: 0 20px 40px rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.5); display: flex; flex-direction: column;">
        <!-- Window Header -->
        <div style="padding: 12px 20px; border-bottom: 1px solid rgba(0,0,0,0.1); display: flex; align-items: center; cursor: grab;">
            <div style="display: flex; gap: 8px;">
                <div style="width:12px; height:12px; border-radius:50%; background:#FF5F56;"></div>
                <div style="width:12px; height:12px; border-radius:50%; background:#FFBD2E;"></div>
                <div style="width:12px; height:12px; border-radius:50%; background:#27C93F;"></div>
            </div>
            <span style="margin-left: auto; margin-right: auto; font-weight: bold; font-size: 14px; color: #1D1D1F;">Nova AI - Task Manager</span>
        </div>
        
        <!-- Window Body -->
        <div style="padding: 20px; flex: 1; font-family: monospace; font-size: 14px; color: #333; overflow-y: auto;" id="os-console">
            <span style="color:#0066CC;">[Nova OS]</span> Booting Cloud Kernel...<br>
            <span style="color:#0066CC;">[Nova OS]</span> 18,000+ Languages Surpassed.<br>
            <span style="color:#0066CC;">[Nova OS]</span> System running at 0.01ms latency.<br><br>
            <button onclick="runTask()" style="background:#00A2FF; color:white; border:none; padding:10px 20px; border-radius:8px; cursor:pointer; font-weight:bold;">Run Neural Purge</button>
        </div>
    </div>

    <!-- Dock -->
    <div style="position: absolute; bottom: 15px; left: 50%; transform: translateX(-50%); background: rgba(255,255,255,0.3); backdrop-filter: blur(20px); padding: 10px 20px; border-radius: 20px; display: flex; gap: 15px; border: 1px solid rgba(255,255,255,0.4);">
        <img src="8179.png" style="width: 45px; height: 45px; border-radius: 50%; cursor: pointer; transition: 0.2s;" onmouseover="this.style.transform='scale(1.2)'" onmouseout="this.style.transform='scale(1)'">
        <img src="8180.png" style="width: 45px; height: 45px; border-radius: 50%; cursor: pointer; transition: 0.2s;" onmouseover="this.style.transform='scale(1.2)'" onmouseout="this.style.transform='scale(1)'">
    </div>
</div>

<script>
    // Live Clock
    setInterval(() => {
        let date = new Date();
        document.getElementById('os-clock').innerText = date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    }, 1000);

    // AI Purge Simulation
    function runTask() {
        let cons = document.getElementById('os-console');
        cons.innerHTML += '<br><span style="color:#FF5F56;">[Purge]</span> Killing Background Bloatware...';
        setTimeout(() => {
            cons.innerHTML += '<br><span style="color:#27C93F;">[Success]</span> 550MB RAM Freed. God-Speed Active.';
        }, 1000);
    }
</script>
`;

const homeSection = document.getElementById('home');
if(homeSection) {
    homeSection.insertAdjacentHTML('beforeend', osHTML);
}
console.log("[+] Nova OS Web Simulator Injected!");
