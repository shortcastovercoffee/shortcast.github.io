const ImageProcessor = require("./src/imgSizeCalculator");
const CarbonEmissions = require("./src/carbonEmissionsCalculator");

// Imgae size calculator
const directoryPath = "assets";
const maxSize = 1024; // 1 Mo (en octets)

const imageProcessor = new ImageProcessor(maxSize);
imageProcessor.browseDirectory(directoryPath);



// Carbon Emissions
// exemple de données
const sampleData = {
    pageViews: Math.round(Math.random(1, 100) * (100, 1000)),
    serverEnergyConsumption: Math.round(Math.random(1, 100) * 100) // en kWh
};

// ratios
const samplePolicies = {
    pageViews: {
        rate: 0.002, // kg CO2 par vue de page
        maxEmission: 100 // émission maximale acceptable en kg CO2
    },
    serverEnergyConsumption: {
        rate: 0.5, // kg CO2 par kWh
        maxEmission: 300 // émission maximale acceptable en kg CO2
    }
};

// Utilisation du calculateur
const calculator = new CarbonEmissions();
const results = calculator.calculate(sampleData, samplePolicies);
console.log(results);


