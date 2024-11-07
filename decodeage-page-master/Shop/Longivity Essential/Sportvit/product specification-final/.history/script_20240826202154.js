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

    // Function to handle FAQ and accordion clicks
    function setupAccordionAndFAQ() {
        document.querySelectorAll('.accordion-title, .FAQ-title').forEach(item => {
            item.addEventListener('click', event => toggleContent(item));
        });

        // Initially hide all accordion and FAQ content
        document.querySelectorAll('.accordion-content, .FAQ-content').forEach(content => {
            content.style.display = 'none';
        });
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

    // Function to handle thumbnail clicks
    function setupThumbnailClicks() {
        document.querySelectorAll('.thumbnail').forEach(thumbnail => {
            thumbnail.addEventListener('click', () => {
                const imageSrc = thumbnail.querySelector('img').src;
                updateMainImage(imageSrc);
            });
        });
    }

    // Add event listeners once the DOM is loaded
    document.addEventListener('DOMContentLoaded', function() {
        // Quantity buttons
        document.getElementById('increase-quantity').addEventListener('click', increaseQuantity);
        document.getElementById('decrease-quantity').addEventListener('click', decreaseQuantity);

        // Add to cart and buy now buttons
        document.getElementById('add-to-cart').addEventListener('click', function() {
            const selectedOption = document.querySelector('input[name="purchase"]:checked');
            if (selectedOption) {
                alert(`Added to cart: ${selectedOption.nextElementSibling.textContent}. Quantity: ${document.getElementById('quantity').value}`);
            } else {
                alert('Please select an option.');
            }
        });

        document.getElementById('buy-now').addEventListener('click', function() {
            const selectedOption = document.querySelector('input[name="purchase"]:checked');
            if (selectedOption) {
                alert(`Proceeding to checkout with: ${selectedOption.nextElementSibling.textContent}. Quantity: ${document.getElementById('quantity').value}`);
            } else {
                alert('Please select an option.');
            }
        });

        // Initialize all accordion and FAQ functionality
        setupAccordionAndFAQ();

        // Initialize thumbnail click functionality
        setupThumbnailClicks();

        // Handle selection and scrolling for timeline items
        document.querySelectorAll('.timeline-item').forEach(item => {
            item.addEventListener('click', () => {
                document.querySelectorAll('.timeline-item').forEach(i => {
                    i.classList.remove('selected');
                    i.classList.remove('active');
                });

                item.classList.add('selected');
                item.classList.add('active');
                item.scrollIntoView({ behavior: 'smooth', inline: 'center' });
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

        // Handle blended titles functionality
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

       , handleSlide();
    });
})();
