import { galleryItems } from './gallery-items.js';
// Change code below this line

const ulGalleryList = document.querySelector('.gallery');

// Створення HTML розмітки 
const createImageCards = galleryItems
  .map(({preview, original, description}) => {
  return `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
              <img
                class="gallery__image"
                src="${preview}"
                alt="${description}"
              />
            </a>
          </li>`;}).join("");


const imageCards = createImageCards;


// Додавання створеної розмітки в HTML файл
ulGalleryList.insertAdjacentHTML('beforeend',imageCards);


// Підключення simpleLightBox
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: "alt",
  captionDelay: 250,
});

