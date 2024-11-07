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
// Close dropdown if clicked outside
document.addEventListener('click', function(e) {
    const sidebars = ['sidebar', 'sidebar1', 'sidebar2', 'sidebar3', 'sidebar4'];
    
    let isClickInsideSidebar = false;
    
    // Check if the click is inside any of the sidebars
    sidebars.forEach(sidebarId => {
        const sidebar = document.getElementById(sidebarId);
        if (sidebar && sidebar.contains(e.target)) {
            isClickInsideSidebar = true;
        }
    });
    
    // If the click is outside all sidebars, close them
    if (!isClickInsideSidebar) {
        sidebars.forEach(sidebarId => {
            const sidebar = document.getElementById(sidebarId);
            if (sidebar) {
                sidebar.style.width = '0';
            }
        });
        
        document.querySelector('.info-button').classList.remove('hidden');
    }
});
// Popup container functions
function openSidebar() {
    document.getElementById('sidebar').style.width = '400px';
    document.getElementById('sidebar').style.height = '450px';
    document.querySelector('.info-button').classList.add('hidden');
}

function closeSidebar() {
    document.getElementById('sidebar').style.width = '0';
    document.querySelector('.info-button').classList.remove('hidden');
}

function openSidebar1() {
    document.getElementById('sidebar1').style.width = '400px';
    document.getElementById('sidebar1').style.height = '650px';
    document.querySelector('.info-button').classList.add('hidden');
}

function closeSidebar1() {
    document.getElementById('sidebar1').style.width = '0';
    document.querySelector('.info-button').classList.remove('hidden');
}

function openSidebar2() {
    document.getElementById('sidebar2').style.width = '400px';
    document.getElementById('sidebar2').style.height = '650px';
    document.querySelector('.info-button').classList.add('hidden');
}
function closeSidebar2() {
    document.getElementById('sidebar2').style.width = '0';
    document.querySelector('.info-button').classList.remove('hidden');
}
function openSidebar3() {
    document.getElementById('sidebar3').style.width = '400px';
    document.getElementById('sidebar3').style.height = '650px';
    document.querySelector('.info-button').classList.add('hidden');
}

function closeSidebar3() {
    document.getElementById('sidebar3').style.width = '0';
    document.querySelector('.info-button').classList.remove('hidden');
}function openSidebar4() {
    document.getElementById('sidebar4').style.width = '400px';
    document.getElementById('sidebar4').style.height = '650px';
    document.querySelector('.info-button').classList.add('hidden');
}

function closeSidebar4() {
    document.getElementById('sidebar4').style.width = '0';
    document.querySelector('.info-button').classList.remove('hidden');
}
