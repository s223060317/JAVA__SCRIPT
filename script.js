// String methods
const str = 'Hello, World!';
console.log('String Length:', str.length);
console.log('Uppercase:', str.toUpperCase());
console.log('Lowercase:', str.toLowerCase());
console.log('Substring:', str.substring(0, 5));
console.log('Index of "World":', str.indexOf('World'));

// Number methods
const num = 123.456;
console.log('Fixed to 2 decimal places:', num.toFixed(2));
console.log('Converted to string:', num.toString());
console.log('Exponential notation:', num.toExponential(2));
console.log('Rounded:', Math.round(num));
console.log('Square root:', Math.sqrt(num));

// Array methods
const arr = [1, 2, 3, 4, 5];
console.log('Array Length:', arr.length);
console.log('First element:', arr[0]);
console.log('Last element:', arr[arr.length - 1]);
console.log('Array joined as string:', arr.join(', '));
console.log('Array reversed:', arr.reverse());

// Date methods
const currentDate = new Date();
console.log('Current Date:', currentDate);
console.log('Day of the week:', currentDate.getDay());
console.log('Month:', currentDate.getMonth());
console.log('Year:', currentDate.getFullYear());
console.log('Time:', currentDate.toLocaleTimeString());

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

function displayWeather(city, temperature, condition) {
  console.log(`Weather in ${city}: ${temperature}°C, ${condition}`);
}

const city = 'New York';
const weatherInfo = getWeather(city);
displayWeather(weatherInfo.city, weatherInfo.temperature, weatherInfo.condition);
