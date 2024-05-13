import z from 'zod';

export interface UserResponsesI {
	[key: string]: {
		statusCode: number;
		message: string;
	};
}

export const UserSchema = z.object({
    id: z.string().uuid(),
    username: z.string(),
    password: z.string()    
})

export type User = z.infer<typeof UserSchema>;

import { Request as ExpressRequest } from 'express';


// Define a custom interface that extends the Express Request interface
 export interface CustomRequest extends ExpressRequest {
    user: User; // Assuming User type represents user information
}

