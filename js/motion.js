(() => {
  const scene = document.querySelector(".food-scene");
  const gsap = window.gsap;
  const ScrollTrigger = window.ScrollTrigger;
  if (!scene || !gsap || !ScrollTrigger) return;

  gsap.registerPlugin(ScrollTrigger);

  const stage = scene.querySelector(".food-scene__stage");
  const plates = Array.from(scene.querySelectorAll("[data-plate]"));
  const fragments = Array.from(scene.querySelectorAll(".food-scene__fragment"));
  const motion = gsap.matchMedia();

  motion.add({ animate: "(prefers-reduced-motion: no-preference)", compact: "(max-width: 760px)" }, (context) => {
    if (!context.conditions.animate) return;
    scene.classList.add("is-motion");

    const distance = () => stage.clientWidth * (context.conditions.compact ? 0.39 : 0.34);
    const side = (direction) => ({
      x: () => direction * distance(),
      y: () => context.conditions.compact ? 24 : direction < 0 ? 124 : Math.max(45, Math.min(112, window.innerHeight - 608)),
      scale: () => context.conditions.compact ? 0.59 : 0.67,
      rotation: direction * 13,
      opacity: 1,
    });
    const far = (direction) => ({
      x: () => direction * distance() * 1.65,
      y: () => context.conditions.compact ? 45 : Math.max(75, Math.min(155, window.innerHeight - 525)),
      scale: 0.48,
      rotation: direction * 28,
      opacity: 0,
    });
    const center = { x: 0, y: 0, scale: 1, rotation: 6, opacity: 1 };

    gsap.set(plates, { xPercent: -50, yPercent: -50, transformOrigin: "50% 50%", visibility: "visible" });
    gsap.set(plates[0], { ...side(-1), y: -370, rotation: -42, opacity: 0.25 });
    gsap.set(plates[1], { ...center, y: -490, rotation: 30, scale: 0.7, opacity: 0.25 });
    gsap.set(plates[2], { ...side(1), y: -330, rotation: 46, opacity: 0.25 });
    gsap.set(plates[3], far(1));
    gsap.set(plates[4], far(1));
    gsap.set(fragments, { opacity: 0, x: 0, y: 0, scale: 0.4 });

    const timeline = gsap.timeline({
      defaults: { ease: "power2.inOut" },
      scrollTrigger: {
        trigger: scene,
        start: "top top",
        end: () => "+=" + Math.max(1700, window.innerHeight * 2.7),
        pin: true,
        scrub: 0.7,
        invalidateOnRefresh: true,
        anticipatePin: 1,
      },
    });

    timeline
      .to(plates[0], { ...side(-1), duration: 0.95, ease: "power3.out" }, 0)
      .to(plates[1], { ...center, duration: 1.1, ease: "power3.out" }, 0)
      .to(plates[2], { ...side(1), duration: 1, ease: "power3.out" }, 0)
      .set(plates[2], { zIndex: 3 }, 1.36)
      .set(plates[1], { zIndex: 2 }, 1.36)
      .to(plates[0], { ...far(-1), duration: 1.2 }, 1.4)
      .to(plates[1], { ...side(-1), duration: 1.2 }, 1.4)
      .to(plates[2], { ...center, duration: 1.2 }, 1.4)
      .to(plates[3], { ...side(1), duration: 1.2 }, 1.4)
      .set(plates[3], { zIndex: 3 }, 3.16)
      .set(plates[2], { zIndex: 2 }, 3.16)
      .to(plates[1], { ...far(-1), duration: 1.2 }, 3.2)
      .to(plates[2], { ...side(-1), duration: 1.2 }, 3.2)
      .to(plates[3], { ...center, duration: 1.2 }, 3.2)
      .to(plates[4], { ...side(1), duration: 1.2 }, 3.2)
      .to({}, { duration: 0.35 }, 4.4);

    const scatter = [
      [-118, -74, -55], [82, -105, 70], [148, 18, 135],
      [-145, 65, -100], [32, 122, 50], [-18, -142, -25],
    ];
    [1.72, 3.52].forEach((at) => {
      fragments.forEach((fragment, index) => {
        const [x, y, rotation] = scatter[index];
        timeline.fromTo(
          fragment,
          { x: 0, y: 0, rotation: 0, scale: 0.4, opacity: 0 },
          { x, y, rotation, scale: 1, opacity: 0.85, duration: 0.35, ease: "power2.out" },
          at,
        );
        timeline.to(fragment, { x: x * 1.25, y: y * 1.2, opacity: 0, duration: 0.5 }, at + 0.35);
      });
    });

    return () => scene.classList.remove("is-motion");
  });
})();