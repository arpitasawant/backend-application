"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Restaurant = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const restaurantSchema = new mongoose_1.default.Schema({
    resid: { type: Number, required: true },
    resimg: { type: String, required: true },
    resname: { type: String, required: true },
    resdesc: { type: String, required: true }
});
exports.Restaurant = mongoose_1.default.model('Restaurant', restaurantSchema);
