const init = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const favButtons = document.querySelectorAll('.product-fav-btn');

    favButtons.forEach((button) => {
      button.addEventListener('click', toggleFavourite);
    });

    setFavButton();
    toggleFavHeaderIcon();

    // Add/delete product to/from favourites
    function toggleFavourite(event) {
      const productCard = event.currentTarget.closest('.product-grid__item');
      const productKey = productCard.getAttribute('data-product');
      const favBtn = event.currentTarget.closest('.product-fav-btn');
      const favourites = JSON.parse(localStorage.getItem('favourites')) || {};

      if (favourites[productKey]) {
        delete favourites[productKey];
        favBtn.classList.remove('active');
      } else {
        favourites[productKey] = productCard.outerHTML;
        favBtn.classList.add('active');
      }

      localStorage.setItem('favourites', JSON.stringify(favourites));
      toggleFavHeaderIcon();
    }

    // Apply 'active' class to all products which are stored in localStorage
    // It's needed on initial page load
    function setFavButton() {
      // Loop through each product and add 'active' class if it's in favourites
      const productItems = document.querySelectorAll('.product-grid__item');
      const favourites = JSON.parse(localStorage.getItem('favourites')) || {};

      productItems.forEach((item) => {
        const productKey = item.getAttribute('data-product');
        const favButton = item.querySelector('.product-fav-btn');

        if (favourites[productKey]) {
          favButton.classList.add('active');
        } else {
          favButton.classList.remove('active');
        }
      });
    }

    // If favourites obj is not empty, then add 'active' class to the favourites icon
    // in the header, to indicate user that the favs pan is not empty
    function toggleFavHeaderIcon() {
      const favourites = JSON.parse(localStorage.getItem('favourites')) || {};
      const favIsEmpty = Object.keys(favourites).length === 0;
      const favIcon = document.querySelector('.nav-bar__tools-btn--favourites');

      favIcon.classList.toggle('active', !favIsEmpty);
    }
  });
};

export default { init };
