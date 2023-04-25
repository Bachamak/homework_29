let categories = document.querySelector('.categories ul');
let productDiv = document.querySelector('.products');
let productInfoDiv = document.querySelector('.product-info');

let products = {
  Hats: [
    { name: 'Шляпа', price: 200 },
    { name: 'Кепка', price: 150 },
    { name: 'Каска', price: 450 }
  ],
  Tops: [
    { name: 'Футболка', price: 200 },
    { name: 'Майка', price: 100 },
    { name: 'Пиджак', price: 2000 }
  ],
  Pants: [
    { name: 'Брюки', price: 500 },
    { name: 'Спортивки', price: 300 },
    { name: 'Легенцы', price: 900 }
  ]
};

Object.keys(products).forEach(category => {
  let li = document.createElement('li');
  li.textContent = category;
  li.dataset.category = category;
  categories.appendChild(li);
});

categories.addEventListener('click', event => {
  if (event.target.tagName === 'LI') {
    let selectCategories = event.target.dataset.category;
    let selectProducts = products[selectCategories];
    let productsHtml = selectProducts.map(product => {
      return `<div class="product" data-name="${product.name}" data-price="${product.price}">
      <h3>${product.name}</h3>
      <p>$ ${product.price}</p>
      </div>`;
    }).join('');
    productDiv.innerHTML = productsHtml;
  }
});

productDiv.addEventListener('click', event => {
  if (event.target.classList.contains('product')) {
    const name = event.target.dataset.name;
    const price = event.target.dataset.price;
    const productInfoHTML = `
      <h2>${name}</h2>
      <p>${price} грн</p>
      <button class="buy">Приобрести</button>
    `;
    productInfoDiv.innerHTML = productInfoHTML;
  }
});

productInfoDiv.addEventListener('click', event => {
  if (event.target.classList.contains('buy')) {
    alert('Товар добавлен в корзину');
    productDiv.innerHTML = '';
    productInfoDiv.innerHTML = '';
  }
});