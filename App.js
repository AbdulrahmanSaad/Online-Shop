const express = require('express')
const app = express()
const path = require('path')
const homeRouter = require('./Routes/HomeRoute')
const authRouter = require('./Routes/AuthRoute')

app.use(express.static(path.join(__dirname, 'assets')))
app.use(express.static(path.join(__dirname, 'images')))

app.set('view engine', 'ejs')
app.set('views', 'Views')

app.use('/', homeRouter)
app.use('/', authRouter)

app.listen(3000, () => {
    console.log("Server is running!")
})