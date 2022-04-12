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
var User_model_1 = __importDefault(require("../User.model"));
var database_1 = __importDefault(require("../../database"));
var usermodel = new User_model_1.default();
describe('Authantocate Model', function () {
    describe('test methods exists', function () {
        it('shoud have Authantocate methods', function () {
            expect(usermodel.authanticate).toBeDefined();
        });
    });
    describe('Authantocate logic', function () {
        var user = {
            _name: 'ahmed3800',
            _first_name: 'ahmed',
            _last_name: 'rafat',
            _gmail: 'rafatahmed380@gmail.com',
            _password: '123a4',
        };
        beforeAll(function () { return __awaiter(void 0, void 0, void 0, function () {
            var NewUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, usermodel.Create(user)
                        // eslint-disable-next-line prettier/prettier
                    ];
                    case 1:
                        NewUser = _a.sent();
                        // eslint-disable-next-line prettier/prettier
                        user._id = NewUser._id;
                        return [2 /*return*/];
                }
            });
        }); });
        afterAll(function () { return __awaiter(void 0, void 0, void 0, function () {
            var conn, sql;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, database_1.default.connect()
                        // const reset_id = `ALTER SEQUENCE _id  RESTART WITH 1453;`
                    ];
                    case 1:
                        conn = _a.sent();
                        sql = 'DELETE FROM _User';
                        return [4 /*yield*/, conn.query(sql)
                            // await conn.query(reset_id)
                        ];
                    case 2:
                        _a.sent();
                        // await conn.query(reset_id)
                        conn.release();
                        return [2 /*return*/];
                }
            });
        }); });
        it('authantocate methods should retrun authantocate user', function () { return __awaiter(void 0, void 0, void 0, function () {
            var AuthUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, usermodel.authanticate(user._password, user._gmail)];
                    case 1:
                        AuthUser = _a.sent();
                        expect(AuthUser === null || AuthUser === void 0 ? void 0 : AuthUser._first_name).toBe(user._first_name);
                        expect(AuthUser === null || AuthUser === void 0 ? void 0 : AuthUser._last_name).toBe(user._last_name);
                        expect(AuthUser === null || AuthUser === void 0 ? void 0 : AuthUser._id).toBe(user._id);
                        expect(AuthUser === null || AuthUser === void 0 ? void 0 : AuthUser._gmail).toBe(user._gmail);
                        expect(AuthUser === null || AuthUser === void 0 ? void 0 : AuthUser._name).toBe(user._name);
                        return [2 /*return*/];
                }
            });
        }); });
        it('authanticate methods should return null if user not exits', function () { return __awaiter(void 0, void 0, void 0, function () {
            var newuser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, usermodel.authanticate('12345', 'ali')];
                    case 1:
                        newuser = _a.sent();
                        expect(newuser).toBe(null);
                        return [2 /*return*/];
                }
            });
        }); });
    });
});
