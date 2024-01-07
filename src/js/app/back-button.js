// Functionality for the Back button in header
// returns back to the previous url
const init = () => {
  document.addEventListener('DOMContentLoaded', function () {
    const backButton = document.querySelector('.nav-bar__back-btn');

    backButton.addEventListener('click', function () {
      history.back();
    });
  });
};

export default { init };
