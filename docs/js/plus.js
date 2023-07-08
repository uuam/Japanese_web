$(document).ready(function () {

    $('#nav-toggle').on('checked', function () {
        $('.menu').addClass('open');
    });
    $('.menu-list a').on("click", function () {
        $('.menu').removeClass('.open');
        $('#nav-toggle').prop('checked', false);
    });
    // 全部點擊按鈕連結至指定位置的滑行
    $('a[href^="#"]').click(function () {
        var target = $(this.hash);
        $("html,body").animate({
            scrollTop: target.offset().top
        }, 500);
        $(".menu-nav").fadeOut();
        $(".menu-nav").removeClass(".active");
        $(".menu-btn").removeClass(".active");
    });
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        autoplay: {
            delay: 5000,
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },
    });
});
// 清除輸入資料
const cancelBtn = document.getElementById('cancelBtn')
cancelBtn.addEventListener('click',function(){
})