const products = {
  "Ayoma": [
    { name: "Ayoma Rolade Ayam", price: 21000 },
    { name: "Ayoma Rolade api", price: 22000 }
  ],
  "Bartos": [
    { name: "Bartos Beef Burger Mini", price: 11500 },
    { name: "Bartos Nugget", price: 13500 }
  ],
  "Bernardi": [{ name: "Bernardi Roti Mini", price: 28500 }],
  "Bomboe": [{ name: "Bomboe Tomyam", price: 7500 }],
  "Cedea": [
    { name: "Cedea Baso Ikan", price: 27000 },
    { name: "Cedea Bola Salmon", price: 32000 },
    { name: "Cedea Chikuwa", price: 18000 },
    { name: "Cedea Crab Stik", price: 17000 },
    { name: "Cedea Fish Dumpling Cheese", price: 32000 },
    { name: "Cedea Fish Dumpling Chicken", price: 33000 },
    { name: "Cedea Fish Roll", price: 26000 },
    { name: "Cedea Fish Otak - Otak Singapore", price: 30000 },
    { name: "Cedea Steamboat", price: 26000 },
    { name: "Cedea Twister", price: 28000 }
  ],
  "Champ": [
    { name: "Champ Chicken Nugget", price: 22000 },
    { name: "Champ Stik", price: 22000 }
  ],
  "Chikuwa": [{ name: "Chikuwa Fish Stick", price: 32000 }],
  "Del Monte": [
    { name: "Del Monte Extra Hot 1kg", price: 23000 },
    { name: "Del Monte Extra Hot 200g", price: 8500 },
    { name: "Del Monte Saus Tomat 200g", price: 7500 }
  ],
  "Ebi Furai": [{ name: "Ebi Furai Shrimp", price: 30000 }],
  "Fiesta": [
    { name: "Fiesta Cheese Lover", price: 64000 },
    { name: "Fiesta Chicken Crunch", price: 30000 },
    { name: "Fiesta Chicken Wings", price: 64000 },
    { name: "Fiesta Chicken Karage", price: 55000 },
    { name: "Fiesta Chicken Shoestring", price: 23000 }
  ],
  "Geboy": [{ name: "Geboy Sosis Ayam Panjang", price: 19000 }],
  "Joyday": [
    { name: "Joyday Choco Berry", price: 2000 },
    { name: "Joyday Crunch Choco Lava", price: 6000 },
    { name: "Joyday Crunch Chocolate Malt", price: 5000 },
    { name: "Joyday Kokomi", price: 2000 },
    { name: "Joyday Manggo Smoothies", price: 4000 },
    { name: "Joyday Mocha Crispy", price: 4500 },
    { name: "Joyday Mochi Chocolate", price: 3000 },
    { name: "Joyday Susu Kurma", price: 5000 },
    { name: "Joyday Vanilla Milkshake", price: 5000 }
  ],
  "Kanzler": [
    { name: "Kanzler Beef Coctail", price: 53000 },
    { name: "Kanzler Nugget 120g", price: 18000 },
    { name: "Kanzler Nugget Crispy 450g", price: 43000 },
    { name: "Kanzler Single Cheese", price: 8500 },
    { name: "Kanzler Single Cheese Pack", price: 95000 },
    { name: "Kanzler Sosis Small", price: 30000 },
    { name: "Kanzler Stik Nugget Crispy", price: 43000 }
  ],
  "Kerupuk Udang": [{ name: "Kerupuk Udang", price: 16000 }],
  "Korean Odeng": [{ name: "Korean Odeng", price: 30000 }],
  "Mamayo": [{ name: "Mamayo Mayonnaise", price: 7500 }],
  "Minaku": [
    { name: "Minaku Kaki Naga", price: 20000 },
    { name: "Minaku Otak Otak", price: 13000 }
  ],
  "Mini Pao": [
    { name: "Mini Pao Chicken", price: 15000 },
    { name: "Mini Pao Chocolate", price: 15000 },
    { name: "Mini Pao Green Bean", price: 15000 },
    { name: "Mini Pao Beef", price: 15000 }
  ],
  "Mitraku": [
    { name: "Mitraku Shrimp Tail", price: 29000 },
    { name: "Mitraku Steamboat Tomyam 500g", price: 33000 }
  ],
  "Mixed Vegetable": [{ name: "Mixed Vegetable", price: 21000 }],
  "Muantap": [{ name: "Muantap Frankfurer Mini 500g", price: 26000 }],
  "Ngetop": [{ name: "Ngetop Kornet 450g", price: 18000 }],
  "Palmia": [{ name: "Palmia", price: 7000 }],
  "Nala": [{ name: "Pempek Nala", price: 17000 }],
  "Salam": [
    { name: "Salam Sosis Bakar Mini", price: 26000 },
    { name: "Salam Kornet", price: 17000 }
  ],
  "Saos Keju": [{ name: "Saos Keju", price: 23000 }],
  "Slice Beef": [
    { name: "Slice Beef Sirloin", price: 38500 },
    { name: "Slice Beef Tenderloin", price: 38000 }
  ],
  "So Eco": [{ name: "So Eco Nugget 500g", price: 20000 }],
  "So Good": [
    { name: "So Good Alphabet 400g", price: 40000 },
    { name: "So Good Dino", price: 40000 }
  ],
  "Sukoy": [{ name: "Sukoyi Iim", price: 16000 }],
  "Sunfish": [
    { name: "Sunfish Ekor Udang 450g", price: 29000 },
    { name: "Sunfish Kembang Cumi", price: 31000 }
  ],
  "Wahid": [{ name: "Wahid Bakso", price: 20000 }],
  "Yona": [
    { name: "Yona Beef Patties", price: 38000 },
    { name: "Yona Beef Smoked Patties", price: 29000 }
  ]
};
let cart = [];
function showModal(modalId) {
  document.getElementById(modalId).style.display = "block";
}
function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}
function showProductModal(brand) {
  const productList = document.getElementById("productList");
  productList.innerHTML = "";
  if (!products[brand] || products[brand].length === 0) {
    showNotification("⚠️ Produk untuk merek ini belum tersedia");
    return;
  }
  products[brand].forEach((product) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${product.name}</td>
      <td>Rp ${product.price.toLocaleString()}</td>
      <td>
        <button class="add-btn" onclick="addToCart('${brand}', '${product.name.replace(/'/g, "\\'")}')">
          ➕ Tambah
        </button>
      </td>
    `;
    productList.appendChild(row);
  });
  document.getElementById("modalTitle").textContent = brand;
  showModal("productModal");
}
document.addEventListener("DOMContentLoaded", () => {
  showModal("tutorialModal");
  document.querySelectorAll(".brand-grid button").forEach((button) => {
    button.addEventListener("click", () => {
      const brand = button.dataset.brand;
      showProductModal(brand);
    });
  });
  updateCart();
});
function addToCart(brand, productName) {
  const product = products[brand].find((p) => p.name === productName);
  if (!product) {
    showNotification("⚠️ Produk tidak ditemukan");
    return;
  }
  const existingItem = cart.find((item) => item.product.name === productName);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ product, quantity: 1 });
  }
  updateCart();
  showNotification(`🛒 ${productName} ditambahkan ke keranjang`);
}
function removeFromCart(productName) {
  const itemIndex = cart.findIndex((item) => item.product.name === productName);
  if (itemIndex > -1) {
    if (cart[itemIndex].quantity > 1) {
      cart[itemIndex].quantity--;
    } else {
      cart.splice(itemIndex, 1);
    }
    updateCart();
    showNotification(`❌ ${productName} dikurangi dari keranjang`);
  }
}
function clearCart() {
  cart = [];
  updateCart();
  showNotification("🗑 Keranjang berhasil dikosongkan");
}
function updateCart() {
  const cartItems = document.getElementById("cartItems");
  const subtotalElement = document.getElementById("subtotal");
  const cartCount = document.getElementById("cartCount");
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach((item) => {
    const itemElement = document.createElement("div");
    itemElement.className = "cart-item";
    itemElement.innerHTML = `
      <div class="item-info">
        <h4>${item.product.name}</h4>
        <p>Rp ${item.product.price.toLocaleString()} × ${item.quantity}</p>
      </div>
      <button class="remove-btn" onclick="removeFromCart('${item.product.name}')">
        ➖ Kurangi
      </button>
    `;
    cartItems.appendChild(itemElement);
    total += item.product.price * item.quantity;
  });
  subtotalElement.textContent = `Rp ${total.toLocaleString()}`;
  cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
}
function processCheckout() {
  const name = document.getElementById("customerName").value.trim();
  const address = document.getElementById("customerAddress").value.trim();
  if (!name || !address) {
    showNotification("⚠️ Harap isi nama dan alamat lengkap");
    return;
  }
  if (cart.length === 0) {
    showNotification("⚠️ Keranjang belanja masih kosong");
    return;
  }
  showConfirmModal(name, address);
}
function showConfirmModal(name, address) {
  const confirmBody = document.getElementById("confirmBody");
  let content = `
    <h3>Detail Pelanggan</h3>
    <p>Nama: ${name}</p>
    <p>Alamat: ${address}</p>
    <h3>Detail Pesanan</h3>
    <table class="order-table">
      <thead>
        <tr>
          <th>Produk</th>
          <th>Qty</th>
          <th>Harga</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
  `;
  cart.forEach((item) => {
    content += `
      <tr>
        <td>${item.product.name}</td>
        <td>${item.quantity}</td>
        <td>Rp ${item.product.price.toLocaleString()}</td>
        <td>Rp ${(item.product.price * item.quantity).toLocaleString()}</td>
      </tr>
    `;
  });
  const total = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  content += `
      </tbody>
    </table>
    <h4>Total Pesanan: Rp ${total.toLocaleString()}</h4>
    <p style="font-style: italic; color: #fff;">
      Pilih salah satu opsi: "✏️ Edit Pesanan" untuk mengubah, "📤 Kirim ke WhatsApp" untuk mengirim pesanan, atau "🖨 Cetak Data" untuk mencetak data pesanan.
    </p>
  `;
  confirmBody.innerHTML = content;
  showModal("confirmModal");
}
function sendOrder() {
  const name = document.getElementById("customerName").value.trim();
  const address = document.getElementById("customerAddress").value.trim();
  const message = `Halo Barokah Frozen,\nSaya ingin memesan:\n\n${cart.map((item, index) => `${index + 1}. ${item.product.name} (${item.quantity} × Rp ${item.product.price.toLocaleString()})`).join("\n")}\n\nTotal: Rp ${cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0).toLocaleString()}\n\nNama: ${name}\nAlamat: ${address}`;
  window.open(`https://wa.me/62895322496220?text=${encodeURIComponent(message)}`, "_blank");
  closeModal("confirmModal");
  clearCart();
}
function printCustomerData() {
  const printArea = document.getElementById("printArea");
  const printContent = document.getElementById("printContent");
  const name = document.getElementById("customerName").value.trim();
  const address = document.getElementById("customerAddress").value.trim();
  let content = `
    <h3>Data Pelanggan</h3>
    <p>Nama: ${name}</p>
    <p>Alamat: ${address}</p>
    <h3>Daftar Belanja</h3>
    <table>
      <tr>
        <th>No</th>
        <th>Produk</th>
        <th>Jumlah</th>
        <th>Harga Satuan</th>
      </tr>
  `;
  cart.forEach((item, index) => {
    content += `
      <tr>
        <td>${index + 1}</td>
        <td>${item.product.name}</td>
        <td>${item.quantity}</td>
        <td>Rp ${item.product.price.toLocaleString()}</td>
      </tr>
    `;
  });
  content += `</table>`;
  printContent.innerHTML = content;
  document.getElementById("printDate").textContent = new Date().toLocaleDateString("id-ID", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
  window.print();
}
function showNotification(message) {
  const notification = document.getElementById("notification");
  notification.textContent = message;
  notification.style.display = "block";
  setTimeout(() => {
    notification.style.display = "none";
  }, 3000);
}
window.onclick = function (event) {
  const modals = document.querySelectorAll(".modal");
  modals.forEach((modal) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
};
