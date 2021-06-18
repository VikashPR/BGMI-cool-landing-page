document.addEventListener('click', (e) => {
    let body = document.querySelector('body');
    let bullet = document.createElement('span');
    bullet.classList.add('bullet');
    let x = e.offsetX;
    let y = e.offsetY;
    bullet.style.left = x + 'px';
    bullet.style.top = y + 'px';
    body.appendChild(bullet);

    setTimeout(function () {
        bullet.remove();
        blood.remove();
    }, 4000);

    // Bullet sound
    let sound = document.getElementById('audio');
    sound.play();

    // splash appear
    let blood = document.createElement('span');
    blood.classList.add('blood');

    //Adding a random shooting blood image
    let shots = [
        'url("./asset/shot-1.png")',
        'url("./asset/shot-2.png")',
        'url("./asset/shot-3.png")',
        'url("./asset/shot-4.png")',
        'url("./asset/shot-5.png")',
    ]
    let shotImg = shots[Math.floor(Math.random() * shots.length)];
    blood.style.background = shotImg;


    blood.style.left = Math.random() * innerWidth + 'px';
    blood.style.top = Math.random() * innerHeight + 'px';
    body.appendChild(blood);
});