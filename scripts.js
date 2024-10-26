const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  result.innerText = dividend / divider;
});

try {
  // Calculate answers without decimal
  const answer = Math.floor(dividend / divider)

  // Display the answer
  result.innerText = answer;

  // Convert input to floats ( converts strings to floating point numbers)
  const floatDividend = parseFloat(dividend);
  const floatDivider = parseFloat(divider);

  // Logic to check if inputs are valid

  // Check if inputs are present
  if (!floatDividend ||  !floatDivider) {
    result.classList.add("error-message")
    result.innerText = "Please enter both dividend and divider"
    throw new Error("Please enter valid numbers");
  } else if (floatDivider === 0){
    // If divider value is 0, answer is undefined
    result.classList.add("error-message")
    result.innerText = "Cannot divide by zero"
    throw new Error("Cannot divide by zero");
  }
} catch  (error) {
  // Catch any errors during execution
  console.error(error.stack);
}