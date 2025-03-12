const apiKey = '82005d27a116c2880c8f0fcb866998a0';
const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');
const weatherInfo = document.getElementById('weatherInfo');

searchBtn.addEventListener('click', () => {
    const city = cityInput.value;
    if (city) {
        fetchWeather(city);
    }
});

async function fetchWeather(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();
        const fResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`);
        const fData = await fResponse.json();
        displayWeather(data, fData);
    } catch (error) {
        weatherInfo.innerHTML = 'Error fetching data';
    }
}

function displayWeather(data, fData) {
    if (data.cod === '404') {
        weatherInfo.innerHTML = 'City not found';
        return;
    }

    const currentWeather = `
        <h3>${data.name}, ${data.sys.country}</h3>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Condition: ${data.weather[0].description}</p>
        `
    ;

    const dailyForecast = groupByDate(fData.list);
        let dailyForecastHtml = '<h3>Daily Forecast:</h3>';
        dailyForecastHtml += '<table border="1"><thead><tr><th>Date</th><th>Min Temp (°C)</th><th>Max Temp (°C)</th><th>Humidity</th><th>Condition</th></tr></thead><tbody>';
        for (let date in dailyForecast) {
            let tempMin = Math.min(...dailyForecast[date].map(item => item.main.temp_min));
            let tempMax = Math.max(...dailyForecast[date].map(item => item.main.temp_max));
            dailyForecastHtml += `
                <tr>
                    <td> ${date}</td>
                    <td> ${tempMin}</td>
                    <td> ${tempMax}</td>
                    <td> ${humidity}</td>
                    <td> ${weather.description}</td>
                </tr>
        `
        }
        dailyForecastHtml += '</tbody></table>';
    
    weatherInfo.innerHTML = currentWeather + dailyForecastHtml       
}

function groupByDate(data) {
    
    return data.reduce((acc, item) => {
        const date = new Date(item.dt * 1000).toLocaleDateString(); 
        if (!acc[date]) {
            acc[date] = [];
        }
        acc[date].push(item);
        return acc;
    }, {});
}