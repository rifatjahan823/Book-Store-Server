import express from 'express'
import { authController } from '../user/user.service'
const router = express.Router()


router.post('/signup', authController.signUpUser)


export const authRouter = {
  router,
}
