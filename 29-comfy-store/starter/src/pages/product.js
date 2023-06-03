// global imports
import '../toggleSidebar.js';
import '../cart/toggleCart.js';
import '../cart/setupCart.js';
// specific
import { addToCart } from '../cart/setupCart.js';
import { singleProductUrl, getElement, formatPrice } from '../utils.js';

// selections
const loading = getElement('.page-loading');
const centerDOM = getElement('.single-product-center');
const pageTitleDOM = getElement('.page-hero-title');
const imgDOM = getElement('.single-product-img');
const titleDOM = getElement('.single-product-title');
const companyDOM = getElement('.single-product-company');
const priceDOM = getElement('.single-product-price');
const colorsDOM = getElement('.single-product-colors');
const descDOM = getElement('.single-product-desc');
const cartBtn = getElement('.addToCartBtn');

// cart product
let productID;

// setupSingleProduct
const setupSingleProduct = (productData) => {
  // grab data
  const { id, fields } = productData;
  productID = id;
  const { name, company, price, colors, description } = fields;
  const image = fields.image[0].thumbnails.large.url;
  // set values
  document.title = `${name.toUpperCase()} | Comfy`;
  pageTitleDOM.textContent = `Home / ${name}`;
  imgDOM.src = image;
  imgDOM.alt = name;
  titleDOM.textContent = name;
  companyDOM.textContent = `by ${company}`;
  priceDOM.textContent = formatPrice(price);
  descDOM.textContent = description;
  colors.forEach((color) => {
    const span = document.createElement('span');
    span.classList.add('product-color');
    span.style.backgroundColor = `${color}`;
    colorsDOM.appendChild(span);
  });
};

// init
const init = async () => {
  // const urlID = window.location.search;
  // ^^^^^^^ lazy way
  const urlID = new URLSearchParams(document.location.search).get('id');
  try {
    const response = await fetch(`${singleProductUrl}?id=${urlID}`);
    if (200 <= response.status <= 299) {
      const product = await response.json();
      setupSingleProduct(product);
    } else {
      console.log(response.status, response.statusText);
      centerDOM.innerHTML = `
    <div>
    <h3 class="error">sorry, something went wrong</h3>
    <a href="index.html" class="btn">back home</a>
    </div> 
     `;
    }
  } catch (error) {
    centerDOM.innerHTML = `
    <div>
    <h3 class="error">sorry, something went wrong</h3>
    <a href="index.html" class="btn">back home</a>
    </div> 
     `;
    console.log(error); // network error
  }

  loading.style.display = 'none';
};

cartBtn.addEventListener('click', () => {
  addToCart(productID);
});

// show product when page loads
window.addEventListener('DOMContentLoaded', init);
