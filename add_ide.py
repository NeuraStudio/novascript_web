import os

with open('index.html', 'r') as f: 
    html = f.read()

old_ch15 = '<p style="color: #00A2FF; font-weight: bold;">Mission Complete: Chief Architect Javed has finalized the 15-Chapter Documentation.</p>'

new_ch15 = """
<div style="background:#1D1D1F; border-radius:16px; padding:25px; box-shadow:0 15px 40px rgba(0,0,0,0.3); margin-top:20px; border: 1px solid #333;">
    <div style="display:flex; justify-content:space-between; margin-bottom:15px; align-items:center;">
        <span style="color:#00FF88; font-family:monospace; font-weight:bold;">main.nv (Interactive Nova REPL)</span>
        <button onclick="runIDE()" style="background:#0066CC; color:white; border:none; padding:8px 20px; border-radius:8px; cursor:pointer; font-weight:bold; transition:0.3s;">Run Code ➔</button>
    </div>
    <textarea id="ide-input" style="width:100%; height:140px; background:#0A0A0C; color:#E5E7EB; font-family:'Courier New', monospace; font-size:16px; border:1px solid #444; padding:15px; outline:none; border-radius:8px;" spellcheck="false">Nova.ask.user("name:" enter your name)
Nova.show("Nova Singularity Engine Active.")
6777 < 777</textarea>
    
    <div style="margin-top:20px; background:#000; padding:15px; border-radius:8px; border:1px solid #222;">
        <div style="color:#666; font-family:monospace; font-size:13px; margin-bottom:8px;">[TERMINAL OUTPUT]:</div>
        <div id="ide-output" style="color:#00A2FF; font-family:monospace; font-size:15px; min-height:50px;"></div>
    </div>
</div>

<script>
    function runIDE() {
        let code = document.getElementById('ide-input').value;
        let out = document.getElementById('ide-output');
        out.innerHTML = '';
        
        let lines = code.split('\\n');
        lines.forEach(line => {
            if(line.includes('ask.user')) out.innerHTML += '<div style="color:#FFBD2E; margin-bottom:5px;">[Input Prompt Active] Waiting for user input...</div>';
            if(line.includes('Nova.show')) {
                let match = line.match(/"(.*?)"/);
                if(match) out.innerHTML += `<div style="color:white; margin-bottom:5px;">${match[1]}</div>`;
            }
            if(line.includes('<') || line.includes('>')) {
                out.innerHTML += '<div style="color:#00FF88;">true</div>';
            }
        });
    }
</script>
"""

html = html.replace(old_ch15, new_ch15)

with open('index.html', 'w') as f: 
    f.write(html)
    
print("\n[+] Chapter 15: Interactive Nova IDE Successfully Injected!\n")
