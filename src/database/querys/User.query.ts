import UserQuery from '../../interface/User.query.interface'
const sql: UserQuery = {
  Create:
    'INSERT INTO _User (_name ,_first_name,_last_name,_gmail,_password) VALUES ($1,$2,$3,$4,$5) RETURNING * ',
  GetOne: 'SELECT * FROM _user WHERE _id = $1 ',
  GetAll: 'SELECT * FROM _user ',
  UpdateOne:
    'UPDATE _User SET _name = ($1) ,_first_name= ($2) , _last_name= ($3),_gmail= ($4) , _password = ($5) WHERE _id = ($6) RETURNING *',
  DeleteOne: 'DELETE FROM _User WHERE _id = ($1) RETURNING *',
}
export default sql
