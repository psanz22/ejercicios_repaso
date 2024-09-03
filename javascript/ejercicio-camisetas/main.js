'use strict';

const container = document.querySelector('.products');
let products = [];
let cart = [];

const getApi = () => {
  fetch('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      saveLS(JSON.stringify(data));
      products = data;
      renderProducts(products);
    });
};

const handleClick = (ev) => {
  const clickedId = ev.currentTarget.id;
  console.log('id', clickedId);
  let foundProduct = [];
  for (const product of productsLS) {
    if (product.id === parseInt(clickedId)) {
      console.log('bingo', product.id);
      foundProduct = product;
    }
    console.log('foundProduct', foundProduct);
  }

  // cart = [
  //   {
  //     id: '1',
  //     name: 'hehe',
  //     price: 10,
  //     quantity: 1,
  //   },
  // ];
  cart.push({
    id: foundProduct.id,
    name: foundProduct.title,
    price: foundProduct.price,
    quantity: 1,
  });
  console.log('cart', cart);
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

if (productsLS) {
  renderProducts(productsLS);
} else {
  getApi();
}
