"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.route = void 0;
const express_1 = require("express");
const routes_types_1 = require("../routes/routes.types");
const router = (0, express_1.Router)();
exports.route = new routes_types_1.Route("/user", router);
// export const excludedRoutes = new ExcludedRoute(router,'GET');
