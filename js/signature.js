(() => {
  const section = document.querySelector(".signature");
  if (!section) return;

  const slides = [...section.querySelectorAll("[data-signature-slide]")];
  const controls = [...section.querySelectorAll("[data-signature-target]")];
  const controlsGroup = section.querySelector(".signature__controls");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let current = 0;
  let visible = false;
  let timer;

  const show = (index) => {
    current = index;
    slides.forEach((slide, position) => {
      const active = position === index;
      slide.classList.toggle("is-active", active);
      slide.setAttribute("aria-hidden", String(!active));
    });
    controls.forEach((control, position) => {
      control.setAttribute("aria-pressed", String(position === index));
    });
  };

  const stopTimer = () => {
    window.clearInterval(timer);
    timer = undefined;
  };

  const syncTimer = () => {
    stopTimer();
    const interacting = controlsGroup.matches(":hover") || Boolean(controlsGroup.querySelector(":focus-visible"));
    if (!visible || document.hidden || reducedMotion.matches || interacting) return;
    timer = window.setInterval(() => show((current + 1) % slides.length), 5000);
  };

  controls.forEach((control, index) => {
    const select = () => { show(index); syncTimer(); };
    control.addEventListener("pointerenter", select);
    control.addEventListener("focus", select);
    control.addEventListener("click", select);
  });

  controlsGroup.addEventListener("pointerenter", stopTimer);
  controlsGroup.addEventListener("pointerleave", syncTimer);
  controlsGroup.addEventListener("focusin", stopTimer);
  controlsGroup.addEventListener("focusout", () => window.setTimeout(syncTimer, 0));
  document.addEventListener("visibilitychange", syncTimer);
  reducedMotion.addEventListener("change", syncTimer);

  if ("IntersectionObserver" in window) {
    new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      syncTimer();
    }, { threshold: 0.35 }).observe(section);
  } else {
    visible = true;
    syncTimer();
  }
})();
