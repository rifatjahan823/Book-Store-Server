"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendResponse = void 0;
const sendResponse = (res, data) => {
    const reponseData = {
        statusCode: data.statusCode,
        success: data.success,
        message: data.message || null,
        meta: data.meta || null || undefined,
        data: data.data || null,
    };
    res.status(data.statusCode).json(reponseData);
};
exports.sendResponse = sendResponse;
