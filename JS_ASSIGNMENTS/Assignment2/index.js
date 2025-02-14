const productList = document.getElementById("product-list");

fetch("http://localhost:3000/products")
  .then((response) => response.json())
  .then((products) => {
    products.forEach((product) => {
      const productDiv = document.createElement("div");
      productDiv.className = "product";

      productDiv.innerHTML = `
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <p class="price">$${product.price.toFixed(2)}</p>
        <p><strong>Category:</strong> ${product.category}</p>
        <p><strong>In Stock:</strong> ${product.stock}</p>
      `;

      productList.appendChild(productDiv);
    });
  })
  .catch((error) => console.error("Error fetching products:", error));
