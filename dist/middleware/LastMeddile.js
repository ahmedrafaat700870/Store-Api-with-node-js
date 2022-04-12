"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// eslint-disable-next-line @typescript-eslint/no-unused-vars
var Not_Found = function (_, res, next) {
    res.status(404).json('this site not founded');
};
exports.default = Not_Found;
