gallery = [
    './assets/frog1.jpeg',
    './assets/frog2.jpeg',
    './assets/frog3.jpeg',
    './assets/frog4.jpeg',
    './assets/frog5.jpeg',
    './assets/frog6.jpeg',
    './assets/frog7.jpeg',
    './assets/frog8.jpeg',
    './assets/frog9.jpeg',
    './assets/frog10.jpeg',
];

displaySlides();

function displaySlides() {
    const carousel = document.getElementById('img-carousel');
    const slides = document.querySelectorAll('.slide');

    // There are less slides than gallery items
    slides.forEach((slide, index )=> {
        const img = document.createElement('img');
        img.src = gallery[index];
        slide.append(img)
    });
}