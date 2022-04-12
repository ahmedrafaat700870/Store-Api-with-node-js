"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// id,
// user_id
// _status
// quantity
var sql = {
    Create: 'INSERT INTO orders (user_id ,_status,quantity) VALUES ($1,$2,$3) RETURNING * ',
    GetOne: 'SELECT * FROM orders WHERE User_id = $1',
    GetAll: 'SELECT * FROM orders ',
    UpdateOne: 'UPDATE orders SET _status= ($1) , quantity = ($2)  WHERE id = ($3) RETURNING *',
    DeleteOne: 'DELETE FROM orders WHERE User_id = ($1) RETURNING *',
};
exports.default = sql;
