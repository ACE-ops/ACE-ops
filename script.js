document.addEventListener('DOMContentLoaded', function() {
    const wishBtn = document.getElementById('wishButton');
    const wishDiv = document.getElementById('wish');
    wishBtn.addEventListener('click', function() {
        wishDiv.textContent = "🎂 May your year be filled with happiness, love, and all your dreams come true! 🎉";
        wishDiv.classList.add('show');
        wishBtn.disabled = true;
        wishBtn.style.opacity = "0.7";
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const gateIntro = document.getElementById('gateIntro');
    if (gateIntro) {
        gateIntro.addEventListener('click', function() {
            gateIntro.classList.add('gate-open');
            setTimeout(() => {
                gateIntro.style.display = 'none';
            }, 1200);
        });
    }

    const wishBtn = document.getElementById('wishButton');
    const wishDiv = document.getElementById('wish');
    wishBtn.addEventListener('click', function() {
        wishDiv.textContent = "🎂 May your year be filled with happiness, love, and all your dreams come true! 🎉";
        wishDiv.classList.add('show');
        wishBtn.disabled = true;
        wishBtn.style.opacity = "0.7";
    });
});