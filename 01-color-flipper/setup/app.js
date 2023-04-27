const colors = [
  'black',
  'silver',
  'gray',
  'white',
  'maroon',
  'red',
  'purple',
  'fuchsia',
  'green',
  'lime',
  'olive',
  'yellow',
  'navy',
  'blue',
  'teal',
  'aqua',
];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');
let randomNumber = 0;
btn.addEventListener('click', function () {
  // get random number between 0-15 colors
  do {
    randomNumber = getRandomNumber();
    console.log('pepe');
  } while (document.body.style.backgroundColor == colors[randomNumber]);
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
