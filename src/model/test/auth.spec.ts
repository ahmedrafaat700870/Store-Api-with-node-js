import User from '../../types/user.type'
import UserStore from '../User.model'
import DB from '../../database'
const usermodel = new UserStore()
describe('Authantocate Model', () => {
  describe('test methods exists', () => {
    it('shoud have Authantocate methods', () => {
      expect(usermodel.authanticate).toBeDefined()
    })
  })
  describe('Authantocate logic', () => {
    const user = {
      _name: 'ahmed3800',
      _first_name: 'ahmed',
      _last_name: 'rafat',
      _gmail: 'rafatahmed380@gmail.com',
      _password: '123a4',
    } as User
    beforeAll(async () => {
      const NewUser = await usermodel.Create(user)
      // eslint-disable-next-line prettier/prettier
      user._id = NewUser._id
    })
    afterAll(async () => {
      const conn = await DB.connect()
      // const reset_id = `ALTER SEQUENCE _id  RESTART WITH 1453;`
      const sql = 'DELETE FROM _User'
      await conn.query(sql)
      // await conn.query(reset_id)
      conn.release()
    })
    it('authantocate methods should retrun authantocate user', async () => {
      const AuthUser = await usermodel.authanticate(user._password, user._gmail)
      expect(AuthUser?._first_name).toBe(user._first_name)
      expect(AuthUser?._last_name).toBe(user._last_name)
      expect(AuthUser?._id).toBe(user._id)
      expect(AuthUser?._gmail).toBe(user._gmail)
      expect(AuthUser?._name).toBe(user._name)
    })
    it('authanticate methods should return null if user not exits', async () => {
      const newuser = await usermodel.authanticate('12345', 'ali')
      expect(newuser).toBe(null)
    })
  })
})
