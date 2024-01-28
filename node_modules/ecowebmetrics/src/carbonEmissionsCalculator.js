class CarbonEmissions {
    constructor() {
        this.calculate = function (data, policies) {
            let results = {};

            console.log("Calculating carbon emissions");

            for (let factorName in policies) {
                let policy = policies[factorName];
                let emission;

                if (data[factorName]) {
                    // Calculate emissions based on the data and policy rules
                    emission = this.calculateEmission(data[factorName], policy);

                    // Assign scores and determine whether emissions are bad or abnormal
                    let score = this.calculateEmissionScore(emission, policy);

                    // Store results
                    results[factorName] = {
                        emission: emission,
                        score: score
                    };

                    console.log(`Emission for ${factorName} calculated. Score: ${score}`);
                }
            }

            console.log("Carbon emissions calculation finished");

            return results;
        };
    }

    // Function to calculate emissions based on data and policy rules
    calculateEmission(data, policy) {
        return data * policy.rate;
    }

    // Function to calculate emission scores based on thresholds
    calculateEmissionScore(emission, policy) {
        let score = 100 - (emission / policy.maxEmission) * 100;
        return Math.round(score);
    }
}


module.exports = CarbonEmissions;