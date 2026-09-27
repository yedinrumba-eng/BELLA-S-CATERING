(() => {
  const gsap = window.gsap;
  const ScrollTrigger = window.ScrollTrigger;
  if (!gsap || !ScrollTrigger) return;

  gsap.registerPlugin(ScrollTrigger);
  const motion = gsap.matchMedia();

  motion.add("(prefers-reduced-motion: no-preference)", () => {
    document.querySelectorAll(".parallax-panel").forEach((panel) => {
      const image = panel.querySelector(".parallax-panel__image");
      if (!image) return;

      gsap.fromTo(image, { yPercent: -7 }, {
        yPercent: 7,
        ease: "none",
        scrollTrigger: {
          trigger: panel,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
    });
  });
})();