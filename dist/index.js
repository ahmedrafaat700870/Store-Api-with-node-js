"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
// My middleWare
var morgan_1 = __importDefault(require("morgan"));
var config_rateLimit_1 = __importDefault(require("./middleware/config.rateLimit"));
var helmet_1 = __importDefault(require("helmet"));
// My routes
var routes_1 = __importDefault(require("./routes"));
// My configration
var config_1 = __importDefault(require("./config"));
// hendling Errors
var HendleError_middleware_1 = __importDefault(require("./middleware/HendleError.middleware"));
// hendle notfound page
var LastMeddile_1 = __importDefault(require("./middleware/LastMeddile"));
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, morgan_1.default)('common'));
app.use(config_rateLimit_1.default);
app.use((0, helmet_1.default)());
app.use(routes_1.default);
app.use(HendleError_middleware_1.default);
app.use(LastMeddile_1.default);
var PORT = parseInt(config_1.default.PORT, 10);
app.listen(PORT, function () {
    // eslint-disable-next-line no-console
    return console.log('SERVER IS RUNING..');
});
exports.default = app;
