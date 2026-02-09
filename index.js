const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const lightButton = document.querySelector('.menu .light');
const darkButton = document.querySelector('.menu .dark');
const serverImg = document.getElementById('server-img');

// メニュー開閉
menuToggle?.addEventListener('click', () => {
    menu.classList.toggle('open');
});

// フェード切り替え
function updateImage() {
    if (!serverImg) return;

    const isLight = document.body.classList.contains('light-mode');
    const newSrc = isLight
        ? 'image/main_light.png'
        : 'image/main_dark.png';

    serverImg.style.opacity = 0;
    setTimeout(() => {
        serverImg.src = newSrc;
        serverImg.style.opacity = 1;
    }, 300);
}

// 初期状態
document.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem('theme');

    if (saved === 'light') {
        document.body.classList.add('light-mode');
    } else {
        document.body.classList.remove('light-mode');
    }

    updateImage();
});

// ライト
lightButton?.addEventListener('click', () => {
    document.body.classList.add('light-mode');
    localStorage.setItem('theme', 'light');
    updateImage();
});

// ダーク
darkButton?.addEventListener('click', () => {
    document.body.classList.remove('light-mode');
    localStorage.setItem('theme', 'dark');
    updateImage();
});