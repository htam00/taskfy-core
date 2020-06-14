"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_1 = require("../controllers/app/index");
const router = express_1.Router();
router.get('/', index_1.homepage);
router.get('/api/');
exports.default = router;
//# sourceMappingURL=index.js.map