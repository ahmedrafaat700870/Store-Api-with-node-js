import supertest from 'supertest'
import app from '../..'
import DB from '../../database'
import User from '../../types/user.type'
import UserStore from '../../model/User.model'
import Order from '../../types/Order.type'
import OrderStore from '../../model/Order.model'
const OrderModel = new OrderStore()
const UserModel = new UserStore()
const request = supertest(app)
let token: string
describe('Test Endpoints Order Routes', () => {
  const order = {
    quantity: 2,
    _status: 'Not comblited',
  } as Order
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
    order.user_id = user._id as number
    const NewOrder = await OrderModel.Create(order)
    order.id = NewOrder.id
  })
  afterAll(async () => {
    const conn = await DB.connect()
    const SqlUser = 'DELETE FROM _User'
    const SqlOdrder = 'DELETE FROM orders'
    await conn.query(SqlOdrder)
    await conn.query(SqlUser)
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
  })
  describe('Test CRUD opration api', () => {
    it('Cretae Authantiaction Should return Order', async () => {
      const Neworder = {
        quantity: 4,
        _status: 'comblited',
        user_id: user._id,
      } as Order
      const res = await request
        .post('/Order/create')
        .set('Content-type', 'application/json')
        .set('Authorization', `${token}`)
        .send(Neworder)
      const { quantity, _status, user_id } = res.body.data
      expect(res.status).toBe(200)
      expect(Neworder.quantity).toBe(quantity)
      expect(Neworder._status).toBe(_status)
      expect(Neworder.user_id).toBe(user_id)
    })
    it('Test GetAll Endpoint Should retrun list of Products', async () => {
      const res = await request
        .get('/Order/GetAll')
        .set('Content-type', 'application/json')
        .set('Authorization', `${token}`)
      expect(res.body.data.length).toBe(2)
    })
    it('Test GetOne Endpoint Should retrun Product', async () => {
      const res = await request
        .get(`/Order/GetOne/${user._id}`)
        .set('Content-type', 'application/json')
        .set('Authorization', `${token}`)
      const { quantity, _status, user_id, id } = res.body.data
      expect(order.id).toBe(id)
      expect(order.quantity).toBe(quantity)
      expect(order._status).toBe(_status)
      expect(order.user_id).toBe(user_id)
    })
    it('Test UpdateOne Endpoint Should retrun Product', async () => {
      const UpdatedOrder = {
        quantity: 6,
        _status: 'Not Comblited',
        user_id: user._id,
      } as Order
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _res = await request
        .patch('/Order/updateOne')
        .set('Content-type', 'application/json')
        .set('Authorization', `${token}`)
        .send(UpdatedOrder)
    })
    it('Test DeleteOne Endpoint Should retrun Product', async () => {
      const res = await request
        .delete('/Order/deleteOne')
        .set('Content-type', 'application/json')
        .set('Authorization', `${token}`)
        .send({ User_id: order.user_id })
      const { quantity, _status, user_id, id } = res.body.data
      expect(order.id).toBe(id)
      expect(order.quantity).toBe(quantity)
      expect(order._status).toBe(_status)
      expect(order.user_id).toBe(user_id)
    })
  })
})
