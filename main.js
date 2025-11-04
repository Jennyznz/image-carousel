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
        // Display images starting at the front of the gallery
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
    prevDot();
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
    nextDot();
}

function prevDot() {
    const dotContainer = document.getElementById('dot-container');
    const allDots = dotContainer.querySelectorAll('img');

    for (let i = 0; i < allDots.length; i++) {
        if (allDots[i].src.includes('circle.svg')) {
            allDots[i].src = './assets/circle-outline.svg';

            // Shift "current" dot
            if (i > 0) {
                const nextDot = allDots[i - 1];
                nextDot.src = './assets/circle.svg';

            // Loop to last element
            } else if (i === 0) {
                const nextDot = allDots[allDots.length - 1];
                nextDot.src = './assets/circle.svg';
            }
            break;
        }
    }
}

function nextDot() {
    const dotContainer = document.getElementById('dot-container');
    const allDots = dotContainer.querySelectorAll('img');

    for (let i = 0; i < allDots.length; i++) {
        if (allDots[i].src.includes('circle.svg')) {
            allDots[i].src = './assets/circle-outline.svg';

            const endOfArr = allDots.length - 1;


            // Shift "current" dot
            if (i < endOfArr) {
                const nextDot = allDots[i + 1];
                nextDot.src = './assets/circle.svg';

            // Loop to first element
            } else if (i === endOfArr) {
                const nextDot = allDots[0];
                nextDot.src = './assets/circle.svg';
            }
            break;
        }
    }
}
