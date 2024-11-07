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

        content.classList.toggle('show', !isExpanded);
        content.style.display = isExpanded ? 'none' : 'block';
        icon.classList.toggle('rotate', !isExpanded);
        element.setAttribute('aria-expanded', !isExpanded);
    }

    // Function to toggle visibility of timeline details for the clicked image
    function toggleDetails(timelineItem) {
        // Find all timeline items
        const allItems = document.querySelectorAll('.timeline-item');
        
        // Loop through each item
        allItems.forEach(item => {
            // Hide details and remove enlarged class from all items
            item.classList.remove('enlarged');
            item.querySelector('.timeline-details').style.display = 'none';
        });

        // Find the clicked item's details
        const details = timelineItem.querySelector('.timeline-details');

        // Check if the clicked item was already enlarged
        const isVisible = timelineItem.classList.contains('enlarged');

        // Toggle visibility of clicked item's details
        if (isVisible) {
            timelineItem.classList.remove('enlarged');
            details.style.display = 'none';
        } else {
            timelineItem.classList.add('enlarged');
            details.style.display = 'block';
        }
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

        // Accordion functionality

       
    document.querySelectorAll('.FAQ-title').forEach(item => {
        item.addEventListener('click', event => {
            const content = item.nextElementSibling;
            const icon = item.querySelector('.FAQ-icon');

            if (content.style.display === 'block') {
                content.style.display = 'none';
                icon.textContent = '▲';
            } else {
                content.style.display = 'block';
                icon.textContent = '▼';
            }
        });
    });


        // Handle selection and scrolling for timeline items
document.querySelectorAll('.timeline-item').forEach(item => {
    item.addEventListener('click', () => {
      // Remove 'selected' and 'active' classes from all items
      document.querySelectorAll('.timeline-item').forEach(i => {
        i.classList.remove('selected');
        i.classList.remove('active');
      });
      
      // Add 'selected' and 'active' class to the clicked item
      item.classList.add('selected');
      item.classList.add('active');
      
      // Scroll to the selected item if it's not fully visible
      item.scrollIntoView({ behavior: 'smooth', inline: 'center' });
    });
  });
  
  // Handle video playback on click
  document.querySelectorAll('.timeline-video-container video').forEach(video => {
    video.addEventListener('click', () => {
      if (video.paused) {
        video.play(); // Play video if paused
      } else {
        video.pause(); // Pause video if playing
      }
    });
  });
  document.querySelectorAll('.blended-title').forEach(item => {
    item.addEventListener('click', event => {
        // Get the content and icon elements
        const content = item.nextElementSibling;
        const icon = item.querySelector('.blended-icon');
        
        // Toggle content visibility
        if (content.style.display === 'block') {
            content.style.display = 'none';
            icon.textContent = '▲'; // Arrow up when content is hidden
        } else {
            content.style.display = 'block';
            icon.textContent = '▼'; // Arrow down when content is shown
        }
    });
});
document.querySelectorAll('.blended-title1').forEach(item => {
    item.addEventListener('click', event => {
        // Get the content and icon elements
        const content = item.nextElementSibling;
        const icon = item.querySelector('.blended-icon');
        
        // Toggle content visibility
        if (content.style.display === 'block') {
            content.style.display = 'none';
            icon.textContent = '▲'; // Arrow up when content is hidden
        } else {
            content.style.display = 'block';
            icon.textContent = '▼'; // Arrow down when content is shown
        }
    });
});
          
    });
})();
