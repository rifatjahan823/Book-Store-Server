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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookController = void 0;
const catchAsync_1 = require("../../shared/catchAsync");
const book_service_1 = require("./book.service");
const sendResponse_1 = require("../../shared/sendResponse");
const http_status_1 = __importDefault(require("http-status"));
const pick_1 = require("../../shared/pick");
const constance_1 = require("./constance");
const paginationField_1 = require("../../constance/paginationField");
// ----------create-book---------
const createBook = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bookData = __rest(req.body, []);
    const result = yield book_service_1.bookService.createBook(bookData);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Book Created Successfully',
        data: result,
    });
}));
// ---------------getallbook------------
const getAllBooks = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filters = (0, pick_1.pick)(req.query, constance_1.bookFilterableFields);
    const paginationOptions = (0, pick_1.pick)(req.query, paginationField_1.paginationFiled);
    const result = yield book_service_1.bookService.getAllBooks(filters, paginationOptions);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Books retrieved successfully',
        meta: result.meta,
        data: result.data,
    });
}));
// ----------------GetSingleBook------------
const getSingleBook = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield book_service_1.bookService.getSingleBook(id);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Book retrieved successfully',
        data: result,
    });
}));
//----------------update Book------------------
const updateBook = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const updateData = req.body;
    const result = yield book_service_1.bookService.updateBook(id, updateData);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Book updated successfully',
        data: result,
    });
}));
// ---------Delete a Book----------
const deleteBook = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield book_service_1.bookService.deleteBook(id);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'book deleted successfully',
        data: result,
    });
}));
exports.bookController = {
    createBook,
    getAllBooks,
    getSingleBook,
    updateBook,
    deleteBook
};
