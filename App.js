const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, 'assets')))
app.set('view engine', 'ejs')
app.set('views', 'Views')

app.get('/', (req, res) => {
    res.render('Index')
})

app.listen(3000, () => {
    console.log("Server is running!")
})