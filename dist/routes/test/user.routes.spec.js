"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var supertest_1 = __importDefault(require("supertest"));
var __1 = __importDefault(require("../.."));
var User_model_1 = __importDefault(require("../../model/User.model"));
var Order_model_1 = __importDefault(require("../../model/Order.model"));
var Product_Order_model_1 = __importDefault(require("../../model/Product_Order.model"));
var Product_model_1 = __importDefault(require("../../model/Product.model"));
var database_1 = __importDefault(require("../../database"));
var UserModel = new User_model_1.default();
var OrderModel = new Order_model_1.default();
var ProductModel = new Product_model_1.default();
var Product_Order_Model = new Product_Order_model_1.default();
var request = (0, supertest_1.default)(__1.default);
var token;
describe('Test Endpoints User Routes', function () {
    var user = {
        _name: 'ahmed3800',
        _first_name: 'ahmed',
        _last_name: 'rafat',
        _gmail: 'rafatahmed380@gmail.com',
        _password: '123a4',
    };
    var order = {
        quantity: 2,
        _status: 'not comblite',
    };
    var product = {
        _name: 'Foll',
        descount: 20,
        brand: 'itslate',
        price: 50,
        category: 'food',
    };
    var Prodcut_Order = {};
    beforeAll(function () { return __awaiter(void 0, void 0, void 0, function () {
        var NewUser, NewOrder, NewProduct, New_Product_Order;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, UserModel.Create(user)];
                case 1:
                    NewUser = _a.sent();
                    user._id = NewUser._id;
                    order.user_id = user._id;
                    return [4 /*yield*/, OrderModel.Create(order)];
                case 2:
                    NewOrder = _a.sent();
                    order.id = NewOrder.id;
                    return [4 /*yield*/, ProductModel.Create(product)];
                case 3:
                    NewProduct = _a.sent();
                    product.id = NewProduct.id;
                    Prodcut_Order.Order = order.id;
                    Prodcut_Order.Product = product.id;
                    return [4 /*yield*/, Product_Order_Model.Create(Prodcut_Order)];
                case 4:
                    New_Product_Order = _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    afterAll(function () { return __awaiter(void 0, void 0, void 0, function () {
        var conn, Del_User, Del_Order, Del_Product, Del_Product_Order;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, database_1.default.connect()];
                case 1:
                    conn = _a.sent();
                    Del_User = 'DELETE FROM _User';
                    Del_Order = 'DELETE FROM Product';
                    Del_Product = 'DELETE FROM orders';
                    Del_Product_Order = 'DELETE FROM Porduct_Order';
                    return [4 /*yield*/, conn.query(Del_User)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, conn.query(Del_Order)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, conn.query(Del_Product)];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, conn.query(Del_Product_Order)];
                case 5:
                    _a.sent();
                    conn.release();
                    return [2 /*return*/];
            }
        });
    }); });
    describe('test Authantiacted Methods', function () {
        it('should able to Authantiacte to get Token', function () { return __awaiter(void 0, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, request
                            .post('/user/authanticated')
                            .set('Content-type', 'application/json')
                            .send({
                            _gmail: 'rafatahmed380@gmail.com',
                            _password: '123a4',
                        })];
                    case 1:
                        res = _a.sent();
                        expect(res.status).toBe(200);
                        expect(user._gmail).toBe(res.body.User._gmail);
                        expect(user._id).toBe(res.body.User._id);
                        token = res.body.token;
                        return [2 /*return*/];
                }
            });
        }); });
        it('should faild  to Authantiacte ', function () { return __awaiter(void 0, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, request
                            .post('/user/authanticated')
                            .set('Content-type', 'application/json')
                            .send({
                            _gmail: 'rafatahmed380@gmailasfd.com',
                            _password: '123a4asdf',
                        })];
                    case 1:
                        res = _a.sent();
                        expect(res.status).toBe(401);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('Test Advance level opration api where', function () {
        it('Test GetOrderByUserId Endpoint Should retrun User', function () { return __awaiter(void 0, void 0, void 0, function () {
            var res, _a, _name, _status, quantity;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, request
                            .get('/user/GetOrderByUserId')
                            .set('Content-type', 'application/json')
                            .set('Authorization', "".concat(token))
                            .send({ id: user._id })];
                    case 1:
                        res = _b.sent();
                        _a = res.body.data, _name = _a._name, _status = _a._status, quantity = _a.quantity;
                        expect(res.status).toBe(200);
                        expect(user._name).toBe(_name);
                        expect(order._status).toBe(_status);
                        expect(order.quantity).toBe(quantity);
                        return [2 /*return*/];
                }
            });
        }); });
        it('Test GetProductByUserId Endpoint Should retrun Product', function () { return __awaiter(void 0, void 0, void 0, function () {
            var res, _a, _name, descount, price, category;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, request
                            .get('/user/GetProductByUserId')
                            .set('Content-type', 'application/json')
                            .set('Authorization', "".concat(token))
                            .send({ id: user._id })];
                    case 1:
                        res = _b.sent();
                        _a = res.body.data, _name = _a._name, descount = _a.descount, price = _a.price, category = _a.category;
                        expect(res.status).toBe(200);
                        expect(product._name).toBe(_name);
                        expect(product.descount).toBe(descount);
                        expect(product.price).toBe(price);
                        expect(product.category).toBe(category);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('Test CRUD opration api', function () {
        it('Cretae Authantiacttion Should return User', function () { return __awaiter(void 0, void 0, void 0, function () {
            var NewUser, res, _a, _name, _first_name, _last_name, _gmail;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        NewUser = {
                            _name: 'ali200',
                            _first_name: 'ali',
                            _last_name: 'rafat',
                            _gmail: 'alirafat@gmail.com',
                            _password: '123a4',
                        };
                        return [4 /*yield*/, request
                                .post('/user/CreateUser')
                                .set('Content-type', 'application/json')
                                .set('Authorization', "".concat(token))
                                .send(NewUser)];
                    case 1:
                        res = _b.sent();
                        _a = res.body, _name = _a._name, _first_name = _a._first_name, _last_name = _a._last_name, _gmail = _a._gmail;
                        expect(res.status).toBe(200);
                        expect(NewUser._first_name).toBe(_first_name);
                        expect(NewUser._last_name).toBe(_last_name);
                        expect(NewUser._gmail).toBe(_gmail);
                        expect(NewUser._name).toBe(_name);
                        return [2 /*return*/];
                }
            });
        }); });
        it('Test GetAll Endpoint Should retrun list of Users', function () { return __awaiter(void 0, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, request
                            .get('/user/GetAll')
                            .set('Content-type', 'application/json')
                            .set('Authorization', "".concat(token))];
                    case 1:
                        res = _a.sent();
                        expect(res.status).toBe(200);
                        expect(res.body.data.length).toBe(2);
                        return [2 /*return*/];
                }
            });
        }); });
        it('Test GetOne Endpoint Should retrun User', function () { return __awaiter(void 0, void 0, void 0, function () {
            var res, _a, _name, _first_name, _last_name, _gmail;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, request
                            .get('/user/GetOne')
                            .set('Content-type', 'application/json')
                            .set('Authorization', "".concat(token))
                            .send({ id: user._id })];
                    case 1:
                        res = _b.sent();
                        _a = res.body.data, _name = _a._name, _first_name = _a._first_name, _last_name = _a._last_name, _gmail = _a._gmail;
                        expect(res.status).toBe(200);
                        expect(user._first_name).toBe(_first_name);
                        expect(user._last_name).toBe(_last_name);
                        expect(user._gmail).toBe(_gmail);
                        expect(user._name).toBe(_name);
                        return [2 /*return*/];
                }
            });
        }); });
        it('Test UpdateOne Endpoint Should retrun User', function () { return __awaiter(void 0, void 0, void 0, function () {
            var NewGmail, res, _a, _name, _first_name, _last_name, _gmail;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        NewGmail = 'mes@gmail.com';
                        return [4 /*yield*/, request
                                .patch('/user/UpdateOne')
                                .set('Content-type', 'application/json')
                                .set('Authorization', "".concat(token))
                                .send({
                                _id: user._id,
                                _name: 'ahmed3800',
                                _first_name: 'ahmed',
                                _last_name: 'rafat',
                                _gmail: NewGmail,
                                _password: '123a4',
                            })];
                    case 1:
                        res = _b.sent();
                        _a = res.body.data, _name = _a._name, _first_name = _a._first_name, _last_name = _a._last_name, _gmail = _a._gmail;
                        expect(res.status).toBe(200);
                        expect(user._first_name).toBe(_first_name);
                        expect(user._last_name).toBe(_last_name);
                        expect(NewGmail).toBe(_gmail);
                        expect(user._name).toBe(_name);
                        return [2 /*return*/];
                }
            });
        }); });
        it('Test DeleteOne Endpoint Should retrun User', function () { return __awaiter(void 0, void 0, void 0, function () {
            var res, _a, _name, _first_name, _last_name;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, request
                            .delete('/user/DeleteOne')
                            .set('Content-type', 'application/json')
                            .set('Authorization', "".concat(token))
                            .send({ id: user._id })];
                    case 1:
                        res = _b.sent();
                        _a = res.body.data, _name = _a._name, _first_name = _a._first_name, _last_name = _a._last_name;
                        expect(res.status).toBe(200);
                        expect(user._first_name).toBe(_first_name);
                        expect(user._last_name).toBe(_last_name);
                        expect(user._name).toBe(_name);
                        return [2 /*return*/];
                }
            });
        }); });
    });
});
