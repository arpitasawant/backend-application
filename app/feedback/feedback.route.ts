import { Router } from "express";
import { Route } from "../routes/routes.types";
import { feedbacks } from "./feedback.data";
import { submitFeedback } from "./feedback.repo"; // Import from feedback.controller, not feedback.repo
import { CustomRequest } from "../users/user.types";
// import FeedbackModel from './feedback.schema';
import { Request } from "express";
import { feedbackSchema } from "./feedback.schema";
const router = Router();

router.get('/', (req, res) => {
    res.send(feedbacks);
});

// // router.post('/:id', submitFeedback); // Use the submitFeedback function


// router.post('/:id',async(req:Request,res)=>{
//     try {
//         await submitFeedback(req as CustomRequest, res); // Call submitFeedback function with the request and response objects
//     } catch (error) {
//         console.error('Error handling feedback submission:', error);
//         res.status(500).json({ message: 'Failed to submit feedback' });
//     }
// })

// feedbackRoutes.js


// POST route to add feedback
router.post('/:id', async (req, res) => {
  const { userId, rating, feedbackText } = req.body;
  const resId = req.params.id;

  try {
    const feedback = new feedbackSchema({ userId, resId, rating, feedbackText });
    await feedback.save();
    res.status(201).json({ message: 'Feedback added successfully' });
  } catch (err) {
    res.status(500).json({ err});
  }
});

module.exports = router;

export const feedbackRouter = new Route("/feedback", router);
