document.addEventListener("DOMContentLoaded", function () {
  const targetSection = document.getElementById("geradorbotao");

  const myTest = document.querySelector(".test1"); // Esperar o loading para carregar //
  const myTest2 = document.getElementById("test-10");

  setTimeout(function () {
    myTest.classList.remove("test1");
    myTest2.removeAttribute("id");
  }, 350);

  // Esperar o loading para carregar //
  
    document.body.style.scrollBehavior = "smooth";
    document.body.style.scrollSnapType = "mandatory";
    document.body.style.scrollSnapPointsY = "repeat(100%)";
  
    setTimeout(function () {
      const offset = 11;
      const targetPosition =
        targetSection.getBoundingClientRect().top + window.pageYOffset - offset;
  
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }, 1000);
  });