const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  dark = document.documentElement.classList.toggle('dark-theme');
  dark ? localStorage.setItem('dark', true) : localStorage.clear();
  //stupidly simple, dont even have to remove the :root values
});

window.addEventListener('DOMContentLoaded', function () {
  if (localStorage.getItem('dark')) {
    document.documentElement.classList.add('dark-theme');
  }
  document.body.style.visibility = 'visible';
  document.body.style.opacity = 1;
});
