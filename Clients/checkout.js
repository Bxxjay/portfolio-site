import { products } from "./oreo.js"; // your products list
import { cartMarkets } from "./oreo.js"; // cart items
import { hamburger, navLinks } from "./oreo.js";

// Hamburger toggle
hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Wait for DOM
document.addEventListener("DOMContentLoaded", () => {
    const mainEl = document.getElementById("main");
    if (!mainEl) {
        console.error("#main not found!");
        return;
    }

    // Initialize cart HTML
    let cartHTML = "";

    cartMarkets.forEach(item => {
        const product = products.find(p => p.id === item.productId);
        if (!product) return; // skip if product not found

        cartHTML += `
        <div class= "random">
        <div class="date-details">
            <h2>Delivery Date: <span class="date-time">Tuesday, March 24</span></h2>
        </div>
        <div class="main-sub">
            <div class="items">
                <img src="${product.img}" alt="${product.name}">
            </div>
            <div class="internal">
                <p>${product.name}</p>
                <p>$${(product.price / 100).toFixed(2)}</p>
                <p>
                    Quantity: <span>${item.quantity}</span>
                    <a href="#" class="update">Update</a>
                    <a href="#" class="delete">Delete</a>
                </p>
            </div>
            <div class="subordinate">
                <p>Choose a delivery option:</p>
                <form>
                    <label class="option">
                        <input type="radio" name="delivery-${item.productId}" checked>
                        <span class="custom-radio"></span>
                        <div class="wait">
                            <p class="date">Wednesday, March 25</p>
                            <p class="pricefree">FREE Shipping</p>
                        </div>
                    </label>
                    <label class="option">
                        <input type="radio" name="delivery-${item.productId}">
                        <span class="custom-radio"></span>
                        <div class="wait">
                            <p class="date">Thursday, March 26</p>
                            <p class="pricedollars">$6.99 - Shipping</p>
                        </div>
                    </label>
                    <label class="option">
                        <input type="radio" name="delivery-${item.productId}">
                        <span class="custom-radio"></span>
                        <div class="wait">
                            <p class="date">Saturday, April 7</p>
                            <p class="pricedollars">$4.99 - Shipping</p>
                        </div>
                    </label>
                </form>
            </div>
        </div>
        </div>
        `;
    });

    // Insert into DOM
    mainEl.innerHTML = cartHTML;
});