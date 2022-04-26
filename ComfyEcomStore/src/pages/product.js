// global imports
import '../toggleSidebar.js';
import '../cart/toggleCart.js';
import '../cart/setupCart.js';
// specific
import { addToCart } from '../cart/setupCart.js';
import { singleProductUrl, getElement, formatPrice } from '../utils.js';
import setupPrice from '../filters/price.js';

// selections
const loading = getElement('.page-loading');
const centerDOM = getElement('.single-product-center');
const pageTitleDOM = getElement('.page-hero-title');
const imgDOM = getElement('.single-product-img');
const titleDOM = getElement('.single-product-title');
const companyDOM = getElement('.single-product-company');
const priceDOM = getElement('.single-product-price');
const colorsDOM = getElement('.single-product-colors');
const descDOM = getElement('.single-product-desc');
const cartBtn = getElement('.addToCartBtn');

// cart product
let productID;

// show product when page loads
window.addEventListener('DOMContentLoaded', async function () {
  const urlID = window.location.search;
  try {
    const resp = await fetch(`${singleProductUrl}${urlID}`);
    if (resp.status >= 200 && resp.status <= 299) {
      const product = await resp.json();
      productID = product.id;
      const { id, fields } = product;
      const { name, company, price, colors, description } = product.fields;
      const image = product.fields.image[0].thumbnails.large.url;

      //set Values
      document.title = `${name.toUpperCase()} || Comfy`;
      pageTitleDOM.textContent = `Home / ${name}`;
      imgDOM.src = image;
      titleDOM.textContent = name;
      companyDOM.textContent = `by ${company}`;
      priceDOM.textContent = formatPrice(price);
      descDOM.textContent = description;
      colors.forEach((color) => {
        const span = document.createElement('span');
        span.classList.add('product-color');
        span.style.backgroundColor = color;
        colorsDOM.appendChild(span);
      });
    } else {
      console.log(resp.status, resp.statusText);
      centerDOM.innerHTML = `
      <div>
      <h3 class="error">Sorry, something went wrong</h3>
      <a href="index.html" class="btn">Back home</a>
      </div>`;
    }
  } catch (error) {
    console.log(error);
  }

  loading.style.display = 'none';
});

cartBtn.addEventListener('click', function () {
  addToCart(productID);
});
