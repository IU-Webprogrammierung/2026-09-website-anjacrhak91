// Load the shared header and footer.
loadComponent('header', 'components/header.html');
loadComponent('footer', 'components/footer.html');


// Fetch a component and insert it into its placeholder.
async function loadComponent(selector, path) {
    const response = await fetch(path);
    const html = await response.text();
    const element = document.querySelector(selector);
    element.innerHTML = html;

    if (selector === 'header') {
        initThemeToggle();
        initHeaderScroll(element);
        const button = element.querySelector('.hamburger-toggle');
        const navigation = element.querySelector('#site-nav-menu');

        button.addEventListener('click', () => {
            const isOpen = button.getAttribute('aria-expanded') === 'true';
            button.setAttribute('aria-expanded', String(!isOpen));
            button.setAttribute('aria-label', isOpen ? 'Navigation öffnen' : 'Navigation schließen');

            // Focus the first link in the navigation when it is opened.
            if (!isOpen) {
                navigation.querySelector('a').focus();
            }
        });

        // Close the navigation menu when pressing the Escape key.
        element.addEventListener('keydown', (event) => {
            if (
                event.key === 'Escape' &&
                button.getAttribute('aria-expanded') === 'true'
            ) {
                button.setAttribute('aria-expanded', 'false');
                button.setAttribute('aria-label', 'Navigation öffnen');
                button.focus();
            }
        });
    }

    if (selector === 'footer') {
        initScrollToTop(element);
    }


    // Highlight the current page link in the header and footer navigation.
    const currentPath = window.location.pathname.replace(/\/$/, '/index.html');

    element.querySelectorAll('a[href]').forEach((link) => {
        const linkUrl = new URL(link.href);
        const linkPath = linkUrl.pathname.replace(/\/$/, '/index.html');

        if (
            linkUrl.origin === window.location.origin &&
            linkPath === currentPath
        ) {
            link.setAttribute('aria-current', 'page');
        } else {
            link.removeAttribute('aria-current');
        }
    });
}

// Make the header background transparent when scrolled past its height.
function initHeaderScroll(header) {
    function updateHeaderBackground() {
        header.classList.toggle(
            'is-scrolled',
            window.scrollY > header.offsetHeight * 0.9
        );
    }

    window.addEventListener('scroll', updateHeaderBackground, {
        passive: true
    });

    window.addEventListener('resize', updateHeaderBackground);

    updateHeaderBackground();
}

// Show the scroll-to-top link after scrolling past one viewport height.
function initScrollToTop(footer) {
    const scrollToTop = footer.querySelector('.scroll-to-top');

    function updateScrollToTopVisibility() {
        scrollToTop.classList.toggle(
            'is-visible',
            window.scrollY > window.innerHeight * 0.5
        );
    }

    window.addEventListener('scroll', updateScrollToTopVisibility, {
        passive: true
    });

    window.addEventListener('resize', updateScrollToTopVisibility);

    updateScrollToTopVisibility();
}