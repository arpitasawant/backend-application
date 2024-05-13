import { Router } from "express";

import {  Route } from "../routes/routes.types";

const router = Router();

export const route = new Route("/user", router);
// export const excludedRoutes = new ExcludedRoute(router,'GET');