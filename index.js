const panels = document.querySelectorAll(".panels > *");
panels.forEach((panel) =>
  panel.addEventListener("click", () => toggleActive(panel))
);
const toggleActive = (panel) => panel.classList.toggle("active");
