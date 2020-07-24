var swiperBanner = new Swiper('.swiper-container.swiper-banner', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

var swiperTestimonials = new Swiper('.swiper-container.swiper-testimonial', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  }
});

$(document).ready(function() {
  $(window).scroll(function() {
    if($(this).scrollTop() < $('.section-banner').height()) { 
        $('.navbar').removeClass('solid');
    } else {
        $('.navbar').addClass('solid');
    }
  });
});