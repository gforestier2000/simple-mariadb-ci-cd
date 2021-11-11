
-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: chess
-- ------------------------------------------------------
-- Server version       8.0.26


USE `chess`;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'id de l''utilisateur',
  `email` varchar(250) NOT NULL COMMENT 'email de l''utilisateur',
  `firstname` varchar(250) DEFAULT NULL COMMENT 'prénom de l''utilisateur',
  `lastname` varchar(250) DEFAULT NULL COMMENT 'nom de l''utilisateur',
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=1 COMMENT='Utilisateurs de l''application';
