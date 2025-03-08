// Open menu
$(function() {
  $('.header-menu-more').click(function() {
    $(this).toggleClass('active');
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

  // $(".header-menu-more").click(function() {
  //   $(".header").removeClass("header-menu-open");
  //   $(".header .header-button-menu__body").removeClass("active");
  // });
});

$(".header-menu").clone().appendTo(".header-button-menu__body");



// Accordion
let AccordionBlock = function (el, multiple) {
  this.el = el || {};
  // more then one submenu open?
  this.multiple = multiple || false;

  let accordionMenuLink = this.el.find('.table-of-contents__text');
  accordionMenuLink.on('click',
    { el: this.el, multiple: this.multiple },
    this.dropdown);
};

AccordionBlock.prototype.dropdown = function (e) {
  let $el = e.data.el,
    $this = $(this),
    //this is the ul.table-of-contents__content
    $next = $this.next();

  $next.slideToggle();
  $this.parent().toggleClass('open');

  if (!e.data.multiple) {
    //show only one menu at the same time
    $el.find('.table-of-contents__content').not($next).slideUp().parent().removeClass('open');
  }
}

let accordionBlock = new AccordionBlock($('.table-of-contents'), false);