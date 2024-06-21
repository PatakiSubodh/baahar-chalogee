document.getElementById('yes-btn').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('.stickers').style.display = 'block';
    document.querySelector('.main-content').style.display = 'none';
});

document.getElementById('no-btn').addEventListener('click', function(event) {
    event.preventDefault();
    let noBtn = this;
    let yesBtn = document.getElementById('yes-btn');

    let noFontSize = window.getComputedStyle(noBtn).fontSize;
    let yesFontSize = window.getComputedStyle(yesBtn).fontSize;

    noBtn.style.fontSize = parseFloat(noFontSize) * 1 + 'px';
    yesBtn.style.fontSize = parseFloat(yesFontSize) * 1.3 + 'px';
});