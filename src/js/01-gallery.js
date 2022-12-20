// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox"; 
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
const galleryEl = document.querySelector('.gallery');

const markup = galleryItems.reduce((acc, item) => {
    return acc + `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`;
}, '');

galleryEl.insertAdjacentHTML('beforeend', markup)

galleryEl.addEventListener('click', onGalleryClick);

let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', onGalleryClick);


function onGalleryClick(event) {
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') return;

    const imgEl = event.target;

    // const instance = basicLightbox.create(`
    //     <img src="${imgEl.dataset.source}">
    // `);
    // instance.show();

    document.addEventListener('keydown', onGalleryKeypress);

    function onGalleryKeypress(event) {
        if (event.key === 'Escape') {
            instance.close()
            document.removeEventListener('keydown', onGalleryKeypress)
        }
    }
}
