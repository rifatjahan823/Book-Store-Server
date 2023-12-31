import express from 'express'
import { authRouter } from '../modules/auth/auth.router'
import { bookRouter } from '../modules/book/book.router'

const router = express.Router()

const allRouter = [
  {
    path: '/auth',
    router: authRouter.router,
  },
  {
    path: '/book',
    router: bookRouter.router,
  },
]

allRouter.forEach(route => router.use(route.path, route.router))

export default router
