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
}