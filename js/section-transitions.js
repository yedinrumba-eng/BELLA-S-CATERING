(() => {
  const gsap = window.gsap;
  const ScrollTrigger = window.ScrollTrigger;
  if (!gsap || !ScrollTrigger) return;

  gsap.registerPlugin(ScrollTrigger);
  const motion = gsap.matchMedia();

  motion.add("(prefers-reduced-motion: no-preference)", () => {
    document.querySelectorAll("[data-section-motion]").forEach((stage) => {
      const panel = stage.firstElementChild;
      const direction = stage.dataset.sectionMotion;
      const isHorizontal = direction === "left" || direction === "right";
      const from = isHorizontal
        ? { xPercent: direction === "left" ? -100 : 100 }
        : { y: () => Math.min(window.innerHeight * 0.28, 220) };
      const to = isHorizontal ? { xPercent: 0 } : { y: 0 };

      gsap.fromTo(panel, from, {
        ...to,
        ease: "power2.out",
        scrollTrigger: {
          trigger: stage,
          start: "top 95%",
          end: "top 28%",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
    });
  });
})();
