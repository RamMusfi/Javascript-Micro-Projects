import { hideLoading } from './toggleLoading.js';
import get from './getElement.js';

const displayDrink = (data) => {
  hideLoading();
  // DESTRUCTUIRING
  const drink = data.drinks[0];
  const { strDrinkThumb: image, strDrink: name, strInstructions: desc } = drink;
  const list = [
    drink.strIngredient1,
    drink.strIngredient2,
    drink.strIngredient3,
    drink.strIngredient4,
    drink.strIngredient5,
  ];
  const img = get('.drink-img');
  const drinkName = get('.drink-name');
  const descr = get('.drink-desc');
  const ingred = get('.drink-ingredients');

  img.src = image;
  drinkName.textContent = name;
  descr.textContent = desc;
  ingred.innerHTML = list
    .map((i) => {
      if (!i) return;
      return `<li><i class="far fa-check-square"></i>${i}</li>`;
    })
    .join('');

  console.log(drink, list);
};

export default displayDrink;
