import { allProductsUrl } from './utils.js'; // <-- API URL

const fetchProducts = async () => {
  const response = await fetch(allProductsUrl).catch((err) => {
    console.log(err);
    alert(`There was an error ${err}`);
  });
  if (response) {
    return response.json();
  }
  return response;
};

export default fetchProducts;
