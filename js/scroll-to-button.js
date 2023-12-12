document.addEventListener("DOMContentLoaded", function () {
  document.body.style.scrollBehavior = "smooth";
  document.body.style.scrollSnapType = "mandatory";
  document.body.style.scrollSnapPointsY = "repeat(100%)";

  let mainImg = document.querySelector("#main-img");

  if (mainImg.complete) imageLoaded();
  else mainImg.addEventListener("load", imageLoaded);

  function imageLoaded() {
    mainImg.classList.add("show");

    const list = document.querySelector(".list");
    const footer = document.querySelector(".footer");

    list.classList.remove("v-none");
    footer.classList.remove("v-none");

    const targetSection = document.getElementById("geradorbotao");

    const offset = 11;
    const targetPosition = window.scrollY + targetSection.getBoundingClientRect().top - offset;

    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
  }
});