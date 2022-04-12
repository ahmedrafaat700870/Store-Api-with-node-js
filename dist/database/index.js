"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var pg_1 = require("pg");
var config_1 = __importDefault(require("../config"));
var DATABASE;
if (config_1.default.NODE_ENV == 'test') {
    DATABASE = config_1.default.PGDATABASE_TEST;
}
else {
    DATABASE = config_1.default.PGDATABASE;
}
var DB = new pg_1.Pool({
    port: parseInt(config_1.default.PGPORT, 10),
    host: config_1.default.PGHOST,
    database: DATABASE,
    password: config_1.default.PGPASSWORD,
    user: config_1.default.PGUSER,
});
DB.on('error', function (err) {
    throw new Error("".concat(err));
});
exports.default = DB;
