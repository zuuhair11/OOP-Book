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
        alert('Fill in all fields please');

    } else {
        // Add book to list
        ui.addBookToList(book);

        // Clear all fields when the book added successfully
        ui.clearFields();

    }
})