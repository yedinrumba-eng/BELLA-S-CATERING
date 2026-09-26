const quoteForm = document.querySelector("#quote-form");

if (quoteForm) {
  const detailsField = quoteForm.elements.namedItem("details");
  const errorMessage = quoteForm.querySelector(".quote__error");
  const allowedServices = new Set([
    "Catering & buffet",
    "Chef privado",
    "Diseño de menús",
    "Asesoría gastronómica",
    "Equipos para eventos",
  ]);

  detailsField.addEventListener("input", () => detailsField.setCustomValidity(""));
  quoteForm.elements.namedItem("service").addEventListener("change", (event) => event.target.setCustomValidity(""));

  quoteForm.addEventListener("submit", (event) => {
    event.preventDefault();
    errorMessage.hidden = true;

    const fields = new FormData(quoteForm);
    const service = String(fields.get("service") ?? "").trim();
    const date = String(fields.get("date") ?? "").trim();
    const guests = String(fields.get("guests") ?? "").trim();
    const location = String(fields.get("location") ?? "").trim();
    const details = String(fields.get("details") ?? "").trim();

    if (!allowedServices.has(service)) {
      quoteForm.elements.namedItem("service").setCustomValidity("Elige un servicio disponible.");
      quoteForm.reportValidity();
      return;
    }
    quoteForm.elements.namedItem("service").setCustomValidity("");
    if (!details) {
      detailsField.setCustomValidity("Cuéntanos un poco sobre tu evento.");
      quoteForm.reportValidity();
      return;
    }
    if (!quoteForm.reportValidity()) return;

    const contact = document.querySelector(".site-footer a[href^='https://wa.me/']");
    if (!contact) {
      errorMessage.hidden = false;
      return;
    }
    const contactUrl = new URL(contact.href);
    const phone = contactUrl.pathname.slice(1);
    if (contactUrl.hostname !== "wa.me" || !/^\d{8,15}$/.test(phone)) {
      errorMessage.hidden = false;
      return;
    }

    const lines = [
      "Hola, quiero consultar una propuesta con Bella’s Catering.",
      `Servicio: ${service}`,
      ...(date ? [`Fecha aproximada: ${date}`] : []),
      ...(guests ? [`Invitados aproximados: ${guests}`] : []),
      ...(location ? [`Ciudad o zona: ${location}`] : []),
      `Mi idea: ${details}`,
    ];
    const url = new URL(`https://wa.me/${phone}`);
    url.searchParams.set("text", lines.join("\n"));
    window.open(url.href, "_blank", "noopener,noreferrer");
  });
}