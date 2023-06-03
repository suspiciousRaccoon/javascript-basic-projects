// import
import {
  getStorageItem,
  setStorageItem,
  formatPrice,
  getElement,
} from '../utils.js';
import { openCart } from './toggleCart.js';
import { findProduct } from '../store.js';
import addToCartDOM from './addToCartDOM.js';
// set items

const cartItemCountDom = getElement('.cart-item-count');
const carItemsDOM = getElement('.cart-items');
const cartTotalDOM = getElement('.cart-total');

let cart = getStorageItem('cart');

export const addToCart = async (id) => {
  let item = cart.find((cartItem) => {
    return cartItem.id === id;
  });
  if (!item) {
    let product = await findProduct(id);
    // console.log(product);
    // add item to the cart
    product['amount'] = 1;
    cart.push(product);
    // add item to the DOM
    addToCartDOM(product);
  } else {
    const amount = changeAmount(id);
    const items = Array.from(carItemsDOM.querySelectorAll('.cart-item-amount'));
    const newAmount = items.find((value) => {
      return value.dataset.id === id;
    });
    newAmount.textContent = amount;
  }
  // add one to the item count
  displayCartItemCount();
  // display cart totals
  displayCartTotal();
  // set cart in local storage
  setStorageItem('cart', cart);
  openCart();
};

// function increaseAmount(item) {
//   const index = cart.indexOf(item);
//   const newAmount = item.amount + 1;
//   cart[index].amount = newAmount;
//   return newAmount;
// }

// i prefer above implementation, below is video implementation
// const increaseAmount = (id) => {
//   let newAmount;
//   cart = cart.map((cartItem) => {
//     if (cartItem.id === id) {
//       newAmount = cartItem.amount + 1;
//       cartItem = { ...cartItem, amount: newAmount };
//     }
//     return cartItem;
//   });
//   return newAmount;
// };

// const decreaseAmount = (id) => {
//   let newAmount;
//   cart = cart.map((cartItem) => {
//     if (cartItem.id === id) {
//       newAmount = cartItem.amount - 1;
//       cartItem.amount = newAmount;
//     }
//     return cartItem;
//   });
//   return newAmount;
// };

function changeAmount(id, value = 1) {
  let newAmount;
  cart = cart.map((cartItem) => {
    if (cartItem.id === id) {
      newAmount = cartItem.amount + value;
      cartItem.amount = newAmount;
    }
    return cartItem;
  });
  return newAmount;
}

function removeItem(id) {
  cart = cart.filter((cartItem) => {
    return cartItem.id !== id;
  });
}

function displayCartItemCount() {
  const amount = cart.reduce(
    (total, cartItem) => (total += cartItem.amount),
    0
  );
  cartItemCountDom.textContent = amount;
}

function displayCartTotal() {
  let total = cart.reduce((total, cartItem) => {
    return (total += cartItem.amount * cartItem.fields.price);
  }, 0);

  cartTotalDOM.textContent = `Total : ${formatPrice(total)}`;
}

function displayCartItemsDOM() {
  cart.forEach((cartItem) => {
    addToCartDOM(cartItem);
  });
}

function setupCartFunctionality() {
  carItemsDOM.addEventListener('click', (e) => {
    const element = e.target;
    const parent = e.target.parentElement;
    const id = e.target.dataset.id;
    const parentID = e.target.parentElement.dataset.id;

    // remove
    if (element.classList.contains('cart-item-remove-btn')) {
      removeItem(id);
      element.parentElement.parentElement.remove();
      // parent.parentElement.remove();
    }
    // increase
    if (parent.classList.contains('cart-item-increase-btn')) {
      const newAmount = changeAmount(parentID);
      parent.nextElementSibling.textContent = newAmount;
    }
    // decrease
    if (parent.classList.contains('cart-item-decrease-btn')) {
      const newAmount = changeAmount(parentID, -1);
      if (newAmount === 0) {
        removeItem(parentID);
        parent.parentElement.parentElement.remove();
      } else {
        parent.previousElementSibling.textContent = newAmount;
      }
    }
    // mores tuff
    displayCartItemCount();
    displayCartTotal();
    setStorageItem('cart', cart);
  });
}

const init = () => {
  // display amount of cart items
  displayCartItemCount();
  // display total
  displayCartTotal();
  // add all cart items to the dom
  displayCartItemsDOM();
  // setup cart functionality
  setupCartFunctionality();
};
init();
