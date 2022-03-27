const colors = ["blue", "purple", "red", "green", "yellow", "Aqua"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  //Get random number between 0 - 5
  const randomNumber = getRandomNumber();
  console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];

  //display the color name

  color.textContent = colors[randomNumber];
});

//Random Number Generator

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
