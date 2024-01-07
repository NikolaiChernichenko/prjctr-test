// SCSS stylesheets
import '../scss/app.scss';

// SVG Icons
import '../images/svg-icons/icon-arrow.svg';
import '../images/svg-icons/icon-heart.svg';
import '../images/svg-icons/icon-folder.svg';
import '../images/svg-icons/icon-plus.svg';

// Components
import addToFav from './app/add-to-fav';
import addToLibrary from './app/add-to-library';
import showFavouritesPane from './app/show-favourites-library-pane';
import inputMaxLength from './app/input-max-length';
import backButton from './app/back-button';

addToFav.init();
addToLibrary.init();
showFavouritesPane.init();
inputMaxLength.init();
backButton.init();
