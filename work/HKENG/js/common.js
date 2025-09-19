// /* 2차 menu */
// $(".gnb > li").hover(
//   function () {
//     $(this).find(".menu1, .dp2_bg").stop().slideDown();
//   },
//   function () {
//     $(this).find(".menu1, .dp2_bg").stop().slideUp();
//   }
// );


$(".gnb > li").hover(
  function () {
    $("header").css("background-color", "white"); // 헤더 전체 배경 변경
    $(".gnb a").css("color", "black"); // 모든 메뉴 글자색 검은색으로 변경
    $(this).find(".menu1, .dp2_bg").stop().slideDown();

    // 배경이 흰색으로 바뀌면 첫 번째 이미지는 숨기고 두 번째 이미지는 보이게 함
    $("header h1 > img:nth-child(1)").css("display", "none");
    $("header h1 > img:nth-child(2)").css("display", "block");
  },
  function () {
    $("header").css("background-color", "transparent"); // 원래대로 복구
    $(".gnb a").css("color", "white"); // 모든 메뉴 글자색 흰색으로 복구
    $(this).find(".menu1, .dp2_bg").stop().slideUp();

    // 배경이 원래대로 돌아가면 첫 번째 이미지는 보이고 두 번째 이미지는 숨기기
    $("header h1 > img:nth-child(1)").css("display", "block");
    $("header h1 > img:nth-child(2)").css("display", "none");
  }
);



//mobile menu
$(".ham").click(function () {
  $(this).toggleClass("active");
  $(".mgnb_wrap").toggleClass("active");

});


$(".mgnb > li").click(function () {
  $(this).find(".mdepth2").stop().slideToggle();
  $(this).siblings().find(".mdepth2").stop().slideUp();
});

// sub_txt 영역 스크롤 시 fixed 처리
$(window).scroll(function() {
  const subVisualHeight = $('.sub_visual').outerHeight();
  const scrollTop = $(window).scrollTop();
  
  if (scrollTop > subVisualHeight) {
    $('.sub_txt').css({
      'position': 'fixed',
      'top': '0',
      'left': '0',
      'width': '100%',
      'z-index': '1000'
    });
  } else {
    $('.sub_txt').css({
      'position': 'sticky',
      'top': '0',
      'left': 'auto',
      'width': 'auto',
      'z-index': 'auto'
    });
  }
});




