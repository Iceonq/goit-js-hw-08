import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

console.log(galleryItems);
const gallery = document.querySelector('.gallery');

for (let i = 0; i < galleryItems.length; i++) {
  const link = document.createElement('a');
  const img = document.createElement('img');
  gallery.append(link);
  link.append(img);
  img.classList.add('gallery__image');
  link.classList.add('gallery__item');
  link.setAttribute('href', `${galleryItems[i].original}`);
  img.setAttribute('src', `${galleryItems[i].preview}`);
  img.setAttribute('alt', `${galleryItems[i].description}`);
  img.dataset.source = `${galleryItems[i].original}`;
}

var lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
