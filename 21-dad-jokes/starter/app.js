const url = 'https://icanhazdadjoke.com/';

const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

btn.addEventListener('click', () => {
  fetchJoke();
});

const fetchJoke = async () => {
  result.textContent = 'Loading...';
  try {
    const response = await fetch(url, {
      headers: {
        Accept: 'application/json',
        'User-Agent':
          'learning app for api calls in (https://www.udemy.com/course/javascript-tutorial-for-beginners-w/)',
      },
    });
    if (!response.ok) {
      // the promises still completes, so it succedes (kinda, not really) but if it doesnt the try-catch doesnt detect it
      throw new Error('There was an error');
    }
    const data = await response.json();
    result.textContent = data.joke;
  } catch (error) {
    result.textContent = 'There was an error';
    console.log(error);
  }
};

window.addEventListener('load', () => {
  fetchJoke();
});
