// Book Constructor
function Book(title, author, isbn) {
    this.title  = title;
    this.author = author;
    this.isbn   = isbn;
}

// UI Constructor
function UI() {}

// Add book to list
UI.prototype.addBookToList = function(book) {
    // Access to the list where to put my the infromation
    const list = document.querySelector('#book-list');
    // Create a row
    const row = document.createElement('tr');
    // Insert cols
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
    `
    // Append the row that hold the book's infromation to the list
    list.append(row);   
}

// Clear fields
UI.prototype.clearFields = function() {
    document.getElementById('title').value  = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value   = '';
}

// Show alert error
UI.prototype.showAlert = function(message, className) {
    // Create a div
    const div = document.createElement('div');
    // Add class for the color, after the alert class(for hiding the alert 3)
    div.className = `alert ${className}`;
    // Add the message (as text node)
    div.appendChild(document.createTextNode(message));
    // Get the parent
    const container = document.querySelector('.container');
    // Get the form
    const form = document.querySelector('#book-form');

    // Show the alert
    // Put the div befor the form
    container.insertBefore(div, form);

    // We have to delete the alert after 3s
    setTimeout(function() {
        // Access to the div
        const div = document.querySelector('.alert');
        // Remove it after 3s
        div.remove();

    }, 3000)
}

// Delete book
UI.prototype.deleteBook = function(target) {
    if(target.className === 'delete') {
        target.parentElement.parentElement.remove();
    }
}



// Event listenner for adding a book
const bookForm = document.querySelector('#book-form');
bookForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get the values from the fields
    const title  = document.querySelector('#title').value,
          author = document.querySelector('#author').value,
          isbn   = document.querySelector('#isbn').value;

    // Instantiate a book
    const book = new Book(title, author, isbn);
    
    // Instantiate ui
    const ui = new UI();

    // Validate
    if(title === '' || author === '' || isbn === '') {
        // Show error alert
        ui.showAlert('Please fill in all fields', 'error');

    } else {
        // Add book to list
        ui.addBookToList(book);

        // Show alert success
        ui.showAlert('Book added successfully', 'success');
        
        // Clear fields after book added
        ui.clearFields();
    }
})


// Add event for deleting book
const bookList = document.querySelector('#book-list');
bookList.addEventListener('click', function(e) {
    // Instaniate ui
    const ui = new UI();

    // // Delete book
    ui.deleteBook(e.target);

    // Show alert that the book is deleted
    if(e.target.classList.contains('delete')) {
        ui.showAlert('Book removed successfully', 'success');
    }
})