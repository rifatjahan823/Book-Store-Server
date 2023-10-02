import { Request, Response } from 'express'
import { catchAsync } from '../../shared/catchAsync'
import { authService } from '../auth/auth.service'
import { sendResponse } from '../../shared/sendResponse'
import httpStatus from 'http-status'

const signUpUser = catchAsync(async (req: Request, res: Response) => {
  const { ...userData } = req.body
  const createUser = await authService.signUpUser(userData)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Created User Successfully',
    data: createUser,
  })
})

export const authController = {
  signUpUser,
}
