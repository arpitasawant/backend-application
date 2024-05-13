"use strict";
// // feedback.repo.ts
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
exports.submitFeedback = void 0;
const feedback_schema_1 = require("./feedback.schema");
function submitFeedback(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        try {
            const { id } = req.params; // Extract restaurant ID from route parameters
            const { rating, feedbackText } = req.body;
            const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id; // Access userId from req.user
            // Validate if all necessary data is available
            if (!userId) {
                return res.status(401).json({ message: 'Unauthorized' });
            }
            if (!id || !rating || !feedbackText) {
                return res.status(400).json({ message: 'Missing data' });
            }
            // Save feedback to database
            const feedback = new feedback_schema_1.feedbackSchema({
                userId,
                resId: id,
                rating,
                feedbackText
            });
            yield feedback.save();
            res.status(201).json({ message: 'Feedback submitted successfully' });
        }
        catch (error) {
            console.error('Error submitting feedback:', error);
            res.status(500).json({ message: 'Failed to submit feedback' });
        }
    });
}
exports.submitFeedback = submitFeedback;
