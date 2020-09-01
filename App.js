const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, 'assets')))
app.set('view engine', 'ejs')
app.set('views', 'views') // default value

app.get('/', (req, res) => {
    res.send('Hello')
})

app.listen(3000, () => {
    console.log("Server is running!")
})