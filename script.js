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
        wishDiv.innerHTML = 'Happy Birthday, my love! 💖<br>I wish you endless happiness, laughter, and love. Thank you for being the light of my life. I can’t wait to make more beautiful memories with you!';
        wishBtn.disabled = true;
        wishBtn.style.background = '#fdcb6e';
        wishBtn.style.color = '#e17055';
        wishBtn.style.cursor = 'not-allowed';
    });
});
