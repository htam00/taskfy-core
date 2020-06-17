"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const mongoose_1 = require("mongoose");
const TasksSchema = new mongoose_1.Schema({
    title: { type: String }, description: { type: String }
});
exports.default = mongoose.model("Tasks", TasksSchema);
//# sourceMappingURL=Tasks.js.map