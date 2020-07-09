"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const app_1 = require("./app");
const port = process.env.PORT || 4000;
const host = process.env.HOST || 'localhost';
const server = http.createServer(app_1.default);
server.listen(port, () => console.log(`Listen Running http://${host}:${port}`));
//# sourceMappingURL=server.js.map