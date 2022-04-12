import Where from './Where.Query'
interface UserQuery {
  Create: string
  GetOne: string
  GetAll: string
  UpdateOne: string
  DeleteOne: string
  Where: Where
}
export default UserQuery
