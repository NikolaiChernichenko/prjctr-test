import ProductCard from './class-product';

export default class ProductManager {
  constructor(jsonUrl, containerSelector) {
    this.jsonUrl = jsonUrl;
    this.container = document.querySelector(containerSelector);

    if (!this.container) {
      console.error('Container not found.');
      return;
    }

    this.fetchDataAndRender();
  }

  async fetchDataAndRender() {
    try {
      const response = await fetch(this.jsonUrl);
      const products = await response.json();

      this.renderProducts(products);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  renderProducts(products) {
    products.forEach(productData => {
      const productCard = new ProductCard(productData);
      this.container.appendChild(productCard.render());
    });
  }
}
