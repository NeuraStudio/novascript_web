// ==========================================
// Nova Hub - Package Manager Web Interface
// ==========================================

const hubHTML = `
<div id="hub" class="page" style="display:none; padding: 60px 20px; max-width: 1200px; margin: 0 auto;">
    <div style="text-align: center; margin-bottom: 50px;">
        <h1 style="font-size: 3.5rem; letter-spacing: -1px; margin-bottom: 15px;">Nova Hub</h1>
        <p style="color: #5E5E73; font-size: 1.2rem;">Explore 1500+ Omnidomain Commands & 18 API Groups.</p>
        
        <!-- Search Bar -->
        <div style="margin-top: 30px; display: flex; justify-content: center;">
            <input type="text" placeholder="Search packages (e.g., Nova.ai, Nova.os)..." style="width: 100%; max-width: 600px; padding: 18px 25px; border-radius: 30px; border: 1px solid #333; background: #111; color: white; font-size: 16px; outline: none; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
            <button style="margin-left: -50px; background: #0066CC; border: none; border-radius: 30px; padding: 0 25px; color: white; font-weight: bold; cursor: pointer;">Search</button>
        </div>
    </div>

    <!-- Package Grid -->
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px;">
        
        <!-- AI Package -->
        <div style="background: #1D1D1F; border-radius: 20px; padding: 30px; border: 1px solid #333; transition: 0.3s; cursor: pointer;" onmouseover="this.style.borderColor='#00A2FF'" onmouseout="this.style.borderColor='#333'">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                <h2 style="margin: 0; color: #FFF; font-size: 22px;">Nova.ai.*</h2>
                <span style="background: #00A2FF22; color: #00A2FF; padding: 5px 12px; border-radius: 20px; font-size: 12px; font-weight: bold;">v1.0.0</span>
            </div>
            <p style="color: #888; font-size: 14px; line-height: 1.6; margin-bottom: 20px;">Direct GPU Matrix computation and Local Neural Engine execution without external Python dependencies.</p>
            <code style="background: #000; padding: 8px 12px; border-radius: 8px; color: #00FF88; font-size: 13px;">import Nova.ai</code>
        </div>

        <!-- OS Package -->
        <div style="background: #1D1D1F; border-radius: 20px; padding: 30px; border: 1px solid #333; transition: 0.3s; cursor: pointer;" onmouseover="this.style.borderColor='#FF5F56'" onmouseout="this.style.borderColor='#333'">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                <h2 style="margin: 0; color: #FFF; font-size: 22px;">Nova.os.*</h2>
                <span style="background: #FF5F5622; color: #FF5F56; padding: 5px 12px; border-radius: 20px; font-size: 12px; font-weight: bold;">Core</span>
            </div>
            <p style="color: #888; font-size: 14px; line-height: 1.6; margin-bottom: 20px;">Micro-kernel level hardware access, process management, and RAM optimization (God-Speed mode).</p>
            <code style="background: #000; padding: 8px 12px; border-radius: 8px; color: #00FF88; font-size: 13px;">import Nova.os</code>
        </div>

        <!-- Robotics Package -->
        <div style="background: #1D1D1F; border-radius: 20px; padding: 30px; border: 1px solid #333; transition: 0.3s; cursor: pointer;" onmouseover="this.style.borderColor='#FFBD2E'" onmouseout="this.style.borderColor='#333'">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                <h2 style="margin: 0; color: #FFF; font-size: 22px;">Nova.robot.*</h2>
                <span style="background: #FFBD2E22; color: #FFBD2E; padding: 5px 12px; border-radius: 20px; font-size: 12px; font-weight: bold;">Unsafe</span>
            </div>
            <p style="color: #888; font-size: 14px; line-height: 1.6; margin-bottom: 20px;">Low-level unsafe memory blocks for direct motor control, sensor telemetry, and IoT bridging.</p>
            <code style="background: #000; padding: 8px 12px; border-radius: 8px; color: #00FF88; font-size: 13px;">import Nova.robot</code>
        </div>

    </div>
</div>
`;

document.body.insertAdjacentHTML('beforeend', hubHTML);

// Hooking it to the Navbar
const navLinks = document.querySelector('.nav-links');
if(navLinks) {
    const hubLinkHTML = `<a onclick="nav('hub')" id="nav-hub" style="color: #5E5E73; text-decoration: none; font-weight: 600; cursor: pointer; padding-bottom: 5px; margin-right: 15px;">Nova Hub</a>`;
    navLinks.insertAdjacentHTML('afterbegin', hubLinkHTML);
}
console.log("[+] Nova Hub UI Injected Successfully!");
