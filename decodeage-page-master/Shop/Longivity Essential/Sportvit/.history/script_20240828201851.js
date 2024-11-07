// Email validation
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
  if (!dropdownButton.contains(e.target)) {
    dropdownOptions.classList.remove('show');
    arrowBtn.classList.remove('open');
  }
});
// popup container
// Shop
function openSidebar() {
  document.getElementById('sidebar').style.width = '400px';
  document.getElementById('sidebar').style.height = '450px';
  document.querySelector('.info-button').classList.add('hidden');
}

function closeSidebar() {
  document.getElementById('sidebar').style.width = '0';
  document.querySelector('.info-button').classList.remove('hidden');
}

// Category
function openSidebar1() {
  document.getElementById('sidebar1').style.width = '400px';
  document.getElementById('sidebar1').style.height = '650px';
  document.querySelector('.info-button').classList.add('hidden');
}

function closeSidebar1() {
  document.getElementById('sidebar1').style.width = '0';
  document.querySelector('.info-button').classList.remove('hidden');
}

// Health
function openSidebar2() {
  document.getElementById('sidebar2').style.width = '400px';
  document.getElementById('sidebar2').style.height = '650px';
  document.querySelector('.info-button').classList.add('hidden');
}

function closeSidebar2() {
  document.getElementById('sidebar2').style.width = '0';
  document.querySelector('.info-button').classList.remove('hidden');
}

// Articles
function openSidebar3() {
  document.getElementById('sidebar3').style.width = '400px';
  document.getElementById('sidebar3').style.height = '650px';
  document.querySelector('.info-button').classList.add('hidden');
}

function closeSidebar3() {
  document.getElementById('sidebar3').style.width = '0';
  document.querySelector('.info-button').classList.remove('hidden');
}

// About us
function openSidebar4() {
  document.getElementById('sidebar4').style.width = '400px';
  document.getElementById('sidebar4').style.height = '650px';
  document.querySelector('.info-button').classList.add('hidden');
}

