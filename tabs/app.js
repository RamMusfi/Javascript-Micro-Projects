const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
const about = document.querySelector(".about");

about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  // if ID exsists *so that the click is on the button
  if (id) {
    // remove active from all butons
    btns.forEach(function (btn) {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });

    // Hide other articles
    articles.forEach(function (ar) {
      ar.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});
