var DB = require('./../config/db')
var mongoose = require('mongoose')

let surveySchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true,
        unique: true
    }
})

let surveyModel = DB.model('surveys', surveySchema)

module.exports = surveyModel