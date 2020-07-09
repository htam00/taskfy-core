"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allow = void 0;
const mongoose_1 = require("mongoose");
const { MONGO_HOSTNAME, MONGO_PORT, MONGO_DB, } = process.env;
const uri = `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`;
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    connectTimeoutMS: 10000
};
exports.allow = () => mongoose_1.connect(uri, options).then(() => console.log('MONGODB connected...'))
    .catch((err) => {
    console.error(err);
});
//# sourceMappingURL=database.js.map