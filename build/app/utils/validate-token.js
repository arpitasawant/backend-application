"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const validateToken = (excludedRoutes) => (req, res, next) => {
    try {
        if (excludedRoutes.find(r => r.path(req.path) && r.method === req.method)) {
            return next();
        }
        const token = req.headers.authorization;
        if (!token)
            throw "FORBIDDEN";
        const { JWT_SECRET } = process.env;
        const payload = (0, jsonwebtoken_1.verify)(token, JWT_SECRET);
        // req.user = payload;
    }
    catch (e) {
        next({ statusCode: 403, message: "FORBIDDEN" });
    }
};
exports.validateToken = validateToken;
