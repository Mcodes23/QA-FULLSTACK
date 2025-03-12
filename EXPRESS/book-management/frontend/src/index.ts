interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  year: number;
  pages: number;
  publisher: string;
  description: string;
  image: string;
  price: number;
}

document.addEventListener("DOMContentLoaded", () => {
  fetchBooks();

  document
    .getElementById("filter-genre")
    ?.addEventListener("change", fetchBooks);
  document.getElementById("search-btn")?.addEventListener("click", searchBooks);
});

// Fetch books from the API
async function fetchBooks(): Promise<void> {
  const booksListElement = document.getElementById("books-list");
  if (!booksListElement) return;

  const genre =
    (document.getElementById("filter-genre") as HTMLSelectElement)?.value ||
    "all";

  try {
    const response = await fetch(
      `http://localhost:5000/api/books?genre=${genre}`
    );
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const books: Book[] = await response.json();
    displayBooks(books);
  } catch (error) {
    console.error("Error fetching books:", error);
    booksListElement.innerHTML =
      "<p>Error loading books. Please try again later.</p>";
  }
}

// Search books by title 
async function searchBooks(): Promise<void> {
  const searchInput = document.getElementById(
    "search-input"
  ) as HTMLInputElement;
  if (!searchInput) return;

  const searchTerm = searchInput.value
    .toLowerCase()
    .trim()
    .replace(/[^0-9a-z]/gi, "");
  const genre =
    (document.getElementById("filter-genre") as HTMLSelectElement)?.value ||
    "all";
  const booksListElement = document.getElementById("books-list");
  if (!booksListElement) return;

  try {
    const response = await fetch(
      `http://localhost:5000/api/books?genre=${genre}&search=${searchTerm}`
    );
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const books = await response.json();
    displayBooks(books);
  } catch (error) {
    console.error("Error searching books:", error);
    booksListElement.innerHTML =
      "<p>Error searching books. Please try again later.</p>";
  }
}

// Function to display books
function displayBooks(books: Book[]): void {
  const booksListElement = document.getElementById("books-list");
  if (!booksListElement) return;

  if (books.length === 0) {
    booksListElement.innerHTML = "<p>No books found.</p>";
    return;
  }

  const booksHTML = books
    .map(
      (book) => `
      <div class="book-card">
        <img src="${book.image}" alt="${book.title}" class="book-image">
        <div class="book-details">
          <h2>${book.title}</h2>
          <p><strong>Author:</strong> ${book.author}</p>
          <p><strong>Genre:</strong> ${book.genre}</p>
          <p><strong>Year:</strong> ${book.year}</p>
          <p><strong>Price:</strong> $${book.price.toFixed(2)}</p>
          <p>${book.description}</p>
          <button class="buy-btn">Add to Cart</button>
        </div>
      </div>
    `
    )
    .join("");

  booksListElement.innerHTML = booksHTML;
}
