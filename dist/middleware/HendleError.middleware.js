"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HendleError = function (err, _, res, 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
next) {
    var status = err.status || 404;
    var message = err.message || 'ohh you can not viste this site';
    res.status(status).json({ message: message });
};
exports.default = HendleError;
