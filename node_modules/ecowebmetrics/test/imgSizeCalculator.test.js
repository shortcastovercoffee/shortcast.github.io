const ImageProcessor = require("../src/imgSizeCalculator");
const filePath = "./assets/logo.jpg"; // testing img


// test("Calcul image size returns the correct size", () => {
//     const imageProcessor = new ImageProcessor();
//     const expectSize = 792 * 792;

//     const [width, height, imgTotalSize] = imageProcessor.calculimgTotalSize(filePath);

//     expect(imgTotalSize).toBe(expectSize);
// });

test("Calcul image weight returns the correct weight", () => {
    const imageProcessor = new ImageProcessor();
    const expectWeight = 44.01;

    expect(imageProcessor.calculImgWeight(filePath)).toBe(expectWeight);
});

test("Calcul image carbon emission returns the correct carbon emission", () => {
    const imageProcessor = new ImageProcessor();
    const expectCarbonEmission = 0.004;
    expect(imageProcessor.calculImgCarbonEmission(44.01)).toBe(expectCarbonEmission);
});