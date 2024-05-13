"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validate_env_1 = require("./app/utils/validate-env");
(0, validate_env_1.validateENV)();
const app_1 = require("./app/app");
(0, app_1.startServer)();
