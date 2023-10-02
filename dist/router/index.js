"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_router_1 = require("../modules/auth/auth.router");
const book_router_1 = require("../modules/book/book.router");
const router = express_1.default.Router();
const allRouter = [
    {
        path: '/auth',
        router: auth_router_1.authRouter.router,
    },
    {
        path: '/book',
        router: book_router_1.bookRouter.router,
    },
];
allRouter.forEach(route => router.use(route.path, route.router));
exports.default = router;
