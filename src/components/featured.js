import featured from "./featured.json";

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
