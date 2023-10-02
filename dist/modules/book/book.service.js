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
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookService = void 0;
const book_model_1 = require("./book.model");
const paginationHelper_1 = require("../../helpers/paginationHelper");
const constance_1 = require("./constance");
// --------------------Create-Book-------------
const createBook = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_model_1.Book.create(payload);
    return result;
});
// --------------getAllBook--------------
const getAllBooks = (filters, paginationOptions) => __awaiter(void 0, void 0, void 0, function* () {
    const { searchTerm } = filters, filtersData = __rest(filters, ["searchTerm"]);
    const { page, limit, skip, sortBy, sortOrder } = (0, paginationHelper_1.calculatePagination)(paginationOptions);
    const andConditions = [];
    // Search needs $or for searching in specified fields
    if (searchTerm) {
        andConditions.push({
            $or: constance_1.bookSearchableFields.map(field => ({
                [field]: {
                    $regex: searchTerm,
                    $options: 'i',
                },
            })),
        });
    }
    // Filters needs $and to fullfill all the conditions
    if (Object.keys(filtersData).length) {
        andConditions.push({
            $and: Object.entries(filtersData).map(([field, value]) => ({
                [field]: value,
            })),
        });
    }
    // Dynamic  Sort needs  field to  do sorting
    const sortCondition = {};
    if (sortBy && sortOrder) {
        sortCondition[sortBy] = sortOrder;
    }
    const whereConditions = andConditions.length > 0 ? { $and: andConditions } : {};
    const result = yield book_model_1.Book.find(whereConditions)
        .sort(sortCondition)
        .skip(skip)
        .limit(limit);
    const total = yield book_model_1.Book.countDocuments(whereConditions);
    return {
        meta: {
            page,
            limit,
            total,
        },
        data: result,
    };
});
// ----------------GetSingleBook------------
const getSingleBook = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_model_1.Book.findById(_id);
    return result;
});
//----------------update Book------------------
const updateBook = (_id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = __rest(payload, []);
    const updateUserData = Object.assign({}, userData);
    const result = yield book_model_1.Book.findByIdAndUpdate({ _id }, updateUserData, {
        new: true,
    });
    return result;
});
// ---------Delete a Book----------
const deleteBook = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = book_model_1.Book.findByIdAndDelete(_id);
    return result;
});
exports.bookService = {
    createBook,
    getAllBooks,
    getSingleBook,
    updateBook,
    deleteBook
};
