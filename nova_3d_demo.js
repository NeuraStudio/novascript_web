// ==========================================
// Nova 3D Physics Engine - Live Web Demo
// ==========================================

const heroSection = document.querySelector('.hero');
if(heroSection) {
    const canvas3D = `<canvas id="nova3D" style="width:100%; max-width:600px; height:300px; margin:40px auto 0; border-radius:24px; box-shadow: 0 20px 50px rgba(0, 102, 204, 0.15); background: #1D1D1F; display:block; cursor: crosshair; border: 1px solid #333;"></canvas>
    <p style="color:#00FF88; font-family:monospace; font-size:12px; margin-top:10px;">[Nova 3D Engine Live Rendering - Interact with Mouse]</p>`;
    heroSection.insertAdjacentHTML('beforeend', canvas3D);
}

const canvas = document.getElementById('nova3D');
const ctx = canvas.getContext('2d');
let width, height;

function resize() {
    width = canvas.width = canvas.offsetWidth;
    height = canvas.height = canvas.offsetHeight;
}
window.addEventListener('resize', resize);
resize();

// 3D Cube & Nodes Logic
let nodes = [];
const numNodes = 8;
for(let i=0; i<numNodes; i++) {
    nodes.push({
        x: (Math.random() - 0.5) * 150,
        y: (Math.random() - 0.5) * 150,
        z: (Math.random() - 0.5) * 150
    });
}

let angleX = 0, angleY = 0;
let mouseX = 0, mouseY = 0;
let isHovering = false;

canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouseX = (e.clientX - rect.left - width/2) * 0.05;
    mouseY = (e.clientY - rect.top - height/2) * 0.05;
    isHovering = true;
});
canvas.addEventListener('mouseleave', () => { isHovering = false; });

function render3D() {
    ctx.clearRect(0, 0, width, height);
    
    // Auto-rotation or Mouse-rotation
    angleX += isHovering ? (mouseY - angleX) * 0.05 : 0.01;
    angleY += isHovering ? (mouseX - angleY) * 0.05 : 0.01;
    
    const cosX = Math.cos(angleX), sinX = Math.sin(angleX);
    const cosY = Math.cos(angleY), sinY = Math.sin(angleY);
    
    let projected = [];
    
    // 3D Matrix Rotation
    nodes.forEach(node => {
        let y1 = node.y * cosX - node.z * sinX;
        let z1 = node.y * sinX + node.z * cosX;
        
        let x2 = node.x * cosY + z1 * sinY;
        let z2 = -node.x * sinY + z1 * cosY;
        
        const fov = 300;
        const scale = fov / (fov + z2);
        const px = x2 * scale + width/2;
        const py = y1 * scale + height/2;
        
        projected.push({x: px, y: py, scale: scale});
    });
    
    // Draw Connections (Wireframe)
    ctx.strokeStyle = 'rgba(0, 162, 255, 0.4)';
    ctx.lineWidth = 1.5;
    for(let i=0; i<projected.length; i++) {
        for(let j=i+1; j<projected.length; j++) {
            ctx.beginPath();
            ctx.moveTo(projected[i].x, projected[i].y);
            ctx.lineTo(projected[j].x, projected[j].y);
            ctx.stroke();
        }
    }
    
    // Draw Nodes
    projected.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 4 * p.scale, 0, Math.PI * 2);
        ctx.fillStyle = '#00FF88';
        ctx.fill();
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#00FF88';
    });
    
    requestAnimationFrame(render3D);
}

render3D();
console.log("[+] Nova 3D Physics Engine Demo Injected!");
