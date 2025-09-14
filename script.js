document.addEventListener('DOMContentLoaded', () => {
    // --- ダークモード機能 ---
    const toggleButton = document.getElementById('dark-mode-toggle');
    const currentTheme = localStorage.getItem('theme');

    // ページ読み込み時に保存されたテーマを適用
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }

    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');

        let theme = 'light';
        if (document.body.classList.contains('dark-mode')) {
            theme = 'dark';
        }
        localStorage.setItem('theme', theme);
    });


    // --- スクロールアニメーション機能 ---
    const sections = document.querySelectorAll('.report-section');

    if (sections.length > 0) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });

        sections.forEach(section => {
            observer.observe(section);
        });
    }


    // --- スムーズスクロール機能 ---
    const navLinks = document.querySelectorAll('.main-nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
