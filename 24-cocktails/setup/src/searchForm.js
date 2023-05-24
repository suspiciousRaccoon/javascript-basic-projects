// we'll just import the entire module, so no export needed

import get from './getElement.js';
import presentDrinks from './presentDrinks.js';

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const form = get('.search-form');
const input = get('[name="drink"]');

form.addEventListener('keyup', function (e) {
  e.preventDefault();
  const value = input.value;
  if (!value) {
    return;
  }
  presentDrinks(`${URL}${value}`);
});
