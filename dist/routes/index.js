"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_routes_1 = __importDefault(require("./api/user.routes"));
var Product_routes_1 = __importDefault(require("./api/Product.routes"));
var Order_routes_1 = __importDefault(require("./api/Order.routes"));
var Product_Order_routes_1 = __importDefault(require("./api/Product_Order.routes"));
var authanticate_middleware_1 = __importDefault(require("../middleware/authanticate.middleware"));
var route = (0, express_1.Router)();
route
    .use('/user', user_routes_1.default)
    .use('/Product', authanticate_middleware_1.default, Product_routes_1.default)
    .use('/Order', authanticate_middleware_1.default, Order_routes_1.default)
    .use('/Prodcut_Order', authanticate_middleware_1.default, Product_Order_routes_1.default);
exports.default = route;
