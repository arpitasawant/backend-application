import z from 'zod';

export interface Feedback {
    userid: number;
    resid: number;
    rating: number;
    feedbackText: string;
  }

export const FeedbackSchema = z.object({
    userid: z.number(),
    resid: z.number(),
    rating: z.number().min(1).max(5), // Assuming rating is between 1 and 5
    feedbackText: z.string()
});