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

document.addEventListener('DOMContentLoaded', () => {
});
