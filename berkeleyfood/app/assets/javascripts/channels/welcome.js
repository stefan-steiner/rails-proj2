$(document).ready(function() {
  var alternate_navbar = function() {
    $("#navbar__container").css("background-color", "white");
    $(".navbar_item").css("color", "black");
  }

  var regular_navbar = function() {
    $("#navbar__container").css("background-color", "black");
    $(".navbar_item").css("color", "white");
  }
  $(window).scroll(function() {
    if ($(this).scrollTop() > 120) {
      setTimeout(alternate_navbar, 10);
    } else {
      setTimeout(regular_navbar, 10);
    }
  });
});
