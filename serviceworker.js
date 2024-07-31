var staticCacheName = "pwa_port";

const filesToCache = [
	'./index.html',
	'./assets/css/main.css',
	'./assets/js/main.js',
  	'./assets/',
	'./images/',
];
 
self.addEventListener("install", function (e) {
	e.waitUntil(
		caches.open(staticCacheName).then(function (cache) {
			console.log('ios');
			return cache.addAll(filesToCache);
		})
	);
});
 
self.addEventListener("fetch", function (event) {
	console.log(event.request.url);
 
	event.respondWith(
		caches.match(event.request).then(function (response) {
			return response || fetch(event.request);
		})
	);
});
