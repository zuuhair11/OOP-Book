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


export default UI;
