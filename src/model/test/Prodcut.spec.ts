import ProductStore from '../Product.model'
import DB from '../../database'
import Product from '../../types/Product.type'
const ProdcutModel = new ProductStore()
describe('test Product endpoints', () => {
  const product = {
    _name: 'fool',
    descount: null,
    brand: 'eg',
    price: 300,
    category: 'johina',
  } as Product
  beforeAll(async () => {
    const NewProduct = await ProdcutModel.Create(product)
    product.id = NewProduct.id
  })
  afterAll(async () => {
    const conn = await DB.connect()
    const sql = 'DELETE FROM Product'
    await conn.query(sql)
    conn.release()
  })
  describe('Product Models Methods exits', () => {
    it('Methods Create Exits', () => {
      expect(ProdcutModel.Create).toBeDefined()
    })
    it('Methods GetAll Exits', () => {
      expect(ProdcutModel.GetAll).toBeDefined()
    })
    it('Methods GetOne Exits', () => {
      expect(ProdcutModel.GetOne).toBeDefined()
    })
    it('Methods UpdateOne Exits', () => {
      expect(ProdcutModel.UpdateOne).toBeDefined()
    })
    it('Methods DeleteOne Exits', () => {
      expect(ProdcutModel.DelteOne).toBeDefined()
    })
  })
  describe('Product Models Methods Logic', () => {
    it('Methods Create Loginc should return Product', async () => {
      const NewProduct = {
        _name: 'fool2',
        descount: null,
        brand: 'eg',
        price: 32,
        category: 'johina',
      } as Product
      const Product = await ProdcutModel.Create(NewProduct)
      expect(Product._name).toBe(NewProduct._name)
      expect(Product.price).toBe(NewProduct.price)
      expect(Product.descount).toBe(NewProduct.descount)
      expect(Product.category).toBe(NewProduct.category)
      expect(Product.brand).toBe(NewProduct.brand)
    })
    it('Methods GetAll Loginc should return List of Products', async () => {
      const Products = await ProdcutModel.GetAll()
      expect(Products.length).toBe(2)
    })
    it('Methods GetOne Loginc should return  Product', async () => {
      const Product = await ProdcutModel.GetOne(product.id)
      expect(Product._name).toBe(product._name)
      expect(Product.price).toBe(product.price)
      expect(Product.category).toBe(product.category)
      expect(Product.descount).toBe(product.descount)
      expect(Product.brand).toBe(product.brand)
    })
    it('Methods UpdateOne Loginc should return New Product', async () => {
      const Product = await ProdcutModel.UpdateOne({
        ...product,
        price: 40,
        _name: 'pla',
      })
      expect(Product._name).toBe('pla')
      expect(Product.price).toBe(40)
      expect(Product.category).toBe(product.category)
      expect(Product.descount).toBe(product.descount)
      expect(Product.brand).toBe(product.brand)
    })
    it('Methods DeleteOne Loginc should return  Product', async () => {
      const Product = await ProdcutModel.DelteOne(product.id)
      expect(Product._name).toBe('pla')
      expect(Product.price).toBe(40)
      expect(Product.category).toBe(product.category)
      expect(Product.descount).toBe(product.descount)
      expect(Product.brand).toBe(product.brand)
    })
  })
})
