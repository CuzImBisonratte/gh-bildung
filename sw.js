const contentToCache = [
    '/res/fontawesome/css/fontawesome.min.css',
    '/res/fontawesome/css/solid.min.css',
    '/res/css/fonts.css',
    '/res/css/main.css',
    '/app/assign/trainer.css',
    '/app/assign/intervals.js',
    '/app/assign/index.html',
    '/app/intervals/index.html',
    '/app/intervals/script.js',
    '/app/intervals/style.css',
    '/app/intervals/trainer.css',
    '/app/intervals/easy/index.html',
    '/app/intervals/easy/intervals.js',
    '/app/intervals/hard/index.html',
    '/app/intervals/hard/intervals.js',
    '/app/tonality/index.html',
    '/app/tonality/script.js',
    '/app/tonality/style.css'
];

const cacheName = "gh-bildung-v0-0-1abcdeaef";

self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
    e.waitUntil((async() => {
        const cache = await caches.open(cacheName);
        console.log('[Service Worker] Caching all: app shell and content');
        await cache.addAll(contentToCache);
    })());
});

self.addEventListener('fetch', (e) => {
    e.respondWith((async() => {
        const r = await caches.match(e.request);
        console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
        if (r) { return r; }
        const response = await fetch(e.request);
        const cache = await caches.open(cacheName);
        console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
        cache.put(e.request, response.clone());
        return response;
    })());
});