let panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", function () {
    panels.forEach((p) => {
      p.classList.remove("active");
    });
    panel.classList.add("active");
  });
});
