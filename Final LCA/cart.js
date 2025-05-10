document.addEventListener('DOMContentLoaded', () => {
    const cartContainer = document.getElementById('cart-container');
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    if (cartItems.length === 0) {
        cartContainer.innerHTML = '<p style="padding: 40px; font-size: 18px;">Your cart is empty.</p>';
        return;
    }

    let totalPrice = 0;

    cartItems.forEach(item => {
        totalPrice += item.price * item.quantity;

        const itemDiv = document.createElement('div');
        itemDiv.classList.add('product-details-container');
        itemDiv.style.maxWidth = '1000px';
        itemDiv.style.margin = '20px auto';

        itemDiv.innerHTML = `
            <div class="product-image">
                <img src="${item.image}" alt="${item.productName}">
            </div>
            <div class="product-info">
                <h1>${item.productName}</h1>
                <p class="price">₹${item.price} × ${item.quantity} = ₹${item.price * item.quantity}</p>
                <p class="description">
                    <strong>Color:</strong> ${item.color}<br>
                    <strong>Quantity:</strong> ${item.quantity}
                </p>
            </div>
        `;

        cartContainer.appendChild(itemDiv);
    });

    
    const totalDiv = document.createElement('div');
    totalDiv.style.textAlign = 'right';
    totalDiv.style.margin = '20px auto';
    totalDiv.style.maxWidth = '1000px';
    totalDiv.style.fontSize = '20px';
    totalDiv.style.fontWeight = 'bold';
    totalDiv.textContent = `Total Price: ₹${totalPrice}`;
    cartContainer.appendChild(totalDiv);
});
