"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedbackSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.FeedbackSchema = zod_1.default.object({
    userid: zod_1.default.number(),
    resid: zod_1.default.number(),
    rating: zod_1.default.number().min(1).max(5), // Assuming rating is between 1 and 5
    feedbackText: zod_1.default.string()
});
