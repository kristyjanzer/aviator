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


// Show all button
$('.bookmakers-block__button').click(function (e) {
  e.preventDefault(); e.returnValue = !1; 
  let length_before_toggle = $('.bookmakers-block-list__item:hidden').length; 
  $('.bookmakers-block-list__item:hidden').slice(0, 10).toggle(); 
  if ($('.bookmakers-block-list__item:hidden').length == 0) {
    if (length_before_toggle == 0) {
      $('.bookmakers-block-list__item--hidden').toggle();
      $('html, body').animate({ scrollTop: $('.bookmakers-block').position().top }, 'slow');
      $('.bookmakers-block__button-text').text("Показать еще");
      $('.bookmakers-block__button').removeClass('hide');
    }
    else {
      $('.bookmakers-block__button-text').text("Скрыть");
      $('.bookmakers-block__button').addClass('hide');
    }
  }
  else {
    $('.bookmakers-block__button-text').text("Показать еще");
  }
});


// Uni Slider
$('.uni-slider').slick({
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


// Tabs
$(document).on("click", ".m-tabs-menu__item", function() {
	let numberIndex = $(this).index();

	if (!$(this).is("active")) {
		$(".m-tabs-menu__item").removeClass("active");
		$(".m-tabs-info__item").removeClass("active");

		$(this).addClass("active");
		$(".m-tabs-info").find(".m-tabs-info__item:eq(" + numberIndex + ")").addClass("active");

		let listItemHeight = $(".m-tabs-info")
			.find(".m-tabs-info__item:eq(" + numberIndex + ")")
			.innerHeight();
		$(".m-tabs-info").height(listItemHeight + "px");
	}
});
