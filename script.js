let cart = [];
let productsData = {}; 

const productDatabase = {
    'Ayoma': [
        {name: 'Ayam Goreng', price: 25000},
        {name: 'Nugget Ayam', price: 18000}
    ],
    'Bartos': [
        {name: 'Sosis Bratwurst', price: 35000},
        {name: 'Smoked Beef', price: 28000}
    ],
};

function showNotification(message, duration = 3000) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.style.display = 'block';
    setTimeout(() => notification.style.display = 'none', duration);
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cartItems');
    const cartCount = document.getElementById('cartCount');
    const subtotal = document.getElementById('subtotal');
    
    cartItems.innerHTML = '';
    let total = 0;
    
    cart.forEach((item, index) => {
        total += item.price * item.quantity;
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <span>${item.name} (${item.quantity})</span>
            <span>Rp ${(item.price * item.quantity).toLocaleString()}</span>
            <button onclick="removeFromCart(${index})">✖</button>
        `;
        cartItems.appendChild(itemElement);
    });
    
    cartCount.textContent = cart.length;
    subtotal.textContent = `Rp ${total.toLocaleString()}`;
}

function addToCart(productName, price) {
    const existingItem = cart.find(item => item.name === productName);
    if(existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({name: productName, price: price, quantity: 1});
    }
    updateCartDisplay();
    showNotification('Produk ditambahkan ke keranjang!');
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartDisplay();
}

function clearCart() {
    cart = [];
    updateCartDisplay();
    showNotification('Keranjang dikosongkan!');
}

function showModal(brand) {
    const modal = document.getElementById('productModal');
    const productList = document.getElementById('productList');
    document.getElementById('modalTitle').textContent = brand;
    
    productList.innerHTML = '';
    
    productDatabase[brand].forEach(product => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${product.name}</td>
            <td>Rp ${product.price.toLocaleString()}</td>
            <td>
                <button onclick="addToCart('${product.name}', ${product.price})">
                    Tambah
                </button>
            </td>
        `;
        productList.appendChild(row);
    });
    
    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('productModal').style.display = 'none';
}

function generateInvoiceContent() {
    const customerName = document.getElementById('customerName').value;
    const customerAddress = document.getElementById('customerAddress').value;
    
    return `
        <h1>Barokah Frozen Food</h1>
        <h2>Invoice Pembelian</h2>
        <p>Nama: ${customerName}</p>
        <p>Alamat: ${customerAddress}</p>
        <h3>Daftar Belanja:</h3>
        <ul>
            ${cart.map(item => `
                <li>${item.name} (${item.quantity}) - Rp ${(item.price * item.quantity).toLocaleString()}</li>
            `).join('')}
        </ul>
        <h3>Total: ${document.getElementById('subtotal').textContent}</h3>
        <p>Terima kasih telah berbelanja!</p>
    `;
}

function processCheckout() {
    if(cart.length === 0) {
        showNotification('Keranjang kosong! Tambahkan produk terlebih dahulu');
        return;
    }
    
    const invoiceContent = generateInvoiceContent();
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <html>
            <head>
                <title>Invoice Barokah Frozen Food</title>
                <style>
                    body { font-family: Arial, sans-serif; padding: 20px }
                    h1 { color: #2B3499; }
                    ul { list-style: none; padding: 0 }
                    li { margin: 10px 0 }
                </style>
            </head>
            <body>
                ${invoiceContent}
                <script>
                    window.print();
                    window.onafterprint = function() {
                        window.close();
                    }
                <\/script>
            </body>
        </html>
    `);
    printWindow.document.close();
    
    clearCart();
}

window.onclick = function(event) {
    const modal = document.getElementById('productModal');
    if(event.target === modal) {
        modal.style.display = 'none';
    }
}
