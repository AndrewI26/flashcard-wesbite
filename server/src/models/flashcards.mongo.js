const mongoose = require('mongoose')

const flashcardsSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    front: {
        type: String,
        required: true,
    }, 
    back: {
        type: String,
        required: true
    }, 
    timesStudied: {
        type: Number,
        requried: false
    }, 
    dueDate: {
        type: Date,
        required: false
    }
})

module.exports = mongoose.model('Flashcard', flashcardsSchema)