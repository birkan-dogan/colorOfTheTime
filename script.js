// getting elements from html
const color = document.querySelector(".inner-container h1");
const timer = document.querySelector(".timer");
const container = document.querySelector(".container");
const notify = document.querySelector(".notify");

// running clock
const clock = setInterval(function () {
  const now = new Date();
  const hour = `${now.getHours()}`.padStart(2, 0);
  const minute = `${now.getMinutes()}`.padStart(2, 0);
  const second = `${now.getSeconds()}`.padStart(2, 0);
  timer.textContent = `${hour}:${minute}:${second}`;
}, 1000);

// creating random numbers between 0-255 to use them in rgb() color format
const interval = setInterval(function () {
  let numberA = Math.floor(Math.random() * 255);
  let numberB = Math.floor(Math.random() * 255);
  let numberC = Math.floor(Math.random() * 255);
  container.style.backgroundColor = `rgb(${numberA}, ${numberB}, ${numberC})`;
}, 1000);

// clearInterval(interval);
