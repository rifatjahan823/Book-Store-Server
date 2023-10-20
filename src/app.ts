import express, { NextFunction, Request, Response } from 'express'
import cors from 'cors'
import globalErrorHandaler from './middleware/globalErrorHandler'
import router from './router'
import httpStatus from 'http-status'

//middleware
const app = express()
app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//-------**********---------
app.use('/api/v1', router)

//globalError
app.use(globalErrorHandaler)

//notfound route-----------
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not found',
    errorMessage: [{ path: req.originalUrl, message: 'Api Not Found' }],
  })
  next()
})

export default app
