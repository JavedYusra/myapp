let count = 0;
const countDisplay = document.getElementById("count");
const button = document.getElementById("btn");

button.addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});
