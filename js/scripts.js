let currentImageIndex = 1;
const maxImages = 5;

function updateImage() {
    if (currentImageIndex < maxImages - 1) {
        currentImageIndex++;
        document.getElementById('mainImage').src = `images/transparent/${currentImageIndex}.png`;
    } else {
        currentImageIndex++;
        document.getElementById('mainImage').src = `images/transparent/${currentImageIndex}.png`;
        // hide the buttons
        document.getElementById('waterButton').style.display = 'none';
        document.getElementById('sunButton').style.display = 'none';
        document.getElementById('foodButton').style.display = 'none';
        // show the restart button
        document.getElementById('regrowButton').style.display = 'block';
    }
}

function showButtons() {
    currentImageIndex = 1;
    document.getElementById('mainImage').src = `images/transparent/${currentImageIndex}.png`;
    document.getElementById('waterButton').style.display = 'block';
    document.getElementById('sunButton').style.display = 'block';
    document.getElementById('foodButton').style.display = 'block';
    document.getElementById('regrowButton').style.display = 'none';
}

document.getElementById('regrowButton').style.display = 'none';
document.getElementById('waterButton').addEventListener('click', updateImage);
document.getElementById('sunButton').addEventListener('click', updateImage);
document.getElementById('foodButton').addEventListener('click', updateImage);
document.getElementById('regrowButton').addEventListener('click', showButtons);