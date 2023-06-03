// global imports
import '../toggleSidebar.js';
import '../cart/toggleCart.js';
import '../cart/setupCart.js';

//  filter imports
import setupSearch from '../filters/search.js';
import setupCompanies from '../filters/companies.js';
import setupPrice from '../filters/price.js';

// specific imports
import { store, setupStore } from '../store.js';
import display from '../displayProducts.js';
import { getElement } from '../utils.js';
import fetchProducts from '../fetchProducts.js';

const loading = getElement('.page-loading');

const init = async () => {
  const products = await fetchProducts();
  if (products) {
    // add products to the store
    setupStore(products);
    display(store, getElement('.products-container'));
    setupSearch(store);
    setupCompanies(store);
    setupPrice(store);
    loading.style.display = 'none';
  }
};

window.addEventListener('DOMContentLoaded', init);
