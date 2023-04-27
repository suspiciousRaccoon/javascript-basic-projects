spans = [...document.querySelectorAll('.number')];

function updateCount(el) {
  const value = parseInt(el.dataset.value); // data-value in DOM
  const increment = Math.ceil(value / 1000); // rounds up, can change 1000 value
  // console.log(value, increment);
  let initialValue = 0;

  const increaseCount = setInterval(() => {
    initialValue += increment;

    el.textContent = initialValue;

    // stops the counter if its greater than value
    if (initialValue > value) {
      el.textContent = value; // just in case
      clearInterval(increaseCount); // stops the counter, for performance mostly, functionality still be the same
      return; // stops the code
    }
  }, 1); // runs  each milisecond
}

spans.forEach((el) => {
  updateCount(el);
});
