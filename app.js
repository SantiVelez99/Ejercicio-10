const express = require('express')
const app = express()
const api_routes = require('./routes/todo.routes')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use("/api", api_routes)
module.exports = app;