document.addEventListener("DOMContentLoaded", () => {
  const cartIcon = document.getElementById("cart-icon");
  const cartModal = document.getElementById("cart-modal");
  const closeCartButton = document.getElementById("close-cart");
  const cartItemsContainer = document.getElementById("cart-items");
  const cartCount = document.getElementById("cart-count");

  let cart = [];

  // Function to update cart count
  function updateCartCount() {
    cartCount.textContent = cart.length;
  }

  // Function to render cart items
  function renderCartItems() {
    cartItemsContainer.innerHTML = "";
    cart.forEach((item, index) => {
      const itemDiv = document.createElement("div");
      itemDiv.classList.add("item");
      itemDiv.innerHTML = `
                <div class="image">
                    <img src="images/${item.name.toLowerCase()}.png" alt="${
        item.name
      }">
                    <div class="name">${item.name}</div>
                    <div class="totalPrice">${item.price}$</div>
                    <button class="remove-item" data-index="${index}">R</button>
                </div>
            `;
      cartItemsContainer.appendChild(itemDiv);
    });

    // Add event listeners to remove buttons
    document.querySelectorAll(".remove-item").forEach((button) => {
      button.addEventListener("click", (event) => {
        const index = event.target.getAttribute("data-index");
        cart.splice(index, 1); // Remove item from cart
        updateCartCount();
        renderCartItems(); // Re-render cart items
      });
    });
  }

  // Add event listener to add to cart buttons
  document.querySelectorAll(".addCart").forEach((button) => {
    button.addEventListener("click", (event) => {
      const articleContainer = event.target.closest(".article-container");
      const itemName = articleContainer.getAttribute("data-name");
      const itemPrice = articleContainer.getAttribute("data-price");

      cart.push({ name: itemName, price: itemPrice });
      updateCartCount();
      renderCartItems();
    });
  });

  // Show cart modal
  cartIcon.addEventListener("click", () => {
    cartModal.style.display = "block";
    renderCartItems();
  });

  // Close cart modal
  closeCartButton.addEventListener("click", () => {
    cartModal.style.display = "none";
  });

  // Close cart modal when clicking outside of it
  window.addEventListener("click", (event) => {
    if (event.target === cartModal) {
      cartModal.style.display = "none";
    }
  });
});
