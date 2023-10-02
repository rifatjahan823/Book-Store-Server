import express from 'express'
import { authRouter } from '../modules/auth/auth.router'

const router = express.Router()

const allRouter = [
  {
    path: '/auth',
    router: authRouter.router,
  },
]

allRouter.forEach(route => router.use(route.path, route.router))

export default router
