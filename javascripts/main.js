$(document).ready(function () {
  var swiperBanner = new Swiper(".swiper-container.swiper-banner", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
  });

  var swiperTestimonials = new Swiper(".swiper-container.swiper-testimonial", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
    // autoplay: {
    //   delay: 3500,
    //   disableOnInteraction: false,
    // },
  });

  $("#navbarSupportedContent").on("show.bs.collapse", function () {
    $(".navbar").addClass("bg-white-toggle");
  });

  $("#navbarSupportedContent").on("hide.bs.collapse", function () {
    $(".navbar").removeClass("bg-white-toggle");
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() < $(".section-banner").height()) {
      $(".navbar").removeClass("bg-white");
      $(".navbar .navbar-brand img").attr(
        "src",
        "./assets/img/prohandy logo-white.svg"
      );
    } else {
      $(".navbar").addClass("bg-white");
      $(".navbar .navbar-brand img").attr(
        "src",
        "./assets/img/prohandy logo.svg"
      );
    }
  });
});
