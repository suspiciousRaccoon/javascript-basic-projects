import { showLoading } from './toggleLoading.js';
const fetchDrinks = async (url) => {
  showLoading();
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    alert(`there was an error:\n${error}`);
    console.log(error);
  }
};

export default fetchDrinks;
