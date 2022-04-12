"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var config_1 = __importDefault(require("../config"));
var hendleAuthorizedError = function (next) {
    var err = new Error('Login Error please train again !');
    err.status = 401;
    next(err);
};
var authanticateUser = function (req, res, Next) {
    try {
        var AuthHeader = req.get('Authorization');
        var autherduser = jsonwebtoken_1.default.verify(AuthHeader, config_1.default.Tocken_Secret);
        if (autherduser) {
            Next();
        }
        else {
            hendleAuthorizedError(Next);
        }
    }
    catch (error) {
        hendleAuthorizedError(Next);
    }
};
exports.default = authanticateUser;
