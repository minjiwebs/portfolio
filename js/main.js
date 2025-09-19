//aos
AOS.init({
  once: false,
  duration: 1000,
  disable: window.innerWidth < 768,
  speed: 2000,
});

// h4 border 애니메이션
function animateH4Borders() {
  const h4Elements = document.querySelectorAll("h4");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        } else {
          // 영역을 벗어나면 animate 클래스 제거
          entry.target.classList.remove("animate");
        }
      });
    },
    {
      threshold: 0.3,
      rootMargin: "0px 0px -100px 0px",
    }
  );

  h4Elements.forEach((h4) => {
    observer.observe(h4);
  });
}

// 커스텀 커서
$(function () {
  const $cursor = $(".cursor");
  if ($cursor.length === 0) return;

  $(window).on("mousemove", function (e) {
    const x = e.clientX;
    const y = e.clientY;
    $cursor.css({
      left: x + "px",
      top: y + "px",
    });
  });

  $(document).on("mouseenter", "a, button", function () {
    $cursor.css("transform", "scale(2)");
  });

  $(document).on("mouseleave", "a, button", function () {
    $cursor.css({
      transform: "scale(1)",
      background: "#fff",
    });
  });
});

// 스크롤 부드럽게
const lenis = new Lenis({
  autoRaf: true,
});

// Lenis + ScrollTrigger 연동
function raf(time) {
  lenis.raf(time);
  ScrollTrigger.update(); // ← 필수!
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// 영역이동
// Lenis 부드러운 스크롤 + 앵커 이동
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      lenis.scrollTo(target);
    }
  });
});

// header
$(function () {
  var prevScrollTop = 0;
  document.addEventListener("scroll", function () {
    // 1024px 초과에서만 헤더 스크롤 효과 실행
    if (window.innerWidth > 1024) {
      var nowScrollTop = $(window).scrollTop();

      if (nowScrollTop > prevScrollTop) {
        $("header").addClass("active");
      } else {
        $("header").removeClass("active");
      }
      prevScrollTop = nowScrollTop;
    }
  });
});

// scrolla.js
$(function () {
  $(".animate").scrolla({
    mobile: true,
    once: false,
  });
});

// svg. path 길이
$(function () {
  $(".svgAni")
    .find("#svgAni05")
    .each(function (i, path) {
      var length = path.getTotalLength();
    });
});

//textbox
gsap.registerPlugin(ScrollTrigger);

$(function () {
  gsap.fromTo(
    ".textbox .mask span",
    { "background-size": "0% 100%" },
    {
      "background-size": "100% 100%",
      scrollTrigger: {
        trigger: ".textbox",
        pinnedContainer: ".textbox",
        start: "0% 70%",
        end: "100% 100%",
        scrub: 10,
        // markers: true,
      },
    }
  );

  gsap.timeline({
    scrollTrigger: {
      trigger: ".eveyonetext_txt",
      start: "100% 60%",
      end: "0% 100%",
      scrub: 1,
      //markers:true
    },
  });
});

// .con01 gsap 애니메이션
$(function () {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".con01",
        start: "0% 80%",
        end: "100% 100%",
        scrub: 1,
        // markers: true
      },
    })

    .to(".svgAni path", { stroke: "#000", ease: "none", duration: 5 }, 0)
    .to(".scroll", { opacity: 0, ease: "none", duration: 5 }, 0)
    .fromTo(
      ".videoWrap video",
      { "clip-path": "inset(60% 60% 60% 60% round 30%)" },
      {
        "clip-path": "inset(0% 0% 0% 0% round 0%)",
        ease: "none",
        duration: 10,
      },
      0
    );
});

$(function () {
  // .section과 .box 요소가 존재하는지 확인
  if ($(".section").length > 0 && $(".box").length > 0) {
    const fixedHeaderHeight = $("header").outerHeight();
    const sectionTop = $(".section").offset().top - fixedHeaderHeight;

    $(window).on("scroll", function () {
      if ($(window).scrollTop() > sectionTop) {
        $(".box").addClass("active");
      }
    });
  }
});

//ham

$(".ham").click(function () {
  $(this).toggleClass("active");
  $(".mgnb_wrap").toggleClass("active");

  $(".dim").fadeToggle();
});

// 워크리스트 아이템 개별 호버 효과
$(document).ready(function () {
  $(".workList li").hover(
    function () {
      const $current = $(this);
      $(".workList li").not($current).addClass("blurred");
    },
    function () {
      $(".workList li").removeClass("blurred");
    }
  );
});

