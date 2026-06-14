const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
 allowTouchMove: false,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  autoplay: {
    delay: 3000, // 3 seconds
    disableOnInteraction: true,
   // document.querySelector('main').style.backgroundColor = 'var(  --color-ivory)';
//  document.body.style.overflow = 'auto';
  },
  
   effect: "fade",
  fadeEffect: {
    crossFade: true
  },
});
function linkClose(){
 document.querySelector('.link-contents').style.right = '-50vw';
}
  function menuList(){
    document.querySelector('.link-contents').style.right = '0px';
  }
 