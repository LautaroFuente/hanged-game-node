CREATE DATABASE if not exists score_db;

USE score_db;

CREATE TABLE scores (
	score_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(50),
	total INT UNSIGNED NOT NULL
);