// import { getStorageItem, setStorageItem } from './utils.js';

// Ommiting the localStorage implementation in favour of fetching the products again
// let store = getStorageItem('store');

import { singleProductUrl } from './utils.js';

let store = [];
const setupStore = (products) => {
  store = products.map((product) => {
    const {
      id,
      fields: { featured, name, price, company, colors, image: img },
    } = product;
    const image = img[0].thumbnails.large.url;
    return { id, featured, name, price, company, colors, image };
  });
  // setStorageItem('store', store);
};
const findProduct = async (id) => {
  // I got lazy and didnt incorporate error checking
  const request = await fetch(`${singleProductUrl}?id=${id}`);
  const product = await request.json();
  // let product = store.find((product) => {
  //   return product.id == id;
  // });
  return product;
};
export { store, setupStore, findProduct };
