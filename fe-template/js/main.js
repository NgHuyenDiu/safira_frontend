$(".arrow-down").click(function (e) {
  e.preventDefault();
  $(".categories").toggle();
});

// slide
$(document).ready(function () {
  $(".owl-one").owlCarousel({
    items: 1,
    loop: true,

    autoplay: true,
    autoplayTimeout: 10000,
    autoplayHoverPause: false,
  });
});

$(document).ready(function () {
  $(".owl-two").owlCarousel({
    items: 5,
    //loop:true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 10000,
    autoplayHoverPause: false,
    nav: true,
    navText: [
      '<i class="fas fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    ],
  });
});

$(document).ready(function () {
  $(".owl-three").owlCarousel({
    items: 2,
    //loop:true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 10000,
    autoplayHoverPause: false,
    autoWidth:true,
    nav: true,
    navText: [
      '<i class="fas fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    ],
  });
});

$(document).ready(function () {
  $(".owl-four").owlCarousel({
    items: 3,
    //loop:true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 10000,
    autoplayHoverPause: false,
    nav: true,
    navText: [
      '<i class="fas fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    ],
  });
});

$(document).ready(function () {
  $(".owl-five").owlCarousel({
    items: 3,
    //loop:true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 10000,
    autoplayHoverPause: false,
    nav: true,
    navText: [
      '<i class="fas fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    ],
  });
});

$(document).ready(function () {
  $(".owl-six").owlCarousel({
    items: 1,
   
    dots: false,
    // autoplay: true,
    // autoplayTimeout: 10000,
    // autoplayHoverPause: false,
    
  });
});

$(document).ready(function () {
  $(".owl-seven").owlCarousel({
    items: 1,
   
    dots: false,
    // autoplay: true,
    // autoplayTimeout: 10000,
    // autoplayHoverPause: false,
    
  });
});

$(document).ready(function () {
  $(".owl-eight").owlCarousel({
    items: 1,
  
    dots: false,
    // autoplay: true,
    // autoplayTimeout: 10000,
    // autoplayHoverPause: false,
   
  });
});

$(document).ready(function () {
  $(".owl-nine").owlCarousel({
    items: 1,
    dots: false,  
  });
});

function getTime(deadLine) {
  const deadLineDate = new Date(deadLine); // chuyen String thanh time
  const now = new Date(); // thoi gian hien tai
  // tinh khoang thoi gian
  const distance = (deadLineDate - now) / 1000; // giay
  const days = Math.floor(distance / 3600 / 24);
  const hours = Math.floor(distance / 3600) % 24;
  const mins = Math.floor(distance / 60) % 60;
  const secs = Math.floor(distance) % 60;
  // render html
  $(".time-days").text(formatTime(days));
  $(".time-hours").text(formatTime(hours));
  $(".time-mins").text(formatTime(mins));
  $(".time-secs").text(formatTime(secs));
}
function formatTime(time) {
  return `0${time}`.slice(-2);
}

getTime("2021/12/31"); // chi cay 1 lan

setInterval(() => {
  getTime("2021/12/31");
}, 1000);


$(window).scroll(function () {
  // lay vi tri hien tai cua thanh scroll  jqScrollTopget
  const currentPos = $(this).scrollTop();
  if (currentPos > 300) {
    // them class fixed vao header
    // them class fixed vao totop
    $(".headerFix").addClass("fixed");
    $(".toTop").addClass("fixed");
  } else {
    $(".headerFix").removeClass("fixed");
    $(".toTop").removeClass("fixed");
  }
});
$(".toTop").click(function (e) {
  e.preventDefault();
  $("body, html").animate({// cho phep thay doi them cac hieu ung
    scrollTop: 0,
  });
});