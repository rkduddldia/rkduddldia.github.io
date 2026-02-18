$(document).ready(function() {
    var posY1 = $('#main .section1').offset().top;
    var posY2 = $('#main .section2').offset().top;
    var posY4 = $('#main .section4').offset().top;
    
    $('.profile_box .btn_fix').on('click', function() {
        $('#main .section1 .section1_inner .profile_box').toggleClass('on');
        console.log('click');
    });
    
    $('.aca_box .btn_fix').on('click', function() {
        $('#main .section1 .section1_inner .aca_box').toggleClass('on');
        console.log('click');
    });
    
    // 원마운트 데스크탑 슬라이더
    $('.onemount_slider').slick({
        dots: true,          // 페이지네이션 활성화
        arrows: false,       // 화살표 비활성화
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    });
    
    // 원마운트 모바일 슬라이더 (별도로 초기화)
    $('.mOnemount_slider').slick({
        dots: true,          // 페이지네이션 활성화
        arrows: false,       // 화살표 비활성화
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    });
    
});