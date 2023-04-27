const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');

slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});

let counter = 0;
nextBtn.addEventListener('click', function () {
  counter++;
  carousel();
});
prevBtn.addEventListener('click', function () {
  counter--;
  carousel();
});

function carousel() {
  // slides way

  // if (counter == slides.length) {
  //   counter = 0;
  // }
  // if (counter < 0) {
  //   counter = slides.length - 1;
  // }

  // buttons way
  // if (counter < slides.length - 1) {
  //   nextBtn.style.display = 'block';
  // } else {
  //   nextBtn.style.display = 'none';
  // }
  // if (counter > 0) {
  //   prevBtn.style.display = 'block';
  // } else {
  //   prevBtn.style.display = 'none';
  // }

  // buttons way - c l e a n (doesn't really matter, i just HATE {}{}{}}{}{{}})
  counter < slides.length - 1
    ? (nextBtn.style.display = 'block')
    : (nextBtn.style.display = 'none');

  counter > 0
    ? (prevBtn.style.display = 'block')
    : (prevBtn.style.display = 'none');

  // if anyone for some reason is reading this (that's you future me!) dont use ternaries in complex conditionals, theyre not readable at all
  // i love you prettier

  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}

// buttons way - continuation
prevBtn.style.display = 'none';
