$(document).ready(function () {
    const apiKey = "82005d27a116c2880c8f0fcb866998a0"; // Replace with your API key
    const weatherInfo = $("#weatherInfo");
    const searchHistoryEl = $("#searchHistory");
    const favoritesEl = $("#favorites");

    let unit = "metric"; // Default to Celsius (metric units)
    let searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    updateSearchHistory();
    updateFavorites();

    // Function to fetch weather data
    const fetchWeather = _.debounce(async (city) => {
        if (!city) return;

        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`);
            const data = response.data;
            const infoDate = new Date().toLocaleDateString('en-us', { weekday: "long", month: "short", day: "numeric" });
            const infoTime = new Date().toLocaleTimeString('en-us', { hour: "2-digit", minute: "2-digit" });

            currentCity = city;

            weatherInfo.html(`
                <h2>${data.name}<h2> 
                <h3>${infoDate}, ${infoTime}</h3>
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="${data.weather[0].description}">
                <p>Currently: ${data.weather[0].description}</p>
                <p>🌡 Temperature: ${Math.round(data.main.temp)}°${unit === "metric" ? "C" : "F"}</p>
                <p>💨 Wind Speed: ${Math.round(data.wind.speed)} m/s</p>
                <p>💧 Humidity: ${data.main.humidity}%</p>
            `);

            // Store the city in search history if not already there
            if (!searchHistory.includes(city)) {
                searchHistory.push(city);
                if (searchHistory.length > 5) searchHistory.shift(); // Keep only last 5 searches
                localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
                updateSearchHistory();
            }

            // Add "Add to Favorites" button to the weather info
            addFavoritesButton();

        } catch (error) {
            weatherInfo.html("<p style='color:red;'>City not found. Try again.</p>");
        }
    }, 500); // Debounce to avoid excessive API calls

    // Event Listener for Search Button
    $("#searchBtn").click(() => {
        const city = $("#cityInput").val().trim();
        fetchWeather(city);
    });

    // Click on a history item to re-fetch weather
    searchHistoryEl.on("click", "li", function () {
        fetchWeather($(this).text());
    });

    // Toggle between Celsius and Fahrenheit
    $("#toggleUnit").click(() => {
        unit = unit === "metric" ? "imperial" : "metric";
        const city = $("#cityInput").val().trim();
        if (currentCity) {
            fetchWeather(currentCity);
        }
    });

    // Add a city to favorites
    weatherInfo.on("click", "#addToFavorites", function () {
        const city = $("#cityInput").val().trim();
        if (city && !favorites.includes(city)) {
            favorites.push(city);
            localStorage.setItem("favorites", JSON.stringify(favorites));
            updateFavorites();
        }
    });

    // Click on a favorite to re-fetch weather
    favoritesEl.on("click", "li", function () {
        fetchWeather($(this).text());
    });

    // Update search history UI
    function updateSearchHistory() {
        searchHistoryEl.html("");
        searchHistory.forEach(city => {
            searchHistoryEl.append(`
                <li>${city}</li>
            `);
        });
    }

    // Update favorites UI
    function updateFavorites() {
        favoritesEl.html("");
        favorites.forEach(city => {
            favoritesEl.append(`<li>${city}</li>`);
        });
    }

    // Add "Favorites" button to the weather info
    function addFavoritesButton() {
        if ($("#addToFavorites").length === 0) {
            weatherInfo.append(`<button id="addToFavorites">Add to Favorites</button>`);
        }
    }
});
