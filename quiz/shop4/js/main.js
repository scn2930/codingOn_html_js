$(function () {
  $(".navbar_toggleBtn").click(function () {
    // 클래스 선택자 생성
    $('.navbar_menu').toggle("active");
  });
  //  
  $(window).resize (() => {
    // nav의 너비 값이 문자이므로 숫자로 변환 -> window.innerWIdth로 바꾸면 parse변환 안해도 됨!!
    if (parseInt($('nav').css('width')) > 768) {
      $('.navbar_menu').css('display', 'flex');
    };
  });
});