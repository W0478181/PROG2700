Here's an example that uses `async`/`await` along with `Promise.all()` to fetch both the current weather and the 5-day forecast concurrently:

```javascript
// Function to fetch current weather data
async function fetchCurrentWeather(city) {
    const apiKey = 'YOUR_API_KEY';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Failed to fetch current weather data');
    }
    return response.json();
}

// Function to fetch 5-day weather forecast data
async function fetchWeatherForecast(city) {
    const apiKey = 'YOUR_API_KEY';
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Failed to fetch weather forecast data');
    }
    return response.json();
}

// Function to fetch both current weather and 5-day forecast data using async/await and Promise.all
async function fetchWeatherData(city) {
    try {
        const [currentWeather, forecast] = await Promise.all([
            fetchCurrentWeather(city),
            fetchWeatherForecast(city)
        ]);

        console.log(`Current Temperature in ${currentWeather.name}: ${currentWeather.main.temp}°C`);
        console.log(`Current Weather: ${currentWeather.weather[0].description}`);
        
        console.log(`5-Day Forecast for ${forecast.city.name}:`);
        forecast.list.forEach(item => {
            console.log(`Date: ${item.dt_txt}, Temp: ${item.main.temp}°C, Weather: ${item.weather[0].description}`);
        });
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Example usage: Fetch weather data for a specified city
fetchWeatherData('Halifax');
```

### Explanation:

1. **Fetching Current Weather:**
   ```javascript
   async function fetchCurrentWeather(city) {
       const apiKey = 'YOUR_API_KEY';
       const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
       const response = await fetch(url);
       if (!response.ok) {
           throw new Error('Failed to fetch current weather data');
       }
       return response.json();
   }
   ```
   This function uses `async`/`await` to fetch the current weather data for a specified city and returns the parsed JSON response. It throws an error if the request fails.

2. **Fetching 5-Day Forecast:**
   ```javascript
   async function fetchWeatherForecast(city) {
       const apiKey = 'YOUR_API_KEY';
       const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
       const response = await fetch(url);
       if (!response.ok) {
           throw new Error('Failed to fetch weather forecast data');
       }
       return response.json();
   }
   ```
   This function uses `async`/`await` to fetch the 5-day weather forecast data for a specified city and returns the parsed JSON response. It throws an error if the request fails.

3. **Fetching Both Current Weather and 5-Day Forecast Using `async`/`await` and `Promise.all`:**
   ```javascript
   async function fetchWeatherData(city) {
       try {
           const [currentWeather, forecast] = await Promise.all([
               fetchCurrentWeather(city),
               fetchWeatherForecast(city)
           ]);

           console.log(`Current Temperature in ${currentWeather.name}: ${currentWeather.main.temp}°C`);
           console.log(`Current Weather: ${currentWeather.weather[0].description}`);
           
           console.log(`5-Day Forecast for ${forecast.city.name}:`);
           forecast.list.forEach(item => {
               console.log(`Date: ${item.dt_txt}, Temp: ${item.main.temp}°C, Weather: ${item.weather[0].description}`);
           });
       } catch (error) {
           console.error('Error fetching weather data:', error);
       }
   }
   ```
   This function uses `Promise.all` to fetch both the current weather and 5-day forecast data concurrently. It logs the results to the console or logs an error if the requests fail.

4. **Example Usage:**
   ```javascript
   fetchWeatherData('Halifax');
   ```
   This line calls the `fetchWeatherData` function to fetch weather data for Halifax.

This approach ensures that both API calls are made concurrently, improving the efficiency of the data fetching process. 