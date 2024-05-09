$("#toggle").click(function () {
  $(this).toggleClass("on");
  $("#menu").slideToggle();
});

document.addEventListener("DOMContentLoaded", function () {
  const prevButton = document.querySelector(".carousel__prev");
  const nextButton = document.querySelector(".carousel__next");
  const container = document.querySelector(".carousel__container");

  prevButton.addEventListener("click", function () {
    container.scrollLeft -= container.clientWidth;
  });

  nextButton.addEventListener("click", function () {
    container.scrollLeft += container.clientWidth;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const menu = document.getElementById("menu");

  menuToggle.addEventListener("click", function () {
    menu.classList.toggle("open");
  });
});
