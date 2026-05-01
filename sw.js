// Service Worker Sederhana untuk bypass syarat Install Aplikasi (PWA)
self.addEventListener('install', (e) => {
    console.log('[SDB Juma Eluk] Service Worker Terpasang');
});

self.addEventListener('fetch', (e) => {
    // Dibiarkan kosong agar tidak mengganggu sistem *real-time* Firebase Bosku
});
