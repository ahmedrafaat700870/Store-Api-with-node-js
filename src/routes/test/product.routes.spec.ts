import ProductStore from '../../model/Product.model'
import Product from '../../types/Product.type'
import DB from '../../database'
import app from '../..'
import supertest from 'supertest'
import User from '../../types/user.type'
import UserStore from '../../model/User.model'
const ProdcutModel = new ProductStore()
const UserModel = new UserStore()
const request = supertest(app)
describe('Test Endpoints Product Routes', () => {
  const product = {
    _name: 'fool',
    descount: null,
    brand: 'eg',
    price: 300,
    category: 'johina',
  } as Product
  const user = {
    _name: 'ahmed3800',
    _first_name: 'ahmed',
    _last_name: 'rafat',
    _gmail: 'rafatahmed380@gmail.com',
    _password: '123a4',
  } as User
  let token: string
  beforeAll(async () => {
    const NewProdcut = await ProdcutModel.Create(product)
    product.id = NewProdcut.id
    const NewUser = await UserModel.Create(user)
    user._id = NewUser._id
  })
  afterAll(async () => {
    const conn = await DB.connect()
    const sqlProduct = 'DELETE FROM Product'
    const sqlUser = 'DELETE FROM _User'
    await conn.query(sqlProduct)
    await conn.query(sqlUser)
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
    it('Cretae Authantiacttion Should return New Product', async () => {
      const NewProdcut = {
        _name: 'foolTow',
        descount: null,
        brand: 'eg',
        price: 50,
        category: 'shohage',
      } as Product
      const res = await request
        .post('/Product/Create')
        .set('Content-type', 'application/json')
        .set('Authorization', `${token}`)
        .send(NewProdcut)
      const { _name, descount, brand, price, category } = res.body.data
      expect(res.status).toBe(200)
      expect(NewProdcut.descount).toBe(descount)
      expect(NewProdcut.brand).toBe(brand)
      expect(NewProdcut.price).toBe(price)
      expect(NewProdcut._name).toBe(_name)
      expect(NewProdcut.category).toBe(category)
    })
    it('Test GetAll Endpoint Should retrun list of Product', async () => {
      const res = await request
        .get('/Product/GetAll')
        .set('Content-type', 'application/json')
        .set('Authorization', `${token}`)
      expect(res.status).toBe(200)
      expect(res.body.data.length).toBe(2)
    })
    it('Test GetOne Endpoint Should retrun Product', async () => {
      const res = await request
        .get(`/Product/GetOne/${product.id}`)
        .set('Content-type', 'application/json')
        .set('Authorization', `${token}`)
      const { id, _name, descount, brand, price, category } = res.body.data
      expect(res.status).toBe(200)
      expect(product.descount).toBe(descount)
      expect(product.brand).toBe(brand)
      expect(product.price).toBe(price)
      expect(product._name).toBe(_name)
      expect(product.category).toBe(category)
      expect(product.id).toBe(id)
    })
    it('Test UpdateOne Endpoint Should retrun Product', async () => {
      const UpdatedUser = {
        ...product,
        _name: 'UpdatedFool',
      } as Product
      const res = await request
        .patch('/Product/UpdateOne')
        .set('Content-type', 'application/json')
        .set('Authorization', `${token}`)
        .send(UpdatedUser)
      const { id, _name, descount, brand, price, category } = res.body.data
      expect(res.status).toBe(200)
      expect(UpdatedUser.descount).toBe(descount)
      expect(UpdatedUser.brand).toBe(brand)
      expect(UpdatedUser.price).toBe(price)
      expect(UpdatedUser.category).toBe(category)
      expect(_name).toBe('UpdatedFool')
      expect(UpdatedUser.id).toBe(id)
    })
    it('Test DeleteOne Endpoint Should retrun Product', async () => {
      const res = await request
        .delete('/Product/Delete')
        .set('Content-type', 'application/json')
        .set('Authorization', `${token}`)
        .send({ id: product.id })
      const { id, _name, descount, brand, price, category } = res.body.data
      expect(res.status).toBe(200)
      expect(product.descount).toBe(descount)
      expect(product.brand).toBe(brand)
      expect(product.price).toBe(price)
      expect(_name).toBe('UpdatedFool')
      expect(product.category).toBe(category)
      expect(product.id).toBe(id)
    })
  })
})
