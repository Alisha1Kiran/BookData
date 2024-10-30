const express = require('express')
const route = express.Router()
const books = require('./../booksList')

// get all books
route.get('/', (req,res) => {
    try {
        res.status(200).json(books);
    } catch (error) {
        res.status(404).json({error:error.message})
    }
})

// get book details by id
route.get('/:id', (req,res) => {
    try{
        const bookID = parseInt(req.params.id);
        console.log("bookID : ", bookID)
        const bookData = books.find(book => book.id == bookID)
        if(!bookData) res.status(404).json({error:"Book not found"})
        res.status(200).json({bookData})
    } catch(error) {
        res.status(404).json({error:error.message})
    }
})




module.exports = route;