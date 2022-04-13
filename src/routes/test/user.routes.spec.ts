import supertest from 'supertest'
import app from '../..'
import UserStore from '../../model/User.model'
import OrderStore from '../../model/Order.model'
import Prodcut_Order_Store from '../../model/Product_Order.model'
import ProductStore from '../../model/Product.model'
import User from '../../types/user.type'
import Product from '../../types/Product.type'
import Order from '../../types/Order.type'
import Product_Order from '../../types/Prodcut_Order.tyes'
import DB from '../../database'
const UserModel = new UserStore()
const OrderModel = new OrderStore()
const ProductModel = new ProductStore()
const Product_Order_Model = new Prodcut_Order_Store()
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
  const order = {
    quantity: 2,
    _status: 'not comblite',
  } as Order
  const product = {
    _name: 'Foll',
    descount: 20,
    brand: 'itslate',
    price: 50,
    category: 'food',
  } as Product
  const Prodcut_Order = {} as Product_Order
  beforeAll(async () => {
    const NewUser = await UserModel.Create(user)
    user._id = NewUser._id
    order.user_id = user._id as number
    const NewOrder = await OrderModel.Create(order)
    order.id = NewOrder.id
    const NewProduct = await ProductModel.Create(product)
    product.id = NewProduct.id
    Prodcut_Order.Order = order.id
    Prodcut_Order.Product = product.id
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const New_Product_Order = await Product_Order_Model.Create(Prodcut_Order)
  })
  afterAll(async () => {
    const conn = await DB.connect()
    const Del_User = 'DELETE FROM _User'
    const Del_Order = 'DELETE FROM Product'
    const Del_Product = 'DELETE FROM orders'
    const Del_Product_Order = 'DELETE FROM Porduct_Order'
    await conn.query(Del_User)
    await conn.query(Del_Order)
    await conn.query(Del_Product)
    await conn.query(Del_Product_Order)
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
  describe('Test Advance level opration api where', () => {
    it('Test GetOrderByUserId Endpoint Should retrun User', async () => {
      const res = await request
        .get('/user/GetOrderByUserId')
        .set('Content-type', 'application/json')
        .set('Authorization', `${token}`)
        .send({ id: user._id })
      const { _name, _status, quantity } = res.body.data
      expect(res.status).toBe(200)
      expect(user._name).toBe(_name)
      expect(order._status).toBe(_status)
      expect(order.quantity).toBe(quantity)
    })
    it('Test GetProductByUserId Endpoint Should retrun Product', async () => {
      const res = await request
        .get('/user/GetProductByUserId')
        .set('Content-type', 'application/json')
        .set('Authorization', `${token}`)
        .send({ id: user._id })
      const { _name, descount, price, category } = res.body.data
      expect(res.status).toBe(200)
      expect(product._name).toBe(_name)
      expect(product.descount).toBe(descount)
      expect(product.price).toBe(price)
      expect(product.category).toBe(category)
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
        .get(`/user/GetOne/${user._id}`)
        .set('Content-type', 'application/json')
        .set('Authorization', `${token}`)
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
