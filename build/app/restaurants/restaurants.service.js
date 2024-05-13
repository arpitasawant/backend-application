"use strict";
// import { authReponses } from "../auth/auth.responses";
// import userRepo from "./user.repo";
// import { userResponses } from "./user.repsonse";
// import { User } from "./user.types";
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
exports.seedDatabase = void 0;
// // const find = async (query: Partial<User>) => {
// //     try {
// //         const users = await userRepo.find(query);
// //         return users;
// //     } catch (error) {
// //         throw new Error('Failed to find users');
// //     }
// // }
// const find = async () => {
//     try {
//         // Query the database to fetch all user data
//         const allUsers = await userRepo.find({});
//         return allUsers;
//     } catch (error) {
//         throw error; // Handle or log any errors
//     }
// };
// function findOne(query: Partial<User>, safe?: false): User;
// function findOne(query: Partial<User>, safe?: true): false | User;
// function findOne(query: Partial<User>, safe: boolean = false) {
//     const user = userRepo.findOne(query)
//     if (!user) {
//         if (safe) return false;
//         throw userResponses.USER_NOT_FOUND;
//     }
//     return user;
// }
// const insertOne = async (user: User) => {
//     const existingUser = await userRepo.findOne({ username: user.username });
//     if (existingUser) {
//         throw userResponses.USER_ALREADY_EXIST;
//     }
//     const didInsert = await userRepo.insertOne(user);
//     if (didInsert) return userResponses.USER_REGISTERED_SUCCESSFULLY;
//     throw userResponses.USER_REGISTRATION_FAILED;
// }
// export default {
//     find, findOne, insertOne,
// }
const mongoose_1 = __importDefault(require("mongoose"));
const restaurants_schema_1 = require("./restaurants.schema");
const restaurants_data_1 = require("./restaurants.data");
function seedDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Clear existing data
            yield restaurants_schema_1.Restaurant.deleteMany();
            // Insert restaurant data
            yield restaurants_schema_1.Restaurant.insertMany(restaurants_data_1.resdata);
            console.log('Database seeded successfully');
        }
        catch (error) {
            console.error('Error seeding database:', error);
        }
        finally {
            // Close the connection
            mongoose_1.default.disconnect();
        }
    });
}
exports.seedDatabase = seedDatabase;
