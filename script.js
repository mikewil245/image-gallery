let smallImg = document.querySelectorAll(".grid-gallery img");

const fullImg = document.querySelector(".full-img");

const modal = document.querySelector(".modal");

smallImg.forEach((img) => {
  img.addEventListener("click", function () {
    modal.classList.add("open");
    fullImg.classList.add("open");
    const OrigPhoto = img.getAttribute("alt");
    fullImg.src = `img/large-quality/${OrigPhoto}.jpg`;
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.classList.remove("open");
    fullImg.classList.remove("open");
  }
});

modal.addEventListener("click", () => {
  modal.classList.remove("open");
  fullImg.classList.remove("open");
});
