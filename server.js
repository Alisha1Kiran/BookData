const express = require('express');
const server = new express;
const port = 4000;
const books = require('./routes/books.js')

server.get('/', (req, res) => {
    res.send("Hello !");
})
server.use('/books', books)

server.listen(port, () => {
    console.log("Server started")
})