const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let bookShelf = [];  
let currentId = 1;  


app.get('/books', (req, res) => {
    res.json(bookShelf);  
});


app.get('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);  
    const found = bookShelf.find(book => book.id === bookId);

    if (!found) {
        return res.status(404).json({ message: 'Couldn\'t find that book, sorry.' });
    }

    res.json(found);
});


app.post('/books', (req, res) => {
    const { title, author } = req.body;

    if (!title || !author) {
        
        return res.status(400).json({ error: 'Both title and author are needed to add a book.' });
    }

    const bookToAdd = {
        id: currentId++,  
        title: title.trim(),  
        author: author.trim()
    };

    bookShelf.push(bookToAdd);

    res.status(201).json(bookToAdd);
});


app.put('/books/:id', (req, res) => {
    const idToUpdate = parseInt(req.params.id);
    const { title, author } = req.body;

    let bookToEdit = bookShelf.find(item => item.id === idToUpdate);

    if (!bookToEdit) {
        return res.status(404).json({ message: 'Book not found, can\'t update.' });
    }

    if (typeof title === 'string') {
        bookToEdit.title = title;
    }

    if (typeof author === 'string') {
        bookToEdit.author = author;
    }

    res.json(bookToEdit);
});


app.delete('/books/:id', (req, res) => {
    const deleteId = parseInt(req.params.id);
    const bookIndex = bookShelf.findIndex(book => book.id === deleteId);

    if (bookIndex === -1) {
        return res.status(404).json({ message: 'Book not found, nothing to delete.' });
    }

    bookShelf.splice(bookIndex, 1);

    res.status(204).send();  
});

// Start the server
app.listen(PORT, () => {
    
    console.log(`🚀 Book tracker is live at http://localhost:${PORT}`);
});
