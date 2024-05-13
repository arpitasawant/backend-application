"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerMiddlewares = void 0;
const express_1 = require("express");
const routes_data_1 = require("./routes.data");
const response_handler_1 = require("../utils/response.handler");
const validate_token_1 = require("../utils/validate-token");
const path_to_regexp_1 = require("path-to-regexp");
const cors_1 = __importDefault(require("cors"));
const excludedRoutes = [{
        path: (0, path_to_regexp_1.match)("/auth/login"),
        method: 'POST'
    }, {
        path: (0, path_to_regexp_1.match)("/auth/register"),
        method: 'POST'
    },
    {
        path: (0, path_to_regexp_1.match)("/feedback/:id"),
        method: 'POST'
    }];
const registerMiddlewares = (app) => {
    app.use((0, express_1.json)());
    app.use((req, res, next) => {
        console.log(`Incoming ${req.method} request to ${req.path}`);
        next();
    });
    app.use((0, validate_token_1.validateToken)(excludedRoutes));
    app.use((0, cors_1.default)());
    for (let route of routes_data_1.routes) {
        app.use(route.path, route.router);
    }
    app.use((err, req, res, next) => {
        res.status(err.statusCode || 500).send(new response_handler_1.ResponseHandler(null, err));
    });
};
exports.registerMiddlewares = registerMiddlewares;
