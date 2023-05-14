if ('serviceWorker' in navigator) {
    console.info("service Worker Registering");
    navigator.serviceWorker.register('/sw.js');
    console.info("service Worker Registered");
} else {
    if ('serviceWorker' in navigator == false) {
        console.warn(`'serviceWorker' in navigator is FALSE!`)
    }
};