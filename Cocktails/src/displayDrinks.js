import get from './getElement.js';
import { hideLoading } from './toggleLoading.js';

const displayDrinks = ({ drinks }) => {
  // Selection
  const section = get('.section-center');
  const title = get('.title');

  //Check if the search returns null to display the "sorry.."
  if (!drinks) {
    // hide loading
    hideLoading();
    title.textContent = 'Sorry no Drinks matched your search ¯_(ツ)_/¯';
    section.innerHTML = null;
    return;
  }
  const newDrinks = drinks
    .map((drink) => {
      // Name, Image, ID
      const { idDrink: id, strDrink: name, strDrinkThumb: image } = drink;

      return `<a href="drink.html">
          <article class="cocktail" data-id="${id}">
            <img src="${image}" alt="${name}" />
            <h3>${name}</h3>
          </article>
        </a>`;
    })
    .join('');
  //hide loading
  hideLoading();
  title.textContent = '';
  section.innerHTML = newDrinks;
  return section;
};

export default displayDrinks;
