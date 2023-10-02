import express from 'express'
import { bookController } from './book.controller'
import validateRequests from '../../middleware/validateRequest'
import { createBookZodSchema, updateBookZodSchema } from './book.validation'
const router = express.Router()

router.post('/create-book',validateRequests(createBookZodSchema), bookController.createBook)

router.patch('/:id',validateRequests(updateBookZodSchema),bookController.updateBook)

router.get('/', bookController.getAllBooks)

router.get('/:id', bookController.getSingleBook)

router.delete('/:id', bookController.getSingleBook)

export const bookRouter = {
  router,
}
