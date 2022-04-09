const btn = document.querySelector('.btn');
const articlesContainer = document.querySelector('.articles');

btn.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
});

const articlesData = articles
  .map((ar) => {
    const { title, date, length, snippet } = ar;
    //format Date
    const formatDate = moment(date).format('MMMM Do, YYYY');
    return `<article class="post">
        <h2>${title}</h2>
        <div class="post-info">
          <span>${formatDate}</span>
          <span>${length} min</span>
        </div>
        <p>${snippet}
        </p>
      </article>`;
  })
  .join('');

articlesContainer.innerHTML = articlesData;
