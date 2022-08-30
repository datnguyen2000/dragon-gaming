// Slick game on sale
$(document).ready(function () {
  $(".sale-item").slick({
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
          slidesToShow: 1,
        },
      },
    ],
  });
});

// Slick new releases
$(document).ready(function () {
  $(".new-game-item").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: `<button type='button' class='slick-prev slick-arrow'> <i class="fa-solid fa-circle-chevron-left"></i></button>`,
    nextArrow: `<button type='button' class='slick-next slick-arrow'><i class="fa-solid fa-circle-chevron-right"></i></button>`,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
});

// Hide-unhide cart and user
$(".navbar-toggler").click(function () {
  var icon = $(".header-icon");
  console.log(icon[0]);

  if (icon[0].style.display === "flex") {
    icon[0].style.display = "none";
  } else {
    icon[0].style.display = "flex";
  }
});

// Highlight current menu
$(function () {
  var url = window.location.href;
  url = url.substr(url.lastIndexOf("/") + 1);
  if (url == "") {
    url = "index.html";
  }
  console.log(url);
  $(".navbar-nav li").each(function () {
    var href = $(this).find("a").attr("href");

    if (url === href) {
      $(this).find("a").addClass("active");
    }
  });
});

// function popUp() {
//    var popup = document.getElementById('popupBox');

//    // get the close action element
//    var close = document.getElementsByClassName("close")[0];

//    popup.style.display = "block";

//    // close the Popup once close element is clicked
//    close.onclick = function() {
//        popup.style.display = "none";
//    }

//    // close the Popup when user clicks outside of the box
//    window.onclick = function(event) {
//        if (event.target == popup) {
//            popup.style.display = "none";
//        }
//    }
// }
