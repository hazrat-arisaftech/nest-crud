"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoSchema = void 0;
const mongoose = require("mongoose");
exports.TodoSchema = new mongoose.Schema({
    id: {
        type: String,
    },
    desc: {
        type: String,
        required: true,
    },
    isCompleted: {
        type: Boolean,
        default: false,
    },
});
//# sourceMappingURL=todo.schema.js.map