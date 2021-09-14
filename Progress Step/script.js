const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  update();
});

prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});

function update() {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");
  if (actives.length >= 2) prev.removeAttribute("disabled");
  else {
    prev.setAttribute("disabled", "disabled");
    next.removeAttribute("disabled");
  }
  if (actives.length == circles.length)
    next.setAttribute("disabled", "disabled");
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
}
