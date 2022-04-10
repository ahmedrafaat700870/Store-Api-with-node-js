import OrderStore from '../Order.model'
import Order from '../../types/Order.type'
import DB from '../../database'
import User from '../../types/user.type'
import UserStore from '../User.model'
const OrderModel = new OrderStore()
const UserModel = new UserStore()
describe('test Order Model endpoints', () => {
  describe('Order Methods exits', () => {
    it('Create Methods exits', () => {
      expect(OrderModel.Create).toBeDefined()
    })
    it('GetOne Methods exits', () => {
      expect(OrderModel.GetOne).toBeDefined()
    })
    it('UpdateOne Methods exits', () => {
      expect(OrderModel.UpdateOne).toBeDefined()
    })
    it('GetAll Methods exits', () => {
      expect(OrderModel.GetALLProduct).toBeDefined()
    })
    it('DeteteOne Methods exits', () => {
      expect(OrderModel.DeleteOne).toBeDefined()
    })
  })
  describe('test Order Modle Logic', () => {
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
      order.user_id = user._id
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
    it('test Methods Create if Order not exist', async () => {
      const Neworder = {
        quantity: 4,
        _status: 'comblited comblited',
        user_id: user._id,
      } as Order
      const NewOrder = await OrderModel.Create(Neworder)
      expect(NewOrder.user_id).toBe(Neworder.user_id)
      expect(NewOrder._status).toBe(Neworder._status)
      expect(NewOrder.quantity).toBe(Neworder.quantity)
    })
    it('test Methods GetAll on Order Model', async () => {
      const orders = await OrderModel.GetALLProduct()
      expect(orders.length).toBe(2)
    })
    it('test Methods GetOne on Order Model', async () => {
      const GetOrder = await OrderModel.GetOne(order.user_id)
      expect(GetOrder.id).toBe(order.id)
      expect(GetOrder._status).toBe(order._status)
      expect(GetOrder.quantity).toBe(order.quantity)
      expect(GetOrder.user_id).toBe(order.user_id)
    })
    // it(`test Methods UpdateOne on Order Model`, async () => {
    //   console.log(order);
    //   const NewOrder = {
    //     quantity: 10,
    //     _status: `Not comblited`,
    //     id: order.id,
    //   } as Order;
    //   const UpdatedOrder = await OrderModel.UpdateOne(NewOrder);
    //   console.log(UpdatedOrder);

    //   // expect(UpdatedOrder.id).toBe(order.id);
    //   // expect(UpdatedOrder._status).toBe("Not comblited");
    //   // expect(UpdatedOrder.quantity).toBe(order.quantity);
    //   // expect(UpdatedOrder.user_id).toBe(order.user_id);
    // });
    it('test Methods DeleteOne on Order Model', async () => {
      const DeletedOrder = await OrderModel.DeleteOne(order.user_id)
      expect(DeletedOrder.id).toBe(order.id)
      expect(DeletedOrder._status).toBe(order._status)
      expect(DeletedOrder.quantity).toBe(order.quantity)
      expect(DeletedOrder.user_id).toBe(order.user_id)
    })
  })
})
