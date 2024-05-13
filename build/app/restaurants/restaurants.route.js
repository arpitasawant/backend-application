"use strict";
/*import { Router } from "express";

import {  Route } from "../routes/routes.types";
import { resdata } from "./restaurants.data";
import { seedDatabase } from "./restaurants.service";
const router = Router();

router.get('/',(req,res)=>{
    res.send(resdata);
})

router.post('/data',(req,res)=>{

    res.send(seedDatabase());
})

export const resRouter = new Route("/restaurants", router);*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.resRouter = void 0;
const express_1 = require("express");
const routes_types_1 = require("../routes/routes.types");
const restaurants_data_1 = require("./restaurants.data");
const restaurants_service_1 = require("./restaurants.service");
const router = (0, express_1.Router)();
// Route to get all restaurants
router.get('/', (req, res) => {
    try {
        // Send restaurant data as response
        res.status(200).json(restaurants_data_1.resdata);
    }
    catch (error) {
        console.error('Error fetching restaurants:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
// Route to seed database with restaurant data
router.post('/data', (req, res) => {
    try {
        // Call seedDatabase function to seed the database
        (0, restaurants_service_1.seedDatabase)();
        res.status(201).json({ message: 'Database seeded successfully' });
    }
    catch (error) {
        console.error('Error seeding database:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
// Export Route Instance
exports.resRouter = new routes_types_1.Route("/restaurants", router);
