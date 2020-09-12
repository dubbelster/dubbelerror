"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function errorResponse(statusCode, message) {
    return {
        status: statusCode,
        message: message
    };
}
exports.default = errorResponse;
