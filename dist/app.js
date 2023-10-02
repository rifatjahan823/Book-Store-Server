"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const globalErrorHandler_1 = __importDefault(require("./middleware/globalErrorHandler"));
const router_1 = __importDefault(require("./router"));
const http_status_1 = __importDefault(require("http-status"));
//middleware
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
//parser
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
//-------**********---------
app.use('/api/v1', router_1.default);
//globalError
app.use(globalErrorHandler_1.default);
//notfound route-----------
app.use((req, res, next) => {
    res.status(http_status_1.default.NOT_FOUND).json({
        success: false,
        message: 'Not found',
        errorMessage: [{ path: req.originalUrl, message: 'Api Not Found' }],
    });
    next();
});
exports.default = app;
