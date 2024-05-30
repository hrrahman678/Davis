cursorMove();


function cursorMove(){
  var cursor = document.querySelector(".cursor");

document.addEventListener("mousemove",function(e){
  cursor.style.cssText  = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
})
}

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  loop: true,
  breakpoints: {
    200: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});