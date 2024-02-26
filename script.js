// Function to calculate BMI
function calculateBMI() {
    // Get input values
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;

    // Check if weight and height are valid numbers
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("Please enter valid weight and height.");
        return;
    }

    // Calculate BMI
    var bmi = weight / ((height / 100) ** 2);

    // Display BMI
    document.getElementById('bmi').textContent = bmi.toFixed(2);
    

    // Determine BMI category
    var desc = "";
    let para="";
    if (bmi < 18.5) {
        desc = "Underweight";
        bmiClass = "underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        desc = "Normal";
        bmiClass = "normal";
    } else if (bmi >= 25 && bmi < 30) {
        desc = "Overweight";
        bmiClass = "overweight";
    } else {
        desc = "Obese";
        bmiClass = "obese";
    }

    // Display BMI category
    document.getElementById('desc').className=desc;
    document.getElementById('desc').innerHTML = `You are <strong>${desc}</strong>`;
    document.getElementById('bmi').className = bmiClass;
    
    
}

// Function to reset form
function formReset() {
    document.getElementById('bmi').textContent = "0";
    document.getElementById('desc').textContent = "N/A";
}

// Function to handle form submission
function formSubmit(event) {
    // Prevent default form submission
    event.preventDefault();
    // Calculate BMI
    calculateBMI();
}

