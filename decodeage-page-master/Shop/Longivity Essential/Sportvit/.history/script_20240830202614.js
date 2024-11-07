var emailInput = document.getElementById('email-field');
var emailLabel = document.getElementById('Email-label');
var emailError = document.getElementById('email-error');
const dropdownButton = document.querySelector('.dropdown-button');
const dropdownOptions = document.querySelector('.dropdown-options');
const dropdownSelected = document.getElementById('dropdown-selected');
const arrowBtn = document.getElementById('arrowBtn');
const secondDropdown = document.querySelector('.second-dropdown');
const secondDropdownButton = document.querySelector('.second-dropdown-button');
const secondDropdownOptions = document.getElementById('second-dropdown-options');
const secondArrowBtn = document.getElementById('secondArrowBtn');
// Email validation function
function validateEmail() {
    emailLabel.style.bottom = '45px';
    emailLabel.style.fontSize = '12px';

    if (!emailInput.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = 'Please enter a valid email';
        return false;
    }
    emailError.innerHTML = '';
    return true;
}
// Dropdown functionality
dropdownButton.addEventListener('click', function() {
    dropdownOptions.classList.toggle('show');
    arrowBtn.classList.toggle('open');
});
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
        secondDropdown.style.display = 'block';
    }
});