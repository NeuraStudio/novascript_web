// ==========================================
// Nova Ecosystem - Extensions Download Page
// ==========================================

const ecosystemHTML = `
<div id="ecosystem" class="page">
    <h1 style="font-size: 3.5rem; text-align: center; margin-bottom: 20px; letter-spacing: -1px;">Nova Ecosystem</h1>
    <p style="text-align:center; color:#5E5E73; font-size:1.2rem; margin-bottom:60px;">Download official plugins to supercharge your favorite IDE with Nova's 50-Point Grammar and Neura AI.</p>
    
    <div style="display:flex; justify-content:center; gap:40px; flex-wrap:wrap;">
        
        <!-- VS Code Card -->
        <div style="background:white; border-radius:24px; padding:50px 40px; width:350px; text-align:center; box-shadow:0 20px 50px rgba(0,0,0,0.06); border:1px solid var(--border); transition:0.3s; cursor:pointer;" onmouseover="this.style.transform='translateY(-10px)'; this.style.borderColor='#00A2FF';" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='var(--border)';">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" style="width:90px; height:90px; margin-bottom:25px;">
            <h2 style="margin:0 0 15px 0; font-size:24px;">VS Code</h2>
            <p style="color:#666; margin-bottom:40px; font-size:15px; line-height:1.6;">Official Nova syntax highlighting, auto-completion, and native hardware API snippets.</p>
            <a href="#" style="background:#0066CC; color:white; padding:14px 35px; border-radius:30px; text-decoration:none; font-weight:bold; font-size:15px; display:inline-block; transition:0.2s;" onmouseover="this.style.background='#004C99'" onmouseout="this.style.background='#0066CC'">Download .vsix</a>
            <p style="color:#999; font-size:12px; margin-top:15px; font-family:monospace;">v1.0.2 | 4.2 MB</p>
        </div>
        
        <!-- PyCharm Card -->
        <div style="background:white; border-radius:24px; padding:50px 40px; width:350px; text-align:center; box-shadow:0 20px 50px rgba(0,0,0,0.06); border:1px solid var(--border); transition:0.3s; cursor:pointer;" onmouseover="this.style.transform='translateY(-10px)'; this.style.borderColor='#000000';" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='var(--border)';">
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/1d/PyCharm_Icon.svg" style="width:90px; height:90px; margin-bottom:25px;">
            <h2 style="margin:0 0 15px 0; font-size:24px;">PyCharm / IntelliJ</h2>
            <p style="color:#666; margin-bottom:40px; font-size:15px; line-height:1.6;">JetBrains plugin for Nova Singularity Engine. Full integration with Nova AI & Quantum Core.</p>
            <a href="#" style="background:#000000; color:white; padding:14px 35px; border-radius:30px; text-decoration:none; font-weight:bold; font-size:15px; display:inline-block; transition:0.2s;" onmouseover="this.style.background='#333333'" onmouseout="this.style.background='#000000'">Download .jar</a>
            <p style="color:#999; font-size:12px; margin-top:15px; font-family:monospace;">v1.0.2 | 5.8 MB</p>
        </div>

    </div>
</div>
`;

// Inject the page HTML
document.body.insertAdjacentHTML('beforeend', ecosystemHTML);

// Inject Navigation Link cleanly before the Login button
const navLinks = document.querySelector('.nav-links');
if(navLinks) {
    const ecoLinkHTML = `<a onclick="nav('ecosystem')" id="nav-ecosystem" style="color: #5E5E73; text-decoration: none; font-weight: 600; cursor: pointer; padding-bottom: 5px; margin-right: 15px;">Ecosystem</a>`;
    
    // Find the login button (which has 'authModal' in its onclick)
    const loginBtn = Array.from(navLinks.children).find(child => child.outerHTML.includes('authModal'));
    
    if (loginBtn) {
        loginBtn.insertAdjacentHTML('beforebegin', ecoLinkHTML);
    } else {
        navLinks.insertAdjacentHTML('beforeend', ecoLinkHTML);
    }
}
console.log("[+] Ecosystem Page Injected Successfully!");
