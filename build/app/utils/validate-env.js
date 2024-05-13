"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateENV = void 0;
const zod_1 = require("zod");
const dotenv_1 = require("dotenv");
const validator = zod_1.z.object({
    PORT: zod_1.z.coerce.number(),
});
const validateENV = () => {
    try {
        (0, dotenv_1.config)();
        validator.parse(process.env);
    }
    catch (e) {
        throw ({ message: "ENV IS NOT CONFIGURED CORRECTLY...", error: e });
    }
};
exports.validateENV = validateENV;
