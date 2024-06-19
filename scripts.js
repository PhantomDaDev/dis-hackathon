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

document.addEventListener('DOMContentLoaded', function () {
    var triggerButton = document.getElementById('popup-trigger');
    var popupContainer = document.getElementById('popup-container');
    var closeButton = document.getElementById('popup-close');
    var overlay = document.getElementById('overlay');

    
    triggerButton.addEventListener('click', function () {
        popupContainer.style.display = 'block';
        overlay.style.display = 'block';
    });

    
    closeButton.addEventListener('click', function () {
        popupContainer.style.display = 'none';
        overlay.style.display = 'none';
    });

    
    overlay.addEventListener('click', function () {
        popupContainer.style.display = 'none';
        overlay.style.display = 'none';
    });
});
