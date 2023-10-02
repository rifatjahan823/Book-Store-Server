import express from 'express'
import cors from 'cors'
import globalErrorHandaler from './middleware/globalErrorHandler'
import router from './router'

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

export default app
