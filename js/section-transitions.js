(() => {
  const gsap = window.gsap;
  const ScrollTrigger = window.ScrollTrigger;
  if (!gsap || !ScrollTrigger) return;

  gsap.registerPlugin(ScrollTrigger);
  const motion = gsap.matchMedia();

  motion.add("(prefers-reduced-motion: no-preference)", () => {
    document.querySelectorAll("[data-section-motion]").forEach((stage) => {
      const panel = stage.firstElementChild;
      let previous = stage.previousElementSibling;
      if (previous?.classList.contains("pin-spacer")) {
        previous = previous.querySelector("[data-section-hold]") || previous;
      }
      if (previous?.classList.contains("section-stage-anchor")) {
        previous = previous.previousElementSibling;
      }
      const direction = stage.dataset.sectionMotion;
      const isHorizontal = direction === "left" || direction === "right";
      const from = isHorizontal
        ? { xPercent: direction === "left" ? -100 : 100, y: () => -window.innerHeight }
        : { y: () => Math.min(window.innerHeight * 0.14, 125) * (previous?.hasAttribute("data-section-hold") ? -1 : 1) };
      const to = isHorizontal ? { xPercent: 0, y: 0 } : { y: 0 };

      if (previous && !previous.hasAttribute("data-section-hold")) {
        ScrollTrigger.create({
          trigger: stage,
          start: "top bottom",
          end: () => `+=${Math.round(window.innerHeight * 1.12)}`,
          pin: previous,
          pinSpacing: false,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        });
        if (previous.matches("[data-section-motion]")) {
          previous.parentElement.classList.add("section-stage-pin-spacer");
        }
      }

      gsap.fromTo(panel, from, {
        ...to,
        ease: "none",
        scrollTrigger: {
          trigger: stage,
          start: "top bottom",
          end: "top top",
          scrub: 0.55,
          invalidateOnRefresh: true,
        },
      });

      if (stage.dataset.sectionHold) {
        ScrollTrigger.create({
          id: `section-hold-${stage.dataset.sectionHold}`,
          trigger: stage,
          start: () => stage.offsetHeight > window.innerHeight ? "bottom bottom" : "top top",
          end: () => `+=${Math.round(window.innerHeight * (window.innerWidth <= 760 ? 1.1 : 1.35))}`,
          pin: stage,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        });
      }
    });

    const details = document.querySelectorAll(".service, .faq details");
    let refreshFrame = 0;
    const refreshAfterToggle = () => {
      cancelAnimationFrame(refreshFrame);
      refreshFrame = requestAnimationFrame(() => ScrollTrigger.refresh());
    };
    details.forEach((item) => item.addEventListener("toggle", refreshAfterToggle));
    return () => {
      cancelAnimationFrame(refreshFrame);
      details.forEach((item) => item.removeEventListener("toggle", refreshAfterToggle));
    };
  });
})();
