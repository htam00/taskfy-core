"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const index_1 = require("./routes/index");
const app = express();
app.use(index_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map