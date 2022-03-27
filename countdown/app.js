const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDay();

let futureDate = new Date(tempYear, tempMonth, tempDay + 15, 1, 30, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();
const date = futureDate.getDate();
let day = weekdays[futureDate.getDay()];

let month = months[futureDate.getMonth()];

giveaway.textContent = `Giveaway Ends on ${day}, ${date} ${month} ${year}  ${hours}:${mins}am`;

//future time in ml secs

const futureTime = futureDate.getTime();
function restTime() {
  const today = new Date().getTime();
  const t = futureTime - today;
  // Extracting Date from milisecond difference
  // values in mlsecs
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  //calc all values
  let days = t / oneDay;
  days = Math.floor(days);
  let hours = Math.floor((t % oneDay) / oneHour);
  let mins = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  //set values array
  const values = [days, hours, mins, seconds];
  function format(items) {
    if (item < 10) {
      return (item = `0${item}`);
    } else {
      return item;
    }
  }
  items.forEach(function (item, index) {
    item.innerHTML = values[index];
  });
  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired"> Sorry this Givaway has Expired!</h4>`;
  }
}
// Countdown
let countdown = setInterval(restTime, 1000);
restTime();
