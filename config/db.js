var mongoose = require('mongoose')

let DB = mongoose.createConnection(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}/${process.env.DB_NAME}?retryWrites=true&w=majority`, {useNewUrlParser: true, useFindAndModify: true, useCreateIndex: true, useUnifiedTopology: true})

/*
declare the following varialbes ina .env file at root level
DB_USER
DB_PASSWORD
DB_CLUSTER

*/

module.exports = DB