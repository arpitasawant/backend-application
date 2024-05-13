"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authReponses = void 0;
exports.authReponses = {
    INVALID_CREDENTIALS: {
        statusCode: 400,
        message: "INVALID CREDENTIALS"
    },
    USER_REGISTRATION_FAILED: {
        statusCode: 400,
        message: "USER REGISTRATION FAILED"
    },
    PASSWORD_DOESNT_MATCH: {
        statusCode: 403,
        message: "PASSWORD DOESNT MATCH"
    },
    SOMETHING_WENT_WRONG: {
        statusCode: 500,
        message: "SOMETHING WENT WRONG"
    },
    USER_IS_NOT_AUTHORISED: {
        statusCode: 401,
        message: "USER IS NOT AUTHORISED"
    },
};
