const productDOM = document.querySelector('.product');
const url = 'https://course-api.com/javascript-store-single-product';

async function fetchProduct() {
  productDOM.innerHTML = '<h4 class="loading"></h4>';
  try {
    // console.log(window.location.search);
    const params = new URLSearchParams(window.location.search);
    const response = await fetch(`${url}?id=${params.get('id')}`);
    const data = await response.json();
    return data;
  } catch (error) {
    productDOM.innerHTML = `<p class="error">There was an error</p>`;
    console.log(error);
  }
}

async function displayProduct(product) {
  /*
  done without destructuring for completeness sake, better to destructure so code is cleaner.
  Destructure example is in app.js, or in final/product.js
  in this case prolly better to destructure, just look at colors o.o
  it works though
  */

  document.title = ((string) => {
    // capitalizes the first letter of each word
    return (string = string
      .toLowerCase()
      .split(' ')
      .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
      .join(' '));
  })(product.fields.name);

  productDOM.innerHTML = `
      <div class="product-wrapper">
        <img src="${product.fields.image[0].url}" alt="${
    product.fields.name
  }" class="img" />
        <div class="product-info">
          <h3>${product.fields.name}</h3>
          <h5>${product.fields.company}</h5>
          <span>${product.fields.price / 100}</span>
          <div class="colors">
            ${product.fields.colors
              .map((color) => {
                return `<span class="product-color" style="background: ${color}"></span>`;
              })
              .join('')}
          </div>
          <p>
        ${product.fields.description}
          </p>
          <button class="btn">add to cart</button>
        </div>
      </div>`;
}

const start = async () => {
  const data = await fetchProduct();
  displayProduct(data);
};

start();
