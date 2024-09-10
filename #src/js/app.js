(function isWebP() {
   function testWebP(callback) {
      let webP = new Image();
      webP.onload = webP.onerror = function () {
         callback(webP.height == 2);
      };
      webP.src =
         "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
   }
   testWebP(function (support) {
      if (support == true) {
         document.querySelector("html").classList.add("webp");
      } else {
         document.querySelector("html").classList.add("no-webp");
      }
   });
})();

const youtubeSwiper = new Swiper(".youtube-section .swiper", {
   slidesPerView: 1,
   spaceBetween: 20,
   mousewheel: {
      enabled: true,
      forceToAxis: true,
   },
   autoplay: {
      enabled: true,
      delay: 1500,
   },
   loop: true,
   speed: 1000,
   breakpoints: {
      992: {
         slidesPerView: 2,
         spaceBetween: 42,
      },
   },
});
