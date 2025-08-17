// JavaScript
let currentImage = 0;
const images = ['./images/canon.png', './images/ricoh.png', './images/hp.png', './images/epson.png', './images/brother.png']; // Add paths to your images here

function showImage(index) {
    const slide = document.getElementById('slide');
    slide.src = images[index];
}

function nextImage() {
    currentImage = (currentImage + 1) % images.length; 
    showImage(currentImage);
}

function prevImage() {
    currentImage = (currentImage - 1 + images.length) % images.length; 
    showImage(currentImage);
}
