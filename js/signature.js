(() => {
  const section = document.querySelector(".signature");
  if (!section) return;

  const slides = [...section.querySelectorAll("[data-signature-slide]")];
  const controls = [...section.querySelectorAll("[data-signature-target]")];

  const show = (index) => {
    slides.forEach((slide, position) => {
      const active = position === index;
      slide.classList.toggle("is-active", active);
      slide.setAttribute("aria-hidden", String(!active));
    });
    controls.forEach((control, position) => {
      control.setAttribute("aria-pressed", String(position === index));
    });
  };

  controls.forEach((control, index) => {
    control.addEventListener("pointerenter", () => show(index));
    control.addEventListener("focus", () => show(index));
    control.addEventListener("click", () => show(index));
  });
})();