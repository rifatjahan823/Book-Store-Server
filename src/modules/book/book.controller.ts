import { Request, Response } from "express";
import { catchAsync } from "../../shared/catchAsync";
import { bookService } from "./book.service";
import { sendResponse } from "../../shared/sendResponse";
import { IBook } from "./book.interface";
import httpStatus from "http-status";

const createBook=catchAsync(async(req: Request, res: Response)=>{
const {...bookData}=req.body;
const result=await bookService.createBook(bookData);
sendResponse<IBook>(res,{
    statusCode:httpStatus.OK,
    success:true,
    message:'Book Created Successfully',
    data:result
})
})


export const bookController={
    createBook
}