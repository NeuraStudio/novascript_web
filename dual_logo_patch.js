// Injecting both Nova Script and Neura Studio Logos into Navbar and Footer
const navContainer = document.querySelector('.nav-links')?.parentElement;
if (navContainer) {
    // Remove old text logo if exists
    const oldBrand = navContainer.querySelector('span');
    if (oldBrand && oldBrand.innerText.includes('NEURA STUDIO')) {
        oldBrand.remove();
    }
    const oldImg = navContainer.querySelector('img');
    if (oldImg) oldImg.remove();
    
    // Inject Dual Logos
    const dualLogos = `
    <div style="display: flex; align-items: center; gap: 15px;">
        <img src="file_000001.jpg" onerror="this.src='https://upload.wikimedia.org/wikipedia/commons/2/21/Solid_black.svg'" alt="Neura Studio" style="width: 45px; height: 45px; border-radius: 50%; box-shadow: 0 4px 10px rgba(0,0,0,0.3); border: 1px solid #333;">
        <img src="file_000000.jpg" onerror="this.src='https://upload.wikimedia.org/wikipedia/commons/2/21/Solid_black.svg'" alt="Nova Script" style="width: 45px; height: 45px; border-radius: 50%; box-shadow: 0 4px 10px rgba(0,162,255,0.3); border: 1px solid #00A2FF;">
        <span style="font-size: 20px; font-weight: 900; letter-spacing: -0.5px; color: #FFF; font-family: sans-serif;">NEURA STUDIO</span>
    </div>`;
    navContainer.insertAdjacentHTML('afterbegin', dualLogos);
}

const footerContainer = document.querySelector('footer > div > div');
if (footerContainer) {
    footerContainer.innerHTML = `
    <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px;">
        <img src="file_000001.jpg" onerror="this.src='https://upload.wikimedia.org/wikipedia/commons/2/21/Solid_black.svg'" style="width: 50px; height: 50px; border-radius: 50%;">
        <img src="file_000000.jpg" onerror="this.src='https://upload.wikimedia.org/wikipedia/commons/2/21/Solid_black.svg'" style="width: 50px; height: 50px; border-radius: 50%;">
        <span style="font-size: 24px; font-weight: 900; color: #FFF;">NEURA STUDIO</span>
    </div>
    <p style="color: #888; font-size: 14px; line-height: 1.6;">Pioneering the future of AI, Web, and Hardware with the Omni-Domain Architecture of Nova Script.</p>`;
}

console.log("[+] Dual Logos Injected Successfully!");
