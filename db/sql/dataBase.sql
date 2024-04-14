CREATE SCHEMA ti;

USE ti;

CREATE TABLE `usuarios` (
  `id` int unsigned PRIMARY KEY AUTO_INCREMENT,
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
);

CREATE TABLE productos (
  id int(10) unsigned NOT NULL AUTO_INCREMENT,
  idUsuario int(10) unsigned DEFAULT NULL,
  nombreProducto varchar(250) NOT NULL,
  descripcion varchar(250) NOT NULL,
  imagenProducto varchar(250) NOT NULL,
  createdAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deletedAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idUsuario (idUsuario),
  CONSTRAINT productos_ibfk_1 FOREIGN KEY (idUsuario) REFERENCES usuarios (id)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8