import fetchDrinks from './fetchDrinks.js';
import displayDrinks from './displayDrinks.js';
import setDrink from './setDrink.js';
const showDrinks = async (url) => {
  // fetch drinks
  console.log(url);
  const data = await fetchDrinks(url);
  // display drinks
  const section = displayDrinks(data);
  if (section) {
    setDrink(section);
  }
};

export default showDrinks;
