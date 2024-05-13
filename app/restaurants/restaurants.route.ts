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

import { Router, Request, Response } from "express";
import { Route } from "../routes/routes.types";
import { resdata } from "./restaurants.data";
import { seedDatabase } from "./restaurants.service";

const router = Router();

// Route to get all restaurants
router.get('/', (req: Request, res: Response) => {
    try {
        // Send restaurant data as response
        res.status(200).json(resdata);
    } catch (error) {
        console.error('Error fetching restaurants:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Route to seed database with restaurant data
router.post('/data', (req: Request, res: Response) => {
    try {
        // Call seedDatabase function to seed the database
        seedDatabase();
        res.status(201).json({ message: 'Database seeded successfully' });
    } catch (error) {
        console.error('Error seeding database:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Export Route Instance
export const resRouter = new Route("/restaurants", router);
