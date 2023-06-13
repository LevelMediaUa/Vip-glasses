$(function () {
  $(".dropdown__item").on("click", function () {
    $(this).toggleClass("dropdown__list--active");
  });
});