// 로딩 페이지를 표시하는 함수
var loadingPage = document.createElement("div");
loadingPage.className = "loading-page";

function showLoadingPage() {
  // 로딩 페이지 내용 설정
  loadingPage.innerHTML = `<div class="container">
  <div class="coast">
    <div class="wave-rel-wrap">
      <div class="wave"></div>
    </div>
  </div>
  <div class="coast delay">
    <div class="wave-rel-wrap">
      <div class="wave delay"></div>
    </div>
  </div>
  <div class="text1 text-w">Scalable</div>
  <div class="text1 text-a">Architecture</div>
  <div class="text1 text-e">Lab</div>
</div>`;

  // 로딩 페이지 <div> 요소를 문서의 끝에 추가
  document.body.appendChild(loadingPage);
}

if (window.location.pathname === "/") {
  showLoadingPage();
  window.addEventListener("load", function () {
    setTimeout(() => {
      loadingPage.className = "loading-page remove";
    }, 1000);
  });
}
