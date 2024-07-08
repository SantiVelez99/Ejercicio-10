const mongoose = require('mongoose')
const Schema = mongoose.Schema

const todoSchema = new Schema({
    title: { type: String, required: true, minLength: 3, maxLength: 100 },
    description: { type: String, required: true, minLength: 3, maxLength: 250 },
    status: { type: Boolean, default: false },
    createdAt: { type: Number, default: Date.now },
    updatedAt: { type: Number, default: Date.now }
})

module.exports = mongoose.model('Todo', todoSchema)