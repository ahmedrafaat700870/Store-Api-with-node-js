"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// id
// _name
// descount
// brand
// price
// category
var sql = {
    Create: 'INSERT INTO Product (_name ,descount,brand,price,category) VALUES ($1,$2,$3,$4,$5) RETURNING * ',
    GetOne: 'SELECT * FROM Product WHERE id = $1 ',
    GetAll: 'SELECT * FROM Product ',
    UpdateOne: 'UPDATE Product SET _name = ($1) ,descount= ($2) , brand= ($3),price= ($4) , category = ($5) WHERE id = ($6) RETURNING *',
    DeleteOne: 'DELETE FROM Product WHERE id = ($1) RETURNING *',
};
exports.default = sql;
