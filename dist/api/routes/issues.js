"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var issues_1 = require("../controllers/issues");
var auth_1 = require("../middleware/auth");
var router = (0, express_1.Router)();
router.post('/', auth_1.protect, issues_1.createIssue);
router.get('/', issues_1.getIssues);
router.get('/my-issues', auth_1.protect, issues_1.getIssuesByUser);
router.get('/:id', issues_1.getIssueById);
router.put('/:id', auth_1.protect, issues_1.updateIssue);
exports.default = router;
//# sourceMappingURL=issues.js.map