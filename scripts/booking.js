/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?



/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!



/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.




/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.




/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

// Variables for rates and selected days count
let rate = 35;
let daySelectedCount = 0;

// Selecting necessary elements from the page
const daysElements = document.querySelectorAll('.blue-hover[id]');
const costElement = document.getElementById("calculated-cost");
const clearButton = document.getElementById("clear-button");
const halfDayButton = document.getElementById("half");
const fullDayButton = document.getElementById("full");

// Function to update the total cost displayed
function updateTotalCost() {
    costElement.textContent = rate * daySelectedCount;
}

// Event listeners for each day button
daysElements.forEach(function(day) {
    day.addEventListener('click', function() {
        // If the day isn't selected yet, mark it as selected and increase the count
        if (!day.classList.contains("clicked")) {
            day.classList.add("clicked");
            daySelectedCount++;
        } 
        // If the day is already selected, mark it as unselected and decrease the count
        else {
            day.classList.remove("clicked");
            daySelectedCount--;
        }
        updateTotalCost();
    });
});

// Event listener for the clear button
clearButton.addEventListener('click', function() {
    daysElements.forEach(function(day) {
        day.classList.remove("clicked");
    });    daySelectedCount = 0;
    updateTotalCost();
});

// Event listener for half day rate button
halfDayButton.addEventListener('click', function() {
    rate = 20;
    halfDayButton.classList.add("clicked");
    fullDayButton.classList.remove("clicked");
    updateTotalCost();
});

// Event listener for full day rate button
fullDayButton.addEventListener('click', function() {
    rate = 35;
    fullDayButton.classList.add("clicked");
    halfDayButton.classList.remove("clicked");
    updateTotalCost();
});