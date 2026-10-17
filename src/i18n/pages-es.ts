import type { PagesCopy } from "./index";

/**
 * Textos de las páginas de Instalar, Acerca de, Términos y Privacidad (español).
 * Redactados a partir de la documentación del sistema (README, guía de uso, operación, marca y
 * licencias). Los textos legales son un borrador: conviene que los revise una persona con formación
 * jurídica antes de publicarlos.
 */
export const pagesEs: PagesCopy = {
  back: "Volver al inicio",
  updated: "Última actualización",
  tocTitle: "En esta página",
  highlightsTitle: "En pocas palabras",
  contact: {
    title: "Contacto",
    body: "¿Tienes dudas, o quieres pedir un permiso? Escríbenos por LinkedIn.",
    cta: "Escribir por LinkedIn",
  },

  install: {
    title: "Instalar aline",
    intro:
      "aline funciona directamente en tu navegador y se puede instalar como una app, sin descargar ningún archivo. Instalada tiene su propio icono, abre sin conexión y conserva mejor tus datos.",
    tabsLabel: "Elige tu dispositivo",
    tabs: { chrome: "Chrome (ordenador)", edge: "Edge (ordenador)", ipad: "iPad (Safari)" },
    steps: {
      chrome: [
        "Abre aline en Chrome.",
        "Haz clic en el icono de instalar que aparece a la derecha de la barra de direcciones.",
        "Confirma con «Instalar».",
      ],
      edge: [
        "Abre aline en Edge.",
        "Haz clic en el icono «App disponible» de la barra de direcciones.",
        "Confirma con «Instalar».",
      ],
      ipad: [
        "Abre aline en Safari.",
        "Toca «Compartir» (o los tres puntos y luego «Compartir»).",
        "Elige «Agregar a pantalla de inicio».",
      ],
    },
    alt: {
      chrome:
        "Para instalar aline, haz clic en el icono de instalar de la barra de direcciones y confirma con Instalar.",
      edge: "Para instalar aline, haz clic en el icono «App disponible» de la barra de direcciones y confirma con Instalar.",
      ipad: "Para instalar aline en el iPad, toca Compartir y elige Agregar a pantalla de inicio.",
    },
    supported: "aline funciona en Chrome y Edge en el ordenador, y en Safari en el iPad.",
    exeTitle: "¿Y un instalador para Windows (.exe)?",
    exeBody: [
      "Todavía no existe, pero estamos trabajando en ello.",
      "Para que Windows deje instalar un programa sin avisos de seguridad, el archivo tiene que llevar una firma digital que demuestra quién lo creó. Esa firma necesita un certificado, y estamos tramitando el que se ofrece a los proyectos de código abierto.",
      "Mientras tanto, instalarla desde el navegador es la forma oficial: es la misma aplicación y no tienes que descargar ni ejecutar nada.",
    ],
    open: "Abrir aline",
  },

  about: {
    title: "Acerca de",
    intro:
      "aline es un lugar para pensar con calma: notas, documentos, diagramas y tu calendario en un mismo lienzo, todo enlazado entre sí. Tiene la calidez del papel, la tinta y el resaltador, y una idea sencilla: lo que escribes y dibujas es tuyo.",
    sections: [
      {
        title: "Qué es aline",
        paragraphs: [
          "aline es un sistema personal de mapas mentales y notas conectadas. Puedes escribir notas, redactar documentos, dibujar diagramas sobre un lienzo infinito y planear tu semana en un calendario. Todo se enlaza con todo, así cada idea sabe de dónde viene y para cuándo es.",
          "Funciona en el navegador del ordenador (Chrome o Edge) y en el iPad (Safari, con soporte para Apple Pencil). Se puede instalar como una app y sigue funcionando sin conexión.",
        ],
        link: { text: "Cómo instalarla", to: "install" },
      },
      {
        title: "Lo que nos importa",
        items: [
          "Tus datos son tuyos. Todo se guarda en tu propio dispositivo y no hace falta crear una cuenta.",
          "Sin letra pequeña escondida: no hay anuncios, ni analítica, ni rastreo.",
          "Formatos abiertos. Tus notas son archivos Markdown y tus lienzos son archivos .excalidraw: puedes abrirlos en otras herramientas, siempre.",
          "Nada se pierde sin avisar. Cada guardado queda en un historial, lo que borras va a una papelera y los conflictos entre dispositivos se conservan en lugar de sobrescribirse.",
        ],
      },
      {
        title: "Cómo funciona por dentro",
        paragraphs: [
          "aline es una aplicación web que funciona en tu dispositivo: no hay un servidor que guarde tus notas. Si quieres usarla en varios equipos, puedes sincronizar con una carpeta de tu ordenador o con tu propio Google Drive, con cifrado de extremo a extremo opcional.",
        ],
        link: { text: "Leer la política de privacidad", to: "privacy" },
      },
      {
        title: "Construida sobre software libre",
        paragraphs: [
          "El lienzo de aline está construido sobre Excalidraw y otras librerías de código abierto, cada una con su propia licencia. aline es un proyecto independiente y no está afiliado ni respaldado por Excalidraw ni por Google.",
          "El código de aline está licenciado bajo la GNU AGPLv3. El nombre, el logotipo y los stickers son marca y propiedad de aline.",
        ],
        link: { text: "Ver los términos", to: "terms" },
      },
      {
        title: "Quién está detrás",
        paragraphs: [
          "aline es un proyecto independiente creado y mantenido por Francisco Camareno. Está en desarrollo activo: algunas funciones todavía son beta y seguimos mejorándola.",
        ],
        items: [
          "Se instala desde el navegador, en el ordenador y en el iPad.",
          "Un instalador para Windows (.exe) está en camino: estamos tramitando la firma digital que necesita.",
        ],
      },
    ],
  },

  terms: {
    title: "Términos",
    intro:
      "Estos términos explican las reglas básicas para usar aline. Los escribimos en lenguaje claro. Al usar el sitio web o la aplicación, aceptas estos términos.",
    highlights: [
      "Tu contenido es tuyo y se guarda en tu dispositivo.",
      "Las copias de seguridad son tu responsabilidad.",
      "El código es libre (AGPLv3); el nombre, el logotipo y los stickers no.",
      "aline se ofrece tal cual, sin garantías.",
    ],
    sections: [
      {
        title: "Quiénes somos",
        paragraphs: [
          "aline («nosotros») es un proyecto independiente creado y mantenido por Francisco Camareno. Si no estás de acuerdo con estos términos, no uses aline.",
        ],
      },
      {
        title: "Qué ofrecemos",
        paragraphs: [
          "aline es una aplicación web instalable para tomar notas, escribir documentos, dibujar diagramas y organizar un calendario. Funciona en tu dispositivo y no requiere cuenta.",
          "Está en desarrollo activo: algunas funciones son beta y pueden cambiar, mejorar o desaparecer.",
        ],
      },
      {
        title: "Tu contenido es tuyo",
        paragraphs: [
          "Todo lo que creas en aline (notas, documentos, lienzos, imágenes, eventos) es tuyo. No lo recibimos, no lo vemos y no te pedimos ninguna licencia sobre él, porque se guarda en tu dispositivo y, solo si tú lo activas, en tu propia carpeta o en tu propio Google Drive.",
          "Eres responsable de lo que escribes y guardas, y puedes exportarlo cuando quieras en formatos abiertos.",
        ],
      },
      {
        title: "Copias de seguridad",
        paragraphs: [
          "aline guarda tu información en el almacenamiento de tu navegador. El navegador puede borrarla si limpias los datos del sitio o, en el iPad, si se queda sin espacio. Por eso las copias de seguridad son responsabilidad tuya.",
        ],
        items: [
          "Descarga una copia completa (ZIP) con regularidad y guárdala fuera de tu equipo.",
          "Si usas Google Drive con cifrado, guarda tu contraseña y tu código de recuperación: sin ellos nadie, tampoco nosotros, puede recuperar esa copia.",
          "Mantén aline actualizada en todos tus dispositivos: una versión antigua puede no reconocer documentos creados con una más nueva.",
        ],
      },
      {
        title: "Google Drive y otros servicios",
        paragraphs: [
          "Conectar Google Drive o una carpeta de tu ordenador es opcional. Si usas Drive, tu contenido se guarda en tu cuenta de Google y se rige por los términos y la política de privacidad de Google; nosotros no controlamos ese servicio.",
          "Antes de conectarlo, aline te pide elegir entre sincronizar sin cifrar (Google podría leer el contenido) o con cifrado de extremo a extremo.",
        ],
      },
      {
        title: "Código, marca y recursos gráficos",
        paragraphs: [
          "El código de aline está licenciado bajo la GNU AGPLv3: puedes usarlo, estudiarlo, modificarlo y redistribuirlo según esa licencia. El nombre «aline», el logotipo, los iconos, los stickers, las notas adhesivas, las ilustraciones y los esquemas de color son propiedad de aline y quedan fuera de la AGPLv3 (todos los derechos reservados).",
        ],
        items: [
          "Puedes usar los stickers, las notas adhesivas y los iconos dentro de tus propios documentos creados con aline, y compartirlos, imprimirlos o exportarlos, incluso con fines comerciales.",
          "No puedes redistribuir esos recursos por separado, como colección, ni dentro de un fork o de un producto de terceros.",
          "Si publicas una versión modificada de aline, debes cambiarle el nombre y sustituir el logotipo, los iconos y los stickers por los tuyos.",
          "Puedes mencionar el nombre «aline» para referirte con veracidad al proyecto original (por ejemplo, «basado en aline»), sin sugerir aprobación ni afiliación.",
        ],
      },
      {
        title: "Software de terceros",
        paragraphs: [
          "aline usa Excalidraw y otras librerías y fuentes de código abierto, cada una con su propia licencia. Sus avisos completos están dentro de la aplicación, en «Estado y diagnóstico → Licencias». aline no está afiliada a Excalidraw ni a Google; los nombres y logotipos de terceros pertenecen a sus dueños.",
        ],
      },
      {
        title: "Uso responsable",
        paragraphs: [
          "Usa aline de forma responsable: no la utilices para actividades ilegales, no intentes dañar, saturar o vulnerar el sitio web ni a otras personas, y no extraigas ni redistribuyas los recursos gráficos fuera de lo permitido.",
        ],
      },
      {
        title: "Sin garantías y límite de responsabilidad",
        paragraphs: [
          "aline se ofrece «tal cual» y «según disponibilidad», sin garantías de ningún tipo, expresas o implícitas, incluida la de que sirva para un fin concreto o funcione sin interrupciones ni errores.",
          "En la medida en que la ley lo permita, no somos responsables de pérdidas de datos, de ingresos ni de otros daños derivados del uso (o de la imposibilidad de uso) de aline. Esto no limita los derechos que la ley no permita limitar.",
        ],
      },
      {
        title: "Cambios en estos términos",
        paragraphs: [
          "Podemos actualizar estos términos. Publicaremos la versión nueva en esta página con su fecha. Si sigues usando aline después de un cambio, entendemos que lo aceptas.",
        ],
        link: { text: "Leer la política de privacidad", to: "privacy" },
      },
    ],
  },

  privacy: {
    title: "Privacidad",
    intro:
      "En pocas palabras: aline no tiene cuentas, no usa analítica y no recibe tus notas. Aquí te explicamos qué pasa con tu información, sin tecnicismos.",
    highlights: [
      "Tus notas, documentos y lienzos se guardan en tu dispositivo, no en nuestros servidores.",
      "No hay cuentas, ni anuncios, ni analítica, ni rastreo.",
      "Google Drive es opcional y tú decides si se cifra.",
      "Puedes llevarte o borrar todo cuando quieras.",
    ],
    sections: [
      {
        title: "Qué guarda aline y dónde",
        paragraphs: [
          "Lo que creas en aline se guarda en el almacenamiento de tu navegador, en tu dispositivo. aline no tiene un servidor donde se almacenen tus notas ni una base de datos con tus datos.",
        ],
        items: [
          "Tu contenido: notas, documentos, lienzos, imágenes, calendarios, historial de versiones y papelera.",
          "Tus preferencias: idioma, tema de color y el último documento que abriste.",
          "Un registro técnico local, para diagnosticar fallos, que nunca incluye el texto de tus notas ni claves de acceso y que solo sale de tu dispositivo si tú lo exportas.",
        ],
      },
      {
        title: "Lo que no hacemos",
        items: [
          "No te pedimos que crees una cuenta.",
          "No usamos analítica, telemetría ni cookies de publicidad.",
          "No vendemos ni compartimos tus datos, ni los usamos para anuncios.",
          "No cargamos por sí solas las imágenes externas que aparezcan en tus notas: se muestran como enlaces.",
          "Las fuentes de letra se sirven desde el propio sitio, no desde servicios externos.",
        ],
      },
      {
        title: "Este sitio web",
        paragraphs: [
          "La página de presentación guarda en tu navegador solo dos cosas, únicamente para que funcione como esperas:",
        ],
        items: [
          "Una cookie llamada «lang», de un año de duración, con tu idioma preferido, para llevarte a la versión correcta.",
          "Un dato local con la posición de los stickers decorativos, si los mueves, para recordar dónde los dejaste.",
        ],
        after: ["No usamos cookies de seguimiento ni herramientas de analítica."],
      },
      {
        title: "Google Drive (opcional)",
        paragraphs: [
          "Si decides sincronizar con Google Drive, aline te pide primero elegir cómo hacerlo y no se conecta con Google hasta que lo eliges.",
        ],
        items: [
          "Sin cifrar: tu contenido se guarda en tu Drive en un formato legible y Google puede leerlo, según su política.",
          "Con cifrado de extremo a extremo: tu contenido se cifra en tu dispositivo antes de subirlo y Google no puede leerlo. Si pierdes la contraseña y el código de recuperación, esa copia no se puede recuperar.",
          "aline solo pide permiso para ver y gestionar los archivos que ella misma crea (el permiso «drive.file»), no el resto de tu Drive.",
          "La autorización dura solo mientras la página está abierta: al recargar hay que volver a autorizar.",
          "Tus datos viajan directamente entre tu navegador y Google; no pasan por servidores nuestros.",
        ],
        after: [
          "La información que aline obtiene de tu cuenta de Google se usa únicamente para guardar y recuperar tu contenido; no se transfiere a terceros ni se usa para publicidad. Puedes retirar el acceso en cualquier momento desde la configuración de tu cuenta de Google. El uso que Google haga de tus datos se rige por su propia política de privacidad.",
        ],
      },
      {
        title: "Alojamiento",
        paragraphs: [
          "El sitio y la aplicación se sirven a través de Cloudflare. Como cualquier servicio de alojamiento, Cloudflare puede registrar datos técnicos de la conexión (como la dirección IP y el tipo de navegador) para entregar los archivos y proteger el servicio, según su propia política de privacidad. Nosotros no usamos esos datos para identificarte ni para crear perfiles.",
        ],
      },
      {
        title: "Tu control",
        items: [
          "Llévate lo tuyo: exporta tu contenido en formatos abiertos (Markdown, .excalidraw, PNG, SVG, PDF, Word y una copia completa en ZIP).",
          "Borra lo que quieras: lo que eliminas va a la papelera y puedes eliminarlo definitivamente cuando quieras. Para borrar todo, limpia los datos del sitio en tu navegador.",
          "Las copias que hayas guardado en Google Drive o en una carpeta de tu ordenador se borran desde allí.",
          "Puedes retirar el permiso de Google Drive desde tu cuenta de Google.",
        ],
        after: [
          "Como nosotros no recibimos tus datos, no podemos acceder a ellos, corregirlos ni borrarlos por ti: tienes el control.",
        ],
      },
      {
        title: "Cambios en esta política",
        paragraphs: [
          "Si esta política cambia, la actualizaremos aquí con su fecha. Si algún día agregamos algo que cambie lo anterior, como cuentas o servicios propios, lo explicaremos en esta página.",
        ],
        link: { text: "Leer los términos", to: "terms" },
      },
    ],
  },
};
