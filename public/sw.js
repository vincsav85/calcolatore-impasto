const CACHE_NAME = 'calcolatore-impasto-v1'

// File da salvare in cache per il funzionamento offline
const FILES_DA_CACHARE = [
  '/',
  '/index.html',
  '/manifest.json'
]

// Installazione — salva i file in cache
self.addEventListener('install', evento => {
  evento.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_DA_CACHARE)
    })
  )
})

// Attivazione — elimina cache vecchie
self.addEventListener('activate', evento => {
  evento.waitUntil(
    caches.keys().then(chiavi => {
      return Promise.all(
        chiavi
          .filter(chiave => chiave !== CACHE_NAME)
          .map(chiave => caches.delete(chiave))
      )
    })
  )
})

// Fetch — serve i file dalla cache quando offline
self.addEventListener('fetch', evento => {
  evento.respondWith(
    caches.match(evento.request).then(risposta => {
      // Se il file è in cache lo serve da lì
      // altrimenti lo scarica dalla rete
      return risposta || fetch(evento.request)
    })
  )
})