import { getElement } from '../utils.js';
import display from '../displayProducts.js';
const setupSearch = (store) => {
  const form = getElement('.input-form');
  const nameInput = getElement('.search-input');
  form.addEventListener('keyup', () => {
    const value = nameInput.value.toLowerCase();
    if (value) {
      const newStore = store.filter((product) => {
        let { name } = product;
        name = name.toLowerCase();
        if (name.includes(value)) {
          return product;
        }
      });
      if (newStore.length < 1) {
        const products = getElement('.products-container');
        products.innerHTML = `<h3 class="filter-error">sorry, no products matched your query</h3>`;
      } else {
        display(newStore, getElement('.products-container'), true);
      }
    } else {
      display(store, getElement('.products-container'), true);
    }
  });
};

export default setupSearch;
