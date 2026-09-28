(() => {
  const gsap = window.gsap;
  const ScrollTrigger = window.ScrollTrigger;
  if (!gsap || !ScrollTrigger) return;

  gsap.registerPlugin(ScrollTrigger);
  const motion = gsap.matchMedia();

  motion.add({ animate: "(prefers-reduced-motion: no-preference)", compact: "(max-width: 760px)" }, (context) => {
    if (!context.conditions.animate) return;
    const reveal = (selector, stagger = 0) => {
      document.querySelectorAll(selector).forEach((element, index) => {
        gsap.from(element, {
          opacity: 0,
          y: 34,
          duration: 0.8,
          delay: stagger * index,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 88%",
            once: true,
          },
        });
      });
    };

    reveal(".quote__intro");
    reveal(".bella-way__message");
    reveal(".bella-way__word, .site-footer__wordmark");

    const horizontal = (selector, direction) => {
      document.querySelectorAll(selector).forEach((element, index) => {
        const side = typeof direction === "function" ? direction(index) : direction;
        gsap.fromTo(element, { x: () => side * (context.conditions.compact ? 26 : 74), opacity: 0.7 }, {
          x: 0,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top 92%",
            end: "top 52%",
            scrub: true,
            invalidateOnRefresh: true,
          },
        });
      });
    };

    gsap.fromTo(".services__intro", { x: () => context.conditions.compact ? 26 : 70, opacity: 0.65 }, {
      x: 0,
      opacity: 1,
      ease: "none",
      scrollTrigger: {
        trigger: ".services",
        start: "top 92%",
        end: "top 45%",
        scrub: true,
        invalidateOnRefresh: true,
      },
    });

    horizontal(".biography__visual, .gallery__intro, .signature__copy, .process__intro, .faq__intro, .reactions__intro", -1);
    horizontal(".biography__copy, .signature__showcase, .signature__aside, .process__steps, .faq__visual, .reactions__grid", 1);
    horizontal(".gallery__group-head", (index) => index % 2 === 0 ? 1 : -1);
  });
})();
