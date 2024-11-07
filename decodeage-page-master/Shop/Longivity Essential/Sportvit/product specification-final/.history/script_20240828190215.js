document.addEventListener('DOMContentLoaded', function() {
  const dropdownButton = document.querySelector('.dropdown-button');
  const dropdownOptions = document.querySelector('.dropdown-options');
  const dropdownSelected = document.getElementById('dropdown-selected');
  const arrowBtn = document.getElementById('arrowBtn');

  // Toggle dropdown visibility
  dropdownButton.addEventListener('click', function() {
    dropdownOptions.classList.toggle('show');
    arrowBtn.classList.toggle('open');
  });

  // Update selected option
  dropdownOptions.addEventListener('click', function(e) {
    if (e.target.closest('.option')) {
      const selectedOption = e.target.closest('.option');
      const selectedText = selectedOption.textContent.trim();
      const selectedFlag = selectedOption.querySelector('img').src;

      // Update the displayed selection
      dropdownSelected.textContent = selectedText;
      dropdownButton.querySelector('img').src = selectedFlag;

      // Hide the dropdown
      dropdownOptions.classList.remove('show');
      arrowBtn.classList.remove('open');
    }
  });

  // Close dropdown if clicked outside
  document.addEventListener('click', function(e) {
    if (!dropdownButton.contains(e.target)) {
      dropdownOptions.classList.remove('show');
      arrowBtn.classList.remove('open');
    }
  });
});
