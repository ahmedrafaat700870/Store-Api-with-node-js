-- /* Replace with your SQL commands */
CREATE TABLE Product (
    id SERIAL PRIMARY KEY,
    _name varchar(50) NOT NULL UNIQUE,
    descount integer,
    brand varchar(50)NOT NULL,
    price integer NOT NULL, 
    category varchar(50)
);