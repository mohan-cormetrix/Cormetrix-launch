// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Enhanced dropdown functionality for navigation
    const dropdowns = document.querySelectorAll('.dropdown');
    const isMobile = window.innerWidth <= 768;

    function setupDropdowns() {
        dropdowns.forEach(dropdown => {
            // Clear existing event listeners
            const dropdownLink = dropdown.querySelector('a');
            const newDropdownLink = dropdownLink.cloneNode(true);
            dropdownLink.parentNode.replaceChild(newDropdownLink, dropdownLink);

            if (isMobile) {
                newDropdownLink.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation(); // Prevent event from bubbling up

                    // Close other open dropdowns
                    dropdowns.forEach(otherDropdown => {
                        if (otherDropdown !== dropdown && otherDropdown.classList.contains('active')) {
                            otherDropdown.classList.remove('active');
                        }
                    });

                    dropdown.classList.toggle('active');
                });

                // Prevent clicks on dropdown menu from closing the dropdown
                const dropdownMenu = dropdown.querySelector('.dropdown-menu');
                if (dropdownMenu) {
                    dropdownMenu.addEventListener('click', function(e) {
                        e.stopPropagation(); // Prevent event from bubbling up
                    });
                }
            } else {
                dropdown.addEventListener('mouseenter', function() {
                    this.classList.add('active');
                });

                dropdown.addEventListener('mouseleave', function() {
                    this.classList.remove('active');
                });
            }
        });
    }

    setupDropdowns();

    // Update dropdown behavior on window resize
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            const isNowMobile = window.innerWidth <= 768;
            if (isNowMobile !== isMobile) {
                location.reload();
            }
        }, 250);
    });

    // Enhanced hamburger menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const header = document.querySelector('header');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });

        // Close menu when clicking on a nav link, but only for non-dropdown links or links inside dropdown menus
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', (e) => {
                // Don't close if it's a dropdown toggle on mobile
                if (isMobile && link.parentElement.classList.contains('dropdown') &&
                    !link.parentElement.querySelector('.dropdown-menu').contains(e.target)) {
                    return;
                }

                // Only close the menu if it's a regular link or a link inside a dropdown menu
                if (!link.parentElement.classList.contains('dropdown') ||
                    link.closest('.dropdown-menu')) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                    document.body.classList.remove('menu-open');
                }
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (navMenu.classList.contains('active') && !header.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
    }

    // Add animation for hero section elements
    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero-image');
    const platformHeroContent = document.querySelector('.platform-hero-content');
    const platformHeroImage = document.querySelector('.platform-hero-image');
    const atriHeroContent = document.querySelector('.atri-hero-content');
    const atriHeroImage = document.querySelector('.atri-hero-image');
    const verixHeroContent = document.querySelector('.verix-hero-content');
    const verixHeroImage = document.querySelector('.verix-hero-image');

    // Animate hero elements with a slight delay
    setTimeout(() => {
        // Index page hero
        if (heroContent) heroContent.classList.add('animate');
        if (heroImage) heroImage.classList.add('animate');

        // Platform page hero
        if (platformHeroContent) platformHeroContent.classList.add('animate');
        if (platformHeroImage) platformHeroImage.classList.add('animate');

        // AtriAI page hero
        if (atriHeroContent) atriHeroContent.classList.add('animate');
        if (atriHeroImage) atriHeroImage.classList.add('animate');

        // VerixAI page hero
        if (verixHeroContent) verixHeroContent.classList.add('animate');
        if (verixHeroImage) verixHeroImage.classList.add('animate');
    }, 300);

    // Get all elements to animate
    const featureCards = document.querySelectorAll('.feature-card');
    const productCards = document.querySelectorAll('.product-card');
    const platformFeatures = document.querySelectorAll('.platform-feature');
    const platformDescription = document.querySelector('.platform-description');
    const whyCards = document.querySelectorAll('.why-card');
    const toolCards = document.querySelectorAll('.tool-card');

    // Initial check if elements are in viewport
    animateOnScroll();

    // Add scroll event listener
    window.addEventListener('scroll', animateOnScroll);

    function animateOnScroll() {
        // Animate feature cards
        featureCards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            // If element is in viewport
            if (cardTop < windowHeight * 0.85) {
                card.classList.add('animate');
            }
        });

        // Animate product cards
        productCards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (cardTop < windowHeight * 0.85) {
                card.classList.add('animate');
            }
        });

        // Animate platform features
        platformFeatures.forEach(feature => {
            const featureTop = feature.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (featureTop < windowHeight * 0.85) {
                feature.classList.add('animate');
            }
        });

        // Animate platform description
        if (platformDescription) {
            const descriptionTop = platformDescription.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (descriptionTop < windowHeight * 0.85) {
                platformDescription.classList.add('animate');
            }
        }

        // Animate why cards
        whyCards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (cardTop < windowHeight * 0.85) {
                card.classList.add('animate');
            }
        });

        // Animate tool cards
        toolCards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (cardTop < windowHeight * 0.85) {
                card.classList.add('animate');
            }
        });
    }
});
