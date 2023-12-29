let sideBar = document.getElementById("side__bar");
let main = document.getElementById("main");
document.getElementById("arrow").addEventListener("click", function () {
  sideBar.classList.add("side__bg");
  sideBar.style.width = "80px";
  main.style.paddingLeft = "150px";
  document.getElementById("side__nav").classList.add("sideIcon");
  this.classList.add("d-none")
  document.getElementById("hiddenArrow").classList.remove("d-none")
});
document.getElementById("hiddenArrow").addEventListener("click", function(){
    sideBar.classList.remove("side__bg");
    sideBar.style.width = "fit-content";
    main.style.paddingLeft = "250px";
    document.getElementById("side__nav").classList.remove("sideIcon");
    document.getElementById("arrow").classList.remove("d-none")
   this.classList.add("d-none");
})

var swiper = new Swiper(".cardSlider", {
  loop: true,
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
});
