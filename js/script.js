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
    var className = $(this).find("a").hasClass("nav-link");
    
    if (url === href) {
      $(this).find("a").addClass("active-menu");
    }
  });
});


function hideRight() {
  var right = document.getElementsByClassName('right-menu');

  right[0].style = "right:-300px; transition: right .3s;";
}

function unhideRight() {
  var right = document.getElementsByClassName('right-menu');

  right[0].style = "right:0; transition: right .3s;";
}


function login() {
  var login = document.getElementsByClassName('login-form');

  var register = document.getElementsByClassName('form-register');

  var border = document.getElementsByClassName('register');

  var borderLogin = document.getElementsByClassName('login');

  borderLogin[0].style = "border-bottom: 3.5px solid red;";
  border[0].style = "border:none;";

  login[0].style = "display:block;";
  register[0].style = "display:none;";
}

function register() {
  var login = document.getElementsByClassName('login-form');

  var register = document.getElementsByClassName('form-register');

  var border = document.getElementsByClassName('register');

  var borderLogin = document.getElementsByClassName('login');

  borderLogin[0].style = "border:none;";
  border[0].style = "border-bottom: 3.5px solid red;";

  register[0].style = "display:block;";
  login[0].style = "display:none;";
}

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
