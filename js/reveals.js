(() => {
  const gsap = window.gsap;
  const ScrollTrigger = window.ScrollTrigger;
  if (!gsap || !ScrollTrigger) return;

  gsap.registerPlugin(ScrollTrigger);
  const motion = gsap.matchMedia();

  motion.add("(prefers-reduced-motion: no-preference)", () => {
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

    reveal(".signature__copy, .signature__showcase, .signature__aside", 0.12);
    reveal(".process__intro, .faq__intro, .reactions__intro, .quote__intro");
    reveal(".process__step", 0.08);
    reveal(".faq__visual, .site-footer__message");
    reveal(".site-footer__image-word, .site-footer__base-word");
  });
})();