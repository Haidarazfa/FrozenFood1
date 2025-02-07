let cart = [];

function showModal(brand) {
    const modal = document.getElementById('productModal');
    const productList = document.getElementById('productList');
    const modalTitle = document.getElementById('modalTitle');
    
    productList.innerHTML = '';
    modalTitle.textContent = brand;
    
    products[brand].forEach(product => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${product.name}</td>
            <td>Rp ${product.price.toLocaleString()}</td>
            <td><button onclick="addToCart('${brand}', '${product.name}')">➕ Tambah</button></td>
        `;
        productList.appendChild(row);
    });
    
    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('productModal').style.display = 'none';
}

function addToCart(brand, productName) {
    const product = products[brand].find(p => p.name === productName);
    const existingItem = cart.find(item => item.product.name === productName);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ product, quantity: 1 });
    }
    
    updateCart();
    showNotification(`🛒 ${productName} ditambahkan`);
}

function removeFromCart(productName) {
    const itemIndex = cart.findIndex(item => item.product.name === productName);
    
    if (itemIndex > -1) {
        if (cart[itemIndex].quantity > 1) {
            cart[itemIndex].quantity--;
        } else {
            cart.splice(itemIndex, 1);
        }
    }
    
    updateCart();
    showNotification(`❌ ${productName} dikurangi`);
}

function clearCart() {
    cart = [];
    updateCart();
    showNotification('🗑 Keranjang dikosongkan');
}

function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const subtotalElement = document.getElementById('subtotal');
    const cartCount = document.getElementById('cartCount');
    let subtotal = 0;
    
    cartItems.innerHTML = '';
    
    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <div>
                <h4>${item.product.name}</h4>
                <p>Rp ${item.product.price.toLocaleString()} x ${item.quantity}</p>
            </div>
            <div>
                <button onclick="removeFromCart('${item.product.name}')">➖ Kurangi</button>
            </div>
        `;
        cartItems.appendChild(itemElement);
        subtotal += item.product.price * item.quantity;
    });
    
    subtotalElement.textContent = `Rp ${subtotal.toLocaleString()}`;
    cartCount.textContent = cart.reduce((acc, item) => acc + item.quantity, 0);
}

function processCheckout() {
    const name = document.getElementById('customerName').value;
    const address = document.getElementById('customerAddress').value;
    
    if (!name || !address) {
        showNotification('⚠️ Harap isi nama dan alamat');
        return;
    }
    
    if (cart.length === 0) {
        showNotification('⚠️ Keranjang belanja kosong');
        return;
    }
    
    const message = `Halo Barokah Frozen,\nSaya ingin memesan:\n\n${cart.map((item, index) => 
        `${index + 1}. ${item.product.name} (${item.quantity} x Rp ${item.product.price.toLocaleString()})`
    ).join('\n')}\n\nTotal: Rp ${cart.reduce((acc, item) => acc + (item.product.price * item.quantity), 0).toLocaleString()}\n\nNama: ${name}\nAlamat: ${address}`;
    
    window.open(`https://wa.me/62895322496220?text=${encodeURIComponent(message)}`, '_blank');
    clearCart();
}

function showNotification(text) {
    const notification = document.getElementById('notification');
    notification.textContent = text;
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}

window.onclick = function(event) {
    const modal = document.getElementById('productModal');
    if (event.target === modal) {
        closeModal();
    }
}

document.addEventListener('DOMContentLoaded', updateCart);
