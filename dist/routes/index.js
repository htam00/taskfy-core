"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_1 = require("../controllers/app/index");
const addTask_1 = require("../controllers/tasks/addTask");
const allTasks_1 = require("../controllers/tasks/allTasks");
const getTask_1 = require("../controllers/tasks/getTask");
const router = express_1.Router();
router.get('/', index_1.homepage)
    .get('/api/v1/tasks', allTasks_1.allTasks)
    .get('/api/v1/tasks/:id', getTask_1.oneTask)
    .post('/api/v1/tasks', addTask_1.addTask)
    .delete('/api/v1/tasks/:id', addTask_1.deleteTask);
exports.default = router;
//# sourceMappingURL=index.js.map