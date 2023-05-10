const urlProducts = 'https://course-api.com/javascript-store-products';
const productsDOM = document.querySelector('.products-center');

async function fetchProducts() {
  productsDOM.innerHTML = `<div class="loading"></div>`;
  try {
    request = await fetch(urlProducts);
    data = await request.json();
    return data;
  } catch (error) {
    productsDOM.innerHTML = `<p class="error">there was an error</p>`;
    console.log(error);
  }
}

function displayProducts(productsList) {
  const products = productsList
    .map((product) => {
      const { id } = product;
      const { name: title, price } = product.fields; // price is in cents
      const { url: img } = product.fields.image[0];
      console.log(price);
      const formatPrice = price / 100;
      // we could access it directly, but destructuring it is more comfy
      return `<a class="single-product" href="product.html?id=${id}&name=john&age=25">
            <img src="${img}" class="single-product-img img" alt="${title}" />
            <footer>
              <h5 class="name">${title}</h5>
              <span class="price">$${formatPrice}</span>
            </footer>
          </a>`;
    })
    .join('');
  productsDOM.innerHTML = `<div class="products-container">${products}</div>`;
}

const start = async () => {
  data = await fetchProducts();
  displayProducts(data);
};

start();
