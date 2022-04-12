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
var Product_model_1 = __importDefault(require("../../model/Product.model"));
var database_1 = __importDefault(require("../../database"));
var __1 = __importDefault(require("../.."));
var supertest_1 = __importDefault(require("supertest"));
var User_model_1 = __importDefault(require("../../model/User.model"));
var ProdcutModel = new Product_model_1.default();
var UserModel = new User_model_1.default();
var request = (0, supertest_1.default)(__1.default);
describe('Test Endpoints Product Routes', function () {
    var product = {
        _name: 'fool',
        descount: null,
        brand: 'eg',
        price: 300,
        category: 'johina',
    };
    var user = {
        _name: 'ahmed3800',
        _first_name: 'ahmed',
        _last_name: 'rafat',
        _gmail: 'rafatahmed380@gmail.com',
        _password: '123a4',
    };
    var token;
    beforeAll(function () { return __awaiter(void 0, void 0, void 0, function () {
        var NewProdcut, NewUser;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, ProdcutModel.Create(product)];
                case 1:
                    NewProdcut = _a.sent();
                    product.id = NewProdcut.id;
                    return [4 /*yield*/, UserModel.Create(user)];
                case 2:
                    NewUser = _a.sent();
                    user._id = NewUser._id;
                    return [2 /*return*/];
            }
        });
    }); });
    afterAll(function () { return __awaiter(void 0, void 0, void 0, function () {
        var conn, sqlProduct, sqlUser;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, database_1.default.connect()];
                case 1:
                    conn = _a.sent();
                    sqlProduct = 'DELETE FROM Product';
                    sqlUser = 'DELETE FROM _User';
                    return [4 /*yield*/, conn.query(sqlProduct)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, conn.query(sqlUser)];
                case 3:
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
    });
    describe('Test CRUD opration api', function () {
        it('Cretae Authantiacttion Should return New Product', function () { return __awaiter(void 0, void 0, void 0, function () {
            var NewProdcut, res, _a, _name, descount, brand, price, category;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        NewProdcut = {
                            _name: 'foolTow',
                            descount: null,
                            brand: 'eg',
                            price: 50,
                            category: 'shohage',
                        };
                        return [4 /*yield*/, request
                                .post('/Product/Create')
                                .set('Content-type', 'application/json')
                                .set('Authorization', "".concat(token))
                                .send(NewProdcut)];
                    case 1:
                        res = _b.sent();
                        _a = res.body.data, _name = _a._name, descount = _a.descount, brand = _a.brand, price = _a.price, category = _a.category;
                        expect(res.status).toBe(200);
                        expect(NewProdcut.descount).toBe(descount);
                        expect(NewProdcut.brand).toBe(brand);
                        expect(NewProdcut.price).toBe(price);
                        expect(NewProdcut._name).toBe(_name);
                        expect(NewProdcut.category).toBe(category);
                        return [2 /*return*/];
                }
            });
        }); });
        it('Test GetAll Endpoint Should retrun list of Product', function () { return __awaiter(void 0, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, request
                            .get('/Product/GetAll')
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
        it('Test GetOne Endpoint Should retrun Product', function () { return __awaiter(void 0, void 0, void 0, function () {
            var res, _a, id, _name, descount, brand, price, category;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, request
                            .get('/Product/GetOne')
                            .set('Content-type', 'application/json')
                            .set('Authorization', "".concat(token))
                            .send({ id: product.id })];
                    case 1:
                        res = _b.sent();
                        _a = res.body.data, id = _a.id, _name = _a._name, descount = _a.descount, brand = _a.brand, price = _a.price, category = _a.category;
                        expect(res.status).toBe(200);
                        expect(product.descount).toBe(descount);
                        expect(product.brand).toBe(brand);
                        expect(product.price).toBe(price);
                        expect(product._name).toBe(_name);
                        expect(product.category).toBe(category);
                        expect(product.id).toBe(id);
                        return [2 /*return*/];
                }
            });
        }); });
        it('Test UpdateOne Endpoint Should retrun Product', function () { return __awaiter(void 0, void 0, void 0, function () {
            var UpdatedUser, res, _a, id, _name, descount, brand, price, category;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        UpdatedUser = __assign(__assign({}, product), { _name: 'UpdatedFool' });
                        return [4 /*yield*/, request
                                .patch('/Product/UpdateOne')
                                .set('Content-type', 'application/json')
                                .set('Authorization', "".concat(token))
                                .send(UpdatedUser)];
                    case 1:
                        res = _b.sent();
                        _a = res.body.data, id = _a.id, _name = _a._name, descount = _a.descount, brand = _a.brand, price = _a.price, category = _a.category;
                        expect(res.status).toBe(200);
                        expect(UpdatedUser.descount).toBe(descount);
                        expect(UpdatedUser.brand).toBe(brand);
                        expect(UpdatedUser.price).toBe(price);
                        expect(UpdatedUser.category).toBe(category);
                        expect(_name).toBe('UpdatedFool');
                        expect(UpdatedUser.id).toBe(id);
                        return [2 /*return*/];
                }
            });
        }); });
        it('Test DeleteOne Endpoint Should retrun Product', function () { return __awaiter(void 0, void 0, void 0, function () {
            var res, _a, id, _name, descount, brand, price, category;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, request
                            .delete('/Product/Delete')
                            .set('Content-type', 'application/json')
                            .set('Authorization', "".concat(token))
                            .send({ id: product.id })];
                    case 1:
                        res = _b.sent();
                        _a = res.body.data, id = _a.id, _name = _a._name, descount = _a.descount, brand = _a.brand, price = _a.price, category = _a.category;
                        expect(res.status).toBe(200);
                        expect(product.descount).toBe(descount);
                        expect(product.brand).toBe(brand);
                        expect(product.price).toBe(price);
                        expect(_name).toBe('UpdatedFool');
                        expect(product.category).toBe(category);
                        expect(product.id).toBe(id);
                        return [2 /*return*/];
                }
            });
        }); });
    });
});
