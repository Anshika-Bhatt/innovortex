let wishlist = [];
let cart = [];

function toggleWishlist(button) {
    const itemName = button.parentElement.querySelector('h3').innerText;
    if (wishlist.includes(itemName)) {
        wishlist = wishlist.filter(item => item !== itemName);
        button.innerText = "❤️ Wishlist";
    } else {
        wishlist.push(itemName);
        button.innerText = "💔 Wishlist";
    }
    console.log("Wishlist: ", wishlist);
}

function addToCart(itemName) {
    if (!cart.includes(itemName)) {
        cart.push(itemName);
        alert(`${itemName} added to cart!`);
    } else {
        alert(`${itemName} is already in the cart.`);
    }
    console.log("Cart: ", cart);
}






let currentSlide = 0; // Track the current slide
const slides = document.querySelectorAll('.banner-slide'); // Get all banner slides

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index); // Show the active slide
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length; // Move to the next slide
    showSlide(currentSlide);
}

// Show the first slide initially
showSlide(currentSlide);

// Change slide every 2 seconds
setInterval(nextSlide, 2000);
