const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  ToggleDark(); //stupidly simple, dont even have to remove the :root values
});

function ToggleDark() {
  dark = document.documentElement.classList.toggle('dark-theme');
  console.log(dark);
  if (dark) {
    localStorage.setItem('dark', true);
  } else {
    localStorage.clear();
  }
}

window.addEventListener('DOMContentLoaded', function () {
  if (localStorage.getItem('dark')) {
    document.documentElement.classList.add('dark-theme');
  }
  document.body.style.visibility = 'visible';
  document.body.style.opacity = 1;
});
