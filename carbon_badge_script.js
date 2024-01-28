try {
    const websiteCarbonCalculator = new WebsiteCarbonCalculator({pagespeedApiKey: 'AIzaSyBV9c3IyhIe--ySKvNek5f225gGm5mBisc'});
    const result = await websiteCarbonCalculator.calculateByURL('https://shortcastovercoffee.com');

    // Create badge HTML element
    const badge = `<div class="carbon-badge">
                     <p>This site's carbon footprint per page view: ${result.co2PerPageview.toFixed(4)}g CO2</p>
                   </div>`;

    // Insert the badge into the HTML
    document.querySelector('#about-section').innerHTML += badge;

} catch(error) {
    if(error instanceof WebsiteCarbonCalculatorError){
        console.warn(error.message);
    }
    // Handle other errors...
}
