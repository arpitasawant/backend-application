"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.query = exports.params = exports.body = void 0;
const validator = (source, schema, passthrough = false) => (req, res, next) => {
    try {
        if (passthrough) {
            req[source] = schema.passthrough().parse(req[source]);
        }
        else {
            req[source] = schema.parse(req[source]);
        }
        next();
    }
    catch (e) {
        next({ statusCode: 400, message: "BAD REQUEST", errors: e });
    }
};
const body = (schema, passthrough = false) => validator("body", schema);
exports.body = body;
const params = (schema, passthrough = false) => validator("params", schema);
exports.params = params;
const query = (schema, passthrough = false) => validator("query", schema);
exports.query = query;
