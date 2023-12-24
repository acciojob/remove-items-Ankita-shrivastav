const removeButton = document.querySelector('input[type="button"]');
const colorSelect = document.getElementById('colorSelect');

removeButton.addEventListener('click', function() {
  const selectedOption = colorSelect.value;
  const optionToRemove = colorSelect.querySelector(option[value="${selectedOption}"]);

  if (optionToRemove) {
    colorSelect.removeChild(optionToRemove);
  }
});