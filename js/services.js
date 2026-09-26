const serviceItems = [...document.querySelectorAll(".services__list > .service")];
const hoverServices = window.matchMedia("(hover: hover) and (pointer: fine)");

for (const service of serviceItems) {
  let openedOnHover = false;
  const summary = service.querySelector("summary");

  service.addEventListener("pointermove", (event) => {
    if (hoverServices.matches && event.pointerType === "mouse" && !service.open) {
      openedOnHover = true;
      service.open = true;
    }
  });

  service.addEventListener("pointerleave", () => {
    openedOnHover = false;
  });

  summary.addEventListener("click", (event) => {
    if (openedOnHover && event.detail > 0) {
      event.preventDefault();
      openedOnHover = false;
    }
  });

  service.addEventListener("toggle", () => {
    if (service.open) {
      for (const other of serviceItems) {
        if (other !== service) other.open = false;
      }
    }
  });
}