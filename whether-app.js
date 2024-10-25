//Explanation of the Example
// Import the https Module: We first import the https module.

// Define Options: We set up the options object with:

// hostname: The domain name of the API.
// path: The specific resource we want to access.
// method: The HTTP method (GET in this case).
// Make the Request: We call https.request() with the options and provide a callback to handle the response.

// Data Handling:

// data Event: As data comes in chunks, it is concatenated into the data variable.
// end Event: This event indicates that all data has been received. We parse the complete data into JSON and log it.
// Error Handling: We listen for any errors during the request.


const https = require('https');
const { json } = require('node:stream/consumers');
const readline = require('readline');

// Your WeatherAPI key
const apiKey = '1923322c715f4aafa5f72359242510'; // Replace with your WeatherAPI key

// Create an interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to get weather data
const getWeather = (city) => {
    const options = {
        hostname: 'api.weatherapi.com',
        path: `/v1/current.json?key=${apiKey}&q=${city}&aqi=no`,
        method: 'GET',
    };
    const fullUrl = `https://${options.hostname}${options.path}`;
    console.log('Full URL:', fullUrl);

    // Make the HTTPS request
    const req = https.request(options,(res)=>{
        let data = '';
        // data Event: As data comes in chunks, it is concatenated into the data variable.
        res.on('data', (chunck)=>{
            data += chunck;
        });
        // end Event: This event indicates that all data has been received. We parse the complete data into JSON and log it.
        res.on('end', ()=>{
            const weatherData = JSON.parse(data);
            if (weatherData.error) {
                console.log(`Error: ${weatherData.error.message}`);
            }
            console.log(`weather condition: ${weatherData['current']['condition']['text']}`);
            console.log(`temperature: ${weatherData['current']['temp_c']}`);
        })
    });
    
    // Handle request error
    req.on('error', (e) => {
        console.error('Request error:', e.message);
    });

    // End the Request: Finally, we call req.end() to send the request.

    req.end();
};

// Ask user for input
rl.question('Enter the city name: ', (city) => {
    getWeather(city);
    rl.close(); // Close the readline interface
});
