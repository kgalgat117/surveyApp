var DB = require('./../config/db')
var mongoose = require('mongoose')

let userSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    assigned_surveys: {
        type: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'surveys'
            }
        ]
    }
})

let userModel = DB.model('users', userSchema)

module.exports = userModel