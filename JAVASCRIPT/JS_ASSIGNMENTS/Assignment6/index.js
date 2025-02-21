let allBooks = [];
let counter = 0;
const cart = [];
// DOM Elements
const booksGrid = document.getElementById("books-grid");
const loadingMessage = document.getElementById("loading-message");
const errorMessage = document.getElementById("error-message");
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const sortGenreBtn = document.getElementById("sort-genre");
const sortYearBtn = document.getElementById("sort-year");
const sortPagesBtn = document.getElementById("sort-pages");
const cartCounter = document.getElementById("counter");
const shoppingCart = document.getElementById("shopping-cart");
const openShopping = document.querySelector(".shopping");
const closeShopping = document.querySelector(".closeShopping");
const list = document.querySelector(".listCard");
const body = document.querySelector("body");
const total = document.querySelector(".total");
const quantity = document.querySelector(".quantity");
// Fetch books
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

// Display books
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
      <div class="book-content">
        <div class="book-img" 
            style="background-image: url('${book.image}');
            height: 400px;  
            ">
        </div>
        <div class="book-info">
            <h3 class="book-title">${book.title}</h3>
            <p class="book-author">by ${book.author}</p>
            <div class="book-details">
                <span class="book-genre">${book.genre}</span>
                <span class="book-year">${book.year}</span>
                <span class="book-pages">${book.pages} pages</span>
                <span class="book-price">$${book.price.toFixed(2)}</span>
            </div>
            <button class="buy-btn">Buy Now</button>
        </div>
      </div>
    `;

    booksGrid.appendChild(bookCard);
    const buyButton = bookCard.querySelector(".buy-btn");

    buyButton.addEventListener("click", () => {
      addToCart(book);
    });
  });
}
openShopping.addEventListener("click", () => {
  body.classList.add("active");
});
closeShopping.addEventListener("click", () => {
  body.classList.remove("active");
});
// Function to add book to cart
function addToCart(book) {
  const existingBook = cart.find((item) => item.id === book.id);

  if (existingBook) {
    existingBook.quantity += 1;
  } else {
    cart.push({ ...book, quantity: 1 });
  }

  counter++;
  cartCounter.textContent = counter;

  updateCartUI();
}
function updateCartUI() {
  list.innerHTML = "";
  let totalAmount = 0;
  let totalItems = 0;

  cart.forEach((item, index) => {
    totalAmount += item.price * item.quantity;
    totalItems += item.quantity;

    const cartItem = document.createElement("li");
    cartItem.className = "cart-item";
    cartItem.innerHTML = `
      <div class="cart-info">
        <p>Book NAME: ${item.title}</p>
        <p>Book Price: $${(item.price * item.quantity).toFixed(2)}</p>
        <div class="cart-actions">
          Quantity:
          <button class="decrease" data-index="${index}">-</button>
          <span>${item.quantity}</span>
          <button class="increase" data-index="${index}">+</button>
          <button class="remove" data-index="${index}">x</button>
        </div>
      </div>
    `;

    list.appendChild(cartItem);
  });

  total.textContent = `Total: $${totalAmount.toFixed(2)}`;
  quantity.textContent = totalItems;
}

// Attach event listener **once** to the parent container
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("increase")) {
    const index = e.target.dataset.index;
    cart[index].quantity++;
    updateCartUI();
  }

  if (e.target.classList.contains("decrease")) {
    const index = e.target.dataset.index;
    if (cart[index].quantity > 1) {
      cart[index].quantity--;
    } else {
      cart.splice(index, 1);
    }
    updateCartUI();
  }

  if (e.target.classList.contains("remove")) {
    const index = e.target.dataset.index;
    cart.splice(index, 1);
    counter--;
    cartCounter.textContent = counter;
    updateCartUI();
  }
});

// Sorting functions
function sortByGenre() {
  const sortedBooks = [...allBooks].sort((a, b) =>
    a.genre.localeCompare(b.genre)
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
