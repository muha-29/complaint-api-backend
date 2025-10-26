"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var generate_1 = require("../controllers/generate");
var auth_1 = require("../middleware/auth");
var router = (0, express_1.Router)();
router.post('/', auth_1.protect, generate_1.generateContent);
exports.default = router;
//# sourceMappingURL=generate.js.map