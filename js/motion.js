(() => {
  const scene = document.querySelector(".food-scene");
  const gsap = window.gsap;
  const ScrollTrigger = window.ScrollTrigger;
  if (!scene || !gsap || !ScrollTrigger) return;

  gsap.registerPlugin(ScrollTrigger);

  const stage = scene.querySelector(".food-scene__stage");
  const heading = scene.querySelector(".food-scene__heading");
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
    plates.slice(3).forEach((plate) => gsap.set(plate, far(1)));
    gsap.set(fragments, { opacity: 0, x: 0, y: 0, scale: 0.4 });

    const timeline = gsap.timeline({
      defaults: { ease: "power2.inOut" },
      scrollTrigger: {
        trigger: scene,
        start: "top top",
        end: () => "+=" + Math.max(3000, window.innerHeight * 4),
        pin: true,
        scrub: true,
        invalidateOnRefresh: true,
        anticipatePin: 1,
      },
    });

    timeline
      .fromTo(heading, { x: () => context.conditions.compact ? -28 : -75, opacity: 0.65 }, { x: 0, opacity: 1, duration: 1.1, ease: "power2.out" }, 0)
      .to(plates[0], { ...side(-1), duration: 0.95, ease: "power3.out" }, 0)
      .to(plates[1], { ...center, duration: 1.1, ease: "power3.out" }, 0)
      .to(plates[2], { ...side(1), duration: 1, ease: "power3.out" }, 0);

    const scatter = [
      [-118, -74, -55], [82, -105, 70], [148, 18, 135],
      [-145, 65, -100], [32, 122, 50], [-18, -142, -25],
    ];
    const firstSwitch = 1.4;
    const switchGap = 1.65;

    for (let step = 0; step < plates.length - 3; step += 1) {
      const at = firstSwitch + step * switchGap;
      timeline
        .set(plates[step + 3], { zIndex: 3 }, at - 0.02)
        .set(plates[step + 2], { zIndex: 2 }, at - 0.02)
        .to(plates[step], { ...far(-1), duration: 1.35, ease: "sine.inOut" }, at)
        .to(plates[step + 1], { ...side(-1), duration: 1.35, ease: "sine.inOut" }, at)
        .to(plates[step + 2], { ...center, duration: 1.35, ease: "sine.inOut" }, at)
        .to(plates[step + 3], { ...side(1), duration: 1.35, ease: "sine.inOut" }, at);

      fragments.forEach((fragment, index) => {
        const [x, y, rotation] = scatter[index];
        timeline.fromTo(
          fragment,
          { x: 0, y: 0, rotation: 0, scale: 0.4, opacity: 0 },
          { x, y, rotation, scale: 1, opacity: 0.85, duration: 0.35, ease: "power2.out" },
          at + 0.32,
        );
        timeline.to(fragment, { x: x * 1.25, y: y * 1.2, opacity: 0, duration: 0.5 }, at + 0.67);
      });
    }

    const finaleAt = firstSwitch + (plates.length - 3) * switchGap;
    const last = plates.length - 1;
    timeline
      .set(plates[last], { zIndex: 3 }, finaleAt - 0.02)
      .to(plates[last - 2], { ...far(-1), duration: 1.2 }, finaleAt)
      .to(plates[last - 1], { ...far(-1), duration: 1.2 }, finaleAt)
      .to(plates[last], { ...center, duration: 1.2 }, finaleAt)
      .to(heading, { x: () => context.conditions.compact ? -28 : -75, opacity: 0.7, duration: 0.8 }, finaleAt + 0.85)
      .to({}, { duration: 1.5 }, finaleAt + 1.2);

    return () => scene.classList.remove("is-motion");
  });
})();
