CREATE DATABASE university_db;
USE university_db;
CREATE TABLE students
(
	id 			INT AUTO_INCREMENT 	NOT NULL,
	name 		VARCHAR(32) 		NOT NULL,
	surname 	VARCHAR(32) 		NOT NULL,
    age 		INT					NOT NULL,
    group_id	INT 				NOT NULL,
    PRIMARY KEY(id)
);
CREATE TABLE students_group
(
	id			INT AUTO_INCREMENT 	NOT NULL,
    faculty_id	INT					NOT NULL,
    PRIMARY KEY(id)
);
CREATE TABLE faculty
(
	id 			INT AUTO_INCREMENT		NOT NULL,
    name		VARCHAR(255),
    PRIMARY KEY(id)
);
