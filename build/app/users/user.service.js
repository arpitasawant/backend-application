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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_repo_1 = __importDefault(require("./user.repo"));
const user_repsonse_1 = require("./user.repsonse");
// const find = async (query: Partial<User>) => {
//     try {
//         const users = await userRepo.find(query);
//         return users;
//     } catch (error) {
//         throw new Error('Failed to find users');
//     }
// }
const find = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Query the database to fetch all user data
        const allUsers = yield user_repo_1.default.find({});
        return allUsers;
    }
    catch (error) {
        throw error; // Handle or log any errors
    }
});
function findOne(query_1) {
    return __awaiter(this, arguments, void 0, function* (query, safe = false) {
        try {
            const user = yield user_repo_1.default.findOne(query);
            if (!user) {
                if (safe)
                    return false;
                throw user_repsonse_1.userResponses.USER_NOT_FOUND;
            }
            return user;
        }
        catch (error) {
            throw error; // Handle or log any errors
        }
    });
}
const insertOne = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const existingUser = yield user_repo_1.default.findOne({ username: user.username });
    if (existingUser) {
        throw user_repsonse_1.userResponses.USER_ALREADY_EXIST;
    }
    const didInsert = yield user_repo_1.default.insertOne(user);
    if (didInsert)
        return user_repsonse_1.userResponses.USER_REGISTERED_SUCCESSFULLY;
    throw user_repsonse_1.userResponses.USER_REGISTRATION_FAILED;
});
exports.default = {
    find, findOne, insertOne,
};
