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
exports.GetProductByUserId = exports.GetOrderByUserID = exports.authanticate = exports.DeleteOne = exports.UpdateOne = exports.GetAll = exports.GetOne = exports.CreateUser = void 0;
var User_model_1 = require("../model/User.model");
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var config_1 = __importDefault(require("../config"));
var UserModel = new User_model_1.UserStore();
var CreateUser = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var Create, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, UserModel.Create(req.body)];
            case 1:
                Create = _a.sent();
                res.status(200).json(Create);
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                next(err_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.CreateUser = CreateUser;
var GetOne = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var User, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, UserModel.GetOne(req.body.id)];
            case 1:
                User = _a.sent();
                res.status(200).json({
                    status: 'Success',
                    data: User,
                    message: 'Get User',
                });
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                next(error_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.GetOne = GetOne;
var GetAll = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var Users, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, UserModel.GetAll()];
            case 1:
                Users = _a.sent();
                res.status(200).json({
                    status: 'Success',
                    data: Users,
                    message: 'Get All Users',
                });
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                next(error_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.GetAll = GetAll;
var UpdateOne = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var User, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, UserModel.UpdateOne(req.body)];
            case 1:
                User = _a.sent();
                res.status(200).json({
                    status: 'Success',
                    data: User,
                    message: 'Updated User',
                });
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                next(error_3);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.UpdateOne = UpdateOne;
var DeleteOne = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var User, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, UserModel.DeleteOne(req.body.id)];
            case 1:
                User = _a.sent();
                res.status(200).json({
                    status: 'Success',
                    data: User,
                    message: 'Delete User',
                });
                return [3 /*break*/, 3];
            case 2:
                error_4 = _a.sent();
                next(error_4);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.DeleteOne = DeleteOne;
var authanticate = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var user, token, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, UserModel.authanticate(req.body._password, req.body._gmail)];
            case 1:
                user = _a.sent();
                token = jsonwebtoken_1.default.sign({ user: user }, config_1.default.Tocken_Secret);
                if (!user) {
                    return [2 /*return*/, res.status(401).json('faild to login')];
                }
                return [2 /*return*/, res.status(200).json({ User: user, token: token })];
            case 2:
                error_5 = _a.sent();
                next(error_5);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.authanticate = authanticate;
var GetOrderByUserID = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var data, error_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, UserModel.GetOrderByUserId(req.body.id)];
            case 1:
                data = _a.sent();
                res.status(200).json({
                    data: data,
                });
                return [3 /*break*/, 3];
            case 2:
                error_6 = _a.sent();
                next(error_6);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.GetOrderByUserID = GetOrderByUserID;
var GetProductByUserId = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var data, error_7;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, UserModel.GetProductByUserId(req.body.id)];
            case 1:
                data = _a.sent();
                res.status(200).json({
                    data: data,
                });
                return [3 /*break*/, 3];
            case 2:
                error_7 = _a.sent();
                next(error_7);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.GetProductByUserId = GetProductByUserId;
