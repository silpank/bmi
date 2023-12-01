// script.js

function calculateBMI() {
    // Get the input values
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;

    // Perform BMI calculation (assuming height is in centimeters)
    var bmi = weight / ((height / 100) * (height / 100));

    // Display the result
    var resultElement = document.getElementById("result");
    var bmiscoreElement = document.getElementById("bmiscore");
    var descriptionElement = document.getElementById("description");

    // Set BMI value with two decimal places
    var formattedBMI = bmi.toFixed(2);

    // Set the background color based on BMI range
    if (bmi < 18.5) {
        bmiscoreElement.style.backgroundColor = "#FFD700"; // Light yellow for underweight
        descriptionElement.innerHTML = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
        bmiscoreElement.style.backgroundColor = "#008000"; // Green for normal weight
        descriptionElement.innerHTML = 'Normal Weight';
    } else if (bmi >= 25 && bmi < 30) {
        bmiscoreElement.style.backgroundColor = "#FFA500"; // Orange for overweight
        descriptionElement.innerHTML = 'Overweight';
    } else {
        bmiscoreElement.style.backgroundColor = "#FF0000"; // Red for obesity
        descriptionElement.innerHTML = 'Obese';
    }

    // Display the formatted BMI value
    bmiscoreElement.innerHTML = '<b>' + formattedBMI + '</b>';
    resultElement.innerHTML = 'YOUR BMI SCORE IS';
}
