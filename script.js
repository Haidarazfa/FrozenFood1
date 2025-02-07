const products = {
    "Ayoma": [
        { name: "Ayoma Rolade Ayam", price: 21000 },
        { name: "Ayoma Rolade api", price: 22000 }
    ],
};

let cart = [];

function showModal(brand) {
    const productTableBody = document.querySelector('#product-table tbody');
    productTableBody.innerHTML = '';

    products[brand].forEach(product => {
        const row = productTableBody.insertRow();
        row.insertCell(0).textContent = product.name;
        row.insertCell(1).textContent = `Rp ${product.price.toLocaleString()}`;
        const addButton = document.createElement('button');
        addButton.textContent = 'Tambahkan';
        addButton.onclick = () => addToCart(brand, product.name);
        row.insertCell(2).appendChild(addButton);
    });

    document.getElementById('brand-title').textContent = brand;
    document.getElementById('product-modal').style.display = 'block';
}

function closeTutorial() {
    document.getElementById('tutorial-modal').style.display = 'none';
}

window.onclick = function(event) {
    const tutorialModal = document.getElementById('tutorial-modal');
    if (event.target === tutorialModal) {
        tutorialModal.style.display = 'none';
    }
}

function addToCart(brand, productName) {
    const product = products[brand].find(p => p.name === productName);
    const cartItem = cart.find(item => item.product.name === productName);

    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({ product, quantity: 1 });
    }

    updateCart();
    showPopup('addPopup'); 
}

function removeFromCart(productName) {
    const cartItemIndex = cart.findIndex(item => item.product.name === productName);

    if (cartItemIndex > -1) {
        const cartItem = cart[cartItemIndex];
        if (cartItem.quantity > 1) {
            cartItem.quantity--;
        } else {
            cart.splice(cartItemIndex, 1);
        }
        updateCart();
        showPopup('removePopup'); 
    }
}

function updateCart() {
    const cartBody = document.getElementById('cart-body');
    cartBody.innerHTML = '';
    let subtotal = 0;

    if (cart.length === 0) {
        const row = cartBody.insertRow();
        const emptyCell = row.insertCell(0);
        emptyCell.colSpan = 4;
        emptyCell.className = 'empty-cart';
        emptyCell.textContent = 'Keranjang belanja kosong';
    } else {
        cart.forEach(item => {
            const row = cartBody.insertRow();
            row.insertCell(0).textContent = item.product.name;
            row.insertCell(1).textContent = item.quantity;

            const itemTotalPrice = item.product.price * item.quantity;
            row.insertCell(2).textContent = `Rp ${itemTotalPrice.toLocaleString()}`;

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Kurangi';
            removeButton.onclick = () => removeFromCart(item.product.name);
            row.insertCell(3).appendChild(removeButton);

            subtotal += itemTotalPrice;
        });
    }

    document.getElementById('subtotal').textContent = `Subtotal: Rp ${subtotal.toLocaleString()}`;
}

function showPopup(popupId) {
    const popup = document.getElementById(popupId);
    const messages = {
        addPopup: ['🛒 Ditambahkan ke Keranjang!', '🎉 Yeay! Item ditambahkan', '✨ Berhasil menyimpan pesanan'],
        removePopup: ['❌ Dihapus dari Keranjang', '🗑️ Item dihapus', '👋 Sampai jumpa item...']
    };
    
    const randomIndex = Math.floor(Math.random() * messages[popupId].length);
    popup.innerHTML = `<span class="emoji">${messages[popupId][randomIndex].split(' ')[0]}</span>
                      <span>${messages[popupId][randomIndex].slice(2)}</span>`;
    
    popup.style.display = 'flex';
    setTimeout(() => {
        popup.style.display = 'none';
    }, 2000);
}

function checkout() {
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;

    if (name === '' || address === '') {
        alert('Nama dan alamat harus diisi!');
        return;
    }

    const originalButtonText = document.querySelector('.cart-button').innerHTML;
    document.querySelector('.cart-button').innerHTML = 
        '<div class="loading-dots"><span></span><span></span><span></span></div> Memproses...';

    setTimeout(() => {
        let subtotal = 0;
        cart.forEach(item => {
            subtotal += item.product.price * item.quantity;
        });

        let orderDetails = `Nama: ${name}\nAlamat: ${address}\nPesanan:\n`;
        cart.forEach((item, index) => {
            orderDetails += `${index + 1}. ${item.product.name} - ${item.quantity} - Rp ${(item.product.price * item.quantity).toLocaleString()}\n`;
        });
        orderDetails += `Subtotal: Rp ${subtotal.toLocaleString()}`;

        const encodedMessage = encodeURIComponent(orderDetails);
        const whatsappUrl = `https://wa.me/62895322496220?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');

        cart = [];
        updateCart();
        document.getElementById('name').value = '';
        document.getElementById('address').value = '';

        document.querySelector('.cart-button').innerHTML = originalButtonText;
    }, 1000);
}

document.addEventListener('DOMContentLoaded', () => {

});
