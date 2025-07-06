// Select all color boxes
const colorBoxes = document.querySelectorAll(".color-box");

// Add click event listener to each box
colorBoxes.forEach(box => {
  box.addEventListener("click", () => {
    const color = box.getAttribute("data-color");
    document.body.style.backgroundColor = color;
  });
});
