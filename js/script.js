// ハンバーガーメニュー
// ==================================================
const btnGNav = document.querySelector(".btn-gNav");
const gNav = document.querySelector(".gNav");

btnGNav.addEventListener("click", () => {
  btnGNav.classList.toggle("open");
  gNav.classList.toggle("open");
});


// 画像3枚フェード
// ==================================================
function initMenuSlider() {
    const boxes = document.querySelectorAll('.photo-box');
    const slider = document.querySelector('.photo-slider');
    let index = 0;

    function showSlide(i) {
        boxes.forEach(box => box.classList.remove('active'));
        boxes[i].classList.add('active');

        setTimeout(() => {
        const height = boxes[i].offsetHeight;
        slider.style.height = height + 'px';
        }, 100);
    }

    showSlide(index);

    setInterval(() => {
        index = (index + 1) % boxes.length;
        showSlide(index);
    }, 2000);
}



// メニュートグル
// ==================================================
function initMenuToggle() {
    const toggles = document.querySelectorAll('.menu-toggle');
    
    //最初のメニューだけ開いておく
    const firstSection = document.querySelector('.menu-section');
    if (firstSection) {
        firstSection.classList.add('open');
    }
    
    toggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
        const section = toggle.closest('.menu-section');
        section.classList.toggle('open');
        });
    });
}



// トグル・フェード共通
// ==================================================
function handleResponsiveScript() {
    if (window.innerWidth <= 768 && !window.sliderInitialized) {
        initMenuSlider();
        initMenuToggle(); 
        window.sliderInitialized = true;
    }
}

handleResponsiveScript();
window.addEventListener('resize', handleResponsiveScript);



// フォーム5人以上
// ==================================================
const people5plus = document.querySelector("#people5plus");
const peopleCount = document.querySelector("#peopleCount");

document.querySelectorAll('input[name="people"]').forEach(radio => {
    radio.addEventListener("change", () => {

        if (people5plus.checked) {
            peopleCount.disabled = false;
            peopleCount.required = true;
        } else {
            peopleCount.disabled = true;
            peopleCount.required = false;
            peopleCount.value = "";
        }

    });
});

// 初期状態
peopleCount.disabled = true;