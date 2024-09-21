'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "eb2ec8d9a6382e333ad0edb2dbbd33f3",
"assets/AssetManifest.bin.json": "a02f05ffef15c4019ed225db1ceb9e22",
"assets/AssetManifest.json": "729f71d9ff2d71462a54080ea639035d",
"assets/assets/edt.xlsx": "90846717f81bd47094a8d00c6fe87e4b",
"assets/FontManifest.json": "1b1e7812d9eb9f666db8444d7dde1b20",
"assets/fonts/MaterialIcons-Regular.otf": "5f39c34aac87cadf904d7a7dfb2ad611",
"assets/NOTICES": "c9b8bc7697f49a7c9f6e59adf8731dfc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "3759b2f7a51e83c64a58cfe07b96a8ee",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "85e318b0bca9b15ba0822f4c7ec0de70",
"/": "1a5f2898933331a9a6646d8e870c835f",
"main.dart.js": "c7b1acf5673c3d6a9ab7a650e06aa82e",
"manifest.json": "ccb3a723283b9dd482e9a38c9d3039e7",
"splash/img/dark-1x.png": "f8afc1222737210992b4003656041309",
"splash/img/dark-2x.png": "8ea9ddb980da949a2659470bb0e7f924",
"splash/img/dark-3x.png": "40f5fbb81d84becd84bb2a6ca8e9e01e",
"splash/img/dark-4x.png": "8609abf0971f28d9db24386a1c021a84",
"splash/img/light-1x.png": "f8afc1222737210992b4003656041309",
"splash/img/light-2x.png": "8ea9ddb980da949a2659470bb0e7f924",
"splash/img/light-3x.png": "40f5fbb81d84becd84bb2a6ca8e9e01e",
"splash/img/light-4x.png": "8609abf0971f28d9db24386a1c021a84",
"splash/splash.js": "c6a271349a0cd249bdb6d3c4d12f5dcf",
"splash/style.css": "b78354eb2b5660c45ba5780a7bb861f9",
"ustomiv2024/.git/COMMIT_EDITMSG": "6961d7607f40a71bc7f0111a7c0bb443",
"ustomiv2024/.git/config": "0e386c7729efde08193063b2e97d7ce2",
"ustomiv2024/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"ustomiv2024/.git/FETCH_HEAD": "78a3004a890c466a3f41ea7ad997453f",
"ustomiv2024/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"ustomiv2024/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"ustomiv2024/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"ustomiv2024/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"ustomiv2024/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"ustomiv2024/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"ustomiv2024/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"ustomiv2024/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"ustomiv2024/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"ustomiv2024/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"ustomiv2024/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"ustomiv2024/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"ustomiv2024/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"ustomiv2024/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"ustomiv2024/.git/index": "984a131135586344e56d7a2c2dc8ddf6",
"ustomiv2024/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"ustomiv2024/.git/logs/HEAD": "f6ddd26d5a8d3a647298d3882bc0e7fd",
"ustomiv2024/.git/logs/refs/heads/main": "11a72d91b295ea4b44ed6ca8de7a9388",
"ustomiv2024/.git/logs/refs/remotes/origin/HEAD": "c0d1372277e15ffca80c26004e8d95c4",
"ustomiv2024/.git/logs/refs/remotes/origin/main": "32e45ec6f7ee4ecb4116c43b5dc50b33",
"ustomiv2024/.git/logs/refs/stash": "348e9daaef57a4e271c2bfd6d342789b",
"ustomiv2024/.git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
"ustomiv2024/.git/objects/05/04464e668b6b5ef8afdcbd05c9c215f47d4cbd": "aa479d5055ac970ebb1d4fa57ccd0fe3",
"ustomiv2024/.git/objects/05/534b43693dcb6e9046de97b68d446ca86a90ef": "0203d28ae9dfb7fa310bb6f2f9caa56c",
"ustomiv2024/.git/objects/0a/1286d9b580d35af1d35307b02fef88cadea24e": "49839927a43edcd11ca47af741efc4b3",
"ustomiv2024/.git/objects/0c/bca88584fa4b9cc07332a5a73123b58b5e4cae": "5aee247656317adac0bfd1d5a5b1a99f",
"ustomiv2024/.git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
"ustomiv2024/.git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
"ustomiv2024/.git/objects/0f/cf6b44a53a7c78c5305fb574b38aaa7262388c": "15efb6163e18f44927685b293b8be7c0",
"ustomiv2024/.git/objects/11/d5755518c1da86cb2bbeb3ec6e373ab31d5fab": "e8ab511cd6d6908a6788a4a2538a99c1",
"ustomiv2024/.git/objects/15/dd16c176876ce3bca576d971b8bb50fd0c366a": "30a35caa5583957e8fccd3c031e04bc5",
"ustomiv2024/.git/objects/19/49491fe9516a8989f036896a3e154583671459": "c597fc5e3d4267aa11ceba8cade49846",
"ustomiv2024/.git/objects/1a/2dcefc0ab07ba139aa9ffcbbf6b7c503a0789f": "f692e11e670bc0a97c2a18f39b1f7444",
"ustomiv2024/.git/objects/1a/b40b5ed8cf1c9d5d918b2df3b6585ff97c92ac": "8a6c5f931c8636e19c93dd9d0634636d",
"ustomiv2024/.git/objects/1e/727aefc44c39e1197960ea9579a496dc469929": "f822872fb8623c94de480b45c918a3e8",
"ustomiv2024/.git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
"ustomiv2024/.git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
"ustomiv2024/.git/objects/20/cfcb4ce93d6e10a529a8cda4cf444cb862b7d8": "abc4f7185fe052d5500719ab80314dae",
"ustomiv2024/.git/objects/24/78a8496d1ea10644aa653a5569bf2f19658b1f": "80c79976815dfa6f0dd114325e307c87",
"ustomiv2024/.git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
"ustomiv2024/.git/objects/2d/55967eb61dd4e0ae88c27af4dcebac628a3c63": "0305c03a3a25712218444f0dae02252a",
"ustomiv2024/.git/objects/2e/aac28aff263c2441e9102548a6f879147d1aac": "7d2f55171e464fcfca7400069ae7662c",
"ustomiv2024/.git/objects/2f/b9d87ae6a44150bb6bb574d2fb784fe1e8e7df": "0f5ea54c8863cd579e87f4c96415d7c3",
"ustomiv2024/.git/objects/37/21ff64034cda4d0ee4f8c1f941155b602951c8": "b753a9daa68ff81d3db607bf86e65ad3",
"ustomiv2024/.git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
"ustomiv2024/.git/objects/3b/01b97110dd55a2b70f9f4e98ba788be6d7081d": "12c9a2c2d0ffc093a38cb1e1fe35e06f",
"ustomiv2024/.git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
"ustomiv2024/.git/objects/44/d0f5f2670b2e0cb2230eddc98407ec0d7ab186": "4d625a77384896d4f5616ce63b989707",
"ustomiv2024/.git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
"ustomiv2024/.git/objects/48/5331399024fb59e61924ee26e4c5172ac9ea53": "d4d9bf702f9dbe77d02ff1cd9fcc3d54",
"ustomiv2024/.git/objects/49/ed2e52731f434bc64a39de60c19ab28edb9153": "9327322d589fbabddff88c31df06b094",
"ustomiv2024/.git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
"ustomiv2024/.git/objects/52/b8f4edcd552daad699bb6c3dd51a16268302ba": "1a59bb6f149e6e4da08e73bee2e69cec",
"ustomiv2024/.git/objects/5f/5defeaced320202c64d808d029567a2ed9e381": "d4a254f88162cae07019efef81846a58",
"ustomiv2024/.git/objects/67/2e9e49d2f0c4c8aa44b496beb98f32cb36720e": "8b66be9a4797f8f3922fb5816494c68e",
"ustomiv2024/.git/objects/6f/9509c88bed7080d496fc5e1d87a9315e30549d": "c02716d7aaed30ce1c5697a2fb40d317",
"ustomiv2024/.git/objects/72/bd2ed7fd3da448ff535261c512c784ee9b433e": "db3348cba4af3dfbf53bb80bda689567",
"ustomiv2024/.git/objects/75/7e2e61ba2b24b94e30a2490103a4eb09c60ff5": "c886352518f96786dff2e89754449a45",
"ustomiv2024/.git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
"ustomiv2024/.git/objects/86/dfb38cebecf20303216750e93a29335b514189": "2d9343c5a9b63d50b1bd8006e50c8124",
"ustomiv2024/.git/objects/87/09aab60b8e01468073293774f1441d2d65dc26": "150273880f6cbb2c330e6c05d3c99b8d",
"ustomiv2024/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"ustomiv2024/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"ustomiv2024/.git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
"ustomiv2024/.git/objects/96/da97b3558a85e66300d48058bc203890308806": "4fd4875fd3344e28426290d9e5e8c2c0",
"ustomiv2024/.git/objects/a6/5cebad440096d495954fc6f206b626dc5ec981": "814b3175bf7dbd0445b1fb63c5fae16a",
"ustomiv2024/.git/objects/b2/fe5e3342e937f346624598b389c7bfb6406db3": "6dafaa061c4cdbf2efc8520125eb61e7",
"ustomiv2024/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"ustomiv2024/.git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
"ustomiv2024/.git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
"ustomiv2024/.git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
"ustomiv2024/.git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
"ustomiv2024/.git/objects/c4/a70556e0803ccffb6b728e76b56b816dfe173d": "d15c55418c082bdfb520d3e779d59fc6",
"ustomiv2024/.git/objects/ce/2d0d512c344c19aa25a8423710a24b8a7702e0": "5502660cbc4c8eef22fd92630b3e2e2c",
"ustomiv2024/.git/objects/d0/129298267336f139703202a9948968c78565d7": "8e37dba588cc2078185721ff2da47d4e",
"ustomiv2024/.git/objects/d6/257070147eb3dc3cd87dcf11e3a0218202ad07": "4b1a5aaaac7eea5243af59d2c3da4607",
"ustomiv2024/.git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
"ustomiv2024/.git/objects/d7/bae1fa06c9f572c0b987f558a41b5952d67a0d": "8438d81342cae82bad956a189d4808e0",
"ustomiv2024/.git/objects/dc/508baf399cfbea32f51b9542fe69f91cfae884": "b96c46ed4195adad3b35a2d13f3b26e1",
"ustomiv2024/.git/objects/dd/5edb1a7e46855a8138b7028913a7aed7e07a26": "15779bbfbf84adb4b688dcd6964caa7f",
"ustomiv2024/.git/objects/df/e0770424b2a19faf507a501ebfc23be8f54e7b": "76f8baefc49c326b504db7bf751c967d",
"ustomiv2024/.git/objects/e3/6db3beda892b66550e67bb1048b91368d6e2e0": "62cdb0f8168c3a46843c97c85cdc8c3b",
"ustomiv2024/.git/objects/ea/460df58b998254765e8f563d354afc5355af5b": "bd114f0a33ce8d242ed31f2fc7e71143",
"ustomiv2024/.git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
"ustomiv2024/.git/ORIG_HEAD": "8ad8b87a5173a7cb6078b11e3aba48f5",
"ustomiv2024/.git/refs/heads/main": "c958c9cc150cf0446da96cecd339d72c",
"ustomiv2024/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"ustomiv2024/.git/refs/remotes/origin/main": "c958c9cc150cf0446da96cecd339d72c",
"ustomiv2024/.git/refs/stash": "e0ffe01cdbb18144cce2159b33f54eec",
"ustomiv2024/assets/AssetManifest.bin": "eb2ec8d9a6382e333ad0edb2dbbd33f3",
"ustomiv2024/assets/AssetManifest.bin.json": "a02f05ffef15c4019ed225db1ceb9e22",
"ustomiv2024/assets/AssetManifest.json": "729f71d9ff2d71462a54080ea639035d",
"ustomiv2024/assets/assets/edt.xlsx": "90846717f81bd47094a8d00c6fe87e4b",
"ustomiv2024/assets/FontManifest.json": "1b1e7812d9eb9f666db8444d7dde1b20",
"ustomiv2024/assets/fonts/MaterialIcons-Regular.otf": "5f39c34aac87cadf904d7a7dfb2ad611",
"ustomiv2024/assets/NOTICES": "b2a1b2a35808cee360f31c2e0b8211dc",
"ustomiv2024/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"ustomiv2024/assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "3759b2f7a51e83c64a58cfe07b96a8ee",
"ustomiv2024/assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"ustomiv2024/assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"ustomiv2024/assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"ustomiv2024/assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"ustomiv2024/assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"ustomiv2024/canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"ustomiv2024/canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"ustomiv2024/canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"ustomiv2024/canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"ustomiv2024/canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"ustomiv2024/canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"ustomiv2024/canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"ustomiv2024/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"ustomiv2024/flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"ustomiv2024/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"ustomiv2024/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"ustomiv2024/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"ustomiv2024/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"ustomiv2024/index.html": "1a5f2898933331a9a6646d8e870c835f",
"ustomiv2024/main.dart.js": "9b4a392bb505834f18bf50ff569f1ac9",
"ustomiv2024/manifest.json": "ccb3a723283b9dd482e9a38c9d3039e7",
"ustomiv2024/version.json": "0af129806b0c30eaf91b5ab5ed65b3e7",
"version.json": "0af129806b0c30eaf91b5ab5ed65b3e7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
