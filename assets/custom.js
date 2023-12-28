let sideBar = document.getElementById("side__bar");
let main = document.getElementById("main");
document.getElementById("arrow").addEventListener("click", function () {
  sideBar.classList.add("side__bg");
  sideBar.style.width = "80px";
  main.style.paddingLeft = "150px";
  document.getElementById("side__nav").classList.add("sideIcon");

});
