DROP DATABASE IF EXISTS LemonLoft;

CREATE DATABASE LemonLoft;

USE LemonLoft;

CREATE TABLE users (
  `_id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(40) NOT NULL,
  `image` varchar(100)
);

CREATE TABLE hosts (
  `_id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `hostName` varchar(40) NOT NULL,
  `hostImage` varchar(100)
);

CREATE TABLE reviews (
  `_id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
--   `userId` int NOT NULL,
  FOREIGN KEY (userId) REFERENCES users(_id)
    ON DELETE SET NULL
    ON UPDATE CASCADE,
  `date` datetime NOT NULL,
  `body` varchar(5000)  NOT NULL,

  `rating` int NOT NULL,
  `cleanliness` int NOT NULL,
  `communication` int NOT NULL,
  `checkin` int NOT NULL,
  `accuracy` int NOT NULL,
  `location` int NOT NULL,
  `value` int NOT NULL,

  `quiRes` boolean NOT NULL,
  `outHos` boolean NOT NULL,
  `amaAme` boolean NOT NULL,
  `stySpa` boolean NOT NULL,
  `spaCle` boolean NOT NULL,

--   `hostId` int NOT NULL,
  FOREIGN KEY (hostId) REFERENCES hosts(_id)
    ON DELETE SET NULL
    ON UPDATE CASCADE,
  `hostRes` varchar(5000),
  `hostResDate` datetime,
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < database/schema.sql
 *  to create the database and the tables.*/