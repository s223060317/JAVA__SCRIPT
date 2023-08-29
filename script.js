// String methods
const str = 'Hello, World!';
document.getElementById('stringLength').textContent = `String Length: ${str.length}`;
document.getElementById('uppercase').textContent = `Uppercase: ${str.toUpperCase()}`;
document.getElementById('lowercase').textContent = `Lowercase: ${str.toLowerCase()}`;
document.getElementById('substring').textContent = `Substring: ${str.substring(0, 5)}`;
document.getElementById('indexOf').textContent = `Index of "World": ${str.indexOf('World')}`;

// Number methods
const num = 123.456;
document.getElementById('toFixed').textContent = `Fixed to 2 decimal places: ${num.toFixed(2)}`;
document.getElementById('toString').textContent = `Converted to string: ${num.toString()}`;
document.getElementById('toExponential').textContent = `Exponential notation: ${num.toExponential(2)}`;
document.getElementById('round').textContent = `Rounded: ${Math.round(num)}`;
document.getElementById('sqrt').textContent = `Square root: ${Math.sqrt(num)}`;

// Array methods
const arr = [1, 2, 3, 4, 5];
document.getElementById('arrayLength').textContent = `Array Length: ${arr.length}`;
document.getElementById('firstElement').textContent = `First element: ${arr[0]}`;
document.getElementById('lastElement').textContent = `Last element: ${arr[arr.length - 1]}`;
document.getElementById('arrayJoined').textContent = `Array joined as string: ${arr.join(', ')}`;
document.getElementById('arrayReversed').textContent = `Array reversed: ${arr.reverse()}`;

// Date methods
const currentDate = new Date();
document.getElementById('currentDate').textContent = `Current Date: ${currentDate}`;
document.getElementById('dayOfWeek').textContent = `Day of the week: ${currentDate.getDay()}`;
document.getElementById('month').textContent = `Month: ${currentDate.getMonth()}`;
document.getElementById('year').textContent = `Year: ${currentDate.getFullYear()}`;
document.getElementById('time').textContent = `Time: ${currentDate.toLocaleTimeString()}`;

// Function methods (Weather Forecast Example)
function getWeather(city) {
  // Simulated API call
  const weatherData = {
    city: city,
    temperature: 25,
    condition: 'Sunny'
  };
  return weatherData;
}

const city = 'New York';
const weatherInfo = getWeather(city);
document.getElementById('weatherInfo').textContent = `Weather in ${weatherInfo.city}: ${weatherInfo.temperature}°C, ${weatherInfo.condition}`;
