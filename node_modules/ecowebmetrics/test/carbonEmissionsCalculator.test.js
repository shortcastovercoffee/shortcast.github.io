const CarbonEmissions = require("../src/carbonEmissionsCalculator");


test("Calculate emission", () => {
    const carbonEmissions = new CarbonEmissions();
    const testData = 100;
    const testPolicy = { rate: 0.5 };
    const expectEmission = 50;
    expect(carbonEmissions.calculateEmission(testData, testPolicy)).toBe(expectEmission);
});

test("Calculate emission score", () => {
    const carbonEmissions = new CarbonEmissions();
    const testEmission = 50; // Émission de test
    const testPolicy = { maxEmission: 100 }; // Politique de test
    const expectedScore = 50; // Score attendu
    expect(carbonEmissions.calculateEmissionScore(testEmission, testPolicy)).toBe(expectedScore);
});


