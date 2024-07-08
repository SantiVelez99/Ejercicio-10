const express = require('express')
const router = express.Router()
const todoController = require('../controllers/todo.controller')

router.post("/todo", todoController.postToDo)
router.get("/todo", todoController.getToDos)
router.get("/todo/:id", todoController.getToDoById)

module.exports = router
