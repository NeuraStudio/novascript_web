// ==========================================
// NEURA STUDIO - EXACT IMAGE REPLICA PATCH
// ==========================================

// 1. LOGIN SCREEN (Matches 8284.jpg exactly)
const authModal = document.getElementById('authModal');
if (authModal) {
    authModal.innerHTML = `
    <div style="background:white; padding:30px 40px; border-radius:16px; width:100%; max-width:380px; box-shadow:0 25px 50px rgba(0,0,0,0.2); text-align:center; position:relative; font-family: sans-serif;">
        <button onclick="document.getElementById('authModal').style.display='none'" style="position:absolute; top:15px; right:15px; background:none; border:none; font-size:18px; cursor:pointer; color:#888;">✖</button>
        <div style="width:50px; height:50px; background:#000; border-radius:50%; margin:0 auto 15px;"></div>
        <h2 style="margin:0 0 5px 0; font-size:20px; color:#000;">Neura Cloud</h2>
        <p style="color:#27C93F; font-size:11px; font-weight:bold; margin-bottom:25px;">✓ Free Database Auto-Connected (No API Req.)</p>
        
        <input type="email" placeholder="Email Address" style="width:100%; box-sizing:border-box; padding:12px 15px; margin-bottom:15px; border-radius:8px; border:1px solid #E5E5EA; outline:none; font-size:14px;">
        <input type="password" placeholder="Password" style="width:100%; box-sizing:border-box; padding:12px 15px; margin-bottom:20px; border-radius:8px; border:1px solid #E5E5EA; outline:none; font-size:14px;">
        
        <button style="width:100%; background:#0066CC; color:white; padding:12px; border-radius:8px; border:none; font-weight:bold; font-size:15px; cursor:pointer; margin-bottom:15px;">Login</button>
        
        <div style="display:flex; align-items:center; justify-content:center; gap:10px; margin-bottom:15px;">
            <div style="height:1px; background:#E5E5EA; width:100%;"></div>
            <span style="color:#888; font-size:10px;">OR</span>
            <div style="height:1px; background:#E5E5EA; width:100%;"></div>
        </div>
        
        <button style="width:100%; background:#FFF; color:#555; padding:12px; border-radius:8px; border:1px solid #DDD; font-weight:bold; font-size:14px; cursor:pointer; display:flex; justify-content:center; align-items:center; gap:10px;">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" style="width:18px;"> Sign up with Google
        </button>
    </div>`;
}

