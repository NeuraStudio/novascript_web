// ==========================================
// Nova Documentation - 15 Chapter UI
// ==========================================

const learnHTML = `
<div id="learn" class="page" style="display:none; padding: 60px 20px; max-width: 1100px; margin: 0 auto;">
    <h1 style="font-size: 3.5rem; letter-spacing: -1px; margin-bottom: 10px;">Nova Documentation</h1>
    <p style="color: #5E5E73; font-size: 1.2rem; margin-bottom: 50px;">The official 15-Chapter guide to the Omni-Domain Singularity Engine.</p>
    
    <div style="display: flex; gap: 40px; flex-wrap: wrap;">
        
        <!-- Sidebar Navigation -->
        <div style="flex: 1; min-width: 250px; background: #1D1D1F; padding: 25px; border-radius: 20px; border: 1px solid #333; height: fit-content;">
            <h3 style="color: #FFF; margin-bottom: 20px; font-size: 18px;">Chapters</h3>
            <ul style="list-style: none; padding: 0; margin: 0; color: #888; font-size: 15px; line-height: 2.4;">
                <li style="color: #00A2FF; font-weight: bold; cursor: pointer;">1. The Bootstrapped Core</li>
                <li style="cursor: pointer; transition: 0.2s;" onmouseover="this.style.color='#FFF'" onmouseout="this.style.color='#888'">2. Three Memory Modes</li>
                <li style="cursor: pointer; transition: 0.2s;" onmouseover="this.style.color='#FFF'" onmouseout="this.style.color='#888'">3. 50-Point EBNF Grammar</li>
                <li style="cursor: pointer; transition: 0.2s;" onmouseover="this.style.color='#FFF'" onmouseout="this.style.color='#888'">4. 18 Omni-Domain APIs</li>
                <li style="cursor: pointer; transition: 0.2s;" onmouseover="this.style.color='#FFF'" onmouseout="this.style.color='#888'">15. Interactive IDE (REPL)</li>
            </ul>
        </div>
        
        <!-- Chapter Content -->
        <div style="flex: 3; min-width: 300px; background: #111; padding: 40px; border-radius: 20px; border: 1px solid #333; box-shadow: 0 10px 30px rgba(0,0,0,0.2);">
            <h2 style="color: #FFF; font-size: 28px; margin-bottom: 20px;">Chapter 1: The Bootstrapped Core</h2>
            <p style="color: #AAA; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
                Nova is a fully bootstrapped, sovereign meta-compiler. It is not a wrapper. It absorbs the architectural logic of GCC, LLVM, and V8 to natively surpass <strong>18,000+ programming languages</strong> via the Universal ABI.
            </p>
            <p style="color: #AAA; font-size: 16px; line-height: 1.8; margin-bottom: 30px;">
                Designed for extreme performance, the VM executes at 0.01ms latency, making it capable of replacing the entire stack—from AI and Game Engines to Robotics and Web.
            </p>
            
            <h3 style="color: #FFF; margin-bottom: 15px; font-size: 18px;">Locked Input Syntax (Example)</h3>
            <div style="background: #000; padding: 20px; border-radius: 12px; border: 1px solid #222; font-family: monospace; color: #E5E5EA; font-size: 15px;">
                <span style="color: #888;">// Prompting the user securely</span><br>
                <span style="color: #00A2FF;">Nova</span>.<span style="color: #FFBD2E;">ask</span>.<span style="color: #FFBD2E;">user</span>(<span style="color: #27C93F;">"name:"</span>)<br><br>
                <span style="color: #888;">// Displaying the result</span><br>
                <span style="color: #00A2FF;">Nova</span>.<span style="color: #FFBD2E;">show</span>(name)
            </div>
        </div>

    </div>
</div>
`;

document.body.insertAdjacentHTML('beforeend', learnHTML);

// Hooking it to the Navbar
const navLinks = document.querySelector('.nav-links');
if(navLinks) {
    const learnLinkHTML = `<a onclick="nav('learn')" id="nav-learn" style="color: #5E5E73; text-decoration: none; font-weight: 600; cursor: pointer; padding-bottom: 5px; margin-right: 15px;">Learn</a>`;
    navLinks.insertAdjacentHTML('afterbegin', learnLinkHTML);
}
console.log("[+] Documentation UI Injected Successfully!");
