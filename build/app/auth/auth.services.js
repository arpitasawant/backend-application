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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = require("bcrypt");
const user_service_1 = __importDefault(require("../users/user.service"));
const encrypt_1 = require("../utils/encrypt");
const auth_responses_1 = require("./auth.responses");
const jsonwebtoken_1 = require("jsonwebtoken");
// const find = async (credentials: Partial<User>) => {
//     // Await the result of userService.findOne
//     const user = await userService.findOne({ username: credentials.username });
//     // Ensure user is not null before destructuring
//     if (user) {
//         const { password, ...restOfTheUser } = user;
//         return restOfTheUser;
//     } else {
//         throw new Error('User not found'); // Or handle the case where user is not found
//     }
// }
const find = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Call userService to fetch all user data
        const allUserData = yield user_service_1.default.find();
        return allUserData;
    }
    catch (error) {
        throw error; // Handle or log any errors
    }
});
// const login = async (credentials: User) => {
//     try {
//         const user = userService.findOne({ username: credentials.username });
//         const didMatch = await compare(user.password, credentials.password);
//         if (!didMatch) throw authReponses.INVALID_CREDENTIALS;
//         const { password, ...restOfTheUser } = user;
//         const { JWT_SECRET } = process.env;
//         const accessToken = sign(restOfTheUser, JWT_SECRET)
//         return { user: restOfTheUser, accessToken };
//     } catch (e) {
//         throw authReponses.INVALID_CREDENTIALS;
//     }
// };
const login = (credentials) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_service_1.default.findOne({ username: credentials.username });
        if (!user)
            throw auth_responses_1.authReponses.INVALID_CREDENTIALS;
        const didMatch = yield (0, bcrypt_1.compare)(credentials.password, user.password);
        if (!didMatch)
            throw auth_responses_1.authReponses.INVALID_CREDENTIALS;
        const { password } = user, restOfTheUser = __rest(user, ["password"]);
        const { JWT_SECRET } = process.env;
        const accessToken = (0, jsonwebtoken_1.sign)(restOfTheUser, JWT_SECRET);
        return { user: restOfTheUser, accessToken };
    }
    catch (e) {
        throw auth_responses_1.authReponses.INVALID_CREDENTIALS;
    }
});
const register = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const alreadyRegistered = yield user_service_1.default.findOne(userData, true);
        if (alreadyRegistered) {
            throw auth_responses_1.authReponses.USER_ALREADY_EXIST;
        }
        userData.password = yield (0, encrypt_1.encrypt)(userData.password);
        return user_service_1.default.insertOne(userData);
    }
    catch (e) {
        throw auth_responses_1.authReponses.USER_REGISTRATION_FAILED;
    }
});
exports.default = {
    login,
    register,
    find
};
