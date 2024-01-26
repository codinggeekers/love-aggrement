document.getElementById('heart').addEventListener('click', function() {
    this.style.animation = 'pop 0.5s 1';
    setTimeout(() => {
        this.style.animation = 'beat 1s infinite';
    }, 500);
});