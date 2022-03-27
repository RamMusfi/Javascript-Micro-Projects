// select modal-btn,modal-overlay,close-btn

const mlbtn = document.querySelector(".modal-btn");
const mlol = document.querySelector(".modal-overlay");
const clbtn = document.querySelector(".close-btn");

// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

mlbtn.addEventListener("click", function () {
  mlol.classList.add("open-modal");
  console.log(mlol.classList);
});

clbtn.addEventListener("click", function () {
  mlol.classList.remove("open-modal");
});
