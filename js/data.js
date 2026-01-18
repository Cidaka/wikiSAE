/* Plantilla para copiar rápido */
 /*
	,
	{
	  titulo: "",
	  descripcion: "",
	  resumen: "",
	  contenido: [
		""
	  ]
	}
 */

const faqsPorCategoria = {
  GMV: [
    {
      titulo: "GMV no arranca.",
      descripcion: "La GMV se ha quedado pillada en la pantalla de carga (letras blancas fondo negro)",
      resumen: "Pantalla negra con/sin letras blancas.",
      contenido: [
        "Quitar y dar el contacto del bus.",
		"Si hace mucho frío, puede que tarde en responder.",
		"Si ha funcionado antes y ahora no, cambiar GMV."
      ]
    },
	{
	  titulo: "SAM no encontrada.",
      descripcion: "Da un error que dice SAM no encontrada. Es una especie de SIM para el GPS que a veces se mueve y no la detecta.",
      resumen: "Sale el aviso.",
	  contenido: [
		"Dar golpes suaves a la máquina y pulsar aceptar.",
		"Si el error no se quita o aparece con demasiada frecuencia, se debería sustituir la GMV."
		]
	},
	{
	  titulo: "SAE no comunica.",
	  descripcion: "El SAE no está comunicando y no da propuesta de viaje ni pasa las paradas.",
	  resumen: "No da servicios ni pasa paradas.",
	  contenido: [
		"Desde el SAE, solicitar Reinicio+Iniciación remoto.",
		"La operación puede tardar 10-15 minutos y el GPS no marcará posición.",
		"No siempre se arregla con esto y requiere cortar la corriente 10 segundos de las baterías del coche."
	  ]
	},
	{
	  titulo: "EMV (pago con tarjeta) da un código de error.",
	  descripcion: "",
	  resumen: "Triangulo amarillo con un código de error.",
	  contenido: [],
	  subFaqs: [
			{
			titulo: "Código de error 2.",
			descripcion: "La TV100 muestra en pantalla el error nº2.",
			resumen: "Código de error 2.",
			contenido: [
			"Fallo de comunicación de la TV100. Avisar a los técnicos SAE."
			]
			},
			{
			titulo: "Código de error 4.",
			descripcion: "La TV100 muestra en pantalla el error nº4.",
			resumen: "Código de error 4.",
			contenido: [
			"Hay que dar tiempo a que la GMV y la TV100 enlacen."
			]
			},
			{
			titulo: "Código de error 5.",
			descripcion: "La TV100 muestra en pantalla el error nº5.",
			resumen: "Código de error 5.",
			contenido: [
			"Hay que avisar a los técnicos del SAE para cambiar la TV100."
			]
			},
		]
	},
	{
	  titulo: "EMV no se inicia.",
	  descripcion: "El módulo TV100 no inicia o ni siquiera enciende.",
	  resumen: "Pantalla negra o ''Iniciando.....''.",
	  contenido: [
		"Con quitar 10 segundos la corriente de las baterías del coche, debería volver a funcionar e iniciar normalmente.",
		"A veces, después de esto, da un error 4."
	  ]
	},
	{
	  titulo: "Numero de coche no válido.",
	  descripcion: "Al intentar preparar una máquina para sustituir, no deja introducir el número del coche.",
	  resumen: "No se puede meter el número del coche.",
	  contenido: [
		"La máquina está desactualizada y el coche es más nuevo.",
    "Hay que actualizar la máquina para poder cambiar el número del coche."
	  ]
	}
  ],

  PMR: [
    {
      titulo: "Rampa PMR no sale",
      descripcion: "La PMR no sale.",
      resumen: "Rampa está dentro y no sale.",
      contenido: []
    },
    {
      titulo: "Bloqueo de la rampa fuera",
      descripcion: "La rampa ha salido pero ahora no baja ni sube.",
      resumen: "No funciona y está fuera.",
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
      contenido: [ "Hay que asegurarse que la casilla de TSM esté rellena.", "Rellenar el campo y volver a intentar copiar." ]
    }
  ],

  BUS: [
    {
      titulo: "Bus no arranca",
      descripcion: "Al girar la llave, el bus hace un ruido atrás pero no arranca.",
      resumen: "Problema de motor",
      contenido: ["Comprobar batería", "Revisar contacto", "Avisar taller"]
    }
  ]
};

/* Genera un array plano con la categoría incluida, para usar en app.js */
const faqs = Object.entries(faqsPorCategoria).flatMap(([categoria, items]) =>
  items.map(i => ({ categoria, ...i }))
);