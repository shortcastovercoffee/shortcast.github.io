import { WebsiteCarbonCalculator, WebsiteCarbonCalculatorError } from 'website-carbon-calculator';

async function calculateCarbonEmission() {
    try {
        const websiteCarbonCalculator = new WebsiteCarbonCalculator({ pagespeedApiKey: 'AIzaSyBV9c3IyhIe--ySKvNek5f225gGm5mBisc' });
        const result = await websiteCarbonCalculator.calculateByURL('https://shortcastovercoffee.com');

        if (result && result.co2PerPageview !== undefined) {
            document.getElementById('co2-emission-data').textContent = `CO2 Emission per Pageview: ${result.co2PerPageview.toFixed(4)}g CO2`;
        } else {
            document.getElementById('co2-emission-data').textContent = "Data not available.";
        }
    } catch (error) {
        if (error instanceof WebsiteCarbonCalculatorError) {
            console.warn('WebsiteCarbonCalculatorError:', error.message);
        } else {
            console.error("An unexpected error occurred:", error);
        }
        document.getElementById('co2-emission-data').textContent = "Error loading data.";
    }
}

calculateCarbonEmission();
