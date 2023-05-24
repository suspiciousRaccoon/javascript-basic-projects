import get from './getElement.js';
import { hideLoading } from './toggleLoading.js';

const displayDrinks = ({ drinks }) => {
  const section = get('.section-center');
  const title = get('.title');
  if (!drinks) {
    // hide loading
    title.textContent = 'Sorry, no cocktails matched your query';
    section.innerHTML = null;
    hideLoading();
    return;
  }
  const imageUrlArray = [];
  const newDrinks = drinks
    .map((drink) => {
      const { idDrink: id, strDrink: name, strDrinkThumb: image } = drink;
      imageUrlArray.push(image);
      return ` <a href="drink.html">
        <article class="cocktail" data-id="${id}">
          <img src="${image}" alt="cocktail-${name}" />
          <h3>${name}</h3>
        </article>
      </a>`;
    })
    .join('');
  // hideloading
  title.textContent = '';
  section.innerHTML = newDrinks;
  hideLoading();
  return section;
};

export default displayDrinks;
