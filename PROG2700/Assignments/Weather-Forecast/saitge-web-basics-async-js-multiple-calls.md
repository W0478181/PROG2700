### Here's an example of how you can make multiple asynchronous API calls using `Promise.all()` in JavaScript:

```javascript
// Import the 'node-fetch' module to use the fetch API in a Node.js environment.
// If you're using this code in a browser, you don't need this line.
const fetch = require('node-fetch');

// Define an array of URLs to fetch data from.
const urls = [
  'https://api.example.com/data1',
  'https://api.example.com/data2',
  'https://api.example.com/data3'
];

// Define an asynchronous function to fetch data from a given URL.
const fetchData = async (url) => {
  // Use the fetch API to make a GET request to the URL.
  const response = await fetch(url);
  // Parse the response as JSON and return the resulting object.
  return response.json();
};

// Define an asynchronous function to fetch data from all URLs.
const fetchAllData = async () => {
  try {
    // Use the map() method to create an array of promises by calling fetchData for each URL.
    const promises = urls.map(url => fetchData(url));
    // Use Promise.all() to wait for all promises to resolve and get the results.
    const results = await Promise.all(promises);
    // Log the results to the console.
    console.log(results);
  } catch (error) {
    // If an error occurs during the fetch process, log the error message to the console.
    console.error('Error fetching data:', error);
  }
};

// Call the fetchAllData function to initiate the data fetching process.
fetchAllData();

```

In this example:
- We define an array of URLs to fetch data from.
- The `fetchData` function fetches data from a given URL and returns the parsed JSON response.
- The `fetchAllData` function maps over the array of URLs, creating a promise for each fetch operation. It then uses `Promise.all()` to wait for all the promises to resolve.
- If all promises resolve successfully, the results are logged to the console. If any promise is rejected, the error is caught and logged.

This approach allows you to run multiple asynchronous operations in parallel and handle their results once all of them are completed.

