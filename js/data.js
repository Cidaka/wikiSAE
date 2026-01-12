/* Plantilla para copiar rápido */
 /*
 {
   titulo: "",
   descripcion: "",
   resumen: "",
   contenido: [],
   subFaqs: [] // opcional, si tiene sub-Faqs
 }
 */

const faqsPorCategoria = {
  GMV: [
    {
      titulo: "GMV no arranca",
      descripcion: "La GMV se ha quedado pillada en la pantalla de carga (letras blancas fondo negro)",
      resumen: "Pantalla negra o no carga línea.",
      contenido: [
        "Intentar reinicio",
        "Continuar sin SAE",
        "Valorar cambio de bus"
      ]
    }
  ],

  PMR: [
    {
      titulo: "Rampa PMR no baja",
      descripcion: "La rampa ha salido pero ahora no baja ni sube.",
      resumen: "Rampa no responde",
      contenido: [],
      subFaqs: [] // ningún sub-Faq
    },
    {
      titulo: "Bloqueo de la rampa fuera",
      descripcion: "",
      resumen: "Rampa no responde",
      contenido: [], 
      subFaqs: [
        {
          titulo: "Beulas",
          descripcion: "Rampa bloqueada",
          resumen: "Beulas",
          contenido: ["La rampa es muy alta."]
        },
        {
          titulo: "Castrosua",
          descripcion: "",
          resumen: "Castrosua",
          contenido: [""]
        },
        {
          titulo: "Irizar",
          descripcion: "",
          resumen: "Irizar",
          contenido: [""]
        },
        {
          titulo: "Mercedes Hybrid",
          descripcion: "",
          resumen: "Mercedes Hybrid",
          contenido: [""]
        },
        {
          titulo: "Otokar Kent C",
          descripcion: "",
          resumen: "Otokar Kent C",
          contenido: [""]
        },
        {
          titulo: "Otokar Vectio",
          descripcion: "",
          resumen: "Otokar Vectio",
          contenido: [""]
        },
        {
          titulo: "Scania Citywide",
          descripcion: "",
          resumen: "Scania Citywide",
          contenido: [""]
        },
        {
          titulo: "Scania Interlink",
          descripcion: "",
          resumen: "Scania Interlink",
          contenido: [""]
        },
        {
          titulo: "Solaris (Electrico)",
          descripcion: "",
          resumen: "Solaris (Electrico)",
          contenido: [""]
        }
      ]
    }
  ],

  EXCEL: [
    {
      titulo: "No copia la tabla retén de buho",
      descripcion: "Al usar el botón 'copiar', sale un mensaje de error.",
      resumen: "Da error al copiar",
      contenido: [ "Hay que asegurarse que la casilla de TSM esté rellena.", "Rellenar el campo y volver a intentar copiar." ],
      subFaqs: []
    }
  ],

  BUS: [
    {
      titulo: "Bus no arranca",
      descripcion: "Al girar la llave, el bus hace un ruido atrás pero no arranca.",
      resumen: "Problema de motor",
      contenido: ["Comprobar batería", "Revisar contacto", "Avisar taller"],
      subFaqs: []
    }
  ]
};

/* Genera un array plano con la categoría incluida, para usar en app.js */
const faqs = Object.entries(faqsPorCategoria).flatMap(([categoria, items]) =>
  items.map(i => ({ categoria, ...i }))
);