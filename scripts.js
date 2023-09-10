document.addEventListener("DOMContentLoaded", () => {
  const prevButton = document.getElementById("prev-button");
  const nextButton = document.getElementById("next-button");
  const buttonContainer = document.querySelector("#button-container");

  tns({
    container: ".my-slider",
    autoplay: true,
    slideBy: "page",
    autoplayHoverPause: true,
    autoplayButton: false,
    autoplayButtonOutput: false,
    arrowKeys: true,
    controlsContainer: "#button-container",
  });

  feather.replace();
});
