DROP DATABASE IF EXISTS LemonLoftReviews;

CREATE DATABASE LemonLoftReviews;

USE LemonLoftReviews;

CREATE TABLE users (
  `_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(40) NOT NULL,
  `image` VARCHAR(100)
);

CREATE TABLE hosts (
  `_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `hostName` VARCHAR(40) NOT NULL,
  `hostImage` VARCHAR(100)
);

CREATE TABLE reviews (
  `_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `userId` INT NOT NULL,
  CONSTRAINT fk_user_id FOREIGN KEY (userId) 
  REFERENCES users(_id) ON DELETE CASCADE,
  `date` DATETIME NOT NULL,
  `body` VARCHAR(5000) NOT NULL,
  `rating` INT NOT NULL,
  `cleanliness` INT NOT NULL,
  `communication` INT NOT NULL,
  `checkin` INT NOT NULL,
  `accuracy` INT NOT NULL,
  `location` INT NOT NULL,
  `value` INT NOT NULL,
  `quiRes` BOOLEAN NOT NULL,
  `outHos` BOOLEAN NOT NULL,
  `amaAme` BOOLEAN NOT NULL,
  `stySpa` BOOLEAN NOT NULL,
  `spaCle` BOOLEAN NOT NULL,
  `hostId` INT NOT NULL,
  CONSTRAINT fk_host_id FOREIGN KEY (hostId) 
  REFERENCES hosts(_id) ON DELETE CASCADE,
  `hostRes` VARCHAR(5000),
  `hostResDate` DATETIME
);


/*  Execute this file from the command line by typing:
 *    mysql -u loftuser -p < database/schema.sql
 *  to create the database and the tables.*/