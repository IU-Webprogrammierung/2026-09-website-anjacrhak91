// Load the shared header and footer.
loadComponent('header', 'components/header.html');
loadComponent('footer', 'components/footer.html');


// Fetch a component and insert it into its placeholder.
async function loadComponent(selector, path) {
    const response = await fetch(path);
    const html = await response.text();
    const element = document.querySelector(selector);
    element.innerHTML = html;
}