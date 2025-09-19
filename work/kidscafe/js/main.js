//aos

AOS.init({
  once: false,
  duration: 2000,
  easing: "ease-in-sine",
  delay: 3000,
  disable: window.innerWidth < 768,
});

//인사말

$(function () {
  $(".intro img")
    .on("mouseenter", function () {
      $(".intro_text").addClass("show");
    })
    .on("mouseleave", function () {
      $(".intro_text").removeClass("show");
    });
});

$(function () {
  $(".intro .fox_side")
    .on("mouseenter", function () {
      $(".intro").addClass("blur-bg");
    })
    .on("mouseleave", function () {
      $(".intro").removeClass("blur-bg");
    });
});

// 쇼 슬라이드
const date_list = new Swiper(".date_list", {
  centeredSlides: true,
  speed: 1000,
  loop: true,
  navigation: {
    nextEl: " .swiper-button-next ",
    prevEl: " .swiper-button-prev ",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
    },

    1200: {
      slidesPerView: 5,
    },

    1400: {
      slidesPerView: 7,
      spaceBetween: 30,
    },
  },
});

const show_list = new Swiper(".show_list", {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  speed: 1000,
  loop: true,
  navigation: {
    nextEl: ".show_next",
    prevEl: ".show_prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

// shop
const shop_list = new Swiper(".shop_list", {
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  centeredSlides: true,
  speed: 1000,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

//inside
const inside_list = new Swiper(".inside_list", {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  loop: true,
});
