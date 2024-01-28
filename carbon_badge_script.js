import { WebsiteCarbonCalculator, WebsiteCarbonCalculatorError } from 'website-carbon-calculator';

    try {
    
      const websiteCarbonCalculator = new WebsiteCarbonCalculator({pagespeedApiKey: 'AIzaSyBV9c3IyhIe--ySKvNek5f225gGm5mBisc'});
      const result = websiteCarbonCalculator.calculateByURL('https://shortcastovercoffee.com');
    
    //   {
    //     url: 'shortcastovercoffee.com',
    //     bytesTransferred: 123456,
    //     isGreenHost: true,
    //     co2PerPageview: 0.1234567,
    //   }
    
    } catch(error) {
      if(error instanceof WebsiteCarbonCalculatorError){
        console.warn(error.message);
      }
      // Do something else...
    }
    
    