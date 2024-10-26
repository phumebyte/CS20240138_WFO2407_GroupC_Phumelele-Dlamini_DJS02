const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  // result.innerText = dividend / divider; - This line will divide strings , not numbers

  try {
  // Convert input to floats ( converts strings to floating point numbers)
  const floatDividend = parseFloat(dividend);
  const floatDivider = parseFloat(divider);

  // Logic to check if inputs are valid

  // Check if inputs are present
  if (isNaN(floatDividend) || isNaN(floatDivider)){
    result.classList.add("error-message")
    result.innerText = "Please enter both dividend and divider"
  } else if (floatDivider === 0){
    // If divider value is 0, answer is undefined
    result.classList.add("error-message")
    result.innerText = "Cannot divide by zero"
  } else {
    // If inputs are valid, display the answer and remove error message class
    result.classList.remove("error-message")
    result.innerText = (floatDividend / floatDivider).toFixed(2) // Removed math.floor usage because it rounds down the number
  }
} catch  (error) {
  // Catch any errors during execution
  console.error("An error occured:",error.message)
  result.classList.add("error-message")
  result.innerText = "An unexpected error occured. Please try again."
}
});

