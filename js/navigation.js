const mobileMenu = document.querySelector(".mobile-menu");

if (mobileMenu) {
  const menuButton = mobileMenu.querySelector("summary");
  const desktopNavigation = window.matchMedia("(min-width: 1101px)");

  mobileMenu.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", () => {
      const destination = document.getElementById(link.hash.slice(1));
      mobileMenu.open = false;
      if (destination) {
        destination.setAttribute("tabindex", "-1");
        requestAnimationFrame(() => destination.focus({ preventScroll: true }));
      }
    });
  });

  document.addEventListener("pointerdown", (event) => {
    if (mobileMenu.open && !mobileMenu.contains(event.target)) mobileMenu.open = false;
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && mobileMenu.open) {
      mobileMenu.open = false;
      menuButton.focus();
    }
  });

  desktopNavigation.addEventListener("change", () => {
    if (desktopNavigation.matches) mobileMenu.open = false;
  });
}