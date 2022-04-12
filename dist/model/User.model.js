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
exports.UserStore = void 0;
var database_1 = __importDefault(require("../database"));
var bcrypt_1 = __importDefault(require("bcrypt"));
var config_1 = __importDefault(require("../config"));
var User_query_1 = __importDefault(require("../database/querys/User.query"));
var salt = parseInt(config_1.default.salt_Rounds, 10);
var hashPassword = function (password) {
    return bcrypt_1.default.hashSync(password + config_1.default.bycript_Password, salt);
};
var UserStore = /** @class */ (function () {
    function UserStore() {
    }
    UserStore.prototype.Create = function (u) {
        return __awaiter(this, void 0, void 0, function () {
            var con, values, res, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        con = _a.sent();
                        values = [
                            u._name,
                            u._first_name,
                            u._last_name,
                            u._gmail,
                            hashPassword(u._password),
                        ];
                        return [4 /*yield*/, con.query(User_query_1.default.Create, values)];
                    case 2:
                        res = _a.sent();
                        con.release();
                        return [2 /*return*/, res.rows[0]];
                    case 3:
                        err_1 = _a.sent();
                        throw new Error("".concat(err_1));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    UserStore.prototype.GetAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var conn, RES, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        conn = _a.sent();
                        return [4 /*yield*/, conn.query(User_query_1.default.GetAll)];
                    case 2:
                        RES = _a.sent();
                        conn.release();
                        return [2 /*return*/, RES.rows];
                    case 3:
                        error_1 = _a.sent();
                        throw new Error("".concat(error_1));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    UserStore.prototype.GetOne = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var conn, RES, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        conn = _a.sent();
                        return [4 /*yield*/, conn.query(User_query_1.default.GetOne, [id])];
                    case 2:
                        RES = _a.sent();
                        conn.release();
                        return [2 /*return*/, RES.rows[0]];
                    case 3:
                        error_2 = _a.sent();
                        throw new Error("".concat(error_2));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    UserStore.prototype.UpdateOne = function (u) {
        return __awaiter(this, void 0, void 0, function () {
            var conn, RES, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        conn = _a.sent();
                        return [4 /*yield*/, conn.query(User_query_1.default.UpdateOne, [
                                u._name,
                                u._first_name,
                                u._last_name,
                                u._gmail,
                                u._password,
                                u._id,
                            ])];
                    case 2:
                        RES = _a.sent();
                        conn.release();
                        return [2 /*return*/, RES.rows[0]];
                    case 3:
                        error_3 = _a.sent();
                        throw new Error("".concat(error_3));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    UserStore.prototype.DeleteOne = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var conn, RES, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        conn = _a.sent();
                        return [4 /*yield*/, conn.query(User_query_1.default.DeleteOne, [id])];
                    case 2:
                        RES = _a.sent();
                        conn.release();
                        return [2 /*return*/, RES.rows[0]];
                    case 3:
                        error_4 = _a.sent();
                        throw new Error("".concat(error_4));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    UserStore.prototype.authanticate = function (password, gmail) {
        return __awaiter(this, void 0, void 0, function () {
            var conn, sql_1, RES, _password, isvalidate, sql_2, data, user, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        conn = _a.sent();
                        sql_1 = 'SELECT _password FROM _user WHERE _gmail=$1';
                        return [4 /*yield*/, conn.query(sql_1, [gmail])];
                    case 2:
                        RES = _a.sent();
                        if (!RES.rows.length) return [3 /*break*/, 4];
                        _password = RES.rows[0]._password;
                        isvalidate = bcrypt_1.default.compareSync(password + config_1.default.bycript_Password, _password);
                        if (!isvalidate) return [3 /*break*/, 4];
                        sql_2 = 'SELECT * FROM _user WHERE _gmail = ($1)';
                        return [4 /*yield*/, conn.query(sql_2, [gmail])];
                    case 3:
                        data = _a.sent();
                        user = data.rows[0];
                        return [2 /*return*/, user];
                    case 4:
                        conn.release();
                        return [2 /*return*/, null];
                    case 5:
                        error_5 = _a.sent();
                        throw new Error("".concat(error_5));
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    UserStore.prototype.GetOrderByUserId = function (User_id) {
        return __awaiter(this, void 0, void 0, function () {
            var conn, res, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        conn = _a.sent();
                        return [4 /*yield*/, conn.query(User_query_1.default.Where.TowTables, [User_id])];
                    case 2:
                        res = _a.sent();
                        conn.release();
                        return [2 /*return*/, res.rows[0]];
                    case 3:
                        error_6 = _a.sent();
                        throw new Error("".concat(error_6));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    UserStore.prototype.GetProductByUserId = function (User_id) {
        return __awaiter(this, void 0, void 0, function () {
            var conn, res, error_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        conn = _a.sent();
                        return [4 /*yield*/, conn.query(User_query_1.default.Where.ThreeTables, [User_id])];
                    case 2:
                        res = _a.sent();
                        conn.release();
                        return [2 /*return*/, res.rows[0]];
                    case 3:
                        error_7 = _a.sent();
                        throw new Error("".concat(error_7));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return UserStore;
}());
exports.UserStore = UserStore;
exports.default = UserStore;
