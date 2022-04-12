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
var Product_model_1 = __importDefault(require("../Product.model"));
var database_1 = __importDefault(require("../../database"));
var ProdcutModel = new Product_model_1.default();
describe('test Product endpoints', function () {
    var product = {
        _name: 'fool',
        descount: null,
        brand: 'eg',
        price: 300,
        category: 'johina',
    };
    beforeAll(function () { return __awaiter(void 0, void 0, void 0, function () {
        var NewProduct;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, ProdcutModel.Create(product)];
                case 1:
                    NewProduct = _a.sent();
                    product.id = NewProduct.id;
                    return [2 /*return*/];
            }
        });
    }); });
    afterAll(function () { return __awaiter(void 0, void 0, void 0, function () {
        var conn, sql;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, database_1.default.connect()];
                case 1:
                    conn = _a.sent();
                    sql = 'DELETE FROM Product';
                    return [4 /*yield*/, conn.query(sql)];
                case 2:
                    _a.sent();
                    conn.release();
                    return [2 /*return*/];
            }
        });
    }); });
    describe('Product Models Methods exits', function () {
        it('Methods Create Exits', function () {
            expect(ProdcutModel.Create).toBeDefined();
        });
        it('Methods GetAll Exits', function () {
            expect(ProdcutModel.GetAll).toBeDefined();
        });
        it('Methods GetOne Exits', function () {
            expect(ProdcutModel.GetOne).toBeDefined();
        });
        it('Methods UpdateOne Exits', function () {
            expect(ProdcutModel.UpdateOne).toBeDefined();
        });
        it('Methods DeleteOne Exits', function () {
            expect(ProdcutModel.DelteOne).toBeDefined();
        });
    });
    describe('Product Models Methods Logic', function () {
        it('Methods Create Loginc should return Product', function () { return __awaiter(void 0, void 0, void 0, function () {
            var NewProduct, Product;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        NewProduct = {
                            _name: 'fool2',
                            descount: null,
                            brand: 'eg',
                            price: 32,
                            category: 'johina',
                        };
                        return [4 /*yield*/, ProdcutModel.Create(NewProduct)];
                    case 1:
                        Product = _a.sent();
                        expect(Product._name).toBe(NewProduct._name);
                        expect(Product.price).toBe(NewProduct.price);
                        expect(Product.descount).toBe(NewProduct.descount);
                        expect(Product.category).toBe(NewProduct.category);
                        expect(Product.brand).toBe(NewProduct.brand);
                        return [2 /*return*/];
                }
            });
        }); });
        it('Methods GetAll Loginc should return List of Products', function () { return __awaiter(void 0, void 0, void 0, function () {
            var Products;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, ProdcutModel.GetAll()];
                    case 1:
                        Products = _a.sent();
                        expect(Products.length).toBe(2);
                        return [2 /*return*/];
                }
            });
        }); });
        it('Methods GetOne Loginc should return  Product', function () { return __awaiter(void 0, void 0, void 0, function () {
            var Product;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, ProdcutModel.GetOne(product.id)];
                    case 1:
                        Product = _a.sent();
                        expect(Product._name).toBe(product._name);
                        expect(Product.price).toBe(product.price);
                        expect(Product.category).toBe(product.category);
                        expect(Product.descount).toBe(product.descount);
                        expect(Product.brand).toBe(product.brand);
                        return [2 /*return*/];
                }
            });
        }); });
        it('Methods UpdateOne Loginc should return New Product', function () { return __awaiter(void 0, void 0, void 0, function () {
            var Product;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, ProdcutModel.UpdateOne(__assign(__assign({}, product), { price: 40, _name: 'pla' }))];
                    case 1:
                        Product = _a.sent();
                        expect(Product._name).toBe('pla');
                        expect(Product.price).toBe(40);
                        expect(Product.category).toBe(product.category);
                        expect(Product.descount).toBe(product.descount);
                        expect(Product.brand).toBe(product.brand);
                        return [2 /*return*/];
                }
            });
        }); });
        it('Methods DeleteOne Loginc should return  Product', function () { return __awaiter(void 0, void 0, void 0, function () {
            var Product;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, ProdcutModel.DelteOne(product.id)];
                    case 1:
                        Product = _a.sent();
                        expect(Product._name).toBe('pla');
                        expect(Product.price).toBe(40);
                        expect(Product.category).toBe(product.category);
                        expect(Product.descount).toBe(product.descount);
                        expect(Product.brand).toBe(product.brand);
                        return [2 /*return*/];
                }
            });
        }); });
    });
});
