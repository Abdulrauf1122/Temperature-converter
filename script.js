const form = document.getElementById('converter-form');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const celsius = parseFloat(document.getElementById('celsius').value);
  const fahrenheit = (celsius * 9/5) + 32;
  resultDiv.textContent = `${celsius} Celsius is equal to ${fahrenheit.toFixed(2)} Fahrenheit.`;
});
