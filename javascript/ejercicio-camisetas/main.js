'use strict';

const container = document.querySelector('.products');
const cartContainer = document.querySelector('.table');
let products = [];
let cart = [];
const productsLS = JSON.parse(localStorage.getItem('products'));

const saveLS = (products) => {
  localStorage.setItem('products', products);
};

const getApi = () => {
  fetch('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .then((data) => {
      saveLS(JSON.stringify(data));
      products = data;
      renderProducts(products);
    });
};

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

const handleClick = (ev) => {
  const clickedId = ev.currentTarget.id;
  let foundItem;
  for (let item of cart) {
    if (item.id === parseInt(clickedId)) {
      foundItem = item;
    }
  }
  console.log('ffff', foundItem);

  if (foundItem === undefined) {
    let foundProduct;
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
  } else {
    foundItem.quantity += 1;
  }

  renderCart();
};

const addProduct = () => {
  const productContainer = document.querySelectorAll('.product');

  for (let product of productContainer) {
    product.addEventListener('click', handleClick);
  }
};

const getTotalPrice = () => {
  let total = 0;
  for (let item of cart) {
    total += item.price * item.quantity;
  }
  return total;
};

const handleClickButtonQuantity = (ev) => {
  const clickedButton = ev.target.id;
  console.log('clicked', clickedButton);
  for (let item of cart) {
    if (clickedButton === `button-b ${item.id}`) {
      console.log('una mas');

      item.quantity += 1;
    } else if (clickedButton === `button-a ${item.id}` && item.quantity > 0) {
      console.log('una menos');
      item.quantity -= 1;
    }
  }
  renderCart();
};
console.log('cart', cart);

const handleQuantityCart = () => {
  const buttons = document.querySelectorAll('.button-js');

  buttons.forEach((button) => {
    button.addEventListener('click', handleClickButtonQuantity);
  });
};

const getTotalCart = () => {
  let total = 0;
  for (let item of cart) {
    total += item.price * item.quantity;
  }
  return total;
};

const getCartTotalHtmlCode = () => {
  let html = '';
  html += `<th>Total</th><th></th><th></th><th>${getTotalCart()}</th>`;
  return (cartContainer.innerHTML += html);
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
              <th><button class="button-js" id="button-a ${
                product.id
              }">-</button>${
      product.quantity
    }<button class="button-js js-button" id="button-b ${
      product.id
    }">+</button></th>
              <th>${product.price * product.quantity}€</th>
            </tr>`;
  }
  cartContainer.innerHTML = html;

  getTotalCart();
  getCartTotalHtmlCode();
  handleQuantityCart();
};

if (productsLS) {
  renderProducts(productsLS);
} else {
  getApi();
}