// 팝업 관리
const PopupManager = {
  currentPopup: null,
  savedScrollPosition: 0,

  init() {
    this.bindEvents();
  },

  bindEvents() {
    // workList 아이템 클릭 이벤트
    document.querySelectorAll(".workList li a").forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        const popupType = item.getAttribute("data-popup");
        this.openWorkPopup(popupType);
      });
    });

    // 닫기 버튼 이벤트
    document.querySelectorAll(".close-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        this.closePopup();
      });
    });

    // 오버레이 클릭으로 닫기
    document.querySelectorAll(".popup-overlay").forEach((overlay) => {
      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
          this.closePopup();
        }
      });
    });

    // ESC 키로 닫기
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.currentPopup) {
        this.closePopup();
      }
    });
  },

  openWorkPopup(popupType) {
    const popup = document.getElementById("workPopup");

    if (popup) {
      // 모든 팝업 컨텐츠 숨기기
      const allPopupContents = popup.querySelectorAll(".popup-content");
      allPopupContents.forEach((content) => {
        content.classList.remove("active");
      });

      // 해당하는 팝업 컨텐츠만 표시
      const targetContent = popup.querySelector(`[data-popup="${popupType}"]`);
      if (targetContent) {
        targetContent.classList.add("active");
      }

      // 현재 스크롤 위치 저장
      this.savedScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;

      // 팝업 표시
      popup.classList.add("active");
      this.currentPopup = popup;

      // 바디 스크롤 막기
      document.body.classList.add("popup-open");

      // 팝업 스크롤 이벤트 처리
      this.handlePopupScroll(popup);

      // 접근성을 위한 포커스 설정
      const closeBtn = popup.querySelector(".close-btn");
      if (closeBtn) {
        closeBtn.focus();
      }
    }
  },

  handlePopupScroll(popup) {
    const popupContent = popup.querySelector(".popup-content.active");

    if (popupContent) {
      // 팝업 내부에서 휠 스크롤 처리
      popupContent.addEventListener(
        "wheel",
        (e) => {
          e.stopPropagation(); // 이벤트 전파 방지

          const scrollTop = popupContent.scrollTop;
          const scrollHeight = popupContent.scrollHeight;
          const clientHeight = popupContent.clientHeight;

          // 스크롤 가능한 범위 내에서만 스크롤 허용
          if (
            (e.deltaY > 0 && scrollTop < scrollHeight - clientHeight) ||
            (e.deltaY < 0 && scrollTop > 0)
          ) {
            popupContent.scrollTop += e.deltaY;
          }
        },
        { passive: false }
      );

      // 팝업 오버레이에서 스크롤 방지 (팝업 내부 제외)
      popup.addEventListener(
        "wheel",
        (e) => {
          // 팝업 컨텐츠 내부가 아닌 경우에만 스크롤 방지
          if (!popupContent.contains(e.target)) {
            e.preventDefault();
          }
        },
        { passive: false }
      );

      // 전체 문서에서 스크롤 방지 (팝업 내부 제외)
      document.addEventListener(
        "wheel",
        (e) => {
          // 팝업 내부가 아닌 경우에만 스크롤 방지
          if (!popup.contains(e.target)) {
            e.preventDefault();
          }
        },
        { passive: false }
      );
    }
  },

  closePopup() {
    if (this.currentPopup) {
      // 모든 팝업 컨텐츠 숨기기
      const allPopupContents =
        this.currentPopup.querySelectorAll(".popup-content");
      allPopupContents.forEach((content) => {
        content.classList.remove("active");
      });

      this.currentPopup.classList.remove("active");
      this.currentPopup = null;

      // 바디 스크롤 복원
      document.body.classList.remove("popup-open");
      document.body.style.overflow = ""; // 추가 스크롤 상태 정리

      // 저장된 스크롤 위치로 복원
      window.scrollTo(0, this.savedScrollPosition);

      // 팝업 스크롤 이벤트 리스너 제거
      this.removePopupScrollListeners();
    }
  },

  removePopupScrollListeners() {
    // 전체 문서의 스크롤 이벤트 리스너들 제거
    // 모든 wheel 이벤트 리스너를 제거하기 위해 새로운 리스너 추가
    const removeAllWheelListeners = () => {
      // 빈 함수로 기존 리스너들을 덮어씀
    };
    document.addEventListener("wheel", removeAllWheelListeners, {
      passive: false,
    });
    document.removeEventListener("wheel", removeAllWheelListeners);

    // 팝업 클론 후 교체하여 이벤트 리스너 정리
    const popup = document.getElementById("workPopup");
    if (popup) {
      const newPopup = popup.cloneNode(true);
      popup.parentNode.replaceChild(newPopup, popup);

      // close 버튼 이벤트 리스너 다시 연결
      const closeBtn = newPopup.querySelector(".close-btn");
      if (closeBtn) {
        closeBtn.addEventListener("click", () => {
          this.closePopup();
        });
      }

      // 오버레이 클릭 이벤트 리스너 다시 연결
      newPopup.addEventListener("click", (e) => {
        if (e.target === newPopup) {
          this.closePopup();
        }
      });
    }
  },
};

