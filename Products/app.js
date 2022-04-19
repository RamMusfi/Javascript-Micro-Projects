const url = 'https://course-api.com/javascript-store-products';

const productsDOM = document.querySelector('.products-center');

const fetchProducts = async () => {
  // Loadding
  productsDOM.innerHTML = `<div class="loading"></div>`;
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
  } catch (error) {
    productsDOM.innerHTML = `<p class="error">There was an error :(</p>`;
  }
};

const displayProducts = (list = []) => {
  const productsList = list
    .map((item) => {
      const { id } = item;
      const { name: title, price } = item.fields;
      const { url: img } = item.fields.image[0];
      const formatPrice = price / 100;
      //id,name,price,img

      return `<a class="single-product" href="product.html?id=${id}">
          <img
            src="${img}"
            alt="${title}"
            class="single-product-img img"
          />
          <footer>
            <h5 class="name">${title}</h5>
            <span class="price">$${formatPrice}</span>
          </footer>
        </a>`;
    })
    .join('');
  productsDOM.innerHTML = `<div class="products-container">${productsList}</div>`;
};

const start = async () => {
  const data = await fetchProducts();
  displayProducts(data);
};

start();
fetchProducts();
