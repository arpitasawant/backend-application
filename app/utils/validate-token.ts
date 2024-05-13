import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { ExcludedRoutes } from "../routes/routes.types";

export const validateToken = (excludedRoutes: ExcludedRoutes) =>
    (req: Request, res: Response, next: NextFunction) => {
        try {

            
            if (excludedRoutes.find(r => r.path(req.path) && r.method === req.method)) {
                return next();
            }

            const token = req.headers.authorization;

            if (!token) throw "FORBIDDEN";

            const { JWT_SECRET } = process.env;
            const payload = verify(token, JWT_SECRET);

            // req.user = payload;

        } catch (e) {
            next({ statusCode: 403, message: "FORBIDDEN" })
        }
    }

    