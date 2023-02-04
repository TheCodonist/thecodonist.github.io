$(document).ready(function () {
  $(".location").click(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
    } else {
      $(".location").removeClass("active");
      $(this).addClass("active");
    }
  });
  $("#map").click(function () {
    $(".location").removeClass("active");
  });
});
