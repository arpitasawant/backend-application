// // feedback.repo.ts

// import { Feedback, FeedbackModel } from './feedback.schema';

// export const addFeedback = async (feedbackData: Feedback): Promise<Feedback> => {
//     try {
//         // Create a new feedback document based on the feedback data
//         const newFeedback = new FeedbackModel(feedbackData);
//         // Save the feedback document to the database
//         const savedFeedback = await newFeedback.save();
//         return savedFeedback;
//     } catch (error) {
//         if (error instanceof Error) {
//             throw new Error('Failed to add feedback: ' + error.message);
//         } else {
//             throw new Error('Failed to add feedback: Unknown error');
//         }
//     }
// };
// feedback.controller.js

import { CustomRequest } from '../users/user.types';
import { Response } from 'express';
import { feedbackSchema } from './feedback.schema';
export async function submitFeedback(req: CustomRequest, res: Response<any, Record<string, any>>) {
    try {
        const { id } = req.params; // Extract restaurant ID from route parameters
        const { rating, feedbackText } = req.body;
        const userId = req.user?.id; // Access userId from req.user

        // Validate if all necessary data is available
        if (!userId) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        if (!id || !rating || !feedbackText) {
            return res.status(400).json({ message: 'Missing data' });
        }

        // Save feedback to database
        const feedback = new feedbackSchema({
            userId,
            resId: id,
            rating,
            feedbackText
        });
        await feedback.save();

        res.status(201).json({ message: 'Feedback submitted successfully' });
    } catch (error) {
        console.error('Error submitting feedback:', error);
        res.status(500).json({ message: 'Failed to submit feedback' });
    }
}


