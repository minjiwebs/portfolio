

// 2차 메뉴
$(".gnb>li").hover(function () {
  $(".depth2, .depth2_bg").stop().slideToggle();
});



// ham
$(".ham").click(function () {
  $(this).toggleClass("active");
  $(".mgnb_wrap").toggleClass("active");
  $(".ham2").toggleClass("active");

});



$(".mgnb > li").click(function () {
  $(this).find(".mdepth2").stop().slideToggle();
  $(this).siblings().find(".mdepth2").slideUp();
  // 클릭 외는 닫히게
});