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
var Order_model_1 = __importDefault(require("../Order.model"));
var database_1 = __importDefault(require("../../database"));
var User_model_1 = __importDefault(require("../User.model"));
var OrderModel = new Order_model_1.default();
var UserModel = new User_model_1.default();
describe('test Order Model endpoints', function () {
    describe('Order Methods exits', function () {
        it('Create Methods exits', function () {
            expect(OrderModel.Create).toBeDefined();
        });
        it('GetOne Methods exits', function () {
            expect(OrderModel.GetOne).toBeDefined();
        });
        it('UpdateOne Methods exits', function () {
            expect(OrderModel.UpdateOne).toBeDefined();
        });
        it('GetAll Methods exits', function () {
            expect(OrderModel.GetALLProduct).toBeDefined();
        });
        it('DeteteOne Methods exits', function () {
            expect(OrderModel.DeleteOne).toBeDefined();
        });
    });
    describe('test Order Modle Logic', function () {
        var order = {
            quantity: 2,
            _status: 'Not comblited',
        };
        var user = {
            _name: 'ahmed3800',
            _first_name: 'ahmed',
            _last_name: 'rafat',
            _gmail: 'rafatahmed380@gmail.com',
            _password: '123a4',
        };
        beforeAll(function () { return __awaiter(void 0, void 0, void 0, function () {
            var NewUser, NewOrder;
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
                        return [2 /*return*/];
                }
            });
        }); });
        afterAll(function () { return __awaiter(void 0, void 0, void 0, function () {
            var conn, SqlUser, SqlOdrder;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        conn = _a.sent();
                        SqlUser = 'DELETE FROM _User';
                        SqlOdrder = 'DELETE FROM orders';
                        return [4 /*yield*/, conn.query(SqlOdrder)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, conn.query(SqlUser)];
                    case 3:
                        _a.sent();
                        conn.release();
                        return [2 /*return*/];
                }
            });
        }); });
        it('test Methods Create if Order not exist', function () { return __awaiter(void 0, void 0, void 0, function () {
            var Neworder, NewOrder;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Neworder = {
                            quantity: 4,
                            _status: 'comblited comblited',
                            user_id: user._id,
                        };
                        return [4 /*yield*/, OrderModel.Create(Neworder)];
                    case 1:
                        NewOrder = _a.sent();
                        expect(NewOrder.user_id).toBe(Neworder.user_id);
                        expect(NewOrder._status).toBe(Neworder._status);
                        expect(NewOrder.quantity).toBe(Neworder.quantity);
                        return [2 /*return*/];
                }
            });
        }); });
        it('test Methods GetAll on Order Model', function () { return __awaiter(void 0, void 0, void 0, function () {
            var orders;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, OrderModel.GetALLProduct()];
                    case 1:
                        orders = _a.sent();
                        expect(orders.length).toBe(2);
                        return [2 /*return*/];
                }
            });
        }); });
        it('test Methods GetOne on Order Model', function () { return __awaiter(void 0, void 0, void 0, function () {
            var GetOrder;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, OrderModel.GetOne(order.user_id)];
                    case 1:
                        GetOrder = _a.sent();
                        expect(GetOrder.id).toBe(order.id);
                        expect(GetOrder._status).toBe(order._status);
                        expect(GetOrder.quantity).toBe(order.quantity);
                        expect(GetOrder.user_id).toBe(order.user_id);
                        return [2 /*return*/];
                }
            });
        }); });
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
        it('test Methods DeleteOne on Order Model', function () { return __awaiter(void 0, void 0, void 0, function () {
            var DeletedOrder;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, OrderModel.DeleteOne(order.user_id)];
                    case 1:
                        DeletedOrder = _a.sent();
                        expect(DeletedOrder.id).toBe(order.id);
                        expect(DeletedOrder._status).toBe(order._status);
                        expect(DeletedOrder.quantity).toBe(order.quantity);
                        expect(DeletedOrder.user_id).toBe(order.user_id);
                        return [2 /*return*/];
                }
            });
        }); });
    });
});
