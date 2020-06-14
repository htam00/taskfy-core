"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const app_1 = require("./app");
const port = process.env.PORT || 8000;
const host = process.env.HOST || 'localhost';
const server = http_1.createServer(app_1.default);
server.listen(port, () => console.log(`Listen Running http://${host}:${port}`));
//# sourceMappingURL=server.js.map