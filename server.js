const mongoose = require('mongoose')
const app = require('express')()
const bodyParser = require("body-parser");
const PORT = process.env.SERVER_PORT
const TodoListRoutes = require('./app/routes/api/todolist')

const cors = require('cors')
require('dotenv').config();

app.use(cors()) // to allow cross origin requests
app.use(bodyParser.json()) // to convert the request into JSON

mongoose
    .connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,

    })
    .then(() => console.log('MongoDB database Connected...'))
    .catch((err) => console.log(err))


app.use('/api/todolist', TodoListRoutes)

// set port, listen for requests
app.listen(process.env.SERVER_PORT, () => console.log(`App listening at http://localhost:${process.env.SERVER_PORT}`))