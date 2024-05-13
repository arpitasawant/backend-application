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
import mongoose, { Schema, Document } from 'mongoose';
import { v4 } from 'uuid';
import { User } from './user.types';

// Define the Mongoose schema
const userSchema = new Schema<User>({
    username: { type: String, required: true },
    password: { type: String, required: true }
});

// Define the Mongoose model
const UserModel1 = mongoose.model<User>('User', userSchema);

// Define the User repository class
class UserSchema {
    async find(query: Partial<User>): Promise<User[]> {
        return UserModel1.find(query).exec();
    }

    async findOne(query: Partial<User>): Promise<User | null> {
        return UserModel1.findOne(query).exec();
    }

    async insertOne(user: Omit<User, "id">): Promise<User> {
        const newUser = new UserModel1({ ...user, id: v4() });
        return newUser.save();
    }
}

// Export the repository instance
export const UserModel = new UserSchema();
