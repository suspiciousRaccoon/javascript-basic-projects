const productsContainer = document.querySelector('.products-container');

function displayProducts(productsParam) {
  if (productsParam < 1) {
    productsContainer.innerHTML = '<h4>No items match</h4>';
    console.log(productsContainer.innerHTML);
    return;
  }

  productsContainer.innerHTML = productsParam
    .map((product) => {
      return `
      <article class='product' data-id='${product.id}'>
        <img
          src='${product.image}'
          class='product-img img'
          alt='${product.title}'
        />
        <footer>
          <h5 class='product-name'>${product.title}</h5>
          <span class='product-price'>${product.price}</span>
        </footer>
      </article>`;
    })
    .join('');
}

// text filter
const form = document.querySelector('.input-form');
const searchInput = document.querySelector('.search-input');

form.addEventListener('keyup', () => {
  filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(searchInput.value);
  });
  displayProducts(filteredProducts);
});

// filter buttons

const companyBtns = document.querySelector('.companies');

function displayButtons() {
  companyBtns.innerHTML = [
    'all',
    ...new Set(
      Array.from(products, (product) => {
        return product.company;
      })
    ),
  ]
    .map((company) => {
      return `<button class="company-btn">${company}</button>`;
    })
    .join('');
}

companyBtns.addEventListener('click', (e) => {
  if (e.target.classList.contains('company-btn')) {
    if (e.target.textContent == 'all') {
      displayProducts(products);
    } else {
      const filteredProducts = products.filter((product) => {
        return product.company == e.target.textContent;
      });
      displayProducts(filteredProducts);
    }
  }
});

window.addEventListener('load', () => {
  displayProducts(products);
  displayButtons();
});
