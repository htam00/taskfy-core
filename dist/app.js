"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const index_1 = require("./routes/index");
const db = require("./config/database");
const body_parser_1 = require("body-parser");
const app = express();
db.allow();
app.use(body_parser_1.json());
app.use(body_parser_1.urlencoded({ extended: false }));
app.use(index_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map