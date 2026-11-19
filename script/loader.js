// Load the shared header and footer.
const isEnglish = document.documentElement.lang === 'en';
const scriptUrl = document.currentScript ? document.currentScript.src : window.location.href;
const siteRoot = new URL(document.documentElement.dataset.siteRoot || '../', scriptUrl);
const localeRoot = new URL(isEnglish ? 'en/' : '', siteRoot);
const componentPath = new URL(`components/${isEnglish ? 'en/' : ''}`, siteRoot);

loadComponent('header', new URL('header.html', componentPath).href);
loadComponent('footer', new URL('footer.html', componentPath).href);


// Fetch a component and insert it into its placeholder.
async function loadComponent(selector, path) {
    const response = await fetch(path);
    const html = await response.text();
    const element = document.querySelector(selector);
    element.innerHTML = html;
    normalizeLocalReferences(element);

    if (selector === 'header') {
        initThemeToggle();
        initHeaderScroll(element);
        const button = element.querySelector('.hamburger-toggle');
        const navigation = element.querySelector('#site-nav-menu');
        const navigationLabels = isEnglish
            ? { open: 'Open navigation', close: 'Close navigation' }
            : { open: 'Navigation öffnen', close: 'Navigation schließen' };

        button.addEventListener('click', () => {
            const isOpen = button.getAttribute('aria-expanded') === 'true';
            button.setAttribute('aria-expanded', String(!isOpen));
            button.setAttribute('aria-label', isOpen ? navigationLabels.open : navigationLabels.close);

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
                button.setAttribute('aria-label', navigationLabels.open);
                button.focus();
            }
        });
    }

    if (selector === 'footer') {
        initScrollToTop(element);
        initLanguageSwitch(element);
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

function normalizeLocalReferences(element) {
    element.querySelectorAll('[href], [src], [srcset]').forEach((node) => {
        ['href', 'src', 'srcset'].forEach((attribute) => {
            const value = node.getAttribute(attribute);
            if (!value || value.startsWith('#')) return;

            if (attribute === 'srcset') {
                const candidates = value.split(',').map((candidate) => {
                    const [url, ...descriptors] = candidate.trim().split(/\s+/);
                    if (/^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(url)) return candidate.trim();
                    return `${new URL(url, localeRoot).href} ${descriptors.join(' ')}`.trim();
                });
                node.setAttribute(attribute, candidates.join(', '));
                return;
            }

            if (/^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(value)) return;
            node.setAttribute(attribute, new URL(value, localeRoot).href);
        });
    });
}

function initLanguageSwitch(footer) {
    const languageSwitch = footer.querySelector('[data-language-switch]');
    if (!languageSwitch) return;

    const pagePairs = {
        'index.html': 'index.html',
        'karriere.html': 'career.html',
        'projekte.html': 'projects.html',
        'story.html': 'story.html',
        'kulinarik.html': 'culinary.html',
        'kontakt.html': 'contact.html',
        'impressum.html': 'legal-notice.html',
        'datenschutz.html': 'privacy.html',
    };
    const currentPath = window.location.pathname.startsWith(siteRoot.pathname)
        ? window.location.pathname.slice(siteRoot.pathname.length)
        : window.location.pathname.replace(/^\/+/, '');
    const currentPage = currentPath.split('/').filter(Boolean).pop() || 'index.html';
    const isEnglishPage = document.documentElement.lang === 'en';
    const pairedPage = isEnglishPage
        ? Object.keys(pagePairs).find((germanPage) => pagePairs[germanPage] === currentPage)
        : pagePairs[currentPage];

    if (!pairedPage) {
        languageSwitch.href = new URL(isEnglishPage ? 'index.html' : 'en/index.html', siteRoot).href;
        return;
    }

    languageSwitch.href = isEnglishPage
        ? new URL(pairedPage, siteRoot).href
        : new URL(`en/${pairedPage}`, siteRoot).href;
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