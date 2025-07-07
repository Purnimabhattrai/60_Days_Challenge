// Select all color boxes
const colorBoxes = document.querySelectorAll(".color-box");


colorBoxes.forEach(box => {
  box.addEventListener("click", () => {
    const color = box.getAttribute("data-color");
    document.body.style.backgroundColor = color;
  });
});

