

//Dynamically stretching input field
const inputField = document.querySelector('input');

inputField.style.width = '100px';

inputField.addEventListener('input', function() {
    const minWidth = 100; // Minimum width in pixels
    this.style.width = Math.max(this.value.length * 40, minWidth) + 'px';
});


//Conversion button and functions
let inputValue = document.getElementById("input-field")

let convertBtn = document.getElementById("convert-btn")

function performConversion() {
    let meterToFeet = inputValue.value * 3.281
    let feetToMeter = inputValue.value / 3.281
    
    let litreToGallon = inputValue.value * 0.264
    let gallonToLitre = inputValue.value / 0.264
    
    let kgToPounds = inputValue.value * 2.204
    let poundsToKg = inputValue.value / 2.204
    
    
    document.getElementById("length-conversions").innerHTML = `${parseInt(inputValue.value).toLocaleString()} meters = ${meterToFeet.toLocaleString()} feet | ${parseInt(inputValue.value).toLocaleString()} feet = ${feetToMeter.toLocaleString()} meters`; 
    
    document.getElementById("volume-conversions").innerHTML = `${parseInt(inputValue.value).toLocaleString()} litres = ${litreToGallon.toLocaleString()} gallons | ${parseInt(inputValue.value).toLocaleString()} gallons = ${gallonToLitre.toLocaleString()} litres`
    
    document.getElementById("mass-conversions").innerHTML = `${parseInt(inputValue.value).toLocaleString()} kilograms = ${kgToPounds.toLocaleString()} pounds | ${parseInt(inputValue.value).toLocaleString()} pounds = ${poundsToKg.toLocaleString()} kilograms`

    
}

convertBtn.addEventListener('click', performConversion);

inputField.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        performConversion();
    }
});