// 페이지 로드 시 팝업 매니저 초기화
document.addEventListener("DOMContentLoaded", () => {
  PopupManager.init();
});

function pinCon04Sections() {
  const sections = gsap.utils.toArray(".con04_box.js-pin");

  sections.forEach((section, index) => {
    // 마지막 박스는 pin 효과를 적용하지 않음
    const isLast = index === sections.length - 1;

    if (!isLast) {
      ScrollTrigger.create({
        trigger: section,
        start: "bottom bottom",
        pin: section,
        pinSpacing: false,
        onEnter: () => section.classList.add("hide"),
        onLeave: () => section.classList.remove("hide"),
        onEnterBack: () => section.classList.add("hide"),
        onLeaveBack: () => section.classList.remove("hide"),
        // markers: true // 디버깅용 마커
      });
    }
  });
}

// DOM 로드 후 실행
window.addEventListener("DOMContentLoaded", () => {
  pinCon04Sections();
});

function MarqueeLoopContainer() {
  const lerp = (current, target, factor) =>
    current * (1 - factor) + target * factor;

  class LoopingText {
    constructor(el) {
      this.el = el;
      this.lerp = { current: 0, target: 0 };
      this.interpolationFactor = 0.1;
      this.speed = 0.01;
      this.direction = 1;
      this.lastScrollTop = 0;
      this.multiplier = 1;
      this.reverse = el.classList.contains("reserve");

      // Init
      this.el.style.cssText =
        "position: relative; display: inline-flex; white-space: nowrap;";

      // 3개의 marquee-content 요소에 맞게 설정 - 간격 줄임
      if (this.el.children.length >= 3) {
        this.el.children[0].style.cssText = "position: relative;";
        this.el.children[1].style.cssText = "position: absolute; left: -55%;"; // -100%에서 -50%로 변경하여 간격 줄임
        this.el.children[2].style.cssText = "position: absolute; left: 55%;"; // 100%에서 50%로 변경하여 간격 줄임
      }

      this.events();
      this.render();
    }

    events() {
      window.addEventListener("scroll", (e) => {
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;

        this.direction = scrollTop > this.lastScrollTop ? 1 : -1;
        this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        this.multiplier = 6;
      });
    }

    animate() {
      let direction = this.reverse ? -this.direction : this.direction;

      if (direction == 1) {
        this.lerp.target -= this.speed * this.multiplier;
      } else {
        this.lerp.target += this.speed * this.multiplier;
      }

      this.lerp.current = lerp(
        this.lerp.current,
        this.lerp.target,
        this.interpolationFactor
      );

      // 무한 루프를 위한 위치 계산 - 간격에 맞춰 조정
      const resetPoint = 55; // left 값과 동일하게 설정

      // 왼쪽으로 이동할 때 (direction = 1)
      if (direction === 1 && this.lerp.target < -resetPoint) {
        this.lerp.target += resetPoint;
        this.lerp.current += resetPoint;
      }
      // 오른쪽으로 이동할 때 (direction = -1)
      else if (direction === -1 && this.lerp.target > resetPoint) {
        this.lerp.target -= resetPoint;
        this.lerp.current -= resetPoint;
      }

      const x = this.lerp.current;
      this.el.style.transform = "translateX(" + x + "%)";

      // 멀티플라이어를 점진적으로 감소시켜 자연스러운 감속
      this.multiplier = Math.max(1, this.multiplier * 0.95);
    }

    render() {
      this.animate();
      window.requestAnimationFrame(() => this.render());
    }
  }

  document
    .querySelectorAll(".loop-container")
    .forEach((el) => new LoopingText(el));
}

// 함수 실행
MarqueeLoopContainer();
animateH4Borders();
