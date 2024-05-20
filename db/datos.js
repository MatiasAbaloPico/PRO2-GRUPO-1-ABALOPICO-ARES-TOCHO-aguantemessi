const datos = {
  usuario: {
    email: "messi@gmail.com",
    usuario: "messi",
    contrasenia: "**",
    fechaNacimiento: "12/12/1983",
    dni: "37820176",
    fotoPerfil: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf0LuMnGHfTMV19hjWkwWApf2Whm2ulDBL8uJtq7CBcg&s"
  },
  productos: [
    {
      imagen: "https://www.bobswatches.com/rolex-blog/wp-content/uploads/2021/07/Screen-Shot-2021-07-02-at-4.21.12-PM.jpg",
      producto: "Date Just",
      descripcion: "Rolex Datejust (Nuevo): ¡Elegancia y precisión combinadas! Este Rolex Datejust es un nuevo cronómetro certificado que añadirá un toque de distinción a tu estilo.",
      comentarios: [
        {
          nombreUsuario: "Agustin",
          textoComentario: "Hola, de qué material es?",
          imagenPerfil: "/images/agustin.jpeg"
        },
        {
          nombreUsuario: "Luis",
          textoComentario: "si compro 2 me haces precio?",
          imagenPerfil: "/images/luis.png"
        },
        {
          nombreUsuario: "Ares",
          textoComentario: "El reloj cumple su funcionalidad, pero no se ve como en la foto :(",
          imagenPerfil: "/images/ares.png"
        }]
    },
    {
      imagen: "https://www.swisswatchexpo.com/TheWatchClub/wp-content/uploads/2023/12/What-Rolex-Submariner-Is-the-Best-Investment-Rolex-Submariner-Yellow-Gold-Black-Dial-Bezel-Mens-Watch-126618.jpg",
      producto: "Submariner",
      descripcion: "Rolex Submariner (Usado): Sumérgete en la leyenda con este Rolex Submariner. Usado pero en excelente estado, te ofrece la resistencia al agua que necesitas hasta 300 metros de profundidad.",
      comentarios: [{
          nombreUsuario: "Agustin",
          textoComentario: "Hola, es usado?",
          imagenPerfil: "/images/agustin.jpeg"
        },
        {
          nombreUsuario: "Luis",
          textoComentario: "Aceptas canje por una remera de messi?",
          imagenPerfil: "/images/luis.png"
        },
        {
          nombreUsuario: "Ares",
          textoComentario: "No tenes un modelo con una correa distinta?",
          imagenPerfil: "/images/ares.png"
        }]
    },
    {
      imagen: "https://www.bobswatches.com/rolex-blog/wp-content/uploads/2022/07/Rolex-GMT-Master-II-126720vtnr.png",
      producto: "GMT-MasterII",
      descripcion: "Rolex GMT Master II (Nuevo): ¡Viaja con estilo y funcionalidad! Este GMT Master II es nuevo, con la capacidad de rastrear dos husos horarios simultáneamente, perfecto para tus aventuras globales.",
      comentarios: [{
          nombreUsuario: "Agustin",
          textoComentario: "Hola, es original?",
          imagenPerfil: "/images/agustin.jpeg"
        },
        {
          nombreUsuario: "Luis",
          textoComentario: "hola, es el modelo nuevo o el anterior?",
          imagenPerfil: "/images/luis.png"
        },
        {
          nombreUsuario: "Ares",
          textoComentario: "Esta bueno, lo unico, no es sumerjible",
          imagenPerfil: "/images/ares.png"
        }]
    },
    {
      imagen: "https://assets-global.website-files.com/636a2d3c26aa845d12b17679/645a43698b56d1226d07ba7f_Petite-Geneve-Petrovic-2019-11-18-rolex-day-date-40-ref-228206-7.webp",
      producto: "Day-Date",
      descripcion: "Rolex Day-Date (Usado): Haz una declaración de lujo con este Rolex Day-Date. Aunque es usado, su prestigio y elegancia son innegables, con la ventana de día y fecha para mantenerte siempre al tanto.",
      comentarios: [{
          nombreUsuario: "Agustin",
          textoComentario: "No me gusto la coronilla, aprieta la mano",
          imagenPerfil: "/images/agustin.jpeg"
        },
        {
          nombreUsuario: "Luis",
          textoComentario: "Esta buenisimo, muy elegante y ligero.",
          imagenPerfil: "/images/luis.png"
        },
        {
          nombreUsuario: "Ares",
          textoComentario: "Con que se puede combinar un reloj asi?",
          imagenPerfil: "/images/ares.png"
        }]
    },
    {
      imagen: "https://hodinkee.imgix.net/uploads/article/hero_image/352/RolexDaytonaPlatinum_6.jpg?ixlib=rails-1.1.0&fm=jpg&q=55&auto=format&usm=12",
      producto: "Cosmograph Daytona",
      descripcion: "Rolex Cosmograph Daytona (Nuevo): ¡Corre hacia la grandeza con este Cosmograph Daytona! Nuevo y listo para impresionar, su diseño deportivo y su cronógrafo de precisión te llevarán a la victoria.",
      comentarios: [{
          nombreUsuario: "Agustin",
          textoComentario: "Esta muy elevado en precio, estas dispuesto a bajrlo?",
          imagenPerfil: "/images/agustin.jpeg"
        },
        {
          nombreUsuario: "Luis",
          textoComentario: "Yo tenia uno y lo perdi, por lo que recurdo, la mejor compra que hice.",
          imagenPerfil: "/images/luis.png"
        },
        {
          nombreUsuario: "Ares",
          textoComentario: "No es la mejor inversion, no lo recomiendo si quieren conservar el valor.",
          imagenPerfil: "/images/ares.png"
        }]
    },
    {
      imagen: "https://watchtime.mx/wp-content/uploads/2022/04/Rolex-Oyster-Perpetual-Day-Date-1.jpg",
      producto: "Oyster Perpetual",
      descripcion: "Rolex Oyster Perpetual (Nuevo): No hay nada más atemporal que un Oyster Perpetual. Nuevo y listo para enfrentar el mundo, con su resistencia al agua y a los golpes, este Rolex es el compañero perfecto para cada ocasión.",
      comentarios: [{
          nombreUsuario: "Agustin",
          textoComentario: "Messi tenia uno parecido",
          imagenPerfil: "/images/agustin.jpeg"
        },
        {
          nombreUsuario: "Luis",
          textoComentario: "Es automatico o quartz?",
          imagenPerfil: "/images/luis.png"
        },
        {
          nombreUsuario: "Ares",
          textoComentario: "No funciona",
          imagenPerfil: "/images/ares.png"
        }]
    },
    {
      imagen: "https://www.bobswatches.com/rolex-blog/wp-content/uploads/2020/08/Screen-Shot-2021-08-23-at-2.03.29-PM.jpg",
      producto: "Yacht-Master",
      descripcion: "Rolex Yacht-Master (Usado): Navega con estilo con este Rolex Yacht-Master. Aunque es usado, su inspiración en la navegación de lujo y su estilo marinero te llevarán a nuevas alturas, o más bien, profundidades.",
      comentarios: [{
          nombreUsuario: "Agustin",
          textoComentario: "Mal reloj, mal precio, mal servicio. Para eso me compro un Bulova.",
          imagenPerfil: "/images/agustin.jpeg"
        },
        {
          nombreUsuario: "Luis",
          textoComentario: "El color es mucho mas vibrante en persona. la foto no le hace justicia.",
          imagenPerfil: "/images/luis.png"
        },
        {
          nombreUsuario: "Ares",
          textoComentario: "No tenes un modelo menos llamativo, me gusta mas algo perfil bajo.",
          imagenPerfil: "/images/ares.png"
        }]
    },
    {
      imagen: "https://www.bobswatches.com/rolex-blog/wp-content/uploads/2020/08/Rolex_seadweller_126600-7297-Edit.jpg",
      producto: "Sea-Dweller",
      descripcion: "Rolex Sea-Dweller (Nuevo): ¡Explora las profundidades con confianza! Este Rolex Sea-Dweller es nuevo y está listo para sumergirse hasta 1,220 metros sin perder un segundo de precisión.",
      comentarios: [{
          nombreUsuario: "Agustin",
          textoComentario: "Como se viste un reloj asi?",
          imagenPerfil: "/images/agustin.jpeg"
        },
        {
          nombreUsuario: "Luis",
          textoComentario: "Es imperdible un reloj de este estilo en una coleccion.",
          imagenPerfil: "/images/luis.png"
        },
        {
          nombreUsuario: "Ares",
          textoComentario: "Me gusta, pero no me cierra. Muy pesado pero lindo.",
          imagenPerfil: "/images/ares.png"
        }]
    },
    {
      imagen: "https://monochrome-watches.com/wp-content/uploads/2018/03/Rolex-Deepsea-126660-Baselworld-2018-7.jpg",
      producto: "Deepsea",
      descripcion: "Rolex Deepsea (Usado): Aventúrate más allá con este Rolex Deepsea. Aunque es usado, su resistencia extrema al agua hasta 3,900 metros te llevará a nuevos descubrimientos en las profundidades del océano.",
      comentarios: [{
          nombreUsuario: "Agustin",
          textoComentario: "Muy bueno el reloj. Cada cuanto deberia hacerle un mantenimiento.",
          imagenPerfil: "/images/agustin.jpeg"
        },
        {
          nombreUsuario: "Luis",
          textoComentario: "@agustin en la caja viene un papel que indica la fecha de revision anual.",
          imagenPerfil: "/images/luis.png"
        },
        {
          nombreUsuario: "Ares",
          textoComentario: "Vino roto, no gira el segundero. Necesito hacer una devolucion.",
          imagenPerfil: "/images/ares.png"
        }]
    },
    {
      imagen: "https://i.ebayimg.com/images/g/hrAAAOSwQ8tj6pVD/s-l1600.jpg",
      producto: "Air-King",
      descripcion: "Rolex Air-King (Nuevo): ¡Despega hacia nuevas alturas con este Rolex Air-King! Nuevo y listo para conquistar el cielo, su homenaje a la aviación y su resistencia lo convierten en un compañero confiable para cada vuelo.",
      comentarios: [{
          nombreUsuario: "Agustin",
          textoComentario: "Como debo mantenerlo si no le doy uso regular?",
          imagenPerfil: "/images/agustin.jpeg"
        },
        {
          nombreUsuario: "Luis",
          textoComentario: "Viene en 40 mm o solo en 38 y 36?",
          imagenPerfil: "/images/luis.png"
        },
        {
          nombreUsuario: "Ares",
          textoComentario: "Muy parecido a un Richard Mille, ojo con el plagio.",
          imagenPerfil: "/images/ares.png"
        }]
    }
  ]
};

module.exports = datos;