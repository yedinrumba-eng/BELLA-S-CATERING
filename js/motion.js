(() => {
  const scene = document.querySelector(".food-scene");
  if (!scene || !window.gsap || !window.ScrollTrigger) return;

  const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (motionPreference.matches) return;

  window.gsap.registerPlugin(window.ScrollTrigger);

  const plates = [
    { selector: ".food-scene__plate--left", y: -410, rotation: -40, scale: 0.74 },
    { selector: ".food-scene__plate--main", y: -580, rotation: 28, scale: 0.68 },
    { selector: ".food-scene__plate--right", y: -350, rotation: 48, scale: 0.76 },
  ];

  plates.forEach(({ selector, y, rotation, scale }, index) => {
    const plate = scene.querySelector(selector);
    window.gsap.fromTo(
      plate,
      { y, rotation, scale, opacity: 0.35 },
      {
        y: 0,
        rotation: index === 0 ? -13 : index === 1 ? 6 : 15,
        scale: 1,
        opacity: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: scene,
          start: "top 85%",
          end: "top 18%",
          scrub: 0.65,
          invalidateOnRefresh: true,
        },
      },
    );
  });
})();
