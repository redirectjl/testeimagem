document.addEventListener("DOMContentLoaded", function () {
  document.body.style.scrollBehavior = "smooth";
  document.body.style.scrollSnapType = "mandatory";
  document.body.style.scrollSnapPointsY = "repeat(100%)";

  setTimeout(() => {
    const targetSection = document.getElementById("geradorbotao");

    const offset = 11;
    const targetPosition = window.scrollY + targetSection.getBoundingClientRect().top - offset;

    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
  }, 600);

  let mainImg = document.querySelector("#main-img");

  if (mainImg.complete) {
    mainImg.classList.add("show");

    const list = document.querySelector(".list");
    const footer = document.querySelector(".footer");

    list.classList.remove("v-none");
    footer.classList.remove("v-none");
  }
});