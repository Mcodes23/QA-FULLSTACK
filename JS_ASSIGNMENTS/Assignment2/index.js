// Select the div where products will be displayed
const productList = document.getElementById("product-list");

// Fetch products from the JSON server
fetch("http://localhost:3000/products")
  .then((response) => response.json())
  .then((products) => {
    products.forEach((product) => {
      // Create a div for each product
      const productDiv = document.createElement("div");
      productDiv.className = "product";

      // Populate the product div with details
      productDiv.innerHTML = `
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <p class="price">$${product.price.toFixed(2)}</p>
        <p><strong>Category:</strong> ${product.category}</p>
        <p><strong>In Stock:</strong> ${product.stock}</p>
      `;

      // Append the product div to the product list container
      productList.appendChild(productDiv);
    });
  })
  .catch((error) => console.error("Error fetching products:", error));
