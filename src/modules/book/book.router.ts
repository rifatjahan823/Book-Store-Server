import express from 'express'
import { bookController } from './book.controller'
const router = express.Router()

router.post('/create-book', bookController.createBook)

router.post('/', bookController.getAllBooks)

export const bookRouter = {
  router,
}
