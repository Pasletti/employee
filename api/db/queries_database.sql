CREATE DATABASE `db_company`;

USE `db_company`;

CREATE TABLE `tb_employees` (
  `id` int NOT NULL AUTO_INCREMENT,
  `age` int DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `date_created` datetime DEFAULT NULL,
  `date_modified` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB CHARSET=utf8 COLLATE=utf8_bin;

INSERT INTO `db_company`.`tb_employees`
(`id`, `age`, `name`, `role`, `date_created`, `date_modified`)
VALUES
(null, 28, 'Charles Nascimento', 'Desenvolvedor Fullstack', now(), now());

INSERT INTO `db_company`.`tb_employees`
(`id`, `age`, `name`, `role`, `date_created`, `date_modified`)
VALUES
(null, 30, 'Charles Passos', 'Desenvolvedor Backend', now(), now());