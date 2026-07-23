// ==========================================
// Neura Studio - Ultra Premium Footer
// ==========================================

const footerHTML = `
<footer style="background: #111111; color: #FFFFFF; padding: 60px 20px 30px; margin-top: 80px; border-top: 1px solid #333; font-family: -apple-system, sans-serif;">
    <div style="max-width: 1200px; margin: 0 auto; display: flex; flex-wrap: wrap; justify-content: space-between; gap: 40px;">
        
        <!-- Brand Section -->
        <div style="flex: 1; min-width: 250px;">
            <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px;">
                <img src="8179.png" style="width: 45px; height: 45px; border-radius: 50%;">
                <span style="font-size: 22px; font-weight: 800; letter-spacing: -0.5px;">NEURA STUDIO</span>
            </div>
            <p style="color: #888; font-size: 14px; line-height: 1.6; margin-bottom: 20px;">
                Pioneering the future of AI, Web, and Hardware with the Omni-Domain Architecture of Nova Script. Built to surpass limitations.
            </p>
        </div>

        <!-- Ecosystem Links -->
        <div style="flex: 1; min-width: 200px;">
            <h3 style="font-size: 16px; margin-bottom: 20px; color: #FFF;">Ecosystem</h3>
            <ul style="list-style: none; padding: 0; margin: 0; color: #888; font-size: 14px; line-height: 2.2;">
                <li><a onclick="nav('home')" style="color: #888; text-decoration: none; cursor: pointer; transition: 0.2s;" onmouseover="this.style.color='#00A2FF'" onmouseout="this.style.color='#888'">Nova OS Kernel</a></li>
                <li><a onclick="nav('learn')" style="color: #888; text-decoration: none; cursor: pointer; transition: 0.2s;" onmouseover="this.style.color='#00A2FF'" onmouseout="this.style.color='#888'">Documentation</a></li>
                <li><a onclick="nav('hub')" style="color: #888; text-decoration: none; cursor: pointer; transition: 0.2s;" onmouseover="this.style.color='#00A2FF'" onmouseout="this.style.color='#888'">Nova Hub (NPM)</a></li>
                <li><a onclick="nav('ecosystem')" style="color: #888; text-decoration: none; cursor: pointer; transition: 0.2s;" onmouseover="this.style.color='#00A2FF'" onmouseout="this.style.color='#888'">IDE Extensions</a></li>
            </ul>
        </div>

        <!-- Social & Support Links -->
        <div style="flex: 1; min-width: 200px;">
            <h3 style="font-size: 16px; margin-bottom: 20px; color: #FFF;">Connect</h3>
            <div style="display: flex; gap: 15px; margin-bottom: 20px;">
                <a href="https://github.com/NeuraStudio" target="_blank" style="background: #222; padding: 10px; border-radius: 12px; transition: 0.3s; display: inline-flex; justify-content: center; align-items: center;" onmouseover="this.style.background='#333'" onmouseout="this.style.background='#222'">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" style="width: 24px; height: 24px; filter: invert(1);">
                </a>
                <a href="#" style="background: #222; padding: 10px; border-radius: 12px; transition: 0.3s; display: inline-flex; justify-content: center; align-items: center;" onmouseover="this.style.background='#FF0000'" onmouseout="this.style.background='#222'">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg" style="width: 24px; height: 24px;">
                </a>
            </div>
            <p style="color: #888; font-size: 14px;">Built by Chief Architect Javed</p>
        </div>
    </div>
    
    <!-- Copyright Bar -->
    <div style="max-width: 1200px; margin: 50px auto 0; padding-top: 20px; border-top: 1px solid #333; text-align: center; color: #666; font-size: 13px;">
        &copy; 2026 Neura Studio. All rights reserved. Nova Singularity Engine.
    </div>
</footer>
`;

document.body.insertAdjacentHTML('beforeend', footerHTML);
console.log("[+] Ultra Premium Footer Injected!");
