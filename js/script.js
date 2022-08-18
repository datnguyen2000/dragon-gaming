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