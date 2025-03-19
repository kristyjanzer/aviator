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



// Show all button
$('.bookmakers-block__button').click(function (e) {
  e.preventDefault();
  e.returnValue = false;
  
  let length_before_toggle = $('.bookmakers-block-list__item:hidden').length;
  
  $('.bookmakers-block-list__item:hidden').slice(0, 10).toggle();
  
  if ($('.bookmakers-block-list__item:hidden').length == 0) {
    if (length_before_toggle == 0) {
      $('.bookmakers-block-list__item--hidden').toggle();
      
      $('html, body').animate({
        scrollTop: $('.bookmakers-block').offset().top
      }, 'slow');
      
      $('.bookmakers-block__button-text').text("Показать еще");
      $('.bookmakers-block__button').removeClass('hide');
    } else {
      $('.bookmakers-block__button-text').text("Скрыть");
      $('.bookmakers-block__button').addClass('hide');
    }
  } else {
    $('.bookmakers-block__button-text').text("Показать еще");
  }
});



// Slider Default
$('.slider-default').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  arrows: true,
  infinite: false,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 900,
        settings: {
          dots: false,
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true
        },
    }
  ]
});



// Slider Little
$('.slider-little').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
  infinite: false,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 900,
        settings: {
          dots: false,
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true
        },
    }
  ]
});



// Slider Reviews
$('.reviews-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  arrows: true,
  infinite: true,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 900,
        settings: {
          dots: false,
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true
        },
    }
  ]
});



// Tabs
const wrapper = $(".m-tabs");
const tabToggle = wrapper.find(".m-tabs-menu");

function openTab() {
    let info = $(this).next(".m-tabs-info"),
        activeItems = wrapper.find(".active");
    
    if (!$(this).hasClass('active') || activeItems.length === 0) {
      $(this).add(info).add(activeItems).toggleClass('active');
      const activeContentHeight = info.outerHeight(true);
      wrapper.css('min-height', activeContentHeight + 'px');
    }
};

tabToggle.on('click', openTab);

$(window).on('load', function() {
  const initialInfo = tabToggle.first().next(".m-tabs-info");
  const initialHeight = initialInfo.outerHeight(true);
  wrapper.css('min-height', initialHeight + 'px');
  
  setTimeout(function() {
    tabToggle.first().trigger('click');
  }, 100);
});

$(window).on('resize', function() {
    const currentActiveContent = wrapper.find('.m-tabs-info.active');
    const currentHeight = currentActiveContent.outerHeight(true);
    wrapper.css('min-height', currentHeight + 'px');
});



// FAQ Tabs
$(".faq-accordion__title").click(function() {
  accordionChange($(this));
});

function accordionChange(el) {
  el.toggleClass('active');
  
  let panel = el.next();
  
  panel.css({
    maxHeight: '0px',
  });
  
  let contentHeight = panel[0].scrollHeight;
  
  if (el.hasClass('active')) {
    panel.css({
      maxHeight: contentHeight + 'px',
    });
  } else {
    panel.css('max-height', '0px');
    setTimeout(function() {
      panel.css({
        maxHeight: '',
      });
    }, 300);
  }
}


// Scroll to ID
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.hash;
    const target = document.querySelector(targetId);
    
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});