// // feedback.model.js
// // import mongoose from "mongoose";

// // const feedbackSchema = new mongoose.Schema({
// //   userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
// //   resid: { type: Number, required: true },
// //   rating: { type: Number, required: true },
// //   feedback: { type: String, required: true }
// // });

// // const Feedback = mongoose.model('Feedback', feedbackSchema);

// // module.exports = Feedback;
// import mongoose, { Schema, Document } from 'mongoose';

// interface Feedback extends Document {
//     userId: Schema.Types.ObjectId;
//     resId: number;
//     rating: number;
//     feedbackText: string;
// }

// const feedbackSchema = new Schema<Feedback>({
//     userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
//     resId: { type: Number, required: true },
//     rating: { type: Number, required: true },
//     feedbackText: { type: String, required: true }
// });

// const FeedbackModel = mongoose.model<Feedback>('Feedback', feedbackSchema);

// export default FeedbackModel;
// feedback.js

const mongoose = require('mongoose');

export const feedbackSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  resId: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' },
  rating: { type: Number, required: true },
  feedbackText: { type: String, required: true },
});

module.exports = mongoose.model('Feedback', feedbackSchema);
