"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_schema_1 = require("./user.schema");
const find = (query) => user_schema_1.UserModel.find(query);
const findOne = (query) => user_schema_1.UserModel.findOne(query);
const insertOne = (query) => user_schema_1.UserModel.insertOne(query);
exports.default = {
    find, findOne, insertOne
};
