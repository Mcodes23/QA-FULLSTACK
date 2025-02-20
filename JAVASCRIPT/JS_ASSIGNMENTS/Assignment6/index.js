let allBooks = [];

// DOM Elements
const booksGrid = document.getElementById("books-grid");
const loadingMessage = document.getElementById("loading-message");
const errorMessage = document.getElementById("error-message");
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const sortGenreBtn = document.getElementById("sort-genre");
const sortYearBtn = document.getElementById("sort-year");
const sortPagesBtn = document.getElementById("sort-pages");
// fetch books
async function fetchBooks() {
  try {
    loadingMessage.style.display = "block";
    errorMessage.style.display = "none";
    booksGrid.innerHTML = "";

    const response = await fetch("http://localhost:3000/library");
    if (!response.ok) {
      throw new Error("Failed to fetch books");
    }

    allBooks = await response.json();
    displayBooks(allBooks);
  } catch (error) {
    console.error("Error fetching books:", error);
    errorMessage.style.display = "block";
    errorMessage.textContent = `Error: ${error.message}`;
  } finally {
    loadingMessage.style.display = "none";
  }
}
function displayBooks(books) {
  booksGrid.innerHTML = "";

  if (books.length === 0) {
    booksGrid.innerHTML =
      '<p class="no-results">No books found matching your criteria.</p>';
    return;
  }

  books.forEach((book) => {
    const bookCard = document.createElement("div");
    bookCard.className = "book-card";

    bookCard.innerHTML = `
        <div class="book-img" 
            style="background-image: url('${book.image}'); 
                   background-size: cover; 
                   background-position: center; 
                   height: 750px;">
        </div>
            <div class="book-info">
                <h3 class="book-title">${book.title}</h3>
                <p class="book-author">by ${book.author}</p>
                <div class="book-details">
                    <span class="book-genre">${book.genre}</span>
                    <span class="book-year">${book.year}</span>
                    <span class="book-pages">${book.pages} pages</span>
                </div>
            </div>
        `;

    booksGrid.appendChild(bookCard);
  });
}
function sortByGenre() {
  const sortedBooks = [...allBooks].sort(
    (a, b) => a.genre.localeCompare(b.genre) // storing strings alphabetically
  );
  displayBooks(sortedBooks);
}

function sortByYear() {
  const sortedBooks = [...allBooks].sort((a, b) => a.year - b.year);
  displayBooks(sortedBooks);
}

function sortByPages() {
  const sortedBooks = [...allBooks].sort((a, b) => a.pages - b.pages);
  displayBooks(sortedBooks);
}

// Search function
function searchBooks() {
  const searchTerm = searchInput.value
    .toLowerCase()
    .trim()
    .replace(/[^0-9a-z]/gi, "");

  if (!searchTerm) {
    displayBooks(allBooks);
    return;
  }

  const filteredBooks = allBooks.filter((book) =>
    book.title
      .toLowerCase()
      .replace(/[^0-9a-z]/gi, "")
      .includes(searchTerm)
  );

  displayBooks(filteredBooks);
}

// Event Listeners
document.addEventListener("DOMContentLoaded", fetchBooks);

sortGenreBtn.addEventListener("click", sortByGenre);
sortYearBtn.addEventListener("click", sortByYear);
sortPagesBtn.addEventListener("click", sortByPages);

searchBtn.addEventListener("click", searchBooks);
searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    searchBooks();
  }
});
