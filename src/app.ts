import express from 'express'
import cors from 'cors'
import globalErrorHandaler from './middleware/globalErrorHandler'

//middleware
const app = express()
app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//globalError
app.use(globalErrorHandaler)

export default app
