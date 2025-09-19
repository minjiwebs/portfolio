
//aos

AOS.init({
  once: false,
  duration: 1000,
  disable: window.innerWidth < 768,
  speed: 2000,
});

//WOW

new WOW().init();

// icon
$(".icon a").click(function () {
  $("html,body").animate({ scrollTop: $(this.hash).offset().top }, 1000);
});

// 스크롤 부드럽게
const lenis = new Lenis({
  autoRaf: true,
});



//estrelas
function init() {

  // 별의 스타일, 크기, 투명도 설정
  var style = ["style1", "style2", "style3", "style4"];
  var tam = ["tam1", "tam1", "tam1", "tam2", "tam3"];
  var opacity = ["opacity1", "opacity1", "opacity1", "opacity2", "opacity2", "opacity3"];

  // 랜덤 값 생성 함수
  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  // 별을 배치하는 함수
  function criarEstrelas() {
    var estrela = "";
    //var qtdeEstrelas = 300;
    var noite = document.querySelector(".constelacao");
    var widthWindow = document.documentElement.clientWidth;
    var heightWindow = window.innerHeight; // 현재 창의 높이


    if (widthWindow > 1200) {
      qtdeEstrelas = 400; // 큰 화면에서는 많은 별
    } else if (widthWindow > 768) {
      qtdeEstrelas = 150; // 중간 화면에서는 조금 적은 별
    } else {
      qtdeEstrelas = 100; // 작은 화면에서는 적은 별
    }


    var noite = document.querySelector(".constelacao");
    var widthWindow = document.documentElement.clientWidth;
    var heightWindow = 500;




    for (var i = 0; i < qtdeEstrelas; i++) {
      estrela += "<span class='estrela " + style[getRandomArbitrary(0, 4)] + " " + opacity[getRandomArbitrary(0, 6)] + " "
        + tam[getRandomArbitrary(0, 5)] + "' style='animation-delay: ." + getRandomArbitrary(0, 9) + "s; left: "
        + getRandomArbitrary(0, widthWindow) + "px; top: " + getRandomArbitrary(0, heightWindow) + "px;'></span>";
    }

    noite.innerHTML = estrela;
  }

  //meteoros
  var numeroAleatorio = 1000;
  function carregarMeteoro() {
    setTimeout(carregarMeteoro, numeroAleatorio);
    numeroAleatorio = getRandomArbitrary(2500, 10000);
    var meteoro = "<div class='meteoro " + style[getRandomArbitrary(0, 4)] + "'></div>";
    document.getElementsByClassName('chuvaMeteoro')[0].innerHTML = meteoro;
    setTimeout(function () {
      document.getElementsByClassName('chuvaMeteoro')[0].innerHTML = "";
    }, 1000);
  }

  // 화면 크기 변경 시 별을 다시 생성하는 이벤트 리스너
  window.addEventListener("resize", function () {
    criarEstrelas();
  });

  // 페이지 로드 시 별 생성 및 유성 시작
  criarEstrelas();
  setTimeout(function () {
    carregarMeteoro();
  }, numeroAleatorio);
}

window.onload = init;

// slide
const program_list = new Swiper(".program_list", {
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  fadeEffect: {
    crossFade: true, // 슬라이드 전환 시 부드럽게 페이드
  },
  spaceBetween: 0, // 슬라이드 간 간격이 없어야 깔끔하게 페이드
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true, // 무한 반복 설정
});



// schedule
$(".schedule_txt button").click(function () {
  $(this).addClass("active");
  $(this).siblings().removeClass("active");

  let number = $(this).index();
  $(".schedule_table table ").eq(number).fadeIn().siblings().hide();
});







