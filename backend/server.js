const express = require('express');
const mongoose = require('mongoose');

const PORT = 3030;
const app = express();
const todoRoutes = require('./routes/todoRoutes')

const mongoConnectionString = 'mongodb://mongo:mongo@localhost/todolist?authSource=admin';
const connectionsOptions = {
    useUnifiedTopology: true, //new monitoring system > 3.3
    useNewUrlParser: true,
    useFindAndModify: false
}

mongoose.connect(mongoConnectionString, connectionsOptions)
    .then(() => console.log('Connected successfully'))
    .catch((err) => console.error(err));

app.use(express.json());
app.use('/todos', todoRoutes);


app.listen(PORT, () => {
    console.log(`The server is listening on port: ${PORT}`);
})