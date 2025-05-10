// Select elements
const addToCartBtn = document.querySelector('.add-to-cart');
const popup = document.getElementById('popup');
const confirmBtn = document.getElementById('confirm-btn');
const cancelBtn = document.getElementById('cancel-btn');
const quantityInput = document.getElementById('quantity');
const colorSelect = document.getElementById('color');


function confirmSelection() {
    const quantity = quantityInput.value;
    const color = colorSelect.value;

    const item = {
        productName: 'Couple Rings',
        quantity: Number(quantity),
        color: color,
        price: 2099,
        image: 'https://senava.co.in/cdn/shop/files/CoupleRings.png?v=1720680862'
    };

    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push(item);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    
    window.location.href = 'cart.html';
}


addToCartBtn.addEventListener('click', () => {
    popup.style.display = 'flex';
});


confirmBtn.addEventListener('click', () => {
    confirmSelection();
});


cancelBtn.addEventListener('click', () => {
    popup.style.display = 'none';
});


document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        popup.style.display = 'none';
    }
});


popup.addEventListener('mouseover', () => {
    popup.classList.add('hovered');
});
popup.addEventListener('mouseout', () => {
    popup.classList.remove('hovered');
});