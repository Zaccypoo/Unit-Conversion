// HTML elements
let inputField = document.getElementById("input-field");
let convertBtn = document.getElementById("convert-btn");

//Dynamically stretching input field
inputField.style.width = "100px";
inputField.addEventListener("input", function () {
  const minWidth = 100; // Minimum width in pixels
  this.style.width = Math.max(this.value.length * 40, minWidth) + "px";
});

// Function to perform conversion
function performConversion() {
  let value = inputField.value;
  if (value === NaN || value === "" || value === null) {
    alert("Please enter a value to convert");
    return;
  } else if (isNaN(value)) {
    alert("Please enter a valid number");
    return;
  } else if (parseInt(value) === 0) {
    alert("Please enter a number greater than 0");
    return;
  }
  let meterToFeet = value * 3.281;
  let feetToMeter = value / 3.281;

  let litreToGallon = value * 0.264;
  let gallonToLitre = value / 0.264;

  let kgToPounds = value * 2.204;
  let poundsToKg = value / 2.204;

  document.getElementById("length-conversions").innerHTML = `${parseInt(
    value
  ).toLocaleString()} meters = ${meterToFeet.toLocaleString()} feet | ${parseInt(
    value
  ).toLocaleString()} feet = ${feetToMeter.toLocaleString()} meters`;

  document.getElementById("volume-conversions").innerHTML = `${parseInt(
    value
  ).toLocaleString()} litres = ${litreToGallon.toLocaleString()} gallons | ${parseInt(
    value
  ).toLocaleString()} gallons = ${gallonToLitre.toLocaleString()} litres`;

  document.getElementById("mass-conversions").innerHTML = `${parseInt(
    value
  ).toLocaleString()} kilograms = ${kgToPounds.toLocaleString()} pounds | ${parseInt(
    value
  ).toLocaleString()} pounds = ${poundsToKg.toLocaleString()} kilograms`;
}

console.log(parseInt("100p" * 7))

// Event listeners
convertBtn.addEventListener("click", performConversion);
inputField.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    performConversion();
  }
});
