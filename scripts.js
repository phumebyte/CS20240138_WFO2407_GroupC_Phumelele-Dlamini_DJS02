const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  // result.innerText = dividend / divider; - This line will divide strings , not numbers

  // Clear previous results
  result.innerText = ""
  result.classList.remove("error-message")

  try {
  // Convert input to floats ( converts strings to floating point numbers)
  // Trims the input to ensure whitespace and trailing spaces do not cause problems
  const floatDividend = parseFloat(dividend.trim());
  const floatDivider = parseFloat(divider.trim());

  // Logic to check if inputs are valid

  // Check if inputs are present
  if (isNaN(floatDividend) || isNaN(floatDivider)){
    result.classList.add("error-message")
    result.innerText = "Please enter both dividend and divider correctly"
    return // ends the function execution
  }

  if (floatDivider === 0){
    // If divider value is 0, answer is undefined
    result.classList.add("error-message")
    result.innerText = "Cannot divide by zero"
    return // ends the function execution
  } 

  if(dividend.trim().match(/[^0-9]/) || divider.trim().match(/[^0-9]/)){
    // If inputs contain non-numeric characters, answer is undefined
    result.classList.add("error-message")
    result.innerText = "Please enter valid numbers"
    return // ends the function execution
  }

  // If inputs are valid, display the answer and remove error message class
  result.classList.remove("error-message")
  result.innerText = Math.floor(floatDividend / floatDivider) // Removed math.floor usage because it rounds down the number

} catch  (error) {
  // Catch any errors during execution
  console.error("An error occured:",error.message)
  result.classList.add("error-message")
  result.innerText = "An unexpected error occured. Please try again."
}
});

