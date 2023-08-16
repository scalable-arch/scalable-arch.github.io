// 게시판 카테고리
const categoryLinks = document.querySelectorAll(".category-link");
const firstcategoryLinks = document.querySelector(".category-link");
const firstSection = document.querySelector(".taxonomy-section");
firstSection.style.display = "block";
firstcategoryLinks.classList.add("active");

let activeLink = null; // 초기값은 null

categoryLinks.forEach((link) => {
  link.addEventListener("click", function () {
    const category = this.dataset.category;
    const sections = document.querySelectorAll(".taxonomy-section");

    sections.forEach((section) => {
      section.style.display = "none";
    });

    firstcategoryLinks.classList.remove("active");
    // 기존에 활성화된 링크에 있는 active 클래스를 제거합니다.
    if (activeLink !== null) {
      activeLink.classList.remove("active");
    }

    // 클릭한 요소에 active 클래스를 추가하고 활성화된 링크를 업데이트합니다.
    this.classList.add("active");
    activeLink = this;

    const categorySection = document.getElementById(category);
    categorySection.style.display = "block";
  });
});
