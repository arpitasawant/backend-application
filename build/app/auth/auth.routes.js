"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routes_types_1 = require("../routes/routes.types");
const auth_services_1 = __importDefault(require("./auth.services"));
const response_handler_1 = require("../utils/response.handler");
const auth_validations_1 = require("./auth.validations");
const router = (0, express_1.Router)();
// router.get("/user/:name", ...LoginValidations, async (req, res, next) => {
//     try {
//         const result = await authServices.find({username:req.params.name})
//         res.send(new ResponseHandler(result));
//     } catch (e) {
//         next(e);
//     }
// });
router.get("/alldata", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Call the authServices to fetch all user data
        const result = yield auth_services_1.default.find();
        res.send(new response_handler_1.ResponseHandler(result));
    }
    catch (e) {
        next(e);
    }
}));
router.post("/login", ...auth_validations_1.LoginValidations, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield auth_services_1.default.login(req.body);
        res.send(new response_handler_1.ResponseHandler(result));
    }
    catch (e) {
        next(e);
    }
}));
router.post("/register", ...auth_validations_1.SignUpValidations, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield auth_services_1.default.register(req.body);
        res.send(new response_handler_1.ResponseHandler(result));
    }
    catch (e) {
        next(e);
    }
}));
exports.default = new routes_types_1.Route("/auth", router);
