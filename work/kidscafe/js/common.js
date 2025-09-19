

// 2차 메뉴
$(".gnb>li").hover(function () {
  $(".depth2").stop().slideToggle();
});

// ham
$(".ham").click(function () {
  $(this).toggleClass("active");
  $(".mgnb_wrap").toggleClass("active");
  $(".dim").fadeToggle();
});



$(".mgnb > li").click(function () {
  $(this).find(".mdepth2").stop().slideToggle();
  $(this).siblings().find(".mdepth2").slideUp();
  // 클릭 외는 닫히게
});