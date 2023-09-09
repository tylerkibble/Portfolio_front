// const SwaggerUI = require('swagger-ui')
// const swaggerUi = require('swagger-ui-express');
// const swaggerJsdoc = require('swagger-jsdoc');
// const swaggerDocument = require('./swagger.json');
// const jsdoc = require('./app/config/jsdoc.js')
// const swaggerJsdoc = require('swagger-jsdoc');
// const swaggerSpec = swaggerJsdoc(options);
// console.log(swaggerSpec)
// const fs = require('fs');
// fs.writeFileSync('./swagger.json', JSON.stringify(swaggerSpec, null, 2));
// jsdoc;
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const mongoose = require('mongoose')
const app = require('express')()
const bodyParser = require("body-parser");
// const PORT = process.env.SERVER_PORT
const cors = require('cors')
require('dotenv').config();
const morgan = require("morgan");

app.use(cors()) // to allow cross origin requests
app.use(bodyParser.json()) // to convert the request into JSON

app.use(morgan("dev")); // configire morgan
process.title = "myapp"

mongoose
    .connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB database Connected...'))
    .catch((err) => console.log(err))

const TodoListRoutes = require('./app/routes/api/todolist')
app.use('/api/todolist', TodoListRoutes)

const userRoutes = require("./app/routes/api/user/user"); //bring in our user routes
app.use("/user", userRoutes);


const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'My API',
      version: '1.0.0',
    },
  },
  apis: ['./app/routes/api/*.js'],
};


// set port, listen for requests
app.listen(process.env.SERVER_PORT, () => console.log(`App listening at http://localhost:${process.env.SERVER_PORT}`))