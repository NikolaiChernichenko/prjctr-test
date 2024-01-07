const init = () => {
  document.addEventListener('DOMContentLoaded', function () {
    const favouritesPaneWrapper = document.querySelector('.favourites-pane');
    const favouritesPane = favouritesPaneWrapper.querySelector('.favourites-pane__grid');
    const closeBtn = favouritesPaneWrapper.querySelector('.favourites-pane__close-btn');

    // Show Favourites/My Library pane
    function showFavouritesPane(storageObj, storageType) {
      // Output favourites to the '.favourites-pane'
      const favIsEmpty = Object.keys(storageObj).length === 0;

      favouritesPane.innerHTML = '';

      if (!favIsEmpty) {
        Object.keys(storageObj)
          .forEach((key) => {
            const productHTML = storageObj[key];
            const productElement = document.createElement('div');
            productElement.innerHTML = productHTML;
            favouritesPane.appendChild(productElement.firstChild);
          });

        favouritesPaneWrapper.classList.add('opened');
        document.body.classList.add(`opened-pane-${storageType}`);
      }
    }

    // Hide Favourites/My Library pane
    function hideFavouritesPane() {
      favouritesPaneWrapper.classList.remove('opened');
      document.body.classList.remove('opened-pane-fav', 'opened-pane-lib');
    }

    // Add event listener to Favourites button
    document.querySelector('.nav-bar__tools-btn--favourites')
      .addEventListener('click', () => {
        const favourites = JSON.parse(localStorage.getItem('favourites')) || {};

        if (!favouritesPaneWrapper.classList.contains('opened')) {
          showFavouritesPane(favourites, 'fav');
        } else {
          hideFavouritesPane();
        }
      });

    // Add event listener to My Library button
    document.querySelector('.nav-bar__tools-btn--library')
      .addEventListener('click', () => {
        const myLibrary = JSON.parse(localStorage.getItem('myLibrary')) || {};

        if (!favouritesPaneWrapper.classList.contains('opened')) {
          showFavouritesPane(myLibrary, 'lib');
        } else {
          hideFavouritesPane();
        }
      });

    // Add event listener to Close button
    closeBtn.addEventListener('click', hideFavouritesPane);
  });
};

export default { init };
