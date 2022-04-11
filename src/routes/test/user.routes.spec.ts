import supertest from 'supertest'
import app from '../..'
import User from '../../types/user.type'
import DB from '../../database'
import UserStore from '../../model/User.model'
const UserModel = new UserStore()
const request = supertest(app)
let token: string
describe('Test Endpoints User Routes', () => {
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
  describe('test Authantiacted Methods', () => {
    it('should able to Authantiacte to get Token', async () => {
      const res = await request
        .post('/user/authanticated')
        .set('Content-type', 'application/json')
        .send({
          _gmail: 'rafatahmed380@gmail.com',
          _password: '123a4',
        })
      expect(res.status).toBe(200)
      expect(user._gmail).toBe(res.body.User._gmail)
      expect(user._id).toBe(res.body.User._id)
      token = res.body.token
    })
    it('should faild  to Authantiacte ', async () => {
      const res = await request
        .post('/user/authanticated')
        .set('Content-type', 'application/json')
        .send({
          _gmail: 'rafatahmed380@gmailasfd.com',
          _password: '123a4asdf',
        })
      expect(res.status).toBe(401)
    })
  })
  describe('Test CRUD opration api', () => {
    it('Cretae Authantiacttion Should return User', async () => {
      const NewUser = {
        _name: 'ali200',
        _first_name: 'ali',
        _last_name: 'rafat',
        _gmail: 'alirafat@gmail.com',
        _password: '123a4',
      } as User
      const res = await request
        .post('/user/CreateUser')
        .set('Content-type', 'application/json')
        .set('Authorization', `${token}`)
        .send(NewUser)
      const { _name, _first_name, _last_name, _gmail } = res.body
      expect(res.status).toBe(200)
      expect(NewUser._first_name).toBe(_first_name)
      expect(NewUser._last_name).toBe(_last_name)
      expect(NewUser._gmail).toBe(_gmail)
      expect(NewUser._name).toBe(_name)
    })
    it('Test GetAll Endpoint Should retrun list of Users', async () => {
      const res = await request
        .get('/user/GetAll')
        .set('Content-type', 'application/json')
        .set('Authorization', `${token}`)
      expect(res.status).toBe(200)
      expect(res.body.data.length).toBe(2)
    })
    it('Test GetOne Endpoint Should retrun User', async () => {
      const res = await request
        .get('/user/GetOne')
        .set('Content-type', 'application/json')
        .set('Authorization', `${token}`)
        .send({ id: user._id })
      const { _name, _first_name, _last_name, _gmail } = res.body.data
      expect(res.status).toBe(200)
      expect(user._first_name).toBe(_first_name)
      expect(user._last_name).toBe(_last_name)
      expect(user._gmail).toBe(_gmail)
      expect(user._name).toBe(_name)
    })
    it('Test UpdateOne Endpoint Should retrun User', async () => {
      const NewGmail = 'mes@gmail.com' as string
      const res = await request
        .patch('/user/UpdateOne')
        .set('Content-type', 'application/json')
        .set('Authorization', `${token}`)
        .send({
          _id: user._id,
          _name: 'ahmed3800',
          _first_name: 'ahmed',
          _last_name: 'rafat',
          _gmail: NewGmail,
          _password: '123a4',
        })
      const { _name, _first_name, _last_name, _gmail } = res.body.data
      expect(res.status).toBe(200)
      expect(user._first_name).toBe(_first_name)
      expect(user._last_name).toBe(_last_name)
      expect(NewGmail).toBe(_gmail)
      expect(user._name).toBe(_name)
    })
    it('Test DeleteOne Endpoint Should retrun User', async () => {
      const res = await request
        .delete('/user/DeleteOne')
        .set('Content-type', 'application/json')
        .set('Authorization', `${token}`)
        .send({ id: user._id })
      const { _name, _first_name, _last_name } = res.body.data
      expect(res.status).toBe(200)
      expect(user._first_name).toBe(_first_name)
      expect(user._last_name).toBe(_last_name)
      expect(user._name).toBe(_name)
    })
  })
})
