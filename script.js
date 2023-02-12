const converter = document.querySelector('#converter');
const result = document.querySelector('.result');
const convertBtn = document.querySelector('.conv');
const resetBtn = document.querySelector('.reset');
const changeBtn = document.querySelector('.change');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
let celsius;
let fahrenheit;

const swap = () => {
  if (one.textContent === '°C') {
    one.textContent = '°F';
    two.textContent = '°C';
    reset();
  } else {
    one.textContent = '°C';
    two.textContent = '°F';
    reset();
  }
};

const fahrToCel = () => {
  celsius = (converter.value - 32) / 1.8;
  result.textContent = `${converter.value} °F is ${celsius.toFixed(1)} °C`;
  converter.value = '';
};

const celToFahr = () => {
  fahrenheit = converter.value * 1.8 + 32;
  result.textContent = `${converter.value} °C is ${fahrenheit.toFixed(1)} °F`;
  converter.value = '';
};

const convert = () => {
  if (converter.value !== '') {
    if (one.textContent === '°F') {
      fahrToCel();
    } else {
      celToFahr();
    }
  } else {
    result.textContent = 'You need to enter value.';
  }
};

const reset = () => {
  converter.value = '';
  result.textContent = '';
};

changeBtn.addEventListener('click', swap);
convertBtn.addEventListener('click', convert);
resetBtn.addEventListener('click', reset);
