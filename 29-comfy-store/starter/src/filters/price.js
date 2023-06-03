import { getElement } from '../utils.js';
import display from '../displayProducts.js';

const setupPrice = (store) => {
  const priceInput = getElement('.price-filter');
  const priceValue = getElement('.price-value');

  // setup filter
  let maxPrice = Math.max(...store.map((product) => product.price));
  let minPrice = Math.min(...store.map((product) => product.price));
  maxPrice = Math.ceil(maxPrice / 100);
  minPrice = Math.ceil(minPrice / 100);
  priceInput.value = maxPrice;
  priceInput.max = maxPrice;
  priceInput.min = minPrice;
  priceValue.textContent = `Value : $${maxPrice}`;

  // event listener
  priceInput.addEventListener('input', (e) => {
    const value = parseInt(priceInput.value);
    priceValue.textContent = `Value : $${value}`;
    let newStore = store.filter((product) => product.price / 100 <= value);
    display(newStore, getElement('.products-container'), true);
  });
};

export default setupPrice;
