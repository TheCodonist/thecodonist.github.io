var $container = $(".step");
var $p = $container.find("p");
var currentIndex = 0;

$p.on("click", function (e) {
  var $current = $(e.currentTarget);
  var index = $p.index($current);
  if (index > currentIndex) {
    $container.addClass("forward");
  } else {
    $container.removeClass("forward");
  }
  currentIndex = index;
  $container.attr("data-step", index);
});


// Slick version 1.5.8





