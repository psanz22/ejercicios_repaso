'use strict';

const container = document.querySelector('.products');
const cartContainer = document.querySelector('.table');
let products = [];
let cart = [];

const getApi = () => {
  fetch('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .then((data) => {
      saveLS(JSON.stringify(data));
      products = data;
      renderProducts(products);
    });
};

const handleClick = (ev) => {
  const clickedId = ev.currentTarget.id;
  let foundProduct = [];
  for (const product of productsLS) {
    if (product.id === parseInt(clickedId)) {
      foundProduct = product;
    }
  }

  cart.push({
    id: foundProduct.id,
    name: foundProduct.title,
    price: foundProduct.price,
    quantity: 1,
  });
  console.log('cart', cart);

  renderCart();
};

const addProduct = () => {
  const productContainer = document.querySelectorAll('.product');

  for (let product of productContainer) {
    product.addEventListener('click', handleClick);
  }
};

const saveLS = (products) => {
  localStorage.setItem('products', products);
};

const productsLS = JSON.parse(localStorage.getItem('products'));

const renderProducts = (productsLS) => {
  let html = ``;
  for (let product of productsLS) {
    html += `<div class="product" id="${product.id}">
            <img
              src="${product.image}"
            />
            <h3>${product.title}</h3>
            <p>${product.price} €</p>
            <button class="add">Añadir a la cesta</button>
          </div>`;
  }
  container.innerHTML = html;
  addProduct();
};

const getQuantityCart = () => {
  let quantity = 0;
};

const getTotalPrice = () => {
  let total = 0;
  for (let item of cart) {
    total += item.price * item.quantity;
  }
  return total;
};

const renderCart = () => {
  let html = ` <tr>
              <th>Producto</th>
              <th>Precio</th>
              <th>Unidades</th>
              <th>Total</th>
            </tr>`;
  for (let product of cart) {
    html += ` <tr>
              <th>${product.name}</th>
              <th>${product.price}</th>
              <th>${product.quantity}</th>
              <th>total</th>
            </tr>`;
  }
  cartContainer.innerHTML = html;
};

if (productsLS) {
  renderProducts(productsLS);
} else {
  getApi();
}
