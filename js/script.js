    // ページ読み込み完了後
window.addEventListener("load", function () {

    // 3秒後にloadingを消す
    setTimeout(function () {

        const loading = document.getElementById("loading");

        loading.classList.add("fadeout");

    }, 2000);

});

// navボタンの開閉
// 必要な要素を取得
const menuBtn = document.querySelector(".header__btn");
const closeBtn = document.querySelector(".nav__btn");
const nav = document.querySelector(".nav");

// メニューボタンを押したとき
menuBtn.addEventListener("click", function () {
    nav.classList.add("active");
});

// 閉じるボタンを押したとき
closeBtn.addEventListener("click", function () {
    nav.classList.remove("active");
});

$(function () {

    // モーダルを開く
    $('.open-modal').click(function () {

        const target = $(this).data('modal');

        $('.' + target).fadeIn();

        // slick更新
        $('.slider').slick('setPosition');
        $('.thumbnail-slider').slick('setPosition');
    });

    // 閉じる
    $('.close-btn, .modal-bg').click(function () {
    $('.modal').fadeOut();
    $('.slider').slick('slickGoTo', 0);
    $('.thumbnail-slider').slick('slickGoTo', 0);
    });

    // メインスライダー
    $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.thumbnail-slider',
    infinite: false
    });

    // サムネイル
    $('.thumbnail-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider',
    focusOnSelect: true,
    infinite: false
    });

});