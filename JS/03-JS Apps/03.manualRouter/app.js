const main = document.querySelector('main');

const nav = document.querySelector('nav');

nav.addEventListener('click', onNavigate);

window.addEventListener('popstate', onStart);

const views = {
    '/': () => '<h2>Home page</h2>',
    '/catalog': () => '<h2>Catalog</h2>',
    '/about': () => '<h2>About</h2>'
}

onStart()

function onStart() {
    const path = window.location.pathname;
    router(path);
}

function router(route) {
    const handler = views[route];
    if (typeof handler === 'function') {
        main.innerHTML = handler();
        return true;
    }
    return false;
}

function onNavigate(event) {
    if (event.target.tagName === 'A') {
        const url = new URL(event.target.href);
        const route = url.pathname;
        if (router(route)) {
            event.preventDefault();
            history.pushState(null, '', route);
        }
    }
}
