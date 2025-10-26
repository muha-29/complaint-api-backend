"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
var express_1 = __importDefault(require("express"));
var issues_1 = __importDefault(require("./api/routes/issues"));
var auth_1 = __importDefault(require("./api/routes/auth"));
var generate_1 = __importDefault(require("./api/routes/generate"));
var errorHandler_1 = require("./api/middleware/errorHandler");
var db_1 = __importDefault(require("./config/db"));
var app = (0, express_1.default)();
var port = process.env.PORT || 3000;
// Connect to MongoDB
(0, db_1.default)();
app.use(express_1.default.json());
app.use('/api/issues', issues_1.default);
app.use('/api/auth', auth_1.default);
app.use('/api/generate', generate_1.default);
app.use(errorHandler_1.errorHandler);
app.listen(port, function () {
    console.log("Server is running on http://localhost:".concat(port));
});
//# sourceMappingURL=index.js.map