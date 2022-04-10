/* Replace with your SQL commands */
CREATE TABLE Porduct_Order (
    Oreder integer not null ,
    Product integer not null ,
    PRIMARY KEY (Oreder, Product),
    CONSTRAINT CON_Oreder FOREIGN KEY (Oreder) REFERENCES orders(id) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT CON_Product FOREIGN KEY (Product) REFERENCES Product(id) ON DELETE CASCADE ON UPDATE CASCADE
);
