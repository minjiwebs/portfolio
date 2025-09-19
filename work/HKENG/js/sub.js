document.addEventListener("DOMContentLoaded", function () {
  const pageLinks = document.querySelectorAll(".paging li a"); // 페이지 번호 링크 가져오기

  // 2번 페이지에 'on' 클래스 추가 (2번 페이지가 기본 선택 상태)
  if (pageLinks.length > 1) {
    pageLinks[1].classList.add("on"); // 2번 페이지 활성화 (배열은 0부터 시작하므로 index 1)
  }

  pageLinks.forEach(link => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // 페이지 이동 방지

      // 모든 페이지에서 'on' 클래스 제거
      pageLinks.forEach(item => item.classList.remove("on"));

      // 클릭한 페이지에 'on' 클래스 추가
      this.classList.add("on");
    });
  });
});