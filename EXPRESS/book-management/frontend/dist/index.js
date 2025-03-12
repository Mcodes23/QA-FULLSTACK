"use strict";
document.addEventListener("DOMContentLoaded", () => {
    fetchBooks();
});
async function fetchBooks() {
    const booksListElement = document.getElementById("books-list");
    if (!booksListElement) {
        console.error("Could not find books-list element");
        return;
    }
    try {
        // Fetch books from your backend API
        const response = await fetch("http://localhost:5000/api/events");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const books = await response.json();
        if (!books || books.length === 0) {
            booksListElement.innerHTML = "<p>No books available.</p>";
            return;
        }
        // Create HTML for each book
        const booksHTML = books
            .map((book) => `
      <div class="book-card">
        <img src="${book.image}" alt="${book.title}" class="book-image">
        <div class="book-details">
          <h2>${book.title}</h2>
          <p><strong>Author:</strong> ${book.author}</p>
          <p><strong>Genre:</strong> ${book.genre}</p>
          <p><strong>Year:</strong> ${book.year}</p>
          <p><strong>Price:</strong> $${book.price.toFixed(2)}</p>
          <p>${book.description}</p>
        </div>
       
      </div>
    `)
            .join("");
        // Add the books to the page
        booksListElement.innerHTML = booksHTML;
    }
    catch (error) {
        console.error("Error fetching books:", error);
        if (booksListElement) {
            booksListElement.innerHTML =
                "<p>Error loading books. Please try again later.</p>";
        }
    }
}
//# sourceMappingURL=index.js.map