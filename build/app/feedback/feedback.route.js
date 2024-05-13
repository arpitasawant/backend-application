"use strict";
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
exports.feedbackRouter = void 0;
const express_1 = require("express");
const routes_types_1 = require("../routes/routes.types");
const feedback_data_1 = require("./feedback.data");
const feedback_schema_1 = require("./feedback.schema");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.send(feedback_data_1.feedbacks);
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
router.post('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, rating, feedbackText } = req.body;
    const resId = req.params.id;
    try {
        const feedback = new feedback_schema_1.feedbackSchema({ userId, resId, rating, feedbackText });
        yield feedback.save();
        res.status(201).json({ message: 'Feedback added successfully' });
    }
    catch (err) {
        res.status(500).json({ err });
    }
}));
module.exports = router;
exports.feedbackRouter = new routes_types_1.Route("/feedback", router);
