// Book Constructor
class Book {
    constructor(title, author, isbn) {
        this.title  = title;
        this.author = author;
        this.isbn   = isbn;
    }
}


// UI Constructor
class UI {
    addBookToList(book) {
        // Access to the list
        const list = document.querySelector('#book-list');
        // Create a row
        const row = document.createElement('tr');
        // Insert new book columns
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="delete">X</a></td>
        `;
        // Append the row inside my list to show up
        list.appendChild(row);
    }

    // Clear fields when the book added
    clearFields() {
        document.querySelector('#title').value  = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value   = '';
    }

    // Show alert for adding new book
    showAlert(message, className) {
        // Create a div
        const div = document.createElement('div');
        // Add the class to the div
        div.className = `alert ${className}`;
        // Add the message that will show up in div
        div.append(document.createTextNode(message));

        // Access to the container
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        // => to put the div before the form
        container.insertBefore(div, form);
        
        // Delete the alert after 3 seconds
        setTimeout(function() {
            document.querySelector('.alert').remove();

        }, 3000);
    }

    // Delete book
    deleteBook(target) {
        target.parentElement.parentElement.remove();
    }
}

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