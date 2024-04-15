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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

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
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

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
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;


INSERT INTO `usuarios` VALUES (1,'Lionel','Messi','@lmessi','ellio','**********','1111-12-03',45219070,'foto.png','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52'),(2,'Martin','Menem','@mmessi','elor','**********','1111-12-03',45000070,'foto.png','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52'),(3,'Juan','Tera','@mtera','ewrgor','**********','1111-12-03',45987070,'foto.png','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52'),(4,'Tadeo','Legrand','@tlegrand','eltade','**********','1111-12-03',45011170,'foto.png','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52'),(5,'Tadeo','Legrand','@tlegrand','eltade','**********','1111-12-03',45011170,'foto.png','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52');



INSERT INTO `productos` VALUES (1,1,'producto1','es muy bueno','foto.png','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52'),(2,2,'producto2','es muy bueno','foto.png','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52'),(3,3,'producto3','es muy bueno','foto.png','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52'),(4,4,'producto4','es muy bueno','foto.png','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52'),(5,1,'producto5','es muy bueno','foto.png','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52'),(6,4,'producto6','es muy bueno','foto.png','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52'),(7,2,'producto7','es muy bueno','foto.png','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52'),(8,3,'producto8','es muy bueno','foto.png','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52'),(9,2,'producto9','es muy bueno','foto.png','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52'),(10,1,'producto10','es muy bueno','foto.png','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52');



INSERT INTO `comentarios` VALUES (1,1,1,'hola','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52'),
(2,2,2,'hola','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52'),
(3,3,3,'hola','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52'),(4,4,4,'hola','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52'),(5,5,4,'hola','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52'),(6,6,4,'hola','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52'),(7,7,4,'hola','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52'),(8,8,2,'hola','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52'),(9,9,1,'hola','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52'),(10,10,3,'hola','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52'),(11,1,4,'hola','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52'),(12,2,2,'hola','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52'),(13,3,2,'hola','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52'),(14,4,3,'hola','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52'),(15,5,3,'hola','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52'),(16,6,3,'hola','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52'),(17,7,3,'hola','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52'),(18,8,3,'hola','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52'),(19,9,3,'hola','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52'),(20,2,3,'hola','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52'),(21,1,2,'hola','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52'),(22,2,2,'hola','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52'),(23,3,2,'hola','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52'),(24,4,2,'hola','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52'),(25,5,1,'hola','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52'),(26,6,1,'hola','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52'),(27,7,1,'hola','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52'),(28,8,1,'hola','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52'),(29,9,1,'hola','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52'),(30,10,1,'hola','2024-04-08 15:53:52','2024-04-08 15:53:52','2024-04-08 15:53:52');
