const url =
  'https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=';

const formDOM = document.querySelector('.form');
const inputDOM = document.querySelector('.form-input');
const resultsDOM = document.querySelector('.results');

formDOM.addEventListener('submit', (e) => {
  e.preventDefault();
  const value = inputDOM.value;
  if (!value) {
    resultsDOM.innerHTML =
      '<div class="error" >Please enter a valid search term</div>';
    return;
  }
  fetchPage(value);
});

const fetchPage = async (searchValue) => {
  resultsDOM.innerHTML = '<div class="loading" ></div>';
  try {
    const resp = await fetch(`${url}${searchValue}`);
    const data = await resp.json();
    const results = data.query.search;
    if (results.length < 1) {
      resultsDOM.innerHTML =
        '<div class="error" >No Matching results please try again!</div>';
      return;
    }
    renderResults(results);
  } catch (error) {
    resultsDOM.innerHTML = '<div class="error" >There was an Error!</div>';
  }
};

const renderResults = (list) => {
  const cardsList = list
    .map((item) => {
      console.log(item);
      const { pageid, title, snippet } = item;

      return `<a href=http://en.wikipedia.org/?curid=${pageid}>
            <h4>${title}</h4>
            <p> ${snippet}</p>
          </a>`;
    })
    .join('');
  resultsDOM.innerHTML = `<div class="articles">${cardsList}</div>`;
};
