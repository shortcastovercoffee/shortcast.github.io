
import { WebsiteCarbonCalculator, WebsiteCarbonCalculatorError } from 'website-carbon-calculator';

async function calculateCarbonEmission() {
    try {
        const websiteCarbonCalculator = new WebsiteCarbonCalculator({ pagespeedApiKey: 'AIzaSyBV9c3IyhIe--ySKvNek5f225gGm5mBisc' });
        const result = await websiteCarbonCalculator.calculateByURL('https://shortcastovercoffee.com');
        console.log(result.co2PerPageview);
        if (result && result.co2PerPageview !== undefined) {
            //document.getElementById('data-container').textContent = `CO2 Emission per Pageview: ${result.co2PerPageview.toFixed(4)}g CO2`;
        } else {
           // document.getElementById('data-container').textContent = "Result object is missing or doesn't have the co2PerPageview property.";
        }
    } catch (error) {
        if (error instanceof WebsiteCarbonCalculatorError) {
            console.warn('WebsiteCarbonCalculatorError:', error.message);
            //document.getElementById('data-container').textContent = 'WebsiteCarbonCalculatorError: ' + error.message;
        } else {
            console.error("An unexpected error occurred:", error);
            document.getElementById('data-container').textContent = "An unexpected error occurred.";
        }
    }
}

calculateCarbonEmission();