import express from 'express';
import cors from 'cors'

//middleware
const app=express();
app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({extended:true}))


export default app