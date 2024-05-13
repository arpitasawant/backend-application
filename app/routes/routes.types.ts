import { Router } from "express";
import {MatchFunction} from "path-to-regexp"


type Methods = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
type ExcludedRoute = {
    path:MatchFunction;
    method:Methods;
}
export type ExcludedRoutes = ExcludedRoute[];


export class Route {
    static registeredRoutes: Route[] = [];

    constructor(
        public path: string,
        public router: Router
    ) {
        if (!path.startsWith('/')) {
            throw new Error("INVALID PATH")
        }
        if (Route.registeredRoutes.find((route) => route.path === this.path)) {
            throw new Error(`PATH: ${this.path} ALREADY EXISTS`);
        }

        Route.registeredRoutes.push(this);
    }
}

// export class ExcludedRoute {
    
//     static excludedRoutes: ExcludedRoute[] = [];

//     constructor(
//         public path: MatchFunction,
//         public method: Methods
//     ) {
//         if (!path) {
//             throw new Error("Path cannot be empty");
//         }
//         if (!method) {
//             throw new Error("Method cannot be empty");
//         }
        
//         if (ExcludedRoute.excludedRoutes.find((route) => route.path === path && route.method === method)) {
//             throw new Error(`Excluded route with path '${path}' and method '${method}' already exists`);
//         }

//         ExcludedRoute.excludedRoutes.push(this);
//     }
// }
