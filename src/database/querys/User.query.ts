import UserQuery from '../../interface/User.query.interface'
const sql: UserQuery = {
  Create:
    'INSERT INTO _User (_name ,_first_name,_last_name,_gmail,_password) VALUES ($1,$2,$3,$4,$5) RETURNING * ',
  GetOne:
    'SELECT  _name,_first_name, _last_name,_gmail, _password FROM _User WHERE _id = $1 ',
  GetAll: 'SELECT _name,_first_name, _last_name,_gmail, _password FROM _user ',
  UpdateOne:
    'UPDATE _User SET _name = ($1) ,_first_name= ($2) , _last_name= ($3),_gmail= ($4) , _password = ($5) WHERE _id = ($6) RETURNING *',
  DeleteOne: 'DELETE FROM _User WHERE _id = ($1) RETURNING *',
  Where: {
    TowTables:
      'SELECT u._name ,o.quantity , o._status FROM _User u INNER JOIN orders o ON u._id = o.User_id  WHERE u._id = ($1)',
    ThreeTables:
      'SELECT pro._name , pro.descount , pro.price , pro.category FROM _User u  JOIN orders o ON u._id = o.User_id join Porduct_Order p_o on  o.id = p_o.Oreder join product pro on p_o.Product = pro.id Where u._id = ($1)',
  },
}
export default sql
