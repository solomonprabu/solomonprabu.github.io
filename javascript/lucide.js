// Initialize Lucide Icons
lucide.createIcons();

        // Smooth Scroll Logic for Navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                // Prevent default hash behavior
                e.preventDefault();
                
                // Get the target element by its ID
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    // Smoothly scroll to the element
                    window.scrollTo({
                        top: targetElement.offsetTop - 70, // Adjust for fixed header height
                        behavior: 'smooth'
                    });
                }
            });
        });