
function showMessage() {
    document.getElementById('message').style.display = 'block';
}
function showLove() {
    document.getElementById('love-message').style.display = 'block';
    setTimeout(() => {
        document.getElementById('hidden-message').style.display = 'block';
    }, 3000);
}
function moveNoButton() {
    const noBtn = document.getElementById('no-btn');
    const randomX = Math.random() * 200 - 100;
    const randomY = Math.random() * 200 - 100;
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
}
