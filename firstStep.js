document.getElementById('yesButton').addEventListener('click', function() {
    window.location.href = 'agreement.html';
});

document.getElementById('noButton').addEventListener('mouseover', function() {
    this.style.top = Math.random() * window.innerHeight + 'px';
    this.style.left = Math.random() * window.innerWidth + 'px';
});