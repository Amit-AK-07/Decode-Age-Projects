document.addEventListener('DOMContentLoaded', function () {
  var dropdownButton = document.getElementById('dropdown-button');
  var dropdownOptions = document.getElementById('dropdown-options');
  var arrowBtn = document.getElementById('arrowBtn');
  var dropdownSelected = document.getElementById('dropdown-selected');

  function toggleDropdown() {
    dropdownOptions.classList.toggle('show');
    arrowBtn.classList.toggle('rotate');
  }
    function selectCountry(option) {
      var imgSrc = option.querySelector('img').src;
      var countryText = option.textContent.trim();
      var countryCode = option.dataset.value;
  
      dropdownSelected.innerHTML = `<img src="${imgSrc}" alt="${countryText}"> ${countryText}`;
      dropdownOptions.classList.remove('show');
      arrowBtn.classList.remove('rotate');
    }
  
    dropdownButton.addEventListener('click', toggleDropdown);

      dropdownOptions.querySelectorAll('.option').forEach(function (option) {
        option.addEventListener('click', function () {
          selectCountry(option);
        });
      });

      document.addEventListener('click', function (event) {
        if (!dropdownButton.contains(event.target) && !dropdownOptions.contains(event.target)) {
          dropdownOptions.classList.remove('show');
          arrowBtn.classList.remove('rotate');
        }
      });

})();
