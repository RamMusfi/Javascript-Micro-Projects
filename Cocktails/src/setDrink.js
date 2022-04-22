const setDrink = (section) => {
  section.addEventListener('click', function (e) {
    // e.preventDefault();
    const id = e.target.parentElement.dataset.id;
    // JSON : Already a string so no need to stringify
    localStorage.setItem('drink', id);
  });
};

export default setDrink;
