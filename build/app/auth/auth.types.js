"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUpCredentials = exports.Credentials = void 0;
const user_types_1 = require("../users/user.types");
;
exports.Credentials = user_types_1.UserSchema.pick({ username: true, password: true });
exports.signUpCredentials = user_types_1.UserSchema.omit({ id: true });
