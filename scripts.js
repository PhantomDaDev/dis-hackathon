document.addEventListener('DOMContentLoaded', function () {
    const gallery = document.querySelector('.gallery');
    const images = gallery.querySelectorAll('img');
    const lightbox = document.createElement('div');
    const lightboxImage = document.createElement('img');

    lightbox.id = 'lightbox';
    lightbox.appendChild(lightboxImage);
    document.body.appendChild(lightbox);

    let currentIndex = 0;

    function showImage(index) {
        lightbox.classList.add('active');
        lightboxImage.src = images[index].src;
        currentIndex = index;
    }

    function hideLightbox() {
        lightbox.classList.remove('active');
    }

    
    images.forEach((image, index) => {
        image.addEventListener('click', () => {
            showImage(index);
        });
    });

    e
    lightbox.addEventListener('click', () => {
        hideLightbox();
    });

    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }, 3000); 
});

