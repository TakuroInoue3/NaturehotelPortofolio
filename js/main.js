document.addEventListener('DOMContentLoaded', function() {
    // ハンバーガーメニューの制御を追加
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
    });

    // メニューリンクをクリックしたらメニューを閉じる
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
        });
    });

    // 全セクションにfade-inクラスを追加
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('fade-in');
    });

    // Intersection Observerの設定
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1 // 10%見えたらフェードイン開始
    });

    // 各セクションを監視
    sections.forEach(section => {
        observer.observe(section);
    });

    const slider = document.querySelector('.slider-container');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentSlide = 0;

    function updateSlider(direction) {
        slider.style.transition = 'none';
        
        if (direction === 'prev') {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        } else {
            currentSlide = (currentSlide + 1) % slides.length;
        }
        
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        // 端のスライドの場合の処理
        if (currentSlide === 0 || currentSlide === slides.length - 1) {
            setTimeout(() => {
                slider.style.transition = 'transform 0.5s ease';
                slider.style.transform = `translateX(-${currentSlide * 100}%)`;
            }, 0);
        }
    }

    prevButton.addEventListener('click', () => updateSlider('prev'));
    nextButton.addEventListener('click', () => updateSlider('next'));


});
