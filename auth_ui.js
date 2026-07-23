// Injecting Neura Cloud Login Modal
const authHTML = `
<div id="authModal" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.6); backdrop-filter:blur(10px); z-index:9999; justify-content:center; align-items:center;">
    <div style="background:white; padding:40px; border-radius:24px; width:100%; max-width:400px; box-shadow:0 25px 50px rgba(0,0,0,0.2); text-align:center; position:relative; animation: popIn 0.4s ease;">
        <button onclick="document.getElementById('authModal').style.display='none'" style="position:absolute; top:20px; right:20px; background:none; border:none; font-size:20px; cursor:pointer; color:#888;">✖</button>
        <img src="8179.png" style="width:60px; height:60px; border-radius:50%; margin-bottom:15px;">
        <h2 style="margin:0 0 10px 0; font-size:24px; color:#1D1D1F;">Neura Cloud</h2>
        <p style="color:#5E5E73; font-size:14px; margin-bottom:30px;">Sync your Nova OS & Code securely.</p>
        
        <input type="email" placeholder="Email Address" style="width:90%; padding:15px; margin-bottom:15px; border-radius:12px; border:1px solid #E5E5EA; outline:none; font-size:15px;">
        <input type="password" placeholder="Password" style="width:90%; padding:15px; margin-bottom:25px; border-radius:12px; border:1px solid #E5E5EA; outline:none; font-size:15px;">
        
        <button style="width:100%; background:#0066CC; color:white; padding:15px; border-radius:12px; border:none; font-weight:bold; font-size:16px; cursor:pointer; transition:0.3s;" onmouseover="this.style.background='#004C99'" onmouseout="this.style.background='#0066CC'">Login / Sign Up</button>
    </div>
</div>
<style>@keyframes popIn { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }</style>
`;
document.body.insertAdjacentHTML('beforeend', authHTML);

// Adding Login Button to Navbar
const navLinks = document.querySelector('.nav-links');
if(navLinks) {
    navLinks.insertAdjacentHTML('beforeend', `<a onclick="document.getElementById('authModal').style.display='flex'" style="background:#1D1D1F; color:white; padding:8px 20px; border-radius:20px; margin-left:15px;">Login</a>`);
}
console.log("[+] Auth UI Loaded");
