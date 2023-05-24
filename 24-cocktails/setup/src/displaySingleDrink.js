import { hideLoading } from './toggleLoading.js';
import get from './getElement.js';

const displayDrink = (data) => {
  hideLoading();

  const drink = data.drinks[0];
  const { strDrinkThumb: image, strDrink: name, strInstructions: desc } = drink;

  const img = get('.drink-img');
  const drinkName = get('.drink-name');
  const description = get('.drink-desc');
  const ingredients = get('.drink-ingredients');
  img.src = image;
  document.title = name;
  drinkName.textContent = name;
  description.textContent = desc;

  data.drinks.forEach((drink) => {
    const drinkEntries = Object.entries(drink),
      // This part builds arrays out of the two sets of keys
      [ingredientsArray, measuresArray] = ['strIngredient', 'strMeasure'].map(
        (keyName) =>
          Object.assign(
            [],
            ...drinkEntries
              .filter(([key, value]) => key.startsWith(keyName))
              .map(([key, value]) => ({
                [parseInt(key.slice(keyName.length))]: value,
              }))
          )
      ),
      // This part filters empty values based on the ingredients
      { finalIngredients, finalMeasures } = ingredientsArray.reduce(
        (results, value, index) => {
          if (
            (value && value.trim()) ||
            (measuresArray[index] && measuresArray[index].trim())
          ) {
            results.finalIngredients.push(value);
            results.finalMeasures.push(measuresArray[index]);
          }

          return results;
        },
        {
          finalIngredients: [],
          finalMeasures: [],
        }
      );
    const a = finalIngredients
      .map((value, index) => {
        return `<li><i class="far fa-check-square"></i>${value} - ${
          finalMeasures[index] || 1
        }</li>`;
      })
      .join('');
    ingredients.innerHTML = a;
  });
};
export default displayDrink;
