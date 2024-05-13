import express from 'express'
import {registerMiddlewares} from './routes/routes'
import { connectToDatabase } from './utils/connect';


connectToDatabase();
export const startServer = ()=>{
    const app = express()

    registerMiddlewares(app);

    const PORT = process.env.PORT || 5000

    app.listen(PORT,()=>{
        console.log(`SERVER STARTED LISTENING ON PORT ${PORT}`)
    })
}