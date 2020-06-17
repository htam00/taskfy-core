"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allow = void 0;
const mongoose_1 = require("mongoose");
const uri = 'mongodb://127.0.0.1:27017/test';
const options = { useNewUrlParser: true, useUnifiedTopology: true };
exports.allow = () => mongoose_1.connect(uri, options);
//# sourceMappingURL=database.js.map