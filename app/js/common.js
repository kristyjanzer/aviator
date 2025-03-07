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

  if($('.header-menu-more').hasClass('active')) {
    $(".header").addClass("header-menu-open");
    $(".header .header-button-menu__body").addClass("active");
  }
});

$(".header-menu").clone().appendTo(".header-button-menu__body");

$(".header-menu-more").addEventListener("click", (e) => {
  $(".header").removeClass("header-menu-open");
  $(".header .header-button-menu__body").removeClass("active");
  e.stopPropagation();
});
