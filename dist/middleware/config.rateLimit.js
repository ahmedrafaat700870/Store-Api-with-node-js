"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_rate_limit_1 = require("express-rate-limit");
var RateLimit = (0, express_rate_limit_1.rateLimit)({
    windowMs: 15 * 60 * 1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
    message: 'oh you can not viste this site now',
    statusCode: 404,
});
exports.default = RateLimit;
