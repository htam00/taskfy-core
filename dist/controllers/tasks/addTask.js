"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.addTask = void 0;
const Tasks_1 = require("../../models/Tasks");
exports.addTask = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const title = req.body['title'];
    const description = req.body['description'];
    const tasks = new Tasks_1.default({ title: title, description: description });
    yield tasks.save((err, task) => !err ? res.json(task) : console.log(err));
    res.end();
});
exports.deleteTask = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const taskID = req.params.id;
    yield Tasks_1.default.findByIdAndDelete(taskID, (err, deleted) => {
        if (err) {
            res.send(err);
        }
        const message = deleted ? 'delected success...' : 'failed delected (:';
        res.send(message);
    });
    res.end();
});
//# sourceMappingURL=addTask.js.map