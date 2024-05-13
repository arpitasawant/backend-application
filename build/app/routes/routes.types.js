"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Route = void 0;
class Route {
    constructor(path, router) {
        this.path = path;
        this.router = router;
        if (!path.startsWith('/')) {
            throw new Error("INVALID PATH");
        }
        if (Route.registeredRoutes.find((route) => route.path === this.path)) {
            throw new Error(`PATH: ${this.path} ALREADY EXISTS`);
        }
        Route.registeredRoutes.push(this);
    }
}
exports.Route = Route;
Route.registeredRoutes = [];
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
