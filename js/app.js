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

    div.addEventListener("click", () => openModal(faq));
    list.appendChild(div);
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
      ${faq.contenido
        .join("")}
    </ul>
  `;

  modal.classList.remove("hidden");
}


/* Cerrar modal */
document.getElementById("close").onclick = () => {
  modal.classList.add("hidden");
};

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

  const filtered = faqs.filter(f =>
    f.titulo.toLowerCase().includes(lastSearch) ||
    f.resumen.toLowerCase().includes(lastSearch)
  );

  renderFaqs(filtered);
});

/* Categorías */
function renderCategory(cat) {
  currentCategory = cat;
  lastSearch = "";
  searchInput.value = "";

  navLinks.forEach(l => l.classList.remove("active"));
  document.querySelector(`nav a[data-cat="${cat}"]`)?.classList.add("active");

  const filtered = faqs.filter(f => f.categoria === cat);
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