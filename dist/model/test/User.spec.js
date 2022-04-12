"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var User_model_1 = __importDefault(require("../User.model"));
var Order_model_1 = __importDefault(require("../Order.model"));
var Product_model_1 = __importDefault(require("../Product.model"));
var Product_Order_model_1 = __importDefault(require("../../model/Product_Order.model"));
var index_1 = __importDefault(require("../../database/index"));
var UserModel = new User_model_1.default();
var OrderModel = new Order_model_1.default();
var ProductModel = new Product_model_1.default();
var Product_Order_Model = new Product_Order_model_1.default();
describe('test model User endpoints', function () {
    describe('User Methods exits', function () {
        it('Create  Methods exits', function () {
            expect(UserModel.Create).toBeDefined();
        });
        it('GetOne  Methods exits', function () {
            expect(UserModel.GetOne).toBeDefined();
        });
        it('UpdateOne Methods exits', function () {
            expect(UserModel.UpdateOne).toBeDefined();
        });
        it('GetAll Methods exits', function () {
            expect(UserModel.GetAll).toBeDefined();
        });
        it('DeteteOne Methods exits', function () {
            expect(UserModel.DeleteOne).toBeDefined();
        });
        it('GetOrderByUserId Methods exits', function () {
            expect(UserModel.GetOrderByUserId).toBeDefined();
        });
        it('GetOrderByUserId Methods exits', function () {
            expect(UserModel.GetOrderByUserId).toBeDefined();
        });
    });
    describe('test User Modle Logic', function () {
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
                    case 0: return [4 /*yield*/, index_1.default.connect()];
                    case 1:
                        conn = _a.sent();
                        Del_User = 'DELETE FROM _User';
                        Del_Order = 'DELETE FROM Product';
                        Del_Product = 'DELETE FROM orders';
                        Del_Product_Order = 'DELETE FROM Porduct_Order';
                        return [4 /*yield*/, conn.query(Del_Product_Order)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, conn.query(Del_Order)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, conn.query(Del_Product)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, conn.query(Del_User)];
                    case 5:
                        _a.sent();
                        conn.release();
                        return [2 /*return*/];
                }
            });
        }); });
        it('test Methods Create if user not exist', function () { return __awaiter(void 0, void 0, void 0, function () {
            var CreatedUser, addeduser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        CreatedUser = {
                            _name: 'ahmed38000',
                            _first_name: 'ahmed2',
                            _last_name: 'rafatas',
                            _gmail: 'rafatahmed3800@gmail.com',
                            _password: '123a43',
                        };
                        return [4 /*yield*/, UserModel.Create(CreatedUser)];
                    case 1:
                        addeduser = _a.sent();
                        CreatedUser._id = addeduser._id;
                        expect(addeduser === null || addeduser === void 0 ? void 0 : addeduser._first_name).toBe(CreatedUser._first_name);
                        expect(addeduser === null || addeduser === void 0 ? void 0 : addeduser._last_name).toBe(CreatedUser._last_name);
                        expect(addeduser === null || addeduser === void 0 ? void 0 : addeduser._name).toBe(CreatedUser._name);
                        expect(addeduser === null || addeduser === void 0 ? void 0 : addeduser._gmail).toBe(CreatedUser._gmail);
                        expect(addeduser === null || addeduser === void 0 ? void 0 : addeduser._id).toBe(CreatedUser._id);
                        return [2 /*return*/];
                }
            });
        }); });
        it('Test Methods GetOne if user exist', function () { return __awaiter(void 0, void 0, void 0, function () {
            var GetUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, UserModel.GetOne(user._id)];
                    case 1:
                        GetUser = _a.sent();
                        expect(GetUser._first_name).toBe(user._first_name);
                        expect(GetUser._last_name).toBe(user._last_name);
                        expect(GetUser._name).toBe(user._name);
                        expect(GetUser._gmail).toBe(user._gmail);
                        return [2 /*return*/];
                }
            });
        }); });
        it('Test Methods GetOne if user not exist', function () { return __awaiter(void 0, void 0, void 0, function () {
            var GetUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, UserModel.GetOne(100)];
                    case 1:
                        GetUser = _a.sent();
                        expect(GetUser).toBeUndefined();
                        return [2 /*return*/];
                }
            });
        }); });
        it('Test Methods GetAll', function () { return __awaiter(void 0, void 0, void 0, function () {
            var Users;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, UserModel.GetAll()];
                    case 1:
                        Users = _a.sent();
                        expect(Users.length).toBe(2);
                        return [2 /*return*/];
                }
            });
        }); });
        it('Test Methods GetOrderByUserId', function () { return __awaiter(void 0, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, UserModel.GetOrderByUserId(user._id)];
                    case 1:
                        data = _a.sent();
                        expect(data._name).toBe(user._name);
                        expect(data.quantity).toBe(order.quantity);
                        return [2 /*return*/];
                }
            });
        }); });
        it('Test Method GetProductByUserId', function () { return __awaiter(void 0, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, UserModel.GetProductByUserId(user._id)];
                    case 1:
                        data = _a.sent();
                        expect(data._name).toBe(product._name);
                        expect(data.descount).toBe(product.descount);
                        expect(data.price).toBe(product.price);
                        expect(data.category).toBe(product.category);
                        return [2 /*return*/];
                }
            });
        }); });
        it('Test Methods Update', function () { return __awaiter(void 0, void 0, void 0, function () {
            var updateUser, User;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        updateUser = __assign(__assign({}, user), { _last_name: 'rafatatow', _gmail: 'rafatahmed333800@gmail.com', _password: '123a43sdf' });
                        return [4 /*yield*/, UserModel.UpdateOne(updateUser)];
                    case 1:
                        User = _a.sent();
                        expect(updateUser._name).toBe(User._name);
                        expect(updateUser._first_name).toBe(User._first_name);
                        expect(updateUser._last_name).toBe(User._last_name);
                        expect(updateUser._gmail).toBe(User._gmail);
                        expect(updateUser._id).toBe(User._id);
                        return [2 /*return*/];
                }
            });
        }); });
        it('Test Methods Delete', function () { return __awaiter(void 0, void 0, void 0, function () {
            var User;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, UserModel.DeleteOne(user._id)];
                    case 1:
                        User = _a.sent();
                        expect(User._name).toBe(user._name);
                        expect(User._first_name).toBe(user._first_name);
                        expect(User._last_name).toBe('rafatatow');
                        expect(User._gmail).toBe('rafatahmed333800@gmail.com');
                        expect(User._id).toBe(user._id);
                        return [2 /*return*/];
                }
            });
        }); });
    });
});
