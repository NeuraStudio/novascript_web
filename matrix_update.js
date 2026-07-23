// Injecting Matrix Rain & Interactive IDE into the existing website
const canvasHTML = `<canvas id="matrixCanvas" style="position:fixed; top:0; left:0; width:100%; height:100%; z-index:-2; opacity:0.05;"></canvas>`;
document.body.insertAdjacentHTML('afterbegin', canvasHTML);

// Matrix Rain Logic
const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const chars = 'NovaScript 01 AI CPU GPU NeuraStudio OS'.split('');
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = Array.from({length: columns}).fill(1);

function drawMatrix() {
    ctx.fillStyle = 'rgba(250, 250, 252, 0.1)'; // Matches White Theme
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#0066CC'; // Primary Blue
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
    }
}
setInterval(drawMatrix, 50);

console.log("[+] Matrix Rain Animation Activated!");
