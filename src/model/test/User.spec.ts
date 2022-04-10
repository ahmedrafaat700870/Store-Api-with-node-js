import UserStore from '../User.model'
import User from '../../types/user.type'
import DB from '../../database/index'
const UserModel = new UserStore()
describe('test model User endpoints', () => {
  describe('User Methods exits', () => {
    it('Create  Methods exits', () => {
      expect(UserModel.Create).toBeDefined()
    })
    it('GetOne  Methods exits', () => {
      expect(UserModel.GetOne).toBeDefined()
    })
    it('UpdateOne Methods exits', () => {
      expect(UserModel.UpdateOne).toBeDefined()
    })
    it('GetAll Methods exits', () => {
      expect(UserModel.GetAll).toBeDefined()
    })
    it('DeteteOne  Methods exits', () => {
      expect(UserModel.DeleteOne).toBeDefined()
    })
  })
  describe('test User Modle Logic', () => {
    const user = {
      _name: 'ahmed3800',
      _first_name: 'ahmed',
      _last_name: 'rafat',
      _gmail: 'rafatahmed380@gmail.com',
      _password: '123a4',
    } as User
    beforeAll(async () => {
      const NewUser = await UserModel.Create(user)
      user._id = NewUser._id
    })
    afterAll(async () => {
      const conn = await DB.connect()
      const sql = 'DELETE FROM _User'
      await conn.query(sql)
      conn.release()
    })
    it('test Methods Create if user not exist', async () => {
      const CreatedUser = {
        _name: 'ahmed38000',
        _first_name: 'ahmed2',
        _last_name: 'rafatas',
        _gmail: 'rafatahmed3800@gmail.com',
        _password: '123a43',
      } as User
      const addeduser = await UserModel.Create(CreatedUser)
      CreatedUser._id = addeduser._id
      expect(addeduser?._first_name).toBe(CreatedUser._first_name)
      expect(addeduser?._last_name).toBe(CreatedUser._last_name)
      expect(addeduser?._name).toBe(CreatedUser._name)
      expect(addeduser?._gmail).toBe(CreatedUser._gmail)
      expect(addeduser?._id).toBe(CreatedUser._id)
    })
    it('Test Methods GetOne if user exist', async () => {
      const GetUser = await UserModel.GetOne(user._id as unknown as string)
      expect(GetUser._id).toBe(user._id)
      expect(GetUser._first_name).toBe(user._first_name)
      expect(GetUser._last_name).toBe(user._last_name)
      expect(GetUser._name).toBe(user._name)
      expect(GetUser._gmail).toBe(user._gmail)
    })
    it('Test Methods GetOne if user not exist', async () => {
      const GetUser = await UserModel.GetOne('50')
      expect(GetUser).toBeUndefined()
    })
    it('Test Methods GetAll', async () => {
      const Users = await UserModel.GetAll()
      expect(Users.length).toBe(2)
    })
    it('Test Methods Update', async () => {
      const updateUser: User = {
        ...user,
        _last_name: 'rafatatow',
        _gmail: 'rafatahmed333800@gmail.com',
        _password: '123a43sdf',
      }
      const User = await UserModel.UpdateOne(updateUser)
      expect(updateUser._name).toBe(User._name)
      expect(updateUser._first_name).toBe(User._first_name)
      expect(updateUser._last_name).toBe(User._last_name)
      expect(updateUser._gmail).toBe(User._gmail)
      expect(updateUser._id).toBe(User._id)
    })
    it('Test Methods Delete', async () => {
      const User = await UserModel.DeleteOne(user._id)
      expect(User._name).toBe(user._name)
      expect(User._first_name).toBe(user._first_name)
      expect(User._last_name).toBe('rafatatow')
      expect(User._gmail).toBe('rafatahmed333800@gmail.com')
      expect(User._id).toBe(user._id)
    })
  })
})
