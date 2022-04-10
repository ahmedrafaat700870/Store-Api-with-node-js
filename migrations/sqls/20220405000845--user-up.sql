-- /* Replace with your SQL commands */
CREATE TABLE _User (
    _id SERIAL primary key ,
    _name varchar(50) not null,
    _first_name varchar(50) not null,
    _last_name varchar(50) not null,
    _gmail varchar(50) unique,
    _password varchar(255) not null
);