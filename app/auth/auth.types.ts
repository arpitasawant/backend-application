import { z } from "zod";

import { UserResponsesI, UserSchema } from "../users/user.types";

export interface CredentialI extends z.infer<typeof Credentials> { };

export const Credentials = UserSchema.pick({ username: true, password: true });

export interface AuthResponsesI extends UserResponsesI { }

export const signUpCredentials = UserSchema.omit({id:true})
