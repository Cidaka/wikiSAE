/* Estado global */
let currentCategory = "GMV";
let lastSearch = "";

/* Elementos DOM */
const list = document.getElementById("faq-list");
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modal-body");
const searchInput = document.getElementById("search");
const navLinks = document.querySelectorAll("nav a");

/* Utilidad: resaltar texto */
function highlight(text, search) {
  if (!search) return text;

  const escaped = search.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`(${escaped})`, "gi");

  return text.replace(regex, `<span class="highlight">$1</span>`);
}

/* Render FAQs */
function renderFaqs(data) {
  list.innerHTML = "";

  if (!data.length) {
    list.innerHTML = "<p>No hay resultados.</p>";
    return;
  }

  data.forEach(faq => {
    const div = document.createElement("div");
    div.className = "faq";

    div.innerHTML = `
      <strong>${highlight(faq.titulo, lastSearch)}</strong><br>
      <small>${highlight(faq.resumen, lastSearch)}</small>
    `;

    div.addEventListener("click", () => {
      if (faq.subFaqs && faq.subFaqs.length) {
        toggleSubFaqs(faq, div);
      } else {
        openModal(faq);
      }
    });

    list.appendChild(div);

    if (faq.subFaqs && faq.subFaqs._open) {
      showSubFaqs(faq, div);
    }
  });
}

/* Accordion subFaqs */
function toggleSubFaqs(faq, container) {
  const existing = container.querySelector(".sub-faqs");

  if (existing) {
    existing.remove();
    faq.subFaqs._open = false;
    return;
  }

  closeAllSubFaqs();
  showSubFaqs(faq, container);
  faq.subFaqs._open = true;
}

function showSubFaqs(faq, container) {
  const div = document.createElement("div");
  div.className = "sub-faqs";
  container.appendChild(div);

  faq.subFaqs.forEach((sub, i) => {
    const btn = document.createElement("button");
    btn.textContent = sub.resumen;

    btn.onclick = e => {
      e.stopPropagation();
      openModal(sub);
    };

    div.appendChild(btn);
    setTimeout(() => btn.classList.add("show"), i * 80);
  });
}

function closeAllSubFaqs() {
  document.querySelectorAll(".sub-faqs").forEach(d => d.remove());
  faqs.forEach(f => {
    if (f.subFaqs) f.subFaqs._open = false;
  });
}

/* Abrir modal */
function openModal(faq) {
  modalBody.innerHTML = `
    <h2>${highlight(faq.titulo, lastSearch)}</h2>
    ${
      faq.descripcion
        ? `<p class="modal-desc">${highlight(faq.descripcion, lastSearch)}</p>`
        : ""
    }
    <hr>
    <h3>Solución</h3>
    <ul>
      ${faq.contenido.map(i => `<li>${i}</li>`).join("")}
    </ul>
  `;

  modal.classList.remove("hidden");
}

/* Cerrar modal */
document.getElementById("close").onclick = () => {
  modal.classList.add("hidden");
};
/* Cerrar modal con ESC*/
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    modal.classList.add("hidden");
  }
});

modal.addEventListener("click", e => {
  if (e.target === modal) modal.classList.add("hidden");
});

/* Buscar */
searchInput.value = "";
searchInput.addEventListener("input", e => {
  lastSearch = e.target.value.toLowerCase();

  if (!lastSearch) {
    renderCategory(currentCategory);
    return;
  }

  const filtered = [];

  faqs.forEach(faq => {
    let match = false;

    if (
      faq.titulo.toLowerCase().includes(lastSearch) ||
      faq.resumen.toLowerCase().includes(lastSearch)
    ) {
      match = true;
    }

    if (faq.subFaqs) {
      const subMatch = faq.subFaqs.some(sub =>
        sub.titulo.toLowerCase().includes(lastSearch) ||
        sub.resumen.toLowerCase().includes(lastSearch)
      );

      faq.subFaqs._open = subMatch;
      if (subMatch) match = true;
    }

    if (match) filtered.push(faq);
  });

  filtered.sort((a, b) => a.titulo.localeCompare(b.titulo, "es"));
  renderFaqs(filtered);
});

/* Categorías */
function renderCategory(cat) {
  currentCategory = cat;
  lastSearch = "";
  searchInput.value = "";

  navLinks.forEach(l => l.classList.remove("active"));
  document
    .querySelector(`nav a[data-cat="${cat}"]`)
    ?.classList.add("active");

  closeAllSubFaqs();

  const filtered = faqs
    .filter(f => f.categoria === cat)
    .sort((a, b) => a.titulo.localeCompare(b.titulo, "es"));

  renderFaqs(filtered);
}

navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    renderCategory(link.dataset.cat);
  });
});

/* Inicialización */
renderCategory(currentCategory);