export default class ProductCard {
  constructor({ title, band, year, style, country, cover, cover2x }) {
    this.title = title;
    this.band = band;
    this.year = year;
    this.style = style;
    this.country = country;
    this.cover = cover;
    this.cover2x = cover2x;
    this.container = null;
  }

  render() {
    this.container = document.createElement('div');
    this.container.classList.add('product-grid__item');

    this.container.innerHTML = `
            <div class="product-content">
              <div class="product-cover">
                <img src="${this.cover}" srcset="${this.cover} 1x, ${this.cover2x} 2x" alt="${this.title} - ${this.band}">
                <button class="product-fav-btn">
                    <span class="screen-reader-only">Add to favorites</span>
                    <svg class="icon">
                        <use xlink:href="images/svg-sprite.svg#icon-heart"></use>
                    </svg>
                </button>
              </div>
              <h3 class="product-title">${this.title}</h3>
              <h4 class="product-band">${this.band}</h4>
              <div class="product-details">
                  <p class="product-details__field">Year: <span>${this.year}</span></p>
                  <p class="product-details__field">Style: <span>${this.style}</span></p>
                  <p class="product-details__field">Country: <span>${this.country}</span></p>
              </div>
            </div>
            <button class="product-add-btn">
                <span>Add</span>
                <svg class="icon">
                    <use xlink:href="images/svg-sprite.svg#icon-plus"></use>
                </svg>
            </button>
        `;

    return this.container;
  }
}
