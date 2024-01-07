const init = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const libButtons = document.querySelectorAll('.product-add-btn');
    const myLibrary = JSON.parse(localStorage.getItem('myLibrary')) || {};

    libButtons.forEach((button) => {
      button.addEventListener('click', toggleLibrary);
    });

    setLibButton();
    toggleLibHeaderIcon();

    // Add/delete product to/from My Library
    function toggleLibrary(event) {
      const productCard = event.currentTarget.closest('.product-grid__item');
      const productKey = productCard.getAttribute('data-product');
      const libraryBtn = event.currentTarget.closest('.product-add-btn');

      if (myLibrary[productKey]) {
        delete myLibrary[productKey];
        libraryBtn.classList.remove('active');
        libraryBtn.querySelector('span').innerText = 'Add';
      } else {
        myLibrary[productKey] = productCard.outerHTML;
        libraryBtn.classList.add('active');
        libraryBtn.querySelector('span').innerText = 'Remove';
      }

      localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
      toggleLibHeaderIcon();
    }

    // Apply 'active' class to all products which are stored in localStorage
    // Is needed on initial page load
    function setLibButton() {
      const productItems = document.querySelectorAll('.product-grid__item');

      productItems.forEach((item) => {
        const productKey = item.getAttribute('data-product');
        const libButton = item.querySelector('.product-add-btn');

        if (myLibrary[productKey]) {
          libButton.classList.add('active');
          libButton.querySelector('span').innerText = 'Remove';
        } else {
          libButton.classList.remove('active');
          libButton.querySelector('span').innerText = 'Add';
        }
      });
    }

    // If favourites obj is not empty, then add 'active' class to the favourites icon
    // in the header, to indicate user that the favs pan is not empty
    function toggleLibHeaderIcon() {
      const libIsEmpty = Object.keys(myLibrary).length === 0;
      const libIcon = document.querySelector('.nav-bar__tools-btn--library');

      libIcon.classList.toggle('active', !libIsEmpty);
    }
  });
};

export default { init };
