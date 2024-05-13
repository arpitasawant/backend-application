"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startServer = void 0;
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes/routes");
const connect_1 = require("./utils/connect");
(0, connect_1.connectToDatabase)();
const startServer = () => {
    const app = (0, express_1.default)();
    (0, routes_1.registerMiddlewares)(app);
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`SERVER STARTED LISTENING ON PORT ${PORT}`);
    });
};
exports.startServer = startServer;
