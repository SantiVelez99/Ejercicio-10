const Todo = require('../models/todo.model')

async function postToDo(req, res) {
    try {
        const todo = new Todo(req.body)
        const newTodo = await todo.save()
        if(!newTodo){
            return res.status(500).send({
                ok: false,
                message: "Error al crear la tarea"
            })
        }
        res.status(201).send({
            ok: true,
            message: "Tarea creada correctamente",
            tarea: newTodo
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            ok: false,
            message: "Error al crear la tarea"
        })
    }
}

async function getToDos(req, res) {
    try {
        const todos = await Todo.find()
        res.status(200).send({
            ok: true,
            message: "Tareas Obtenidas",
            tareas: todos
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            ok: false,
            message: "Error al crear la tarea"
        })
    }
}

async function getToDoById(req, res) {
    try {
        const id = req.params.id
        const todo = await Todo.findById(id)
        if(!todo){
            return res.status(500).send({
                ok: false,
                message: "No se ha encontrado la tarea"
            })
        }
        res.status(200).send({
            ok: true,
            message: "Tarea encontrada exitosamente",
            tarea: todo
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            ok: false,
            message: "Error al crear la tarea"
        })
    }
}

module.exports = {
    postToDo, getToDos, getToDoById
}