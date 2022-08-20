$(document).ready(function(){
    $('.sale-item').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        isFinite: true,
        dots: true,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1
              }
            },
        ]
    });
});

$(document).ready(function(){
  $('.new-game-item').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      prevArrow: `<button type='button' class='slick-prev slick-arrow'> <i class="fa-solid fa-circle-chevron-left"></i></button>`,
      nextArrow: `<button type='button' class='slick-next slick-arrow'><i class="fa-solid fa-circle-chevron-right"></i></button>`,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2
          }
        },
    ]
  });
});

$('.navbar-toggler').click(function(){
  var icon = $('.header-icon');
  console.log(icon[0]);

  if (icon[0].style.display === "flex") {
    icon[0].style.display = "none";
  }
  else {
    icon[0].style.display = "flex";
  }
  
});