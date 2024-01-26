document.getElementById('noButton').addEventListener('mouseover', function() {
    this.style.top = Math.random() * window.innerHeight + 'px';
    this.style.left = Math.random() * window.innerWidth + 'px';
});

document.getElementById('yesButton').addEventListener('click', function() {
    // Code to handle 'Yes' button click
    alert('Thank you for saying Yes!');
});

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

document.getElementById('noButton').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'block';
});