function closeSidebar4() {
  document.getElementById('sidebar4').style.width = '0';
  document.querySelector('.info-button').classList.remove('hidden');
}
(function() {
    
    // Function to increase quantity
    function increaseQuantity() {
        let quantityInput = document.getElementById('quantity');
        let currentValue = parseInt(quantityInput.value, 10) || 0;
        quantityInput.value = currentValue + 1;
    }

    // Function to decrease quantity
    function decreaseQuantity() {
        let quantityInput = document.getElementById('quantity');
        let currentValue = parseInt(quantityInput.value, 10) || 1;
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
    }

    // Function to update the main image
    function updateMainImage(imageSrc) {
        const mainImage = document.getElementById('main-image');
        mainImage.src = imageSrc;
    }

    // Function to toggle content visibility with icon rotation
    function toggleContent(element) {
        const content = element.nextElementSibling;
        const icon = element.querySelector('.accordion-icon, .FAQ-icon');
        const isExpanded = content.classList.contains('show');

        // Close all other accordion sections
        document.querySelectorAll('.accordion-content, .FAQ-content').forEach(otherContent => {
            if (otherContent !== content) {
                otherContent.classList.remove('show');
                otherContent.style.display = 'none';
                const otherIcon = otherContent.previousElementSibling.querySelector('.accordion-icon, .FAQ-icon');
                otherIcon.classList.remove('rotate');
                otherIcon.textContent = '▲'; // Arrow up when content is hidden
                otherContent.previousElementSibling.setAttribute('aria-expanded', 'false');
            }
        });

        // Toggle the clicked section
        content.classList.toggle('show', !isExpanded);
        content.style.display = isExpanded ? 'none' : 'block';
        icon.classList.toggle('rotate', !isExpanded);
        element.setAttribute('aria-expanded', !isExpanded);
    }

    // Function to toggle visibility of timeline details for the clicked image
    function toggleDetails(timelineItem) {
        const allItems = document.querySelectorAll('.timeline-item');
        
        allItems.forEach(item => {
            item.classList.remove('enlarged');
            item.querySelector('.timeline-details').style.display = 'none';
        });

        const details = timelineItem.querySelector('.timeline-details');
        const isVisible = timelineItem.classList.contains('enlarged');

        if (isVisible) {
            timelineItem.classList.remove('enlarged');
            details.style.display = 'none';
        } else {
            timelineItem.classList.add('enlarged');
            details.style.display = 'block';
        }
    }

    // Function to handle sliding of review cards
    function handleSlide() {
        const prevButton = document.querySelector('.prev');
        const nextButton = document.querySelector('.next');
        const reviewsContainer = document.querySelector('.reviews');
        const reviewCards = document.querySelectorAll('.review-card');

        if (reviewCards.length === 0) return;

        const cardWidth = reviewCards[0].offsetWidth + parseInt(window.getComputedStyle(reviewCards[0]).marginRight, 10);
        const visibleCards = 2;
        const cardCount = reviewCards.length;
        let currentIndex = 0;

        function updateSlider() {
            reviewsContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
            prevButton.disabled = currentIndex === 0;
            nextButton.disabled = currentIndex >= cardCount - visibleCards;
        }

        prevButton.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateSlider();
            }
        });

        nextButton.addEventListener('click', () => {
            if (currentIndex < cardCount - visibleCards) {
                currentIndex++;
                updateSlider();
            }
        });

        updateSlider();
    }

    // Function to handle the "Who Can Consume Sportvit" accordion
    function setupAccordion() {
        document.querySelectorAll('.accordion-title').forEach(item => {
            item.addEventListener('click', event => toggleContent(item));
        });

        // Initially hide all accordion content
        document.querySelectorAll('.accordion-content').forEach(content => {
            content.style.display = 'none';
        });
    }

    // Function to handle FAQ clicks
    function setupFAQ() {
        document.querySelectorAll('.FAQ-title').forEach(item => {
            item.addEventListener('click', () => {
                toggleContent(item);
            });
        });

        // Initially hide all FAQ content
        document.querySelectorAll('.FAQ-content').forEach(content => {
            content.style.display = 'none';
        });
    }

    // Function to handle thumbnail clicks
    function setupThumbnailClicks() {
        document.querySelectorAll('.thumbnail').forEach(thumbnail => {
            thumbnail.addEventListener('click', () => {
                const imageSrc = thumbnail.querySelector('img').src;
                updateMainImage(imageSrc);
            });
        });
    }

    // Function to blend titles functionality
    function setupBlendedTitles() {
        document.querySelectorAll('.blended-title').forEach(item => {
            item.addEventListener('click', event => {
                const content = item.nextElementSibling;
                const icon = item.querySelector('.blended-icon');

                if (content.style.display === 'block') {
                    content.style.display = 'none';
                    icon.textContent = '▲';
                } else {
                    content.style.display = 'block';
                    icon.textContent = '▼';
                }
            });
        });

        document.querySelectorAll('.blended-title1').forEach(item => {
            item.addEventListener('click', event => {
                const content = item.nextElementSibling;
                const icon = item.querySelector('.blended-icon1');

                if (content.style.display === 'block') {
                    content.style.display = 'none';
                    icon.textContent = '▲';
                } else {
                    content.style.display = 'block';
                    icon.textContent = '▼';
                }
            });
        });
    }

    // Add event listeners once the DOM is loaded
    document.addEventListener('DOMContentLoaded', function() {
        // Quantity buttons
        document.getElementById('increase-quantity').addEventListener('click', increaseQuantity);
        document.getElementById('decrease-quantity').addEventListener('click', decreaseQuantity);
        let cartCount = 0;
        // Add to cart and buy now buttons
        document.getElementById('add-to-cart').addEventListener('click', function() {
          
            const selectedOption = document.querySelector('input[name="purchase"]:checked');
            if (selectedOption) {
              cartCount += 1;
              document.getElementById('cart-count').textContent = cartCount;
                alert(`Added to cart: ${selectedOption.nextElementSibling.textContent}. Quantity: ${document.getElementById('quantity').value}`);
            } else {
                alert('Please select an option.');
            }
        });
      });

        document.getElementById('buy-now').addEventListener('click', function() {
            const selectedOption = document.querySelector('input[name="purchase"]:checked');
            if (selectedOption) {
                alert(`Proceeding to checkout with: ${selectedOption.nextElementSibling.textContent}. Quantity: ${document.getElementById('quantity').value}`);
            } else {
                alert('Please select an option.');
            }
        });

        // Initialize all accordion functionality
        setupAccordion();

        // Initialize FAQ functionality
        setupFAQ();

        // Initialize thumbnail click functionality
        setupThumbnailClicks();

    // Handle selection and scrolling for blended titles
    setupBlendedTitles();

    // Initialize review card sliding
    handleSlide();

        // Handle selection and scrolling for timeline items
        document.querySelectorAll('.timeline-item').forEach(item => {
            item.addEventListener('click', () => {
              toggleDetails(item);
            });
        });

        // Handle video playback on click
        document.querySelectorAll('.timeline-video-container video').forEach(video => {
            video.addEventListener('click', () => {
                if (video.paused) {
                    video.play();
                } else {
                    video.pause();
                }
            });
        });

     // Handle hover effects for hoverable elements
    const hoverElements = document.querySelectorAll('.hover-effect');
    hoverElements.forEach(element => {
      element.addEventListener('mouseover', function() {
        this.style.color = 'red';
      });
      element.addEventListener('mouseout', function() {
        this.style.color = '';
      });
    });
    
  });
})();
