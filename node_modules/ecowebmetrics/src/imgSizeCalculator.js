const fs = require("fs");
const path = require("path");
const sizeOf = require("image-size");

class ImageProcessor {
    constructor() {

        this.clearJsonData("data.json");
    }

    // Fonction pour effacer les anciennes données
    clearJsonData(filePath) {
        fs.writeFileSync(filePath, "[]", "utf8", (err) => {
            if (err) {
                console.error("Erreur lors de la suppression des données du fichier JSON :", err);
            } else {
                console.log("Les anciennes données ont été supprimées du fichier JSON.");
            }
        });
    }

    calculimgTotalSize(filePath) {
        const dimensions = sizeOf(filePath);
        const imgTotalSize = dimensions.width * dimensions.height;
        console.log("Largeur : " + dimensions.width + "px , Hauteur : " + dimensions.height + "px");

        return [dimensions.width, dimensions.height, imgTotalSize];
    }


    calculImgWeight(filePath) {
        const stats = fs.statSync(filePath);

        const fileSizeInBytes = stats.size;
        const fileSizeInKb = Number((fileSizeInBytes / 1024).toFixed(2));
        console.log("Le poids de l'image est de " + fileSizeInKb + " Ko.");

        return fileSizeInKb;
    }


    calculImgCarbonEmission(imgWeight) {
        const kwhEnergyPerKb = 0.2 / 1024; // Energy consumption per Ko (in kWh)
        const kgCo2PerKwh = 0.5; // CO2 per kWh (in kg)

        const totalEnergyConsumed = imgWeight * kwhEnergyPerKb; // Energy consumed in kWh
        const totalCarbonEmission = Number((totalEnergyConsumed * kgCo2PerKwh).toFixed(3)); // Carbon emission in kg
        console.log("L'image dépense " + totalCarbonEmission + " kg de CO2.");

        return totalCarbonEmission;
    }


    isImgLarge(filePath) {
        try {
            const [imgTotalSize] = this.calculimgTotalSize(filePath);
            const maxSize = 1024;
            if (imgTotalSize > maxSize) {
                console.log("La taille de l'image est trop grande.");
            } else {
                console.log("La taille de l'image est bonne.");
            }

            return imgTotalSize > maxSize;
        } catch (error) {
            console.error("Erreur lors de la lecture des dimensions de l'image :", error);
            return false;
        }
    }


    // Save data in JSON
    saveDataToJson(filePath, newData) {
        let jsonData = [];
        try {
            const existingData = fs.readFileSync(filePath);
            jsonData = JSON.parse(existingData);
        } catch (error) {
            console.error("Erreur lors de la lecture du fichier JSON :", error);
        }

        // Append new data
        jsonData.push(newData);

        // Write updated data back to the file
        const updatedJsonData = JSON.stringify(jsonData, null, 2);
        fs.writeFileSync(filePath, updatedJsonData, "utf8");
    }


    browseDirectory() {

        const directoryPath = "assets";

        // Filter images files
        const imageExtensions = [".jpg", ".jpeg", ".png", ".gif"];

        const isImageFile = (fileName) => {
            const extension = path.extname(fileName).toLowerCase();
            return imageExtensions.includes(extension);
        };

        // Browse directory
        fs.readdir(directoryPath, (err, files) => {
            if (err) {
                console.error("Erreur lors de la lecture du répertoire :", err);
                return;
            }

            // Filtrer les fichiers d'images
            const imageFiles = files.filter(isImageFile);



            // For each image file check size
            if (imageFiles.length === 0) {
                console.log("Aucune image trouvée dans le dossier.");
            } else {
                imageFiles.forEach((file) => {
                    console.log("\nImage : ", file);


                    const filePath = path.join(directoryPath, file);

                    // Save json
                    const [width, height, imgTotalSize] = this.calculimgTotalSize(filePath);
                    const imgWeight = this.calculImgWeight(filePath);
                    const imgLarge = this.isImgLarge(filePath);
                    const imgCarbonEmission = this.calculImgCarbonEmission(imgWeight);

                    const jsonData = {
                        file: {
                            name: file,
                            widthPx: width,
                            heightPx: height,
                            weightKo: imgWeight,
                            tooLarge: imgLarge,
                            carbonEmissionKgCo2: imgCarbonEmission
                        }
                    };

                    this.saveDataToJson("data.json", jsonData);
                    // END Save json



                });
            }


        });
    }


}

// const directoryPath = "assets";
// const imageProcessor = new ImageProcessor();
// imageProcessor.browseDirectory(directoryPath);
module.exports = ImageProcessor;


