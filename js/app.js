/* Carga de datos desde data.js */
let currentCategory = "GMV";
let lastSearch = "";

const list = document.getElementById('faq-list');
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const searchInput = document.getElementById('search');
const navLinks = document.querySelectorAll('nav a');

/* Renderiza la lista de FAQs */
function renderFaqs(data) {
  list.innerHTML = '';
  data.forEach(faq => {
    const div = document.createElement('div');
    div.className = 'faq';
    div.innerHTML = `<strong>${faq.titulo}</strong><br><small>${faq.resumen}</small>`;

    // Si tiene subFaqs, tipo accordion
    if (faq.subFaqs && faq.subFaqs.length) {
      div.classList.add('parent-faq');
      div.onclick = () => toggleSubFaqs(faq, div);
    } else {
      // Si no tiene subFaqs, abrir modal al click
      div.onclick = () => openModal(faq);
    }

    list.appendChild(div);

    // mostrar subFaqs si estaban abiertas (por búsqueda)
    if (faq.subFaqs && faq.subFaqs._open) {
      showSubFaqs(faq, div);
    }
  });
}

/* Alterna sub-Faqs (accordion) */
function toggleSubFaqs(faq, container) {
  if (faq.subFaqs._open) {
    // cerrar
    const subDiv = container.querySelector('.sub-faqs');
    if (subDiv) subDiv.remove();
    faq.subFaqs._open = false;
    return;
  }

  // cerrar otros abiertos
  faqs.forEach(f => {
    if (f !== faq && f.subFaqs && f.subFaqs._open) {
      f.subFaqs._open = false;
    }
  });
  document.querySelectorAll('.sub-faqs').forEach(d => d.remove());

  // abrir
  if (faq.subFaqs.length) showSubFaqs(faq, container);
}

/* Muestra sub-Faqs con animación */
function showSubFaqs(faq, container) {
  const div = document.createElement('div');
  div.className = 'sub-faqs';
  container.appendChild(div);

  faq.subFaqs.forEach((sub, index) => {
    const btn = document.createElement('button');
    btn.className = 'sub-faq';
    btn.textContent = sub.resumen;
    btn.onclick = e => {
      e.stopPropagation();
      openModal(sub);
    };
    div.appendChild(btn);

    setTimeout(() => btn.classList.add('show'), index * 100);
  });

  faq.subFaqs._open = true;
}

/* Abrir modal */
function openModal(faq) {
  modalBody.innerHTML = `
    <h2 style="background-color:#1e88d8;color:white;padding:10px;border-radius:5px;">${faq.titulo}</h2>
    <p>${faq.descripcion || ""}</p>
    <hr>
    <ul>${faq.contenido.map(i => `<li>${i}</li>`).join('')}</ul>
  `;
  modal.classList.remove('hidden');
}

/* Cerrar modal */
document.getElementById('close').onclick = () => modal.classList.add('hidden');
// Cerrar modal al pulsar fuera del contenido
modal.addEventListener('click', e => {
  if (e.target === modal) modal.classList.add('hidden');
});

/* Búsqueda */
searchInput.value = '';
searchInput.addEventListener('input', e => {
  const text = e.target.value.toLowerCase();
  lastSearch = text;

  const filtered = [];

  faqs.forEach(faq => {
    if (faq.subFaqs && faq.subFaqs.length) {
      const matchingSubs = faq.subFaqs.filter(sub => {
        const combinedText = (
          faq.resumen + " " + sub.resumen + " " + sub.titulo + " " + (sub.descripcion || "")
        ).toLowerCase();
        return combinedText.includes(text);
      });

      matchingSubs.forEach(sub => filtered.push({ categoria: faq.categoria, ...sub }));
    } else {
      const combinedText = (faq.titulo + " " + faq.resumen + " " + (faq.descripcion || "")).toLowerCase();
      if (combinedText.includes(text)) filtered.push(faq);
    }
  });

  renderFaqs(filtered);
});

/* Categorías */
function renderCategory(cat) {
  currentCategory = cat;
  const filtered = faqs.filter(f => f.categoria === cat);
  renderFaqs(filtered);
}

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const cat = link.dataset.cat;
    renderCategory(cat);
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

/* Contador soluciones al pasar el ratón */
navLinks.forEach(link => {
  const cat = link.dataset.cat;
  const count = faqs
    .filter(f => f.categoria === cat)
    .reduce((acc, f) => acc + (f.subFaqs ? f.subFaqs.length : 1), 0);
  link.title = `${cat} – ${count} soluciones`;
});

/* Inicialización */
renderCategory(currentCategory);