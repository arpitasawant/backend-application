"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.UserModel = void 0;
/****************************import { User } from "./user.types";

import { v4 } from "uuid";

class UserSchema {
    private static users: User[] = [
        {
            id: "1",
            username: "arpita",
            password: "63"
        }
    ]


    // method overloading
    // private get(method: "filter", query: Partial<User>): User[]
    // private get(method: "find", query: Partial<User>): User

    // checking for the user exist or not
    private get<T extends 'find' | 'filter'>(method: T, query: Partial<User>) {
        return UserSchema.users[method]((user) => {
            const keys = Object.keys(query) as (keyof User)[];
            for (let key of keys) {
                if (user[key] !== query[key]) {
                    return false;
                }
            }
            return true;
        }) as T extends 'filter' ? User[] : User | undefined;
    }


    find(query: Partial<User>): User[] {
        return this.get('filter', query);
    }

    findOne(query: Partial<User>): User | undefined {
        return this.get('find', query);
    }

    insertOne(user: Omit<User, "id">) {
        UserSchema.users.push({ ...user, id: v4() })

        return true;
    }

    
}

export const UserModel = new UserSchema();*/
const mongoose_1 = __importStar(require("mongoose"));
const uuid_1 = require("uuid");
// Define the Mongoose schema
const userSchema = new mongoose_1.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true }
});
// Define the Mongoose model
const UserModel1 = mongoose_1.default.model('User', userSchema);
// Define the User repository class
class UserSchema {
    find(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return UserModel1.find(query).exec();
        });
    }
    findOne(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return UserModel1.findOne(query).exec();
        });
    }
    insertOne(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const newUser = new UserModel1(Object.assign(Object.assign({}, user), { id: (0, uuid_1.v4)() }));
            return newUser.save();
        });
    }
}
// Export the repository instance
exports.UserModel = new UserSchema();
