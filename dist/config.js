"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var _a = process.env, PORT = _a.PORT, PGHOST = _a.PGHOST, PGUSER = _a.PGUSER, PGDATABASE = _a.PGDATABASE, PGDATABASE_TEST = _a.PGDATABASE_TEST, PGPASSWORD = _a.PGPASSWORD, PGPORT = _a.PGPORT, bycript_Password = _a.bycript_Password, salt_Rounds = _a.salt_Rounds, Tocken_Secret = _a.Tocken_Secret, NODE_ENV = _a.NODE_ENV;
exports.default = {
    PORT: PORT,
    PGHOST: PGHOST,
    PGUSER: PGUSER,
    PGDATABASE: PGDATABASE,
    PGDATABASE_TEST: PGDATABASE_TEST,
    PGPASSWORD: PGPASSWORD,
    PGPORT: PGPORT,
    bycript_Password: bycript_Password,
    salt_Rounds: salt_Rounds,
    Tocken_Secret: Tocken_Secret,
    NODE_ENV: NODE_ENV,
};