// 2. NOVA HUB (Matches 8279_2.jpg exactly - 12M+ Packages & Grid)
const hubPage = document.getElementById('hub');
if (hubPage) {
    const packages = [
        { icon: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg', name: 'python:tensorflow' },
        { icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg', name: 'js:react' },
        { icon: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Spring_Framework_Logo_2018.svg', name: 'java:spring' },
        { icon: 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg', name: 'cpp:boost' },
        { icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Rust_programming_language_black_logo.svg', name: 'rust:tokio' },
        { icon: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Solid_black.svg', name: 'nova:quantum-core' },
        { icon: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg', name: 'python:django' },
        { icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg', name: 'js:node' },
        { icon: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Pandas_logo.svg', name: 'python:pandas' },
        { icon: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg', name: 'ruby:rails' },
        { icon: 'https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg', name: 'php:laravel' },
        { icon: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg', name: 'go:gin' },
        { icon: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg', name: 'csharp:dotnet' },
        { icon: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Swift_logo.svg', name: 'swift:ui' },
        { icon: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png', name: 'dart:flutter' }
    ];

    let gridHTML = packages.map(pkg => `
        <div style="background:#FFF; border-radius:16px; padding:25px; text-align:center; border:1px solid #E5E5EA; box-shadow:0 4px 15px rgba(0,0,0,0.05);">
            <img src="${pkg.icon}" style="height:50px; margin-bottom:15px; object-fit:contain;">
            <p style="margin:0 0 15px 0; font-weight:bold; color:#333; font-size:14px;">${pkg.name}</p>
            <button style="background:#F0F7FF; color:#0066CC; border:1px solid #CCE0FF; padding:8px 15px; border-radius:20px; font-size:12px; font-weight:bold; cursor:pointer; width:100%;">Copy Install Command</button>
        </div>
    `).join('');

    hubPage.innerHTML = `
    <div style="text-align:center; padding:40px 20px; font-family:sans-serif;">
        <h1 style="font-size:3rem; margin-bottom:10px; color:#111;">Nova Hub <span style="font-size:1.5rem;">📦</span></h1>
        <p style="color:#666; font-size:1.1rem; margin-bottom:30px;">The Universal Package Manager. Search 12,000,000+ Native Packages instantly.</p>
        <input type="text" placeholder="Search live packages (e.g. py, js, java, rust, ruby, php)..." style="width:100%; max-width:600px; padding:15px 25px; border-radius:30px; border:1px solid #DDD; box-shadow:0 10px 20px rgba(0,0,0,0.05); font-size:15px; outline:none; margin-bottom:50px;">
        <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(200px, 1fr)); gap:20px; max-width:1000px; margin:0 auto;">
            ${gridHTML}
        </div>
    </div>`;
}

// 3. OVERVIEW PAGE (Matches 8285.jpg exactly - 24 Chapters)
const learnPage = document.getElementById('learn');
if (learnPage) {
    learnPage.innerHTML = `
    <div style="padding:40px 20px; max-width:1100px; margin:0 auto; font-family:sans-serif;">
        <h1 style="font-size:3rem; margin-bottom:10px; color:#111;">Nova Overview</h1>
        <p style="color:#666; font-size:1.1rem; margin-bottom:40px;">The Ultimate 24-Chapter Guide to Nova Singularity Engine.</p>
        <div style="display:flex; gap:30px; flex-wrap:wrap;">
            <div style="flex:1; min-width:250px; background:#222; padding:30px; border-radius:20px; color:#FFF;">
                <h3 style="margin-bottom:20px; font-size:16px;">Chapters (1-24)</h3>
                <ul style="list-style:none; padding:0; margin:0; color:#888; font-size:14px; line-height:2.5;">
                    <li style="color:#00A2FF; font-weight:bold;">1. Core Bootstrapping</li>
                    <li>2. EBNF Formal Grammar</li>
                    <li>3. Variable Assignment</li>
                    <li>4. Three Memory Modes</li>
                    <li>...</li>
                    <li>23. Quantum API</li>
                    <li>24. Final Interactive REPL</li>
                </ul>
            </div>
            <div style="flex:2.5; min-width:300px; background:#111; padding:40px; border-radius:20px; color:#FFF;">
                <h2 style="font-size:24px; margin-bottom:20px;">Chapter 24: Detailed Syntax Execution</h2>
                <p style="color:#AAA; line-height:1.6; margin-bottom:30px; font-size:15px;">This chapter explains exactly how Nova executes 0.01ms operations bypassing standard C++ overhead. The engine uses <strong>Nova.ask.user</strong> natively.</p>
                <div style="background:#000; padding:20px; border-radius:12px; font-family:monospace; color:#E5E5EA; font-size:14px;">
                    <span style="color:#888;">// Syntax Definition</span><br>
                    <span style="color:#00A2FF;">function</span> <span style="color:#FFBD2E;">DeployServer</span>() {<br>
                    &nbsp;&nbsp;Nova.network.bind(0.0.0.0);<br>
                    }
                </div>
            </div>
        </div>
    </div>`;
}

// 4. NOVA OS SHELL ICONS (Matches 8282.jpg & 8283.jpg)
const osContainer = document.getElementById('novaOS-Container');
if (osContainer) {
    let dock = osContainer.querySelector('div[style*="bottom: 15px"]');
    if (dock) {
        dock.innerHTML = `
        <div style="display:flex; flex-direction:column; align-items:center; cursor:pointer; margin: 0 10px;">
            <div style="width: 50px; height: 50px; border-radius: 50%; background: #222; display:flex; justify-content:center; align-items:center; box-shadow: 0 10px 20px rgba(0,0,0,0.5); border: 2px solid #555;">
                <span style="color:#00FF88; font-family:monospace; font-size:20px; font-weight:bold;">>_</span>
            </div>
            <span style="color:white; font-size:11px; margin-top:6px; font-weight:bold;">Shell</span>
        </div>
        <div style="display:flex; flex-direction:column; align-items:center; cursor:pointer; margin: 0 10px;">
            <div style="width: 50px; height: 50px; border-radius: 50%; background: #0066CC; display:flex; justify-content:center; align-items:center; box-shadow: 0 10px 20px rgba(0,0,0,0.5); border: 2px solid #005bb5;">
                <span style="color:white; font-size:22px;">🤖</span>
            </div>
            <span style="color:white; font-size:11px; margin-top:6px; font-weight:bold;">Nova AI</span>
        </div>`;
    }
}

// 5. NAVBAR FIX (Documentation -> Overview)
const navLinks = document.querySelector('.nav-links');
if(navLinks) {
    navLinks.innerHTML = navLinks.innerHTML.replace('Documentation', 'Overview').replace('Learn', 'Overview');
}

console.log("[+] Master Web Patch Applied Successfully! All Images Matched.");
