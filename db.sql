# create a database named todoApp
CREATE DATABASE todoApp;

# select the db
USE todoApp;

# create a table name todos
CREATE TABLE todos (
	id INT auto_increment primary key,
    title VARCHAR(255),
    timestamp date,
    isCompleted bool
);

ALTER TABLE todos modify column timestamp TIMESTAMP(2);

Select * from todos;

INSERT INTO todos (title, timestamp, isCompleted) 
VALUES ("Playing games", "2024-08-26 13:02:01", false);
