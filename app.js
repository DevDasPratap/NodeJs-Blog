const env = require('dotenv').config()
const express = require('express')
const app = new express()
const port = 5500 || process.env.port

app.use(express.static('public'))
const expressejslayout = require('express-ejs-layouts')
app.use(expressejslayout)
app.set('layout', './layouts/main')
app.set('view engine', 'ejs')


app.use('/', require('./server/routes/main'))

app.listen(port, ()=>{
    console.log(`Blog app listening on port ${port}`)
})