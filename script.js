// Store books in an array
let books = [];

// Function to display books
function displayBooks() {
    const bookListContainer = document.getElementById('bookList');
    bookListContainer.innerHTML = ''; // Clear previous content

// Group books by year
const booksByYear = groupBooksByYear(books);


for (let year in booksByYear) {
    const yearSection = document.createElement('div');
    yearSection.innerHTML = `<h3>${year}</h3>`;
// Sort alphabetically by title
const sortedBooks = booksByYear[year].sort((a, b) => a.name.localeCompare(b.name));

    sortedBooks.forEach(book => {
    const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');
        bookDiv.innerHTML = `<h3>${book.name}</h3><p>by ${book.author}</p>`;
        yearSection.appendChild(bookDiv);
    });

    bookListContainer.appendChild(yearSection);
    }
}

//group books by year
function groupBooksByYear(books) {
    return books.reduce((acc, book) => {
        if (!acc[book.year]) acc[book.year] = [];
        acc[book.year].push(book);
        return acc;
    }, {});
}

document.getElementById('bookForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get input values
    const bookName = document.getElementById('bookName').value;
    const author = document.getElementById('author').value;
    const year = document.getElementById('year').value;

    // Add new book to the books array
    books.push({
        name: bookName,
        author: author,
        year: parseInt(year)
    });

    // Clear the form inputs
    document.getElementById('bookName').value = '';
    document.getElementById('author').value = '';
    document.getElementById('year').value = '';

    // Display the updated book list
    displayBooks();
});

// Initial display
displayBooks();
