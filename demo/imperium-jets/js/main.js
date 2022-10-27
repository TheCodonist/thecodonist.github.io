$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".header-main").addClass("sticky_header");
      $(".header-menu .header-menu").slideDown();
    } else {
      $(".header-main").removeClass("sticky_header");
    }
  });
});
