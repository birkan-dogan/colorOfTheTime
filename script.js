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

// to convert the rgb color to hex code

const decToHexa = function (n) {
  // char array to store hexadecimal number
  let hexaDeciNum = Array.from({ length: 2 }, (_, i) => 0);

  // counter for hexadecimal number array
  let i = 0;
  while (n != 0) {
    // temporary variable to store remainder
    let temp = 0;

    // storing remainder in temp variable.
    temp = n % 16;

    // check if temp < 10
    if (temp < 10) {
      hexaDeciNum[i] = String.fromCharCode(temp + 48);
      i++;
    } else {
      hexaDeciNum[i] = String.fromCharCode(temp + 55);
      i++;
    }

    n = Math.floor(n / 16);
  }

  let hexCode = "";
  if (i == 2) {
    hexCode += hexaDeciNum[0];
    hexCode += hexaDeciNum[1];
  } else if (i == 1) {
    hexCode = "0";
    hexCode += hexaDeciNum[0];
  } else if (i == 0) hexCode = "00";

  // Return the equivalent
  // hexadecimal color code
  return hexCode;
};

// Function to convert the
// RGB code to Hex color code
const convertRGBtoHex = function (R, G, B) {
  let hexCode = "#";
  hexCode += decToHexa(R);
  hexCode += decToHexa(G);
  hexCode += decToHexa(B);

  return hexCode;
};

// creating random numbers between 0-255 to use them in rgb() color format
const interval = setInterval(function () {
  let numberA = Math.floor(Math.random() * 255);
  let numberB = Math.floor(Math.random() * 255);
  let numberC = Math.floor(Math.random() * 255);
  container.style.backgroundColor = `rgb(${numberA}, ${numberB}, ${numberC})`;
  color.textContent = convertRGBtoHex(numberA, numberB, numberC);
}, 1000);

// clearInterval(interval);

// copy the code to clipboard
color.onclick = function () {
  document.execCommand("copy");
};

color.addEventListener("copy", function (event) {
  event.preventDefault();
  if (event.clipboardData) {
    event.clipboardData.setData("text/plain", color.textContent);
    event.clipboardData.getData("text");
    notify.style.display = "block";
    setTimeout(function () {
      notify.style.display = "none";
    }, 3000);
  }
});
