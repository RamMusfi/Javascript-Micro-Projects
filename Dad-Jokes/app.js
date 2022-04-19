const url = 'https://icanhazdadjoke.com/';

console.log('Dad Jokes Starter');

const result = document.querySelector('.result');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  fetchDadJoke();
});

const fetchDadJoke = async () => {
  result.textContent = 'Loading...';

  try {
    const response = await fetch(url, {
      headers: {
        Accept: 'application/json',
        'User-Agent': 'learning app',
      },
    });
    if (!response.ok) {
      throw new Error('404 Not found :(');
    }
    const data = await response.json();
    result.textContent = data.joke;
  } catch (error) {
    result.textContent = 'There was an Error..';
  }
};

fetchDadJoke();
