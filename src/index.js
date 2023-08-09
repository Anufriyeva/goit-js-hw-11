import Notiflix from "notiflix";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { getImages } from "./image-api";

const galleryElement = document.querySelector('.gallery');
const searchForm = document.getElementById('search-form');

let page = 1;
let currentSearchQuery = '';

async function createElementGallery(items) {
  const imgMarkup = images
    .map(items => {
      return `
      <a href="${image.largeImageURL}" class="photo-card">
        <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
        <div class="info">
          <p class="info-item"><b>Likes:</b> ${image.likes}</p>
          <p class="info-item"><b>Views:</b> ${image.views}</p>
          <p class="info-item"><b>Comments:</b> ${image.comments}</p>
          <p class="info-item"><b>Downloads:</b> ${image.downloads}</p>
        </div>
      </a>
    `;
    })
    .join('');

  galleryElement.insertAdjacentHTML('beforeend', imgMarkup);
  lightbox.refresh();
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});


