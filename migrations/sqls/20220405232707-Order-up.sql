-- /* Replace with your SQL commands */
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id integer not null,
    FOREIGN KEY(user_id) REFERENCES _User(_id) ON DELETE CASCADE ON UPDATE CASCADE,
    _status varchar(50), 
    quantity integer not null
);