const init = () => {
  document.addEventListener('DOMContentLoaded', function () {
    const inputElement = document.getElementById('artist');
    const errorMessageElement = document.getElementById('error-message');

    inputElement.addEventListener('input', function () {
      const maxLength = parseInt(inputElement.getAttribute('maxlength'), 10);
      const currentLength = inputElement.value.length;

      if (currentLength >= maxLength) {
        errorMessageElement.textContent = 'Exceeded maximum character limit.';
        errorMessageElement.classList.add('active');
      } else {
        errorMessageElement.textContent = '';
        errorMessageElement.classList.remove('active');
      }
    });
  });
};

export default { init };
