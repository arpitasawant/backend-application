// import { authReponses } from "../auth/auth.responses";
// import userRepo from "./user.repo";
// import { userResponses } from "./user.repsonse";
// import { User } from "./user.types";

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

import mongoose from "mongoose";
import { Restaurant } from "./restaurants.schema";
import { resdata } from "./restaurants.data";

export async function seedDatabase() {
    try {
        // Clear existing data
        await Restaurant.deleteMany();

        // Insert restaurant data
        await Restaurant.insertMany(resdata);

        console.log('Database seeded successfully');
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        // Close the connection
        mongoose.disconnect();
    }
}


