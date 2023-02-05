const menuIcon = document.querySelector(".header .links .icon");
const menu = document.querySelector(".header .links ul");
const goUpBtn = document.querySelector("button.go-up");

menuIcon.onclick = function () {
  menu.classList.toggle("show");
};

window.onscroll = function () {
  if (scrollY > 1200) {
    goUpBtn.classList.add("show-btn");
  } else {
    goUpBtn.classList.remove("show-btn");
  }
};
goUpBtn.onclick = function () {
  window.scrollTo({
    top: 0,
  });
};
