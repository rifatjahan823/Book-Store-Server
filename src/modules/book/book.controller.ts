import { Request, Response } from 'express'
import { catchAsync } from '../../shared/catchAsync'
import { bookService } from './book.service'
import { sendResponse } from '../../shared/sendResponse'
import { IBook } from './book.interface'
import httpStatus from 'http-status'
import { pick } from '../../shared/pick'
import { bookFilterableFields } from './constance'
import { paginationFiled } from '../../constance/paginationField'

// ----------create-book---------
const createBook = catchAsync(async (req: Request, res: Response) => {
  const { ...bookData } = req.body
  const result = await bookService.createBook(bookData)
  sendResponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book Created Successfully',
    data: result,
  })
})

// ---------------getallbook------------
const getAllBooks = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, bookFilterableFields)
  const paginationOptions = pick(req.query, paginationFiled)
  const result = await bookService.getAllBooks(filters, paginationOptions)
  sendResponse<IBook[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Books retrieved successfully',
    meta: result.meta,
    data: result.data,
  })
})


// ----------------GetSingleBook------------
const getSingleBook = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const result = await bookService.getSingleBook(id)
  sendResponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book retrieved successfully',
    data: result,
  })
})




export const bookController = {
  createBook,
  getAllBooks,
  getSingleBook
}
