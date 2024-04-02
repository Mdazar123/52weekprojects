// Define an array of plant objects with image URLs and information
const plants = [
    {
        image: 'path/to/plant1.jpg',
        name: 'Plant 1',
        description: 'Description of Plant 1.'
    },
    {
        image: 'path/to/plant2.jpg',
        name: 'Plant 2',
        description: 'Description of Plant 2.'
    },
    // Add more plant objects as needed
];

// Function to load a random plant
function loadRandomPlant() {
    const randomIndex = Math.floor(Math.random() * plants.length);
    const randomPlant = plants[randomIndex];

    // Update the image source
    document.getElementById('plant-image').src = randomPlant.image;

    // Update the plant information
    document.getElementById('plant-info').innerText = `
        Name: ${randomPlant.name}
        Description: ${randomPlant.description}
    `;
}

// Load a random plant when the page loads
window.onload = loadRandomPlant;
