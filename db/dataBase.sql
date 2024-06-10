CREATE SCHEMA ti;

USE ti;

CREATE TABLE `usuarios` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(250) NOT NULL,
  `apellido` varchar(250) NOT NULL,
  `mail` varchar(250) NOT NULL,
  `usuario` varchar(250) NOT NULL,
  `contrasenia` varchar(250) NOT NULL,
  `fechaNacimiento` date NOT NULL,
  `dni` int(11) NOT NULL,
  `foto` varchar(250) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deletedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);

CREATE TABLE `productos` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `idUsuario` int(10) unsigned DEFAULT NULL,
  `nombreProducto` varchar(250) NOT NULL,
  `descripcion` varchar(250) NOT NULL,
  `imagenProducto` varchar(250) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deletedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idUsuario` (`idUsuario`),
  CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`idUsuario`) REFERENCES `usuarios` (`id`)
);

CREATE TABLE `comentarios` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `idPost` int(10) unsigned DEFAULT NULL,
  `idUsuario` int(10) unsigned DEFAULT NULL,
  `textoComentario` varchar(250) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deletedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idUsuario` (`idUsuario`),
  KEY `idPost` (`idPost`),
  CONSTRAINT `comentarios_ibfk_1` FOREIGN KEY (`idUsuario`) REFERENCES `usuarios` (`id`),
  CONSTRAINT `comentarios_ibfk_2` FOREIGN KEY (`idPost`) REFERENCES `productos` (`id`)
);


INSERT INTO `usuarios` VALUES (1,'Lionel','Messi','@lmessi','ellio','**********','1111-12-03',45219070,'foto.png','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52'),(2,'Martin','Menem','@mmessi','elor','**********','1111-12-03',45000070,'foto.png','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52'),(3,'Juan','Tera','@mtera','ewrgor','**********','1111-12-03',45987070,'foto.png','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52'),(4,'Tadeo','Legrand','@tlegrand','eltade','**********','1111-12-03',45011170,'foto.png','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52'),(5,'Tadeo','Legrand','@tlegrand','eltade','**********','1111-12-03',45011170,'foto.png','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52');



INSERT INTO `productos` VALUES (1,1,'Date Just','Rolex Datejust (Nuevo): ¡Elegancia y precisión combinadas! Este Rolex Datejust es un nuevo cronómetro certificado que añadirá un toque de distinción a tu estilo.','https://www.bobswatches.com/rolex-blog/wp-content/uploads/2021/07/Screen-Shot-2021-07-02-at-4.21.12-PM.jpg','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52'),(2,2,'Submariner','Rolex Submariner (Usado): Sumérgete en la leyenda con este Rolex Submariner. Usado pero en excelente estado, te ofrece la resistencia al agua que necesitas hasta 300 metros de profundidad.','https://www.swisswatchexpo.com/TheWatchClub/wp-content/uploads/2023/12/What-Rolex-Submariner-Is-the-Best-Investment-Rolex-Submariner-Yellow-Gold-Black-Dial-Bezel-Mens-Watch-126618.jpg','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52'),(3,3,'GMT-MasterII','Rolex GMT Master II (Nuevo): ¡Viaja con estilo y funcionalidad! Este GMT Master II es nuevo, con la capacidad de rastrear dos husos horarios simultáneamente, perfecto para tus aventuras globales.','https://www.bobswatches.com/rolex-blog/wp-content/uploads/2022/07/Rolex-GMT-Master-II-126720vtnr.png','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52'),(4,4,'Day-Date','Rolex Day-Date (Usado): Haz una declaración de lujo con este Rolex Day-Date. Aunque es usado, su prestigio y elegancia son innegables, con la ventana de día y fecha para mantenerte siempre al tanto.','https://assets-global.website-files.com/636a2d3c26aa845d12b17679/645a43698b56d1226d07ba7f_Petite-Geneve-Petrovic-2019-11-18-rolex-day-date-40-ref-228206-7.webp','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52'),(5,1,'Cosmograph Daytona','Rolex Cosmograph Daytona (Nuevo): ¡Corre hacia la grandeza con este Cosmograph Daytona! Nuevo y listo para impresionar, su diseño deportivo y su cronógrafo de precisión te llevarán a la victoria.','https://hodinkee.imgix.net/uploads/article/hero_image/352/RolexDaytonaPlatinum_6.jpg?ixlib=rails-1.1.0&fm=jpg&q=55&auto=format&usm=12','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52'),(6,4,'Oyster Perpetual','Rolex Oyster Perpetual (Nuevo): No hay nada más atemporal que un Oyster Perpetual. Nuevo y listo para enfrentar el mundo, con su resistencia al agua y a los golpes, este Rolex es el compañero perfecto para cada ocasión.','https://watchtime.mx/wp-content/uploads/2022/04/Rolex-Oyster-Perpetual-Day-Date-1.jpg','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52'),(7,2,'Yacht-Master','Rolex Yacht-Master (Usado): Navega con estilo con este Rolex Yacht-Master. Aunque es usado, su inspiración en la navegación de lujo y su estilo marinero te llevarán a nuevas alturas, o más bien, profundidades.','https://www.bobswatches.com/rolex-blog/wp-content/uploads/2020/08/Screen-Shot-2021-08-23-at-2.03.29-PM.jpg','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52'),(8,3,'Sea-Dweller','Rolex Sea-Dweller (Nuevo): ¡Explora las profundidades con confianza! Este Rolex Sea-Dweller es nuevo y está listo para sumergirse hasta 1,220 metros sin perder un segundo de precisión.','https://www.bobswatches.com/rolex-blog/wp-content/uploads/2020/08/Rolex_seadweller_126600-7297-Edit.jpg','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52'),(9,2,'Deepsea','Rolex Deepsea (Usado): Aventúrate más allá con este Rolex Deepsea. Aunque es usado, su resistencia extrema al agua hasta 3,900 metros te llevará a nuevos descubrimientos en las profundidades del océano.','https://monochrome-watches.com/wp-content/uploads/2018/03/Rolex-Deepsea-126660-Baselworld-2018-7.jpg','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52'),(10,1,'Air-King','Rolex Air-King (Nuevo): ¡Despega hacia nuevas alturas con este Rolex Air-King! Nuevo y listo para conquistar el cielo, su homenaje a la aviación y su resistencia lo convierten en un compañero confiable para cada vuelo.','https://i.ebayimg.com/images/g/hrAAAOSwQ8tj6pVD/s-l1600.jpg','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52');



