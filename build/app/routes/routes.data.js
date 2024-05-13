"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const auth_routes_1 = __importDefault(require("../auth/auth.routes"));
const restaurants_route_1 = require("../restaurants/restaurants.route");
const feedback_route_1 = require("../feedback/feedback.route");
exports.routes = [
    auth_routes_1.default, restaurants_route_1.resRouter, feedback_route_1.feedbackRouter
];
// export const excludedRoutes: ExcludedRoutes = [{
//     path: match("/auth/user/:id"),
//     method: 'GET'
// },{
//     path: match("/auth/register"),
//     method: 'POST'
// },];
