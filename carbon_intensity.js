// Fetch the user's IP address from a third-party service

import { averageIntensity } from "@tgwf/co2";


fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
        // Log the IP address for debugging
        console.log('IP Address:', data.ip);

        // Use the IP address in the next API call
        // return fetch(`https://api.thegreenwebfoundation.org/api/v3/ip-to-co2intensity/${data.ip}`);
        return fetch('https://api.electricitymap.org/v3/carbon-intensity/latest/1.0.0.0');
    })
    .then(response => {
        // Log the response object for debugging
        console.log('Response:', response);

        if (!response.ok) {
            // Throw an error if the response is not ok
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Log the data for debugging
        console.log('Data:', data);

        // Assuming the response has a 'carbon_intensity' field
        const carbonIntensity = data.carbon_intensity;
        // document.getElementById('carbonIntensity').textContent = `Carbon Intensity: ${carbonIntensity}`;
    })
    .catch(error => {
        // Log the error to the console
        console.error('Error fetching data:', error);
        // document.getElementById('carbonIntensity').textContent = 'Failed to load carbon intensity data.';
    });

    const { data } = averageIntensity;
const { AUS } = data;
console.log({ AUS });

