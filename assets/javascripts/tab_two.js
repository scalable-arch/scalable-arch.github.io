// 게시판 카테고리
const categoryLinks = document.querySelectorAll(".cat-select");
const firstcategoryLinks = document.querySelector(".cat-select");
const firstSection = document.querySelector(".cat-select-section");
firstSection.style.display = "block";
firstcategoryLinks.classList.add("active");

let activeLink = null; // 초기값은 null


categoryLinks.forEach((link) => {
  link.addEventListener("click", function () {
    const category = this.dataset.category;
    const sections = document.querySelectorAll(".cat-select-section");

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

const categoryLinks2 = document.querySelectorAll(".cat-link2");
const firstcategoryLinks2 = document.querySelector(".cat-link2");
const firstSection2 = document.querySelector(".cat-section2");
firstSection2.style.display = "block";
firstcategoryLinks2.classList.add("active");

let activeLink2 = null; // 초기값은 null

categoryLinks2.forEach((link) => {
  link.addEventListener("click", function () {
    const category = this.dataset.category;
    const sections = document.querySelectorAll(".cat-section2");

    sections.forEach((section) => {
      section.style.display = "none";
    });
    
    firstcategoryLinks2.classList.remove("active");
    // 기존에 활성화된 링크에 있는 active 클래스를 제거합니다.
    if (activeLink2 !== null) {
      activeLink2.classList.remove("active");
    } 
    

    // 클릭한 요소에 active 클래스를 추가하고 활성화된 링크를 업데이트합니다.
    this.classList.add("active");
    activeLink2 = this;

    const categorySection = document.getElementById(category);
    categorySection.style.display = "block";
  });
});