'use strict';

const container = document.querySelector('.products');

const saveLS = (products) => {
  localStorage.setItem('products', products);
};

const getApi = () => {
  fetch('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      saveLS(JSON.stringify(data));
    });
};
const productsLS = JSON.parse(localStorage.getItem('products'));
getApi();

const renderProducts = (productsLS) => {
  let html = ``;
  for (let product of productsLS) {
    html += `<div class="product">
            <img
              src="${product.image}"
            />
            <h3>${product.title}</h3>
            <p>${product.price} €</p>
            <button class="add">Añadir a la cesta</button>
          </div>`;
  }
  container.innerHTML = html;
};
renderProducts(productsLS);
