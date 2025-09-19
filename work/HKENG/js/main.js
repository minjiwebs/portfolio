
//fullpage 초기화
$('#fullpage').fullpage({
  responsiveWidth: 1100, // 일반 스크롤로 변경 
  navigation: true, //기본값 false
  navigationPosition: 'right', //기본값 right
  navigationTooltips: ['Intro', 'Business', 'Identity', 'Footer'],
  showActiveTooltip: false,//네비 글자 노출\

  onLeave: function (origin, destination, direction, trigger) {

    if (destination == 4) {
      $("#fp-nav").fadeOut();
    } else {
      $("#fp-nav").fadeIn();
    }

    if (destination == 1) {
      $("#header").fadeIn();
    } else {
      $("#header").fadeOut();
    }

  }// 마지막 푸터에는 내비게이션 뜨지 않게
});

//WOW
new WOW().init();


// swiper

const visual_list = new Swiper(".visual_list", {
  autoplay: {
    delay: 4000, // 슬라이드가 머무르는 시간, 5000=5초
    disableOnInteraction: true, // 스와이프 후 자동 재생이 비활성화 되지 않음
  },

  spaceBetween: 0,
  parallax: true,
  effect: "fade",
  loop: true,
  speed: 1000,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },

});




document.addEventListener("DOMContentLoaded", function () {
  function initHoverEvents() {
    const bizItems = document.querySelectorAll(".business_txt .biz");
    const licenseItems = document.querySelectorAll(".business_txt2 .license_equipment");

    // 1100px 이상일 때만 동작
    if (window.innerWidth > 1024) {
      // bizItems hover 이벤트
      bizItems.forEach((item) => {
        item.addEventListener("mouseenter", function () {
          bizItems.forEach((el) => el.classList.remove("hover"));
          this.classList.add("hover");
        });

        item.addEventListener("mouseleave", function () {
          this.classList.remove("hover");
        });
      });

      // licenseItems hover 이벤트
      licenseItems.forEach((item) => {
        item.addEventListener("mouseenter", function () {
          licenseItems.forEach((el) => el.classList.remove("hover"));
          this.classList.add("hover");
        });

        item.addEventListener("mouseleave", function () {
          this.classList.remove("hover");
        });
      });
    }
  }

  // 초기 실행
  initHoverEvents();

  // 창 크기가 변경될 때마다 이벤트 다시 초기화
  window.addEventListener("resize", function () {
    // 1100px 이하로 줄어들면 이벤트를 제거
    if (window.innerWidth <= 1024) {
      const bizItems = document.querySelectorAll(".business_txt .biz");
      const licenseItems = document.querySelectorAll(".business_txt2 .license_equipment");

      bizItems.forEach((item) => {
        item.removeEventListener("mouseenter", function () { });
        item.removeEventListener("mouseleave", function () { });
      });

      licenseItems.forEach((item) => {
        item.removeEventListener("mouseenter", function () { });
        item.removeEventListener("mouseleave", function () { });
      });
    } else {
      // 1100px 이상이면 이벤트를 다시 추가
      initHoverEvents();
    }
  });
});


