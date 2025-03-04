// ヘッダー・フッターを読み込む
document.addEventListener("DOMContentLoaded", function() {
    fetch("header.html")
        .then(response => response.text())
        .then(data => document.getElementById("header-placeholder").innerHTML = data);

    fetch("footer.html")
        .then(response => response.text())
        .then(data => document.getElementById("footer-placeholder").innerHTML = data);
});

// ヘッダーのスクロール時の背景変更
window.addEventListener("scroll", function() {
    var header = document.querySelector(".fixed-header");
    if (window.scrollY > 50) {
        header.classList.remove("transparent");
        header.classList.add("solid");
    } else {
        header.classList.remove("solid");
        header.classList.add("transparent");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.querySelector(".about-section");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                aboutSection.classList.add("show");
            }
        });
    }, { threshold: 0.2 }); // 20%見えたら発火

    observer.observe(aboutSection);
});


document.addEventListener("DOMContentLoaded", function () {
    var carouselElement = document.querySelector("#processCarousel");

    if (carouselElement) {
        var carousel = new bootstrap.Carousel(carouselElement, {
            interval: 5000,  // 5秒ごとに自動で切り替え
            wrap: true       // ループさせる
        });

        // カルーセルの矢印ボタンをクリックしたときの処理
        document.querySelector(".carousel-control-prev").addEventListener("click", function () {
            carousel.prev();
        });

        document.querySelector(".carousel-control-next").addEventListener("click", function () {
            carousel.next();
        });
    }
});
