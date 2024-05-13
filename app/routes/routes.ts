import { Application, json, NextFunction, Request, Response, } from "express";
import { routes } from './routes.data'
import { ResponseHandler } from "../utils/response.handler";
import { validateToken } from "../utils/validate-token";
import { ExcludedRoutes } from "./routes.types";
import { match } from 'path-to-regexp'
import cors from 'cors';

const excludedRoutes: ExcludedRoutes = [{
    path: match("/auth/login"),
    method: 'POST'
},{
    path: match("/auth/register"),
    method: 'POST'
},
{
    path: match("/feedback/:id"),
    method: 'POST'
}];

export const registerMiddlewares = (app: Application) => {
    app.use(json())

    app.use((req, res, next) => {
        console.log(`Incoming ${req.method} request to ${req.path}`);
        next();
    });
    app.use(validateToken(excludedRoutes))

    app.use(cors())

    for (let route of routes) {
        app.use(route.path, route.router)
    }
    app.use((err: any, req: Request, res: Response, next: NextFunction) => {
        res.status(err.statusCode || 500).send(
            new ResponseHandler(null, err)
        )
    })
}




