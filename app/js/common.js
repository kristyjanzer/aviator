$(function() {
  $(function() {
    $('.header-menu-more').click(function() {
      $(this).toggleClass('active');
    });
});
});

// Burger Menu
const body = document.querySelector("body");
const header = document.querySelector(".header");
const burgerMenu = document.querySelector(".header .header-button-menu");
const burgerBody = document.querySelector(".header .header-button-menu__body");


burgerMenu.addEventListener("click", (e) => {
  header.classList.toggle("header-menu-open");
  burgerBody.classList.toggle("active");
  body.classList.toggle("lock");
  e.stopPropagation();
});

$(".header-menu").clone().appendTo(".header-button-menu__body");

// $(".header .header-button-menu__body a").addEventListener("click", (e) => {
//   $(".header").removeClass("header-menu-open");
//   $(".header .header-button-menu__body").removeClass("active");
//   e.stopPropagation();
// });

$(".header .header-button-menu__body a").on('click', function(){
  $(".header").removeClass("header-menu-open");
  $(".header .header-button-menu__body").removeClass("active");
});

// $("a").click(function(){
//   body.classList.toggle("lock");
// });