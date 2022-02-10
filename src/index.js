import featured from './data/featured.json';
import pitch from './data/pitch.md';

const pitchHtml = document.getElementById("js-pitch");
pitchHtml.innerHTML = pitch;

const featuredHtml = document.getElementById("js-featured");

featured.forEach(function (item) {
  featuredHtml.innerHTML += `
      <div class="featured-item">
        <div class="featured-item__image"><img src="${item.image}"/></div>
        <div class="featured-item__title">${item.title}</div>
        <div class="featured-item__description">${item.description}</div>
      </div>
    `;
});