const metricInput = document.querySelector('#metric')
const imperialInput = document.querySelector('#imperial')
const heightInput = document.querySelector('#height')
const weightInput = document.querySelector('#weight')
const heightMeasure = document.querySelector('.height-measure')
const weightMeasure = document.querySelector('.weight-measure')
const result = document.querySelector('.result')
const inputText = document.querySelectorAll('.input')


metricInput.addEventListener('click', function () {
    if (metricInput.checked) {
        heightMeasure.innerHTML = 'cm'
        weightMeasure.innerHTML = 'kg'
    }
})

imperialInput.addEventListener('click', function () {
    if (imperialInput.checked) {
        heightMeasure.innerHTML = 'inches'
        weightMeasure.innerHTML = 'pound'
    }
})

inputText.forEach(input => {
    input.addEventListener('input', function () {

        let bmiValueMetric = (weightInput.value / 1) / (heightInput.value / 100 * heightInput.value / 100);
        let totalMetric = bmiValueMetric.toFixed(1);

        let bmiValueImperial = 703 * (weightInput.value / 1) / (heightInput.value * heightInput.value);
        let totalImperial = bmiValueImperial.toFixed(1);

        if (metricInput.checked) {

            if (heightInput.value < 100 || heightInput.value > 300) {
                result.innerHTML = 'Metric height must be between 100cm and 300cm'
            } else if (totalMetric <= 18.5) {
                result.innerHTML = `
                <div>
                    <p>Your bmi is...</p>
                    <h2>${totalMetric}</h2>
                </div>
                
                <div>
                    <p>You BMI suggest are underweight.</p>
                </div>`;
            } else if (totalMetric < 24.9) {
                result.innerHTML = `
                <div>
                    <p>Your bmi is...</p>
                    <h2>${totalMetric}</h2>
                </div>
                
                <div class="shortened-links">
                    <p>You BMI suggest are healthy.</p>
                </div>`;
            } else if (totalMetric < 29.9) {
                result.innerHTML = `
                <div>
                    <p>Your bmi is...</p>
                    <h2>${totalMetric}</h2>
                </div>
                
                <div>
                    <p>You BMI suggest are overweight.</p>
                </div>`;
            } else if (totalMetric < 39.9) {
                result.innerHTML = `
                <div>
                    <p>Your bmi is...</p>
                    <h2>${totalMetric}</h2>
                </div>
                
                <div>
                    <p>You BMI suggest are obese.</p>
                </div>`;
            } else if (totalMetric > 39.9) {
                result.innerHTML = `
                <div>
                    <p>Your bmi is...</p>
                    <h2>${totalMetric}</h2>
                </div>
                
                <div>
                    <p>You BMI suggest are severely obese.</p>
                </div>`;
            }

            if (weightInput.value < 10 || weightInput.value > 500) {
                result.innerHTML = 'Metric weight must be between 10kg and 500kg'
            } else if (totalMetric <= 18.5) {
                result.innerHTML = `
                <div>
                    <p>Your bmi is...</p>
                    <h2>${totalMetric}</h2>
                </div>
                
                <div>
                    <p>You BMI suggest are underweight.</p>
                </div>`;
            } else if (totalMetric < 24.9) {
                result.innerHTML = `
                <div>
                    <p>Your bmi is...</p>
                    <h2>${totalMetric}</h2>
                </div>
                
                <div class="shortened-links">
                    <p>You BMI suggest are healthy.</p>
                </div>`;
            } else if (totalMetric < 29.9) {
                result.innerHTML = `
                <div>
                    <p>Your bmi is...</p>
                    <h2>${totalMetric}</h2>
                </div>
                
                <div>
                    <p>You BMI suggest are overweight.</p>
                </div>`;
            } else if (totalMetric < 39.9) {
                result.innerHTML = `
                <div>
                    <p>Your bmi is...</p>
                    <h2>${totalMetric}</h2>
                </div>
                
                <div>
                    <p>You BMI suggest are obese.</p>
                </div>`;
            } else if (totalMetric > 39.9) {
                result.innerHTML = `
                <div>
                    <p>Your bmi is...</p>
                    <h2>${totalMetric}</h2>
                </div>
                
                <div>
                    <p>You BMI suggest are severely obese.</p>
                </div>`;
            }
        } else if (imperialInput.checked) {

            if (heightInput.value < 40 || heightInput.value > 120) {
                result.innerHTML = 'Imperial height must be between 40 inch and 120 inch'
            } else if (totalImperial <= 18.5) {
                result.innerHTML = `
                <div>
                    <p>Your bmi is...</p>
                    <h2>${totalImperial}</h2>
                </div>
                
                <div>
                    <p>You BMI suggest are underweight.</p>
                </div>`;
            } else if (totalImperial < 24.9) {
                result.innerHTML = `
                <div>
                    <p>Your bmi is...</p>
                    <h2>${totalImperial}</h2>
                </div>
                
                <div class="shortened-links">
                    <p>You BMI suggest are healthy.</p>
                </div>`;
            } else if (totalImperial < 29.9) {
                result.innerHTML = `
                <div>
                    <p>Your bmi is...</p>
                    <h2>${totalImperial}</h2>
                </div>
                
                <div>
                    <p>You BMI suggest are overweight.</p>
                </div>`;
            } else if (totalImperial < 39.9) {
                result.innerHTML = `
                <div>
                    <p>Your bmi is...</p>
                    <h2>${totalImperial}</h2>
                </div>
                
                <div>
                    <p>You BMI suggest are obese.</p>
                </div>`;
            } else if (totalImperial > 39.9) {
                result.innerHTML = `
                <div>
                    <p>Your bmi is...</p>
                    <h2>${totalImperial}</h2>
                </div>
                
                <div>
                    <p>You BMI suggest are severely obese.</p>
                </div>`;
            }

            if (weightInput.value < 22 || weightInput.value > 1100) {
                result.innerHTML = 'Imperial weight must be between 22lb and 1100lb'
            } else if (totalImperial <= 18.5) {
                result.innerHTML = `
                <div>
                    <p>Your bmi is...</p>
                    <h2>${totalImperial}</h2>
                </div>
                
                <div>
                    <p>You BMI suggest are underweight.</p>
                </div>`;
            } else if (totalImperial < 24.9) {
                result.innerHTML = `
                <div>
                    <p>Your bmi is...</p>
                    <h2>${totalImperial}</h2>
                </div>
                
                <div class="shortened-links">
                    <p>You BMI suggest are healthy.</p>
                </div>`;
            } else if (totalImperial < 29.9) {
                result.innerHTML = `
                <div>
                    <p>Your bmi is...</p>
                    <h2>${totalImperial}</h2>
                </div>
                
                <div>
                    <p>You BMI suggest are overweight.</p>
                </div>`;
            } else if (totalImperial < 39.9) {
                result.innerHTML = `
                <div>
                    <p>Your bmi is...</p>
                    <h2>${totalImperial}</h2>
                </div>
                
                <div>
                    <p>You BMI suggest are obese.</p>
                </div>`;
            } else if (totalImperial > 39.9) {
                result.innerHTML = `
                <div>
                    <p>Your bmi is...</p>
                    <h2>${totalImperial}</h2>
                </div>
                
                <div>
                    <p>You BMI suggest are severely obese.</p>
                </div>`;
            }
        }
    })
});
