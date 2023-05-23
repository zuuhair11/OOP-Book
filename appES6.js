// Book class
import Book from './Book.js';

// UI class
import UI from './UI.js';

// Event listener for adding a book
const bookForm = document.querySelector('#book-form');
bookForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get the values from the inputs
    const title  = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn   = document.querySelector('#isbn').value;

    // Instantiate new book
    const book = new Book(title, author, isbn);

    // Instaniate new ui
    const ui = new UI();

    // Check if the fields are empty
    if(title === '' || author === '' || isbn === '') {
        // Show alert for error
        ui.showAlert('Fill in all fields please', 'error');

    } else {
        // Add book to list
        ui.addBookToList(book);

        // Clear all fields when the book added successfully
        ui.clearFields();

        // Show alert for success add
        ui.showAlert('The book added successfully', 'success');
    }
})

// Event listener for deleting book
const bookList = document.getElementById('book-list');
bookList.addEventListener('click', function(e) {
    // Instaniate new ui
    const ui = new UI();

    // Check the click on the X
    if(e.target.classList.contains('delete')) {
        // Delete book
        ui.deleteBook(e.target);

        // Show Alert for delete
        ui.showAlert('The book deleted successfully', 'delete');
    }
})