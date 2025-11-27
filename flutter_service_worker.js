'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "6f05830ebc9b005163f444481c192104",
".git/config": "45e7393095bab6d3801353da3166a411",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "e22481f0aa3a78336f1e22282a028029",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "c89b3ffdbc20cf56f114035f6b89c74e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "95be919ec7d969cbbd2da425fd21560b",
".git/logs/refs/heads/master": "95be919ec7d969cbbd2da425fd21560b",
".git/logs/refs/remotes/origin/HEAD": "438cd02335a1b3b0ab6f1b514ad8f4a0",
".git/logs/refs/remotes/origin/master": "1767e67b25bd5deba67234c52259a932",
".git/objects/01/6061ca5c762837b0dff5c576a7e4ce47914e7f": "13d75fd0194c6a4669ac22cf16d5c096",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/08/6ce98bc90c659a0391927807c86ed614013934": "91113e9ffdeee97b69800000f065a0fd",
".git/objects/13/410c0eb7e0ef0709e0b086053d319a7a0e2722": "9e4da0310be0dfb6751d0e05d0120bb9",
".git/objects/14/c0ce0d24c64b34622dd799870ff5fb9f8d31bb": "30583a5e9ba51a90d67eb804346fcdf4",
".git/objects/15/23932bb11ada739a5b90bd97d6df9e94a45b5d": "a97c8c3808cbcf37adc807dafe5e1a96",
".git/objects/19/803dae9f6b245be381027713a86c40e9b33ce3": "5147f173ef6420faf04955f369650c82",
".git/objects/22/18b15dcd83c7b06c75b3ef7ca0e0d18d0bdc3f": "22fbb5364fe3a6a896b528db655809f6",
".git/objects/27/70e7f1dbc0e9c19bb2cd9ad5445876c587197a": "4859f32dab183fec6fed71698770559f",
".git/objects/2b/aa57bb0292548a90c3c1a3b2b06225bd084710": "0c6b437e39f05938588efe0735c28c78",
".git/objects/2c/2e3f6f27dca1c34aea33dff388854363e9445d": "174e9cb83f8b77d53c5e07d1070b7cd8",
".git/objects/2d/5cc977428bbc6b89176f7fecbab17c37555b2b": "d1f18e69a23eca7733b9a8374ccea67a",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3f/05ef4de35dab632cacf5de9a36471552b53637": "46b8f33e3e0760f53bda794081025f06",
".git/objects/40/e3d16e38375f4f595d07a65d15542c4395bc37": "40b79d366dc89aa887b50ee443046d5d",
".git/objects/44/c200036eceebe989f28d0091e71cca56cc0ebd": "bf3a1c0edbef0ace1f03cc145d3fb11c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4d/0a487dedc6a18f6111550b91572ff976bc0ba2": "9765d8bf9839d2f75f554e32bfe040c4",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/54/ca11d391735c11503c03006665322d04fca5ec": "6033208fa70d726f994c29e690690ab6",
".git/objects/57/b806520072a6710937617a5b4b38f5cd228c90": "cf96e620232b173174237b4c8ee89ec4",
".git/objects/5a/8d4bac2dc48a0097c5411b0611241c0f077a8a": "4daf306086fd050901ee824e54bf6fa6",
".git/objects/5d/0f9926993dc1031149a2bbd770ddb5dc00b357": "41a905bef3fffa7a1fe037b2e779252e",
".git/objects/5d/631c01e45ca0f3680e3025fea3486f370b4489": "d5dd9df5f0fd48cb460eb73fa01d49fc",
".git/objects/5e/719cb8a25dd0ad5a3ace2c89961255f519a33c": "1a8e777326ff8e1a2ee031a548acbe9c",
".git/objects/5e/7d16c39f40762999b3a708253dca2feeb2115c": "e642841d77d2cbf79ba31d110cda867f",
".git/objects/62/fc7340cda970cb5367e2eee6a716d3fb393a37": "71a0c563e5d2d8e9f05a065aef577c00",
".git/objects/63/8a55788245ef6c9276cab4e7bc26bd794bc1fa": "a8dd02dbd221fbb24af4bb61a04b9a33",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/69/7a832f897bea2992030299442d15b0b354df97": "87b8019217c5588714f85933ff7c459f",
".git/objects/69/8958ad9a3bc49f81021ece533569c35ee92ccf": "3e906a1a29a62ae13d6f06a53abaf090",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6c/7dc28b4d0a53eb7adc62423840bc2ccbffcb91": "370e0a08840367e391ebe116a8503c44",
".git/objects/6c/d93f073a1ed546fc15c0cc91d70208a6d0b178": "7e2488b88ec3eba97d79b5f9532cfcc5",
".git/objects/6e/2464fd1f242a4eff20a534aed68a67a1bd5dae": "b956b6a7ca53821f44fb7685cafa3965",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/6f/ff67c7b21c0abc3ffc0928c4e0099f16b1f00d": "96c5fad49944fbff364dcac0896ee525",
".git/objects/76/00ea56b7ed2ef98cd2d9c257c323580d5d3dd6": "92fbdce016c411965da7fee7e3bc82bd",
".git/objects/79/a4c438032406cca82274f96d5b9fc0e8cc4861": "f4b4483d2de90c7570de41de30d93cf0",
".git/objects/7b/2cb39ce30cf1fde30949a81dc4b64f0896789a": "9513818d85a69357eb4aa30d651858fc",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/82/0b1fa29e98502d48865c4c412a54a72fadda95": "ef54f5732b8ea6be6b91f02bdac0da0c",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/85/844bc759819714cb4bbec0db8f0afbc02b08d4": "b41bb3650932a7307c7a8e7342d35011",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/549f61da79df1a4ae481a0532a54c57b59b8fb": "4dc20bbbb96d7bbb3ced36d4be6360de",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/8f/39c70103cafbdac4171bc8fc1368a6b832af88": "f2c774d55652de46fa621c25b76422a2",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/92/0fc81e4bf623bcba9d0d9f46167320e6cdf302": "6b345bd0a7fe889ffad57a4d564b1a8d",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/95/7c97a084da9f111c5fd0c1069964be24947941": "6e5eaadb9905113669b41d1370120127",
".git/objects/98/e4897080a0e080664426dd2ab3bdc0d783fe63": "ead5365a51e09243d6cf62eeec5aa6d7",
".git/objects/9e/6cc76890fd90f079666a8778529650962a6532": "5692032c5220eb727d5d502338095fbd",
".git/objects/9f/0c647f330e16bc51fdeabf0cac33b6f6178799": "651a7d5a5f477ee959eb7c3eb87f988b",
".git/objects/a3/69b137d5ae8ce325684b4dd165012cc3393926": "cf1f8bb4e9bcab59a67014da68a78d65",
".git/objects/a6/7fc23fbc9f9d53d134569929ea6d27d822ce0b": "9006c85ba3b2c06afb4f872331403b6d",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/b1/2581c74a7cf2eb5b6b3b945b83fc198f170f23": "0874ffddcd4a95b623ef86ef2e852609",
".git/objects/b6/c758161f86c8207bddde85ee60ce06af1d1075": "d22f59ce280867f729959909f84c562a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/c4b8da9d0c466bc0e9c22b75dbdade2fda5acf": "87b0ad78282854bd733ebdc12d9757df",
".git/objects/b8/9240c70d3e4c10291e2d8df82bb4c2d8b9c295": "9b7b9f8e175a3ee7179a65e8a094b418",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/bc/663846b504d35724e51d5e6800ed44601d51c7": "9b5dd70b26393a3f4a6f0dffa4336162",
".git/objects/c1/cc60101732691039b989a9df20d5bc63915ded": "dd18007185da59b0610b11f0f0d6bb38",
".git/objects/c5/0c9980527c54ac698bc6f47a42e304ca83c671": "ca7d7d84bdf9d070bf29fb3301d436b9",
".git/objects/c7/747e995065fde626c69f58e638194452b6dde2": "337e1c3b59b06a5f6d7cd4b2d86e2d47",
".git/objects/c8/0ba944901a50ad2496a74ed67d3b38a9ce1b0d": "ab5301675343bfa4f0d6a05a93613437",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/cb/c3d26f026fbff79d8b831da68c88337b9670fa": "4929fadee636c2d7e9dc69a1f3bfa52f",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/71fdb635798921db03e9ff4fb38d77b337a8db": "9032e9a6e1c23425a6fb530c9234cc58",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/df/cbbfd4246451eccf8a592962dc887a32b11822": "9f6944c439fc4fa81f651c265da89707",
".git/objects/e0/24173c967a4d0b02d9402cbb6de82ba3d53e2c": "fe8790c89e857dbd0be59cd54e27f082",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ea/eb1cc10b04ab5c3142ff20bb529d5c22e4e443": "bf435fd5c843a247d00c89be636fc872",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/532b5e59715433022f65a3e1337744545147f3": "91b168d2b179061b36da6d5e25471aff",
".git/objects/f1/25e7f1d74fc65dfc00b19bab96b4f9c39c78d1": "fb847753f24cf1c33935d31abc1be298",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f3/dbe344de3e54eb1cb85952d9076dc14b0c9fa5": "6516777b4521358960f1aea39c1ca96e",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/e6dddd76ef4006dd3686e9b8622170f5d4e7b9": "81b1a61f7c369b7a7e935bf8f1e7827c",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/fb/eb5da70e912ec8bfe4bbaaeb8de2fa1c3c8ece": "6df65ad107cb8af4d93381f5154a988b",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/refs/heads/master": "fd43544cd7bd2df03dc2d1cdcc764f78",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "fd43544cd7bd2df03dc2d1cdcc764f78",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "3d4967cf017ac4fa455f9f37039ed575",
"assets/NOTICES": "7e66e2382d38636c65a8704910717f16",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"firebase-messaging-sw.js": "6f16fa8acae05d35fe100531e7fd7580",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "570e115c404221cfe0d9645c40847fbb",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "985c634bb8dd676b0ca46975d01451cc",
"/": "985c634bb8dd676b0ca46975d01451cc",
"main.dart.js": "a5088378cfe21e22b6edd618e2c043b7",
"manifest.json": "d11c751c6ccbfe8d9a2eef8b54f9f88e",
"version.json": "7e8858d06e92553de411851b296badad"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
