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

Piensa que vamos a dar asistencia telefónica a un conductor que está en una situación crítica, posiblemente con una persona atrapada arriba del bus o con más gente que quiere continuar el viaje después de bajar a la persona... 
De hecho hoy me ha pasado con el Iveco y le he guiado al conductor como he podido y ha conseguido guardar la rampa y bajar al hombre, entonces, necesito un resumen de cosas que puedan sacar del paso. En otokar vectio, hay un truco que es acelerar en vacío 10 segundos y probar la rampa, a veces funciona porque es un tema del alternador o algo así... el caso, házmelo por marcas tal cual te pasé el guion. Olvídate de momento de las imágenes, vamos a seguir con el sistema de solo texto tal cual...
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
			"Fallo de comunicación de la TV100. Avisar a los técnicos SAE.",
      "Revisar la FAQ 'EMV (pago con tarjeta) fuera de servicio'."
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
			"Hay que avisar a los técnicos del SAE para cambiar la TV100.",
      "Revisar la FAQ 'EMV (pago con tarjeta) fuera de servicio'."
			]
			},
		]
	},
	{
	  titulo: "EMV (pago con tarjeta) no se inicia.",
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
	},
  {
  titulo: "EMV (pago con tarjeta) falla con un viajero",
  descripcion: "Un viajero no puede pagar con tarjeta bancaria.",
  resumen: "Fallo puntual de pago con tarjeta.",
  contenido: [
    "Pedir al viajero que lo intente de nuevo.",
    "Si falla, debe pagar en efectivo.",
    "Si no tiene efectivo, no puede viajar."
  ]
},
{
  titulo: "EMV (pago con tarjeta) falla con varios viajeros",
  descripcion: "Fallos de pago con tarjeta en distintos viajeros.",
  resumen: "Fallos repetidos de pago con tarjeta.",
  contenido: [
    "Se considera problema del sistema EMV.",
    "Si no hay efectivo, emitir billete coste cero.",
    "Avisar de la incidencia a Técnico SAE."
  ]
},
{
  titulo: "EMV (pago con tarjeta) fuera de servicio",
  descripcion: "El sistema EMV queda sin conexión o no funciona.",
  resumen: "EMV fuera de servicio.",
  contenido: [
    "Cambio de bus, si no se puede, solicitar pago en efectivo.",
    "Si no hay efectivo, permitir viajar con billete coste cero.",
    "Al finalizar, rellenar Parte de Incidencias y avisar a Técnico SAE."
  ]
},
{
  titulo: "EMV (pago con tarjeta) cobra pero no imprime billete",
  descripcion: "No se imprime billete tras un pago correcto.",
  resumen: "Pago correcto sin impresión.",
  contenido: [
    "Si el sonido fue correcto, el pago es válido.",
    "Permitir viajar al usuario.",
    "La tarjeta del usuario sirve como justificante."
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
      titulo: "Bloqueo de la rampa fuera.",
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
          titulo: "Iveco",
          descripcion: "",
          resumen: "Iveco",
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
      contenido: [ 
      "Hay que asegurarse que la casilla de TSM esté rellena.", 
      "Rellenar el campo y volver a intentar copiar." 
    ]
    },
	{
	  titulo: "La hoja mañaneros no muestra todos los servicios.",
	  descripcion: "No carga los turnos más allá de las 9:00.",
	  resumen: "Faltan servicios en la tabla.",
	  contenido: [
    "¡ATENCION! Por la programación, tampoco carga el turno 1062 porque empieza con Relevo.",
		"No es un fallo, está programado así."
	  ]
	},
	{
	  titulo: "Error de #¡REF! en el nombre del conductor.",
	  descripcion: "La fórmula está mal o se vincula a otro archivo.",
	  resumen: "Al escribir un código de conductor da error.",
	  contenido: [
		"Copiar formula de otra celda que funcione.",
    "Al pegar, hacer pegado especial de sólo fórmulas (O usar icono pegar con 'fx')."
	  ]
	},
	{
	  titulo: "Hay un color raro en los coches.",
	  descripcion: "Pequeña guía para los colores en la zona de los coches.",
	  resumen: "Codigo de colores para los coches.",
	  contenido: [
    '<span style="background-color:#FFF9C4; color:#000000;">Uso limitado.</span>',
    '<span style="background-color:#000000; color:#00FF00;">Coche no existe.</span>',
    '<span style="background-color:#FF5252; color:#FFFFFF;">Averiado / Paralizado.</span>',
    '<span style="background-color:rgba(119, 187, 119, 0.82); color:#000000;">Mantenimiento.</span>',
    '<span style="background-color:#000000; color:#FFFFFF;">Coche duplicado (en el resumen de coches).</span>'
    ]
	}
  ],

  BUS: [
    {
      titulo: "Bus no arranca",
      descripcion: "Al girar la llave, el bus hace un ruido atrás pero no arranca.",
      resumen: "Problema de motor",
      contenido: [
      "Comprobar batería",
      "Revisar contacto", 
      "Avisar taller"
    ]
    }
  ]
};

/* Genera un array plano con la categoría incluida, para usar en app.js */
const faqs = Object.entries(faqsPorCategoria).flatMap(([categoria, items]) =>
  items.map(i => ({ categoria, ...i }))
);