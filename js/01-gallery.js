// Import necessary dependencies
import { galleryItems } from './gallery-items.js';


const ulGalleryList = document.querySelector('.gallery');

// Створення HTML розмітки 
const createImageCards = galleryItems
  .map(({preview, original, description}) => {
  return `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
              <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
              />
            </a>
          </li>`;}).join("");

const imageCards = createImageCards;

// Додавання створеної розмітки в HTML файл
ulGalleryList.insertAdjacentHTML('beforeend',imageCards);
ulGalleryList.addEventListener('click', imageClick);

function imageClick(event) {
  event.preventDefault();
  if(event.target.nodeName !== 'IMG') {
    return
  } 
//  Відкриття модального вікна 
  const instance = basicLightbox.create(`
  <img src="${event.target.dataset.source}" width="800" height="600">`);
  instance.show();

  ulGalleryList.addEventListener('keydown', onEscButtonPress);

  function onEscButtonPress(event) {
    if(event.code === "Escape") {
      instance.close();
      removeEventListener('keydown', onEscButtonPress);
    }
  }
}

