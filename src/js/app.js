// SCSS stylesheets
import '../scss/app.scss';

// SVG Icons
import '../images/svg-icons/icon-arrow.svg';
import '../images/svg-icons/icon-heart.svg';
import '../images/svg-icons/icon-folder.svg';
import '../images/svg-icons/icon-plus.svg';

// Components
import addToFav from './addToFav';
import ProductManager from './products/class-product-manager';

addToFav.init();

// Init products
new ProductManager('dist/js/data.json', '.products-grid');
