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
  var right = document.getElementsByClassName("right-menu");

  right[0].style = "right:-300px; transition: right .3s;";
}

function unhideRight() {
  var right = document.getElementsByClassName("right-menu");

  right[0].style = "right:0; transition: right .3s;";
}

function login() {
  var login = document.getElementsByClassName("login-form");

  var register = document.getElementsByClassName("form-register");

  var border = document.getElementsByClassName("register");

  var borderLogin = document.getElementsByClassName("login");

  borderLogin[0].style = "border-bottom: 3.5px solid red;";
  border[0].style = "border:none;";

  login[0].style = "display:block;";
  register[0].style = "display:none;";
}

function register() {
  var login = document.getElementsByClassName("login-form");

  var register = document.getElementsByClassName("form-register");

  var border = document.getElementsByClassName("register");

  var borderLogin = document.getElementsByClassName("login");

  borderLogin[0].style = "border:none;";
  border[0].style = "border-bottom: 3.5px solid red;";

  register[0].style = "display:block;";
  login[0].style = "display:none;";
}

$(".form-control").on("keypress", function (e) {
  if (e.which == 13) {
    window.location.href = "search.html";
  }
});

// Filter category
var product = [
  {
    img: "img/New-game-1.png",
    name: "Out of Line",
    price: "4.99",
    genre: "adventure",
    show: "onSale",
    oldPrice: "8.99",
    salePercent: "-50%",
  },
  {
    img: "img/New-game-2.png",
    name: "Let's Buiuld A Zoo",
    price: "4.99",
    genre: "rolePlaying",
    show: "topSellers",
  },
  {
    img: "img/New-game-3.png",
    name: "Among Us",
    price: "4.99",
    genre: "rolePlaying",
    show: "onSale",
    oldPrice: "8.99",
    salePercent: "-50%",
  },
  {
    img: "img/New-game-4.png",
    name: "Skull - The Hero Slayer",
    price: "4.99",
    genre: "adventure",
    show: "topSellers",
  },
  {
    img: "img/New-game-5.png",
    name: "Family Man",
    price: "4.99",
    genre: "action",
    show: "newRelease",
  },
  {
    img: "img/Cate-1.png",
    name: "NecroSmith",
    price: "2.99",
    genre: "strategy",
    show: "newRelease",
  },
  {
    img: "img/Cate-2.png",
    name: "Escape Acedemy",
    price: "8.99",
    genre: "adventure",
    show: "onSale",
    oldPrice: "10.99",
    salePercent: "-20%",
  },
  {
    img: "img/Cate-3.png",
    name: "Hell Pie",
    price: "3.99",
    genre: "rolePlaying",
    show: "onSale",
    oldPrice: "4.99",
    salePercent: "-10%",
  },
  {
    img: "img/Cate-4.png",
    name: "Shop Titans",
    price: "1.99",
    genre: "strategy",
    show: "onSale",
    oldPrice: "2.99",
    salePercent: "-10%",
  },
  {
    img: "img/Cate-5.png",
    name: "Hazel Sky",
    price: "7.99",
    genre: "rolePlaying",
    show: "onSale",
    oldPrice: "10.99",
    salePercent: "-10%",
  },
  {
    img: "img/Cate-6.png",
    name: "It Takes Two",
    price: "4.99",
    genre: "rolePlaying",
    show: "onSale",
    oldPrice: "8.99",
    salePercent: "-30%",
  },
  {
    img: "img/Cate-7.png",
    name: "Dead Age",
    price: "2.99",
    genre: "action",
    show: "newRelease",
  },
  {
    img: "img/Cate-8.png",
    name: "The Tale of Biston",
    price: "8.99",
    genre: "action",
    show: "onSale",
    oldPrice: "10.99",
    salePercent: "-20%",
  },
  {
    img: "img/Cate-9.png",
    name: "Ageis Descent",
    price: "3.99",
    genre: "action",
    show: "newRelease",
  },
  {
    img: "img/Cate-10.png",
    name: "Doodle Devil",
    price: "1.99",
    genre: "strategy",
    show: "newRelease",
  },
];

let filterDefault = document.getElementById("filter-game").innerHTML;

$(".find-now").click(function () {
  let genre = document.getElementById("Genre").value;
  let show = document.getElementById("show").value;

  let innerHTMLs = "";

  let result = product.filter(
    (game) => game.genre == genre && game.show == show
  );

  if (genre == "all" && show == "all") {
    innerHTMLs = filterDefault;
  }

  for (let item of result) {
    if (item.show != "onSale") {
      innerHTMLs += `
        <div class="item-box col-lg-2 col-md-3 col-sm-4 col-6">
          <a href="details.html">
              <div class="item">
                  <div class="item-image position-relative">
                      <img src="${item.img}" alt="">
                      <div class="new-bg"></div>
                  </div>
                  <div class="item-info">
                      <div class="item-name">${item.name}</div>
                      <div class="item-price d-flex">
                          <div class="latest-price">$${item.price}</div>
                      </div>
                  </div>
              </div>
          </a>
        </div>`;
    } else {
      innerHTMLs += `
        <div class="item-box col-lg-2 col-md-3 col-sm-4 col-6">
          <a href="details.html">
              <div class="item">
                  <div class="item-image position-relative">
                      <img src="${item.img}" alt="">
                      <div class="new-bg"></div>
                      <div class="sale-percent">${item.salePercent}</div>
                  </div>
                  <div class="item-info">
                      <div class="item-name">${item.name}</div>
                      <div class="item-price d-flex">
                          <div class="latest-price">$${item.price}</div>
                          <div class="old-price">$${item.oldPrice}</div>
                      </div>
                  </div>
              </div>
          </a>
        </div>`;
    }
  }

  document.getElementById("filter-game").innerHTML = innerHTMLs;

  console.log(innerHTMLs);
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
