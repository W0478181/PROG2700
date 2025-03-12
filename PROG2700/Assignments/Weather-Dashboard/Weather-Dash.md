# Weather Dashboard

## Overview
The Weather Dashboard is a responsive web application that allows users to search for cities and view current weather conditions,view weather details, toggle between Celsius and Fahrenheit, maintain a search history, and save favorite cities. The project uses **jQuery**, **Axios**, and **Lodash** to simplify DOM manipulation, API interactions, and enhance functionality.

---

## Features
1. **Search for Weather Information**:  
   Users can enter a city name to fetch and display current weather details, including:
   - Temperature
   - Wind speed
   - Humidity
   - Weather description with an icon
   
2. **Toggle Units**:  
   Easily switch between Celsius (°C) and Fahrenheit (°F) to display temperature.

3. **Search History**:  
   Recent city searches (up to 5) are saved and displayed. Clicking on a city in the search history retrieves its weather details.

4. **Favorites Management**:  
   Users can save cities to a favorites list for quick access.

5. **Responsive Design**:  
   The application is styled for both desktop and mobile devices.

---

## How the Project Works
1. **HTML Structure**:  
   - A clean layout is created using HTML5 elements for easy navigation.
   - Input fields and buttons allow user interaction.

2. **CSS Styling**:  
   - A responsive and visually appealing interface is achieved with gradients, rounded corners, and hover effects.
   - Styles are designed to ensure clarity and ease of use.

3. **JavaScript Functionality**:  
   - **API Integration**: The application fetches weather data from the OpenWeatherMap API using Axios.
   - **Dynamic Updates**: DOM manipulation with jQuery dynamically updates weather info, search history, and favorites.
   - **Data Persistence**: Search history and favorites are stored in \`localStorage\`, allowing data to persist across sessions.

---

## Libraries Used
### **jQuery**
- Simplifies DOM manipulation, event handling, and dynamic content updates.
- Example:
  \`\`\`javascript
  weatherInfo.html(\`
      <p>\${data.name}</p>
      <p>Temperature: \${Math.round(data.main.temp)}°\${unit === "metric" ? "C" : "F"}</p>
  \`);
  \`\`\`

### **Axios**
- Used for making asynchronous HTTP requests to fetch weather data from the OpenWeatherMap API.
- Example:
  \`\`\`javascript
  const response = await axios.get(\`https://api.openweathermap.org/data/2.5/weather?q=\${city}&appid=\${apiKey}&units=\${unit}\`);
  \`\`\`

### **Lodash**
- Enhances functionality with utility methods such as \`_.debounce\` to prevent excessive API calls when typing in the search input.
- Example:
  \`\`\`javascript
  const fetchWeather = _.debounce(async (city) => {
      // Fetch weather data logic
  }, 500);
  \`\`\`

---

## Additional Features
1. **Search History Limit**:  
   Only the last 5 searches are stored to maintain a concise and relevant history.

2. **Favorites List**:  
   A dedicated "Add to Favorites" button lets users save cities, and the list is displayed separately for quick access.

3. **Buttons**:  
   The "Add to Favorites" button only appears when viewing a city's weather details.

---

## How to Run the Project
1. Clone the repository.
2. Open the \`index.html\` file in a web browser.
3. Ensure an active internet connection for loading external libraries (jQuery, Axios, Lodash) and fetching API data.

---

## Future Add-ons
- Add a forecast feature to display 5-day weather predictions.
- Improve error handling with more detailed user feedback.
- Implement a map view using the OpenWeatherMap Geolocation API. 
