document.addEventListener('DOMContentLoaded', function () {
  const gallery = document.querySelector('.gallery');
  const images = gallery.querySelectorAll('img');
  const lightbox = document.createElement('div');
  const lightboxImage = document.createElement('img');

  lightbox.id = 'lightbox';
  lightbox.appendChild(lightboxImage);
  document.body.appendChild(lightbox);

  images.forEach(image => {
      image.addEventListener('click', () => {
          lightbox.classList.add('active');
          lightboxImage.src = image.src;
      });
  });

  lightbox.addEventListener('click', () => {
      lightbox.classList.remove('active');
  });
});
