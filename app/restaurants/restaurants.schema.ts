import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema({
    resid: { type: Number, required: true },
    resimg: { type: String, required: true },
    resname: { type: String, required: true },
    resdesc: { type: String, required: true }
});

export const Restaurant = mongoose.model('Restaurant', restaurantSchema);