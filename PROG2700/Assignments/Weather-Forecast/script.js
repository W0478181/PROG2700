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

    const currentWeather = new Date();
    const infoDate = currentWeather.toLocaleDateString('en-us', {weekday: "long", month: "short", day: "numeric"});
    const infoTime = currentWeather.toLocaleTimeString('en-us', {hour: "2-digit", minute: "2-digit"});
    
    const weatherCard = `
        <div class = "weather-card">
            <h2><strong>${data.name}, ${data.sys.country}</strong></h2>
            <div class="weather-info">
                <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="${data.weather[0].description}">
                <div class="temp-container">
                    <p>°C  <span>${Math.round(data.main.temp)}</span></p>
                    <p>°F  <span>${Math.round(data.main.temp * 9/5 + 32)}</span></p>
                </div>
                <p>${infoDate}, ${infoTime}</p>
                <p>Currently: ${data.weather[0].description}</p>
                <p>Wind: ${Math.round(data.wind.speed * 3.6)} KPH</p>
                <p>Humidity: ${data.main.humidity}%</p>
            </div>
        </div>
        `
    ;

    const dailyForecast = groupByDate(fData.list);
    let dailyForecastHtml = '<div class="forecast-container">';
    let count = 0;
    for (let date in dailyForecast) {
        if (count >= 5) break; 
        const tempMin = Math.round(Math.min(...dailyForecast[date].map(item => item.main.temp_min)));
        const tempMax = Math.round(Math.max(...dailyForecast[date].map(item => item.main.temp_max)));
        const icon = dailyForecast[date][0].weather[0].icon;
        dailyForecastHtml += `
            <div class="forecast-card">
                <p class="day">${new Date(date).toLocaleDateString('en-US', { weekday: 'short', day: 'numeric' })}</p>
                <img src="http://openweathermap.org/img/wn/${icon}@2x.png" alt="Weather Icon">
                <p>H: ${tempMax}°C</p>
                <p>L: ${tempMin}°C</p>
            </div>
        `;
        count++;
    }
    dailyForecastHtml += '</div>';
    
    weatherInfo.innerHTML = weatherCard + dailyForecastHtml       
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