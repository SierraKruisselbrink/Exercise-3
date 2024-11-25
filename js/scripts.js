let currentImageIndex = 1;
const maxImages = 5;

document.getElementById('waterButton').addEventListener('click', function () {
    if (currentImageIndex < maxImages) {
        currentImageIndex++;
        document.getElementById('mainImage').src = `images/transparent/${currentImageIndex}.png`;
    } else {
        currentImageIndex = 1;
        document.getElementById('mainImage').src = `images/transparent/${currentImageIndex}.png`;
    }
});
