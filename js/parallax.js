(() => {
  const panels = [...document.querySelectorAll(".parallax-panel")];
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const saveData = navigator.connection?.saveData === true;

  if (!reducedMotion.matches && !saveData && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ target: video, isIntersecting }) => {
        if (isIntersecting && !document.hidden) {
          video.play().then(() => video.classList.add("is-playing")).catch(() => {});
        } else {
          video.pause();
        }
      });
    }, { rootMargin: "150px" });

    panels.forEach((panel) => observer.observe(panel.querySelector("video")));
    document.addEventListener("visibilitychange", () => {
      panels.forEach((panel) => {
        const video = panel.querySelector("video");
        if (document.hidden) video.pause();
        else if (video.getBoundingClientRect().bottom > 0 && video.getBoundingClientRect().top < innerHeight) {
          video.play().then(() => video.classList.add("is-playing")).catch(() => {});
        }
      });
    });
  }

  const gsap = window.gsap;
  const ScrollTrigger = window.ScrollTrigger;
  if (!gsap || !ScrollTrigger) return;

  gsap.registerPlugin(ScrollTrigger);
  const motion = gsap.matchMedia();

  motion.add("(prefers-reduced-motion: no-preference)", () => {
    panels.forEach((panel) => {
      const media = panel.querySelector(".parallax-panel__media");
      const content = panel.querySelector(".parallax-panel__content");
      const trigger = {
        trigger: panel,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        invalidateOnRefresh: true,
      };

      gsap.fromTo(media, { yPercent: -12 }, {
        yPercent: 12,
        ease: "none",
        scrollTrigger: { ...trigger },
      });
      gsap.fromTo(content, { y: 65 }, {
        y: -65,
        ease: "none",
        scrollTrigger: { ...trigger },
      });
    });
  });
})();