INSERT INTO `comentarios` VALUES (1,1,1,'Hola, de qué material es?','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52'),
(2,2,2,'si compro 2 me haces precio?','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52'),
(3,3,3,'El reloj cumple su funcionalidad, pero no se ve como en la foto :(','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52'),(4,4,4,'Hola, es usado?','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52'),(5,5,4,'Aceptas canje por una remera de messi?','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52'),(6,6,4,'No tenes un modelo con una correa distinta?','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52'),(7,7,4,'Hola, es original?','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52'),(8,8,2,'hola, es el modelo nuevo o el anterior?','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52'),(9,9,1,'Esta bueno, lo unico, no es sumerjible','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52'),(10,10,3,'No me gusto la coronilla, aprieta la mano','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52'),(11,1,4,'Esta buenisimo, muy elegante y ligero.','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52'),(12,2,2,'Con que se puede combinar un reloj asi?','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52'),(13,3,2,'Esta muy elevado en precio, estas dispuesto a bajrlo?','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52'),(14,4,3,'Yo tenia uno y lo perdi, por lo que recurdo, la mejor compra que hice.','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52'),(15,5,3,'No es la mejor inversion, no lo recomiendo si quieren conservar el valor.','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52'),(16,6,3,'Messi tenia uno parecido','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52'),(17,7,3,'Es automatico o quartz?','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52'),(18,8,3,'No funciona','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52'),(19,9,3,'Mal reloj, mal precio, mal servicio. Para eso me compro un Bulova.','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52'),(20,2,3,'El color es mucho mas vibrante en persona. la foto no le hace justicia.','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52'),(21,1,2,'No tenes un modelo menos llamativo, me gusta mas algo perfil bajo.','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52'),(22,2,2,'Como se viste un reloj asi?','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52'),(23,3,2,'Es imperdible un reloj de este estilo en una coleccion.','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52'),(24,4,2,'Me gusta, pero no me cierra. Muy pesado pero lindo.','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52'),(25,5,1,'Muy bueno el reloj. Cada cuanto deberia hacerle un mantenimiento','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52'),(26,6,1,'@agustin en la caja viene un papel que indica la fecha de revision anual.','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52'),(27,7,1,'Vino roto, no gira el segundero. Necesito hacer una devolucion.','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52'),(28,8,1,'Como debo mantenerlo si no le doy uso regular?','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52'),(29,9,1,'Viene en 40 mm o solo en 38 y 36?','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52'),(30,10,1,'Muy parecido a un Richard Mille, ojo con el plagio.','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52');
