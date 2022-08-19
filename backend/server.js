const express = require('express')
const cors = require('cors')
const colors = require('colors')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')

const port = process.env.PORT || 5000

const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus:200,
}

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.use(errorHandler)
app.use(cors(corsOptions))

app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/user', require('./routes/userRoutes'))

app.listen(port, () => console.log(`server started on port ${port}`))