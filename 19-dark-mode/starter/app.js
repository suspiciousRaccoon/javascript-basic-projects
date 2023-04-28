const btn = document.querySelector('.btn');
const articleContainer = document.querySelector('.articles');

btn.addEventListener('click', () => {
  dark = document.documentElement.classList.toggle('dark-theme');
  dark ? localStorage.setItem('dark', true) : localStorage.clear();
  //stupidly simple, dont even have to remove the :root values
});

const articlesData = articles
  .map((article) => {
    tempVal = `
    <article class='post'>
      <h2>${article.title}</h2>
      <div class='post-info'>
        <span>${article.date}</span> <span>${article.length} min read</span>
      </div>
      <p>
        ${article.snippet}
      </p>
    </article>
    `;
    return tempVal;
  })
  .join('');

articleContainer.innerHTML = articlesData;

window.addEventListener('DOMContentLoaded', function () {
  if (localStorage.getItem('dark')) {
    document.documentElement.classList.add('dark-theme');
  }
  document.body.style.visibility = 'visible';
  document.body.style.opacity = 1;
});
