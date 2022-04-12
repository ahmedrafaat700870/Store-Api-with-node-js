import UserStore from '../User.model'
import OrderStore from '../Order.model'
import ProductStore from '../Product.model'
import Prodcut_Order_Store from '../../model/Product_Order.model'
import User from '../../types/user.type'
import Product from '../../types/Product.type'
import Order from '../../types/Order.type'
import Product_Order from '../../types/Prodcut_Order.tyes'
import DB from '../../database/index'
const UserModel = new UserStore()
const OrderModel = new OrderStore()
const ProductModel = new ProductStore()
const Product_Order_Model = new Prodcut_Order_Store()
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
    it('DeteteOne Methods exits', () => {
      expect(UserModel.DeleteOne).toBeDefined()
    })
    it('GetOrderByUserId Methods exits', () => {
      expect(UserModel.GetOrderByUserId).toBeDefined()
    })
    it('GetOrderByUserId Methods exits', () => {
      expect(UserModel.GetOrderByUserId).toBeDefined()
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
      order.user_id = user._id
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
      await conn.query(Del_Product_Order)
      await conn.query(Del_Order)
      await conn.query(Del_Product)
      await conn.query(Del_User)
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
      const GetUser = await UserModel.GetOne(user._id)
      expect(GetUser._first_name).toBe(user._first_name)
      expect(GetUser._last_name).toBe(user._last_name)
      expect(GetUser._name).toBe(user._name)
      expect(GetUser._gmail).toBe(user._gmail)
    })
    it('Test Methods GetOne if user not exist', async () => {
      const GetUser = await UserModel.GetOne(100)
      expect(GetUser).toBeUndefined()
    })
    it('Test Methods GetAll', async () => {
      const Users = await UserModel.GetAll()
      expect(Users.length).toBe(2)
    })
    it('Test Methods GetOrderByUserId', async () => {
      const data = await UserModel.GetOrderByUserId(user._id)
      expect(data._name).toBe(user._name)
      expect(data.quantity).toBe(order.quantity)
    })
    it('Test Method GetProductByUserId', async () => {
      const data = await UserModel.GetProductByUserId(user._id)
      expect(data._name).toBe(product._name)
      expect(data.descount).toBe(product.descount)
      expect(data.price).toBe(product.price)
      expect(data.category).toBe(product.category)
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
