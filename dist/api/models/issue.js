"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var issueSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    location: {
        type: {
            type: String,
            enum: ['Point'],
            required: true,
        },
        coordinates: {
            type: [Number],
            required: true,
        },
    },
    photoUrl: { type: String, required: true },
    status: { type: String, enum: ['Pending', 'In Progress', 'Resolved'], default: 'Pending' },
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });
issueSchema.index({ location: '2dsphere' });
exports.default = (0, mongoose_1.model)('Issue', issueSchema);
//# sourceMappingURL=issue.js.map