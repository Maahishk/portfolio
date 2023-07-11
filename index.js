$(window).scroll(function () {
  console.log($("#myWork").position().top - $("#myWork").height());
  console.log($("#skillsTool").position().top);
  console.log($(window).scrollTop());
  if (
    $(window).scrollTop() >= $("#aboutMe").offset().top &&
    $(window).scrollTop() <= $("#myWork").offset().top - $("#myWork").height()
  ) {
    $("body").css({ "background-color": "rgba(163, 151, 237, 0.3)" });
  } else if (
    $(window).scrollTop() >= $("#myWork").position().top - $(window).height() &&
    $(window).scrollTop() <= $("#skillsTool").offset().top - 250
  ) {
    $("body").css({ "background-color": "rgba(250, 156, 14, 0.3)" });
  } else {
    $("body").css("background-color", "white");
  }
});
window.addEventListener("load", (event) => {
  $("#experience").hide();
});

function setActive(e) {
  console.log(e);
  if (e == 1) {
    $("#1").addClass("is_active");
    $("#2").removeClass("is_active");
    $("#experience").hide();
    $("#education").show();
  }
  if (e == 2) {
    $("#2").addClass("is_active");
    $("#1").removeClass("is_active");
    $("#experience").show();
    $("#education").hide();
  }
}
