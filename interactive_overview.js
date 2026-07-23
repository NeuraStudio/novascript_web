const learnPage = document.getElementById('learn');
if (learnPage) {
    learnPage.innerHTML = `
    <div style="padding:40px 20px; max-width:1200px; margin:0 auto; font-family:sans-serif;">
        <h1 style="font-size:3.5rem; margin-bottom:10px; color:#111; letter-spacing:-1px;">Nova Overview</h1>
        <p style="color:#666; font-size:1.2rem; margin-bottom:40px;">The Ultimate 24-Chapter Guide to Nova Singularity Engine.</p>
        <div style="display:flex; gap:30px; flex-wrap:wrap;">
            
            <!-- Chapter Navigation -->
            <div style="flex:1; min-width:250px; background:#1D1D1F; padding:30px; border-radius:20px; color:#FFF; height: fit-content; border:1px solid #333;">
                <h3 style="margin-bottom:20px; font-size:18px; color:#FFF;">Chapters (1-24)</h3>
                <ul id="chapter-list" style="list-style:none; padding:0; margin:0; color:#888; font-size:15px; line-height:2.6;">
                    <li onclick="loadChapter(1)" id="ch1" style="color:#00A2FF; font-weight:bold; cursor:pointer; transition:0.2s;">1. Core Bootstrapping</li>
                    <li onclick="loadChapter(2)" id="ch2" style="cursor:pointer; transition:0.2s;" onmouseover="this.style.color='#FFF'" onmouseout="if(this.style.fontWeight!=='bold')this.style.color='#888'">2. EBNF Formal Grammar</li>
                    <li onclick="loadChapter(3)" id="ch3" style="cursor:pointer; transition:0.2s;" onmouseover="this.style.color='#FFF'" onmouseout="if(this.style.fontWeight!=='bold')this.style.color='#888'">3. Three Memory Modes</li>
                    <li onclick="loadChapter(4)" id="ch4" style="cursor:pointer; transition:0.2s;" onmouseover="this.style.color='#FFF'" onmouseout="if(this.style.fontWeight!=='bold')this.style.color='#888'">4. Omni-Domain APIs</li>
                    <li onclick="loadChapter(24)" id="ch24" style="cursor:pointer; transition:0.2s;" onmouseover="this.style.color='#FFF'" onmouseout="if(this.style.fontWeight!=='bold')this.style.color='#888'">24. Universal Package ABI</li>
                </ul>
            </div>
            
            <!-- Dynamic Content Area -->
            <div id="chapter-content" style="flex:2.5; min-width:300px; background:#111; padding:50px; border-radius:20px; color:#FFF; box-shadow: 0 20px 50px rgba(0,0,0,0.5); border:1px solid #333; position:relative; overflow:hidden;">
                
                <!-- Background Accent -->
                <div style="position:absolute; top:-50px; right:-50px; width:150px; height:150px; background:#00A2FF; filter:blur(100px); opacity:0.3; z-index:0;"></div>
                
                <div style="position:relative; z-index:1;">
                    <h2 style="font-size:32px; margin-bottom:20px; color:#FFF;">Chapter 1: Core Bootstrapping</h2>
                    <p style="color:#AAA; line-height:1.8; margin-bottom:30px; font-size:16px;">Nova is a fully bootstrapped, sovereign meta-compiler. It is not a wrapper. It absorbs the architectural logic of GCC, LLVM, and V8 to natively surpass <strong>18,000+ programming languages</strong> via the Universal ABI.</p>
                </div>
            </div>
        </div>
    </div>`;
    
    // Global function to switch chapters
    window.loadChapter = function(ch) {
        document.querySelectorAll('#chapter-list li').forEach(li => { 
            li.style.color = '#888'; 
            li.style.fontWeight = 'normal'; 
        });
        document.getElementById('ch'+ch).style.color = '#00A2FF';
        document.getElementById('ch'+ch).style.fontWeight = 'bold';
        
        const content = document.getElementById('chapter-content');
        let html = '';
        
        if(ch === 2) {
            html = `
                <h2 style="font-size:32px; margin-bottom:20px; color:#FFF;">Chapter 2: EBNF Formal Grammar</h2>
                <p style="color:#AAA; line-height:1.8; margin-bottom:30px; font-size:16px;">The absolute foundation of Nova. Designed for extreme performance and unambiguous parsing via recursive descent.</p>
                <div style="background:#000; padding:25px; border-radius:12px; font-family:monospace; color:#00FF88; font-size:14px; border: 1px solid #333; overflow-x:auto;">
                    <span style="color:#888;">// Master Grammar Rule</span><br>
                    program = { statement } ;<br><br>
                    <span style="color:#888;">// Variable Assignment</span><br>
                    declaration = [ "const" ] identifier "=" expression ;<br><br>
                    <span style="color:#888;">// Hardware Control Block</span><br>
                    unsafe_stmt = "unsafe" block ;
                </div>`;
        } else if(ch === 3) {
            html = `
                <h2 style="font-size:32px; margin-bottom:20px; color:#FFF;">Chapter 3: Three Memory Modes</h2>
                <p style="color:#AAA; line-height:1.8; margin-bottom:30px; font-size:16px;">Nova operates across three isolated yet interconnected memory paradigms inside the same language file. No need for separate languages.</p>
                <ul style="color:#AAA; line-height:2.2; font-size:16px;">
                    <li><strong style="color:#FFBD2E;">1. Managed (GC)</strong>: Default high-level object handling (Like Java/Python).</li>
                    <li><strong style="color:#FF5F56;">2. Unsafe (Manual)</strong>: Direct pointer manipulation and hardware access (Like C/C++).</li>
                    <li><strong style="color:#27C93F;">3. Own/Borrow</strong>: Compile-time memory safety without GC (Like Rust).</li>
                </ul>`;
        } else if(ch === 24) {
            html = `
                <h2 style="font-size:32px; margin-bottom:20px; color:#FFF;">Chapter 24: Universal Package ABI</h2>
                <p style="color:#AAA; line-height:1.8; margin-bottom:30px; font-size:16px;">Nova integrates natively with external packages across 18,000+ ecosystems using the Universal ABI with zero serialization overhead.</p>
                <div style="background:#000; padding:25px; border-radius:12px; font-family:monospace; color:#E5E5EA; font-size:15px; border: 1px solid #333;">
                    <span style="color:#888;">// Importing external Python TensorFlow ecosystem flawlessly</span><br>
                    <span style="color:#00A2FF;">Nova</span>.<span style="color:#FFBD2E;">import</span>(<span style="color:#27C93F;">'python:tensorflow'</span>)<br><br>
                    <span style="color:#888;">// Result: Native matrix tensors loaded directly into VRAM (0.01ms)</span>
                </div>`;
        } else {
            html = `<h2 style="font-size:32px; margin-bottom:20px; color:#FFF;">Chapter ${ch}: Unlocking Soon</h2><p style="color:#AAA; line-height:1.8; font-size:16px;">Detailed documentation for this chapter is being compiled by Neura AI.</p>`;
        }
        
        content.innerHTML = `<div style="position:absolute; top:-50px; right:-50px; width:150px; height:150px; background:#00A2FF; filter:blur(100px); opacity:0.3; z-index:0; transition:0.5s;"></div>
                             <div style="position:relative; z-index:1; animation: fadeIn 0.4s ease;">${html}</div>`;
    };
}
console.log("[+] Interactive Overview Injected!");
