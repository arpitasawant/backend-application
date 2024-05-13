import { match } from 'path-to-regexp';
import authRouter from '../auth/auth.routes'
import { ExcludedRoutes } from './routes.types';
import { resRouter } from '../restaurants/restaurants.route';
import { feedbackRouter } from '../feedback/feedback.route';

export const routes = [
    authRouter,resRouter,feedbackRouter
]

// export const excludedRoutes: ExcludedRoutes = [{
//     path: match("/auth/user/:id"),
//     method: 'GET'
// },{
//     path: match("/auth/register"),
//     method: 'POST'
// },];