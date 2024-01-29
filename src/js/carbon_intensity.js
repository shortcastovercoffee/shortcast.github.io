// Fetch the user's IP address from a third-party service

import { averageIntensity } from "@tgwf/co2";
import { WebsiteCarbonCalculator, WebsiteCarbonCalculatorError } from 'website-carbon-calculator';


fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(datalog => {
        // Log the IP address for debugging
       // console.log('IP Address:', data.ip);

        // Use the IP address in the next API call
        return fetch(`https://api.thegreenwebfoundation.org/api/v3/ip-to-co2intensity/${datalog.ip}`);
    })
    .then(response => {
        // Log the response object for debugging
        //console.log('Response:', response);

        if (!response.ok) {
            // Throw an error if the response is not ok
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(datalog => {
        // Log the data for debugging
        console.log('Data:', datalog.carbon_intensity);
 
        const { data } = averageIntensity;
        
        const value = data.hasOwnProperty(datalog.country_code_iso_3) ? data[datalog.country_code_iso_3] : data['USA'];
        console.log(value); // This will display 368.1

        // Assuming the response has a 'carbon_intensity' field
        const carbonIntensity = datalog.carbon_intensity;
        if (value < datalog.carbon_intensity) {
            document.getElementById('carbonIntensity').textContent = `The current grid intensity of electricity in your country is ${value} metric tons of CO2 per gigawatthour. This is lower than the annual average grid intensity, which is ${datalog.carbon_intensity} metric tons of CO2 per gigawatthour. Spotify links are hence shown.`;
        } else {
            document.getElementById('carbonIntensity').textContent = `The current grid intensity of electricity in your country is ${value} metric tons of CO2 per gigawatthour. This is higher than the annual average grid intensity, which is ${datalog.carbon_intensity} metric tons of CO2 per gigawatthour. Spotify links are hence not shown.`;
        }
        

    })
    .catch(error => {
        // Log the error to the console
        console.error('Error fetching data:', error);
         document.getElementById('carbonIntensity').textContent = 'Failed to load carbon intensity data.';
    });

    async function calculateCarbonEmission() {
        try {
            const websiteCarbonCalculator = new WebsiteCarbonCalculator({ pagespeedApiKey: 'AIzaSyBV9c3IyhIe--ySKvNek5f225gGm5mBisc' });
            const result = await websiteCarbonCalculator.calculateByURL('https://shortcastovercoffee.com');
            console.log(result.co2PerPageview);
            if (result && result.co2PerPageview !== undefined) {
                document.getElementById('wcb').textContent = `CO2 Emission per Pageview: ${result.co2PerPageview.toFixed(4)}g CO2`;
            } else {
                document.getElementById('data-container').textContent = "Result object is missing or doesn't have the co2PerPageview property.";
            }
        } catch (error) {
            if (error instanceof WebsiteCarbonCalculatorError) {
                console.warn('WebsiteCarbonCalculatorError:', error.message);
                document.getElementById('data-container').textContent = 'WebsiteCarbonCalculatorError: ' + error.message;
            } else {
                console.error("An unexpected error occurred:", error);
                document.getElementById('data-container').textContent = "An unexpected error occurred.";
            }
        }
    }
    
    calculateCarbonEmission();

