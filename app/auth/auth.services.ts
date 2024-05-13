import { compare } from "bcrypt";
import userService from "../users/user.service";
import { User } from "../users/user.types";
import { encrypt } from "../utils/encrypt";
import { authReponses } from "./auth.responses";
import { sign } from "jsonwebtoken";

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
const find = async () => {
    try {
        // Call userService to fetch all user data
        const allUserData = await userService.find();
        return allUserData;
    } catch (error) {
        throw error; // Handle or log any errors
    }
};

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

const login = async (credentials: User) => {
    try {
        const user = await userService.findOne({ username: credentials.username });
        if (!user) throw authReponses.INVALID_CREDENTIALS;

        const didMatch = await compare(credentials.password, user.password);
        if (!didMatch) throw authReponses.INVALID_CREDENTIALS;

        const { password, ...restOfTheUser } = user;

        const { JWT_SECRET } = process.env;
        const accessToken = sign(restOfTheUser, JWT_SECRET);

        return { user: restOfTheUser, accessToken };
    } catch (e) {
        throw authReponses.INVALID_CREDENTIALS;
    }
};


const register = async (userData: User) => {
    try {
        const alreadyRegistered = await userService.findOne(userData, true);
        if (alreadyRegistered) {
            throw authReponses.USER_ALREADY_EXIST;
        }
        userData.password = await encrypt(userData.password);
        return userService.insertOne(userData);
    } catch (e) {
        throw authReponses.USER_REGISTRATION_FAILED;
    }
};


export default {
    login,
    register,
    find
}
