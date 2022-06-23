$(document).ready(function(){

  $(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 600) {
            $(".header").addClass("header-active");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".header").removeClass("header-active");
        }
    });
  });
  
  });

new Swiper('.products .swiper-container', {
    slidesPerView: 1, //한번에 보여줄 슬라이드 개수
    spaceBetween: 10, //슬라이드 사이 여백
    centeredSlides: true, // 1번 슬라이드 가운데 보이기
    loop: false,

    navigation: {
      prevEl: '.products .swiper-prev',
      nextEl: '.products .swiper-next'
    }
});

const productsEl = document.querySelector('.promotion');
const productsToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function (){
  isHidePromotion = !isHidePromotion
  if (isHidePromotion) {
    // 숨김 처리!
    promotionEl.classList.add('hide');
  } else {
    // 보임 처리!
    promotionEl.classList.remove('hide');
  }
});

