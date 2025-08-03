document.addEventListener('DOMContentLoaded', function() {
    // Animated hearts
    const heartsBg = document.querySelector('.hearts-bg');
    for (let i = 0; i < 18; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = Math.random() * 100 + 'vh';
        heart.style.animationDelay = (Math.random() * 6) + 's';
        heartsBg.appendChild(heart);
    }

    // Birthday wish button
    const wishBtn = document.getElementById('wishButton');
    const wishDiv = document.getElementById('wish');
    wishBtn.addEventListener('click', function() {
        wishDiv.innerHTML = `
            <span style="font-size:2em;">💖</span><br>
            Happy Birthday, my dearest!<br>
            You are my dream come true, my soulmate, my everything.<br>
            I wish you a lifetime of happiness, adventure, and love—always with me by your side.<br>
            <span style="font-size:2em;">💖</span><br>
            <span style="font-size:1.2em; color:#fdcb6e;">I love you more than words, more than forever.</span>
        `;
        wishBtn.disabled = true;
        wishBtn.style.background = '#fdcb6e';
        wishBtn.style.color = '#e17055';
        wishBtn.style.cursor = 'not-allowed';
        // Heart burst animation
        for (let i = 0; i < 16; i++) {
            const burst = document.createElement('div');
            burst.className = 'burst-heart';
            burst.innerHTML = '💖';
            burst.style.left = (50 + Math.random() * 20 - 10) + '%';
            burst.style.top = (60 + Math.random() * 20 - 10) + '%';
            burst.style.animationDelay = (Math.random() * 0.5) + 's';
            document.body.appendChild(burst);
            setTimeout(() => burst.remove(), 1200);
        }
        // Realistic flower bloom animation
        const flowerSVGs = [
            `<svg width='44' height='44' viewBox='0 0 44 44'><circle cx='22' cy='22' r='10' fill='#e17055'/><ellipse cx='22' cy='12' rx='7' ry='12' fill='#fdcb6e'/><ellipse cx='22' cy='32' rx='7' ry='12' fill='#fdcb6e'/><ellipse cx='12' cy='22' rx='12' ry='7' fill='#fdcb6e'/><ellipse cx='32' cy='22' rx='12' ry='7' fill='#fdcb6e'/></svg>`, // Rose
            `<svg width='44' height='44' viewBox='0 0 44 44'><ellipse cx='22' cy='22' rx='10' ry='14' fill='#f7cac9'/><ellipse cx='22' cy='10' rx='6' ry='10' fill='#92a8d1'/><ellipse cx='22' cy='34' rx='6' ry='10' fill='#92a8d1'/></svg>`, // Tulip
            `<svg width='44' height='44' viewBox='0 0 44 44'><circle cx='22' cy='22' r='10' fill='#ffe066'/><ellipse cx='22' cy='10' rx='7' ry='12' fill='#f6b93b'/><ellipse cx='22' cy='34' rx='7' ry='12' fill='#f6b93b'/></svg>`, // Sunflower
            `<svg width='44' height='44' viewBox='0 0 44 44'><ellipse cx='22' cy='22' rx='12' ry='7' fill='#b8e994'/><ellipse cx='10' cy='22' rx='7' ry='12' fill='#38ada9'/><ellipse cx='34' cy='22' rx='7' ry='12' fill='#38ada9'/></svg>` // Leafy flower
        ];
        for (let i = 0; i < 14; i++) {
            const flower = document.createElement('div');
            flower.className = 'bloom-flower-real';
            flower.innerHTML = flowerSVGs[Math.floor(Math.random() * flowerSVGs.length)];
            flower.style.left = (50 + Math.cos((i/14)*2*Math.PI)*60) + '%';
            flower.style.top = (60 + Math.sin((i/14)*2*Math.PI)*30) + '%';
            flower.style.animationDelay = (Math.random() * 0.5) + 's';
            document.body.appendChild(flower);
            setTimeout(() => flower.remove(), 1700);
        }
    });
});
