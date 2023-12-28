let sideBar = document.getElementById("side__bar");
let main = document.getElementById("main");
let sideNavs = document.getElementsByClassName("side__nav__items");
document.getElementById("arrow").addEventListener("click", function () {
  sideBar.classList.add("side__bg");
  sideBar.style.width = "55px";
  main.style.paddingLeft = "150px";
});
