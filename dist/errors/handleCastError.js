"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleCastError = void 0;
const handleCastError = (error) => {
    const statusCode = 400;
    const errors = [
        { path: error.path, message: 'Invalied id' },
    ];
    return {
        statusCode,
        message: 'Cast Error',
        errorMessages: errors,
    };
};
exports.handleCastError = handleCastError;
