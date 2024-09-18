import express, { Request, Response } from'express'
import cors from 'cors'
import router from './app/Routes'
import globalErrorHandler from './app/Middlewares/globalErrorHandler'
import notFoundRoute from './app/Middlewares/notFoundRoute'
const app = express()


app.use(cors())
app.use(express.json())

//router
app.use('/api',router)

app.get('/', (req:Request, res:Response) => {
  res.send('Hello From Camper Shop')
})

//global error handler
app.use(globalErrorHandler)
//not found 
app.use(notFoundRoute)


export default app;