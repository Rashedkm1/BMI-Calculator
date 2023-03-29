const form = document.querySelector('form');
const calculateBtn = document.querySelector('#calculateBtn');
const resultDiv = document.querySelector('#result');

calculateBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const weight = Number(document.querySelector('#weightInput').value);
  const height = Number(document.querySelector('#heightInput').value);

  const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
  
  resultDiv.innerHTML = `Your BMI is ${bmi}`;
  
  document.querySelector('#weightInput').value = " ";
  document.querySelector('#heightInput').value = " ";
});
