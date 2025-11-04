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

    slides.forEach((slide, index )=> {  // There are less slides than gallery items
        const img = slide.querySelector('img');
        img.src = gallery[index];
    });
}

const prevBtn = document.getElementById('left');
prevBtn.addEventListener('click', () => {
    prevSlide();
});

function prevSlide() {
    // Move last image in gallery to the front
    const last = gallery.pop();
    gallery.unshift(last);

    displaySlides();
}

const nextBtn = document.getElementById('right');
nextBtn.addEventListener('click', () => {
    nextSlide();
})

function nextSlide() {
    // Move first image in gallery to the end
    const first = gallery.shift();
    gallery.push(first);

    displaySlides();
}