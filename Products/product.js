const poroductDOM = document.querySelector('.product');

const url = 'https://course-api.com/javascript-store-single-product';

//Fetching from URL
const fetchProduct = async () => {
  try {
    poroductDOM.innerHTML = `<h4 class='product-loading'>Loading...</h4>`;

    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const resp = await fetch(`${url}?id=${id}`);
    const data = resp.json();
    return data;
  } catch (error) {
    poroductDOM.innerHTML = `<p class='error'>There was an Error, please try again later</p>`;
  }
};

//Displaying Fetched data
const displayProduct = (product) => {
  console.log(product);
  //name, company,price,colors,info, img
  const {
    company,
    colors,
    description,
    name: title,
    price,
    image,
  } = product.fields;
  const { url: img } = image[0];
  document.title = title.toUpperCase();

  //Colors
  const colorsList = colors
    .map((color) => {
      return `<span class="product-color" style="background: ${color}"></span>`;
    })
    .join('');
  poroductDOM.innerHTML = `<div class="product-wrapper">
        <img class="img" src="${img}" alt="${title}" />
        <div class="product-info">
          <h3>${title}</h3>
          <h5>${company}</h5>
          <span>$${price / 100}</span>
          <div class="colors">
            ${colorsList}
            
          </div>
          <p>
            ${description}
          </p>
          <button class="btn">add to cart</button>
        </div>
      </div>`;
};

// Starting both fetching and displaying
const start = async () => {
  const data = await fetchProduct();
  displayProduct(data);
};

start();
